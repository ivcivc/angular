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
var scroll_view_1 = require('devextreme/ui/scroll_view');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
var DxScrollViewComponent = (function (_super) {
    __extends(DxScrollViewComponent, _super);
    function DxScrollViewComponent(elementRef, ngZone, templateHost, _watcherHelper) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this.widgetClassName = 'dxScrollView';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'scroll', emit: 'onScroll' },
            { subscribe: 'updated', emit: 'onUpdated' },
            { subscribe: 'pullDown', emit: 'onPullDown' },
            { subscribe: 'reachBottom', emit: 'onReachBottom' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'bounceEnabledChange' },
            { emit: 'directionChange' },
            { emit: 'disabledChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollByThumbChange' },
            { emit: 'showScrollbarChange' },
            { emit: 'useNativeChange' },
            { emit: 'pulledDownTextChange' },
            { emit: 'pullingDownTextChange' },
            { emit: 'reachBottomTextChange' },
            { emit: 'refreshingTextChange' }
        ];
        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.bounceEnabled',
            'this.direction',
            'this.disabled',
            'this.scrollByContent',
            'this.scrollByThumb',
            'this.showScrollbar',
            'this.useNative',
            'this.pulledDownText',
            'this.pullingDownText',
            'this.reachBottomText',
            'this.refreshingText'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onScroll = new core_1.EventEmitter();
        this.onUpdated = new core_1.EventEmitter();
        this.onPullDown = new core_1.EventEmitter();
        this.onReachBottom = new core_1.EventEmitter();
        this.heightChange = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.widthChange = new core_1.EventEmitter();
        this.bounceEnabledChange = new core_1.EventEmitter();
        this.directionChange = new core_1.EventEmitter();
        this.disabledChange = new core_1.EventEmitter();
        this.scrollByContentChange = new core_1.EventEmitter();
        this.scrollByThumbChange = new core_1.EventEmitter();
        this.showScrollbarChange = new core_1.EventEmitter();
        this.useNativeChange = new core_1.EventEmitter();
        this.pulledDownTextChange = new core_1.EventEmitter();
        this.pullingDownTextChange = new core_1.EventEmitter();
        this.reachBottomTextChange = new core_1.EventEmitter();
        this.refreshingTextChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DxScrollViewComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "bounceEnabled", {
        get: function () {
            return this._getOption('bounceEnabled');
        },
        set: function (value) {
            this._setOption('bounceEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "direction", {
        get: function () {
            return this._getOption('direction');
        },
        set: function (value) {
            this._setOption('direction', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "scrollByContent", {
        get: function () {
            return this._getOption('scrollByContent');
        },
        set: function (value) {
            this._setOption('scrollByContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "scrollByThumb", {
        get: function () {
            return this._getOption('scrollByThumb');
        },
        set: function (value) {
            this._setOption('scrollByThumb', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "showScrollbar", {
        get: function () {
            return this._getOption('showScrollbar');
        },
        set: function (value) {
            this._setOption('showScrollbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "useNative", {
        get: function () {
            return this._getOption('useNative');
        },
        set: function (value) {
            this._setOption('useNative', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "pulledDownText", {
        get: function () {
            return this._getOption('pulledDownText');
        },
        set: function (value) {
            this._setOption('pulledDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "pullingDownText", {
        get: function () {
            return this._getOption('pullingDownText');
        },
        set: function (value) {
            this._setOption('pullingDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "reachBottomText", {
        get: function () {
            return this._getOption('reachBottomText');
        },
        set: function (value) {
            this._setOption('reachBottomText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "refreshingText", {
        get: function () {
            return this._getOption('refreshingText');
        },
        set: function (value) {
            this._setOption('refreshingText', value);
        },
        enumerable: true,
        configurable: true
    });
    DxScrollViewComponent.prototype._createInstance = function (element, options) {
        return new scroll_view_1.default(element, options);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxScrollViewComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxScrollViewComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxScrollViewComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxScrollViewComponent.prototype, "bounceEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxScrollViewComponent.prototype, "direction", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxScrollViewComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxScrollViewComponent.prototype, "scrollByContent", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxScrollViewComponent.prototype, "scrollByThumb", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxScrollViewComponent.prototype, "showScrollbar", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxScrollViewComponent.prototype, "useNative", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxScrollViewComponent.prototype, "pulledDownText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxScrollViewComponent.prototype, "pullingDownText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxScrollViewComponent.prototype, "reachBottomText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxScrollViewComponent.prototype, "refreshingText", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "onScroll", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "onUpdated", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "onPullDown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "onReachBottom", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "bounceEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "directionChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "scrollByContentChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "scrollByThumbChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "showScrollbarChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "useNativeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "pulledDownTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "pullingDownTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "reachBottomTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxScrollViewComponent.prototype, "refreshingTextChange", void 0);
    DxScrollViewComponent = __decorate([
        core_1.Component({
            selector: 'dx-scroll-view',
            template: '<ng-content></ng-content>',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper])
    ], DxScrollViewComponent);
    return DxScrollViewComponent;
}(dx_component_1.DxComponent));
exports.DxScrollViewComponent = DxScrollViewComponent;
var DxScrollViewModule = (function () {
    function DxScrollViewModule() {
    }
    DxScrollViewModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxScrollViewComponent
            ],
            exports: [
                DxScrollViewComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxScrollViewModule);
    return DxScrollViewModule;
}());
exports.DxScrollViewModule = DxScrollViewModule;

//# sourceMappingURL=scroll-view.js.map
