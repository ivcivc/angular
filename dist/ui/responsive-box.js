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
var responsive_box_1 = require('devextreme/ui/responsive_box');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxResponsiveBoxComponent = (function (_super) {
    __extends(DxResponsiveBoxComponent, _super);
    function DxResponsiveBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxResponsiveBox';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'disabledChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'dataSourceChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'itemsChange' },
            { emit: 'colsChange' },
            { emit: 'rowsChange' },
            { emit: 'screenByWidthChange' },
            { emit: 'singleColumnScreenChange' }
        ];
        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.disabled',
            'this.hoverStateEnabled',
            'this.visible',
            'this.dataSource',
            'this.itemHoldTimeout',
            'this.itemTemplate',
            'this.items',
            'this.cols',
            'this.rows',
            'this.screenByWidth',
            'this.singleColumnScreen'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onContentReady = new core_1.EventEmitter();
        this.onItemClick = new core_1.EventEmitter();
        this.onItemContextMenu = new core_1.EventEmitter();
        this.onItemHold = new core_1.EventEmitter();
        this.onItemRendered = new core_1.EventEmitter();
        this.heightChange = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.widthChange = new core_1.EventEmitter();
        this.disabledChange = new core_1.EventEmitter();
        this.hoverStateEnabledChange = new core_1.EventEmitter();
        this.visibleChange = new core_1.EventEmitter();
        this.dataSourceChange = new core_1.EventEmitter();
        this.itemHoldTimeoutChange = new core_1.EventEmitter();
        this.itemTemplateChange = new core_1.EventEmitter();
        this.itemsChange = new core_1.EventEmitter();
        this.colsChange = new core_1.EventEmitter();
        this.rowsChange = new core_1.EventEmitter();
        this.screenByWidthChange = new core_1.EventEmitter();
        this.singleColumnScreenChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "itemHoldTimeout", {
        get: function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "cols", {
        get: function () {
            return this._getOption('cols');
        },
        set: function (value) {
            this._setOption('cols', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "rows", {
        get: function () {
            return this._getOption('rows');
        },
        set: function (value) {
            this._setOption('rows', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "screenByWidth", {
        get: function () {
            return this._getOption('screenByWidth');
        },
        set: function (value) {
            this._setOption('screenByWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "singleColumnScreen", {
        get: function () {
            return this._getOption('singleColumnScreen');
        },
        set: function (value) {
            this._setOption('singleColumnScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    DxResponsiveBoxComponent.prototype._createInstance = function (element, options) {
        return new responsive_box_1.default(element, options);
    };
    DxResponsiveBoxComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
        this._idh.setup('cols', changes);
        this._idh.setup('rows', changes);
    };
    DxResponsiveBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('cols');
        this._idh.doCheck('rows');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResponsiveBoxComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResponsiveBoxComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResponsiveBoxComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResponsiveBoxComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResponsiveBoxComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResponsiveBoxComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResponsiveBoxComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResponsiveBoxComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResponsiveBoxComponent.prototype, "itemTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResponsiveBoxComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResponsiveBoxComponent.prototype, "cols", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResponsiveBoxComponent.prototype, "rows", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResponsiveBoxComponent.prototype, "screenByWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResponsiveBoxComponent.prototype, "singleColumnScreen", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "onItemClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "onItemHold", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "onItemRendered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "itemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "colsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "rowsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "screenByWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResponsiveBoxComponent.prototype, "singleColumnScreenChange", void 0);
    DxResponsiveBoxComponent = __decorate([
        core_1.Component({
            selector: 'dx-responsive-box',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxResponsiveBoxComponent);
    return DxResponsiveBoxComponent;
}(dx_component_1.DxComponent));
exports.DxResponsiveBoxComponent = DxResponsiveBoxComponent;
var DxResponsiveBoxModule = (function () {
    function DxResponsiveBoxModule() {
    }
    DxResponsiveBoxModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxResponsiveBoxComponent
            ],
            exports: [
                DxResponsiveBoxComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxResponsiveBoxModule);
    return DxResponsiveBoxModule;
}());
exports.DxResponsiveBoxModule = DxResponsiveBoxModule;

//# sourceMappingURL=responsive-box.js.map
