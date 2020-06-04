import { DynamicModule, Module, Inject } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseInitOptions, DatabaseConfig } from './database.interface';
import {ConfigService, ConfigType, ConfigModule} from '@nestjs/config';
import databaseConfig from './__test__/database.config';

@Module({})
export class DatabaseModule {
    /**
     * 初始化数据库配置
     * @param configName 配置名称
     * @param configName 连接名称 唯一
     */
    static init(options: DatabaseInitOptions, inject: string): DynamicModule {
        return {
            module: DatabaseModule,
            imports: [
                TypeOrmModule.forRootAsync({
                    name: options.connectName,
                    useFactory: (databaseCfg: ConfigType<DatabaseConfig>) => {
                        return {
                            type: 'mysql',
                            host: databaseCfg.host,
                            port: databaseCfg.port,
                            username: databaseCfg.username,
                            password: databaseCfg.password,
                            database: databaseCfg.database,
                            entities: [
                                options.entitiesPath,
                            ],
                            synchronize: false,
                            logging: databaseCfg.logging,
                        };
                    },
                    inject: [inject],
                }),
            ],
        };
    }

    static forFeature(entities: Array<() => void>, connection: string) {
        return TypeOrmModule.forFeature(entities, connection);
    }
}
