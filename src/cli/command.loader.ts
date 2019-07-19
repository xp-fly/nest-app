import { CommanderStatic } from 'commander';
import { InitCommand } from './init.command';

export class CommandLoader {
  public static load(program: CommanderStatic, rootDir: string) {
    new InitCommand(rootDir).load(program);
  }
}
