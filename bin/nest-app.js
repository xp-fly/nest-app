#!/usr/bin/env node
const commander = require('commander');
const { CommanderStatic } = require('commander');
const { CommandLoader } = require('../dist/cli');
const path = require('path');

const bootstrap = () => {
  const frameworkDir = path.resolve(__dirname, '..');
  CommandLoader.load(commander, frameworkDir);
  commander.parse(process.argv);

  if (!commander.args.length) {
    commander.outputHelp();
  }
};

bootstrap();
