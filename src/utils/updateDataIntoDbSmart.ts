import sql from 'mssql';
import dotenv from 'dotenv';
import dbSmartConfig from '../config/dbSmartConfig';

dotenv.config();

interface UpdateDataIntoDbSmartProps {
  paciente_id: number;
  dataExame: any;
  exameSmartModel: string;
}

export async function UpdateDataIntoDbSmart(data: UpdateDataIntoDbSmartProps) {
  try {
    const pool = await sql.connect(dbSmartConfig);

    const startDate = new Date(data.dataExame);
    startDate.setHours(0, 0, 0, 0); // Define a hora para 00:00:00.000
    const endDate = new Date(data.dataExame);

    const startDateString = startDate.toISOString().slice(0, 19).replace('T', ' ');
    const endDateString = endDate.toISOString().slice(0, 19).replace('T', ' ');

    console.log('paciente_id', data.paciente_id);
    console.log('startDateString', startDateString);
    console.log('endDateString', endDateString);

    // Usar parâmetros ao invés de interpolação direta no SQL
    const updateQuery = `
      USE ${process.env.DB_SMART_DATABASE};
      UPDATE rcl
      SET rcl_stat = 'X',
          rcl_txt = @exameSmartModel
      WHERE rcl_pac = @paciente_id
        AND rcl_tpcod = 'S'
        AND rcl_cod = '41501012'
        AND rcl_dthr >= @startDateString
        AND rcl_dthr <= @endDateString;
    `;

    await pool.request()
      .input('paciente_id', sql.Int, data.paciente_id)
      .input('exameSmartModel', sql.NVarChar, data.exameSmartModel)
      .input('startDateString', sql.NVarChar, startDateString)
      .input('endDateString', sql.NVarChar, endDateString)
      .query(updateQuery);

    console.log('sucesso');
    return true;
  } catch (error) {
    console.error('Erro ao inserir os dados do exame:', error);
    return false;
  }
}
