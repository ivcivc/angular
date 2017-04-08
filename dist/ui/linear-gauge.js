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
var linear_gauge_1 = require('devextreme/viz/linear_gauge');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxLinearGaugeComponent = (function (_super) {
    __extends(DxLinearGaugeComponent, _super);
    function DxLinearGaugeComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxLinearGauge';
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
            { emit: 'containerBackgroundColorChange' },
            { emit: 'rangeContainerChange' },
            { emit: 'scaleChange' },
            { emit: 'subtitleChange' },
            { emit: 'subvaluesChange' },
            { emit: 'valueChange' },
            { emit: 'geometryChange' },
            { emit: 'subvalueIndicatorChange' },
            { emit: 'valueIndicatorChange' }
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
            'this.containerBackgroundColor',
            'this.rangeContainer',
            'this.scale',
            'this.subtitle',
            'this.subvalues',
            'this.value',
            'this.geometry',
            'this.subvalueIndicator',
            'this.valueIndicator'
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
        this.containerBackgroundColorChange = new core_1.EventEmitter();
        this.rangeContainerChange = new core_1.EventEmitter();
        this.scaleChange = new core_1.EventEmitter();
        this.subtitleChange = new core_1.EventEmitter();
        this.subvaluesChange = new core_1.EventEmitter();
        this.valueChange = new core_1.EventEmitter();
        this.geometryChange = new core_1.EventEmitter();
        this.subvalueIndicatorChange = new core_1.EventEmitter();
        this.valueIndicatorChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxLinearGaugeComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "loadingIndicator", {
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "redrawOnResize", {
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "containerBackgroundColor", {
        get: function () {
            return this._getOption('containerBackgroundColor');
        },
        set: function (value) {
            this._setOption('containerBackgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "rangeContainer", {
        get: function () {
            return this._getOption('rangeContainer');
        },
        set: function (value) {
            this._setOption('rangeContainer', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "scale", {
        get: function () {
            return this._getOption('scale');
        },
        set: function (value) {
            this._setOption('scale', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "subtitle", {
        get: function () {
            return this._getOption('subtitle');
        },
        set: function (value) {
            this._setOption('subtitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "subvalues", {
        get: function () {
            return this._getOption('subvalues');
        },
        set: function (value) {
            this._setOption('subvalues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "geometry", {
        get: function () {
            return this._getOption('geometry');
        },
        set: function (value) {
            this._setOption('geometry', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "subvalueIndicator", {
        get: function () {
            return this._getOption('subvalueIndicator');
        },
        set: function (value) {
            this._setOption('subvalueIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLinearGaugeComponent.prototype, "valueIndicator", {
        get: function () {
            return this._getOption('valueIndicator');
        },
        set: function (value) {
            this._setOption('valueIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    DxLinearGaugeComponent.prototype._createInstance = function (element, options) {
        var widget = new linear_gauge_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxLinearGaugeComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('subvalues', changes);
    };
    DxLinearGaugeComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('subvalues');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.ContentChild(validator_1.DxValidatorComponent), 
        __metadata('design:type', validator_1.DxValidatorComponent)
    ], DxLinearGaugeComponent.prototype, "validator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "export", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "loadingIndicator", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "margin", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "pathModified", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "redrawOnResize", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "size", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "theme", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "title", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "tooltip", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "animation", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "containerBackgroundColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "rangeContainer", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "scale", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "subtitle", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "subvalues", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "geometry", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "subvalueIndicator", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLinearGaugeComponent.prototype, "valueIndicator", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "onDrawn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "onExported", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "onExporting", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "onFileSaving", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "onTooltipHidden", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "onTooltipShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "exportChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "loadingIndicatorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "marginChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "redrawOnResizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "sizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "themeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "titleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "tooltipChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "animationChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "containerBackgroundColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "rangeContainerChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "scaleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "subtitleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "subvaluesChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "valueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "geometryChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "subvalueIndicatorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLinearGaugeComponent.prototype, "valueIndicatorChange", void 0);
    DxLinearGaugeComponent = __decorate([
        core_1.Component({
            selector: 'dx-linear-gauge',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxLinearGaugeComponent);
    return DxLinearGaugeComponent;
}(dx_component_1.DxComponent));
exports.DxLinearGaugeComponent = DxLinearGaugeComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxLinearGaugeValueAccessorDirective; }),
    multi: true
};
var DxLinearGaugeValueAccessorDirective = (function () {
    function DxLinearGaugeValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxLinearGaugeValueAccessorDirective.prototype.onChange = function (_) { };
    DxLinearGaugeValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxLinearGaugeValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxLinearGaugeValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.HostListener('valueChange', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DxLinearGaugeValueAccessorDirective.prototype, "onChange", null);
    DxLinearGaugeValueAccessorDirective = __decorate([
        core_1.Directive({
            selector: 'dx-linear-gauge[formControlName],dx-linear-gauge[formControl],dx-linear-gauge[ngModel]',
            providers: [CUSTOM_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [DxLinearGaugeComponent])
    ], DxLinearGaugeValueAccessorDirective);
    return DxLinearGaugeValueAccessorDirective;
}());
exports.DxLinearGaugeValueAccessorDirective = DxLinearGaugeValueAccessorDirective;
var DxLinearGaugeModule = (function () {
    function DxLinearGaugeModule() {
    }
    DxLinearGaugeModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxLinearGaugeComponent,
                DxLinearGaugeValueAccessorDirective
            ],
            exports: [
                DxLinearGaugeComponent,
                DxLinearGaugeValueAccessorDirective
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxLinearGaugeModule);
    return DxLinearGaugeModule;
}());
exports.DxLinearGaugeModule = DxLinearGaugeModule;

//# sourceMappingURL=linear-gauge.js.map
