import { DynamicModule, Module } from '@nestjs/common';
import { GrpcClientModule } from 'nestjs-grpc-client';
import { GrpcInitOptions, GrpcConfig } from './grpc.interface';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { ConfigType } from '@nestjs/config';

@Module({})
export class GrpcModule {
    static init(options: GrpcInitOptions, inject: string): DynamicModule {
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
                    useFactory: (grpcConfig: ConfigType<GrpcConfig>) => {
                        return grpcConfig;
                    },
                    inject: [inject],
                }),
            ],
        };
    }
}
