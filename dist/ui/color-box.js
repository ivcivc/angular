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
var color_box_1 = require('devextreme/ui/color_box');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
var DxColorBoxComponent = (function (_super) {
    __extends(DxColorBoxComponent, _super);
    function DxColorBoxComponent(elementRef, ngZone, templateHost, _watcherHelper) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this.widgetClassName = 'dxColorBox';
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
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'opened', emit: 'onOpened' },
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
            { emit: 'textChange' },
            { emit: 'applyValueModeChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'openedChange' },
            { emit: 'applyButtonTextChange' },
            { emit: 'cancelButtonTextChange' },
            { emit: 'editAlphaChannelChange' },
            { emit: 'keyStepChange' }
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
            'this.text',
            'this.applyValueMode',
            'this.deferRendering',
            'this.opened',
            'this.applyButtonText',
            'this.cancelButtonText',
            'this.editAlphaChannel',
            'this.keyStep'
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
        this.onClosed = new core_1.EventEmitter();
        this.onOpened = new core_1.EventEmitter();
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
        this.textChange = new core_1.EventEmitter();
        this.applyValueModeChange = new core_1.EventEmitter();
        this.deferRenderingChange = new core_1.EventEmitter();
        this.openedChange = new core_1.EventEmitter();
        this.applyButtonTextChange = new core_1.EventEmitter();
        this.cancelButtonTextChange = new core_1.EventEmitter();
        this.editAlphaChannelChange = new core_1.EventEmitter();
        this.keyStepChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DxColorBoxComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "attr", {
        get: function () {
            return this._getOption('attr');
        },
        set: function (value) {
            this._setOption('attr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "placeholder", {
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "applyValueMode", {
        get: function () {
            return this._getOption('applyValueMode');
        },
        set: function (value) {
            this._setOption('applyValueMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "deferRendering", {
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "opened", {
        get: function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "applyButtonText", {
        get: function () {
            return this._getOption('applyButtonText');
        },
        set: function (value) {
            this._setOption('applyButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "cancelButtonText", {
        get: function () {
            return this._getOption('cancelButtonText');
        },
        set: function (value) {
            this._setOption('cancelButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "editAlphaChannel", {
        get: function () {
            return this._getOption('editAlphaChannel');
        },
        set: function (value) {
            this._setOption('editAlphaChannel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "keyStep", {
        get: function () {
            return this._getOption('keyStep');
        },
        set: function (value) {
            this._setOption('keyStep', value);
        },
        enumerable: true,
        configurable: true
    });
    DxColorBoxComponent.prototype._createInstance = function (element, options) {
        var widget = new color_box_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    __decorate([
        core_1.ContentChild(validator_1.DxValidatorComponent), 
        __metadata('design:type', validator_1.DxValidatorComponent)
    ], DxColorBoxComponent.prototype, "validator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "isValid", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "name", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "readOnly", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "validationError", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "validationMessageMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "attr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "placeholder", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "text", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "applyValueMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "deferRendering", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "opened", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "applyButtonText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "cancelButtonText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "editAlphaChannel", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxColorBoxComponent.prototype, "keyStep", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onFocusIn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onFocusOut", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onValueChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onCopy", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onCut", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onEnterKey", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onInput", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onKeyDown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onKeyPress", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onKeyUp", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onPaste", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onClosed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "onOpened", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "isValidChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "nameChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "valueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "attrChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "placeholderChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "textChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "applyValueModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "openedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "applyButtonTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "cancelButtonTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "editAlphaChannelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxColorBoxComponent.prototype, "keyStepChange", void 0);
    DxColorBoxComponent = __decorate([
        core_1.Component({
            selector: 'dx-color-box',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper])
    ], DxColorBoxComponent);
    return DxColorBoxComponent;
}(dx_component_1.DxComponent));
exports.DxColorBoxComponent = DxColorBoxComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxColorBoxValueAccessorDirective; }),
    multi: true
};
var DxColorBoxValueAccessorDirective = (function () {
    function DxColorBoxValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxColorBoxValueAccessorDirective.prototype.onChange = function (_) { };
    DxColorBoxValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxColorBoxValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxColorBoxValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.HostListener('valueChange', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DxColorBoxValueAccessorDirective.prototype, "onChange", null);
    DxColorBoxValueAccessorDirective = __decorate([
        core_1.Directive({
            selector: 'dx-color-box[formControlName],dx-color-box[formControl],dx-color-box[ngModel]',
            providers: [CUSTOM_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [DxColorBoxComponent])
    ], DxColorBoxValueAccessorDirective);
    return DxColorBoxValueAccessorDirective;
}());
exports.DxColorBoxValueAccessorDirective = DxColorBoxValueAccessorDirective;
var DxColorBoxModule = (function () {
    function DxColorBoxModule() {
    }
    DxColorBoxModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxColorBoxComponent,
                DxColorBoxValueAccessorDirective
            ],
            exports: [
                DxColorBoxComponent,
                DxColorBoxValueAccessorDirective
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxColorBoxModule);
    return DxColorBoxModule;
}());
exports.DxColorBoxModule = DxColorBoxModule;

//# sourceMappingURL=color-box.js.map
