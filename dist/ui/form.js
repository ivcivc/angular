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
var form_1 = require('devextreme/ui/form');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxFormComponent = (function (_super) {
    __extends(DxFormComponent, _super);
    function DxFormComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxForm';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'editorEnterKey', emit: 'onEditorEnterKey' },
            { subscribe: 'fieldDataChanged', emit: 'onFieldDataChanged' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'alignItemLabelsChange' },
            { emit: 'alignItemLabelsInAllGroupsChange' },
            { emit: 'colCountChange' },
            { emit: 'colCountByScreenChange' },
            { emit: 'customizeItemChange' },
            { emit: 'formDataChange' },
            { emit: 'itemsChange' },
            { emit: 'labelLocationChange' },
            { emit: 'minColWidthChange' },
            { emit: 'optionalMarkChange' },
            { emit: 'readOnlyChange' },
            { emit: 'requiredMarkChange' },
            { emit: 'requiredMessageChange' },
            { emit: 'screenByWidthChange' },
            { emit: 'scrollingEnabledChange' },
            { emit: 'showColonAfterLabelChange' },
            { emit: 'showOptionalMarkChange' },
            { emit: 'showRequiredMarkChange' },
            { emit: 'showValidationSummaryChange' }
        ];
        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.accessKey',
            'this.activeStateEnabled',
            'this.disabled',
            'this.focusStateEnabled',
            'this.hint',
            'this.hoverStateEnabled',
            'this.tabIndex',
            'this.visible',
            'this.alignItemLabels',
            'this.alignItemLabelsInAllGroups',
            'this.colCount',
            'this.colCountByScreen',
            'this.customizeItem',
            'this.formData',
            'this.items',
            'this.labelLocation',
            'this.minColWidth',
            'this.optionalMark',
            'this.readOnly',
            'this.requiredMark',
            'this.requiredMessage',
            'this.screenByWidth',
            'this.scrollingEnabled',
            'this.showColonAfterLabel',
            'this.showOptionalMark',
            'this.showRequiredMark',
            'this.showValidationSummary'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onContentReady = new core_1.EventEmitter();
        this.onEditorEnterKey = new core_1.EventEmitter();
        this.onFieldDataChanged = new core_1.EventEmitter();
        this.heightChange = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.widthChange = new core_1.EventEmitter();
        this.accessKeyChange = new core_1.EventEmitter();
        this.activeStateEnabledChange = new core_1.EventEmitter();
        this.disabledChange = new core_1.EventEmitter();
        this.focusStateEnabledChange = new core_1.EventEmitter();
        this.hintChange = new core_1.EventEmitter();
        this.hoverStateEnabledChange = new core_1.EventEmitter();
        this.tabIndexChange = new core_1.EventEmitter();
        this.visibleChange = new core_1.EventEmitter();
        this.alignItemLabelsChange = new core_1.EventEmitter();
        this.alignItemLabelsInAllGroupsChange = new core_1.EventEmitter();
        this.colCountChange = new core_1.EventEmitter();
        this.colCountByScreenChange = new core_1.EventEmitter();
        this.customizeItemChange = new core_1.EventEmitter();
        this.formDataChange = new core_1.EventEmitter();
        this.itemsChange = new core_1.EventEmitter();
        this.labelLocationChange = new core_1.EventEmitter();
        this.minColWidthChange = new core_1.EventEmitter();
        this.optionalMarkChange = new core_1.EventEmitter();
        this.readOnlyChange = new core_1.EventEmitter();
        this.requiredMarkChange = new core_1.EventEmitter();
        this.requiredMessageChange = new core_1.EventEmitter();
        this.screenByWidthChange = new core_1.EventEmitter();
        this.scrollingEnabledChange = new core_1.EventEmitter();
        this.showColonAfterLabelChange = new core_1.EventEmitter();
        this.showOptionalMarkChange = new core_1.EventEmitter();
        this.showRequiredMarkChange = new core_1.EventEmitter();
        this.showValidationSummaryChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxFormComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "alignItemLabels", {
        get: function () {
            return this._getOption('alignItemLabels');
        },
        set: function (value) {
            this._setOption('alignItemLabels', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "alignItemLabelsInAllGroups", {
        get: function () {
            return this._getOption('alignItemLabelsInAllGroups');
        },
        set: function (value) {
            this._setOption('alignItemLabelsInAllGroups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "colCount", {
        get: function () {
            return this._getOption('colCount');
        },
        set: function (value) {
            this._setOption('colCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "colCountByScreen", {
        get: function () {
            return this._getOption('colCountByScreen');
        },
        set: function (value) {
            this._setOption('colCountByScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "customizeItem", {
        get: function () {
            return this._getOption('customizeItem');
        },
        set: function (value) {
            this._setOption('customizeItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "formData", {
        get: function () {
            return this._getOption('formData');
        },
        set: function (value) {
            this._setOption('formData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "labelLocation", {
        get: function () {
            return this._getOption('labelLocation');
        },
        set: function (value) {
            this._setOption('labelLocation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "minColWidth", {
        get: function () {
            return this._getOption('minColWidth');
        },
        set: function (value) {
            this._setOption('minColWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "optionalMark", {
        get: function () {
            return this._getOption('optionalMark');
        },
        set: function (value) {
            this._setOption('optionalMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "requiredMark", {
        get: function () {
            return this._getOption('requiredMark');
        },
        set: function (value) {
            this._setOption('requiredMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "requiredMessage", {
        get: function () {
            return this._getOption('requiredMessage');
        },
        set: function (value) {
            this._setOption('requiredMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "screenByWidth", {
        get: function () {
            return this._getOption('screenByWidth');
        },
        set: function (value) {
            this._setOption('screenByWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "scrollingEnabled", {
        get: function () {
            return this._getOption('scrollingEnabled');
        },
        set: function (value) {
            this._setOption('scrollingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "showColonAfterLabel", {
        get: function () {
            return this._getOption('showColonAfterLabel');
        },
        set: function (value) {
            this._setOption('showColonAfterLabel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "showOptionalMark", {
        get: function () {
            return this._getOption('showOptionalMark');
        },
        set: function (value) {
            this._setOption('showOptionalMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "showRequiredMark", {
        get: function () {
            return this._getOption('showRequiredMark');
        },
        set: function (value) {
            this._setOption('showRequiredMark', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFormComponent.prototype, "showValidationSummary", {
        get: function () {
            return this._getOption('showValidationSummary');
        },
        set: function (value) {
            this._setOption('showValidationSummary', value);
        },
        enumerable: true,
        configurable: true
    });
    DxFormComponent.prototype._createInstance = function (element, options) {
        return new form_1.default(element, options);
    };
    DxFormComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('items', changes);
    };
    DxFormComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "alignItemLabels", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "alignItemLabelsInAllGroups", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "colCount", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "colCountByScreen", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "customizeItem", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "formData", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "labelLocation", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "minColWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "optionalMark", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "readOnly", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "requiredMark", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "requiredMessage", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "screenByWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "scrollingEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "showColonAfterLabel", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "showOptionalMark", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "showRequiredMark", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFormComponent.prototype, "showValidationSummary", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "onEditorEnterKey", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "onFieldDataChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "alignItemLabelsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "alignItemLabelsInAllGroupsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "colCountChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "colCountByScreenChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "customizeItemChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "formDataChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "itemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "labelLocationChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "minColWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "optionalMarkChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "requiredMarkChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "requiredMessageChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "screenByWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "scrollingEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "showColonAfterLabelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "showOptionalMarkChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "showRequiredMarkChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFormComponent.prototype, "showValidationSummaryChange", void 0);
    DxFormComponent = __decorate([
        core_1.Component({
            selector: 'dx-form',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxFormComponent);
    return DxFormComponent;
}(dx_component_1.DxComponent));
exports.DxFormComponent = DxFormComponent;
var DxFormModule = (function () {
    function DxFormModule() {
    }
    DxFormModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxFormComponent
            ],
            exports: [
                DxFormComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxFormModule);
    return DxFormModule;
}());
exports.DxFormModule = DxFormModule;

//# sourceMappingURL=form.js.map
