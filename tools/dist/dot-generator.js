"use strict";
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var logger_1 = require('./logger');
var doT = require('dot');
doT.templateSettings = {
    evaluate: /\<#([\s\S]+?)#\>/g,
    interpolate: /\<#=([\s\S]+?)#\>/g,
    encode: /\<#!([\s\S]+?)#\>/g,
    use: /\<##([\s\S]+?)#\>/g,
    define: /\<###\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)##\>/g,
    conditional: /\<#\?(\?)?\s*([\s\S]*?)\s*#\>/g,
    iterate: /\<#~\s*(?:#\>|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*#\>)/g,
    varname: 'it',
    strip: false,
    append: true,
    selfcontained: false
};
var DoTGenerator = (function () {
    function DoTGenerator() {
        this._encoding = 'utf8';
    }
    DoTGenerator.prototype.createTemplate = function (templateFilePath) {
        logger_1.default('Create doT template from ' + templateFilePath);
        var templateString = fs.readFileSync(templateFilePath, this._encoding);
        return doT.template(templateString);
    };
    DoTGenerator.prototype.generate = function (config) {
        var _this = this;
        var template = this.createTemplate(config.templateFilePath), files;
        mkdirp.sync(config.outputFolderPath);
        logger_1.default('List directory: ' + config.metadataFolderPath);
        files = fs.readdirSync(config.metadataFolderPath);
        files.forEach(function (fileName) {
            var filePath = path.join(config.metadataFolderPath, fileName);
            logger_1.default('Read data from ' + filePath);
            var data = fs.readFileSync(filePath, _this._encoding);
            logger_1.default('Apply template');
            var result = template(JSON.parse(data));
            var resultFileName = path.parse(filePath).name + '.ts';
            var resultFilePath = path.join(config.outputFolderPath, resultFileName);
            logger_1.default('Write result to ' + resultFilePath);
            fs.writeFileSync(resultFilePath, result, { encoding: _this._encoding });
        });
    };
    return DoTGenerator;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DoTGenerator;

//# sourceMappingURL=dot-generator.js.map
