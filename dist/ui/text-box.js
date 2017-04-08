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
var text_box_1 = require('devextreme/ui/text_box');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
var DxTextBoxComponent = (function (_super) {
    __extends(DxTextBoxComponent, _super);
    function DxTextBoxComponent(elementRef, ngZone, templateHost, _watcherHelper) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this.widgetClassName = 'dxTextBox';
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
            { emit: 'maskChange' },
            { emit: 'maskCharChange' },
            { emit: 'maskInvalidMessageChange' },
            { emit: 'maskRulesChange' },
            { emit: 'placeholderChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'spellcheckChange' },
            { emit: 'textChange' },
            { emit: 'useMaskedValueChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'maxLengthChange' },
            { emit: 'modeChange' }
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
            'this.mask',
            'this.maskChar',
            'this.maskInvalidMessage',
            'this.maskRules',
            'this.placeholder',
            'this.showClearButton',
            'this.spellcheck',
            'this.text',
            'this.useMaskedValue',
            'this.valueChangeEvent',
            'this.maxLength',
            'this.mode'
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
        this.maskChange = new core_1.EventEmitter();
        this.maskCharChange = new core_1.EventEmitter();
        this.maskInvalidMessageChange = new core_1.EventEmitter();
        this.maskRulesChange = new core_1.EventEmitter();
        this.placeholderChange = new core_1.EventEmitter();
        this.showClearButtonChange = new core_1.EventEmitter();
        this.spellcheckChange = new core_1.EventEmitter();
        this.textChange = new core_1.EventEmitter();
        this.useMaskedValueChange = new core_1.EventEmitter();
        this.valueChangeEventChange = new core_1.EventEmitter();
        this.maxLengthChange = new core_1.EventEmitter();
        this.modeChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DxTextBoxComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "attr", {
        get: function () {
            return this._getOption('attr');
        },
        set: function (value) {
            this._setOption('attr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "mask", {
        get: function () {
            return this._getOption('mask');
        },
        set: function (value) {
            this._setOption('mask', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "maskChar", {
        get: function () {
            return this._getOption('maskChar');
        },
        set: function (value) {
            this._setOption('maskChar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "maskInvalidMessage", {
        get: function () {
            return this._getOption('maskInvalidMessage');
        },
        set: function (value) {
            this._setOption('maskInvalidMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "maskRules", {
        get: function () {
            return this._getOption('maskRules');
        },
        set: function (value) {
            this._setOption('maskRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "placeholder", {
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "showClearButton", {
        get: function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "spellcheck", {
        get: function () {
            return this._getOption('spellcheck');
        },
        set: function (value) {
            this._setOption('spellcheck', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "useMaskedValue", {
        get: function () {
            return this._getOption('useMaskedValue');
        },
        set: function (value) {
            this._setOption('useMaskedValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "valueChangeEvent", {
        get: function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "maxLength", {
        get: function () {
            return this._getOption('maxLength');
        },
        set: function (value) {
            this._setOption('maxLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTextBoxComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTextBoxComponent.prototype._createInstance = function (element, options) {
        var widget = new text_box_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    __decorate([
        core_1.ContentChild(validator_1.DxValidatorComponent), 
        __metadata('design:type', validator_1.DxValidatorComponent)
    ], DxTextBoxComponent.prototype, "validator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "isValid", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "name", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "readOnly", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "validationError", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "validationMessageMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "attr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "mask", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "maskChar", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "maskInvalidMessage", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "maskRules", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "placeholder", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "showClearButton", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "spellcheck", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "text", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "useMaskedValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "valueChangeEvent", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "maxLength", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTextBoxComponent.prototype, "mode", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "onFocusIn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "onFocusOut", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "onValueChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "onChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "onCopy", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "onCut", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "onEnterKey", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "onInput", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "onKeyDown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "onKeyPress", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "onKeyUp", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "onPaste", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "isValidChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "nameChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "valueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "attrChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "maskChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "maskCharChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "maskInvalidMessageChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "maskRulesChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "placeholderChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "showClearButtonChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "spellcheckChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "textChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "useMaskedValueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "valueChangeEventChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "maxLengthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTextBoxComponent.prototype, "modeChange", void 0);
    DxTextBoxComponent = __decorate([
        core_1.Component({
            selector: 'dx-text-box',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper])
    ], DxTextBoxComponent);
    return DxTextBoxComponent;
}(dx_component_1.DxComponent));
exports.DxTextBoxComponent = DxTextBoxComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxTextBoxValueAccessorDirective; }),
    multi: true
};
var DxTextBoxValueAccessorDirective = (function () {
    function DxTextBoxValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxTextBoxValueAccessorDirective.prototype.onChange = function (_) { };
    DxTextBoxValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxTextBoxValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxTextBoxValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.HostListener('valueChange', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DxTextBoxValueAccessorDirective.prototype, "onChange", null);
    DxTextBoxValueAccessorDirective = __decorate([
        core_1.Directive({
            selector: 'dx-text-box[formControlName],dx-text-box[formControl],dx-text-box[ngModel]',
            providers: [CUSTOM_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [DxTextBoxComponent])
    ], DxTextBoxValueAccessorDirective);
    return DxTextBoxValueAccessorDirective;
}());
exports.DxTextBoxValueAccessorDirective = DxTextBoxValueAccessorDirective;
var DxTextBoxModule = (function () {
    function DxTextBoxModule() {
    }
    DxTextBoxModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxTextBoxComponent,
                DxTextBoxValueAccessorDirective
            ],
            exports: [
                DxTextBoxComponent,
                DxTextBoxValueAccessorDirective
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxTextBoxModule);
    return DxTextBoxModule;
}());
exports.DxTextBoxModule = DxTextBoxModule;

//# sourceMappingURL=text-box.js.map
