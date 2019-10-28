/**
 *  数据库初始化配置
 */
export interface DatabaseInitOptions {

    configName: string; // 数据库配置名称

    connectName: string; // 数据连接唯一键

    entitiesPath: string; // 实体路径
}
