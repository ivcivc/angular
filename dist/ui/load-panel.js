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
var load_panel_1 = require('devextreme/ui/load_panel');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
var DxLoadPanelComponent = (function (_super) {
    __extends(DxLoadPanelComponent, _super);
    function DxLoadPanelComponent(elementRef, ngZone, templateHost, _watcherHelper) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this.widgetClassName = 'dxLoadPanel';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'animationChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'delayChange' },
            { emit: 'indicatorSrcChange' },
            { emit: 'messageChange' },
            { emit: 'showIndicatorChange' },
            { emit: 'showPaneChange' },
            { emit: 'positionChange' }
        ];
        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.focusStateEnabled',
            'this.hint',
            'this.hoverStateEnabled',
            'this.visible',
            'this.animation',
            'this.closeOnOutsideClick',
            'this.deferRendering',
            'this.maxHeight',
            'this.maxWidth',
            'this.minHeight',
            'this.minWidth',
            'this.shading',
            'this.shadingColor',
            'this.delay',
            'this.indicatorSrc',
            'this.message',
            'this.showIndicator',
            'this.showPane',
            'this.position'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onContentReady = new core_1.EventEmitter();
        this.onHidden = new core_1.EventEmitter();
        this.onHiding = new core_1.EventEmitter();
        this.onShowing = new core_1.EventEmitter();
        this.onShown = new core_1.EventEmitter();
        this.heightChange = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.widthChange = new core_1.EventEmitter();
        this.focusStateEnabledChange = new core_1.EventEmitter();
        this.hintChange = new core_1.EventEmitter();
        this.hoverStateEnabledChange = new core_1.EventEmitter();
        this.visibleChange = new core_1.EventEmitter();
        this.animationChange = new core_1.EventEmitter();
        this.closeOnOutsideClickChange = new core_1.EventEmitter();
        this.deferRenderingChange = new core_1.EventEmitter();
        this.maxHeightChange = new core_1.EventEmitter();
        this.maxWidthChange = new core_1.EventEmitter();
        this.minHeightChange = new core_1.EventEmitter();
        this.minWidthChange = new core_1.EventEmitter();
        this.shadingChange = new core_1.EventEmitter();
        this.shadingColorChange = new core_1.EventEmitter();
        this.delayChange = new core_1.EventEmitter();
        this.indicatorSrcChange = new core_1.EventEmitter();
        this.messageChange = new core_1.EventEmitter();
        this.showIndicatorChange = new core_1.EventEmitter();
        this.showPaneChange = new core_1.EventEmitter();
        this.positionChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DxLoadPanelComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "closeOnOutsideClick", {
        get: function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "deferRendering", {
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "maxHeight", {
        get: function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "maxWidth", {
        get: function () {
            return this._getOption('maxWidth');
        },
        set: function (value) {
            this._setOption('maxWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "minHeight", {
        get: function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "minWidth", {
        get: function () {
            return this._getOption('minWidth');
        },
        set: function (value) {
            this._setOption('minWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "shading", {
        get: function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "shadingColor", {
        get: function () {
            return this._getOption('shadingColor');
        },
        set: function (value) {
            this._setOption('shadingColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "delay", {
        get: function () {
            return this._getOption('delay');
        },
        set: function (value) {
            this._setOption('delay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "indicatorSrc", {
        get: function () {
            return this._getOption('indicatorSrc');
        },
        set: function (value) {
            this._setOption('indicatorSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "message", {
        get: function () {
            return this._getOption('message');
        },
        set: function (value) {
            this._setOption('message', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "showIndicator", {
        get: function () {
            return this._getOption('showIndicator');
        },
        set: function (value) {
            this._setOption('showIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "showPane", {
        get: function () {
            return this._getOption('showPane');
        },
        set: function (value) {
            this._setOption('showPane', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "position", {
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    DxLoadPanelComponent.prototype._createInstance = function (element, options) {
        return new load_panel_1.default(element, options);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "animation", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "closeOnOutsideClick", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "deferRendering", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "maxHeight", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "maxWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "minHeight", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "minWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "shading", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "shadingColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "delay", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "indicatorSrc", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "message", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "showIndicator", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "showPane", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLoadPanelComponent.prototype, "position", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "onHidden", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "onHiding", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "onShowing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "onShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "animationChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "closeOnOutsideClickChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "maxHeightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "maxWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "minHeightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "minWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "shadingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "shadingColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "delayChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "indicatorSrcChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "messageChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "showIndicatorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "showPaneChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLoadPanelComponent.prototype, "positionChange", void 0);
    DxLoadPanelComponent = __decorate([
        core_1.Component({
            selector: 'dx-load-panel',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper])
    ], DxLoadPanelComponent);
    return DxLoadPanelComponent;
}(dx_component_1.DxComponent));
exports.DxLoadPanelComponent = DxLoadPanelComponent;
var DxLoadPanelModule = (function () {
    function DxLoadPanelModule() {
    }
    DxLoadPanelModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxLoadPanelComponent
            ],
            exports: [
                DxLoadPanelComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxLoadPanelModule);
    return DxLoadPanelModule;
}());
exports.DxLoadPanelModule = DxLoadPanelModule;

//# sourceMappingURL=load-panel.js.map
