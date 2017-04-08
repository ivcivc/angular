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
var autocomplete_1 = require('devextreme/ui/autocomplete');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxAutocompleteComponent = (function (_super) {
    __extends(DxAutocompleteComponent, _super);
    function DxAutocompleteComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxAutocomplete';
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
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'dataSourceChange' },
            { emit: 'displayExprChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'valueExprChange' },
            { emit: 'itemsChange' },
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
            { emit: 'deferRenderingChange' },
            { emit: 'openedChange' },
            { emit: 'displayValueChange' },
            { emit: 'minSearchLengthChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'selectedItemChange' },
            { emit: 'maxItemCountChange' }
        ];
        this._properties = [
            'this.dataSource',
            'this.displayExpr',
            'this.itemTemplate',
            'this.valueExpr',
            'this.items',
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
            'this.deferRendering',
            'this.opened',
            'this.displayValue',
            'this.minSearchLength',
            'this.searchExpr',
            'this.searchMode',
            'this.searchTimeout',
            'this.selectedItem',
            'this.maxItemCount'
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
        this.onContentReady = new core_1.EventEmitter();
        this.onItemClick = new core_1.EventEmitter();
        this.onSelectionChanged = new core_1.EventEmitter();
        this.dataSourceChange = new core_1.EventEmitter();
        this.displayExprChange = new core_1.EventEmitter();
        this.itemTemplateChange = new core_1.EventEmitter();
        this.valueExprChange = new core_1.EventEmitter();
        this.itemsChange = new core_1.EventEmitter();
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
        this.deferRenderingChange = new core_1.EventEmitter();
        this.openedChange = new core_1.EventEmitter();
        this.displayValueChange = new core_1.EventEmitter();
        this.minSearchLengthChange = new core_1.EventEmitter();
        this.searchExprChange = new core_1.EventEmitter();
        this.searchModeChange = new core_1.EventEmitter();
        this.searchTimeoutChange = new core_1.EventEmitter();
        this.selectedItemChange = new core_1.EventEmitter();
        this.maxItemCountChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxAutocompleteComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "displayExpr", {
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "valueExpr", {
        get: function () {
            return this._getOption('valueExpr');
        },
        set: function (value) {
            this._setOption('valueExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "attr", {
        get: function () {
            return this._getOption('attr');
        },
        set: function (value) {
            this._setOption('attr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "placeholder", {
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "showClearButton", {
        get: function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "spellcheck", {
        get: function () {
            return this._getOption('spellcheck');
        },
        set: function (value) {
            this._setOption('spellcheck', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "valueChangeEvent", {
        get: function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "maxLength", {
        get: function () {
            return this._getOption('maxLength');
        },
        set: function (value) {
            this._setOption('maxLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "deferRendering", {
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "opened", {
        get: function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "displayValue", {
        get: function () {
            return this._getOption('displayValue');
        },
        set: function (value) {
            this._setOption('displayValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "minSearchLength", {
        get: function () {
            return this._getOption('minSearchLength');
        },
        set: function (value) {
            this._setOption('minSearchLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "searchExpr", {
        get: function () {
            return this._getOption('searchExpr');
        },
        set: function (value) {
            this._setOption('searchExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "searchMode", {
        get: function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "searchTimeout", {
        get: function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "selectedItem", {
        get: function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxAutocompleteComponent.prototype, "maxItemCount", {
        get: function () {
            return this._getOption('maxItemCount');
        },
        set: function (value) {
            this._setOption('maxItemCount', value);
        },
        enumerable: true,
        configurable: true
    });
    DxAutocompleteComponent.prototype._createInstance = function (element, options) {
        var widget = new autocomplete_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxAutocompleteComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
        this._idh.setup('searchExpr', changes);
    };
    DxAutocompleteComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.ContentChild(validator_1.DxValidatorComponent), 
        __metadata('design:type', validator_1.DxValidatorComponent)
    ], DxAutocompleteComponent.prototype, "validator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "displayExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "itemTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "valueExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "isValid", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "name", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "readOnly", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "validationError", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "validationMessageMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "attr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "placeholder", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "showClearButton", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "spellcheck", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "text", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "valueChangeEvent", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "maxLength", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "deferRendering", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "opened", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "displayValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "minSearchLength", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "searchExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "searchMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "searchTimeout", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "selectedItem", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxAutocompleteComponent.prototype, "maxItemCount", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onFocusIn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onFocusOut", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onValueChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onCopy", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onCut", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onEnterKey", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onInput", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onKeyDown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onKeyPress", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onKeyUp", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onPaste", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onClosed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onOpened", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onItemClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "displayExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "valueExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "itemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "isValidChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "nameChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "valueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "attrChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "placeholderChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "showClearButtonChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "spellcheckChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "textChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "valueChangeEventChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "maxLengthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "openedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "displayValueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "minSearchLengthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "searchExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "searchModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "searchTimeoutChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxAutocompleteComponent.prototype, "maxItemCountChange", void 0);
    DxAutocompleteComponent = __decorate([
        core_1.Component({
            selector: 'dx-autocomplete',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxAutocompleteComponent);
    return DxAutocompleteComponent;
}(dx_component_1.DxComponent));
exports.DxAutocompleteComponent = DxAutocompleteComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxAutocompleteValueAccessorDirective; }),
    multi: true
};
var DxAutocompleteValueAccessorDirective = (function () {
    function DxAutocompleteValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxAutocompleteValueAccessorDirective.prototype.onChange = function (_) { };
    DxAutocompleteValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxAutocompleteValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxAutocompleteValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.HostListener('valueChange', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DxAutocompleteValueAccessorDirective.prototype, "onChange", null);
    DxAutocompleteValueAccessorDirective = __decorate([
        core_1.Directive({
            selector: 'dx-autocomplete[formControlName],dx-autocomplete[formControl],dx-autocomplete[ngModel]',
            providers: [CUSTOM_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [DxAutocompleteComponent])
    ], DxAutocompleteValueAccessorDirective);
    return DxAutocompleteValueAccessorDirective;
}());
exports.DxAutocompleteValueAccessorDirective = DxAutocompleteValueAccessorDirective;
var DxAutocompleteModule = (function () {
    function DxAutocompleteModule() {
    }
    DxAutocompleteModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxAutocompleteComponent,
                DxAutocompleteValueAccessorDirective
            ],
            exports: [
                DxAutocompleteComponent,
                DxAutocompleteValueAccessorDirective
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxAutocompleteModule);
    return DxAutocompleteModule;
}());
exports.DxAutocompleteModule = DxAutocompleteModule;

//# sourceMappingURL=autocomplete.js.map
