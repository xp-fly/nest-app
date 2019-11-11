import { DynamicModule, Module } from '@nestjs/common';
import { GrpcClientModule } from 'nestjs-grpc-client';
import { ConfigService } from 'nestjs-configure';
import { GrpcInitOptions } from './grpc.interface';
import { GrpcOptions, Transport } from '@nestjs/microservices';

@Module({})
export class GrpcModule {
    static init(options: GrpcInitOptions): DynamicModule {
        const packages: GrpcOptions[] = options.packages.map(item => {
            return {
                transport: Transport.GRPC,
                options: {
                    package: item.package,
                    protoPath: item.protoPath,
                    loader: {
                        arrays: true,
                    },
                },
            };
        });
        return {
            module: GrpcModule,
            imports: [
                GrpcClientModule.registerAsync(packages, {
                    useFactory: (configService) => {
                        const config = configService.get(options.configName);
                        return config.grpc;
                    },
                    inject: [ConfigService],
                }),
            ],
        };
    }
}
