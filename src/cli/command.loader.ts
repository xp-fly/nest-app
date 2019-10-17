import { CommanderStatic } from 'commander';
import { InitCommand } from './init.command';
import { StartCommand } from './start.command';

export class CommandLoader {
  public static load(program: CommanderStatic, rootDir: string) {
    new InitCommand(rootDir).load(program);
    new StartCommand(rootDir).load(program);
  }
}
