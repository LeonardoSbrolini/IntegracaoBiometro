import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

export async function MoveErrorToAwait() {

  dotenv.config();
  const errorDirectory = process.env.ERROR_DIRECTORY!;

  if (!errorDirectory) {
    throw new Error('A variável de ambiente ERROR_DIRECTORY deve estar definida no arquivo .env');
  }

  try {
    const files = fs.readdirSync(errorDirectory);

    files.forEach(file => {
      const filePath = path.join(errorDirectory, file);
      const fileName = path.basename(filePath);

      const targetPath = path.join(process.env.DIRECTORY_TO_WATCH!, fileName);
      fs.renameSync(filePath, targetPath);
    });

    console.log('Foram movidos todos os arquivos da pasta ERROR.')
  } catch (error) {
    console.error(`Erro ao ler o diretório ${errorDirectory}: ${error}`);
  }
}
