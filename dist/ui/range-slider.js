"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var range_slider_1 = require('devextreme/ui/range_slider');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
var DxRangeSliderComponent = (function (_super) {
    __extends(DxRangeSliderComponent, _super);
    function DxRangeSliderComponent(elementRef, ngZone, templateHost, _watcherHelper) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this.widgetClassName = 'dxRangeSlider';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'isValidChange' },
            { emit: 'readOnlyChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'maxChange' },
            { emit: 'minChange' },
            { emit: 'keyStepChange' },
            { emit: 'labelChange' },
            { emit: 'showRangeChange' },
            { emit: 'stepChange' },
            { emit: 'tooltipChange' },
            { emit: 'endChange' },
            { emit: 'endNameChange' },
            { emit: 'startChange' },
            { emit: 'startNameChange' }
        ];
        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.accessKey',
            'this.activeStateEnabled',
            'this.disabled',
            'this.focusStateEnabled',
            'this.hint',
            'this.hoverStateEnabled',
            'this.tabIndex',
            'this.visible',
            'this.isValid',
            'this.readOnly',
            'this.validationError',
            'this.validationMessageMode',
            'this.max',
            'this.min',
            'this.keyStep',
            'this.label',
            'this.showRange',
            'this.step',
            'this.tooltip',
            'this.end',
            'this.endName',
            'this.start',
            'this.startName'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onValueChanged = new core_1.EventEmitter();
        this.heightChange = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.widthChange = new core_1.EventEmitter();
        this.accessKeyChange = new core_1.EventEmitter();
        this.activeStateEnabledChange = new core_1.EventEmitter();
        this.disabledChange = new core_1.EventEmitter();
        this.focusStateEnabledChange = new core_1.EventEmitter();
        this.hintChange = new core_1.EventEmitter();
        this.hoverStateEnabledChange = new core_1.EventEmitter();
        this.tabIndexChange = new core_1.EventEmitter();
        this.visibleChange = new core_1.EventEmitter();
        this.isValidChange = new core_1.EventEmitter();
        this.readOnlyChange = new core_1.EventEmitter();
        this.validationErrorChange = new core_1.EventEmitter();
        this.validationMessageModeChange = new core_1.EventEmitter();
        this.maxChange = new core_1.EventEmitter();
        this.minChange = new core_1.EventEmitter();
        this.keyStepChange = new core_1.EventEmitter();
        this.labelChange = new core_1.EventEmitter();
        this.showRangeChange = new core_1.EventEmitter();
        this.stepChange = new core_1.EventEmitter();
        this.tooltipChange = new core_1.EventEmitter();
        this.endChange = new core_1.EventEmitter();
        this.endNameChange = new core_1.EventEmitter();
        this.startChange = new core_1.EventEmitter();
        this.startNameChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DxRangeSliderComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "max", {
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "min", {
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "keyStep", {
        get: function () {
            return this._getOption('keyStep');
        },
        set: function (value) {
            this._setOption('keyStep', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "showRange", {
        get: function () {
            return this._getOption('showRange');
        },
        set: function (value) {
            this._setOption('showRange', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "step", {
        get: function () {
            return this._getOption('step');
        },
        set: function (value) {
            this._setOption('step', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "end", {
        get: function () {
            return this._getOption('end');
        },
        set: function (value) {
            this._setOption('end', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "endName", {
        get: function () {
            return this._getOption('endName');
        },
        set: function (value) {
            this._setOption('endName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "start", {
        get: function () {
            return this._getOption('start');
        },
        set: function (value) {
            this._setOption('start', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "startName", {
        get: function () {
            return this._getOption('startName');
        },
        set: function (value) {
            this._setOption('startName', value);
        },
        enumerable: true,
        configurable: true
    });
    DxRangeSliderComponent.prototype._createInstance = function (element, options) {
        return new range_slider_1.default(element, options);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "isValid", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "readOnly", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "validationError", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "validationMessageMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "max", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "min", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "keyStep", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "label", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "showRange", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "step", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "tooltip", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "end", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "endName", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "start", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSliderComponent.prototype, "startName", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "onValueChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "isValidChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "maxChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "minChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "keyStepChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "labelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "showRangeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "stepChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "tooltipChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "endChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "endNameChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "startChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSliderComponent.prototype, "startNameChange", void 0);
    DxRangeSliderComponent = __decorate([
        core_1.Component({
            selector: 'dx-range-slider',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper])
    ], DxRangeSliderComponent);
    return DxRangeSliderComponent;
}(dx_component_1.DxComponent));
exports.DxRangeSliderComponent = DxRangeSliderComponent;
var DxRangeSliderModule = (function () {
    function DxRangeSliderModule() {
    }
    DxRangeSliderModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxRangeSliderComponent
            ],
            exports: [
                DxRangeSliderComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxRangeSliderModule);
    return DxRangeSliderModule;
}());
exports.DxRangeSliderModule = DxRangeSliderModule;

//# sourceMappingURL=range-slider.js.map
