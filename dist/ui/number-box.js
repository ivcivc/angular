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
var number_box_1 = require('devextreme/ui/number_box');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
var DxNumberBoxComponent = (function (_super) {
    __extends(DxNumberBoxComponent, _super);
    function DxNumberBoxComponent(elementRef, ngZone, templateHost, _watcherHelper) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this.widgetClassName = 'dxNumberBox';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'copy', emit: 'onCopy' },
            { subscribe: 'cut', emit: 'onCut' },
            { subscribe: 'enterKey', emit: 'onEnterKey' },
            { subscribe: 'input', emit: 'onInput' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'keyPress', emit: 'onKeyPress' },
            { subscribe: 'keyUp', emit: 'onKeyUp' },
            { subscribe: 'paste', emit: 'onPaste' },
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
            { emit: 'nameChange' },
            { emit: 'readOnlyChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'attrChange' },
            { emit: 'placeholderChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'textChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'invalidValueMessageChange' },
            { emit: 'maxChange' },
            { emit: 'minChange' },
            { emit: 'modeChange' },
            { emit: 'showSpinButtonsChange' },
            { emit: 'stepChange' }
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
            'this.name',
            'this.readOnly',
            'this.validationError',
            'this.validationMessageMode',
            'this.value',
            'this.attr',
            'this.placeholder',
            'this.showClearButton',
            'this.text',
            'this.valueChangeEvent',
            'this.invalidValueMessage',
            'this.max',
            'this.min',
            'this.mode',
            'this.showSpinButtons',
            'this.step'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onFocusIn = new core_1.EventEmitter();
        this.onFocusOut = new core_1.EventEmitter();
        this.onValueChanged = new core_1.EventEmitter();
        this.onChange = new core_1.EventEmitter();
        this.onCopy = new core_1.EventEmitter();
        this.onCut = new core_1.EventEmitter();
        this.onEnterKey = new core_1.EventEmitter();
        this.onInput = new core_1.EventEmitter();
        this.onKeyDown = new core_1.EventEmitter();
        this.onKeyPress = new core_1.EventEmitter();
        this.onKeyUp = new core_1.EventEmitter();
        this.onPaste = new core_1.EventEmitter();
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
        this.nameChange = new core_1.EventEmitter();
        this.readOnlyChange = new core_1.EventEmitter();
        this.validationErrorChange = new core_1.EventEmitter();
        this.validationMessageModeChange = new core_1.EventEmitter();
        this.valueChange = new core_1.EventEmitter();
        this.attrChange = new core_1.EventEmitter();
        this.placeholderChange = new core_1.EventEmitter();
        this.showClearButtonChange = new core_1.EventEmitter();
        this.textChange = new core_1.EventEmitter();
        this.valueChangeEventChange = new core_1.EventEmitter();
        this.invalidValueMessageChange = new core_1.EventEmitter();
        this.maxChange = new core_1.EventEmitter();
        this.minChange = new core_1.EventEmitter();
        this.modeChange = new core_1.EventEmitter();
        this.showSpinButtonsChange = new core_1.EventEmitter();
        this.stepChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DxNumberBoxComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "attr", {
        get: function () {
            return this._getOption('attr');
        },
        set: function (value) {
            this._setOption('attr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "placeholder", {
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "showClearButton", {
        get: function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "valueChangeEvent", {
        get: function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "invalidValueMessage", {
        get: function () {
            return this._getOption('invalidValueMessage');
        },
        set: function (value) {
            this._setOption('invalidValueMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "max", {
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "min", {
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "showSpinButtons", {
        get: function () {
            return this._getOption('showSpinButtons');
        },
        set: function (value) {
            this._setOption('showSpinButtons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxNumberBoxComponent.prototype, "step", {
        get: function () {
            return this._getOption('step');
        },
        set: function (value) {
            this._setOption('step', value);
        },
        enumerable: true,
        configurable: true
    });
    DxNumberBoxComponent.prototype._createInstance = function (element, options) {
        var widget = new number_box_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    __decorate([
        core_1.ContentChild(validator_1.DxValidatorComponent), 
        __metadata('design:type', validator_1.DxValidatorComponent)
    ], DxNumberBoxComponent.prototype, "validator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "isValid", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "name", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "readOnly", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "validationError", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "validationMessageMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "attr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "placeholder", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "showClearButton", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "text", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "valueChangeEvent", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "invalidValueMessage", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "max", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "min", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "mode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "showSpinButtons", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxNumberBoxComponent.prototype, "step", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "onFocusIn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "onFocusOut", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "onValueChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "onChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "onCopy", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "onCut", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "onEnterKey", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "onInput", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "onKeyDown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "onKeyPress", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "onKeyUp", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "onPaste", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "isValidChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "nameChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "valueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "attrChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "placeholderChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "showClearButtonChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "textChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "valueChangeEventChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "invalidValueMessageChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "maxChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "minChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "modeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "showSpinButtonsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxNumberBoxComponent.prototype, "stepChange", void 0);
    DxNumberBoxComponent = __decorate([
        core_1.Component({
            selector: 'dx-number-box',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper])
    ], DxNumberBoxComponent);
    return DxNumberBoxComponent;
}(dx_component_1.DxComponent));
exports.DxNumberBoxComponent = DxNumberBoxComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxNumberBoxValueAccessorDirective; }),
    multi: true
};
var DxNumberBoxValueAccessorDirective = (function () {
    function DxNumberBoxValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxNumberBoxValueAccessorDirective.prototype.onChange = function (_) { };
    DxNumberBoxValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxNumberBoxValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxNumberBoxValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.HostListener('valueChange', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DxNumberBoxValueAccessorDirective.prototype, "onChange", null);
    DxNumberBoxValueAccessorDirective = __decorate([
        core_1.Directive({
            selector: 'dx-number-box[formControlName],dx-number-box[formControl],dx-number-box[ngModel]',
            providers: [CUSTOM_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [DxNumberBoxComponent])
    ], DxNumberBoxValueAccessorDirective);
    return DxNumberBoxValueAccessorDirective;
}());
exports.DxNumberBoxValueAccessorDirective = DxNumberBoxValueAccessorDirective;
var DxNumberBoxModule = (function () {
    function DxNumberBoxModule() {
    }
    DxNumberBoxModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxNumberBoxComponent,
                DxNumberBoxValueAccessorDirective
            ],
            exports: [
                DxNumberBoxComponent,
                DxNumberBoxValueAccessorDirective
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxNumberBoxModule);
    return DxNumberBoxModule;
}());
exports.DxNumberBoxModule = DxNumberBoxModule;

//# sourceMappingURL=number-box.js.map
