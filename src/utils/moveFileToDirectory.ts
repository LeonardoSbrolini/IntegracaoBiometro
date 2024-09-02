import fs from 'fs';
import path from 'path';
import { convertXmlToJson } from './convertXmlToJson';
import { convertJsonToSmartModel } from './converJsonToSmartModel';
import { ValidateXML } from './validateXml';
import { extractNumbersFromFileName } from './extractNumbersFromFileName';
import { UpdateOrInsertLogIntoDB } from './updateOrInsertLogIntoDB';
import { ValidatePaciente } from './validatePaciente';
import { OsIsOpenOrDuplicate } from './osIsOpenOrDuplicate';
import { UpdateDataIntoDbSmart } from './updateDataIntoDbSmart';

export async function moveFileToDirectory(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();
  const fileName = path.basename(filePath);

  let targetDir = '';

  switch (ext) {
    case '.xml':
      const ExameId = extractNumbersFromFileName(fileName)
      console.log('ExameId', ExameId)
      if (ValidateXML(fileName)) {
        await UpdateOrInsertLogIntoDB({ exameId: ExameId, xmlValido: true })
        console.log('xml válido')
      } else {
        console.log('O arquivo não será processado porque o XML é inválido.', fileName);
        await UpdateOrInsertLogIntoDB({ exameId: ExameId, xmlValido: false })
        targetDir = process.env.FATAL_ERROR_DIRECTORY!;
        break;
      }
      try {
        const jsonData: any = await convertXmlToJson(filePath); // Converte o XML para JSON
        UpdateOrInsertLogIntoDB({ exameId: ExameId, exameJson: JSON.stringify(jsonData) }) // UPDATE exameJson

        const FormatedName = `${jsonData.Ophthalmology.Common.Patient.FirstName} ${jsonData.Ophthalmology.Common.Patient.MiddleName} ${jsonData.Ophthalmology.Common.Patient.LastName}`;
        const FormatedExameDate = new Date(`${jsonData.Ophthalmology.Common.Date} ${jsonData.Ophthalmology.Common.Time}`);
        console.log('teste', FormatedExameDate)
        FormatedExameDate.setHours(FormatedExameDate.getHours() - 3); // Subtrai 3 horas

        const adjustedEndDate = new Date(FormatedExameDate); // Subtrai 3 horas
        const DataFormatada = adjustedEndDate.toISOString().slice(0, 19).replace('T', ' ');


        const validatePaciente: any = await ValidatePaciente({ pacienteId: jsonData.Ophthalmology.Common.Patient.ID, pacienteNome: FormatedName, pacienteDtNasc: jsonData.Ophthalmology.Common.Patient.DOB })
        if (validatePaciente) {
          UpdateOrInsertLogIntoDB({ exameId: ExameId, pacienteValido: true, pacienteId: jsonData.Ophthalmology.Common.Patient.ID, pacienteNome: FormatedName, pacienteDtNasc: jsonData.Ophthalmology.Common.Patient.DOB })
        } else {
          console.log('Não exite nenhum paciente.', fileName);
          UpdateOrInsertLogIntoDB({ exameId: ExameId, pacienteValido: false })
          targetDir = process.env.FATAL_ERROR_DIRECTORY!;
          break;
        }

        const jsonFormatedToSmartModel = await convertJsonToSmartModel(jsonData);
        UpdateOrInsertLogIntoDB({ exameId: ExameId, exameSmartModel: jsonFormatedToSmartModel }) // UPDATE exameSmartModel


        const haveOSAndNotDuplicate = await OsIsOpenOrDuplicate({ pacienteId: jsonData.Ophthalmology.Common.Patient.ID, exameId: ExameId, dataExame: FormatedExameDate.toISOString() })
        UpdateOrInsertLogIntoDB({ exameId: ExameId, dataExame: DataFormatada })

        if (haveOSAndNotDuplicate === 0) {
          targetDir = process.env.FATAL_ERROR_DIRECTORY!;
          break;
        } else if (haveOSAndNotDuplicate === 1) {
          // update no SMART
          const UpdateSmart = await UpdateDataIntoDbSmart({ paciente_id: jsonData.Ophthalmology.Common.Patient.ID, exameSmartModel: jsonFormatedToSmartModel, dataExame: FormatedExameDate.toISOString() })

          if (UpdateSmart) {
            targetDir = process.env.XML_DIRECTORY!;
            break;
          } else {
            targetDir = process.env.ERROR_DIRECTORY!;
            break;
          }

          break
        } else {
          targetDir = process.env.ERROR_DIRECTORY!;
          break;
        }

      } catch (error: any) {
        console.error(`Erro ao converter XML para JSON: ${error.message}`);
        // targetDir = process.env.ERROR_DIRECTORY!;
        break;
      }
    case '.jpg':
      targetDir = process.env.JPG_DIRECTORY!;
      break;
    case '.xsl':
      targetDir = process.env.XSL_DIRECTORY!;
      break;
    default:
      console.log(`Extensão não reconhecida: ${ext}`);
      targetDir = process.env.ERROR_DIRECTORY!;
      break; // Saia da função se a extensão não for reconhecida
  }

  if (targetDir) {
    const targetPath = path.join(targetDir, fileName);

    try {
      fs.renameSync(filePath, targetPath);
      console.log(`Arquivo movido: ${fileName} para ${targetDir}`);
    } catch (error) {
      console.error(`Erro ao mover o arquivo ${fileName} para ${targetDir}: ${error}`);
    }
  } else {
    console.error(`Erro ao mover o arquivo ${fileName}${ext}`);
  }
}
