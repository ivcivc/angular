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
var tag_box_1 = require('devextreme/ui/tag_box');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxTagBoxComponent = (function (_super) {
    __extends(DxTagBoxComponent, _super);
    function DxTagBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxTagBox';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'enterKey', emit: 'onEnterKey' },
            { subscribe: 'input', emit: 'onInput' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'keyPress', emit: 'onKeyPress' },
            { subscribe: 'keyUp', emit: 'onKeyUp' },
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'customItemCreating', emit: 'onCustomItemCreating' },
            { subscribe: 'selectAllValueChanged', emit: 'onSelectAllValueChanged' },
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
            { emit: 'textChange' },
            { emit: 'acceptCustomValueChange' },
            { emit: 'applyValueModeChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'fieldEditEnabledChange' },
            { emit: 'openedChange' },
            { emit: 'fieldTemplateChange' },
            { emit: 'minSearchLengthChange' },
            { emit: 'noDataTextChange' },
            { emit: 'pagingEnabledChange' },
            { emit: 'searchEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'showDataBeforeSearchChange' },
            { emit: 'showSelectionControlsChange' },
            { emit: 'hideSelectedItemsChange' },
            { emit: 'multilineChange' },
            { emit: 'selectedItemsChange' },
            { emit: 'tagTemplateChange' },
            { emit: 'valuesChange' }
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
            'this.text',
            'this.acceptCustomValue',
            'this.applyValueMode',
            'this.deferRendering',
            'this.fieldEditEnabled',
            'this.opened',
            'this.fieldTemplate',
            'this.minSearchLength',
            'this.noDataText',
            'this.pagingEnabled',
            'this.searchEnabled',
            'this.searchExpr',
            'this.searchMode',
            'this.searchTimeout',
            'this.showDataBeforeSearch',
            'this.showSelectionControls',
            'this.hideSelectedItems',
            'this.multiline',
            'this.selectedItems',
            'this.tagTemplate',
            'this.values'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onFocusIn = new core_1.EventEmitter();
        this.onFocusOut = new core_1.EventEmitter();
        this.onValueChanged = new core_1.EventEmitter();
        this.onChange = new core_1.EventEmitter();
        this.onEnterKey = new core_1.EventEmitter();
        this.onInput = new core_1.EventEmitter();
        this.onKeyDown = new core_1.EventEmitter();
        this.onKeyPress = new core_1.EventEmitter();
        this.onKeyUp = new core_1.EventEmitter();
        this.onClosed = new core_1.EventEmitter();
        this.onOpened = new core_1.EventEmitter();
        this.onContentReady = new core_1.EventEmitter();
        this.onItemClick = new core_1.EventEmitter();
        this.onSelectionChanged = new core_1.EventEmitter();
        this.onCustomItemCreating = new core_1.EventEmitter();
        this.onSelectAllValueChanged = new core_1.EventEmitter();
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
        this.textChange = new core_1.EventEmitter();
        this.acceptCustomValueChange = new core_1.EventEmitter();
        this.applyValueModeChange = new core_1.EventEmitter();
        this.deferRenderingChange = new core_1.EventEmitter();
        this.fieldEditEnabledChange = new core_1.EventEmitter();
        this.openedChange = new core_1.EventEmitter();
        this.fieldTemplateChange = new core_1.EventEmitter();
        this.minSearchLengthChange = new core_1.EventEmitter();
        this.noDataTextChange = new core_1.EventEmitter();
        this.pagingEnabledChange = new core_1.EventEmitter();
        this.searchEnabledChange = new core_1.EventEmitter();
        this.searchExprChange = new core_1.EventEmitter();
        this.searchModeChange = new core_1.EventEmitter();
        this.searchTimeoutChange = new core_1.EventEmitter();
        this.showDataBeforeSearchChange = new core_1.EventEmitter();
        this.showSelectionControlsChange = new core_1.EventEmitter();
        this.hideSelectedItemsChange = new core_1.EventEmitter();
        this.multilineChange = new core_1.EventEmitter();
        this.selectedItemsChange = new core_1.EventEmitter();
        this.tagTemplateChange = new core_1.EventEmitter();
        this.valuesChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxTagBoxComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "displayExpr", {
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "valueExpr", {
        get: function () {
            return this._getOption('valueExpr');
        },
        set: function (value) {
            this._setOption('valueExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "attr", {
        get: function () {
            return this._getOption('attr');
        },
        set: function (value) {
            this._setOption('attr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "placeholder", {
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "showClearButton", {
        get: function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "acceptCustomValue", {
        get: function () {
            return this._getOption('acceptCustomValue');
        },
        set: function (value) {
            this._setOption('acceptCustomValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "applyValueMode", {
        get: function () {
            return this._getOption('applyValueMode');
        },
        set: function (value) {
            this._setOption('applyValueMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "deferRendering", {
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "fieldEditEnabled", {
        get: function () {
            return this._getOption('fieldEditEnabled');
        },
        set: function (value) {
            this._setOption('fieldEditEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "opened", {
        get: function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "fieldTemplate", {
        get: function () {
            return this._getOption('fieldTemplate');
        },
        set: function (value) {
            this._setOption('fieldTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "minSearchLength", {
        get: function () {
            return this._getOption('minSearchLength');
        },
        set: function (value) {
            this._setOption('minSearchLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "noDataText", {
        get: function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "pagingEnabled", {
        get: function () {
            return this._getOption('pagingEnabled');
        },
        set: function (value) {
            this._setOption('pagingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "searchEnabled", {
        get: function () {
            return this._getOption('searchEnabled');
        },
        set: function (value) {
            this._setOption('searchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "searchExpr", {
        get: function () {
            return this._getOption('searchExpr');
        },
        set: function (value) {
            this._setOption('searchExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "searchMode", {
        get: function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "searchTimeout", {
        get: function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "showDataBeforeSearch", {
        get: function () {
            return this._getOption('showDataBeforeSearch');
        },
        set: function (value) {
            this._setOption('showDataBeforeSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "showSelectionControls", {
        get: function () {
            return this._getOption('showSelectionControls');
        },
        set: function (value) {
            this._setOption('showSelectionControls', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "hideSelectedItems", {
        get: function () {
            return this._getOption('hideSelectedItems');
        },
        set: function (value) {
            this._setOption('hideSelectedItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "multiline", {
        get: function () {
            return this._getOption('multiline');
        },
        set: function (value) {
            this._setOption('multiline', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "selectedItems", {
        get: function () {
            return this._getOption('selectedItems');
        },
        set: function (value) {
            this._setOption('selectedItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "tagTemplate", {
        get: function () {
            return this._getOption('tagTemplate');
        },
        set: function (value) {
            this._setOption('tagTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "values", {
        get: function () {
            return this._getOption('values');
        },
        set: function (value) {
            this._setOption('values', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTagBoxComponent.prototype._createInstance = function (element, options) {
        var widget = new tag_box_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxTagBoxComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
        this._idh.setup('value', changes);
        this._idh.setup('searchExpr', changes);
        this._idh.setup('selectedItems', changes);
    };
    DxTagBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('value');
        this._idh.doCheck('searchExpr');
        this._idh.doCheck('selectedItems');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.ContentChild(validator_1.DxValidatorComponent), 
        __metadata('design:type', validator_1.DxValidatorComponent)
    ], DxTagBoxComponent.prototype, "validator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "displayExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "itemTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "valueExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "isValid", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "name", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "readOnly", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "validationError", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "validationMessageMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "attr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "placeholder", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "showClearButton", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "text", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "acceptCustomValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "applyValueMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "deferRendering", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "fieldEditEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "opened", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "fieldTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "minSearchLength", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "noDataText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "pagingEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "searchEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "searchExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "searchMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "searchTimeout", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "showDataBeforeSearch", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "showSelectionControls", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "hideSelectedItems", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "multiline", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "selectedItems", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "tagTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTagBoxComponent.prototype, "values", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onFocusIn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onFocusOut", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onValueChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onEnterKey", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onInput", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onKeyDown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onKeyPress", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onKeyUp", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onClosed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onOpened", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onItemClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onCustomItemCreating", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "onSelectAllValueChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "displayExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "valueExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "itemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "isValidChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "nameChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "valueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "attrChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "placeholderChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "showClearButtonChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "textChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "acceptCustomValueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "applyValueModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "fieldEditEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "openedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "fieldTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "minSearchLengthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "pagingEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "searchEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "searchExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "searchModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "searchTimeoutChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "showDataBeforeSearchChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "showSelectionControlsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "hideSelectedItemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "multilineChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "selectedItemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "tagTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTagBoxComponent.prototype, "valuesChange", void 0);
    DxTagBoxComponent = __decorate([
        core_1.Component({
            selector: 'dx-tag-box',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxTagBoxComponent);
    return DxTagBoxComponent;
}(dx_component_1.DxComponent));
exports.DxTagBoxComponent = DxTagBoxComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxTagBoxValueAccessorDirective; }),
    multi: true
};
var DxTagBoxValueAccessorDirective = (function () {
    function DxTagBoxValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxTagBoxValueAccessorDirective.prototype.onChange = function (_) { };
    DxTagBoxValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxTagBoxValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxTagBoxValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.HostListener('valueChange', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DxTagBoxValueAccessorDirective.prototype, "onChange", null);
    DxTagBoxValueAccessorDirective = __decorate([
        core_1.Directive({
            selector: 'dx-tag-box[formControlName],dx-tag-box[formControl],dx-tag-box[ngModel]',
            providers: [CUSTOM_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [DxTagBoxComponent])
    ], DxTagBoxValueAccessorDirective);
    return DxTagBoxValueAccessorDirective;
}());
exports.DxTagBoxValueAccessorDirective = DxTagBoxValueAccessorDirective;
var DxTagBoxModule = (function () {
    function DxTagBoxModule() {
    }
    DxTagBoxModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxTagBoxComponent,
                DxTagBoxValueAccessorDirective
            ],
            exports: [
                DxTagBoxComponent,
                DxTagBoxValueAccessorDirective
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxTagBoxModule);
    return DxTagBoxModule;
}());
exports.DxTagBoxModule = DxTagBoxModule;

//# sourceMappingURL=tag-box.js.map
