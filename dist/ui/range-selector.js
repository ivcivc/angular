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
var range_selector_1 = require('devextreme/viz/range_selector');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxRangeSelectorComponent = (function (_super) {
    __extends(DxRangeSelectorComponent, _super);
    function DxRangeSelectorComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxRangeSelector';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'selectedRangeChanged', emit: 'onSelectedRangeChanged' },
            { emit: 'rtlEnabledChange' },
            { emit: 'exportChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'backgroundChange' },
            { emit: 'behaviorChange' },
            { emit: 'chartChange' },
            { emit: 'containerBackgroundColorChange' },
            { emit: 'dataSourceChange' },
            { emit: 'dataSourceFieldChange' },
            { emit: 'indentChange' },
            { emit: 'scaleChange' },
            { emit: 'selectedRangeChange' },
            { emit: 'selectedRangeColorChange' },
            { emit: 'shutterChange' },
            { emit: 'sliderHandleChange' },
            { emit: 'sliderMarkerChange' }
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
            'this.background',
            'this.behavior',
            'this.chart',
            'this.containerBackgroundColor',
            'this.dataSource',
            'this.dataSourceField',
            'this.indent',
            'this.scale',
            'this.selectedRange',
            'this.selectedRangeColor',
            'this.shutter',
            'this.sliderHandle',
            'this.sliderMarker'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onDrawn = new core_1.EventEmitter();
        this.onExported = new core_1.EventEmitter();
        this.onExporting = new core_1.EventEmitter();
        this.onFileSaving = new core_1.EventEmitter();
        this.onIncidentOccurred = new core_1.EventEmitter();
        this.onSelectedRangeChanged = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.exportChange = new core_1.EventEmitter();
        this.loadingIndicatorChange = new core_1.EventEmitter();
        this.marginChange = new core_1.EventEmitter();
        this.pathModifiedChange = new core_1.EventEmitter();
        this.redrawOnResizeChange = new core_1.EventEmitter();
        this.sizeChange = new core_1.EventEmitter();
        this.themeChange = new core_1.EventEmitter();
        this.titleChange = new core_1.EventEmitter();
        this.backgroundChange = new core_1.EventEmitter();
        this.behaviorChange = new core_1.EventEmitter();
        this.chartChange = new core_1.EventEmitter();
        this.containerBackgroundColorChange = new core_1.EventEmitter();
        this.dataSourceChange = new core_1.EventEmitter();
        this.dataSourceFieldChange = new core_1.EventEmitter();
        this.indentChange = new core_1.EventEmitter();
        this.scaleChange = new core_1.EventEmitter();
        this.selectedRangeChange = new core_1.EventEmitter();
        this.selectedRangeColorChange = new core_1.EventEmitter();
        this.shutterChange = new core_1.EventEmitter();
        this.sliderHandleChange = new core_1.EventEmitter();
        this.sliderMarkerChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxRangeSelectorComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "loadingIndicator", {
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "redrawOnResize", {
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "background", {
        get: function () {
            return this._getOption('background');
        },
        set: function (value) {
            this._setOption('background', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "behavior", {
        get: function () {
            return this._getOption('behavior');
        },
        set: function (value) {
            this._setOption('behavior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "chart", {
        get: function () {
            return this._getOption('chart');
        },
        set: function (value) {
            this._setOption('chart', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "containerBackgroundColor", {
        get: function () {
            return this._getOption('containerBackgroundColor');
        },
        set: function (value) {
            this._setOption('containerBackgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "dataSourceField", {
        get: function () {
            return this._getOption('dataSourceField');
        },
        set: function (value) {
            this._setOption('dataSourceField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "indent", {
        get: function () {
            return this._getOption('indent');
        },
        set: function (value) {
            this._setOption('indent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "scale", {
        get: function () {
            return this._getOption('scale');
        },
        set: function (value) {
            this._setOption('scale', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "selectedRange", {
        get: function () {
            return this._getOption('selectedRange');
        },
        set: function (value) {
            this._setOption('selectedRange', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "selectedRangeColor", {
        get: function () {
            return this._getOption('selectedRangeColor');
        },
        set: function (value) {
            this._setOption('selectedRangeColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "shutter", {
        get: function () {
            return this._getOption('shutter');
        },
        set: function (value) {
            this._setOption('shutter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "sliderHandle", {
        get: function () {
            return this._getOption('sliderHandle');
        },
        set: function (value) {
            this._setOption('sliderHandle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSelectorComponent.prototype, "sliderMarker", {
        get: function () {
            return this._getOption('sliderMarker');
        },
        set: function (value) {
            this._setOption('sliderMarker', value);
        },
        enumerable: true,
        configurable: true
    });
    DxRangeSelectorComponent.prototype._createInstance = function (element, options) {
        return new range_selector_1.default(element, options);
    };
    DxRangeSelectorComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
    };
    DxRangeSelectorComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "export", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "loadingIndicator", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "margin", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "pathModified", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "redrawOnResize", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "size", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "theme", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "title", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "background", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "behavior", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "chart", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "containerBackgroundColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "dataSourceField", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "indent", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "scale", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "selectedRange", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "selectedRangeColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "shutter", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "sliderHandle", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxRangeSelectorComponent.prototype, "sliderMarker", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "onDrawn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "onExported", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "onExporting", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "onFileSaving", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "onSelectedRangeChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "exportChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "loadingIndicatorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "marginChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "redrawOnResizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "sizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "themeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "titleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "backgroundChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "behaviorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "chartChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "containerBackgroundColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "dataSourceFieldChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "indentChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "scaleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "selectedRangeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "selectedRangeColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "shutterChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "sliderHandleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxRangeSelectorComponent.prototype, "sliderMarkerChange", void 0);
    DxRangeSelectorComponent = __decorate([
        core_1.Component({
            selector: 'dx-range-selector',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxRangeSelectorComponent);
    return DxRangeSelectorComponent;
}(dx_component_1.DxComponent));
exports.DxRangeSelectorComponent = DxRangeSelectorComponent;
var DxRangeSelectorModule = (function () {
    function DxRangeSelectorModule() {
    }
    DxRangeSelectorModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxRangeSelectorComponent
            ],
            exports: [
                DxRangeSelectorComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxRangeSelectorModule);
    return DxRangeSelectorModule;
}());
exports.DxRangeSelectorModule = DxRangeSelectorModule;

//# sourceMappingURL=range-selector.js.map
