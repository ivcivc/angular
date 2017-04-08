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
var list_1 = require('devextreme/ui/list');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxListComponent = (function (_super) {
    __extends(DxListComponent, _super);
    function DxListComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxList';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemDeleted', emit: 'onItemDeleted' },
            { subscribe: 'itemDeleting', emit: 'onItemDeleting' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'itemReordered', emit: 'onItemReordered' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'groupRendered', emit: 'onGroupRendered' },
            { subscribe: 'itemSwipe', emit: 'onItemSwipe' },
            { subscribe: 'pageLoading', emit: 'onPageLoading' },
            { subscribe: 'pullRefresh', emit: 'onPullRefresh' },
            { subscribe: 'scroll', emit: 'onScroll' },
            { subscribe: 'selectAllValueChanged', emit: 'onSelectAllValueChanged' },
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
            { emit: 'selectedItemsChange' },
            { emit: 'selectionModeChange' },
            { emit: 'itemsChange' },
            { emit: 'allowItemDeletingChange' },
            { emit: 'allowItemReorderingChange' },
            { emit: 'autoPagingEnabledChange' },
            { emit: 'bounceEnabledChange' },
            { emit: 'collapsibleGroupsChange' },
            { emit: 'groupedChange' },
            { emit: 'groupTemplateChange' },
            { emit: 'indicateLoadingChange' },
            { emit: 'itemDeleteModeChange' },
            { emit: 'menuItemsChange' },
            { emit: 'menuModeChange' },
            { emit: 'nextButtonTextChange' },
            { emit: 'pageLoadingTextChange' },
            { emit: 'pageLoadModeChange' },
            { emit: 'pulledDownTextChange' },
            { emit: 'pullingDownTextChange' },
            { emit: 'pullRefreshEnabledChange' },
            { emit: 'refreshingTextChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollByThumbChange' },
            { emit: 'scrollingEnabledChange' },
            { emit: 'showNextButtonChange' },
            { emit: 'showScrollbarChange' },
            { emit: 'showSelectionControlsChange' },
            { emit: 'useNativeScrollingChange' }
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
            'this.selectedItems',
            'this.selectionMode',
            'this.items',
            'this.allowItemDeleting',
            'this.allowItemReordering',
            'this.autoPagingEnabled',
            'this.bounceEnabled',
            'this.collapsibleGroups',
            'this.grouped',
            'this.groupTemplate',
            'this.indicateLoading',
            'this.itemDeleteMode',
            'this.menuItems',
            'this.menuMode',
            'this.nextButtonText',
            'this.pageLoadingText',
            'this.pageLoadMode',
            'this.pulledDownText',
            'this.pullingDownText',
            'this.pullRefreshEnabled',
            'this.refreshingText',
            'this.scrollByContent',
            'this.scrollByThumb',
            'this.scrollingEnabled',
            'this.showNextButton',
            'this.showScrollbar',
            'this.showSelectionControls',
            'this.useNativeScrolling'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onContentReady = new core_1.EventEmitter();
        this.onItemClick = new core_1.EventEmitter();
        this.onItemContextMenu = new core_1.EventEmitter();
        this.onItemDeleted = new core_1.EventEmitter();
        this.onItemDeleting = new core_1.EventEmitter();
        this.onItemHold = new core_1.EventEmitter();
        this.onItemRendered = new core_1.EventEmitter();
        this.onItemReordered = new core_1.EventEmitter();
        this.onSelectionChanged = new core_1.EventEmitter();
        this.onGroupRendered = new core_1.EventEmitter();
        this.onItemSwipe = new core_1.EventEmitter();
        this.onPageLoading = new core_1.EventEmitter();
        this.onPullRefresh = new core_1.EventEmitter();
        this.onScroll = new core_1.EventEmitter();
        this.onSelectAllValueChanged = new core_1.EventEmitter();
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
        this.selectedItemsChange = new core_1.EventEmitter();
        this.selectionModeChange = new core_1.EventEmitter();
        this.itemsChange = new core_1.EventEmitter();
        this.allowItemDeletingChange = new core_1.EventEmitter();
        this.allowItemReorderingChange = new core_1.EventEmitter();
        this.autoPagingEnabledChange = new core_1.EventEmitter();
        this.bounceEnabledChange = new core_1.EventEmitter();
        this.collapsibleGroupsChange = new core_1.EventEmitter();
        this.groupedChange = new core_1.EventEmitter();
        this.groupTemplateChange = new core_1.EventEmitter();
        this.indicateLoadingChange = new core_1.EventEmitter();
        this.itemDeleteModeChange = new core_1.EventEmitter();
        this.menuItemsChange = new core_1.EventEmitter();
        this.menuModeChange = new core_1.EventEmitter();
        this.nextButtonTextChange = new core_1.EventEmitter();
        this.pageLoadingTextChange = new core_1.EventEmitter();
        this.pageLoadModeChange = new core_1.EventEmitter();
        this.pulledDownTextChange = new core_1.EventEmitter();
        this.pullingDownTextChange = new core_1.EventEmitter();
        this.pullRefreshEnabledChange = new core_1.EventEmitter();
        this.refreshingTextChange = new core_1.EventEmitter();
        this.scrollByContentChange = new core_1.EventEmitter();
        this.scrollByThumbChange = new core_1.EventEmitter();
        this.scrollingEnabledChange = new core_1.EventEmitter();
        this.showNextButtonChange = new core_1.EventEmitter();
        this.showScrollbarChange = new core_1.EventEmitter();
        this.showSelectionControlsChange = new core_1.EventEmitter();
        this.useNativeScrollingChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxListComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "itemHoldTimeout", {
        get: function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "noDataText", {
        get: function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "selectedItems", {
        get: function () {
            return this._getOption('selectedItems');
        },
        set: function (value) {
            this._setOption('selectedItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "selectionMode", {
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "allowItemDeleting", {
        get: function () {
            return this._getOption('allowItemDeleting');
        },
        set: function (value) {
            this._setOption('allowItemDeleting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "allowItemReordering", {
        get: function () {
            return this._getOption('allowItemReordering');
        },
        set: function (value) {
            this._setOption('allowItemReordering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "autoPagingEnabled", {
        get: function () {
            return this._getOption('autoPagingEnabled');
        },
        set: function (value) {
            this._setOption('autoPagingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "bounceEnabled", {
        get: function () {
            return this._getOption('bounceEnabled');
        },
        set: function (value) {
            this._setOption('bounceEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "collapsibleGroups", {
        get: function () {
            return this._getOption('collapsibleGroups');
        },
        set: function (value) {
            this._setOption('collapsibleGroups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "grouped", {
        get: function () {
            return this._getOption('grouped');
        },
        set: function (value) {
            this._setOption('grouped', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "groupTemplate", {
        get: function () {
            return this._getOption('groupTemplate');
        },
        set: function (value) {
            this._setOption('groupTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "indicateLoading", {
        get: function () {
            return this._getOption('indicateLoading');
        },
        set: function (value) {
            this._setOption('indicateLoading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "itemDeleteMode", {
        get: function () {
            return this._getOption('itemDeleteMode');
        },
        set: function (value) {
            this._setOption('itemDeleteMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "menuItems", {
        get: function () {
            return this._getOption('menuItems');
        },
        set: function (value) {
            this._setOption('menuItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "menuMode", {
        get: function () {
            return this._getOption('menuMode');
        },
        set: function (value) {
            this._setOption('menuMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "nextButtonText", {
        get: function () {
            return this._getOption('nextButtonText');
        },
        set: function (value) {
            this._setOption('nextButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "pageLoadingText", {
        get: function () {
            return this._getOption('pageLoadingText');
        },
        set: function (value) {
            this._setOption('pageLoadingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "pageLoadMode", {
        get: function () {
            return this._getOption('pageLoadMode');
        },
        set: function (value) {
            this._setOption('pageLoadMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "pulledDownText", {
        get: function () {
            return this._getOption('pulledDownText');
        },
        set: function (value) {
            this._setOption('pulledDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "pullingDownText", {
        get: function () {
            return this._getOption('pullingDownText');
        },
        set: function (value) {
            this._setOption('pullingDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "pullRefreshEnabled", {
        get: function () {
            return this._getOption('pullRefreshEnabled');
        },
        set: function (value) {
            this._setOption('pullRefreshEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "refreshingText", {
        get: function () {
            return this._getOption('refreshingText');
        },
        set: function (value) {
            this._setOption('refreshingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "scrollByContent", {
        get: function () {
            return this._getOption('scrollByContent');
        },
        set: function (value) {
            this._setOption('scrollByContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "scrollByThumb", {
        get: function () {
            return this._getOption('scrollByThumb');
        },
        set: function (value) {
            this._setOption('scrollByThumb', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "scrollingEnabled", {
        get: function () {
            return this._getOption('scrollingEnabled');
        },
        set: function (value) {
            this._setOption('scrollingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "showNextButton", {
        get: function () {
            return this._getOption('showNextButton');
        },
        set: function (value) {
            this._setOption('showNextButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "showScrollbar", {
        get: function () {
            return this._getOption('showScrollbar');
        },
        set: function (value) {
            this._setOption('showScrollbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "showSelectionControls", {
        get: function () {
            return this._getOption('showSelectionControls');
        },
        set: function (value) {
            this._setOption('showSelectionControls', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxListComponent.prototype, "useNativeScrolling", {
        get: function () {
            return this._getOption('useNativeScrolling');
        },
        set: function (value) {
            this._setOption('useNativeScrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    DxListComponent.prototype._createInstance = function (element, options) {
        return new list_1.default(element, options);
    };
    DxListComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('selectedItems', changes);
        this._idh.setup('items', changes);
        this._idh.setup('menuItems', changes);
    };
    DxListComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('selectedItems');
        this._idh.doCheck('items');
        this._idh.doCheck('menuItems');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "itemTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "noDataText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "selectedItems", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "selectionMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "allowItemDeleting", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "allowItemReordering", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "autoPagingEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "bounceEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "collapsibleGroups", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "grouped", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "groupTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "indicateLoading", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "itemDeleteMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "menuItems", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "menuMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "nextButtonText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "pageLoadingText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "pageLoadMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "pulledDownText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "pullingDownText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "pullRefreshEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "refreshingText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "scrollByContent", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "scrollByThumb", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "scrollingEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "showNextButton", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "showScrollbar", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "showSelectionControls", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxListComponent.prototype, "useNativeScrolling", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onItemClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onItemDeleted", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onItemDeleting", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onItemHold", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onItemRendered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onItemReordered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onGroupRendered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onItemSwipe", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onPageLoading", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onPullRefresh", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onScroll", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "onSelectAllValueChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "selectedItemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "selectionModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "itemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "allowItemDeletingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "allowItemReorderingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "autoPagingEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "bounceEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "collapsibleGroupsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "groupedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "groupTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "indicateLoadingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "itemDeleteModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "menuItemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "menuModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "nextButtonTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "pageLoadingTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "pageLoadModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "pulledDownTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "pullingDownTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "pullRefreshEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "refreshingTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "scrollByContentChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "scrollByThumbChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "scrollingEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "showNextButtonChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "showScrollbarChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "showSelectionControlsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxListComponent.prototype, "useNativeScrollingChange", void 0);
    DxListComponent = __decorate([
        core_1.Component({
            selector: 'dx-list',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxListComponent);
    return DxListComponent;
}(dx_component_1.DxComponent));
exports.DxListComponent = DxListComponent;
var DxListModule = (function () {
    function DxListModule() {
    }
    DxListModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxListComponent
            ],
            exports: [
                DxListComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxListModule);
    return DxListModule;
}());
exports.DxListModule = DxListModule;

//# sourceMappingURL=list.js.map
