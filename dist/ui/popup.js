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
var popup_1 = require('devextreme/ui/popup');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxPopupComponent = (function (_super) {
    __extends(DxPopupComponent, _super);
    function DxPopupComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxPopup';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { subscribe: 'resize', emit: 'onResize' },
            { subscribe: 'resizeEnd', emit: 'onResizeEnd' },
            { subscribe: 'resizeStart', emit: 'onResizeStart' },
            { subscribe: 'titleRendered', emit: 'onTitleRendered' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'accessKeyChange' },
            { emit: 'disabledChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'animationChange' },
            { emit: 'closeOnBackButtonChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'dragEnabledChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'buttonsChange' },
            { emit: 'fullScreenChange' },
            { emit: 'resizeEnabledChange' },
            { emit: 'showCloseButtonChange' },
            { emit: 'showTitleChange' },
            { emit: 'titleChange' },
            { emit: 'titleTemplateChange' },
            { emit: 'toolbarItemsChange' },
            { emit: 'positionChange' }
        ];
        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.accessKey',
            'this.disabled',
            'this.focusStateEnabled',
            'this.hint',
            'this.hoverStateEnabled',
            'this.tabIndex',
            'this.visible',
            'this.animation',
            'this.closeOnBackButton',
            'this.closeOnOutsideClick',
            'this.contentTemplate',
            'this.deferRendering',
            'this.dragEnabled',
            'this.maxHeight',
            'this.maxWidth',
            'this.minHeight',
            'this.minWidth',
            'this.shading',
            'this.shadingColor',
            'this.buttons',
            'this.fullScreen',
            'this.resizeEnabled',
            'this.showCloseButton',
            'this.showTitle',
            'this.title',
            'this.titleTemplate',
            'this.toolbarItems',
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
        this.onResize = new core_1.EventEmitter();
        this.onResizeEnd = new core_1.EventEmitter();
        this.onResizeStart = new core_1.EventEmitter();
        this.onTitleRendered = new core_1.EventEmitter();
        this.heightChange = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.widthChange = new core_1.EventEmitter();
        this.accessKeyChange = new core_1.EventEmitter();
        this.disabledChange = new core_1.EventEmitter();
        this.focusStateEnabledChange = new core_1.EventEmitter();
        this.hintChange = new core_1.EventEmitter();
        this.hoverStateEnabledChange = new core_1.EventEmitter();
        this.tabIndexChange = new core_1.EventEmitter();
        this.visibleChange = new core_1.EventEmitter();
        this.animationChange = new core_1.EventEmitter();
        this.closeOnBackButtonChange = new core_1.EventEmitter();
        this.closeOnOutsideClickChange = new core_1.EventEmitter();
        this.contentTemplateChange = new core_1.EventEmitter();
        this.deferRenderingChange = new core_1.EventEmitter();
        this.dragEnabledChange = new core_1.EventEmitter();
        this.maxHeightChange = new core_1.EventEmitter();
        this.maxWidthChange = new core_1.EventEmitter();
        this.minHeightChange = new core_1.EventEmitter();
        this.minWidthChange = new core_1.EventEmitter();
        this.shadingChange = new core_1.EventEmitter();
        this.shadingColorChange = new core_1.EventEmitter();
        this.buttonsChange = new core_1.EventEmitter();
        this.fullScreenChange = new core_1.EventEmitter();
        this.resizeEnabledChange = new core_1.EventEmitter();
        this.showCloseButtonChange = new core_1.EventEmitter();
        this.showTitleChange = new core_1.EventEmitter();
        this.titleChange = new core_1.EventEmitter();
        this.titleTemplateChange = new core_1.EventEmitter();
        this.toolbarItemsChange = new core_1.EventEmitter();
        this.positionChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxPopupComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "closeOnBackButton", {
        get: function () {
            return this._getOption('closeOnBackButton');
        },
        set: function (value) {
            this._setOption('closeOnBackButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "closeOnOutsideClick", {
        get: function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "contentTemplate", {
        get: function () {
            return this._getOption('contentTemplate');
        },
        set: function (value) {
            this._setOption('contentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "deferRendering", {
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "dragEnabled", {
        get: function () {
            return this._getOption('dragEnabled');
        },
        set: function (value) {
            this._setOption('dragEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "maxHeight", {
        get: function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "maxWidth", {
        get: function () {
            return this._getOption('maxWidth');
        },
        set: function (value) {
            this._setOption('maxWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "minHeight", {
        get: function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "minWidth", {
        get: function () {
            return this._getOption('minWidth');
        },
        set: function (value) {
            this._setOption('minWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "shading", {
        get: function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "shadingColor", {
        get: function () {
            return this._getOption('shadingColor');
        },
        set: function (value) {
            this._setOption('shadingColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "buttons", {
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this._setOption('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "fullScreen", {
        get: function () {
            return this._getOption('fullScreen');
        },
        set: function (value) {
            this._setOption('fullScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "resizeEnabled", {
        get: function () {
            return this._getOption('resizeEnabled');
        },
        set: function (value) {
            this._setOption('resizeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "showCloseButton", {
        get: function () {
            return this._getOption('showCloseButton');
        },
        set: function (value) {
            this._setOption('showCloseButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "showTitle", {
        get: function () {
            return this._getOption('showTitle');
        },
        set: function (value) {
            this._setOption('showTitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "titleTemplate", {
        get: function () {
            return this._getOption('titleTemplate');
        },
        set: function (value) {
            this._setOption('titleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "toolbarItems", {
        get: function () {
            return this._getOption('toolbarItems');
        },
        set: function (value) {
            this._setOption('toolbarItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopupComponent.prototype, "position", {
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPopupComponent.prototype._createInstance = function (element, options) {
        return new popup_1.default(element, options);
    };
    DxPopupComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('buttons', changes);
        this._idh.setup('toolbarItems', changes);
    };
    DxPopupComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('buttons');
        this._idh.doCheck('toolbarItems');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "animation", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "closeOnBackButton", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "closeOnOutsideClick", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "contentTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "deferRendering", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "dragEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "maxHeight", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "maxWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "minHeight", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "minWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "shading", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "shadingColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "buttons", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "fullScreen", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "resizeEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "showCloseButton", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "showTitle", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "title", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "titleTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "toolbarItems", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPopupComponent.prototype, "position", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "onHidden", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "onHiding", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "onShowing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "onShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "onResize", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "onResizeEnd", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "onResizeStart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "onTitleRendered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "animationChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "closeOnBackButtonChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "closeOnOutsideClickChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "contentTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "dragEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "maxHeightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "maxWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "minHeightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "minWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "shadingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "shadingColorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "buttonsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "fullScreenChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "resizeEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "showCloseButtonChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "showTitleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "titleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "titleTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "toolbarItemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPopupComponent.prototype, "positionChange", void 0);
    DxPopupComponent = __decorate([
        core_1.Component({
            selector: 'dx-popup',
            template: '<ng-content></ng-content>',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxPopupComponent);
    return DxPopupComponent;
}(dx_component_1.DxComponent));
exports.DxPopupComponent = DxPopupComponent;
var DxPopupModule = (function () {
    function DxPopupModule() {
    }
    DxPopupModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxPopupComponent
            ],
            exports: [
                DxPopupComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxPopupModule);
    return DxPopupModule;
}());
exports.DxPopupModule = DxPopupModule;

//# sourceMappingURL=popup.js.map
