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
var gallery_1 = require('devextreme/ui/gallery');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxGalleryComponent = (function (_super) {
    __extends(DxGalleryComponent, _super);
    function DxGalleryComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxGallery';
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
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'accessKeyChange' },
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
            { emit: 'animationDurationChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'indicatorEnabledChange' },
            { emit: 'initialItemWidthChange' },
            { emit: 'loopChange' },
            { emit: 'showIndicatorChange' },
            { emit: 'showNavButtonsChange' },
            { emit: 'slideshowDelayChange' },
            { emit: 'stretchImagesChange' },
            { emit: 'swipeEnabledChange' },
            { emit: 'wrapAroundChange' }
        ];
        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.accessKey',
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
            'this.animationDuration',
            'this.animationEnabled',
            'this.indicatorEnabled',
            'this.initialItemWidth',
            'this.loop',
            'this.showIndicator',
            'this.showNavButtons',
            'this.slideshowDelay',
            'this.stretchImages',
            'this.swipeEnabled',
            'this.wrapAround'
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
        this.heightChange = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.widthChange = new core_1.EventEmitter();
        this.accessKeyChange = new core_1.EventEmitter();
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
        this.animationDurationChange = new core_1.EventEmitter();
        this.animationEnabledChange = new core_1.EventEmitter();
        this.indicatorEnabledChange = new core_1.EventEmitter();
        this.initialItemWidthChange = new core_1.EventEmitter();
        this.loopChange = new core_1.EventEmitter();
        this.showIndicatorChange = new core_1.EventEmitter();
        this.showNavButtonsChange = new core_1.EventEmitter();
        this.slideshowDelayChange = new core_1.EventEmitter();
        this.stretchImagesChange = new core_1.EventEmitter();
        this.swipeEnabledChange = new core_1.EventEmitter();
        this.wrapAroundChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxGalleryComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "itemHoldTimeout", {
        get: function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "selectedIndex", {
        get: function () {
            return this._getOption('selectedIndex');
        },
        set: function (value) {
            this._setOption('selectedIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "selectedItem", {
        get: function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "animationDuration", {
        get: function () {
            return this._getOption('animationDuration');
        },
        set: function (value) {
            this._setOption('animationDuration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "animationEnabled", {
        get: function () {
            return this._getOption('animationEnabled');
        },
        set: function (value) {
            this._setOption('animationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "indicatorEnabled", {
        get: function () {
            return this._getOption('indicatorEnabled');
        },
        set: function (value) {
            this._setOption('indicatorEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "initialItemWidth", {
        get: function () {
            return this._getOption('initialItemWidth');
        },
        set: function (value) {
            this._setOption('initialItemWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "loop", {
        get: function () {
            return this._getOption('loop');
        },
        set: function (value) {
            this._setOption('loop', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "showIndicator", {
        get: function () {
            return this._getOption('showIndicator');
        },
        set: function (value) {
            this._setOption('showIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "showNavButtons", {
        get: function () {
            return this._getOption('showNavButtons');
        },
        set: function (value) {
            this._setOption('showNavButtons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "slideshowDelay", {
        get: function () {
            return this._getOption('slideshowDelay');
        },
        set: function (value) {
            this._setOption('slideshowDelay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "stretchImages", {
        get: function () {
            return this._getOption('stretchImages');
        },
        set: function (value) {
            this._setOption('stretchImages', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "swipeEnabled", {
        get: function () {
            return this._getOption('swipeEnabled');
        },
        set: function (value) {
            this._setOption('swipeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "wrapAround", {
        get: function () {
            return this._getOption('wrapAround');
        },
        set: function (value) {
            this._setOption('wrapAround', value);
        },
        enumerable: true,
        configurable: true
    });
    DxGalleryComponent.prototype._createInstance = function (element, options) {
        return new gallery_1.default(element, options);
    };
    DxGalleryComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
    };
    DxGalleryComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "itemTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "selectedIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "selectedItem", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "animationDuration", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "animationEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "indicatorEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "initialItemWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "loop", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "showIndicator", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "showNavButtons", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "slideshowDelay", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "stretchImages", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "swipeEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxGalleryComponent.prototype, "wrapAround", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "onItemClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "onItemHold", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "onItemRendered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "selectedIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "itemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "animationDurationChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "animationEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "indicatorEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "initialItemWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "loopChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "showIndicatorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "showNavButtonsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "slideshowDelayChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "stretchImagesChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "swipeEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxGalleryComponent.prototype, "wrapAroundChange", void 0);
    DxGalleryComponent = __decorate([
        core_1.Component({
            selector: 'dx-gallery',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxGalleryComponent);
    return DxGalleryComponent;
}(dx_component_1.DxComponent));
exports.DxGalleryComponent = DxGalleryComponent;
var DxGalleryModule = (function () {
    function DxGalleryModule() {
    }
    DxGalleryModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxGalleryComponent
            ],
            exports: [
                DxGalleryComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxGalleryModule);
    return DxGalleryModule;
}());
exports.DxGalleryModule = DxGalleryModule;

//# sourceMappingURL=gallery.js.map
