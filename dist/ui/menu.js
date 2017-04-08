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
var menu_1 = require('devextreme/ui/menu');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxMenuComponent = (function (_super) {
    __extends(DxMenuComponent, _super);
    function DxMenuComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxMenu';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'submenuHidden', emit: 'onSubmenuHidden' },
            { subscribe: 'submenuHiding', emit: 'onSubmenuHiding' },
            { subscribe: 'submenuShowing', emit: 'onSubmenuShowing' },
            { subscribe: 'submenuShown', emit: 'onSubmenuShown' },
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
            { emit: 'adaptivityEnabledChange' },
            { emit: 'hideSubmenuOnMouseLeaveChange' },
            { emit: 'orientationChange' },
            { emit: 'showFirstSubmenuModeChange' },
            { emit: 'submenuDirectionChange' }
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
            'this.adaptivityEnabled',
            'this.hideSubmenuOnMouseLeave',
            'this.orientation',
            'this.showFirstSubmenuMode',
            'this.submenuDirection'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onContentReady = new core_1.EventEmitter();
        this.onItemClick = new core_1.EventEmitter();
        this.onItemContextMenu = new core_1.EventEmitter();
        this.onItemRendered = new core_1.EventEmitter();
        this.onSelectionChanged = new core_1.EventEmitter();
        this.onSubmenuHidden = new core_1.EventEmitter();
        this.onSubmenuHiding = new core_1.EventEmitter();
        this.onSubmenuShowing = new core_1.EventEmitter();
        this.onSubmenuShown = new core_1.EventEmitter();
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
        this.adaptivityEnabledChange = new core_1.EventEmitter();
        this.hideSubmenuOnMouseLeaveChange = new core_1.EventEmitter();
        this.orientationChange = new core_1.EventEmitter();
        this.showFirstSubmenuModeChange = new core_1.EventEmitter();
        this.submenuDirectionChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxMenuComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "selectedItem", {
        get: function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "selectionByClick", {
        get: function () {
            return this._getOption('selectionByClick');
        },
        set: function (value) {
            this._setOption('selectionByClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "selectionMode", {
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "disabledExpr", {
        get: function () {
            return this._getOption('disabledExpr');
        },
        set: function (value) {
            this._setOption('disabledExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "displayExpr", {
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "itemsExpr", {
        get: function () {
            return this._getOption('itemsExpr');
        },
        set: function (value) {
            this._setOption('itemsExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "selectedExpr", {
        get: function () {
            return this._getOption('selectedExpr');
        },
        set: function (value) {
            this._setOption('selectedExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "cssClass", {
        get: function () {
            return this._getOption('cssClass');
        },
        set: function (value) {
            this._setOption('cssClass', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "selectByClick", {
        get: function () {
            return this._getOption('selectByClick');
        },
        set: function (value) {
            this._setOption('selectByClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "showSubmenuMode", {
        get: function () {
            return this._getOption('showSubmenuMode');
        },
        set: function (value) {
            this._setOption('showSubmenuMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "adaptivityEnabled", {
        get: function () {
            return this._getOption('adaptivityEnabled');
        },
        set: function (value) {
            this._setOption('adaptivityEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "hideSubmenuOnMouseLeave", {
        get: function () {
            return this._getOption('hideSubmenuOnMouseLeave');
        },
        set: function (value) {
            this._setOption('hideSubmenuOnMouseLeave', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "orientation", {
        get: function () {
            return this._getOption('orientation');
        },
        set: function (value) {
            this._setOption('orientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "showFirstSubmenuMode", {
        get: function () {
            return this._getOption('showFirstSubmenuMode');
        },
        set: function (value) {
            this._setOption('showFirstSubmenuMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "submenuDirection", {
        get: function () {
            return this._getOption('submenuDirection');
        },
        set: function (value) {
            this._setOption('submenuDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    DxMenuComponent.prototype._createInstance = function (element, options) {
        return new menu_1.default(element, options);
    };
    DxMenuComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
    };
    DxMenuComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "itemTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "selectedItem", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "selectionByClick", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "selectionMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "disabledExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "displayExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "itemsExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "selectedExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "animation", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "cssClass", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "selectByClick", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "showSubmenuMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "adaptivityEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "hideSubmenuOnMouseLeave", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "orientation", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "showFirstSubmenuMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMenuComponent.prototype, "submenuDirection", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "onItemClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "onItemRendered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "onSubmenuHidden", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "onSubmenuHiding", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "onSubmenuShowing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "onSubmenuShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "selectionByClickChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "selectionModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "itemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "disabledExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "displayExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "itemsExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "selectedExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "animationChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "cssClassChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "selectByClickChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "showSubmenuModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "adaptivityEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "hideSubmenuOnMouseLeaveChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "orientationChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "showFirstSubmenuModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMenuComponent.prototype, "submenuDirectionChange", void 0);
    DxMenuComponent = __decorate([
        core_1.Component({
            selector: 'dx-menu',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxMenuComponent);
    return DxMenuComponent;
}(dx_component_1.DxComponent));
exports.DxMenuComponent = DxMenuComponent;
var DxMenuModule = (function () {
    function DxMenuModule() {
    }
    DxMenuModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxMenuComponent
            ],
            exports: [
                DxMenuComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxMenuModule);
    return DxMenuModule;
}());
exports.DxMenuModule = DxMenuModule;

//# sourceMappingURL=menu.js.map
