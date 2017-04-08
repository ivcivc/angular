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
var tree_view_1 = require('devextreme/ui/tree_view');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxTreeViewComponent = (function (_super) {
    __extends(DxTreeViewComponent, _super);
    function DxTreeViewComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxTreeView';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'itemCollapsed', emit: 'onItemCollapsed' },
            { subscribe: 'itemExpanded', emit: 'onItemExpanded' },
            { subscribe: 'itemSelected', emit: 'onItemSelected' },
            { subscribe: 'itemSelectionChanged', emit: 'onItemSelectionChanged' },
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
            { emit: 'dataSourceChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'noDataTextChange' },
            { emit: 'selectionModeChange' },
            { emit: 'itemsChange' },
            { emit: 'disabledExprChange' },
            { emit: 'displayExprChange' },
            { emit: 'itemsExprChange' },
            { emit: 'keyExprChange' },
            { emit: 'selectedExprChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'createChildrenChange' },
            { emit: 'dataStructureChange' },
            { emit: 'expandAllEnabledChange' },
            { emit: 'expandedExprChange' },
            { emit: 'expandNodesRecursiveChange' },
            { emit: 'hasItemsExprChange' },
            { emit: 'parentIdExprChange' },
            { emit: 'rootValueChange' },
            { emit: 'scrollDirectionChange' },
            { emit: 'searchValueChange' },
            { emit: 'selectAllEnabledChange' },
            { emit: 'selectAllTextChange' },
            { emit: 'selectByClickChange' },
            { emit: 'selectNodesRecursiveChange' },
            { emit: 'showCheckBoxesChange' },
            { emit: 'showCheckBoxesModeChange' },
            { emit: 'virtualModeEnabledChange' }
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
            'this.dataSource',
            'this.itemHoldTimeout',
            'this.itemTemplate',
            'this.noDataText',
            'this.selectionMode',
            'this.items',
            'this.disabledExpr',
            'this.displayExpr',
            'this.itemsExpr',
            'this.keyExpr',
            'this.selectedExpr',
            'this.animationEnabled',
            'this.createChildren',
            'this.dataStructure',
            'this.expandAllEnabled',
            'this.expandedExpr',
            'this.expandNodesRecursive',
            'this.hasItemsExpr',
            'this.parentIdExpr',
            'this.rootValue',
            'this.scrollDirection',
            'this.searchValue',
            'this.selectAllEnabled',
            'this.selectAllText',
            'this.selectByClick',
            'this.selectNodesRecursive',
            'this.showCheckBoxes',
            'this.showCheckBoxesMode',
            'this.virtualModeEnabled'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onContentReady = new core_1.EventEmitter();
        this.onItemClick = new core_1.EventEmitter();
        this.onItemContextMenu = new core_1.EventEmitter();
        this.onItemHold = new core_1.EventEmitter();
        this.onItemRendered = new core_1.EventEmitter();
        this.onSelectionChanged = new core_1.EventEmitter();
        this.onItemCollapsed = new core_1.EventEmitter();
        this.onItemExpanded = new core_1.EventEmitter();
        this.onItemSelected = new core_1.EventEmitter();
        this.onItemSelectionChanged = new core_1.EventEmitter();
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
        this.dataSourceChange = new core_1.EventEmitter();
        this.itemHoldTimeoutChange = new core_1.EventEmitter();
        this.itemTemplateChange = new core_1.EventEmitter();
        this.noDataTextChange = new core_1.EventEmitter();
        this.selectionModeChange = new core_1.EventEmitter();
        this.itemsChange = new core_1.EventEmitter();
        this.disabledExprChange = new core_1.EventEmitter();
        this.displayExprChange = new core_1.EventEmitter();
        this.itemsExprChange = new core_1.EventEmitter();
        this.keyExprChange = new core_1.EventEmitter();
        this.selectedExprChange = new core_1.EventEmitter();
        this.animationEnabledChange = new core_1.EventEmitter();
        this.createChildrenChange = new core_1.EventEmitter();
        this.dataStructureChange = new core_1.EventEmitter();
        this.expandAllEnabledChange = new core_1.EventEmitter();
        this.expandedExprChange = new core_1.EventEmitter();
        this.expandNodesRecursiveChange = new core_1.EventEmitter();
        this.hasItemsExprChange = new core_1.EventEmitter();
        this.parentIdExprChange = new core_1.EventEmitter();
        this.rootValueChange = new core_1.EventEmitter();
        this.scrollDirectionChange = new core_1.EventEmitter();
        this.searchValueChange = new core_1.EventEmitter();
        this.selectAllEnabledChange = new core_1.EventEmitter();
        this.selectAllTextChange = new core_1.EventEmitter();
        this.selectByClickChange = new core_1.EventEmitter();
        this.selectNodesRecursiveChange = new core_1.EventEmitter();
        this.showCheckBoxesChange = new core_1.EventEmitter();
        this.showCheckBoxesModeChange = new core_1.EventEmitter();
        this.virtualModeEnabledChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxTreeViewComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "itemHoldTimeout", {
        get: function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "noDataText", {
        get: function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "selectionMode", {
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "disabledExpr", {
        get: function () {
            return this._getOption('disabledExpr');
        },
        set: function (value) {
            this._setOption('disabledExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "displayExpr", {
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "itemsExpr", {
        get: function () {
            return this._getOption('itemsExpr');
        },
        set: function (value) {
            this._setOption('itemsExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "keyExpr", {
        get: function () {
            return this._getOption('keyExpr');
        },
        set: function (value) {
            this._setOption('keyExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "selectedExpr", {
        get: function () {
            return this._getOption('selectedExpr');
        },
        set: function (value) {
            this._setOption('selectedExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "animationEnabled", {
        get: function () {
            return this._getOption('animationEnabled');
        },
        set: function (value) {
            this._setOption('animationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "createChildren", {
        get: function () {
            return this._getOption('createChildren');
        },
        set: function (value) {
            this._setOption('createChildren', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "dataStructure", {
        get: function () {
            return this._getOption('dataStructure');
        },
        set: function (value) {
            this._setOption('dataStructure', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "expandAllEnabled", {
        get: function () {
            return this._getOption('expandAllEnabled');
        },
        set: function (value) {
            this._setOption('expandAllEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "expandedExpr", {
        get: function () {
            return this._getOption('expandedExpr');
        },
        set: function (value) {
            this._setOption('expandedExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "expandNodesRecursive", {
        get: function () {
            return this._getOption('expandNodesRecursive');
        },
        set: function (value) {
            this._setOption('expandNodesRecursive', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "hasItemsExpr", {
        get: function () {
            return this._getOption('hasItemsExpr');
        },
        set: function (value) {
            this._setOption('hasItemsExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "parentIdExpr", {
        get: function () {
            return this._getOption('parentIdExpr');
        },
        set: function (value) {
            this._setOption('parentIdExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "rootValue", {
        get: function () {
            return this._getOption('rootValue');
        },
        set: function (value) {
            this._setOption('rootValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "scrollDirection", {
        get: function () {
            return this._getOption('scrollDirection');
        },
        set: function (value) {
            this._setOption('scrollDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "searchValue", {
        get: function () {
            return this._getOption('searchValue');
        },
        set: function (value) {
            this._setOption('searchValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "selectAllEnabled", {
        get: function () {
            return this._getOption('selectAllEnabled');
        },
        set: function (value) {
            this._setOption('selectAllEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "selectAllText", {
        get: function () {
            return this._getOption('selectAllText');
        },
        set: function (value) {
            this._setOption('selectAllText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "selectByClick", {
        get: function () {
            return this._getOption('selectByClick');
        },
        set: function (value) {
            this._setOption('selectByClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "selectNodesRecursive", {
        get: function () {
            return this._getOption('selectNodesRecursive');
        },
        set: function (value) {
            this._setOption('selectNodesRecursive', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "showCheckBoxes", {
        get: function () {
            return this._getOption('showCheckBoxes');
        },
        set: function (value) {
            this._setOption('showCheckBoxes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "showCheckBoxesMode", {
        get: function () {
            return this._getOption('showCheckBoxesMode');
        },
        set: function (value) {
            this._setOption('showCheckBoxesMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "virtualModeEnabled", {
        get: function () {
            return this._getOption('virtualModeEnabled');
        },
        set: function (value) {
            this._setOption('virtualModeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTreeViewComponent.prototype._createInstance = function (element, options) {
        return new tree_view_1.default(element, options);
    };
    DxTreeViewComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
    };
    DxTreeViewComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "itemTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "noDataText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "selectionMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "disabledExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "displayExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "itemsExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "keyExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "selectedExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "animationEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "createChildren", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "dataStructure", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "expandAllEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "expandedExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "expandNodesRecursive", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "hasItemsExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "parentIdExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "rootValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "scrollDirection", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "searchValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "selectAllEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "selectAllText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "selectByClick", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "selectNodesRecursive", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "showCheckBoxes", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "showCheckBoxesMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeViewComponent.prototype, "virtualModeEnabled", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "onItemClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "onItemHold", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "onItemRendered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "onItemCollapsed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "onItemExpanded", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "onItemSelected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "onItemSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "selectionModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "itemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "disabledExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "displayExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "itemsExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "keyExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "selectedExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "animationEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "createChildrenChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "dataStructureChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "expandAllEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "expandedExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "expandNodesRecursiveChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "hasItemsExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "parentIdExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "rootValueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "scrollDirectionChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "searchValueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "selectAllEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "selectAllTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "selectByClickChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "selectNodesRecursiveChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "showCheckBoxesChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "showCheckBoxesModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeViewComponent.prototype, "virtualModeEnabledChange", void 0);
    DxTreeViewComponent = __decorate([
        core_1.Component({
            selector: 'dx-tree-view',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxTreeViewComponent);
    return DxTreeViewComponent;
}(dx_component_1.DxComponent));
exports.DxTreeViewComponent = DxTreeViewComponent;
var DxTreeViewModule = (function () {
    function DxTreeViewModule() {
    }
    DxTreeViewModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxTreeViewComponent
            ],
            exports: [
                DxTreeViewComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxTreeViewModule);
    return DxTreeViewModule;
}());
exports.DxTreeViewModule = DxTreeViewModule;

//# sourceMappingURL=tree-view.js.map
