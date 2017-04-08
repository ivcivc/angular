"use strict";
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var logger_1 = require('./logger');
var FSObjectStore = (function () {
    function FSObjectStore() {
        this._encoding = 'utf8';
    }
    FSObjectStore.prototype.read = function (filePath) {
        logger_1.default('Read from file: ' + filePath);
        var dataString = fs.readFileSync(filePath, this._encoding);
        logger_1.default('Parse data');
        return JSON.parse(dataString);
    };
    FSObjectStore.prototype.write = function (filePath, data) {
        logger_1.default('Write data to file ' + filePath);
        var dataString = JSON.stringify(data, null, 4);
        fs.writeFileSync(filePath, dataString, { encoding: this._encoding });
    };
    return FSObjectStore;
}());
exports.FSObjectStore = FSObjectStore;
var DXComponentMetadataGenerator = (function () {
    function DXComponentMetadataGenerator(_store) {
        this._store = _store;
        if (!this._store) {
            this._store = new FSObjectStore();
        }
    }
    DXComponentMetadataGenerator.prototype.generate = function (config) {
        var inflector = require('inflector-js'), metadata = this._store.read(config.sourceMetadataFilePath), widgetsMetadata = metadata['Widgets'];
        mkdirp.sync(config.outputFolderPath);
        for (var widgetName in widgetsMetadata) {
            var widget = widgetsMetadata[widgetName];
            if (!widget.Module) {
                logger_1.default('Skipping metadata for ' + widgetName);
                continue;
            }
            logger_1.default('Generate metadata for ' + widgetName);
            var isTranscludedContent = widget.IsTranscludedContent, isExtension = widget.IsExtensionComponent || false, dasherizedWidgetName = inflector.dasherize(inflector.underscore(widgetName)), outputFilePath = path.join(config.outputFolderPath, dasherizedWidgetName.substr('dx-'.length) + '.json'), events = [], changeEvents = [], properties = [], isEditor = false;
            for (var optionName in widget.Options) {
                var option = widget.Options[optionName];
                if (option.IsEvent) {
                    var eventName = inflector.camelize(optionName.substr('on'.length), true);
                    events.push({
                        emit: optionName,
                        subscribe: eventName
                    });
                }
                else {
                    var property = {
                        name: optionName,
                        type: 'any'
                    };
                    if (!!option.IsCollection || !!option.IsDataSource) {
                        property.isCollection = true;
                    }
                    if (option.PrimitiveTypes) {
                    }
                    properties.push(property);
                    changeEvents.push({
                        emit: optionName + 'Change'
                    });
                    if (optionName === 'value') {
                        isEditor = true;
                    }
                }
            }
            var allEvents = events.concat(changeEvents);
            var widgetMetadata = {
                className: inflector.classify(widgetName),
                widgetName: widgetName,
                isTranscludedContent: isTranscludedContent,
                isExtension: isExtension,
                selector: dasherizedWidgetName,
                events: allEvents,
                properties: properties,
                isEditor: isEditor,
                module: 'devextreme/' + widget.Module
            };
            logger_1.default('Write metadata to file ' + outputFilePath);
            this._store.write(outputFilePath, widgetMetadata);
        }
    };
    return DXComponentMetadataGenerator;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DXComponentMetadataGenerator;

//# sourceMappingURL=metadata-generator.js.map
