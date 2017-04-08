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
var popover_1 = require('devextreme/ui/popover');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxPopoverComponent = (function (_super) {
    __extends(DxPopoverComponent, _super);
    function DxPopoverComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxPopover';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { subscribe: 'titleRendered', emit: 'onTitleRendered' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'disabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'animationChange' },
            { emit: 'closeOnBackButtonChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'buttonsChange' },
            { emit: 'showCloseButtonChange' },
            { emit: 'showTitleChange' },
            { emit: 'titleChange' },
            { emit: 'titleTemplateChange' },
            { emit: 'toolbarItemsChange' },
            { emit: 'hideEventChange' },
            { emit: 'positionChange' },
            { emit: 'showEventChange' },
            { emit: 'targetChange' }
        ];
        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.disabled',
            'this.hint',
            'this.hoverStateEnabled',
            'this.visible',
            'this.animation',
            'this.closeOnBackButton',
            'this.closeOnOutsideClick',
            'this.contentTemplate',
            'this.deferRendering',
            'this.maxHeight',
            'this.maxWidth',
            'this.minHeight',
            'this.minWidth',
            'this.shading',
            'this.shadingColor',
            'this.buttons',
            'this.showCloseButton',
            'this.showTitle',
            'this.title',
            'this.titleTemplate',
            'this.toolbarItems',
            'this.hideEvent',
            'this.position',
            'this.showEvent',
            'this.target'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onContentReady = new core_1.EventEmitter();
        this.onHidden = new core_1.EventEmitter();
        this.onHiding = new core_1.EventEmitter();
        this.onShowing = new core_1.EventEmitter();
        this.onShown = new core_1.EventEmitter();
        this.onTitleRendered = new core_1.EventEmitter();
        this.heightChange = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.widthChange = new core_1.EventEmitter();
        this.disabledChange = new core_1.EventEmitter();
        this.hintChange = new core_1.EventEmitter();
        this.hoverStateEnabledChange = new core_1.EventEmitter();
        this.visibleChange = new core_1.EventEmitter();
        this.animationChange = new core_1.EventEmitter();
        this.closeOnBackButtonChange = new core_1.EventEmitter();
        this.closeOnOutsideClickChange = new core_1.EventEmitter();
        this.contentTemplateChange = new core_1.EventEmitter();
        this.deferRenderingChange = new core_1.EventEmitter();
        this.maxHeightChange = new core_1.EventEmitter();
        this.maxWidthChange = new core_1.EventEmitter();
        this.minHeightChange = new core_1.EventEmitter();
        this.minWidthChange = new core_1.EventEmitter();
        this.shadingChange = new core_1.EventEmitter();
        this.shadingColorChange = new core_1.EventEmitter();
        this.buttonsChange = new core_1.EventEmitter();
        this.showCloseButtonChange = new core_1.EventEmitter();
        this.showTitleChange = new core_1.EventEmitter();
        this.titleChange = new core_1.EventEmitter();
        this.titleTemplateChange = new core_1.EventEmitter();
        this.toolbarItemsChange = new core_1.EventEmitter();
        this.hideEventChange = new core_1.EventEmitter();
        this.positionChange = new core_1.EventEmitter();
        this.showEventChange = new core_1.EventEmitter();
        this.targetChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxPopoverComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "closeOnBackButton", {
        get: function () {
            return this._getOption('closeOnBackButton');
        },
        set: function (value) {
            this._setOption('closeOnBackButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "closeOnOutsideClick", {
        get: function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "contentTemplate", {
        get: function () {
            return this._getOption('contentTemplate');
        },
        set: function (value) {
            this._setOption('contentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "deferRendering", {
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "maxHeight", {
        get: function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "maxWidth", {
        get: function () {
            return this._getOption('maxWidth');
        },
        set: function (value) {
            this._setOption('maxWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "minHeight", {
        get: function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "minWidth", {
        get: function () {
            return this._getOption('minWidth');
        },
        set: function (value) {
            this._setOption('minWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "shading", {
        get: function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "shadingColor", {
        get: function () {
            return this._getOption('shadingColor');
        },
        set: function (value) {
            this._setOption('shadingColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "buttons", {
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this._setOption('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "showCloseButton", {
        get: function () {
            return this._getOption('showCloseButton');
        },
        set: function (value) {
            this._setOption('showCloseButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "showTitle", {
        get: function () {
            return this._getOption('showTitle');
        },
        set: function (value) {
            this._setOption('showTitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "titleTemplate", {
        get: function () {
            return this._getOption('titleTemplate');
        },
        set: function (value) {
            this._setOption('titleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "toolbarItems", {
        get: function () {
            return this._getOption('toolbarItems');
        },
        set: function (value) {
            this._setOption('toolbarItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "hideEvent", {
        get: function () {
            return this._getOption('hideEvent');
        },
        set: function (value) {
            this._setOption('hideEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "position", {
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "showEvent", {
        get: function () {
            return this._getOption('showEvent');
        },
        set: function (value) {
            this._setOption('showEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "target", {
        get: function () {
            return this._getOption('target');
        },
        set: function (value) {
            this._setOption('target', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPopoverComponent.prototype._createInstance = function (element, options) {
        return new popover_1.default(element, options);
    };
    DxPopoverComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('buttons', changes);
        this._idh.setup('toolbarItems', changes);
    };
    DxPopoverComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('buttons');
        this._idh.doCheck('toolbarItems');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "animation", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "closeOnBackButton", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "closeOnOutsideClick", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "contentTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "deferRendering", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "maxHeight", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "maxWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "minHeight", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "minWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "shading", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "shadingColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "buttons", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "showCloseButton", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "showTitle", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "title", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "titleTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "toolbarItems", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "hideEvent", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "position", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "showEvent", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopoverComponent.prototype, "target", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "onHidden", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "onHiding", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "onShowing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "onShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "onTitleRendered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "animationChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "closeOnBackButtonChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "closeOnOutsideClickChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "contentTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "maxHeightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "maxWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "minHeightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "minWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "shadingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "shadingColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "buttonsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "showCloseButtonChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "showTitleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "titleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "titleTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "toolbarItemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "hideEventChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "positionChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "showEventChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopoverComponent.prototype, "targetChange", void 0);
    DxPopoverComponent = __decorate([
        core_1.Component({
            selector: 'dx-popover',
            template: '<ng-content></ng-content>',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxPopoverComponent);
    return DxPopoverComponent;
}(dx_component_1.DxComponent));
exports.DxPopoverComponent = DxPopoverComponent;
var DxPopoverModule = (function () {
    function DxPopoverModule() {
    }
    DxPopoverModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxPopoverComponent
            ],
            exports: [
                DxPopoverComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxPopoverModule);
    return DxPopoverModule;
}());
exports.DxPopoverModule = DxPopoverModule;

//# sourceMappingURL=popover.js.map
