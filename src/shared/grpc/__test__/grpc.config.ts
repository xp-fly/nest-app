import { registerAs } from "@nestjs/config";
import { GrpcConfig } from "../grpc.interface";

export default registerAs<GrpcConfig>('grpc', () => ([{
    url: '127.0.0.1:8080',
    package: 'test',
}]));