import { AbstractCommand } from './abstract.command';
import { Command, CommanderStatic } from 'commander';
import * as shelljs from 'shelljs';
import * as path from 'path';
import { Project } from './project';
import { writeFileSync } from 'fs';
import { join } from 'path';

export class InitCommand extends AbstractCommand {
  private frameworkRoot: string;

  constructor(frameworkRoot: string) {
    super();
    this.frameworkRoot = frameworkRoot;
  }

  public load(program: CommanderStatic) {
    program
      .command('init [name]')
      .action((name, command: Command) => {
        if (name) {
          const appName = `nest-app-${name}`;
          const exampleDir = path.resolve(this.frameworkRoot, 'templates/nest-app-example');
          const projectDir = path.resolve(process.cwd(), appName);
          shelljs.cp('-R', exampleDir, projectDir);
          const project = new Project(this.frameworkRoot);
          const pkgJson = project.pkgJson(appName);
          const tsconfig = project.tsConfig();
          const tsBuildConfig = project.tsBuildConfig();
          writeFileSync(join(projectDir, 'package.json'), JSON.stringify(pkgJson, null, 4));
          writeFileSync(join(projectDir, 'tsconfig.json'), JSON.stringify(tsconfig, null, 4));
          writeFileSync(join(projectDir, 'tsconfig.build.json'), JSON.stringify(tsBuildConfig, null, 4));
        } else {
          command.outputHelp();
        }
      });
  }
}
