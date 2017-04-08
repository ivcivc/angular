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
var tab_panel_1 = require('devextreme/ui/tab_panel');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxTabPanelComponent = (function (_super) {
    __extends(DxTabPanelComponent, _super);
    function DxTabPanelComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxTabPanel';
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
            { subscribe: 'titleClick', emit: 'onTitleClick' },
            { subscribe: 'titleHold', emit: 'onTitleHold' },
            { subscribe: 'titleRendered', emit: 'onTitleRendered' },
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
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' },
            { emit: 'itemsChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'loopChange' },
            { emit: 'swipeEnabledChange' },
            { emit: 'itemTitleTemplateChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollingEnabledChange' },
            { emit: 'showNavButtonsChange' }
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
            'this.selectedIndex',
            'this.selectedItem',
            'this.items',
            'this.animationEnabled',
            'this.deferRendering',
            'this.loop',
            'this.swipeEnabled',
            'this.itemTitleTemplate',
            'this.scrollByContent',
            'this.scrollingEnabled',
            'this.showNavButtons'
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
        this.onTitleClick = new core_1.EventEmitter();
        this.onTitleHold = new core_1.EventEmitter();
        this.onTitleRendered = new core_1.EventEmitter();
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
        this.selectedIndexChange = new core_1.EventEmitter();
        this.selectedItemChange = new core_1.EventEmitter();
        this.itemsChange = new core_1.EventEmitter();
        this.animationEnabledChange = new core_1.EventEmitter();
        this.deferRenderingChange = new core_1.EventEmitter();
        this.loopChange = new core_1.EventEmitter();
        this.swipeEnabledChange = new core_1.EventEmitter();
        this.itemTitleTemplateChange = new core_1.EventEmitter();
        this.scrollByContentChange = new core_1.EventEmitter();
        this.scrollingEnabledChange = new core_1.EventEmitter();
        this.showNavButtonsChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxTabPanelComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "itemHoldTimeout", {
        get: function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "selectedIndex", {
        get: function () {
            return this._getOption('selectedIndex');
        },
        set: function (value) {
            this._setOption('selectedIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "selectedItem", {
        get: function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "animationEnabled", {
        get: function () {
            return this._getOption('animationEnabled');
        },
        set: function (value) {
            this._setOption('animationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "deferRendering", {
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "loop", {
        get: function () {
            return this._getOption('loop');
        },
        set: function (value) {
            this._setOption('loop', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "swipeEnabled", {
        get: function () {
            return this._getOption('swipeEnabled');
        },
        set: function (value) {
            this._setOption('swipeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "itemTitleTemplate", {
        get: function () {
            return this._getOption('itemTitleTemplate');
        },
        set: function (value) {
            this._setOption('itemTitleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "scrollByContent", {
        get: function () {
            return this._getOption('scrollByContent');
        },
        set: function (value) {
            this._setOption('scrollByContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "scrollingEnabled", {
        get: function () {
            return this._getOption('scrollingEnabled');
        },
        set: function (value) {
            this._setOption('scrollingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTabPanelComponent.prototype, "showNavButtons", {
        get: function () {
            return this._getOption('showNavButtons');
        },
        set: function (value) {
            this._setOption('showNavButtons', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTabPanelComponent.prototype._createInstance = function (element, options) {
        return new tab_panel_1.default(element, options);
    };
    DxTabPanelComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
    };
    DxTabPanelComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "itemTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "selectedIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "selectedItem", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "animationEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "deferRendering", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "loop", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "swipeEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "itemTitleTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "scrollByContent", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "scrollingEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTabPanelComponent.prototype, "showNavButtons", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "onItemClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "onItemHold", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "onItemRendered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "onTitleClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "onTitleHold", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "onTitleRendered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "selectedIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "itemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "animationEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "loopChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "swipeEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "itemTitleTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "scrollByContentChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "scrollingEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTabPanelComponent.prototype, "showNavButtonsChange", void 0);
    DxTabPanelComponent = __decorate([
        core_1.Component({
            selector: 'dx-tab-panel',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxTabPanelComponent);
    return DxTabPanelComponent;
}(dx_component_1.DxComponent));
exports.DxTabPanelComponent = DxTabPanelComponent;
var DxTabPanelModule = (function () {
    function DxTabPanelModule() {
    }
    DxTabPanelModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxTabPanelComponent
            ],
            exports: [
                DxTabPanelComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxTabPanelModule);
    return DxTabPanelModule;
}());
exports.DxTabPanelModule = DxTabPanelModule;

//# sourceMappingURL=tab-panel.js.map
