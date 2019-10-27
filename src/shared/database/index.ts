import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from 'nestjs-configure';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { Repository } from 'typeorm';

@Module({})
export class DatabaseModule {
    /**
     * 初始化数据库配置
     * @param configName 配置名称
     */
    static init(configName: string): DynamicModule {
        return {
            module: DatabaseModule,
            imports: [
                TypeOrmModule.forRootAsync({
                    useFactory: (configService: ConfigService) => {
                        const dataSource = (configService.get(configName) || {}).dataSource;
                        const entitiesPath = path.resolve(__dirname, '../../**/**.entity{.ts,.js}');
                        return {
                            type: 'mysql',
                            name: dataSource.database,
                            host: dataSource.host,
                            port: dataSource.port,
                            username: dataSource.username,
                            password: dataSource.password,
                            database: dataSource.database,
                            entities: [
                                entitiesPath,
                            ],
                            synchronize: false,
                            logging: true,
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
