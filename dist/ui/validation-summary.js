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
var validation_summary_1 = require('devextreme/ui/validation_summary');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxValidationSummaryComponent = (function (_super) {
    __extends(DxValidationSummaryComponent, _super);
    function DxValidationSummaryComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxValidationSummary';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'itemsChange' },
            { emit: 'validationGroupChange' }
        ];
        this._properties = [
            'this.hoverStateEnabled',
            'this.itemTemplate',
            'this.items',
            'this.validationGroup'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onContentReady = new core_1.EventEmitter();
        this.onItemClick = new core_1.EventEmitter();
        this.hoverStateEnabledChange = new core_1.EventEmitter();
        this.itemTemplateChange = new core_1.EventEmitter();
        this.itemsChange = new core_1.EventEmitter();
        this.validationGroupChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxValidationSummaryComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidationSummaryComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidationSummaryComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidationSummaryComponent.prototype, "validationGroup", {
        get: function () {
            return this._getOption('validationGroup');
        },
        set: function (value) {
            this._setOption('validationGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    DxValidationSummaryComponent.prototype._createInstance = function (element, options) {
        return new validation_summary_1.default(element, options);
    };
    DxValidationSummaryComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('items', changes);
    };
    DxValidationSummaryComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxValidationSummaryComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxValidationSummaryComponent.prototype, "itemTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxValidationSummaryComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxValidationSummaryComponent.prototype, "validationGroup", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidationSummaryComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidationSummaryComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidationSummaryComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidationSummaryComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidationSummaryComponent.prototype, "onItemClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidationSummaryComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidationSummaryComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidationSummaryComponent.prototype, "itemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidationSummaryComponent.prototype, "validationGroupChange", void 0);
    DxValidationSummaryComponent = __decorate([
        core_1.Component({
            selector: 'dx-validation-summary',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxValidationSummaryComponent);
    return DxValidationSummaryComponent;
}(dx_component_1.DxComponent));
exports.DxValidationSummaryComponent = DxValidationSummaryComponent;
var DxValidationSummaryModule = (function () {
    function DxValidationSummaryModule() {
    }
    DxValidationSummaryModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxValidationSummaryComponent
            ],
            exports: [
                DxValidationSummaryComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxValidationSummaryModule);
    return DxValidationSummaryModule;
}());
exports.DxValidationSummaryModule = DxValidationSummaryModule;

//# sourceMappingURL=validation-summary.js.map
