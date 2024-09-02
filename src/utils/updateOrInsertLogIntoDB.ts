import sql from 'mssql';
import dbHMConfig from '../config/dbHMConfig';
import dotenv from 'dotenv';

dotenv.config();

interface UpdateOrInsertLogIntoDBProps {
  exameId: string; // VARCHAR(MAX)
  xmlValido?: boolean; // BIT
  pacienteValido?: boolean; // BIT
  temExameSolicitado?: boolean; // BIT
  exameDuplicado?: boolean; // BIT
  realizadoUpdate?: boolean; // BIT
  exameJson?: string; // NVARCHAR(MAX)
  exameSmartModel?: string; // NVARCHAR(MAX)
  pacienteId?: number; // INT
  pacienteNome?: string; // NVARCHAR(255)
  pacienteDtNasc?: any; // DATETIME
  dataExame?: any; // DATETIME
}

interface QueryParam {
  type: any;
  value: any;
}

export async function UpdateOrInsertLogIntoDB(data: UpdateOrInsertLogIntoDBProps) {
  try {
    const pool = await sql.connect(dbHMConfig);

    // Construir a parte da consulta SQL dinamicamente
    let updateQuery = `
      USE ${process.env.DB_HM_DATABASE};
      UPDATE logBiometro
      SET
    `;
    const params: Record<string, QueryParam> = {};
    const queryParts: string[] = [];

    if (data.xmlValido !== undefined) {
      queryParts.push("xmlValido = @xmlValido");
      params.xmlValido = { type: sql.Bit, value: data.xmlValido };
    }
    if (data.pacienteValido !== undefined) {
      queryParts.push("pacienteValido = @pacienteValido");
      params.pacienteValido = { type: sql.Bit, value: data.pacienteValido };
    }
    if (data.temExameSolicitado !== undefined) {
      queryParts.push("temExameSolicitado = @temExameSolicitado");
      params.temExameSolicitado = { type: sql.Bit, value: data.temExameSolicitado };
    }
    if (data.exameDuplicado !== undefined) {
      queryParts.push("exameDuplicado = @exameDuplicado");
      params.exameDuplicado = { type: sql.Bit, value: data.exameDuplicado };
    }
    if (data.realizadoUpdate !== undefined) {
      queryParts.push("realizadoUpdate = @realizadoUpdate");
      params.realizadoUpdate = { type: sql.Bit, value: data.realizadoUpdate };
    }
    if (data.exameJson !== undefined) {
      queryParts.push("exameJson = @exameJson");
      params.exameJson = { type: sql.NVarChar(sql.MAX), value: data.exameJson };
    }
    if (data.exameSmartModel !== undefined) {
      queryParts.push("exameSmartModel = @exameSmartModel");
      params.exameSmartModel = { type: sql.NVarChar(sql.MAX), value: data.exameSmartModel };
    }
    if (data.pacienteId !== undefined) {
      queryParts.push("pacienteId = @pacienteId");
      params.pacienteId = { type: sql.Int, value: data.pacienteId };
    }
    if (data.pacienteNome !== undefined) {
      queryParts.push("pacienteNome = @pacienteNome");
      params.pacienteNome = { type: sql.NVarChar(255), value: data.pacienteNome };
    }
    if (data.pacienteDtNasc !== undefined) {
      queryParts.push("pacienteDtNasc = @pacienteDtNasc");
      params.pacienteDtNasc = { type: sql.DateTime, value: data.pacienteDtNasc };
    }
    if (data.dataExame !== undefined) {
      queryParts.push("dataExame = @dataExame");
      params.dataExame = { type: sql.DateTime, value: data.dataExame };
    }

    updateQuery += queryParts.join(', ') + " WHERE exameId = @exameId";

    const request = pool.request()
      .input('exameId', sql.VarChar, data.exameId);

    // Adicionar parâmetros dinamicamente
    for (const [key, param] of Object.entries(params)) {
      request.input(key, param.type, param.value);
    }

    // console.log("Query to execute:", updateQuery); // Log a consulta SQL
    // console.log("Parameters:", params);

    const result = await request.query(updateQuery);

    // Se nenhuma linha foi atualizada, então insere um novo registro
    if (result.rowsAffected[0] === 0) {
      const insertQuery = `
        USE ${process.env.DB_HM_DATABASE};
        INSERT INTO logBiometro (
          exameId, xmlValido, pacienteValido, temExameSolicitado,
          exameDuplicado, realizadoUpdate, exameJson,
          exameSmartModel, pacienteId, pacienteNome, pacienteDtNasc, dataExame
        ) VALUES (
          @exameId, @xmlValido, @pacienteValido, @temExameSolicitado,
          @exameDuplicado, @realizadoUpdate, @exameJson,
          @exameSmartModel, @pacienteId, @pacienteNome, @pacienteDtNasc, @dataExame
        )
      `;

      // console.log("Query to execute for insert:", insertQuery); // Log a consulta SQL para inserção

      await pool.request()
        .input('exameId', sql.VarChar, data.exameId)
        .input('xmlValido', sql.Bit, data.xmlValido || null)
        .input('pacienteValido', sql.Bit, data.pacienteValido || null)
        .input('temExameSolicitado', sql.Bit, data.temExameSolicitado || null)
        .input('exameDuplicado', sql.Bit, data.exameDuplicado || null)
        .input('realizadoUpdate', sql.Bit, data.realizadoUpdate || null)
        .input('exameJson', sql.NVarChar(sql.MAX), data.exameJson || null)
        .input('exameSmartModel', sql.NVarChar(sql.MAX), data.exameSmartModel || null)
        .input('pacienteId', sql.Int, data.pacienteId || null)
        .input('pacienteNome', sql.NVarChar(255), data.pacienteNome || null)
        .input('pacienteDtNasc', sql.DateTime, data.pacienteDtNasc || null)
        .input('dataExame', sql.DateTime, data.dataExame || null)
        .query(insertQuery);
    }

    console.log('Operação realizada com sucesso.');
    return 'success';
  } catch (error) {
    console.error('Erro ao atualizar ou inserir os dados:', error);
    return 'error';
  }
}
