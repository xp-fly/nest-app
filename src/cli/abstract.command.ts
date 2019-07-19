import { CommanderStatic } from 'commander';

export abstract class AbstractCommand {
  public abstract load(program: CommanderStatic): void;
}
