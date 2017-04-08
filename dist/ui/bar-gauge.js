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
var bar_gauge_1 = require('devextreme/viz/bar_gauge');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxBarGaugeComponent = (function (_super) {
    __extends(DxBarGaugeComponent, _super);
    function DxBarGaugeComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxBarGauge';
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
            { emit: 'exportChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'animationChange' },
            { emit: 'backgroundColorChange' },
            { emit: 'barSpacingChange' },
            { emit: 'baseValueChange' },
            { emit: 'endValueChange' },
            { emit: 'geometryChange' },
            { emit: 'labelChange' },
            { emit: 'paletteChange' },
            { emit: 'relativeInnerRadiusChange' },
            { emit: 'startValueChange' },
            { emit: 'subtitleChange' },
            { emit: 'valuesChange' }
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
            'this.animation',
            'this.backgroundColor',
            'this.barSpacing',
            'this.baseValue',
            'this.endValue',
            'this.geometry',
            'this.label',
            'this.palette',
            'this.relativeInnerRadius',
            'this.startValue',
            'this.subtitle',
            'this.values'
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
        this.exportChange = new core_1.EventEmitter();
        this.loadingIndicatorChange = new core_1.EventEmitter();
        this.marginChange = new core_1.EventEmitter();
        this.pathModifiedChange = new core_1.EventEmitter();
        this.redrawOnResizeChange = new core_1.EventEmitter();
        this.sizeChange = new core_1.EventEmitter();
        this.themeChange = new core_1.EventEmitter();
        this.titleChange = new core_1.EventEmitter();
        this.tooltipChange = new core_1.EventEmitter();
        this.animationChange = new core_1.EventEmitter();
        this.backgroundColorChange = new core_1.EventEmitter();
        this.barSpacingChange = new core_1.EventEmitter();
        this.baseValueChange = new core_1.EventEmitter();
        this.endValueChange = new core_1.EventEmitter();
        this.geometryChange = new core_1.EventEmitter();
        this.labelChange = new core_1.EventEmitter();
        this.paletteChange = new core_1.EventEmitter();
        this.relativeInnerRadiusChange = new core_1.EventEmitter();
        this.startValueChange = new core_1.EventEmitter();
        this.subtitleChange = new core_1.EventEmitter();
        this.valuesChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxBarGaugeComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "loadingIndicator", {
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "redrawOnResize", {
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "backgroundColor", {
        get: function () {
            return this._getOption('backgroundColor');
        },
        set: function (value) {
            this._setOption('backgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "barSpacing", {
        get: function () {
            return this._getOption('barSpacing');
        },
        set: function (value) {
            this._setOption('barSpacing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "baseValue", {
        get: function () {
            return this._getOption('baseValue');
        },
        set: function (value) {
            this._setOption('baseValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "endValue", {
        get: function () {
            return this._getOption('endValue');
        },
        set: function (value) {
            this._setOption('endValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "geometry", {
        get: function () {
            return this._getOption('geometry');
        },
        set: function (value) {
            this._setOption('geometry', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "relativeInnerRadius", {
        get: function () {
            return this._getOption('relativeInnerRadius');
        },
        set: function (value) {
            this._setOption('relativeInnerRadius', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "startValue", {
        get: function () {
            return this._getOption('startValue');
        },
        set: function (value) {
            this._setOption('startValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "subtitle", {
        get: function () {
            return this._getOption('subtitle');
        },
        set: function (value) {
            this._setOption('subtitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBarGaugeComponent.prototype, "values", {
        get: function () {
            return this._getOption('values');
        },
        set: function (value) {
            this._setOption('values', value);
        },
        enumerable: true,
        configurable: true
    });
    DxBarGaugeComponent.prototype._createInstance = function (element, options) {
        return new bar_gauge_1.default(element, options);
    };
    DxBarGaugeComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('palette', changes);
        this._idh.setup('values', changes);
    };
    DxBarGaugeComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('palette');
        this._idh.doCheck('values');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "export", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "loadingIndicator", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "margin", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "pathModified", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "redrawOnResize", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "size", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "theme", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "title", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "tooltip", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "animation", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "backgroundColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "barSpacing", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "baseValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "endValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "geometry", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "label", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "palette", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "relativeInnerRadius", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "startValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "subtitle", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBarGaugeComponent.prototype, "values", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "onDrawn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "onExported", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "onExporting", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "onFileSaving", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "onTooltipHidden", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "onTooltipShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "exportChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "loadingIndicatorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "marginChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "redrawOnResizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "sizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "themeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "titleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "tooltipChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "animationChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "backgroundColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "barSpacingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "baseValueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "endValueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "geometryChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "labelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "paletteChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "relativeInnerRadiusChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "startValueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "subtitleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBarGaugeComponent.prototype, "valuesChange", void 0);
    DxBarGaugeComponent = __decorate([
        core_1.Component({
            selector: 'dx-bar-gauge',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxBarGaugeComponent);
    return DxBarGaugeComponent;
}(dx_component_1.DxComponent));
exports.DxBarGaugeComponent = DxBarGaugeComponent;
var DxBarGaugeModule = (function () {
    function DxBarGaugeModule() {
    }
    DxBarGaugeModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxBarGaugeComponent
            ],
            exports: [
                DxBarGaugeComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxBarGaugeModule);
    return DxBarGaugeModule;
}());
exports.DxBarGaugeModule = DxBarGaugeModule;

//# sourceMappingURL=bar-gauge.js.map
