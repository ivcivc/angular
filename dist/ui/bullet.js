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
var bullet_1 = require('devextreme/viz/bullet');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
var DxBulletComponent = (function (_super) {
    __extends(DxBulletComponent, _super);
    function DxBulletComponent(elementRef, ngZone, templateHost, _watcherHelper) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this.widgetClassName = 'dxBullet';
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
            { emit: 'colorChange' },
            { emit: 'endScaleValueChange' },
            { emit: 'showTargetChange' },
            { emit: 'showZeroLevelChange' },
            { emit: 'startScaleValueChange' },
            { emit: 'targetChange' },
            { emit: 'targetColorChange' },
            { emit: 'targetWidthChange' },
            { emit: 'valueChange' }
        ];
        this._properties = [
            'this.rtlEnabled',
            'this.margin',
            'this.pathModified',
            'this.size',
            'this.theme',
            'this.tooltip',
            'this.color',
            'this.endScaleValue',
            'this.showTarget',
            'this.showZeroLevel',
            'this.startScaleValue',
            'this.target',
            'this.targetColor',
            'this.targetWidth',
            'this.value'
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
        this.colorChange = new core_1.EventEmitter();
        this.endScaleValueChange = new core_1.EventEmitter();
        this.showTargetChange = new core_1.EventEmitter();
        this.showZeroLevelChange = new core_1.EventEmitter();
        this.startScaleValueChange = new core_1.EventEmitter();
        this.targetChange = new core_1.EventEmitter();
        this.targetColorChange = new core_1.EventEmitter();
        this.targetWidthChange = new core_1.EventEmitter();
        this.valueChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DxBulletComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "margin", {
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "endScaleValue", {
        get: function () {
            return this._getOption('endScaleValue');
        },
        set: function (value) {
            this._setOption('endScaleValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "showTarget", {
        get: function () {
            return this._getOption('showTarget');
        },
        set: function (value) {
            this._setOption('showTarget', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "showZeroLevel", {
        get: function () {
            return this._getOption('showZeroLevel');
        },
        set: function (value) {
            this._setOption('showZeroLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "startScaleValue", {
        get: function () {
            return this._getOption('startScaleValue');
        },
        set: function (value) {
            this._setOption('startScaleValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "target", {
        get: function () {
            return this._getOption('target');
        },
        set: function (value) {
            this._setOption('target', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "targetColor", {
        get: function () {
            return this._getOption('targetColor');
        },
        set: function (value) {
            this._setOption('targetColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "targetWidth", {
        get: function () {
            return this._getOption('targetWidth');
        },
        set: function (value) {
            this._setOption('targetWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxBulletComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    DxBulletComponent.prototype._createInstance = function (element, options) {
        var widget = new bullet_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    __decorate([
        core_1.ContentChild(validator_1.DxValidatorComponent), 
        __metadata('design:type', validator_1.DxValidatorComponent)
    ], DxBulletComponent.prototype, "validator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBulletComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBulletComponent.prototype, "margin", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBulletComponent.prototype, "pathModified", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBulletComponent.prototype, "size", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBulletComponent.prototype, "theme", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBulletComponent.prototype, "tooltip", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBulletComponent.prototype, "color", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBulletComponent.prototype, "endScaleValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBulletComponent.prototype, "showTarget", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBulletComponent.prototype, "showZeroLevel", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBulletComponent.prototype, "startScaleValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBulletComponent.prototype, "target", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBulletComponent.prototype, "targetColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBulletComponent.prototype, "targetWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxBulletComponent.prototype, "value", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "onDrawn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "onExported", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "onExporting", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "onFileSaving", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "onTooltipHidden", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "onTooltipShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "marginChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "sizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "themeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "tooltipChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "colorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "endScaleValueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "showTargetChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "showZeroLevelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "startScaleValueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "targetChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "targetColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "targetWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxBulletComponent.prototype, "valueChange", void 0);
    DxBulletComponent = __decorate([
        core_1.Component({
            selector: 'dx-bullet',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper])
    ], DxBulletComponent);
    return DxBulletComponent;
}(dx_component_1.DxComponent));
exports.DxBulletComponent = DxBulletComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxBulletValueAccessorDirective; }),
    multi: true
};
var DxBulletValueAccessorDirective = (function () {
    function DxBulletValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxBulletValueAccessorDirective.prototype.onChange = function (_) { };
    DxBulletValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxBulletValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxBulletValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.HostListener('valueChange', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DxBulletValueAccessorDirective.prototype, "onChange", null);
    DxBulletValueAccessorDirective = __decorate([
        core_1.Directive({
            selector: 'dx-bullet[formControlName],dx-bullet[formControl],dx-bullet[ngModel]',
            providers: [CUSTOM_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [DxBulletComponent])
    ], DxBulletValueAccessorDirective);
    return DxBulletValueAccessorDirective;
}());
exports.DxBulletValueAccessorDirective = DxBulletValueAccessorDirective;
var DxBulletModule = (function () {
    function DxBulletModule() {
    }
    DxBulletModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxBulletComponent,
                DxBulletValueAccessorDirective
            ],
            exports: [
                DxBulletComponent,
                DxBulletValueAccessorDirective
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxBulletModule);
    return DxBulletModule;
}());
exports.DxBulletModule = DxBulletModule;

//# sourceMappingURL=bullet.js.map
