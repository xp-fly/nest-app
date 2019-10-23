import { Module } from '@nestjs/common';
import { ConfigService } from 'nestjs-configure';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => {
                const dataSource = configService.get('dataSource');
                const entitiesPath = path.resolve(__dirname, '../../**/**.entity{.ts,.js}');
                return {
                    type: 'mysql',
                    host: dataSource.host,
                    port: dataSource.port,
                    username: dataSource.username,
                    password: dataSource.password,
                    database: dataSource.database,
                    entities: [
                        entitiesPath,
                    ],
                    synchronize: true,
                    logging: true,
                };
            },
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {

}
