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
var date_box_1 = require('devextreme/ui/date_box');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
var DxDateBoxComponent = (function (_super) {
    __extends(DxDateBoxComponent, _super);
    function DxDateBoxComponent(elementRef, ngZone, templateHost, _watcherHelper) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this.widgetClassName = 'dxDateBox';
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
            { emit: 'showClearButtonChange' },
            { emit: 'spellcheckChange' },
            { emit: 'textChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'maxLengthChange' },
            { emit: 'acceptCustomValueChange' },
            { emit: 'applyValueModeChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'fieldEditEnabledChange' },
            { emit: 'openedChange' },
            { emit: 'adaptivityEnabledChange' },
            { emit: 'applyButtonTextChange' },
            { emit: 'cancelButtonTextChange' },
            { emit: 'dateOutOfRangeMessageChange' },
            { emit: 'displayFormatChange' },
            { emit: 'formatChange' },
            { emit: 'formatStringChange' },
            { emit: 'intervalChange' },
            { emit: 'invalidDateMessageChange' },
            { emit: 'maxChange' },
            { emit: 'maxZoomLevelChange' },
            { emit: 'minChange' },
            { emit: 'minZoomLevelChange' },
            { emit: 'pickerTypeChange' },
            { emit: 'typeChange' },
            { emit: 'useCalendarChange' },
            { emit: 'useNativeChange' }
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
            'this.spellcheck',
            'this.text',
            'this.valueChangeEvent',
            'this.maxLength',
            'this.acceptCustomValue',
            'this.applyValueMode',
            'this.deferRendering',
            'this.fieldEditEnabled',
            'this.opened',
            'this.adaptivityEnabled',
            'this.applyButtonText',
            'this.cancelButtonText',
            'this.dateOutOfRangeMessage',
            'this.displayFormat',
            'this.format',
            'this.formatString',
            'this.interval',
            'this.invalidDateMessage',
            'this.max',
            'this.maxZoomLevel',
            'this.min',
            'this.minZoomLevel',
            'this.pickerType',
            'this.type',
            'this.useCalendar',
            'this.useNative'
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
        this.showClearButtonChange = new core_1.EventEmitter();
        this.spellcheckChange = new core_1.EventEmitter();
        this.textChange = new core_1.EventEmitter();
        this.valueChangeEventChange = new core_1.EventEmitter();
        this.maxLengthChange = new core_1.EventEmitter();
        this.acceptCustomValueChange = new core_1.EventEmitter();
        this.applyValueModeChange = new core_1.EventEmitter();
        this.deferRenderingChange = new core_1.EventEmitter();
        this.fieldEditEnabledChange = new core_1.EventEmitter();
        this.openedChange = new core_1.EventEmitter();
        this.adaptivityEnabledChange = new core_1.EventEmitter();
        this.applyButtonTextChange = new core_1.EventEmitter();
        this.cancelButtonTextChange = new core_1.EventEmitter();
        this.dateOutOfRangeMessageChange = new core_1.EventEmitter();
        this.displayFormatChange = new core_1.EventEmitter();
        this.formatChange = new core_1.EventEmitter();
        this.formatStringChange = new core_1.EventEmitter();
        this.intervalChange = new core_1.EventEmitter();
        this.invalidDateMessageChange = new core_1.EventEmitter();
        this.maxChange = new core_1.EventEmitter();
        this.maxZoomLevelChange = new core_1.EventEmitter();
        this.minChange = new core_1.EventEmitter();
        this.minZoomLevelChange = new core_1.EventEmitter();
        this.pickerTypeChange = new core_1.EventEmitter();
        this.typeChange = new core_1.EventEmitter();
        this.useCalendarChange = new core_1.EventEmitter();
        this.useNativeChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DxDateBoxComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "attr", {
        get: function () {
            return this._getOption('attr');
        },
        set: function (value) {
            this._setOption('attr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "placeholder", {
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "showClearButton", {
        get: function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "spellcheck", {
        get: function () {
            return this._getOption('spellcheck');
        },
        set: function (value) {
            this._setOption('spellcheck', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "valueChangeEvent", {
        get: function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "maxLength", {
        get: function () {
            return this._getOption('maxLength');
        },
        set: function (value) {
            this._setOption('maxLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "acceptCustomValue", {
        get: function () {
            return this._getOption('acceptCustomValue');
        },
        set: function (value) {
            this._setOption('acceptCustomValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "applyValueMode", {
        get: function () {
            return this._getOption('applyValueMode');
        },
        set: function (value) {
            this._setOption('applyValueMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "deferRendering", {
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "fieldEditEnabled", {
        get: function () {
            return this._getOption('fieldEditEnabled');
        },
        set: function (value) {
            this._setOption('fieldEditEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "opened", {
        get: function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "adaptivityEnabled", {
        get: function () {
            return this._getOption('adaptivityEnabled');
        },
        set: function (value) {
            this._setOption('adaptivityEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "applyButtonText", {
        get: function () {
            return this._getOption('applyButtonText');
        },
        set: function (value) {
            this._setOption('applyButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "cancelButtonText", {
        get: function () {
            return this._getOption('cancelButtonText');
        },
        set: function (value) {
            this._setOption('cancelButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "dateOutOfRangeMessage", {
        get: function () {
            return this._getOption('dateOutOfRangeMessage');
        },
        set: function (value) {
            this._setOption('dateOutOfRangeMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "displayFormat", {
        get: function () {
            return this._getOption('displayFormat');
        },
        set: function (value) {
            this._setOption('displayFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "format", {
        get: function () {
            return this._getOption('format');
        },
        set: function (value) {
            this._setOption('format', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "formatString", {
        get: function () {
            return this._getOption('formatString');
        },
        set: function (value) {
            this._setOption('formatString', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "interval", {
        get: function () {
            return this._getOption('interval');
        },
        set: function (value) {
            this._setOption('interval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "invalidDateMessage", {
        get: function () {
            return this._getOption('invalidDateMessage');
        },
        set: function (value) {
            this._setOption('invalidDateMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "max", {
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "maxZoomLevel", {
        get: function () {
            return this._getOption('maxZoomLevel');
        },
        set: function (value) {
            this._setOption('maxZoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "min", {
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "minZoomLevel", {
        get: function () {
            return this._getOption('minZoomLevel');
        },
        set: function (value) {
            this._setOption('minZoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "pickerType", {
        get: function () {
            return this._getOption('pickerType');
        },
        set: function (value) {
            this._setOption('pickerType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "useCalendar", {
        get: function () {
            return this._getOption('useCalendar');
        },
        set: function (value) {
            this._setOption('useCalendar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "useNative", {
        get: function () {
            return this._getOption('useNative');
        },
        set: function (value) {
            this._setOption('useNative', value);
        },
        enumerable: true,
        configurable: true
    });
    DxDateBoxComponent.prototype._createInstance = function (element, options) {
        var widget = new date_box_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    __decorate([
        core_1.ContentChild(validator_1.DxValidatorComponent), 
        __metadata('design:type', validator_1.DxValidatorComponent)
    ], DxDateBoxComponent.prototype, "validator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "isValid", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "name", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "readOnly", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "validationError", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "validationMessageMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "attr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "placeholder", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "showClearButton", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "spellcheck", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "text", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "valueChangeEvent", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "maxLength", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "acceptCustomValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "applyValueMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "deferRendering", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "fieldEditEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "opened", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "adaptivityEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "applyButtonText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "cancelButtonText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "dateOutOfRangeMessage", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "displayFormat", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "format", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "formatString", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "interval", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "invalidDateMessage", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "max", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "maxZoomLevel", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "min", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "minZoomLevel", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "pickerType", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "type", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "useCalendar", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDateBoxComponent.prototype, "useNative", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onFocusIn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onFocusOut", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onValueChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onCopy", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onCut", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onEnterKey", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onInput", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onKeyDown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onKeyPress", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onKeyUp", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onPaste", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onClosed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "onOpened", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "isValidChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "nameChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "valueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "attrChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "placeholderChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "showClearButtonChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "spellcheckChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "textChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "valueChangeEventChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "maxLengthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "acceptCustomValueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "applyValueModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "fieldEditEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "openedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "adaptivityEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "applyButtonTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "cancelButtonTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "dateOutOfRangeMessageChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "displayFormatChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "formatChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "formatStringChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "intervalChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "invalidDateMessageChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "maxChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "maxZoomLevelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "minChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "minZoomLevelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "pickerTypeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "typeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "useCalendarChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDateBoxComponent.prototype, "useNativeChange", void 0);
    DxDateBoxComponent = __decorate([
        core_1.Component({
            selector: 'dx-date-box',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper])
    ], DxDateBoxComponent);
    return DxDateBoxComponent;
}(dx_component_1.DxComponent));
exports.DxDateBoxComponent = DxDateBoxComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxDateBoxValueAccessorDirective; }),
    multi: true
};
var DxDateBoxValueAccessorDirective = (function () {
    function DxDateBoxValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxDateBoxValueAccessorDirective.prototype.onChange = function (_) { };
    DxDateBoxValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxDateBoxValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxDateBoxValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.HostListener('valueChange', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DxDateBoxValueAccessorDirective.prototype, "onChange", null);
    DxDateBoxValueAccessorDirective = __decorate([
        core_1.Directive({
            selector: 'dx-date-box[formControlName],dx-date-box[formControl],dx-date-box[ngModel]',
            providers: [CUSTOM_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [DxDateBoxComponent])
    ], DxDateBoxValueAccessorDirective);
    return DxDateBoxValueAccessorDirective;
}());
exports.DxDateBoxValueAccessorDirective = DxDateBoxValueAccessorDirective;
var DxDateBoxModule = (function () {
    function DxDateBoxModule() {
    }
    DxDateBoxModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxDateBoxComponent,
                DxDateBoxValueAccessorDirective
            ],
            exports: [
                DxDateBoxComponent,
                DxDateBoxValueAccessorDirective
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxDateBoxModule);
    return DxDateBoxModule;
}());
exports.DxDateBoxModule = DxDateBoxModule;

//# sourceMappingURL=date-box.js.map
