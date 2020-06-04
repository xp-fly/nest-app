import { registerAs } from "@nestjs/config";
import { DatabaseConfig } from "../database.interface";

export default registerAs<DatabaseConfig>('database', () => ({
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'test',
    logging: false,
}));