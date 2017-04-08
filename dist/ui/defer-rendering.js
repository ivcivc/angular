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
var defer_rendering_1 = require('devextreme/ui/defer_rendering');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
var DxDeferRenderingComponent = (function (_super) {
    __extends(DxDeferRenderingComponent, _super);
    function DxDeferRenderingComponent(elementRef, ngZone, templateHost, _watcherHelper) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this.widgetClassName = 'dxDeferRendering';
        this._events = [
            { subscribe: 'rendered', emit: 'onRendered' },
            { subscribe: 'shown', emit: 'onShown' },
            { emit: 'renderWhenChange' },
            { emit: 'showLoadIndicatorChange' },
            { emit: 'staggerItemSelectorChange' },
            { emit: 'animationChange' }
        ];
        this._properties = [
            'this.renderWhen',
            'this.showLoadIndicator',
            'this.staggerItemSelector',
            'this.animation'
        ];
        this.onRendered = new core_1.EventEmitter();
        this.onShown = new core_1.EventEmitter();
        this.renderWhenChange = new core_1.EventEmitter();
        this.showLoadIndicatorChange = new core_1.EventEmitter();
        this.staggerItemSelectorChange = new core_1.EventEmitter();
        this.animationChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DxDeferRenderingComponent.prototype, "renderWhen", {
        get: function () {
            return this._getOption('renderWhen');
        },
        set: function (value) {
            this._setOption('renderWhen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDeferRenderingComponent.prototype, "showLoadIndicator", {
        get: function () {
            return this._getOption('showLoadIndicator');
        },
        set: function (value) {
            this._setOption('showLoadIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDeferRenderingComponent.prototype, "staggerItemSelector", {
        get: function () {
            return this._getOption('staggerItemSelector');
        },
        set: function (value) {
            this._setOption('staggerItemSelector', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDeferRenderingComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    DxDeferRenderingComponent.prototype._createInstance = function (element, options) {
        return new defer_rendering_1.default(element, options);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDeferRenderingComponent.prototype, "renderWhen", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDeferRenderingComponent.prototype, "showLoadIndicator", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDeferRenderingComponent.prototype, "staggerItemSelector", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDeferRenderingComponent.prototype, "animation", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDeferRenderingComponent.prototype, "onRendered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDeferRenderingComponent.prototype, "onShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDeferRenderingComponent.prototype, "renderWhenChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDeferRenderingComponent.prototype, "showLoadIndicatorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDeferRenderingComponent.prototype, "staggerItemSelectorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDeferRenderingComponent.prototype, "animationChange", void 0);
    DxDeferRenderingComponent = __decorate([
        core_1.Component({
            selector: 'dx-defer-rendering',
            template: '<ng-content></ng-content>',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper])
    ], DxDeferRenderingComponent);
    return DxDeferRenderingComponent;
}(dx_component_1.DxComponent));
exports.DxDeferRenderingComponent = DxDeferRenderingComponent;
var DxDeferRenderingModule = (function () {
    function DxDeferRenderingModule() {
    }
    DxDeferRenderingModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxDeferRenderingComponent
            ],
            exports: [
                DxDeferRenderingComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxDeferRenderingModule);
    return DxDeferRenderingModule;
}());
exports.DxDeferRenderingModule = DxDeferRenderingModule;

//# sourceMappingURL=defer-rendering.js.map
