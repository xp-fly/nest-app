#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var commander = require("commander");
var cli_1 = require("../src/cli");
var path = require("path");
var bootstrap = function () {
    var program = commander;
    var rootDir = path.resolve(__dirname, '..');
    cli_1.CommandLoader.load(program, rootDir);
    commander.parse(process.argv);
    if (!program.args.length) {
        program.outputHelp();
    }
};
bootstrap();
