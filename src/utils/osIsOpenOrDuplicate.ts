import sql from 'mssql';
import dotenv from 'dotenv';
import dbSmartConfig from '../config/dbSmartConfig';
import { UpdateOrInsertLogIntoDB } from './updateOrInsertLogIntoDB';

dotenv.config();

interface OsIsOpenOrDuplicateProps {
  pacienteId: number; // O ID do paciente
  exameId: string;
  dataExame: any
}

export async function OsIsOpenOrDuplicate({ pacienteId, exameId, dataExame }: OsIsOpenOrDuplicateProps) {
  try {
    const pool = await sql.connect(dbSmartConfig);

    const startDate = new Date(dataExame);
    startDate.setHours(0, 0, 0, 0); // Define a hora para 00:00:00.000
    const endDate = new Date(dataExame);

    const startDateString = startDate.toISOString().slice(0, 19).replace('T', ' ');
    const endDateString = endDate.toISOString().slice(0, 19).replace('T', ' ');

    const checkQuery = `
    USE ${process.env.DB_SMART_DATABASE};
      SELECT COUNT(*) AS recordCount
      FROM smm
      LEFT JOIN rcl ON rcl_pac = smm_pac_reg
                      AND rcl_tpcod = smm_tpcod
                      AND rcl_cod = smm_cod
                      AND rcl_osm_serie = smm_osm_serie
                      AND rcl_osm = smm_osm
                      AND rcl_smm = smm_num
      LEFT JOIN pac ON smm_pac_reg = pac_reg
      WHERE smm_cod = '41501012'
        AND smm_exec = 'A'
        AND smm_str = 'OF'
        AND rcl_stat = 'A'
        AND pac_reg = @pacienteId
        AND SMM_DTHR_LANC >= '${startDateString}'
        AND SMM_DTHR_LANC <= '${endDateString}'
    `;

    const countResult = await pool.request()
      .input('pacienteId', sql.Int, pacienteId)
      .query(checkQuery);

    console.log('countResult:', countResult);

    // console.log('countResult 22:', countResult.recordsets);

    // const recordCount = countResult.recordset[0].recordCount;
    // console.log('recordCount', recordCount)

    if (countResult.rowsAffected[0] === 0) {
      UpdateOrInsertLogIntoDB({ exameId: exameId, temExameSolicitado: false, exameDuplicado: false })
      return 0
    } else if (countResult.rowsAffected[0] === 1) {
      UpdateOrInsertLogIntoDB({ exameId: exameId, temExameSolicitado: true, exameDuplicado: false })
      return 1
    } else if (countResult.rowsAffected[0] > 1) {
      UpdateOrInsertLogIntoDB({ exameId: exameId, temExameSolicitado: true, exameDuplicado: true })
      throw new Error('OS duplicada.');
    }
  } catch (error) {
    console.error('Erro ao verificar e atualizar exame:', error);
    return false;
  }
}
