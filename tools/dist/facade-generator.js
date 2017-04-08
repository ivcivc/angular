"use strict";
var fs = require('fs');
var path = require('path');
var logger_1 = require('./logger');
var FacadeGenerator = (function () {
    function FacadeGenerator() {
        this._encoding = 'utf8';
    }
    FacadeGenerator.prototype.generate = function (config) {
        var _this = this;
        Object.keys(config.facades).forEach(function (facadeFilePath) {
            logger_1.default('Generate facade: ' + facadeFilePath);
            var facadeConfig = config.facades[facadeFilePath], resultContent = '';
            facadeConfig.sourceDirectories.forEach(function (directoryPath) {
                logger_1.default('List directory: ' + directoryPath);
                var files = fs.readdirSync(directoryPath);
                files.forEach(function (fileName) {
                    var filePath = path.join(directoryPath, fileName), relativePath = path.relative(path.dirname(facadeFilePath), filePath), parsedPath = path.parse(relativePath), modulePath = path.join(parsedPath.dir, parsedPath.name);
                    resultContent += 'export * from \'./' + modulePath.replace(/\\/g, '/') + '\'\n';
                });
            });
            logger_1.default('Write result to ' + facadeFilePath);
            fs.writeFileSync(facadeFilePath, resultContent, { encoding: _this._encoding });
        });
    };
    return FacadeGenerator;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FacadeGenerator;

//# sourceMappingURL=facade-generator.js.map
