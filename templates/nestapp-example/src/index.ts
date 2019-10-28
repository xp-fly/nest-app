import { Module } from '@nestjs/common';
import { resolve } from 'path';
import { ConfigModule } from 'nestjs-configure';
import { configName, databaseConnectName } from './constant';
import {DatabaseModule} from 'nestapp';

@Module({
    imports: [
        // 加载配置
        ConfigModule.load(resolve(__dirname, 'bootstrap.yml'), 'admin'),
        // 数据库模块
        DatabaseModule.init({
            configName,
            connectName: databaseConnectName,
            entitiesPath: resolve(__dirname, './**/**.entity{.ts,.js}'),
        }),
    ],
})
export default class AppModule {
}
