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
var data_grid_1 = require('devextreme/ui/data_grid');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxDataGridComponent = (function (_super) {
    __extends(DxDataGridComponent, _super);
    function DxDataGridComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxDataGrid';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'adaptiveDetailRowPreparing', emit: 'onAdaptiveDetailRowPreparing' },
            { subscribe: 'cellClick', emit: 'onCellClick' },
            { subscribe: 'cellHoverChanged', emit: 'onCellHoverChanged' },
            { subscribe: 'cellPrepared', emit: 'onCellPrepared' },
            { subscribe: 'contextMenuPreparing', emit: 'onContextMenuPreparing' },
            { subscribe: 'dataErrorOccurred', emit: 'onDataErrorOccurred' },
            { subscribe: 'editingStart', emit: 'onEditingStart' },
            { subscribe: 'editorPrepared', emit: 'onEditorPrepared' },
            { subscribe: 'editorPreparing', emit: 'onEditorPreparing' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'initNewRow', emit: 'onInitNewRow' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'rowClick', emit: 'onRowClick' },
            { subscribe: 'rowCollapsed', emit: 'onRowCollapsed' },
            { subscribe: 'rowCollapsing', emit: 'onRowCollapsing' },
            { subscribe: 'rowExpanded', emit: 'onRowExpanded' },
            { subscribe: 'rowExpanding', emit: 'onRowExpanding' },
            { subscribe: 'rowInserted', emit: 'onRowInserted' },
            { subscribe: 'rowInserting', emit: 'onRowInserting' },
            { subscribe: 'rowPrepared', emit: 'onRowPrepared' },
            { subscribe: 'rowRemoved', emit: 'onRowRemoved' },
            { subscribe: 'rowRemoving', emit: 'onRowRemoving' },
            { subscribe: 'rowUpdated', emit: 'onRowUpdated' },
            { subscribe: 'rowUpdating', emit: 'onRowUpdating' },
            { subscribe: 'rowValidating', emit: 'onRowValidating' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'toolbarPreparing', emit: 'onToolbarPreparing' },
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
            { emit: 'allowColumnReorderingChange' },
            { emit: 'allowColumnResizingChange' },
            { emit: 'cacheEnabledChange' },
            { emit: 'cellHintEnabledChange' },
            { emit: 'columnAutoWidthChange' },
            { emit: 'columnChooserChange' },
            { emit: 'columnFixingChange' },
            { emit: 'columnHidingEnabledChange' },
            { emit: 'columnsChange' },
            { emit: 'customizeColumnsChange' },
            { emit: 'customizeExportDataChange' },
            { emit: 'dataSourceChange' },
            { emit: 'editingChange' },
            { emit: 'errorRowEnabledChange' },
            { emit: 'exportChange' },
            { emit: 'filterRowChange' },
            { emit: 'groupingChange' },
            { emit: 'groupPanelChange' },
            { emit: 'headerFilterChange' },
            { emit: 'loadPanelChange' },
            { emit: 'masterDetailChange' },
            { emit: 'noDataTextChange' },
            { emit: 'pagerChange' },
            { emit: 'pagingChange' },
            { emit: 'remoteOperationsChange' },
            { emit: 'rowAlternationEnabledChange' },
            { emit: 'rowTemplateChange' },
            { emit: 'scrollingChange' },
            { emit: 'searchPanelChange' },
            { emit: 'selectedRowKeysChange' },
            { emit: 'selectionChange' },
            { emit: 'showBordersChange' },
            { emit: 'showColumnHeadersChange' },
            { emit: 'showColumnLinesChange' },
            { emit: 'showRowLinesChange' },
            { emit: 'sortByGroupSummaryInfoChange' },
            { emit: 'sortingChange' },
            { emit: 'stateStoringChange' },
            { emit: 'summaryChange' },
            { emit: 'twoWayBindingEnabledChange' },
            { emit: 'wordWrapEnabledChange' }
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
            'this.allowColumnReordering',
            'this.allowColumnResizing',
            'this.cacheEnabled',
            'this.cellHintEnabled',
            'this.columnAutoWidth',
            'this.columnChooser',
            'this.columnFixing',
            'this.columnHidingEnabled',
            'this.columns',
            'this.customizeColumns',
            'this.customizeExportData',
            'this.dataSource',
            'this.editing',
            'this.errorRowEnabled',
            'this.export',
            'this.filterRow',
            'this.grouping',
            'this.groupPanel',
            'this.headerFilter',
            'this.loadPanel',
            'this.masterDetail',
            'this.noDataText',
            'this.pager',
            'this.paging',
            'this.remoteOperations',
            'this.rowAlternationEnabled',
            'this.rowTemplate',
            'this.scrolling',
            'this.searchPanel',
            'this.selectedRowKeys',
            'this.selection',
            'this.showBorders',
            'this.showColumnHeaders',
            'this.showColumnLines',
            'this.showRowLines',
            'this.sortByGroupSummaryInfo',
            'this.sorting',
            'this.stateStoring',
            'this.summary',
            'this.twoWayBindingEnabled',
            'this.wordWrapEnabled'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onContentReady = new core_1.EventEmitter();
        this.onAdaptiveDetailRowPreparing = new core_1.EventEmitter();
        this.onCellClick = new core_1.EventEmitter();
        this.onCellHoverChanged = new core_1.EventEmitter();
        this.onCellPrepared = new core_1.EventEmitter();
        this.onContextMenuPreparing = new core_1.EventEmitter();
        this.onDataErrorOccurred = new core_1.EventEmitter();
        this.onEditingStart = new core_1.EventEmitter();
        this.onEditorPrepared = new core_1.EventEmitter();
        this.onEditorPreparing = new core_1.EventEmitter();
        this.onExported = new core_1.EventEmitter();
        this.onExporting = new core_1.EventEmitter();
        this.onFileSaving = new core_1.EventEmitter();
        this.onInitNewRow = new core_1.EventEmitter();
        this.onKeyDown = new core_1.EventEmitter();
        this.onRowClick = new core_1.EventEmitter();
        this.onRowCollapsed = new core_1.EventEmitter();
        this.onRowCollapsing = new core_1.EventEmitter();
        this.onRowExpanded = new core_1.EventEmitter();
        this.onRowExpanding = new core_1.EventEmitter();
        this.onRowInserted = new core_1.EventEmitter();
        this.onRowInserting = new core_1.EventEmitter();
        this.onRowPrepared = new core_1.EventEmitter();
        this.onRowRemoved = new core_1.EventEmitter();
        this.onRowRemoving = new core_1.EventEmitter();
        this.onRowUpdated = new core_1.EventEmitter();
        this.onRowUpdating = new core_1.EventEmitter();
        this.onRowValidating = new core_1.EventEmitter();
        this.onSelectionChanged = new core_1.EventEmitter();
        this.onToolbarPreparing = new core_1.EventEmitter();
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
        this.allowColumnReorderingChange = new core_1.EventEmitter();
        this.allowColumnResizingChange = new core_1.EventEmitter();
        this.cacheEnabledChange = new core_1.EventEmitter();
        this.cellHintEnabledChange = new core_1.EventEmitter();
        this.columnAutoWidthChange = new core_1.EventEmitter();
        this.columnChooserChange = new core_1.EventEmitter();
        this.columnFixingChange = new core_1.EventEmitter();
        this.columnHidingEnabledChange = new core_1.EventEmitter();
        this.columnsChange = new core_1.EventEmitter();
        this.customizeColumnsChange = new core_1.EventEmitter();
        this.customizeExportDataChange = new core_1.EventEmitter();
        this.dataSourceChange = new core_1.EventEmitter();
        this.editingChange = new core_1.EventEmitter();
        this.errorRowEnabledChange = new core_1.EventEmitter();
        this.exportChange = new core_1.EventEmitter();
        this.filterRowChange = new core_1.EventEmitter();
        this.groupingChange = new core_1.EventEmitter();
        this.groupPanelChange = new core_1.EventEmitter();
        this.headerFilterChange = new core_1.EventEmitter();
        this.loadPanelChange = new core_1.EventEmitter();
        this.masterDetailChange = new core_1.EventEmitter();
        this.noDataTextChange = new core_1.EventEmitter();
        this.pagerChange = new core_1.EventEmitter();
        this.pagingChange = new core_1.EventEmitter();
        this.remoteOperationsChange = new core_1.EventEmitter();
        this.rowAlternationEnabledChange = new core_1.EventEmitter();
        this.rowTemplateChange = new core_1.EventEmitter();
        this.scrollingChange = new core_1.EventEmitter();
        this.searchPanelChange = new core_1.EventEmitter();
        this.selectedRowKeysChange = new core_1.EventEmitter();
        this.selectionChange = new core_1.EventEmitter();
        this.showBordersChange = new core_1.EventEmitter();
        this.showColumnHeadersChange = new core_1.EventEmitter();
        this.showColumnLinesChange = new core_1.EventEmitter();
        this.showRowLinesChange = new core_1.EventEmitter();
        this.sortByGroupSummaryInfoChange = new core_1.EventEmitter();
        this.sortingChange = new core_1.EventEmitter();
        this.stateStoringChange = new core_1.EventEmitter();
        this.summaryChange = new core_1.EventEmitter();
        this.twoWayBindingEnabledChange = new core_1.EventEmitter();
        this.wordWrapEnabledChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxDataGridComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "activeStateEnabled", {
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "hoverStateEnabled", {
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "allowColumnReordering", {
        get: function () {
            return this._getOption('allowColumnReordering');
        },
        set: function (value) {
            this._setOption('allowColumnReordering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "allowColumnResizing", {
        get: function () {
            return this._getOption('allowColumnResizing');
        },
        set: function (value) {
            this._setOption('allowColumnResizing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "cacheEnabled", {
        get: function () {
            return this._getOption('cacheEnabled');
        },
        set: function (value) {
            this._setOption('cacheEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "cellHintEnabled", {
        get: function () {
            return this._getOption('cellHintEnabled');
        },
        set: function (value) {
            this._setOption('cellHintEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnAutoWidth", {
        get: function () {
            return this._getOption('columnAutoWidth');
        },
        set: function (value) {
            this._setOption('columnAutoWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnChooser", {
        get: function () {
            return this._getOption('columnChooser');
        },
        set: function (value) {
            this._setOption('columnChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnFixing", {
        get: function () {
            return this._getOption('columnFixing');
        },
        set: function (value) {
            this._setOption('columnFixing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnHidingEnabled", {
        get: function () {
            return this._getOption('columnHidingEnabled');
        },
        set: function (value) {
            this._setOption('columnHidingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columns", {
        get: function () {
            return this._getOption('columns');
        },
        set: function (value) {
            this._setOption('columns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "customizeColumns", {
        get: function () {
            return this._getOption('customizeColumns');
        },
        set: function (value) {
            this._setOption('customizeColumns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "customizeExportData", {
        get: function () {
            return this._getOption('customizeExportData');
        },
        set: function (value) {
            this._setOption('customizeExportData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "editing", {
        get: function () {
            return this._getOption('editing');
        },
        set: function (value) {
            this._setOption('editing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "errorRowEnabled", {
        get: function () {
            return this._getOption('errorRowEnabled');
        },
        set: function (value) {
            this._setOption('errorRowEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "filterRow", {
        get: function () {
            return this._getOption('filterRow');
        },
        set: function (value) {
            this._setOption('filterRow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "grouping", {
        get: function () {
            return this._getOption('grouping');
        },
        set: function (value) {
            this._setOption('grouping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "groupPanel", {
        get: function () {
            return this._getOption('groupPanel');
        },
        set: function (value) {
            this._setOption('groupPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "headerFilter", {
        get: function () {
            return this._getOption('headerFilter');
        },
        set: function (value) {
            this._setOption('headerFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "loadPanel", {
        get: function () {
            return this._getOption('loadPanel');
        },
        set: function (value) {
            this._setOption('loadPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "masterDetail", {
        get: function () {
            return this._getOption('masterDetail');
        },
        set: function (value) {
            this._setOption('masterDetail', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "noDataText", {
        get: function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "pager", {
        get: function () {
            return this._getOption('pager');
        },
        set: function (value) {
            this._setOption('pager', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "paging", {
        get: function () {
            return this._getOption('paging');
        },
        set: function (value) {
            this._setOption('paging', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "remoteOperations", {
        get: function () {
            return this._getOption('remoteOperations');
        },
        set: function (value) {
            this._setOption('remoteOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "rowAlternationEnabled", {
        get: function () {
            return this._getOption('rowAlternationEnabled');
        },
        set: function (value) {
            this._setOption('rowAlternationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "rowTemplate", {
        get: function () {
            return this._getOption('rowTemplate');
        },
        set: function (value) {
            this._setOption('rowTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "scrolling", {
        get: function () {
            return this._getOption('scrolling');
        },
        set: function (value) {
            this._setOption('scrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "searchPanel", {
        get: function () {
            return this._getOption('searchPanel');
        },
        set: function (value) {
            this._setOption('searchPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "selectedRowKeys", {
        get: function () {
            return this._getOption('selectedRowKeys');
        },
        set: function (value) {
            this._setOption('selectedRowKeys', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "selection", {
        get: function () {
            return this._getOption('selection');
        },
        set: function (value) {
            this._setOption('selection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showBorders", {
        get: function () {
            return this._getOption('showBorders');
        },
        set: function (value) {
            this._setOption('showBorders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showColumnHeaders", {
        get: function () {
            return this._getOption('showColumnHeaders');
        },
        set: function (value) {
            this._setOption('showColumnHeaders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showColumnLines", {
        get: function () {
            return this._getOption('showColumnLines');
        },
        set: function (value) {
            this._setOption('showColumnLines', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showRowLines", {
        get: function () {
            return this._getOption('showRowLines');
        },
        set: function (value) {
            this._setOption('showRowLines', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "sortByGroupSummaryInfo", {
        get: function () {
            return this._getOption('sortByGroupSummaryInfo');
        },
        set: function (value) {
            this._setOption('sortByGroupSummaryInfo', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "sorting", {
        get: function () {
            return this._getOption('sorting');
        },
        set: function (value) {
            this._setOption('sorting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "stateStoring", {
        get: function () {
            return this._getOption('stateStoring');
        },
        set: function (value) {
            this._setOption('stateStoring', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "summary", {
        get: function () {
            return this._getOption('summary');
        },
        set: function (value) {
            this._setOption('summary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "twoWayBindingEnabled", {
        get: function () {
            return this._getOption('twoWayBindingEnabled');
        },
        set: function (value) {
            this._setOption('twoWayBindingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "wordWrapEnabled", {
        get: function () {
            return this._getOption('wordWrapEnabled');
        },
        set: function (value) {
            this._setOption('wordWrapEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    DxDataGridComponent.prototype._createInstance = function (element, options) {
        return new data_grid_1.default(element, options);
    };
    DxDataGridComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('columns', changes);
        this._idh.setup('dataSource', changes);
        this._idh.setup('selectedRowKeys', changes);
        this._idh.setup('sortByGroupSummaryInfo', changes);
    };
    DxDataGridComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('columns');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('selectedRowKeys');
        this._idh.doCheck('sortByGroupSummaryInfo');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "activeStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "hoverStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "allowColumnReordering", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "allowColumnResizing", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "cacheEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "cellHintEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "columnAutoWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "columnChooser", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "columnFixing", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "columnHidingEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "columns", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "customizeColumns", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "customizeExportData", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "editing", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "errorRowEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "export", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "filterRow", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "grouping", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "groupPanel", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "headerFilter", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "loadPanel", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "masterDetail", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "noDataText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "pager", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "paging", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "remoteOperations", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "rowAlternationEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "rowTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "scrolling", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "searchPanel", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "selectedRowKeys", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "selection", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "showBorders", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "showColumnHeaders", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "showColumnLines", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "showRowLines", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "sortByGroupSummaryInfo", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "sorting", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "stateStoring", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "summary", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "twoWayBindingEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxDataGridComponent.prototype, "wordWrapEnabled", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onAdaptiveDetailRowPreparing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onCellClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onCellHoverChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onCellPrepared", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onContextMenuPreparing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onDataErrorOccurred", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onEditingStart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onEditorPrepared", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onEditorPreparing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onExported", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onExporting", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onFileSaving", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onInitNewRow", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onKeyDown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onRowClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onRowCollapsed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onRowCollapsing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onRowExpanded", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onRowExpanding", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onRowInserted", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onRowInserting", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onRowPrepared", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onRowRemoved", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onRowRemoving", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onRowUpdated", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onRowUpdating", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onRowValidating", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "onToolbarPreparing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "activeStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "hoverStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "allowColumnReorderingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "allowColumnResizingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "cacheEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "cellHintEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "columnAutoWidthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "columnChooserChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "columnFixingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "columnHidingEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "columnsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "customizeColumnsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "customizeExportDataChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "editingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "errorRowEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "exportChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "filterRowChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "groupingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "groupPanelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "headerFilterChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "loadPanelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "masterDetailChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "pagerChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "pagingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "remoteOperationsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "rowAlternationEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "rowTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "scrollingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "searchPanelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "selectedRowKeysChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "selectionChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "showBordersChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "showColumnHeadersChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "showColumnLinesChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "showRowLinesChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "sortByGroupSummaryInfoChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "sortingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "stateStoringChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "summaryChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "twoWayBindingEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxDataGridComponent.prototype, "wordWrapEnabledChange", void 0);
    DxDataGridComponent = __decorate([
        core_1.Component({
            selector: 'dx-data-grid',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxDataGridComponent);
    return DxDataGridComponent;
}(dx_component_1.DxComponent));
exports.DxDataGridComponent = DxDataGridComponent;
var DxDataGridModule = (function () {
    function DxDataGridModule() {
    }
    DxDataGridModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxDataGridComponent
            ],
            exports: [
                DxDataGridComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxDataGridModule);
    return DxDataGridModule;
}());
exports.DxDataGridModule = DxDataGridModule;

//# sourceMappingURL=data-grid.js.map
