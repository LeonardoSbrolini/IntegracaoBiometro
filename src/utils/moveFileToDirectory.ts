import fs from 'fs';
import path from 'path';
import { convertXmlToJson } from './convertXmlToJson';
import { InsertDataIntoDB } from './insertDataIntoDB';
import { convertJsonToSmartModel } from './converJsonToSmartModel';

export async function moveFileToDirectory(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();
  const fileName = path.basename(filePath);

  let targetDir = '';

  switch (ext) {
    case '.xml':
      try {
        const jsonData: any = await convertXmlToJson(filePath); // Converte o XML para JSON
        const jsonFormatedToSmartModel = await convertJsonToSmartModel(jsonData);

        const FormatedName = `${jsonData.Ophthalmology.Common.Patient.FirstName} ${jsonData.Ophthalmology.Common.Patient.MiddleName} ${jsonData.Ophthalmology.Common.Patient.LastName}`;
        const FormatedExameDate = new Date(`${jsonData.Ophthalmology.Common.Date} ${jsonData.Ophthalmology.Common.Time}`);
        FormatedExameDate.setHours(FormatedExameDate.getHours() - 3); // Subtrai 3 horas

        const DataToInsert = {
          paciente_id: jsonData.Ophthalmology.Common.Patient.ID,
          paciente_nome: FormatedName,
          paciente_dataNascimento: jsonData.Ophthalmology.Common.Patient.DOB,
          exame_data: FormatedExameDate.toISOString(), // Formata como ISO string
          exame_json: JSON.stringify(jsonData), // Converte o JSON para string
          exame_smart_formatado: jsonFormatedToSmartModel
        };

        console.log('data to insert: ', DataToInsert);
        const insertIntoDB = await InsertDataIntoDB(DataToInsert);
        console.log('insert Into DB', insertIntoDB);
        if (insertIntoDB == 'error') {
          targetDir = process.env.ERROR_DIRECTORY!;
          break
        }

        targetDir = process.env.XML_DIRECTORY!;
        break;
      } catch (error: any) {
        console.error(`Erro ao converter XML para JSON: ${error.message}`);
        targetDir = process.env.ERROR_DIRECTORY!;
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
