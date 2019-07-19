#!/usr/bin/env node

import * as commander from 'commander';
import { CommanderStatic } from 'commander';
import { CommandLoader } from '../src/cli';
import * as path from 'path';

const bootstrap = () => {
  const program: CommanderStatic = commander;
  const rootDir = path.resolve(__dirname, '..');
  CommandLoader.load(program, rootDir);
  commander.parse(process.argv);

  if (!program.args.length) {
    program.outputHelp();
  }
};

bootstrap();
