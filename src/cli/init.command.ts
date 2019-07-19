import { AbstractCommand } from './abstract.command';
import { Command, CommanderStatic } from 'commander';
import * as shelljs from 'shelljs';
import * as path from 'path';

export class InitCommand extends AbstractCommand{
  private rootDir: string;

  constructor(rootDir: string) {
    super();
    this.rootDir = rootDir;
  }

  public load(program: CommanderStatic) {
    program
      .command('init [name]')
      .action((name, command: Command) => {
        const exampleDir = path.resolve(this.rootDir, 'templates/nest-app-example');
        const projectDir = path.resolve(process.cwd(), `nest-app-${name}`);
        shelljs.cp('-R', exampleDir, projectDir);
      });
  }
}
