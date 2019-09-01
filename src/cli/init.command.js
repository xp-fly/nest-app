"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var abstract_command_1 = require("./abstract.command");
var shelljs = require("shelljs");
var path = require("path");
var InitCommand = /** @class */ (function (_super) {
    __extends(InitCommand, _super);
    function InitCommand(rootDir) {
        var _this = _super.call(this) || this;
        _this.rootDir = rootDir;
        return _this;
    }
    InitCommand.prototype.load = function (program) {
        var _this = this;
        program
            .command('init [name]')
            .action(function (name, command) {
            var exampleDir = path.resolve(_this.rootDir, 'templates/nest-app-example');
            var projectDir = path.resolve(process.cwd(), "nest-app-" + name);
            shelljs.cp('-R', exampleDir, projectDir);
        });
    };
    return InitCommand;
}(abstract_command_1.AbstractCommand));
exports.InitCommand = InitCommand;
