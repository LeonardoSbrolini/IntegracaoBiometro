import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { moveFileToDirectory } from './moveFileToDirectory';

export const ListFilesInDirectory = () => {
  dotenv.config();
  const directoryToWatch = process.env.DIRECTORY_TO_WATCH!;

  if (!directoryToWatch) {
    throw new Error('A variável de ambiente DIRECTORY_TO_WATCH deve estar definida no arquivo .env');
  }

  try {
    const files = fs.readdirSync(directoryToWatch);

    files.forEach(file => {
      const filePath = path.join(directoryToWatch, file);
      const stats = fs.statSync(filePath);

      if (stats.isFile()) {
        moveFileToDirectory(filePath);
      } else if (stats.isDirectory()) {
        console.log(`Diretório: ${file}`);
      }
    });

    console.log('Acabaram os arquivos para serem tratados.')
  } catch (error) {
    console.error(`Erro ao ler o diretório ${directoryToWatch}: ${error}`);
  }
};