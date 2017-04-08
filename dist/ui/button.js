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
var button_1 = require('devextreme/ui/button');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
var DxButtonComponent = (function (_super) {
    __extends(DxButtonComponent, _super);
    function DxButtonComponent(elementRef, ngZone, templateHost, _watcherHelper) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this.widgetClassName = 'dxButton';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'click', emit: 'onClick' },
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
            { emit: 'iconChange' },
            { emit: 'iconSrcChange' },
            { emit: 'templateChange' },
            { emit: 'textChange' },
            { emit: 'typeChange' },
            { emit: 'useSubmitBehaviorChange' },
            { emit: 'validationGroupChange' }
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
            'this.icon',
            'this.iconSrc',
            'this.template',
            'this.text',
            'this.type',
            'this.useSubmitBehavior',
            'this.validationGroup'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onClick = new core_1.EventEmitter();
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
        this.iconChange = new core_1.EventEmitter();
        this.iconSrcChange = new core_1.EventEmitter();
        this.templateChange = new core_1.EventEmitter();
        this.textChange = new core_1.EventEmitter();
        this.typeChange = new core_1.EventEmitter();
        this.useSubmitBehaviorChange = new core_1.EventEmitter();
        this.validationGroupChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DxButtonComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "icon", {
        get: function () {
            return this._getOption('icon');
        },
        set: function (value) {
            this._setOption('icon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "iconSrc", {
        get: function () {
            return this._getOption('iconSrc');
        },
        set: function (value) {
            this._setOption('iconSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "template", {
        get: function () {
            return this._getOption('template');
        },
        set: function (value) {
            this._setOption('template', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "useSubmitBehavior", {
        get: function () {
            return this._getOption('useSubmitBehavior');
        },
        set: function (value) {
            this._setOption('useSubmitBehavior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "validationGroup", {
        get: function () {
            return this._getOption('validationGroup');
        },
        set: function (value) {
            this._setOption('validationGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    DxButtonComponent.prototype._createInstance = function (element, options) {
        return new button_1.default(element, options);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "icon", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "iconSrc", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "template", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "text", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "type", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "useSubmitBehavior", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxButtonComponent.prototype, "validationGroup", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "onClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "iconChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "iconSrcChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "templateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "textChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "typeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "useSubmitBehaviorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxButtonComponent.prototype, "validationGroupChange", void 0);
    DxButtonComponent = __decorate([
        core_1.Component({
            selector: 'dx-button',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper])
    ], DxButtonComponent);
    return DxButtonComponent;
}(dx_component_1.DxComponent));
exports.DxButtonComponent = DxButtonComponent;
var DxButtonModule = (function () {
    function DxButtonModule() {
    }
    DxButtonModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxButtonComponent
            ],
            exports: [
                DxButtonComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxButtonModule);
    return DxButtonModule;
}());
exports.DxButtonModule = DxButtonModule;

//# sourceMappingURL=button.js.map
