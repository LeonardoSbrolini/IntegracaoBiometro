import sql, { pool } from 'mssql';
import dbConfig from '../dbConfig';

interface InsertDataIntoDBProps {
  paciente_id: number;
  paciente_nome: string;
  paciente_dataNascimento: string;
  exame_data: string;
  exame_json: string;
  exame_smart_formatado: string;
}

export async function InsertDataIntoDB(data: InsertDataIntoDBProps) {
  try {
    await sql.connect(dbConfig);

    await sql.query`
      INSERT INTO biometro
      (
        paciente_id, 
        paciente_nome, 
        paciente_dataNascimento, 
        exame_data, 
        exame_json, 
        exame_smart_formatado,
        status
      )
      VALUES 
      (
        ${data.paciente_id},
        ${data.paciente_nome},
        ${data.paciente_dataNascimento},
        ${data.exame_data},
        ${data.exame_json},
        ${data.exame_smart_formatado},
        'importado'
      )
    `;
    console.log('sucesso')
    return 'success'
  } catch (error) {
    console.error('Erro ao inserir os dados do exame:', error);
    return 'error';
  }
}
