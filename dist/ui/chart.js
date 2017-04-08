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
var chart_1 = require('devextreme/viz/chart');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxChartComponent = (function (_super) {
    __extends(DxChartComponent, _super);
    function DxChartComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxChart';
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
            { subscribe: 'zoomEnd', emit: 'onZoomEnd' },
            { subscribe: 'zoomStart', emit: 'onZoomStart' },
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
            { emit: 'adjustOnZoomChange' },
            { emit: 'argumentAxisChange' },
            { emit: 'barWidthChange' },
            { emit: 'commonAxisSettingsChange' },
            { emit: 'commonPaneSettingsChange' },
            { emit: 'commonSeriesSettingsChange' },
            { emit: 'containerBackgroundColorChange' },
            { emit: 'crosshairChange' },
            { emit: 'dataPrepareSettingsChange' },
            { emit: 'defaultPaneChange' },
            { emit: 'equalBarWidthChange' },
            { emit: 'maxBubbleSizeChange' },
            { emit: 'minBubbleSizeChange' },
            { emit: 'negativesAsZeroesChange' },
            { emit: 'panesChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'rotatedChange' },
            { emit: 'scrollBarChange' },
            { emit: 'scrollingModeChange' },
            { emit: 'seriesChange' },
            { emit: 'seriesSelectionModeChange' },
            { emit: 'seriesTemplateChange' },
            { emit: 'synchronizeMultiAxesChange' },
            { emit: 'useAggregationChange' },
            { emit: 'valueAxisChange' },
            { emit: 'zoomingModeChange' }
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
            'this.adjustOnZoom',
            'this.argumentAxis',
            'this.barWidth',
            'this.commonAxisSettings',
            'this.commonPaneSettings',
            'this.commonSeriesSettings',
            'this.containerBackgroundColor',
            'this.crosshair',
            'this.dataPrepareSettings',
            'this.defaultPane',
            'this.equalBarWidth',
            'this.maxBubbleSize',
            'this.minBubbleSize',
            'this.negativesAsZeroes',
            'this.panes',
            'this.resolveLabelOverlapping',
            'this.rotated',
            'this.scrollBar',
            'this.scrollingMode',
            'this.series',
            'this.seriesSelectionMode',
            'this.seriesTemplate',
            'this.synchronizeMultiAxes',
            'this.useAggregation',
            'this.valueAxis',
            'this.zoomingMode'
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
        this.onZoomEnd = new core_1.EventEmitter();
        this.onZoomStart = new core_1.EventEmitter();
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
        this.adjustOnZoomChange = new core_1.EventEmitter();
        this.argumentAxisChange = new core_1.EventEmitter();
        this.barWidthChange = new core_1.EventEmitter();
        this.commonAxisSettingsChange = new core_1.EventEmitter();
        this.commonPaneSettingsChange = new core_1.EventEmitter();
        this.commonSeriesSettingsChange = new core_1.EventEmitter();
        this.containerBackgroundColorChange = new core_1.EventEmitter();
        this.crosshairChange = new core_1.EventEmitter();
        this.dataPrepareSettingsChange = new core_1.EventEmitter();
        this.defaultPaneChange = new core_1.EventEmitter();
        this.equalBarWidthChange = new core_1.EventEmitter();
        this.maxBubbleSizeChange = new core_1.EventEmitter();
        this.minBubbleSizeChange = new core_1.EventEmitter();
        this.negativesAsZeroesChange = new core_1.EventEmitter();
        this.panesChange = new core_1.EventEmitter();
        this.resolveLabelOverlappingChange = new core_1.EventEmitter();
        this.rotatedChange = new core_1.EventEmitter();
        this.scrollBarChange = new core_1.EventEmitter();
        this.scrollingModeChange = new core_1.EventEmitter();
        this.seriesChange = new core_1.EventEmitter();
        this.seriesSelectionModeChange = new core_1.EventEmitter();
        this.seriesTemplateChange = new core_1.EventEmitter();
        this.synchronizeMultiAxesChange = new core_1.EventEmitter();
        this.useAggregationChange = new core_1.EventEmitter();
        this.valueAxisChange = new core_1.EventEmitter();
        this.zoomingModeChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxChartComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "loadingIndicator", {
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "redrawOnResize", {
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "adaptiveLayout", {
        get: function () {
            return this._getOption('adaptiveLayout');
        },
        set: function (value) {
            this._setOption('adaptiveLayout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "customizeLabel", {
        get: function () {
            return this._getOption('customizeLabel');
        },
        set: function (value) {
            this._setOption('customizeLabel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "customizePoint", {
        get: function () {
            return this._getOption('customizePoint');
        },
        set: function (value) {
            this._setOption('customizePoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "legend", {
        get: function () {
            return this._getOption('legend');
        },
        set: function (value) {
            this._setOption('legend', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "pointSelectionMode", {
        get: function () {
            return this._getOption('pointSelectionMode');
        },
        set: function (value) {
            this._setOption('pointSelectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "adjustOnZoom", {
        get: function () {
            return this._getOption('adjustOnZoom');
        },
        set: function (value) {
            this._setOption('adjustOnZoom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "argumentAxis", {
        get: function () {
            return this._getOption('argumentAxis');
        },
        set: function (value) {
            this._setOption('argumentAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "barWidth", {
        get: function () {
            return this._getOption('barWidth');
        },
        set: function (value) {
            this._setOption('barWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "commonAxisSettings", {
        get: function () {
            return this._getOption('commonAxisSettings');
        },
        set: function (value) {
            this._setOption('commonAxisSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "commonPaneSettings", {
        get: function () {
            return this._getOption('commonPaneSettings');
        },
        set: function (value) {
            this._setOption('commonPaneSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "commonSeriesSettings", {
        get: function () {
            return this._getOption('commonSeriesSettings');
        },
        set: function (value) {
            this._setOption('commonSeriesSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "containerBackgroundColor", {
        get: function () {
            return this._getOption('containerBackgroundColor');
        },
        set: function (value) {
            this._setOption('containerBackgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "crosshair", {
        get: function () {
            return this._getOption('crosshair');
        },
        set: function (value) {
            this._setOption('crosshair', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "dataPrepareSettings", {
        get: function () {
            return this._getOption('dataPrepareSettings');
        },
        set: function (value) {
            this._setOption('dataPrepareSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "defaultPane", {
        get: function () {
            return this._getOption('defaultPane');
        },
        set: function (value) {
            this._setOption('defaultPane', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "equalBarWidth", {
        get: function () {
            return this._getOption('equalBarWidth');
        },
        set: function (value) {
            this._setOption('equalBarWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "maxBubbleSize", {
        get: function () {
            return this._getOption('maxBubbleSize');
        },
        set: function (value) {
            this._setOption('maxBubbleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "minBubbleSize", {
        get: function () {
            return this._getOption('minBubbleSize');
        },
        set: function (value) {
            this._setOption('minBubbleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "negativesAsZeroes", {
        get: function () {
            return this._getOption('negativesAsZeroes');
        },
        set: function (value) {
            this._setOption('negativesAsZeroes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "panes", {
        get: function () {
            return this._getOption('panes');
        },
        set: function (value) {
            this._setOption('panes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "resolveLabelOverlapping", {
        get: function () {
            return this._getOption('resolveLabelOverlapping');
        },
        set: function (value) {
            this._setOption('resolveLabelOverlapping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "rotated", {
        get: function () {
            return this._getOption('rotated');
        },
        set: function (value) {
            this._setOption('rotated', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "scrollBar", {
        get: function () {
            return this._getOption('scrollBar');
        },
        set: function (value) {
            this._setOption('scrollBar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "scrollingMode", {
        get: function () {
            return this._getOption('scrollingMode');
        },
        set: function (value) {
            this._setOption('scrollingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "series", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this._setOption('series', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "seriesSelectionMode", {
        get: function () {
            return this._getOption('seriesSelectionMode');
        },
        set: function (value) {
            this._setOption('seriesSelectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "seriesTemplate", {
        get: function () {
            return this._getOption('seriesTemplate');
        },
        set: function (value) {
            this._setOption('seriesTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "synchronizeMultiAxes", {
        get: function () {
            return this._getOption('synchronizeMultiAxes');
        },
        set: function (value) {
            this._setOption('synchronizeMultiAxes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "useAggregation", {
        get: function () {
            return this._getOption('useAggregation');
        },
        set: function (value) {
            this._setOption('useAggregation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "valueAxis", {
        get: function () {
            return this._getOption('valueAxis');
        },
        set: function (value) {
            this._setOption('valueAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "zoomingMode", {
        get: function () {
            return this._getOption('zoomingMode');
        },
        set: function (value) {
            this._setOption('zoomingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    DxChartComponent.prototype._createInstance = function (element, options) {
        return new chart_1.default(element, options);
    };
    DxChartComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('palette', changes);
        this._idh.setup('panes', changes);
        this._idh.setup('series', changes);
        this._idh.setup('valueAxis', changes);
    };
    DxChartComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('panes');
        this._idh.doCheck('series');
        this._idh.doCheck('valueAxis');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "export", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "loadingIndicator", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "margin", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "pathModified", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "redrawOnResize", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "size", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "theme", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "title", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "tooltip", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "adaptiveLayout", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "animation", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "customizeLabel", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "customizePoint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "legend", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "palette", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "pointSelectionMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "adjustOnZoom", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "argumentAxis", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "barWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "commonAxisSettings", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "commonPaneSettings", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "commonSeriesSettings", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "containerBackgroundColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "crosshair", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "dataPrepareSettings", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "defaultPane", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "equalBarWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "maxBubbleSize", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "minBubbleSize", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "negativesAsZeroes", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "panes", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "resolveLabelOverlapping", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "rotated", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "scrollBar", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "scrollingMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "series", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "seriesSelectionMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "seriesTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "synchronizeMultiAxes", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "useAggregation", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "valueAxis", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxChartComponent.prototype, "zoomingMode", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onDrawn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onExported", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onExporting", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onFileSaving", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onDone", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onPointClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onPointHoverChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onPointSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onTooltipHidden", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onTooltipShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onArgumentAxisClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onLegendClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onSeriesClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onSeriesHoverChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onSeriesSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onZoomEnd", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "onZoomStart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "exportChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "loadingIndicatorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "marginChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "redrawOnResizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "sizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "themeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "titleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "tooltipChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "adaptiveLayoutChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "animationChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "customizeLabelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "customizePointChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "legendChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "paletteChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "pointSelectionModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "adjustOnZoomChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "argumentAxisChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "barWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "commonAxisSettingsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "commonPaneSettingsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "commonSeriesSettingsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "containerBackgroundColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "crosshairChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "dataPrepareSettingsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "defaultPaneChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "equalBarWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "maxBubbleSizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "minBubbleSizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "negativesAsZeroesChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "panesChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "resolveLabelOverlappingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "rotatedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "scrollBarChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "scrollingModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "seriesChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "seriesSelectionModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "seriesTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "synchronizeMultiAxesChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "useAggregationChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "valueAxisChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxChartComponent.prototype, "zoomingModeChange", void 0);
    DxChartComponent = __decorate([
        core_1.Component({
            selector: 'dx-chart',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxChartComponent);
    return DxChartComponent;
}(dx_component_1.DxComponent));
exports.DxChartComponent = DxChartComponent;
var DxChartModule = (function () {
    function DxChartModule() {
    }
    DxChartModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxChartComponent
            ],
            exports: [
                DxChartComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxChartModule);
    return DxChartModule;
}());
exports.DxChartModule = DxChartModule;

//# sourceMappingURL=chart.js.map
