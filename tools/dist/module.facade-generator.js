"use strict";
var fs = require('fs');
var inflector = require('inflector-js');
var logger_1 = require('./logger');
var FacadeGenerator = (function () {
    function FacadeGenerator() {
        this._encoding = 'utf8';
    }
    FacadeGenerator.prototype.prepareModuleName = function (fileName) {
        fileName = fileName.replace(/-/g, '_');
        fileName = inflector.classify(fileName);
        fileName = 'Dx' + fileName + 'Module';
        return fileName;
    };
    FacadeGenerator.prototype.generate = function (config) {
        var _this = this;
        Object.keys(config.moduleFacades).forEach(function (moduleFilePath) {
            logger_1.default('Generate facade: ' + moduleFilePath);
            var facadeConfig = config.moduleFacades[moduleFilePath], moduleNamesString = '', importModuleString = '';
            facadeConfig.sourceComponentDirectories.forEach(function (directoryPath) {
                logger_1.default('List directory: ' + directoryPath);
                var files = fs.readdirSync(directoryPath);
                files.forEach(function (fileName) {
                    fileName = fileName.substring(0, fileName.length - 3);
                    var moduleName = _this.prepareModuleName(fileName);
                    moduleNamesString += '\n    ' + moduleName + ',';
                    importModuleString += "import { " + moduleName + " } from './" + fileName + "';\n";
                });
            });
            Object.keys(facadeConfig.additionalImports).forEach(function (importName) {
                moduleNamesString += '\n    ' + importName + ',';
                importModuleString += facadeConfig.additionalImports[importName] + ';\n';
            });
            moduleNamesString = moduleNamesString.slice(0, -1);
            importModuleString = importModuleString.slice(0, -1);
            var resultContent = "import { NgModule } from '@angular/core';\n" + importModuleString + "\n\n@NgModule({\n    imports: [" + moduleNamesString + "\n    ],\n    exports: [" + moduleNamesString + "\n    ]\n})\nexport class DevExtremeModule {}\n";
            logger_1.default('Write result to ' + moduleFilePath);
            fs.writeFileSync(moduleFilePath, resultContent, { encoding: _this._encoding });
        });
    };
    return FacadeGenerator;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FacadeGenerator;

//# sourceMappingURL=module.facade-generator.js.map
