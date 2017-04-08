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
var select_box_1 = require('devextreme/ui/select_box');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxSelectBoxComponent = (function (_super) {
    __extends(DxSelectBoxComponent, _super);
    function DxSelectBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxSelectBox';
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
            { subscribe: 'customItemCreating', emit: 'onCustomItemCreating' },
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
            { emit: 'acceptCustomValueChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'fieldEditEnabledChange' },
            { emit: 'openedChange' },
            { emit: 'displayValueChange' },
            { emit: 'fieldTemplateChange' },
            { emit: 'minSearchLengthChange' },
            { emit: 'noDataTextChange' },
            { emit: 'pagingEnabledChange' },
            { emit: 'searchEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'selectedItemChange' },
            { emit: 'showDataBeforeSearchChange' },
            { emit: 'showSelectionControlsChange' }
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
            'this.acceptCustomValue',
            'this.deferRendering',
            'this.fieldEditEnabled',
            'this.opened',
            'this.displayValue',
            'this.fieldTemplate',
            'this.minSearchLength',
            'this.noDataText',
            'this.pagingEnabled',
            'this.searchEnabled',
            'this.searchExpr',
            'this.searchMode',
            'this.searchTimeout',
            'this.selectedItem',
            'this.showDataBeforeSearch',
            'this.showSelectionControls'
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
        this.onCustomItemCreating = new core_1.EventEmitter();
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
        this.acceptCustomValueChange = new core_1.EventEmitter();
        this.deferRenderingChange = new core_1.EventEmitter();
        this.fieldEditEnabledChange = new core_1.EventEmitter();
        this.openedChange = new core_1.EventEmitter();
        this.displayValueChange = new core_1.EventEmitter();
        this.fieldTemplateChange = new core_1.EventEmitter();
        this.minSearchLengthChange = new core_1.EventEmitter();
        this.noDataTextChange = new core_1.EventEmitter();
        this.pagingEnabledChange = new core_1.EventEmitter();
        this.searchEnabledChange = new core_1.EventEmitter();
        this.searchExprChange = new core_1.EventEmitter();
        this.searchModeChange = new core_1.EventEmitter();
        this.searchTimeoutChange = new core_1.EventEmitter();
        this.selectedItemChange = new core_1.EventEmitter();
        this.showDataBeforeSearchChange = new core_1.EventEmitter();
        this.showSelectionControlsChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxSelectBoxComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "displayExpr", {
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "valueExpr", {
        get: function () {
            return this._getOption('valueExpr');
        },
        set: function (value) {
            this._setOption('valueExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "attr", {
        get: function () {
            return this._getOption('attr');
        },
        set: function (value) {
            this._setOption('attr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "placeholder", {
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "showClearButton", {
        get: function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "spellcheck", {
        get: function () {
            return this._getOption('spellcheck');
        },
        set: function (value) {
            this._setOption('spellcheck', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "valueChangeEvent", {
        get: function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "maxLength", {
        get: function () {
            return this._getOption('maxLength');
        },
        set: function (value) {
            this._setOption('maxLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "acceptCustomValue", {
        get: function () {
            return this._getOption('acceptCustomValue');
        },
        set: function (value) {
            this._setOption('acceptCustomValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "deferRendering", {
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "fieldEditEnabled", {
        get: function () {
            return this._getOption('fieldEditEnabled');
        },
        set: function (value) {
            this._setOption('fieldEditEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "opened", {
        get: function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "displayValue", {
        get: function () {
            return this._getOption('displayValue');
        },
        set: function (value) {
            this._setOption('displayValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "fieldTemplate", {
        get: function () {
            return this._getOption('fieldTemplate');
        },
        set: function (value) {
            this._setOption('fieldTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "minSearchLength", {
        get: function () {
            return this._getOption('minSearchLength');
        },
        set: function (value) {
            this._setOption('minSearchLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "noDataText", {
        get: function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "pagingEnabled", {
        get: function () {
            return this._getOption('pagingEnabled');
        },
        set: function (value) {
            this._setOption('pagingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "searchEnabled", {
        get: function () {
            return this._getOption('searchEnabled');
        },
        set: function (value) {
            this._setOption('searchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "searchExpr", {
        get: function () {
            return this._getOption('searchExpr');
        },
        set: function (value) {
            this._setOption('searchExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "searchMode", {
        get: function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "searchTimeout", {
        get: function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "selectedItem", {
        get: function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "showDataBeforeSearch", {
        get: function () {
            return this._getOption('showDataBeforeSearch');
        },
        set: function (value) {
            this._setOption('showDataBeforeSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSelectBoxComponent.prototype, "showSelectionControls", {
        get: function () {
            return this._getOption('showSelectionControls');
        },
        set: function (value) {
            this._setOption('showSelectionControls', value);
        },
        enumerable: true,
        configurable: true
    });
    DxSelectBoxComponent.prototype._createInstance = function (element, options) {
        var widget = new select_box_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxSelectBoxComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
        this._idh.setup('searchExpr', changes);
    };
    DxSelectBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.ContentChild(validator_1.DxValidatorComponent), 
        __metadata('design:type', validator_1.DxValidatorComponent)
    ], DxSelectBoxComponent.prototype, "validator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "displayExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "itemTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "valueExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "isValid", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "name", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "readOnly", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "validationError", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "validationMessageMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "attr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "placeholder", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "showClearButton", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "spellcheck", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "text", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "valueChangeEvent", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "maxLength", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "acceptCustomValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "deferRendering", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "fieldEditEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "opened", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "displayValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "fieldTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "minSearchLength", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "noDataText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "pagingEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "searchEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "searchExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "searchMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "searchTimeout", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "selectedItem", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "showDataBeforeSearch", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSelectBoxComponent.prototype, "showSelectionControls", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onFocusIn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onFocusOut", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onValueChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onCopy", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onCut", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onEnterKey", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onInput", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onKeyDown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onKeyPress", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onKeyUp", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onPaste", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onClosed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onOpened", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onItemClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "onCustomItemCreating", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "displayExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "valueExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "itemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "isValidChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "nameChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "valueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "attrChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "placeholderChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "showClearButtonChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "spellcheckChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "textChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "valueChangeEventChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "maxLengthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "acceptCustomValueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "fieldEditEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "openedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "displayValueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "fieldTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "minSearchLengthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "pagingEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "searchEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "searchExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "searchModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "searchTimeoutChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "showDataBeforeSearchChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSelectBoxComponent.prototype, "showSelectionControlsChange", void 0);
    DxSelectBoxComponent = __decorate([
        core_1.Component({
            selector: 'dx-select-box',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxSelectBoxComponent);
    return DxSelectBoxComponent;
}(dx_component_1.DxComponent));
exports.DxSelectBoxComponent = DxSelectBoxComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxSelectBoxValueAccessorDirective; }),
    multi: true
};
var DxSelectBoxValueAccessorDirective = (function () {
    function DxSelectBoxValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxSelectBoxValueAccessorDirective.prototype.onChange = function (_) { };
    DxSelectBoxValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxSelectBoxValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxSelectBoxValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.HostListener('valueChange', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DxSelectBoxValueAccessorDirective.prototype, "onChange", null);
    DxSelectBoxValueAccessorDirective = __decorate([
        core_1.Directive({
            selector: 'dx-select-box[formControlName],dx-select-box[formControl],dx-select-box[ngModel]',
            providers: [CUSTOM_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [DxSelectBoxComponent])
    ], DxSelectBoxValueAccessorDirective);
    return DxSelectBoxValueAccessorDirective;
}());
exports.DxSelectBoxValueAccessorDirective = DxSelectBoxValueAccessorDirective;
var DxSelectBoxModule = (function () {
    function DxSelectBoxModule() {
    }
    DxSelectBoxModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxSelectBoxComponent,
                DxSelectBoxValueAccessorDirective
            ],
            exports: [
                DxSelectBoxComponent,
                DxSelectBoxValueAccessorDirective
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxSelectBoxModule);
    return DxSelectBoxModule;
}());
exports.DxSelectBoxModule = DxSelectBoxModule;

//# sourceMappingURL=select-box.js.map
