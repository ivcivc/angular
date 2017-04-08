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
var calendar_1 = require('devextreme/ui/calendar');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
var DxCalendarComponent = (function (_super) {
    __extends(DxCalendarComponent, _super);
    function DxCalendarComponent(elementRef, ngZone, templateHost, _watcherHelper) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this.widgetClassName = 'dxCalendar';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
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
            { emit: 'isValidChange' },
            { emit: 'nameChange' },
            { emit: 'readOnlyChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'cellTemplateChange' },
            { emit: 'firstDayOfWeekChange' },
            { emit: 'maxChange' },
            { emit: 'maxZoomLevelChange' },
            { emit: 'minChange' },
            { emit: 'minZoomLevelChange' },
            { emit: 'showTodayButtonChange' },
            { emit: 'zoomLevelChange' }
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
            'this.isValid',
            'this.name',
            'this.readOnly',
            'this.validationError',
            'this.validationMessageMode',
            'this.value',
            'this.cellTemplate',
            'this.firstDayOfWeek',
            'this.max',
            'this.maxZoomLevel',
            'this.min',
            'this.minZoomLevel',
            'this.showTodayButton',
            'this.zoomLevel'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onValueChanged = new core_1.EventEmitter();
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
        this.isValidChange = new core_1.EventEmitter();
        this.nameChange = new core_1.EventEmitter();
        this.readOnlyChange = new core_1.EventEmitter();
        this.validationErrorChange = new core_1.EventEmitter();
        this.validationMessageModeChange = new core_1.EventEmitter();
        this.valueChange = new core_1.EventEmitter();
        this.cellTemplateChange = new core_1.EventEmitter();
        this.firstDayOfWeekChange = new core_1.EventEmitter();
        this.maxChange = new core_1.EventEmitter();
        this.maxZoomLevelChange = new core_1.EventEmitter();
        this.minChange = new core_1.EventEmitter();
        this.minZoomLevelChange = new core_1.EventEmitter();
        this.showTodayButtonChange = new core_1.EventEmitter();
        this.zoomLevelChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DxCalendarComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "cellTemplate", {
        get: function () {
            return this._getOption('cellTemplate');
        },
        set: function (value) {
            this._setOption('cellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "firstDayOfWeek", {
        get: function () {
            return this._getOption('firstDayOfWeek');
        },
        set: function (value) {
            this._setOption('firstDayOfWeek', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "max", {
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "maxZoomLevel", {
        get: function () {
            return this._getOption('maxZoomLevel');
        },
        set: function (value) {
            this._setOption('maxZoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "min", {
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "minZoomLevel", {
        get: function () {
            return this._getOption('minZoomLevel');
        },
        set: function (value) {
            this._setOption('minZoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "showTodayButton", {
        get: function () {
            return this._getOption('showTodayButton');
        },
        set: function (value) {
            this._setOption('showTodayButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxCalendarComponent.prototype, "zoomLevel", {
        get: function () {
            return this._getOption('zoomLevel');
        },
        set: function (value) {
            this._setOption('zoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    DxCalendarComponent.prototype._createInstance = function (element, options) {
        var widget = new calendar_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    __decorate([
        core_1.ContentChild(validator_1.DxValidatorComponent), 
        __metadata('design:type', validator_1.DxValidatorComponent)
    ], DxCalendarComponent.prototype, "validator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "isValid", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "name", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "readOnly", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "validationError", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "validationMessageMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "cellTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "firstDayOfWeek", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "max", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "maxZoomLevel", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "min", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "minZoomLevel", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "showTodayButton", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxCalendarComponent.prototype, "zoomLevel", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "onValueChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "isValidChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "nameChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "valueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "cellTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "firstDayOfWeekChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "maxChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "maxZoomLevelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "minChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "minZoomLevelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "showTodayButtonChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxCalendarComponent.prototype, "zoomLevelChange", void 0);
    DxCalendarComponent = __decorate([
        core_1.Component({
            selector: 'dx-calendar',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper])
    ], DxCalendarComponent);
    return DxCalendarComponent;
}(dx_component_1.DxComponent));
exports.DxCalendarComponent = DxCalendarComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxCalendarValueAccessorDirective; }),
    multi: true
};
var DxCalendarValueAccessorDirective = (function () {
    function DxCalendarValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxCalendarValueAccessorDirective.prototype.onChange = function (_) { };
    DxCalendarValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxCalendarValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxCalendarValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.HostListener('valueChange', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DxCalendarValueAccessorDirective.prototype, "onChange", null);
    DxCalendarValueAccessorDirective = __decorate([
        core_1.Directive({
            selector: 'dx-calendar[formControlName],dx-calendar[formControl],dx-calendar[ngModel]',
            providers: [CUSTOM_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [DxCalendarComponent])
    ], DxCalendarValueAccessorDirective);
    return DxCalendarValueAccessorDirective;
}());
exports.DxCalendarValueAccessorDirective = DxCalendarValueAccessorDirective;
var DxCalendarModule = (function () {
    function DxCalendarModule() {
    }
    DxCalendarModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxCalendarComponent,
                DxCalendarValueAccessorDirective
            ],
            exports: [
                DxCalendarComponent,
                DxCalendarValueAccessorDirective
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxCalendarModule);
    return DxCalendarModule;
}());
exports.DxCalendarModule = DxCalendarModule;

//# sourceMappingURL=calendar.js.map
