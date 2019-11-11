import { AbstractCommand } from './abstract.command';
import { CommanderStatic } from 'commander';
import { resolve } from 'path';
import * as shelljs from 'shelljs';
import { existsSync } from 'fs';

export class StartCommand extends AbstractCommand {
    private frameworkRoot: string;

    constructor(frameworkRoot: string) {
        super();
        this.frameworkRoot = frameworkRoot;
    }

    public load(program: CommanderStatic) {
        program
            .command('start')
            .action(() => {
                const projectDir = process.cwd();
                const modulesDir = resolve(this.frameworkRoot, 'modules');
                const pkgJson = require(resolve(projectDir, 'package.json'));
                const appName = pkgJson.name.replace(/nestapp-/g, '');
                const appDir = resolve(modulesDir, appName);
                // 构建
                shelljs.exec('npm run build');
                // 先删除再cp
                if (existsSync(appDir)) {
                    shelljs.rm('-rf', appDir);
                }
                shelljs.cp('-R', resolve(projectDir, 'dist'), appDir);
                shelljs.cp(resolve(projectDir, 'src/bootstrap.yml'), appDir);
                shelljs.cp(resolve(projectDir, 'src/protobufs/*.proto'), resolve(appDir, 'protobufs'));
                shelljs.cd(this.frameworkRoot);
                shelljs.exec('npm run start:prod');
            });
    }
}
