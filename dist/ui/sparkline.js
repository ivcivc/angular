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
var sparkline_1 = require('devextreme/viz/sparkline');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxSparklineComponent = (function (_super) {
    __extends(DxSparklineComponent, _super);
    function DxSparklineComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxSparkline';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { emit: 'rtlEnabledChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'tooltipChange' },
            { emit: 'argumentFieldChange' },
            { emit: 'barNegativeColorChange' },
            { emit: 'barPositiveColorChange' },
            { emit: 'dataSourceChange' },
            { emit: 'firstLastColorChange' },
            { emit: 'ignoreEmptyPointsChange' },
            { emit: 'lineColorChange' },
            { emit: 'lineWidthChange' },
            { emit: 'lossColorChange' },
            { emit: 'maxColorChange' },
            { emit: 'maxValueChange' },
            { emit: 'minColorChange' },
            { emit: 'minValueChange' },
            { emit: 'pointColorChange' },
            { emit: 'pointSizeChange' },
            { emit: 'pointSymbolChange' },
            { emit: 'showFirstLastChange' },
            { emit: 'showMinMaxChange' },
            { emit: 'typeChange' },
            { emit: 'valueFieldChange' },
            { emit: 'winColorChange' },
            { emit: 'winlossThresholdChange' }
        ];
        this._properties = [
            'this.rtlEnabled',
            'this.margin',
            'this.pathModified',
            'this.size',
            'this.theme',
            'this.tooltip',
            'this.argumentField',
            'this.barNegativeColor',
            'this.barPositiveColor',
            'this.dataSource',
            'this.firstLastColor',
            'this.ignoreEmptyPoints',
            'this.lineColor',
            'this.lineWidth',
            'this.lossColor',
            'this.maxColor',
            'this.maxValue',
            'this.minColor',
            'this.minValue',
            'this.pointColor',
            'this.pointSize',
            'this.pointSymbol',
            'this.showFirstLast',
            'this.showMinMax',
            'this.type',
            'this.valueField',
            'this.winColor',
            'this.winlossThreshold'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onDrawn = new core_1.EventEmitter();
        this.onExported = new core_1.EventEmitter();
        this.onExporting = new core_1.EventEmitter();
        this.onFileSaving = new core_1.EventEmitter();
        this.onIncidentOccurred = new core_1.EventEmitter();
        this.onTooltipHidden = new core_1.EventEmitter();
        this.onTooltipShown = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.marginChange = new core_1.EventEmitter();
        this.pathModifiedChange = new core_1.EventEmitter();
        this.sizeChange = new core_1.EventEmitter();
        this.themeChange = new core_1.EventEmitter();
        this.tooltipChange = new core_1.EventEmitter();
        this.argumentFieldChange = new core_1.EventEmitter();
        this.barNegativeColorChange = new core_1.EventEmitter();
        this.barPositiveColorChange = new core_1.EventEmitter();
        this.dataSourceChange = new core_1.EventEmitter();
        this.firstLastColorChange = new core_1.EventEmitter();
        this.ignoreEmptyPointsChange = new core_1.EventEmitter();
        this.lineColorChange = new core_1.EventEmitter();
        this.lineWidthChange = new core_1.EventEmitter();
        this.lossColorChange = new core_1.EventEmitter();
        this.maxColorChange = new core_1.EventEmitter();
        this.maxValueChange = new core_1.EventEmitter();
        this.minColorChange = new core_1.EventEmitter();
        this.minValueChange = new core_1.EventEmitter();
        this.pointColorChange = new core_1.EventEmitter();
        this.pointSizeChange = new core_1.EventEmitter();
        this.pointSymbolChange = new core_1.EventEmitter();
        this.showFirstLastChange = new core_1.EventEmitter();
        this.showMinMaxChange = new core_1.EventEmitter();
        this.typeChange = new core_1.EventEmitter();
        this.valueFieldChange = new core_1.EventEmitter();
        this.winColorChange = new core_1.EventEmitter();
        this.winlossThresholdChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxSparklineComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "argumentField", {
        get: function () {
            return this._getOption('argumentField');
        },
        set: function (value) {
            this._setOption('argumentField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "barNegativeColor", {
        get: function () {
            return this._getOption('barNegativeColor');
        },
        set: function (value) {
            this._setOption('barNegativeColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "barPositiveColor", {
        get: function () {
            return this._getOption('barPositiveColor');
        },
        set: function (value) {
            this._setOption('barPositiveColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "firstLastColor", {
        get: function () {
            return this._getOption('firstLastColor');
        },
        set: function (value) {
            this._setOption('firstLastColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "ignoreEmptyPoints", {
        get: function () {
            return this._getOption('ignoreEmptyPoints');
        },
        set: function (value) {
            this._setOption('ignoreEmptyPoints', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "lineColor", {
        get: function () {
            return this._getOption('lineColor');
        },
        set: function (value) {
            this._setOption('lineColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "lineWidth", {
        get: function () {
            return this._getOption('lineWidth');
        },
        set: function (value) {
            this._setOption('lineWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "lossColor", {
        get: function () {
            return this._getOption('lossColor');
        },
        set: function (value) {
            this._setOption('lossColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "maxColor", {
        get: function () {
            return this._getOption('maxColor');
        },
        set: function (value) {
            this._setOption('maxColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "maxValue", {
        get: function () {
            return this._getOption('maxValue');
        },
        set: function (value) {
            this._setOption('maxValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "minColor", {
        get: function () {
            return this._getOption('minColor');
        },
        set: function (value) {
            this._setOption('minColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "minValue", {
        get: function () {
            return this._getOption('minValue');
        },
        set: function (value) {
            this._setOption('minValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "pointColor", {
        get: function () {
            return this._getOption('pointColor');
        },
        set: function (value) {
            this._setOption('pointColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "pointSize", {
        get: function () {
            return this._getOption('pointSize');
        },
        set: function (value) {
            this._setOption('pointSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "pointSymbol", {
        get: function () {
            return this._getOption('pointSymbol');
        },
        set: function (value) {
            this._setOption('pointSymbol', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "showFirstLast", {
        get: function () {
            return this._getOption('showFirstLast');
        },
        set: function (value) {
            this._setOption('showFirstLast', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "showMinMax", {
        get: function () {
            return this._getOption('showMinMax');
        },
        set: function (value) {
            this._setOption('showMinMax', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "valueField", {
        get: function () {
            return this._getOption('valueField');
        },
        set: function (value) {
            this._setOption('valueField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "winColor", {
        get: function () {
            return this._getOption('winColor');
        },
        set: function (value) {
            this._setOption('winColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSparklineComponent.prototype, "winlossThreshold", {
        get: function () {
            return this._getOption('winlossThreshold');
        },
        set: function (value) {
            this._setOption('winlossThreshold', value);
        },
        enumerable: true,
        configurable: true
    });
    DxSparklineComponent.prototype._createInstance = function (element, options) {
        return new sparkline_1.default(element, options);
    };
    DxSparklineComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
    };
    DxSparklineComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "margin", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "pathModified", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "size", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "theme", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "tooltip", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "argumentField", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "barNegativeColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "barPositiveColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "firstLastColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "ignoreEmptyPoints", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "lineColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "lineWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "lossColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "maxColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "maxValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "minColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "minValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "pointColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "pointSize", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "pointSymbol", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "showFirstLast", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "showMinMax", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "type", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "valueField", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "winColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSparklineComponent.prototype, "winlossThreshold", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "onDrawn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "onExported", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "onExporting", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "onFileSaving", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "onTooltipHidden", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "onTooltipShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "marginChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "sizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "themeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "tooltipChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "argumentFieldChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "barNegativeColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "barPositiveColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "firstLastColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "ignoreEmptyPointsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "lineColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "lineWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "lossColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "maxColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "maxValueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "minColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "minValueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "pointColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "pointSizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "pointSymbolChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "showFirstLastChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "showMinMaxChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "typeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "valueFieldChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "winColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSparklineComponent.prototype, "winlossThresholdChange", void 0);
    DxSparklineComponent = __decorate([
        core_1.Component({
            selector: 'dx-sparkline',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxSparklineComponent);
    return DxSparklineComponent;
}(dx_component_1.DxComponent));
exports.DxSparklineComponent = DxSparklineComponent;
var DxSparklineModule = (function () {
    function DxSparklineModule() {
    }
    DxSparklineModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxSparklineComponent
            ],
            exports: [
                DxSparklineComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxSparklineModule);
    return DxSparklineModule;
}());
exports.DxSparklineModule = DxSparklineModule;

//# sourceMappingURL=sparkline.js.map
