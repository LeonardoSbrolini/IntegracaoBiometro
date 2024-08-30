import fs from 'fs';
import iconv from 'iconv-lite';
import xml2js from 'xml2js';

// Tipagem para o resultado da conversão de XML para JSON
type JsonResult = Record<string, unknown>;

export const convertXmlToJson = (xmlFilePath: string): Promise<JsonResult> => {
  const parser = new xml2js.Parser({ explicitArray: false });

  return new Promise((resolve, reject) => {
    fs.readFile(xmlFilePath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
      if (err) {
        reject(new Error(`Erro ao ler o arquivo XML: ${err.message}`));
        return;
      }

      // Converte o buffer de UTF-16 para UTF-8
      const xmlString = iconv.decode(data, 'utf-16');

      parser.parseString(xmlString, (err: Error | null, result: JsonResult) => {
        if (err) {
          reject(new Error(`Erro ao converter XML para JSON: ${err.message}`));
          return;
        }

        resolve(result);
      });
    });
  });
};
