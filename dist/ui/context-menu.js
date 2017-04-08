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
var context_menu_1 = require('devextreme/ui/context_menu');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxContextMenuComponent = (function (_super) {
    __extends(DxContextMenuComponent, _super);
    function DxContextMenuComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxContextMenu';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'positioning', emit: 'onPositioning' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
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
            { emit: 'itemTemplateChange' },
            { emit: 'selectedItemChange' },
            { emit: 'selectedItemsChange' },
            { emit: 'selectionByClickChange' },
            { emit: 'selectionModeChange' },
            { emit: 'itemsChange' },
            { emit: 'disabledExprChange' },
            { emit: 'displayExprChange' },
            { emit: 'itemsExprChange' },
            { emit: 'selectedExprChange' },
            { emit: 'animationChange' },
            { emit: 'cssClassChange' },
            { emit: 'selectByClickChange' },
            { emit: 'showSubmenuModeChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'showEventChange' },
            { emit: 'submenuDirectionChange' },
            { emit: 'targetChange' },
            { emit: 'positionChange' }
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
            'this.itemTemplate',
            'this.selectedItem',
            'this.selectedItems',
            'this.selectionByClick',
            'this.selectionMode',
            'this.items',
            'this.disabledExpr',
            'this.displayExpr',
            'this.itemsExpr',
            'this.selectedExpr',
            'this.animation',
            'this.cssClass',
            'this.selectByClick',
            'this.showSubmenuMode',
            'this.closeOnOutsideClick',
            'this.showEvent',
            'this.submenuDirection',
            'this.target',
            'this.position'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onContentReady = new core_1.EventEmitter();
        this.onItemClick = new core_1.EventEmitter();
        this.onItemContextMenu = new core_1.EventEmitter();
        this.onItemRendered = new core_1.EventEmitter();
        this.onSelectionChanged = new core_1.EventEmitter();
        this.onHidden = new core_1.EventEmitter();
        this.onHiding = new core_1.EventEmitter();
        this.onPositioning = new core_1.EventEmitter();
        this.onShowing = new core_1.EventEmitter();
        this.onShown = new core_1.EventEmitter();
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
        this.itemTemplateChange = new core_1.EventEmitter();
        this.selectedItemChange = new core_1.EventEmitter();
        this.selectedItemsChange = new core_1.EventEmitter();
        this.selectionByClickChange = new core_1.EventEmitter();
        this.selectionModeChange = new core_1.EventEmitter();
        this.itemsChange = new core_1.EventEmitter();
        this.disabledExprChange = new core_1.EventEmitter();
        this.displayExprChange = new core_1.EventEmitter();
        this.itemsExprChange = new core_1.EventEmitter();
        this.selectedExprChange = new core_1.EventEmitter();
        this.animationChange = new core_1.EventEmitter();
        this.cssClassChange = new core_1.EventEmitter();
        this.selectByClickChange = new core_1.EventEmitter();
        this.showSubmenuModeChange = new core_1.EventEmitter();
        this.closeOnOutsideClickChange = new core_1.EventEmitter();
        this.showEventChange = new core_1.EventEmitter();
        this.submenuDirectionChange = new core_1.EventEmitter();
        this.targetChange = new core_1.EventEmitter();
        this.positionChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxContextMenuComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectedItem", {
        get: function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectedItems", {
        get: function () {
            return this._getOption('selectedItems');
        },
        set: function (value) {
            this._setOption('selectedItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectionByClick", {
        get: function () {
            return this._getOption('selectionByClick');
        },
        set: function (value) {
            this._setOption('selectionByClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectionMode", {
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "disabledExpr", {
        get: function () {
            return this._getOption('disabledExpr');
        },
        set: function (value) {
            this._setOption('disabledExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "displayExpr", {
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "itemsExpr", {
        get: function () {
            return this._getOption('itemsExpr');
        },
        set: function (value) {
            this._setOption('itemsExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectedExpr", {
        get: function () {
            return this._getOption('selectedExpr');
        },
        set: function (value) {
            this._setOption('selectedExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "cssClass", {
        get: function () {
            return this._getOption('cssClass');
        },
        set: function (value) {
            this._setOption('cssClass', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "selectByClick", {
        get: function () {
            return this._getOption('selectByClick');
        },
        set: function (value) {
            this._setOption('selectByClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "showSubmenuMode", {
        get: function () {
            return this._getOption('showSubmenuMode');
        },
        set: function (value) {
            this._setOption('showSubmenuMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "closeOnOutsideClick", {
        get: function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "showEvent", {
        get: function () {
            return this._getOption('showEvent');
        },
        set: function (value) {
            this._setOption('showEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "submenuDirection", {
        get: function () {
            return this._getOption('submenuDirection');
        },
        set: function (value) {
            this._setOption('submenuDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "target", {
        get: function () {
            return this._getOption('target');
        },
        set: function (value) {
            this._setOption('target', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxContextMenuComponent.prototype, "position", {
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    DxContextMenuComponent.prototype._createInstance = function (element, options) {
        return new context_menu_1.default(element, options);
    };
    DxContextMenuComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('selectedItems', changes);
        this._idh.setup('items', changes);
    };
    DxContextMenuComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('selectedItems');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "itemTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "selectedItem", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "selectedItems", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "selectionByClick", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "selectionMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "disabledExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "displayExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "itemsExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "selectedExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "animation", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "cssClass", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "selectByClick", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "showSubmenuMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "closeOnOutsideClick", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "showEvent", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "submenuDirection", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "target", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxContextMenuComponent.prototype, "position", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "onItemClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "onItemRendered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "onHidden", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "onHiding", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "onPositioning", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "onShowing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "onShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "selectedItemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "selectionByClickChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "selectionModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "itemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "disabledExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "displayExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "itemsExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "selectedExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "animationChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "cssClassChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "selectByClickChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "showSubmenuModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "closeOnOutsideClickChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "showEventChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "submenuDirectionChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "targetChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxContextMenuComponent.prototype, "positionChange", void 0);
    DxContextMenuComponent = __decorate([
        core_1.Component({
            selector: 'dx-context-menu',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxContextMenuComponent);
    return DxContextMenuComponent;
}(dx_component_1.DxComponent));
exports.DxContextMenuComponent = DxContextMenuComponent;
var DxContextMenuModule = (function () {
    function DxContextMenuModule() {
    }
    DxContextMenuModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxContextMenuComponent
            ],
            exports: [
                DxContextMenuComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxContextMenuModule);
    return DxContextMenuModule;
}());
exports.DxContextMenuModule = DxContextMenuModule;

//# sourceMappingURL=context-menu.js.map
