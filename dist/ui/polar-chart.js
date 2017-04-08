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
var polar_chart_1 = require('devextreme/viz/polar_chart');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxPolarChartComponent = (function (_super) {
    __extends(DxPolarChartComponent, _super);
    function DxPolarChartComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxPolarChart';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'done', emit: 'onDone' },
            { subscribe: 'pointClick', emit: 'onPointClick' },
            { subscribe: 'pointHoverChanged', emit: 'onPointHoverChanged' },
            { subscribe: 'pointSelectionChanged', emit: 'onPointSelectionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { subscribe: 'argumentAxisClick', emit: 'onArgumentAxisClick' },
            { subscribe: 'legendClick', emit: 'onLegendClick' },
            { subscribe: 'seriesClick', emit: 'onSeriesClick' },
            { subscribe: 'seriesHoverChanged', emit: 'onSeriesHoverChanged' },
            { subscribe: 'seriesSelectionChanged', emit: 'onSeriesSelectionChanged' },
            { emit: 'rtlEnabledChange' },
            { emit: 'exportChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'adaptiveLayoutChange' },
            { emit: 'animationChange' },
            { emit: 'customizeLabelChange' },
            { emit: 'customizePointChange' },
            { emit: 'dataSourceChange' },
            { emit: 'legendChange' },
            { emit: 'paletteChange' },
            { emit: 'pointSelectionModeChange' },
            { emit: 'argumentAxisChange' },
            { emit: 'barWidthChange' },
            { emit: 'commonAxisSettingsChange' },
            { emit: 'commonSeriesSettingsChange' },
            { emit: 'containerBackgroundColorChange' },
            { emit: 'dataPrepareSettingsChange' },
            { emit: 'equalBarWidthChange' },
            { emit: 'negativesAsZeroesChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'seriesChange' },
            { emit: 'seriesSelectionModeChange' },
            { emit: 'seriesTemplateChange' },
            { emit: 'useSpiderWebChange' },
            { emit: 'valueAxisChange' }
        ];
        this._properties = [
            'this.rtlEnabled',
            'this.export',
            'this.loadingIndicator',
            'this.margin',
            'this.pathModified',
            'this.redrawOnResize',
            'this.size',
            'this.theme',
            'this.title',
            'this.tooltip',
            'this.adaptiveLayout',
            'this.animation',
            'this.customizeLabel',
            'this.customizePoint',
            'this.dataSource',
            'this.legend',
            'this.palette',
            'this.pointSelectionMode',
            'this.argumentAxis',
            'this.barWidth',
            'this.commonAxisSettings',
            'this.commonSeriesSettings',
            'this.containerBackgroundColor',
            'this.dataPrepareSettings',
            'this.equalBarWidth',
            'this.negativesAsZeroes',
            'this.resolveLabelOverlapping',
            'this.series',
            'this.seriesSelectionMode',
            'this.seriesTemplate',
            'this.useSpiderWeb',
            'this.valueAxis'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onDrawn = new core_1.EventEmitter();
        this.onExported = new core_1.EventEmitter();
        this.onExporting = new core_1.EventEmitter();
        this.onFileSaving = new core_1.EventEmitter();
        this.onIncidentOccurred = new core_1.EventEmitter();
        this.onDone = new core_1.EventEmitter();
        this.onPointClick = new core_1.EventEmitter();
        this.onPointHoverChanged = new core_1.EventEmitter();
        this.onPointSelectionChanged = new core_1.EventEmitter();
        this.onTooltipHidden = new core_1.EventEmitter();
        this.onTooltipShown = new core_1.EventEmitter();
        this.onArgumentAxisClick = new core_1.EventEmitter();
        this.onLegendClick = new core_1.EventEmitter();
        this.onSeriesClick = new core_1.EventEmitter();
        this.onSeriesHoverChanged = new core_1.EventEmitter();
        this.onSeriesSelectionChanged = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.exportChange = new core_1.EventEmitter();
        this.loadingIndicatorChange = new core_1.EventEmitter();
        this.marginChange = new core_1.EventEmitter();
        this.pathModifiedChange = new core_1.EventEmitter();
        this.redrawOnResizeChange = new core_1.EventEmitter();
        this.sizeChange = new core_1.EventEmitter();
        this.themeChange = new core_1.EventEmitter();
        this.titleChange = new core_1.EventEmitter();
        this.tooltipChange = new core_1.EventEmitter();
        this.adaptiveLayoutChange = new core_1.EventEmitter();
        this.animationChange = new core_1.EventEmitter();
        this.customizeLabelChange = new core_1.EventEmitter();
        this.customizePointChange = new core_1.EventEmitter();
        this.dataSourceChange = new core_1.EventEmitter();
        this.legendChange = new core_1.EventEmitter();
        this.paletteChange = new core_1.EventEmitter();
        this.pointSelectionModeChange = new core_1.EventEmitter();
        this.argumentAxisChange = new core_1.EventEmitter();
        this.barWidthChange = new core_1.EventEmitter();
        this.commonAxisSettingsChange = new core_1.EventEmitter();
        this.commonSeriesSettingsChange = new core_1.EventEmitter();
        this.containerBackgroundColorChange = new core_1.EventEmitter();
        this.dataPrepareSettingsChange = new core_1.EventEmitter();
        this.equalBarWidthChange = new core_1.EventEmitter();
        this.negativesAsZeroesChange = new core_1.EventEmitter();
        this.resolveLabelOverlappingChange = new core_1.EventEmitter();
        this.seriesChange = new core_1.EventEmitter();
        this.seriesSelectionModeChange = new core_1.EventEmitter();
        this.seriesTemplateChange = new core_1.EventEmitter();
        this.useSpiderWebChange = new core_1.EventEmitter();
        this.valueAxisChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxPolarChartComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "loadingIndicator", {
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "redrawOnResize", {
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "adaptiveLayout", {
        get: function () {
            return this._getOption('adaptiveLayout');
        },
        set: function (value) {
            this._setOption('adaptiveLayout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "customizeLabel", {
        get: function () {
            return this._getOption('customizeLabel');
        },
        set: function (value) {
            this._setOption('customizeLabel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "customizePoint", {
        get: function () {
            return this._getOption('customizePoint');
        },
        set: function (value) {
            this._setOption('customizePoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "legend", {
        get: function () {
            return this._getOption('legend');
        },
        set: function (value) {
            this._setOption('legend', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "pointSelectionMode", {
        get: function () {
            return this._getOption('pointSelectionMode');
        },
        set: function (value) {
            this._setOption('pointSelectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "argumentAxis", {
        get: function () {
            return this._getOption('argumentAxis');
        },
        set: function (value) {
            this._setOption('argumentAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "barWidth", {
        get: function () {
            return this._getOption('barWidth');
        },
        set: function (value) {
            this._setOption('barWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "commonAxisSettings", {
        get: function () {
            return this._getOption('commonAxisSettings');
        },
        set: function (value) {
            this._setOption('commonAxisSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "commonSeriesSettings", {
        get: function () {
            return this._getOption('commonSeriesSettings');
        },
        set: function (value) {
            this._setOption('commonSeriesSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "containerBackgroundColor", {
        get: function () {
            return this._getOption('containerBackgroundColor');
        },
        set: function (value) {
            this._setOption('containerBackgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "dataPrepareSettings", {
        get: function () {
            return this._getOption('dataPrepareSettings');
        },
        set: function (value) {
            this._setOption('dataPrepareSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "equalBarWidth", {
        get: function () {
            return this._getOption('equalBarWidth');
        },
        set: function (value) {
            this._setOption('equalBarWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "negativesAsZeroes", {
        get: function () {
            return this._getOption('negativesAsZeroes');
        },
        set: function (value) {
            this._setOption('negativesAsZeroes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "resolveLabelOverlapping", {
        get: function () {
            return this._getOption('resolveLabelOverlapping');
        },
        set: function (value) {
            this._setOption('resolveLabelOverlapping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "series", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this._setOption('series', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "seriesSelectionMode", {
        get: function () {
            return this._getOption('seriesSelectionMode');
        },
        set: function (value) {
            this._setOption('seriesSelectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "seriesTemplate", {
        get: function () {
            return this._getOption('seriesTemplate');
        },
        set: function (value) {
            this._setOption('seriesTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "useSpiderWeb", {
        get: function () {
            return this._getOption('useSpiderWeb');
        },
        set: function (value) {
            this._setOption('useSpiderWeb', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "valueAxis", {
        get: function () {
            return this._getOption('valueAxis');
        },
        set: function (value) {
            this._setOption('valueAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPolarChartComponent.prototype._createInstance = function (element, options) {
        return new polar_chart_1.default(element, options);
    };
    DxPolarChartComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('palette', changes);
        this._idh.setup('series', changes);
    };
    DxPolarChartComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('series');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "export", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "loadingIndicator", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "margin", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "pathModified", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "redrawOnResize", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "size", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "theme", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "title", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "tooltip", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "adaptiveLayout", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "animation", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "customizeLabel", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "customizePoint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "legend", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "palette", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "pointSelectionMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "argumentAxis", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "barWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "commonAxisSettings", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "commonSeriesSettings", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "containerBackgroundColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "dataPrepareSettings", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "equalBarWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "negativesAsZeroes", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "resolveLabelOverlapping", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "series", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "seriesSelectionMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "seriesTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "useSpiderWeb", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPolarChartComponent.prototype, "valueAxis", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onDrawn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onExported", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onExporting", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onFileSaving", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onDone", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onPointClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onPointHoverChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onPointSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onTooltipHidden", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onTooltipShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onArgumentAxisClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onLegendClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onSeriesClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onSeriesHoverChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "onSeriesSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "exportChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "loadingIndicatorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "marginChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "redrawOnResizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "sizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "themeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "titleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "tooltipChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "adaptiveLayoutChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "animationChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "customizeLabelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "customizePointChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "legendChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "paletteChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "pointSelectionModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "argumentAxisChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "barWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "commonAxisSettingsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "commonSeriesSettingsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "containerBackgroundColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "dataPrepareSettingsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "equalBarWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "negativesAsZeroesChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "resolveLabelOverlappingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "seriesChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "seriesSelectionModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "seriesTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "useSpiderWebChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPolarChartComponent.prototype, "valueAxisChange", void 0);
    DxPolarChartComponent = __decorate([
        core_1.Component({
            selector: 'dx-polar-chart',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxPolarChartComponent);
    return DxPolarChartComponent;
}(dx_component_1.DxComponent));
exports.DxPolarChartComponent = DxPolarChartComponent;
var DxPolarChartModule = (function () {
    function DxPolarChartModule() {
    }
    DxPolarChartModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxPolarChartComponent
            ],
            exports: [
                DxPolarChartComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxPolarChartModule);
    return DxPolarChartModule;
}());
exports.DxPolarChartModule = DxPolarChartModule;

//# sourceMappingURL=polar-chart.js.map
