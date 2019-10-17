import { AbstractCommand } from './abstract.command';
import { CommanderStatic } from 'commander';
import { resolve } from 'path';
import * as shelljs from 'shelljs';

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
        const pkgJson = require(resolve(projectDir, 'package.json'));
        // 构建
        shelljs.exec('npm run build');
        shelljs.cp('-R', resolve(projectDir, 'dist'), resolve(this.frameworkRoot, 'modules', pkgJson.name));
        shelljs.cd(this.frameworkRoot);
        shelljs.exec('npm run start:prod');
      });
  }
}
