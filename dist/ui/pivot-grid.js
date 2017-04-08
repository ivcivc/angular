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
var pivot_grid_1 = require('devextreme/ui/pivot_grid');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
var DxPivotGridComponent = (function (_super) {
    __extends(DxPivotGridComponent, _super);
    function DxPivotGridComponent(elementRef, ngZone, templateHost, _watcherHelper) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this.widgetClassName = 'dxPivotGrid';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'cellClick', emit: 'onCellClick' },
            { subscribe: 'cellPrepared', emit: 'onCellPrepared' },
            { subscribe: 'contextMenuPreparing', emit: 'onContextMenuPreparing' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'disabledChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'allowExpandAllChange' },
            { emit: 'allowFilteringChange' },
            { emit: 'allowSortingChange' },
            { emit: 'allowSortingBySummaryChange' },
            { emit: 'dataFieldAreaChange' },
            { emit: 'dataSourceChange' },
            { emit: 'exportChange' },
            { emit: 'fieldChooserChange' },
            { emit: 'fieldPanelChange' },
            { emit: 'hideEmptySummaryCellsChange' },
            { emit: 'loadPanelChange' },
            { emit: 'rowHeaderLayoutChange' },
            { emit: 'scrollingChange' },
            { emit: 'showBordersChange' },
            { emit: 'showColumnGrandTotalsChange' },
            { emit: 'showColumnTotalsChange' },
            { emit: 'showRowGrandTotalsChange' },
            { emit: 'showRowTotalsChange' },
            { emit: 'showTotalsPriorChange' },
            { emit: 'stateStoringChange' },
            { emit: 'textsChange' },
            { emit: 'useNativeScrollingChange' },
            { emit: 'wordWrapEnabledChange' }
        ];
        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.disabled',
            'this.focusStateEnabled',
            'this.hint',
            'this.tabIndex',
            'this.visible',
            'this.allowExpandAll',
            'this.allowFiltering',
            'this.allowSorting',
            'this.allowSortingBySummary',
            'this.dataFieldArea',
            'this.dataSource',
            'this.export',
            'this.fieldChooser',
            'this.fieldPanel',
            'this.hideEmptySummaryCells',
            'this.loadPanel',
            'this.rowHeaderLayout',
            'this.scrolling',
            'this.showBorders',
            'this.showColumnGrandTotals',
            'this.showColumnTotals',
            'this.showRowGrandTotals',
            'this.showRowTotals',
            'this.showTotalsPrior',
            'this.stateStoring',
            'this.texts',
            'this.useNativeScrolling',
            'this.wordWrapEnabled'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onContentReady = new core_1.EventEmitter();
        this.onCellClick = new core_1.EventEmitter();
        this.onCellPrepared = new core_1.EventEmitter();
        this.onContextMenuPreparing = new core_1.EventEmitter();
        this.onExported = new core_1.EventEmitter();
        this.onExporting = new core_1.EventEmitter();
        this.onFileSaving = new core_1.EventEmitter();
        this.heightChange = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.widthChange = new core_1.EventEmitter();
        this.disabledChange = new core_1.EventEmitter();
        this.focusStateEnabledChange = new core_1.EventEmitter();
        this.hintChange = new core_1.EventEmitter();
        this.tabIndexChange = new core_1.EventEmitter();
        this.visibleChange = new core_1.EventEmitter();
        this.allowExpandAllChange = new core_1.EventEmitter();
        this.allowFilteringChange = new core_1.EventEmitter();
        this.allowSortingChange = new core_1.EventEmitter();
        this.allowSortingBySummaryChange = new core_1.EventEmitter();
        this.dataFieldAreaChange = new core_1.EventEmitter();
        this.dataSourceChange = new core_1.EventEmitter();
        this.exportChange = new core_1.EventEmitter();
        this.fieldChooserChange = new core_1.EventEmitter();
        this.fieldPanelChange = new core_1.EventEmitter();
        this.hideEmptySummaryCellsChange = new core_1.EventEmitter();
        this.loadPanelChange = new core_1.EventEmitter();
        this.rowHeaderLayoutChange = new core_1.EventEmitter();
        this.scrollingChange = new core_1.EventEmitter();
        this.showBordersChange = new core_1.EventEmitter();
        this.showColumnGrandTotalsChange = new core_1.EventEmitter();
        this.showColumnTotalsChange = new core_1.EventEmitter();
        this.showRowGrandTotalsChange = new core_1.EventEmitter();
        this.showRowTotalsChange = new core_1.EventEmitter();
        this.showTotalsPriorChange = new core_1.EventEmitter();
        this.stateStoringChange = new core_1.EventEmitter();
        this.textsChange = new core_1.EventEmitter();
        this.useNativeScrollingChange = new core_1.EventEmitter();
        this.wordWrapEnabledChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DxPivotGridComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "allowExpandAll", {
        get: function () {
            return this._getOption('allowExpandAll');
        },
        set: function (value) {
            this._setOption('allowExpandAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "allowFiltering", {
        get: function () {
            return this._getOption('allowFiltering');
        },
        set: function (value) {
            this._setOption('allowFiltering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "allowSorting", {
        get: function () {
            return this._getOption('allowSorting');
        },
        set: function (value) {
            this._setOption('allowSorting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "allowSortingBySummary", {
        get: function () {
            return this._getOption('allowSortingBySummary');
        },
        set: function (value) {
            this._setOption('allowSortingBySummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "dataFieldArea", {
        get: function () {
            return this._getOption('dataFieldArea');
        },
        set: function (value) {
            this._setOption('dataFieldArea', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "fieldChooser", {
        get: function () {
            return this._getOption('fieldChooser');
        },
        set: function (value) {
            this._setOption('fieldChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "fieldPanel", {
        get: function () {
            return this._getOption('fieldPanel');
        },
        set: function (value) {
            this._setOption('fieldPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "hideEmptySummaryCells", {
        get: function () {
            return this._getOption('hideEmptySummaryCells');
        },
        set: function (value) {
            this._setOption('hideEmptySummaryCells', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "loadPanel", {
        get: function () {
            return this._getOption('loadPanel');
        },
        set: function (value) {
            this._setOption('loadPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "rowHeaderLayout", {
        get: function () {
            return this._getOption('rowHeaderLayout');
        },
        set: function (value) {
            this._setOption('rowHeaderLayout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "scrolling", {
        get: function () {
            return this._getOption('scrolling');
        },
        set: function (value) {
            this._setOption('scrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showBorders", {
        get: function () {
            return this._getOption('showBorders');
        },
        set: function (value) {
            this._setOption('showBorders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showColumnGrandTotals", {
        get: function () {
            return this._getOption('showColumnGrandTotals');
        },
        set: function (value) {
            this._setOption('showColumnGrandTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showColumnTotals", {
        get: function () {
            return this._getOption('showColumnTotals');
        },
        set: function (value) {
            this._setOption('showColumnTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showRowGrandTotals", {
        get: function () {
            return this._getOption('showRowGrandTotals');
        },
        set: function (value) {
            this._setOption('showRowGrandTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showRowTotals", {
        get: function () {
            return this._getOption('showRowTotals');
        },
        set: function (value) {
            this._setOption('showRowTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showTotalsPrior", {
        get: function () {
            return this._getOption('showTotalsPrior');
        },
        set: function (value) {
            this._setOption('showTotalsPrior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "stateStoring", {
        get: function () {
            return this._getOption('stateStoring');
        },
        set: function (value) {
            this._setOption('stateStoring', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "useNativeScrolling", {
        get: function () {
            return this._getOption('useNativeScrolling');
        },
        set: function (value) {
            this._setOption('useNativeScrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "wordWrapEnabled", {
        get: function () {
            return this._getOption('wordWrapEnabled');
        },
        set: function (value) {
            this._setOption('wordWrapEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPivotGridComponent.prototype._createInstance = function (element, options) {
        return new pivot_grid_1.default(element, options);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "allowExpandAll", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "allowFiltering", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "allowSorting", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "allowSortingBySummary", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "dataFieldArea", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "export", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "fieldChooser", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "fieldPanel", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "hideEmptySummaryCells", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "loadPanel", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "rowHeaderLayout", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "scrolling", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "showBorders", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "showColumnGrandTotals", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "showColumnTotals", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "showRowGrandTotals", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "showRowTotals", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "showTotalsPrior", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "stateStoring", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "texts", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "useNativeScrolling", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxPivotGridComponent.prototype, "wordWrapEnabled", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "onCellClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "onCellPrepared", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "onContextMenuPreparing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "onExported", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "onExporting", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "onFileSaving", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "allowExpandAllChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "allowFilteringChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "allowSortingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "allowSortingBySummaryChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "dataFieldAreaChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "exportChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "fieldChooserChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "fieldPanelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "hideEmptySummaryCellsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "loadPanelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "rowHeaderLayoutChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "scrollingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "showBordersChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "showColumnGrandTotalsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "showColumnTotalsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "showRowGrandTotalsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "showRowTotalsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "showTotalsPriorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "stateStoringChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "textsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "useNativeScrollingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxPivotGridComponent.prototype, "wordWrapEnabledChange", void 0);
    DxPivotGridComponent = __decorate([
        core_1.Component({
            selector: 'dx-pivot-grid',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper])
    ], DxPivotGridComponent);
    return DxPivotGridComponent;
}(dx_component_1.DxComponent));
exports.DxPivotGridComponent = DxPivotGridComponent;
var DxPivotGridModule = (function () {
    function DxPivotGridModule() {
    }
    DxPivotGridModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxPivotGridComponent
            ],
            exports: [
                DxPivotGridComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxPivotGridModule);
    return DxPivotGridModule;
}());
exports.DxPivotGridModule = DxPivotGridModule;

//# sourceMappingURL=pivot-grid.js.map
