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
var vector_map_1 = require('devextreme/viz/vector_map');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxVectorMapComponent = (function (_super) {
    __extends(DxVectorMapComponent, _super);
    function DxVectorMapComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxVectorMap';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'areaClick', emit: 'onAreaClick' },
            { subscribe: 'areaSelectionChanged', emit: 'onAreaSelectionChanged' },
            { subscribe: 'centerChanged', emit: 'onCenterChanged' },
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'markerClick', emit: 'onMarkerClick' },
            { subscribe: 'markerSelectionChanged', emit: 'onMarkerSelectionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { subscribe: 'zoomFactorChanged', emit: 'onZoomFactorChanged' },
            { emit: 'rtlEnabledChange' },
            { emit: 'exportChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'areaSettingsChange' },
            { emit: 'backgroundChange' },
            { emit: 'boundsChange' },
            { emit: 'centerChange' },
            { emit: 'controlBarChange' },
            { emit: 'layersChange' },
            { emit: 'legendsChange' },
            { emit: 'mapDataChange' },
            { emit: 'markersChange' },
            { emit: 'markerSettingsChange' },
            { emit: 'maxZoomFactorChange' },
            { emit: 'panningEnabledChange' },
            { emit: 'projectionChange' },
            { emit: 'touchEnabledChange' },
            { emit: 'wheelEnabledChange' },
            { emit: 'zoomFactorChange' },
            { emit: 'zoomingEnabledChange' }
        ];
        this._properties = [
            'this.rtlEnabled',
            'this.export',
            'this.loadingIndicator',
            'this.pathModified',
            'this.redrawOnResize',
            'this.size',
            'this.theme',
            'this.title',
            'this.tooltip',
            'this.areaSettings',
            'this.background',
            'this.bounds',
            'this.center',
            'this.controlBar',
            'this.layers',
            'this.legends',
            'this.mapData',
            'this.markers',
            'this.markerSettings',
            'this.maxZoomFactor',
            'this.panningEnabled',
            'this.projection',
            'this.touchEnabled',
            'this.wheelEnabled',
            'this.zoomFactor',
            'this.zoomingEnabled'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onDrawn = new core_1.EventEmitter();
        this.onExported = new core_1.EventEmitter();
        this.onExporting = new core_1.EventEmitter();
        this.onFileSaving = new core_1.EventEmitter();
        this.onIncidentOccurred = new core_1.EventEmitter();
        this.onAreaClick = new core_1.EventEmitter();
        this.onAreaSelectionChanged = new core_1.EventEmitter();
        this.onCenterChanged = new core_1.EventEmitter();
        this.onClick = new core_1.EventEmitter();
        this.onMarkerClick = new core_1.EventEmitter();
        this.onMarkerSelectionChanged = new core_1.EventEmitter();
        this.onSelectionChanged = new core_1.EventEmitter();
        this.onTooltipHidden = new core_1.EventEmitter();
        this.onTooltipShown = new core_1.EventEmitter();
        this.onZoomFactorChanged = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.exportChange = new core_1.EventEmitter();
        this.loadingIndicatorChange = new core_1.EventEmitter();
        this.pathModifiedChange = new core_1.EventEmitter();
        this.redrawOnResizeChange = new core_1.EventEmitter();
        this.sizeChange = new core_1.EventEmitter();
        this.themeChange = new core_1.EventEmitter();
        this.titleChange = new core_1.EventEmitter();
        this.tooltipChange = new core_1.EventEmitter();
        this.areaSettingsChange = new core_1.EventEmitter();
        this.backgroundChange = new core_1.EventEmitter();
        this.boundsChange = new core_1.EventEmitter();
        this.centerChange = new core_1.EventEmitter();
        this.controlBarChange = new core_1.EventEmitter();
        this.layersChange = new core_1.EventEmitter();
        this.legendsChange = new core_1.EventEmitter();
        this.mapDataChange = new core_1.EventEmitter();
        this.markersChange = new core_1.EventEmitter();
        this.markerSettingsChange = new core_1.EventEmitter();
        this.maxZoomFactorChange = new core_1.EventEmitter();
        this.panningEnabledChange = new core_1.EventEmitter();
        this.projectionChange = new core_1.EventEmitter();
        this.touchEnabledChange = new core_1.EventEmitter();
        this.wheelEnabledChange = new core_1.EventEmitter();
        this.zoomFactorChange = new core_1.EventEmitter();
        this.zoomingEnabledChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxVectorMapComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "loadingIndicator", {
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "redrawOnResize", {
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "areaSettings", {
        get: function () {
            return this._getOption('areaSettings');
        },
        set: function (value) {
            this._setOption('areaSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "background", {
        get: function () {
            return this._getOption('background');
        },
        set: function (value) {
            this._setOption('background', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "bounds", {
        get: function () {
            return this._getOption('bounds');
        },
        set: function (value) {
            this._setOption('bounds', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "center", {
        get: function () {
            return this._getOption('center');
        },
        set: function (value) {
            this._setOption('center', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "controlBar", {
        get: function () {
            return this._getOption('controlBar');
        },
        set: function (value) {
            this._setOption('controlBar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "layers", {
        get: function () {
            return this._getOption('layers');
        },
        set: function (value) {
            this._setOption('layers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "legends", {
        get: function () {
            return this._getOption('legends');
        },
        set: function (value) {
            this._setOption('legends', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "mapData", {
        get: function () {
            return this._getOption('mapData');
        },
        set: function (value) {
            this._setOption('mapData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "markers", {
        get: function () {
            return this._getOption('markers');
        },
        set: function (value) {
            this._setOption('markers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "markerSettings", {
        get: function () {
            return this._getOption('markerSettings');
        },
        set: function (value) {
            this._setOption('markerSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "maxZoomFactor", {
        get: function () {
            return this._getOption('maxZoomFactor');
        },
        set: function (value) {
            this._setOption('maxZoomFactor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "panningEnabled", {
        get: function () {
            return this._getOption('panningEnabled');
        },
        set: function (value) {
            this._setOption('panningEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "projection", {
        get: function () {
            return this._getOption('projection');
        },
        set: function (value) {
            this._setOption('projection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "touchEnabled", {
        get: function () {
            return this._getOption('touchEnabled');
        },
        set: function (value) {
            this._setOption('touchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "wheelEnabled", {
        get: function () {
            return this._getOption('wheelEnabled');
        },
        set: function (value) {
            this._setOption('wheelEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "zoomFactor", {
        get: function () {
            return this._getOption('zoomFactor');
        },
        set: function (value) {
            this._setOption('zoomFactor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "zoomingEnabled", {
        get: function () {
            return this._getOption('zoomingEnabled');
        },
        set: function (value) {
            this._setOption('zoomingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    DxVectorMapComponent.prototype._createInstance = function (element, options) {
        return new vector_map_1.default(element, options);
    };
    DxVectorMapComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('bounds', changes);
        this._idh.setup('center', changes);
        this._idh.setup('layers', changes);
        this._idh.setup('legends', changes);
        this._idh.setup('mapData', changes);
        this._idh.setup('markers', changes);
    };
    DxVectorMapComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('bounds');
        this._idh.doCheck('center');
        this._idh.doCheck('layers');
        this._idh.doCheck('legends');
        this._idh.doCheck('mapData');
        this._idh.doCheck('markers');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "export", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "loadingIndicator", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "pathModified", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "redrawOnResize", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "size", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "theme", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "title", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "tooltip", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "areaSettings", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "background", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "bounds", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "center", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "controlBar", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "layers", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "legends", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "mapData", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "markers", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "markerSettings", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "maxZoomFactor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "panningEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "projection", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "touchEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "wheelEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "zoomFactor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxVectorMapComponent.prototype, "zoomingEnabled", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onDrawn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onExported", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onExporting", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onFileSaving", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onAreaClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onAreaSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onCenterChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onMarkerClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onMarkerSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onTooltipHidden", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onTooltipShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "onZoomFactorChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "exportChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "loadingIndicatorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "redrawOnResizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "sizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "themeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "titleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "tooltipChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "areaSettingsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "backgroundChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "boundsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "centerChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "controlBarChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "layersChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "legendsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "mapDataChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "markersChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "markerSettingsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "maxZoomFactorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "panningEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "projectionChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "touchEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "wheelEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "zoomFactorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxVectorMapComponent.prototype, "zoomingEnabledChange", void 0);
    DxVectorMapComponent = __decorate([
        core_1.Component({
            selector: 'dx-vector-map',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxVectorMapComponent);
    return DxVectorMapComponent;
}(dx_component_1.DxComponent));
exports.DxVectorMapComponent = DxVectorMapComponent;
var DxVectorMapModule = (function () {
    function DxVectorMapModule() {
    }
    DxVectorMapModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxVectorMapComponent
            ],
            exports: [
                DxVectorMapComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxVectorMapModule);
    return DxVectorMapModule;
}());
exports.DxVectorMapModule = DxVectorMapModule;

//# sourceMappingURL=vector-map.js.map
