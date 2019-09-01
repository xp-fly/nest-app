"use strict";
exports.__esModule = true;
var init_command_1 = require("./init.command");
var CommandLoader = /** @class */ (function () {
    function CommandLoader() {
    }
    CommandLoader.load = function (program, rootDir) {
        new init_command_1.InitCommand(rootDir).load(program);
    };
    return CommandLoader;
}());
exports.CommandLoader = CommandLoader;
