export class GrpcInitOptions {
    configName: string; // 配置名称
    packages: GrpcPackageInterface[];
}

class GrpcPackageInterface {
    package: string;
    protoPath: string;
}
