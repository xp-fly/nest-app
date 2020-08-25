import { join } from 'path';
import { TestingModule, Test } from "@nestjs/testing"
import { ConfigModule } from "@nestjs/config";
import grpcConfig from "./grpc.config";
import { GrpcModule } from "../grpc.module";

describe('GrpcModule', () => {
    it ('GrpcModule', async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    load: [grpcConfig],
                    isGlobal: true,
                }),
                GrpcModule.init({
                    configName: 'test',
                    packages: [{
                        package: 'test',
                        protoPath: join(__dirname, 'test.proto')
                    }]
                }, grpcConfig.KEY),
            ],
        }).compile();
        const app = module.createNestApplication();
        await app.init();
        const grpcModule = module.get(GrpcModule);
        expect(grpcModule).toBeInstanceOf(GrpcModule);

        await app.close();
    })
})