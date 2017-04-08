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
var map_1 = require('devextreme/ui/map');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxMapComponent = (function (_super) {
    __extends(DxMapComponent, _super);
    function DxMapComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxMap';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'markerAdded', emit: 'onMarkerAdded' },
            { subscribe: 'markerRemoved', emit: 'onMarkerRemoved' },
            { subscribe: 'ready', emit: 'onReady' },
            { subscribe: 'routeAdded', emit: 'onRouteAdded' },
            { subscribe: 'routeRemoved', emit: 'onRouteRemoved' },
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
            { emit: 'autoAdjustChange' },
            { emit: 'centerChange' },
            { emit: 'controlsChange' },
            { emit: 'keyChange' },
            { emit: 'markerIconSrcChange' },
            { emit: 'markersChange' },
            { emit: 'providerChange' },
            { emit: 'routesChange' },
            { emit: 'typeChange' },
            { emit: 'zoomChange' }
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
            'this.autoAdjust',
            'this.center',
            'this.controls',
            'this.key',
            'this.markerIconSrc',
            'this.markers',
            'this.provider',
            'this.routes',
            'this.type',
            'this.zoom'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onClick = new core_1.EventEmitter();
        this.onMarkerAdded = new core_1.EventEmitter();
        this.onMarkerRemoved = new core_1.EventEmitter();
        this.onReady = new core_1.EventEmitter();
        this.onRouteAdded = new core_1.EventEmitter();
        this.onRouteRemoved = new core_1.EventEmitter();
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
        this.autoAdjustChange = new core_1.EventEmitter();
        this.centerChange = new core_1.EventEmitter();
        this.controlsChange = new core_1.EventEmitter();
        this.keyChange = new core_1.EventEmitter();
        this.markerIconSrcChange = new core_1.EventEmitter();
        this.markersChange = new core_1.EventEmitter();
        this.providerChange = new core_1.EventEmitter();
        this.routesChange = new core_1.EventEmitter();
        this.typeChange = new core_1.EventEmitter();
        this.zoomChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxMapComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "autoAdjust", {
        get: function () {
            return this._getOption('autoAdjust');
        },
        set: function (value) {
            this._setOption('autoAdjust', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "center", {
        get: function () {
            return this._getOption('center');
        },
        set: function (value) {
            this._setOption('center', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "controls", {
        get: function () {
            return this._getOption('controls');
        },
        set: function (value) {
            this._setOption('controls', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "key", {
        get: function () {
            return this._getOption('key');
        },
        set: function (value) {
            this._setOption('key', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "markerIconSrc", {
        get: function () {
            return this._getOption('markerIconSrc');
        },
        set: function (value) {
            this._setOption('markerIconSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "markers", {
        get: function () {
            return this._getOption('markers');
        },
        set: function (value) {
            this._setOption('markers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "provider", {
        get: function () {
            return this._getOption('provider');
        },
        set: function (value) {
            this._setOption('provider', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "routes", {
        get: function () {
            return this._getOption('routes');
        },
        set: function (value) {
            this._setOption('routes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMapComponent.prototype, "zoom", {
        get: function () {
            return this._getOption('zoom');
        },
        set: function (value) {
            this._setOption('zoom', value);
        },
        enumerable: true,
        configurable: true
    });
    DxMapComponent.prototype._createInstance = function (element, options) {
        return new map_1.default(element, options);
    };
    DxMapComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('center', changes);
        this._idh.setup('markers', changes);
        this._idh.setup('routes', changes);
    };
    DxMapComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('center');
        this._idh.doCheck('markers');
        this._idh.doCheck('routes');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "autoAdjust", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "center", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "controls", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "key", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "markerIconSrc", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "markers", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "provider", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "routes", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "type", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxMapComponent.prototype, "zoom", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "onClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "onMarkerAdded", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "onMarkerRemoved", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "onReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "onRouteAdded", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "onRouteRemoved", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "autoAdjustChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "centerChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "controlsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "keyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "markerIconSrcChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "markersChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "providerChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "routesChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "typeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxMapComponent.prototype, "zoomChange", void 0);
    DxMapComponent = __decorate([
        core_1.Component({
            selector: 'dx-map',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxMapComponent);
    return DxMapComponent;
}(dx_component_1.DxComponent));
exports.DxMapComponent = DxMapComponent;
var DxMapModule = (function () {
    function DxMapModule() {
    }
    DxMapModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxMapComponent
            ],
            exports: [
                DxMapComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxMapModule);
    return DxMapModule;
}());
exports.DxMapModule = DxMapModule;

//# sourceMappingURL=map.js.map
