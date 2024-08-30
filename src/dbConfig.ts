import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig: sql.config = {
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    server: process.env.DB_SERVER!,
    database: process.env.DB_DATABASE!,
    options: {
        encrypt: true, // Utilize esta opção se estiver se conectando a um Azure SQL
        trustServerCertificate: true // Pode ser necessário dependendo da configuração do servidor
    }
};

export default dbConfig;