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
var file_uploader_1 = require('devextreme/ui/file_uploader');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxFileUploaderComponent = (function (_super) {
    __extends(DxFileUploaderComponent, _super);
    function DxFileUploaderComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxFileUploader';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { subscribe: 'progress', emit: 'onProgress' },
            { subscribe: 'uploadAborted', emit: 'onUploadAborted' },
            { subscribe: 'uploaded', emit: 'onUploaded' },
            { subscribe: 'uploadError', emit: 'onUploadError' },
            { subscribe: 'uploadStarted', emit: 'onUploadStarted' },
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
            { emit: 'isValidChange' },
            { emit: 'nameChange' },
            { emit: 'readOnlyChange' },
            { emit: 'validationErrorChange' },
            { emit: 'valueChange' },
            { emit: 'acceptChange' },
            { emit: 'allowCancelingChange' },
            { emit: 'buttonTextChange' },
            { emit: 'labelTextChange' },
            { emit: 'multipleChange' },
            { emit: 'progressChange' },
            { emit: 'readyToUploadMessageChange' },
            { emit: 'selectButtonTextChange' },
            { emit: 'showFileListChange' },
            { emit: 'uploadButtonTextChange' },
            { emit: 'uploadedMessageChange' },
            { emit: 'uploadFailedMessageChange' },
            { emit: 'uploadHeadersChange' },
            { emit: 'uploadMethodChange' },
            { emit: 'uploadModeChange' },
            { emit: 'uploadUrlChange' },
            { emit: 'valuesChange' }
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
            'this.isValid',
            'this.name',
            'this.readOnly',
            'this.validationError',
            'this.value',
            'this.accept',
            'this.allowCanceling',
            'this.buttonText',
            'this.labelText',
            'this.multiple',
            'this.progress',
            'this.readyToUploadMessage',
            'this.selectButtonText',
            'this.showFileList',
            'this.uploadButtonText',
            'this.uploadedMessage',
            'this.uploadFailedMessage',
            'this.uploadHeaders',
            'this.uploadMethod',
            'this.uploadMode',
            'this.uploadUrl',
            'this.values'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onValueChanged = new core_1.EventEmitter();
        this.onProgress = new core_1.EventEmitter();
        this.onUploadAborted = new core_1.EventEmitter();
        this.onUploaded = new core_1.EventEmitter();
        this.onUploadError = new core_1.EventEmitter();
        this.onUploadStarted = new core_1.EventEmitter();
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
        this.isValidChange = new core_1.EventEmitter();
        this.nameChange = new core_1.EventEmitter();
        this.readOnlyChange = new core_1.EventEmitter();
        this.validationErrorChange = new core_1.EventEmitter();
        this.valueChange = new core_1.EventEmitter();
        this.acceptChange = new core_1.EventEmitter();
        this.allowCancelingChange = new core_1.EventEmitter();
        this.buttonTextChange = new core_1.EventEmitter();
        this.labelTextChange = new core_1.EventEmitter();
        this.multipleChange = new core_1.EventEmitter();
        this.progressChange = new core_1.EventEmitter();
        this.readyToUploadMessageChange = new core_1.EventEmitter();
        this.selectButtonTextChange = new core_1.EventEmitter();
        this.showFileListChange = new core_1.EventEmitter();
        this.uploadButtonTextChange = new core_1.EventEmitter();
        this.uploadedMessageChange = new core_1.EventEmitter();
        this.uploadFailedMessageChange = new core_1.EventEmitter();
        this.uploadHeadersChange = new core_1.EventEmitter();
        this.uploadMethodChange = new core_1.EventEmitter();
        this.uploadModeChange = new core_1.EventEmitter();
        this.uploadUrlChange = new core_1.EventEmitter();
        this.valuesChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxFileUploaderComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "readOnly", {
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "accept", {
        get: function () {
            return this._getOption('accept');
        },
        set: function (value) {
            this._setOption('accept', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "allowCanceling", {
        get: function () {
            return this._getOption('allowCanceling');
        },
        set: function (value) {
            this._setOption('allowCanceling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "buttonText", {
        get: function () {
            return this._getOption('buttonText');
        },
        set: function (value) {
            this._setOption('buttonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "labelText", {
        get: function () {
            return this._getOption('labelText');
        },
        set: function (value) {
            this._setOption('labelText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "multiple", {
        get: function () {
            return this._getOption('multiple');
        },
        set: function (value) {
            this._setOption('multiple', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "progress", {
        get: function () {
            return this._getOption('progress');
        },
        set: function (value) {
            this._setOption('progress', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "readyToUploadMessage", {
        get: function () {
            return this._getOption('readyToUploadMessage');
        },
        set: function (value) {
            this._setOption('readyToUploadMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "selectButtonText", {
        get: function () {
            return this._getOption('selectButtonText');
        },
        set: function (value) {
            this._setOption('selectButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "showFileList", {
        get: function () {
            return this._getOption('showFileList');
        },
        set: function (value) {
            this._setOption('showFileList', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadButtonText", {
        get: function () {
            return this._getOption('uploadButtonText');
        },
        set: function (value) {
            this._setOption('uploadButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadedMessage", {
        get: function () {
            return this._getOption('uploadedMessage');
        },
        set: function (value) {
            this._setOption('uploadedMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadFailedMessage", {
        get: function () {
            return this._getOption('uploadFailedMessage');
        },
        set: function (value) {
            this._setOption('uploadFailedMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadHeaders", {
        get: function () {
            return this._getOption('uploadHeaders');
        },
        set: function (value) {
            this._setOption('uploadHeaders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadMethod", {
        get: function () {
            return this._getOption('uploadMethod');
        },
        set: function (value) {
            this._setOption('uploadMethod', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadMode", {
        get: function () {
            return this._getOption('uploadMode');
        },
        set: function (value) {
            this._setOption('uploadMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadUrl", {
        get: function () {
            return this._getOption('uploadUrl');
        },
        set: function (value) {
            this._setOption('uploadUrl', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "values", {
        get: function () {
            return this._getOption('values');
        },
        set: function (value) {
            this._setOption('values', value);
        },
        enumerable: true,
        configurable: true
    });
    DxFileUploaderComponent.prototype._createInstance = function (element, options) {
        var widget = new file_uploader_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxFileUploaderComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('value', changes);
    };
    DxFileUploaderComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('value');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.ContentChild(validator_1.DxValidatorComponent), 
        __metadata('design:type', validator_1.DxValidatorComponent)
    ], DxFileUploaderComponent.prototype, "validator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "isValid", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "name", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "readOnly", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "validationError", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "accept", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "allowCanceling", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "buttonText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "labelText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "multiple", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "progress", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "readyToUploadMessage", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "selectButtonText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "showFileList", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "uploadButtonText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "uploadedMessage", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "uploadFailedMessage", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "uploadHeaders", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "uploadMethod", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "uploadMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "uploadUrl", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxFileUploaderComponent.prototype, "values", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "onValueChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "onProgress", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "onUploadAborted", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "onUploaded", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "onUploadError", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "onUploadStarted", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "isValidChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "nameChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "readOnlyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "valueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "acceptChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "allowCancelingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "buttonTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "labelTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "multipleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "progressChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "readyToUploadMessageChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "selectButtonTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "showFileListChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "uploadButtonTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "uploadedMessageChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "uploadFailedMessageChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "uploadHeadersChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "uploadMethodChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "uploadModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "uploadUrlChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxFileUploaderComponent.prototype, "valuesChange", void 0);
    DxFileUploaderComponent = __decorate([
        core_1.Component({
            selector: 'dx-file-uploader',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxFileUploaderComponent);
    return DxFileUploaderComponent;
}(dx_component_1.DxComponent));
exports.DxFileUploaderComponent = DxFileUploaderComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxFileUploaderValueAccessorDirective; }),
    multi: true
};
var DxFileUploaderValueAccessorDirective = (function () {
    function DxFileUploaderValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxFileUploaderValueAccessorDirective.prototype.onChange = function (_) { };
    DxFileUploaderValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxFileUploaderValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxFileUploaderValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.HostListener('valueChange', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DxFileUploaderValueAccessorDirective.prototype, "onChange", null);
    DxFileUploaderValueAccessorDirective = __decorate([
        core_1.Directive({
            selector: 'dx-file-uploader[formControlName],dx-file-uploader[formControl],dx-file-uploader[ngModel]',
            providers: [CUSTOM_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [DxFileUploaderComponent])
    ], DxFileUploaderValueAccessorDirective);
    return DxFileUploaderValueAccessorDirective;
}());
exports.DxFileUploaderValueAccessorDirective = DxFileUploaderValueAccessorDirective;
var DxFileUploaderModule = (function () {
    function DxFileUploaderModule() {
    }
    DxFileUploaderModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxFileUploaderComponent,
                DxFileUploaderValueAccessorDirective
            ],
            exports: [
                DxFileUploaderComponent,
                DxFileUploaderValueAccessorDirective
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxFileUploaderModule);
    return DxFileUploaderModule;
}());
exports.DxFileUploaderModule = DxFileUploaderModule;

//# sourceMappingURL=file-uploader.js.map
