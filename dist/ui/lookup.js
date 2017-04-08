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
var lookup_1 = require('devextreme/ui/lookup');
var validator_1 = require('./validator');
var forms_1 = require('@angular/forms');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxLookupComponent = (function (_super) {
    __extends(DxLookupComponent, _super);
    function DxLookupComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxLookup';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'pageLoading', emit: 'onPageLoading' },
            { subscribe: 'pullRefresh', emit: 'onPullRefresh' },
            { subscribe: 'scroll', emit: 'onScroll' },
            { subscribe: 'titleRendered', emit: 'onTitleRendered' },
            { emit: 'dataSourceChange' },
            { emit: 'displayExprChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'valueExprChange' },
            { emit: 'itemsChange' },
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
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'attrChange' },
            { emit: 'placeholderChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'textChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'applyValueModeChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'fieldEditEnabledChange' },
            { emit: 'openedChange' },
            { emit: 'displayValueChange' },
            { emit: 'fieldTemplateChange' },
            { emit: 'minSearchLengthChange' },
            { emit: 'noDataTextChange' },
            { emit: 'pagingEnabledChange' },
            { emit: 'searchEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'selectedItemChange' },
            { emit: 'showDataBeforeSearchChange' },
            { emit: 'animationChange' },
            { emit: 'applyButtonTextChange' },
            { emit: 'cancelButtonTextChange' },
            { emit: 'cleanSearchOnOpeningChange' },
            { emit: 'clearButtonTextChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'fullScreenChange' },
            { emit: 'groupedChange' },
            { emit: 'groupTemplateChange' },
            { emit: 'nextButtonTextChange' },
            { emit: 'pageLoadingTextChange' },
            { emit: 'pageLoadModeChange' },
            { emit: 'popupHeightChange' },
            { emit: 'popupWidthChange' },
            { emit: 'pulledDownTextChange' },
            { emit: 'pullingDownTextChange' },
            { emit: 'pullRefreshEnabledChange' },
            { emit: 'refreshingTextChange' },
            { emit: 'searchPlaceholderChange' },
            { emit: 'shadingChange' },
            { emit: 'showCancelButtonChange' },
            { emit: 'showNextButtonChange' },
            { emit: 'showPopupTitleChange' },
            { emit: 'titleChange' },
            { emit: 'titleTemplateChange' },
            { emit: 'useNativeScrollingChange' },
            { emit: 'usePopoverChange' },
            { emit: 'positionChange' }
        ];
        this._properties = [
            'this.dataSource',
            'this.displayExpr',
            'this.itemTemplate',
            'this.valueExpr',
            'this.items',
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
            'this.validationError',
            'this.validationMessageMode',
            'this.value',
            'this.attr',
            'this.placeholder',
            'this.showClearButton',
            'this.text',
            'this.valueChangeEvent',
            'this.applyValueMode',
            'this.deferRendering',
            'this.fieldEditEnabled',
            'this.opened',
            'this.displayValue',
            'this.fieldTemplate',
            'this.minSearchLength',
            'this.noDataText',
            'this.pagingEnabled',
            'this.searchEnabled',
            'this.searchExpr',
            'this.searchMode',
            'this.searchTimeout',
            'this.selectedItem',
            'this.showDataBeforeSearch',
            'this.animation',
            'this.applyButtonText',
            'this.cancelButtonText',
            'this.cleanSearchOnOpening',
            'this.clearButtonText',
            'this.closeOnOutsideClick',
            'this.fullScreen',
            'this.grouped',
            'this.groupTemplate',
            'this.nextButtonText',
            'this.pageLoadingText',
            'this.pageLoadMode',
            'this.popupHeight',
            'this.popupWidth',
            'this.pulledDownText',
            'this.pullingDownText',
            'this.pullRefreshEnabled',
            'this.refreshingText',
            'this.searchPlaceholder',
            'this.shading',
            'this.showCancelButton',
            'this.showNextButton',
            'this.showPopupTitle',
            'this.title',
            'this.titleTemplate',
            'this.useNativeScrolling',
            'this.usePopover',
            'this.position'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onValueChanged = new core_1.EventEmitter();
        this.onClosed = new core_1.EventEmitter();
        this.onOpened = new core_1.EventEmitter();
        this.onContentReady = new core_1.EventEmitter();
        this.onItemClick = new core_1.EventEmitter();
        this.onSelectionChanged = new core_1.EventEmitter();
        this.onPageLoading = new core_1.EventEmitter();
        this.onPullRefresh = new core_1.EventEmitter();
        this.onScroll = new core_1.EventEmitter();
        this.onTitleRendered = new core_1.EventEmitter();
        this.dataSourceChange = new core_1.EventEmitter();
        this.displayExprChange = new core_1.EventEmitter();
        this.itemTemplateChange = new core_1.EventEmitter();
        this.valueExprChange = new core_1.EventEmitter();
        this.itemsChange = new core_1.EventEmitter();
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
        this.validationErrorChange = new core_1.EventEmitter();
        this.validationMessageModeChange = new core_1.EventEmitter();
        this.valueChange = new core_1.EventEmitter();
        this.attrChange = new core_1.EventEmitter();
        this.placeholderChange = new core_1.EventEmitter();
        this.showClearButtonChange = new core_1.EventEmitter();
        this.textChange = new core_1.EventEmitter();
        this.valueChangeEventChange = new core_1.EventEmitter();
        this.applyValueModeChange = new core_1.EventEmitter();
        this.deferRenderingChange = new core_1.EventEmitter();
        this.fieldEditEnabledChange = new core_1.EventEmitter();
        this.openedChange = new core_1.EventEmitter();
        this.displayValueChange = new core_1.EventEmitter();
        this.fieldTemplateChange = new core_1.EventEmitter();
        this.minSearchLengthChange = new core_1.EventEmitter();
        this.noDataTextChange = new core_1.EventEmitter();
        this.pagingEnabledChange = new core_1.EventEmitter();
        this.searchEnabledChange = new core_1.EventEmitter();
        this.searchExprChange = new core_1.EventEmitter();
        this.searchModeChange = new core_1.EventEmitter();
        this.searchTimeoutChange = new core_1.EventEmitter();
        this.selectedItemChange = new core_1.EventEmitter();
        this.showDataBeforeSearchChange = new core_1.EventEmitter();
        this.animationChange = new core_1.EventEmitter();
        this.applyButtonTextChange = new core_1.EventEmitter();
        this.cancelButtonTextChange = new core_1.EventEmitter();
        this.cleanSearchOnOpeningChange = new core_1.EventEmitter();
        this.clearButtonTextChange = new core_1.EventEmitter();
        this.closeOnOutsideClickChange = new core_1.EventEmitter();
        this.fullScreenChange = new core_1.EventEmitter();
        this.groupedChange = new core_1.EventEmitter();
        this.groupTemplateChange = new core_1.EventEmitter();
        this.nextButtonTextChange = new core_1.EventEmitter();
        this.pageLoadingTextChange = new core_1.EventEmitter();
        this.pageLoadModeChange = new core_1.EventEmitter();
        this.popupHeightChange = new core_1.EventEmitter();
        this.popupWidthChange = new core_1.EventEmitter();
        this.pulledDownTextChange = new core_1.EventEmitter();
        this.pullingDownTextChange = new core_1.EventEmitter();
        this.pullRefreshEnabledChange = new core_1.EventEmitter();
        this.refreshingTextChange = new core_1.EventEmitter();
        this.searchPlaceholderChange = new core_1.EventEmitter();
        this.shadingChange = new core_1.EventEmitter();
        this.showCancelButtonChange = new core_1.EventEmitter();
        this.showNextButtonChange = new core_1.EventEmitter();
        this.showPopupTitleChange = new core_1.EventEmitter();
        this.titleChange = new core_1.EventEmitter();
        this.titleTemplateChange = new core_1.EventEmitter();
        this.useNativeScrollingChange = new core_1.EventEmitter();
        this.usePopoverChange = new core_1.EventEmitter();
        this.positionChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxLookupComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "displayExpr", {
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "itemTemplate", {
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "valueExpr", {
        get: function () {
            return this._getOption('valueExpr');
        },
        set: function (value) {
            this._setOption('valueExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "isValid", {
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "validationError", {
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "validationMessageMode", {
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "value", {
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "attr", {
        get: function () {
            return this._getOption('attr');
        },
        set: function (value) {
            this._setOption('attr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "placeholder", {
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showClearButton", {
        get: function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "valueChangeEvent", {
        get: function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "applyValueMode", {
        get: function () {
            return this._getOption('applyValueMode');
        },
        set: function (value) {
            this._setOption('applyValueMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "deferRendering", {
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "fieldEditEnabled", {
        get: function () {
            return this._getOption('fieldEditEnabled');
        },
        set: function (value) {
            this._setOption('fieldEditEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "opened", {
        get: function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "displayValue", {
        get: function () {
            return this._getOption('displayValue');
        },
        set: function (value) {
            this._setOption('displayValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "fieldTemplate", {
        get: function () {
            return this._getOption('fieldTemplate');
        },
        set: function (value) {
            this._setOption('fieldTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "minSearchLength", {
        get: function () {
            return this._getOption('minSearchLength');
        },
        set: function (value) {
            this._setOption('minSearchLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "noDataText", {
        get: function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pagingEnabled", {
        get: function () {
            return this._getOption('pagingEnabled');
        },
        set: function (value) {
            this._setOption('pagingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchEnabled", {
        get: function () {
            return this._getOption('searchEnabled');
        },
        set: function (value) {
            this._setOption('searchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchExpr", {
        get: function () {
            return this._getOption('searchExpr');
        },
        set: function (value) {
            this._setOption('searchExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchMode", {
        get: function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchTimeout", {
        get: function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "selectedItem", {
        get: function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showDataBeforeSearch", {
        get: function () {
            return this._getOption('showDataBeforeSearch');
        },
        set: function (value) {
            this._setOption('showDataBeforeSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "animation", {
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "applyButtonText", {
        get: function () {
            return this._getOption('applyButtonText');
        },
        set: function (value) {
            this._setOption('applyButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "cancelButtonText", {
        get: function () {
            return this._getOption('cancelButtonText');
        },
        set: function (value) {
            this._setOption('cancelButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "cleanSearchOnOpening", {
        get: function () {
            return this._getOption('cleanSearchOnOpening');
        },
        set: function (value) {
            this._setOption('cleanSearchOnOpening', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "clearButtonText", {
        get: function () {
            return this._getOption('clearButtonText');
        },
        set: function (value) {
            this._setOption('clearButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "closeOnOutsideClick", {
        get: function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "fullScreen", {
        get: function () {
            return this._getOption('fullScreen');
        },
        set: function (value) {
            this._setOption('fullScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "grouped", {
        get: function () {
            return this._getOption('grouped');
        },
        set: function (value) {
            this._setOption('grouped', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "groupTemplate", {
        get: function () {
            return this._getOption('groupTemplate');
        },
        set: function (value) {
            this._setOption('groupTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "nextButtonText", {
        get: function () {
            return this._getOption('nextButtonText');
        },
        set: function (value) {
            this._setOption('nextButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pageLoadingText", {
        get: function () {
            return this._getOption('pageLoadingText');
        },
        set: function (value) {
            this._setOption('pageLoadingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pageLoadMode", {
        get: function () {
            return this._getOption('pageLoadMode');
        },
        set: function (value) {
            this._setOption('pageLoadMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "popupHeight", {
        get: function () {
            return this._getOption('popupHeight');
        },
        set: function (value) {
            this._setOption('popupHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "popupWidth", {
        get: function () {
            return this._getOption('popupWidth');
        },
        set: function (value) {
            this._setOption('popupWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pulledDownText", {
        get: function () {
            return this._getOption('pulledDownText');
        },
        set: function (value) {
            this._setOption('pulledDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pullingDownText", {
        get: function () {
            return this._getOption('pullingDownText');
        },
        set: function (value) {
            this._setOption('pullingDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "pullRefreshEnabled", {
        get: function () {
            return this._getOption('pullRefreshEnabled');
        },
        set: function (value) {
            this._setOption('pullRefreshEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "refreshingText", {
        get: function () {
            return this._getOption('refreshingText');
        },
        set: function (value) {
            this._setOption('refreshingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "searchPlaceholder", {
        get: function () {
            return this._getOption('searchPlaceholder');
        },
        set: function (value) {
            this._setOption('searchPlaceholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "shading", {
        get: function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showCancelButton", {
        get: function () {
            return this._getOption('showCancelButton');
        },
        set: function (value) {
            this._setOption('showCancelButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showNextButton", {
        get: function () {
            return this._getOption('showNextButton');
        },
        set: function (value) {
            this._setOption('showNextButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "showPopupTitle", {
        get: function () {
            return this._getOption('showPopupTitle');
        },
        set: function (value) {
            this._setOption('showPopupTitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "titleTemplate", {
        get: function () {
            return this._getOption('titleTemplate');
        },
        set: function (value) {
            this._setOption('titleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "useNativeScrolling", {
        get: function () {
            return this._getOption('useNativeScrolling');
        },
        set: function (value) {
            this._setOption('useNativeScrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "usePopover", {
        get: function () {
            return this._getOption('usePopover');
        },
        set: function (value) {
            this._setOption('usePopover', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLookupComponent.prototype, "position", {
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    DxLookupComponent.prototype._createInstance = function (element, options) {
        var widget = new lookup_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxLookupComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
        this._idh.setup('searchExpr', changes);
    };
    DxLookupComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.ContentChild(validator_1.DxValidatorComponent), 
        __metadata('design:type', validator_1.DxValidatorComponent)
    ], DxLookupComponent.prototype, "validator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "displayExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "itemTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "valueExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "isValid", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "name", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "validationError", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "validationMessageMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "attr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "placeholder", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "showClearButton", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "text", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "valueChangeEvent", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "applyValueMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "deferRendering", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "fieldEditEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "opened", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "displayValue", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "fieldTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "minSearchLength", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "noDataText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "pagingEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "searchEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "searchExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "searchMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "searchTimeout", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "selectedItem", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "showDataBeforeSearch", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "animation", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "applyButtonText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "cancelButtonText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "cleanSearchOnOpening", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "clearButtonText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "closeOnOutsideClick", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "fullScreen", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "grouped", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "groupTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "nextButtonText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "pageLoadingText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "pageLoadMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "popupHeight", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "popupWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "pulledDownText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "pullingDownText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "pullRefreshEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "refreshingText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "searchPlaceholder", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "shading", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "showCancelButton", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "showNextButton", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "showPopupTitle", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "title", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "titleTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "useNativeScrolling", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "usePopover", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxLookupComponent.prototype, "position", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "onValueChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "onClosed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "onOpened", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "onItemClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "onPageLoading", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "onPullRefresh", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "onScroll", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "onTitleRendered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "displayExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "itemTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "valueExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "itemsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "isValidChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "nameChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "validationErrorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "validationMessageModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "valueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "attrChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "placeholderChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "showClearButtonChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "textChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "valueChangeEventChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "applyValueModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "deferRenderingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "fieldEditEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "openedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "displayValueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "fieldTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "minSearchLengthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "pagingEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "searchEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "searchExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "searchModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "searchTimeoutChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "showDataBeforeSearchChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "animationChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "applyButtonTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "cancelButtonTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "cleanSearchOnOpeningChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "clearButtonTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "closeOnOutsideClickChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "fullScreenChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "groupedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "groupTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "nextButtonTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "pageLoadingTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "pageLoadModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "popupHeightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "popupWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "pulledDownTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "pullingDownTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "pullRefreshEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "refreshingTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "searchPlaceholderChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "shadingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "showCancelButtonChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "showNextButtonChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "showPopupTitleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "titleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "titleTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "useNativeScrollingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "usePopoverChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxLookupComponent.prototype, "positionChange", void 0);
    DxLookupComponent = __decorate([
        core_1.Component({
            selector: 'dx-lookup',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxLookupComponent);
    return DxLookupComponent;
}(dx_component_1.DxComponent));
exports.DxLookupComponent = DxLookupComponent;
var CUSTOM_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxLookupValueAccessorDirective; }),
    multi: true
};
var DxLookupValueAccessorDirective = (function () {
    function DxLookupValueAccessorDirective(host) {
        this.host = host;
        this.onTouched = function () { };
    }
    DxLookupValueAccessorDirective.prototype.onChange = function (_) { };
    DxLookupValueAccessorDirective.prototype.writeValue = function (value) {
        this.host.value = value;
    };
    DxLookupValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DxLookupValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.HostListener('valueChange', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DxLookupValueAccessorDirective.prototype, "onChange", null);
    DxLookupValueAccessorDirective = __decorate([
        core_1.Directive({
            selector: 'dx-lookup[formControlName],dx-lookup[formControl],dx-lookup[ngModel]',
            providers: [CUSTOM_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [DxLookupComponent])
    ], DxLookupValueAccessorDirective);
    return DxLookupValueAccessorDirective;
}());
exports.DxLookupValueAccessorDirective = DxLookupValueAccessorDirective;
var DxLookupModule = (function () {
    function DxLookupModule() {
    }
    DxLookupModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxLookupComponent,
                DxLookupValueAccessorDirective
            ],
            exports: [
                DxLookupComponent,
                DxLookupValueAccessorDirective
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxLookupModule);
    return DxLookupModule;
}());
exports.DxLookupModule = DxLookupModule;

//# sourceMappingURL=lookup.js.map
