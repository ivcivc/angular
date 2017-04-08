"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var startupEvents = ['onInitialized', 'onContentReady'];
var DxComponentBase = (function () {
    function DxComponentBase(element, ngZone, templateHost, watcherHelper) {
        this.element = element;
        this.ngZone = ngZone;
        this.watcherHelper = watcherHelper;
        this._initialOptions = {};
        this.templates = [];
        templateHost.setHost(this);
    }
    DxComponentBase.prototype._initTemplates = function () {
        var _this = this;
        if (this.templates.length) {
            var initialTemplates_1 = {};
            this.templates.forEach(function (template) {
                _this._initialOptions[template.name] = template.templateAsFunction.bind(template);
                initialTemplates_1[template.name] = template;
            });
            this._initialOptions._templates = initialTemplates_1;
        }
    };
    DxComponentBase.prototype._initOptions = function () {
        var _this = this;
        startupEvents.forEach(function (eventName) {
            _this._initialOptions[eventName] = function (e) {
                var emitter = _this[eventName];
                return emitter && emitter.emit(e);
            };
        });
        this._initialOptions.watchMethod = this.watcherHelper.getWatchMethod();
    };
    DxComponentBase.prototype._initEvents = function () {
        var _this = this;
        this._events.forEach(function (event) {
            if (event.subscribe) {
                _this.instance.on(event.subscribe, function (e) {
                    if (event.subscribe === 'optionChanged') {
                        var changeEventName = e.name + 'Change';
                        if (_this[changeEventName]) {
                            _this[changeEventName].emit(e.value);
                        }
                        _this[event.emit].emit(e);
                    }
                    else {
                        if (_this[event.emit]) {
                            _this.ngZone.run(function () {
                                _this[event.emit].emit(e);
                            });
                        }
                    }
                });
            }
        });
    };
    DxComponentBase.prototype._getOption = function (name) {
        if (this.instance) {
            return this.instance.option(name);
        }
        else {
            return this._initialOptions[name];
        }
    };
    DxComponentBase.prototype._setOption = function (name, value) {
        if (this.instance) {
            this.instance.option(name, value);
        }
        else {
            this._initialOptions[name] = value;
        }
    };
    DxComponentBase.prototype._initProperties = function () {
        var _this = this;
        var defaultOptions = this.instance.option();
        this._properties.forEach(function (property) {
            _this[property] = defaultOptions[property];
        });
    };
    DxComponentBase.prototype._createWidget = function (element) {
        this._initTemplates();
        this._initOptions();
        this.instance = this._createInstance(element, this._initialOptions);
        this._initEvents();
        this._initProperties();
    };
    DxComponentBase.prototype.setTemplate = function (template) {
        this.templates.push(template);
    };
    return DxComponentBase;
}());
exports.DxComponentBase = DxComponentBase;
var DxComponent = (function (_super) {
    __extends(DxComponent, _super);
    function DxComponent() {
        _super.apply(this, arguments);
    }
    DxComponent.prototype.ngAfterViewInit = function () {
        this._createWidget(this.element.nativeElement);
    };
    return DxComponent;
}(DxComponentBase));
exports.DxComponent = DxComponent;
var DxComponentExtension = (function (_super) {
    __extends(DxComponentExtension, _super);
    function DxComponentExtension() {
        _super.apply(this, arguments);
    }
    DxComponentExtension.prototype.createInstance = function (element) {
        this._createWidget(element);
    };
    return DxComponentExtension;
}(DxComponentBase));
exports.DxComponentExtension = DxComponentExtension;

//# sourceMappingURL=dx.component.js.map
