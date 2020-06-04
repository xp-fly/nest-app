import { type } from "os"

/**
 *  数据库初始化配置
 */
export interface DatabaseInitOptions {
    connectName: string; // 数据连接唯一键
    entitiesPath: string; // 实体路径
}

/**
 * 数据库配置
 */
export type DatabaseConfig = () => {
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    logging: boolean,
}