import { TestingModule, Test } from "@nestjs/testing"
import { ConfigModule, ConfigService } from "@nestjs/config";
import databaseConfig from "./database.config";
import { DatabaseModule } from "../database.module";

describe('DatabaseModule', () => {
    it ('DatabaseModule', async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    load: [databaseConfig],
                    isGlobal: true,
                }),
                DatabaseModule.init({
                    connectName: 'test',
                    entitiesPath: '',
                }, databaseConfig.KEY),
            ]
        }).compile();

        const app = module.createNestApplication();
        await app.init();

        const databaseModule = module.get(DatabaseModule);
        expect(databaseModule).toBeInstanceOf(DatabaseModule);

        await app.close();
    })
})