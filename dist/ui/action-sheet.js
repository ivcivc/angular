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
var action_sheet_1 = require('devextreme/ui/action_sheet');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxActionSheetComponent = (function (_super) {
    __extends(DxActionSheetComponent, _super);
    function DxActionSheetComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxActionSheet';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'cancelClick', emit: 'onCancelClick' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'disabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'dataSourceChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'itemsChange' },
            { emit: 'cancelTextChange' },
            { emit: 'showCancelButtonChange' },
            { emit: 'showTitleChange' },
            { emit: 'targetChange' },
            { emit: 'titleChange' },
            { emit: 'usePopoverChange' }
        ];
        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.disabled',
            'this.hint',
            'this.hoverStateEnabled',
            'this.visible',
            'this.dataSource',
            'this.itemHoldTimeout',
            'this.itemTemplate',
            'this.items',
            'this.cancelText',
            'this.showCancelButton',
            'this.showTitle',
            'this.target',
            'this.title',
            'this.usePopover'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onContentReady = new core_1.EventEmitter();
        this.onItemClick = new core_1.EventEmitter();
        this.onItemContextMenu = new core_1.EventEmitter();
        this.onItemHold = new core_1.EventEmitter();
        this.onItemRendered = new core_1.EventEmitter();
        this.onCancelClick = new core_1.EventEmitter();
        this.heightChange = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.widthChange = new core_1.EventEmitter();
        this.disabledChange = new core_1.EventEmitter();
        this.hintChange = new core_1.EventEmitter();
        this.hoverStateEnabledChange = new core_1.EventEmitter();
        this.visibleChange = new core_1.EventEmitter();
        this.dataSourceChange = new core_1.EventEmitter();
        this.itemHoldTimeoutChange = new core_1.EventEmitter();
        this.itemTemplateChange = new core_1.EventEmitter();
        this.itemsChange = new core_1.EventEmitter();
        this.cancelTextChange = new core_1.EventEmitter();
        this.showCancelButtonChange = new core_1.EventEmitter();
        this.showTitleChange = new core_1.EventEmitter();
        this.targetChange = new core_1.EventEmitter();
        this.titleChange = new core_1.EventEmitter();
        this.usePopoverChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxActionSheetComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "itemHoldTimeout", {
        get: function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "cancelText", {
        get: function () {
            return this._getOption('cancelText');
        },
        set: function (value) {
            this._setOption('cancelText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "showCancelButton", {
        get: function () {
            return this._getOption('showCancelButton');
        },
        set: function (value) {
            this._setOption('showCancelButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "showTitle", {
        get: function () {
            return this._getOption('showTitle');
        },
        set: function (value) {
            this._setOption('showTitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "target", {
        get: function () {
            return this._getOption('target');
        },
        set: function (value) {
            this._setOption('target', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxActionSheetComponent.prototype, "usePopover", {
        get: function () {
            return this._getOption('usePopover');
        },
        set: function (value) {
            this._setOption('usePopover', value);
        },
        enumerable: true,
        configurable: true
    });
    DxActionSheetComponent.prototype._createInstance = function (element, options) {
        return new action_sheet_1.default(element, options);
    };
    DxActionSheetComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
    };
    DxActionSheetComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "itemHoldTimeout", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "itemTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "cancelText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "showCancelButton", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "showTitle", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "target", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "title", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxActionSheetComponent.prototype, "usePopover", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "onItemClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "onItemContextMenu", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "onItemHold", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "onItemRendered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "onCancelClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "itemHoldTimeoutChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "itemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "cancelTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "showCancelButtonChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "showTitleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "targetChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "titleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxActionSheetComponent.prototype, "usePopoverChange", void 0);
    DxActionSheetComponent = __decorate([
        core_1.Component({
            selector: 'dx-action-sheet',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxActionSheetComponent);
    return DxActionSheetComponent;
}(dx_component_1.DxComponent));
exports.DxActionSheetComponent = DxActionSheetComponent;
var DxActionSheetModule = (function () {
    function DxActionSheetModule() {
    }
    DxActionSheetModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxActionSheetComponent
            ],
            exports: [
                DxActionSheetComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxActionSheetModule);
    return DxActionSheetModule;
}());
exports.DxActionSheetModule = DxActionSheetModule;

//# sourceMappingURL=action-sheet.js.map
