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
var pie_chart_1 = require('devextreme/viz/pie_chart');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxPieChartComponent = (function (_super) {
    __extends(DxPieChartComponent, _super);
    function DxPieChartComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxPieChart';
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
            { subscribe: 'legendClick', emit: 'onLegendClick' },
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
            { emit: 'commonSeriesSettingsChange' },
            { emit: 'diameterChange' },
            { emit: 'innerRadiusChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'segmentsDirectionChange' },
            { emit: 'seriesChange' },
            { emit: 'startAngleChange' },
            { emit: 'typeChange' }
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
            'this.commonSeriesSettings',
            'this.diameter',
            'this.innerRadius',
            'this.resolveLabelOverlapping',
            'this.segmentsDirection',
            'this.series',
            'this.startAngle',
            'this.type'
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
        this.onLegendClick = new core_1.EventEmitter();
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
        this.commonSeriesSettingsChange = new core_1.EventEmitter();
        this.diameterChange = new core_1.EventEmitter();
        this.innerRadiusChange = new core_1.EventEmitter();
        this.resolveLabelOverlappingChange = new core_1.EventEmitter();
        this.segmentsDirectionChange = new core_1.EventEmitter();
        this.seriesChange = new core_1.EventEmitter();
        this.startAngleChange = new core_1.EventEmitter();
        this.typeChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxPieChartComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "loadingIndicator", {
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "redrawOnResize", {
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "adaptiveLayout", {
        get: function () {
            return this._getOption('adaptiveLayout');
        },
        set: function (value) {
            this._setOption('adaptiveLayout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "customizeLabel", {
        get: function () {
            return this._getOption('customizeLabel');
        },
        set: function (value) {
            this._setOption('customizeLabel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "customizePoint", {
        get: function () {
            return this._getOption('customizePoint');
        },
        set: function (value) {
            this._setOption('customizePoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "legend", {
        get: function () {
            return this._getOption('legend');
        },
        set: function (value) {
            this._setOption('legend', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "pointSelectionMode", {
        get: function () {
            return this._getOption('pointSelectionMode');
        },
        set: function (value) {
            this._setOption('pointSelectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "commonSeriesSettings", {
        get: function () {
            return this._getOption('commonSeriesSettings');
        },
        set: function (value) {
            this._setOption('commonSeriesSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "diameter", {
        get: function () {
            return this._getOption('diameter');
        },
        set: function (value) {
            this._setOption('diameter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "innerRadius", {
        get: function () {
            return this._getOption('innerRadius');
        },
        set: function (value) {
            this._setOption('innerRadius', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "resolveLabelOverlapping", {
        get: function () {
            return this._getOption('resolveLabelOverlapping');
        },
        set: function (value) {
            this._setOption('resolveLabelOverlapping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "segmentsDirection", {
        get: function () {
            return this._getOption('segmentsDirection');
        },
        set: function (value) {
            this._setOption('segmentsDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "series", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this._setOption('series', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "startAngle", {
        get: function () {
            return this._getOption('startAngle');
        },
        set: function (value) {
            this._setOption('startAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPieChartComponent.prototype._createInstance = function (element, options) {
        return new pie_chart_1.default(element, options);
    };
    DxPieChartComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('palette', changes);
        this._idh.setup('series', changes);
    };
    DxPieChartComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('series');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "export", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "loadingIndicator", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "margin", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "pathModified", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "redrawOnResize", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "size", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "theme", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "title", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "tooltip", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "adaptiveLayout", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "animation", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "customizeLabel", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "customizePoint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "legend", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "palette", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "pointSelectionMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "commonSeriesSettings", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "diameter", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "innerRadius", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "resolveLabelOverlapping", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "segmentsDirection", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "series", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "startAngle", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPieChartComponent.prototype, "type", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "onDrawn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "onExported", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "onExporting", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "onFileSaving", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "onDone", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "onPointClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "onPointHoverChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "onPointSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "onTooltipHidden", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "onTooltipShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "onLegendClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "exportChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "loadingIndicatorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "marginChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "redrawOnResizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "sizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "themeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "titleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "tooltipChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "adaptiveLayoutChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "animationChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "customizeLabelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "customizePointChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "legendChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "paletteChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "pointSelectionModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "commonSeriesSettingsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "diameterChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "innerRadiusChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "resolveLabelOverlappingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "segmentsDirectionChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "seriesChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "startAngleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPieChartComponent.prototype, "typeChange", void 0);
    DxPieChartComponent = __decorate([
        core_1.Component({
            selector: 'dx-pie-chart',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxPieChartComponent);
    return DxPieChartComponent;
}(dx_component_1.DxComponent));
exports.DxPieChartComponent = DxPieChartComponent;
var DxPieChartModule = (function () {
    function DxPieChartModule() {
    }
    DxPieChartModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxPieChartComponent
            ],
            exports: [
                DxPieChartComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxPieChartModule);
    return DxPieChartModule;
}());
exports.DxPieChartModule = DxPieChartModule;

//# sourceMappingURL=pie-chart.js.map
