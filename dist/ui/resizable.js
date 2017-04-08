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
var resizable_1 = require('devextreme/ui/resizable');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
var DxResizableComponent = (function (_super) {
    __extends(DxResizableComponent, _super);
    function DxResizableComponent(elementRef, ngZone, templateHost, _watcherHelper) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this.widgetClassName = 'dxResizable';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'resize', emit: 'onResize' },
            { subscribe: 'resizeEnd', emit: 'onResizeEnd' },
            { subscribe: 'resizeStart', emit: 'onResizeStart' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'handlesChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' }
        ];
        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.handles',
            'this.maxHeight',
            'this.maxWidth',
            'this.minHeight',
            'this.minWidth'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onResize = new core_1.EventEmitter();
        this.onResizeEnd = new core_1.EventEmitter();
        this.onResizeStart = new core_1.EventEmitter();
        this.heightChange = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.widthChange = new core_1.EventEmitter();
        this.handlesChange = new core_1.EventEmitter();
        this.maxHeightChange = new core_1.EventEmitter();
        this.maxWidthChange = new core_1.EventEmitter();
        this.minHeightChange = new core_1.EventEmitter();
        this.minWidthChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DxResizableComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "handles", {
        get: function () {
            return this._getOption('handles');
        },
        set: function (value) {
            this._setOption('handles', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "maxHeight", {
        get: function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "maxWidth", {
        get: function () {
            return this._getOption('maxWidth');
        },
        set: function (value) {
            this._setOption('maxWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "minHeight", {
        get: function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "minWidth", {
        get: function () {
            return this._getOption('minWidth');
        },
        set: function (value) {
            this._setOption('minWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    DxResizableComponent.prototype._createInstance = function (element, options) {
        return new resizable_1.default(element, options);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResizableComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResizableComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResizableComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResizableComponent.prototype, "handles", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResizableComponent.prototype, "maxHeight", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResizableComponent.prototype, "maxWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResizableComponent.prototype, "minHeight", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxResizableComponent.prototype, "minWidth", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResizableComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResizableComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResizableComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResizableComponent.prototype, "onResize", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResizableComponent.prototype, "onResizeEnd", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResizableComponent.prototype, "onResizeStart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResizableComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResizableComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResizableComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResizableComponent.prototype, "handlesChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResizableComponent.prototype, "maxHeightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResizableComponent.prototype, "maxWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResizableComponent.prototype, "minHeightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxResizableComponent.prototype, "minWidthChange", void 0);
    DxResizableComponent = __decorate([
        core_1.Component({
            selector: 'dx-resizable',
            template: '<ng-content></ng-content>',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper])
    ], DxResizableComponent);
    return DxResizableComponent;
}(dx_component_1.DxComponent));
exports.DxResizableComponent = DxResizableComponent;
var DxResizableModule = (function () {
    function DxResizableModule() {
    }
    DxResizableModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxResizableComponent
            ],
            exports: [
                DxResizableComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxResizableModule);
    return DxResizableModule;
}());
exports.DxResizableModule = DxResizableModule;

//# sourceMappingURL=resizable.js.map
