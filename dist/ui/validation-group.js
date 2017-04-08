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
var validation_group_1 = require('devextreme/ui/validation_group');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
var DxValidationGroupComponent = (function (_super) {
    __extends(DxValidationGroupComponent, _super);
    function DxValidationGroupComponent(elementRef, ngZone, templateHost, _watcherHelper) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this.widgetClassName = 'dxValidationGroup';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'heightChange' },
            { emit: 'widthChange' }
        ];
        this._properties = [
            'this.height',
            'this.width'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.heightChange = new core_1.EventEmitter();
        this.widthChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DxValidationGroupComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxValidationGroupComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxValidationGroupComponent.prototype._createInstance = function (element, options) {
        return new validation_group_1.default(element, options);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxValidationGroupComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxValidationGroupComponent.prototype, "width", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidationGroupComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidationGroupComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidationGroupComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidationGroupComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxValidationGroupComponent.prototype, "widthChange", void 0);
    DxValidationGroupComponent = __decorate([
        core_1.Component({
            selector: 'dx-validation-group',
            template: '<ng-content></ng-content>',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper])
    ], DxValidationGroupComponent);
    return DxValidationGroupComponent;
}(dx_component_1.DxComponent));
exports.DxValidationGroupComponent = DxValidationGroupComponent;
var DxValidationGroupModule = (function () {
    function DxValidationGroupModule() {
    }
    DxValidationGroupModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxValidationGroupComponent
            ],
            exports: [
                DxValidationGroupComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxValidationGroupModule);
    return DxValidationGroupModule;
}());
exports.DxValidationGroupModule = DxValidationGroupModule;

//# sourceMappingURL=validation-group.js.map
