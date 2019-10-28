import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from 'nestjs-configure';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { Repository } from 'typeorm';
import { DatabaseInitOptions } from './database.interface';

@Module({})
export class DatabaseModule {
    /**
     * 初始化数据库配置
     * @param configName 配置名称
     * @param configName 连接名称 唯一
     */
    static init(options: DatabaseInitOptions): DynamicModule {
        return {
            module: DatabaseModule,
            imports: [
                TypeOrmModule.forRootAsync({
                    name: options.connectName,
                    useFactory: (configService: ConfigService) => {
                        const dataSource = (configService.get(options.configName) || {}).dataSource;
                        return {
                            type: 'mysql',
                            host: dataSource.host,
                            port: dataSource.port,
                            username: dataSource.username,
                            password: dataSource.password,
                            database: dataSource.database,
                            entities: [
                                options.entitiesPath,
                            ],
                            synchronize: false,
                            logging: dataSource.logging,
                        };
                    },
                    inject: [ConfigService],
                }),
            ],
        };
    }

    static forFeature(entities: Array<() => void>, connection: string) {
        return TypeOrmModule.forFeature(entities, connection);
    }
}
