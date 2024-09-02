import sql from 'mssql';
import dbSmartConfig from '../config/dbSmartConfig';
import dotenv from 'dotenv';

dotenv.config();

interface ValidatePacienteProps {
  pacienteId: number;
  pacienteNome: string;
  pacienteDtNasc: Date;
}

export async function ValidatePaciente({ pacienteId, pacienteNome, pacienteDtNasc }: ValidatePacienteProps): Promise<boolean> {
  console.log('paciente ID', pacienteId);
  console.log('pacienteNome', pacienteNome);
  console.log('pacienteDtNasc', pacienteDtNasc);

  try {
    await sql.connect(dbSmartConfig);

    const query = `
      USE ${process.env.DB_SMART_DATABASE!}
      SELECT COUNT(*) as count
      FROM PAC
      WHERE pac_reg = @pacienteId
        AND pac_nome = @pacienteNome
        AND pac_nasc = @pacienteDtNasc
    `;
    // AND pac_nome = @pacienteNome
    //     AND pac_nasc = @pacienteDtNasc

    const request = new sql.Request();
    request.input('pacienteId', sql.Int, pacienteId);
    request.input('pacienteNome', sql.NVarChar, pacienteNome);
    request.input('pacienteDtNasc', sql.DateTime, pacienteDtNasc);

    const result = await request.query(query);
console.log('deu certo a validação: ', result.recordset[0].count > 0)
    return result.recordset[0].count > 0;
  } catch (error) {
    console.error('Erro ao verificar se o paciente existe:', error);
    throw error; // Re-lançar o erro para ser tratado onde a função é chamada
  }
}
