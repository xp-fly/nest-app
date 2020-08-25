import { type } from "os";

export interface GrpcInitOptions {
    configName: string; // 配置名称
    packages: GrpcPackageInterface[];
}

interface GrpcPackageInterface {
    package: string;
    protoPath: string;
}

export type GrpcConfig = () => ({
    package: string,
    url: string,
}[])