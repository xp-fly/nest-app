import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleLoader } from './module-loader';
import { ConfigModule } from 'nestjs-configure';
import { DatabaseModule } from './shared/database/database.module';

@Module({
    imports: [
        ConfigModule.load(),
        DatabaseModule,
        ...ModuleLoader.load(),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
