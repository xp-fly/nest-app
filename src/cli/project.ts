import { join } from 'path';

export class Project {
  private frameworkDir: string;
  constructor(frameworkDir: string) {
    this.frameworkDir = frameworkDir;
  }

  pkgJson(appName: string) {
    const frameworkPkgJson = require(join(this.frameworkDir, 'package.json'));
    frameworkPkgJson.name = appName;
    frameworkPkgJson.bin = undefined;
    return frameworkPkgJson;
  }

  tsConfig() {
    const frameworkTsconfig = require(join(this.frameworkDir, 'tsconfig.json'));
    return frameworkTsconfig;
  }
}
