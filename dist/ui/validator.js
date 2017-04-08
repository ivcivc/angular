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
var validator_1 = require('devextreme/ui/validator');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxValidatorComponent = (function (_super) {
    __extends(DxValidatorComponent, _super);
    function DxValidatorComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxValidator';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'validated', emit: 'onValidated' },
            { emit: 'heightChange' },
            { emit: 'widthChange' },
            { emit: 'adapterChange' },
            { emit: 'nameChange' },
            { emit: 'validationGroupChange' },
            { emit: 'validationRulesChange' }
        ];
        this._properties = [
            'this.height',
            'this.width',
            'this.adapter',
            'this.name',
            'this.validationGroup',
            'this.validationRules'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onValidated = new core_1.EventEmitter();
        this.heightChange = new core_1.EventEmitter();
        this.widthChange = new core_1.EventEmitter();
        this.adapterChange = new core_1.EventEmitter();
        this.nameChange = new core_1.EventEmitter();
        this.validationGroupChange = new core_1.EventEmitter();
        this.validationRulesChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxValidatorComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "adapter", {
        get: function () {
            return this._getOption('adapter');
        },
        set: function (value) {
            this._setOption('adapter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "validationGroup", {
        get: function () {
            return this._getOption('validationGroup');
        },
        set: function (value) {
            this._setOption('validationGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidatorComponent.prototype, "validationRules", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this._setOption('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    DxValidatorComponent.prototype._createInstance = function (element, options) {
        return new validator_1.default(element, options);
    };
    DxValidatorComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('validationRules', changes);
    };
    DxValidatorComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('validationRules');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxValidatorComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxValidatorComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxValidatorComponent.prototype, "adapter", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxValidatorComponent.prototype, "name", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxValidatorComponent.prototype, "validationGroup", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxValidatorComponent.prototype, "validationRules", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidatorComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidatorComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidatorComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidatorComponent.prototype, "onValidated", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidatorComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidatorComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidatorComponent.prototype, "adapterChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidatorComponent.prototype, "nameChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidatorComponent.prototype, "validationGroupChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidatorComponent.prototype, "validationRulesChange", void 0);
    DxValidatorComponent = __decorate([
        core_1.Component({
            selector: 'dx-validator',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxValidatorComponent);
    return DxValidatorComponent;
}(dx_component_1.DxComponentExtension));
exports.DxValidatorComponent = DxValidatorComponent;
var DxValidatorModule = (function () {
    function DxValidatorModule() {
    }
    DxValidatorModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxValidatorComponent
            ],
            exports: [
                DxValidatorComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxValidatorModule);
    return DxValidatorModule;
}());
exports.DxValidatorModule = DxValidatorModule;

//# sourceMappingURL=validator.js.map
