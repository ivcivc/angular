



import {
    Component,
    NgModule,
    ElementRef,
    EventEmitter,
    NgZone,
    Input,
    Output,
    OnChanges,
    DoCheck,
    SimpleChanges
} from '@angular/core';

import DxDataGrid from 'devextreme/ui/data_grid';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-data-grid',
    template: '',
    providers: providers
})
export class DxDataGridComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxDataGrid;


    @Input()
    get height(): any {
        return this._getOption('height');
    }

    set height(value: any) {
        this._setOption('height', value);
    }

    @Input()
    get rtlEnabled(): any {
        return this._getOption('rtlEnabled');
    }

    set rtlEnabled(value: any) {
        this._setOption('rtlEnabled', value);
    }

    @Input()
    get width(): any {
        return this._getOption('width');
    }

    set width(value: any) {
        this._setOption('width', value);
    }

    @Input()
    get accessKey(): any {
        return this._getOption('accessKey');
    }

    set accessKey(value: any) {
        this._setOption('accessKey', value);
    }

    @Input()
    get activeStateEnabled(): any {
        return this._getOption('activeStateEnabled');
    }

    set activeStateEnabled(value: any) {
        this._setOption('activeStateEnabled', value);
    }

    @Input()
    get disabled(): any {
        return this._getOption('disabled');
    }

    set disabled(value: any) {
        this._setOption('disabled', value);
    }

    @Input()
    get focusStateEnabled(): any {
        return this._getOption('focusStateEnabled');
    }

    set focusStateEnabled(value: any) {
        this._setOption('focusStateEnabled', value);
    }

    @Input()
    get hint(): any {
        return this._getOption('hint');
    }

    set hint(value: any) {
        this._setOption('hint', value);
    }

    @Input()
    get hoverStateEnabled(): any {
        return this._getOption('hoverStateEnabled');
    }

    set hoverStateEnabled(value: any) {
        this._setOption('hoverStateEnabled', value);
    }

    @Input()
    get tabIndex(): any {
        return this._getOption('tabIndex');
    }

    set tabIndex(value: any) {
        this._setOption('tabIndex', value);
    }

    @Input()
    get visible(): any {
        return this._getOption('visible');
    }

    set visible(value: any) {
        this._setOption('visible', value);
    }

    @Input()
    get allowColumnReordering(): any {
        return this._getOption('allowColumnReordering');
    }

    set allowColumnReordering(value: any) {
        this._setOption('allowColumnReordering', value);
    }

    @Input()
    get allowColumnResizing(): any {
        return this._getOption('allowColumnResizing');
    }

    set allowColumnResizing(value: any) {
        this._setOption('allowColumnResizing', value);
    }

    @Input()
    get cacheEnabled(): any {
        return this._getOption('cacheEnabled');
    }

    set cacheEnabled(value: any) {
        this._setOption('cacheEnabled', value);
    }

    @Input()
    get cellHintEnabled(): any {
        return this._getOption('cellHintEnabled');
    }

    set cellHintEnabled(value: any) {
        this._setOption('cellHintEnabled', value);
    }

    @Input()
    get columnAutoWidth(): any {
        return this._getOption('columnAutoWidth');
    }

    set columnAutoWidth(value: any) {
        this._setOption('columnAutoWidth', value);
    }

    @Input()
    get columnChooser(): any {
        return this._getOption('columnChooser');
    }

    set columnChooser(value: any) {
        this._setOption('columnChooser', value);
    }

    @Input()
    get columnFixing(): any {
        return this._getOption('columnFixing');
    }

    set columnFixing(value: any) {
        this._setOption('columnFixing', value);
    }

    @Input()
    get columnHidingEnabled(): any {
        return this._getOption('columnHidingEnabled');
    }

    set columnHidingEnabled(value: any) {
        this._setOption('columnHidingEnabled', value);
    }

    @Input()
    get columns(): any {
        return this._getOption('columns');
    }

    set columns(value: any) {
        this._setOption('columns', value);
    }

    @Input()
    get customizeColumns(): any {
        return this._getOption('customizeColumns');
    }

    set customizeColumns(value: any) {
        this._setOption('customizeColumns', value);
    }

    @Input()
    get customizeExportData(): any {
        return this._getOption('customizeExportData');
    }

    set customizeExportData(value: any) {
        this._setOption('customizeExportData', value);
    }

    @Input()
    get dataSource(): any {
        return this._getOption('dataSource');
    }

    set dataSource(value: any) {
        this._setOption('dataSource', value);
    }

    @Input()
    get editing(): any {
        return this._getOption('editing');
    }

    set editing(value: any) {
        this._setOption('editing', value);
    }

    @Input()
    get errorRowEnabled(): any {
        return this._getOption('errorRowEnabled');
    }

    set errorRowEnabled(value: any) {
        this._setOption('errorRowEnabled', value);
    }

    @Input()
    get export(): any {
        return this._getOption('export');
    }

    set export(value: any) {
        this._setOption('export', value);
    }

    @Input()
    get filterRow(): any {
        return this._getOption('filterRow');
    }

    set filterRow(value: any) {
        this._setOption('filterRow', value);
    }

    @Input()
    get grouping(): any {
        return this._getOption('grouping');
    }

    set grouping(value: any) {
        this._setOption('grouping', value);
    }

    @Input()
    get groupPanel(): any {
        return this._getOption('groupPanel');
    }

    set groupPanel(value: any) {
        this._setOption('groupPanel', value);
    }

    @Input()
    get headerFilter(): any {
        return this._getOption('headerFilter');
    }

    set headerFilter(value: any) {
        this._setOption('headerFilter', value);
    }

    @Input()
    get loadPanel(): any {
        return this._getOption('loadPanel');
    }

    set loadPanel(value: any) {
        this._setOption('loadPanel', value);
    }

    @Input()
    get masterDetail(): any {
        return this._getOption('masterDetail');
    }

    set masterDetail(value: any) {
        this._setOption('masterDetail', value);
    }

    @Input()
    get noDataText(): any {
        return this._getOption('noDataText');
    }

    set noDataText(value: any) {
        this._setOption('noDataText', value);
    }

    @Input()
    get pager(): any {
        return this._getOption('pager');
    }

    set pager(value: any) {
        this._setOption('pager', value);
    }

    @Input()
    get paging(): any {
        return this._getOption('paging');
    }

    set paging(value: any) {
        this._setOption('paging', value);
    }

    @Input()
    get remoteOperations(): any {
        return this._getOption('remoteOperations');
    }

    set remoteOperations(value: any) {
        this._setOption('remoteOperations', value);
    }

    @Input()
    get rowAlternationEnabled(): any {
        return this._getOption('rowAlternationEnabled');
    }

    set rowAlternationEnabled(value: any) {
        this._setOption('rowAlternationEnabled', value);
    }

    @Input()
    get rowTemplate(): any {
        return this._getOption('rowTemplate');
    }

    set rowTemplate(value: any) {
        this._setOption('rowTemplate', value);
    }

    @Input()
    get scrolling(): any {
        return this._getOption('scrolling');
    }

    set scrolling(value: any) {
        this._setOption('scrolling', value);
    }

    @Input()
    get searchPanel(): any {
        return this._getOption('searchPanel');
    }

    set searchPanel(value: any) {
        this._setOption('searchPanel', value);
    }

    @Input()
    get selectedRowKeys(): any {
        return this._getOption('selectedRowKeys');
    }

    set selectedRowKeys(value: any) {
        this._setOption('selectedRowKeys', value);
    }

    @Input()
    get selection(): any {
        return this._getOption('selection');
    }

    set selection(value: any) {
        this._setOption('selection', value);
    }

    @Input()
    get showBorders(): any {
        return this._getOption('showBorders');
    }

    set showBorders(value: any) {
        this._setOption('showBorders', value);
    }

    @Input()
    get showColumnHeaders(): any {
        return this._getOption('showColumnHeaders');
    }

    set showColumnHeaders(value: any) {
        this._setOption('showColumnHeaders', value);
    }

    @Input()
    get showColumnLines(): any {
        return this._getOption('showColumnLines');
    }

    set showColumnLines(value: any) {
        this._setOption('showColumnLines', value);
    }

    @Input()
    get showRowLines(): any {
        return this._getOption('showRowLines');
    }

    set showRowLines(value: any) {
        this._setOption('showRowLines', value);
    }

    @Input()
    get sortByGroupSummaryInfo(): any {
        return this._getOption('sortByGroupSummaryInfo');
    }

    set sortByGroupSummaryInfo(value: any) {
        this._setOption('sortByGroupSummaryInfo', value);
    }

    @Input()
    get sorting(): any {
        return this._getOption('sorting');
    }

    set sorting(value: any) {
        this._setOption('sorting', value);
    }

    @Input()
    get stateStoring(): any {
        return this._getOption('stateStoring');
    }

    set stateStoring(value: any) {
        this._setOption('stateStoring', value);
    }

    @Input()
    get summary(): any {
        return this._getOption('summary');
    }

    set summary(value: any) {
        this._setOption('summary', value);
    }

    @Input()
    get twoWayBindingEnabled(): any {
        return this._getOption('twoWayBindingEnabled');
    }

    set twoWayBindingEnabled(value: any) {
        this._setOption('twoWayBindingEnabled', value);
    }

    @Input()
    get wordWrapEnabled(): any {
        return this._getOption('wordWrapEnabled');
    }

    set wordWrapEnabled(value: any) {
        this._setOption('wordWrapEnabled', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onContentReady: EventEmitter<any>;
    @Output() onAdaptiveDetailRowPreparing: EventEmitter<any>;
    @Output() onCellClick: EventEmitter<any>;
    @Output() onCellHoverChanged: EventEmitter<any>;
    @Output() onCellPrepared: EventEmitter<any>;
    @Output() onContextMenuPreparing: EventEmitter<any>;
    @Output() onDataErrorOccurred: EventEmitter<any>;
    @Output() onEditingStart: EventEmitter<any>;
    @Output() onEditorPrepared: EventEmitter<any>;
    @Output() onEditorPreparing: EventEmitter<any>;
    @Output() onExported: EventEmitter<any>;
    @Output() onExporting: EventEmitter<any>;
    @Output() onFileSaving: EventEmitter<any>;
    @Output() onInitNewRow: EventEmitter<any>;
    @Output() onKeyDown: EventEmitter<any>;
    @Output() onRowClick: EventEmitter<any>;
    @Output() onRowCollapsed: EventEmitter<any>;
    @Output() onRowCollapsing: EventEmitter<any>;
    @Output() onRowExpanded: EventEmitter<any>;
    @Output() onRowExpanding: EventEmitter<any>;
    @Output() onRowInserted: EventEmitter<any>;
    @Output() onRowInserting: EventEmitter<any>;
    @Output() onRowPrepared: EventEmitter<any>;
    @Output() onRowRemoved: EventEmitter<any>;
    @Output() onRowRemoving: EventEmitter<any>;
    @Output() onRowUpdated: EventEmitter<any>;
    @Output() onRowUpdating: EventEmitter<any>;
    @Output() onRowValidating: EventEmitter<any>;
    @Output() onSelectionChanged: EventEmitter<any>;
    @Output() onToolbarPreparing: EventEmitter<any>;
    @Output() heightChange: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() widthChange: EventEmitter<any>;
    @Output() accessKeyChange: EventEmitter<any>;
    @Output() activeStateEnabledChange: EventEmitter<any>;
    @Output() disabledChange: EventEmitter<any>;
    @Output() focusStateEnabledChange: EventEmitter<any>;
    @Output() hintChange: EventEmitter<any>;
    @Output() hoverStateEnabledChange: EventEmitter<any>;
    @Output() tabIndexChange: EventEmitter<any>;
    @Output() visibleChange: EventEmitter<any>;
    @Output() allowColumnReorderingChange: EventEmitter<any>;
    @Output() allowColumnResizingChange: EventEmitter<any>;
    @Output() cacheEnabledChange: EventEmitter<any>;
    @Output() cellHintEnabledChange: EventEmitter<any>;
    @Output() columnAutoWidthChange: EventEmitter<any>;
    @Output() columnChooserChange: EventEmitter<any>;
    @Output() columnFixingChange: EventEmitter<any>;
    @Output() columnHidingEnabledChange: EventEmitter<any>;
    @Output() columnsChange: EventEmitter<any>;
    @Output() customizeColumnsChange: EventEmitter<any>;
    @Output() customizeExportDataChange: EventEmitter<any>;
    @Output() dataSourceChange: EventEmitter<any>;
    @Output() editingChange: EventEmitter<any>;
    @Output() errorRowEnabledChange: EventEmitter<any>;
    @Output() exportChange: EventEmitter<any>;
    @Output() filterRowChange: EventEmitter<any>;
    @Output() groupingChange: EventEmitter<any>;
    @Output() groupPanelChange: EventEmitter<any>;
    @Output() headerFilterChange: EventEmitter<any>;
    @Output() loadPanelChange: EventEmitter<any>;
    @Output() masterDetailChange: EventEmitter<any>;
    @Output() noDataTextChange: EventEmitter<any>;
    @Output() pagerChange: EventEmitter<any>;
    @Output() pagingChange: EventEmitter<any>;
    @Output() remoteOperationsChange: EventEmitter<any>;
    @Output() rowAlternationEnabledChange: EventEmitter<any>;
    @Output() rowTemplateChange: EventEmitter<any>;
    @Output() scrollingChange: EventEmitter<any>;
    @Output() searchPanelChange: EventEmitter<any>;
    @Output() selectedRowKeysChange: EventEmitter<any>;
    @Output() selectionChange: EventEmitter<any>;
    @Output() showBordersChange: EventEmitter<any>;
    @Output() showColumnHeadersChange: EventEmitter<any>;
    @Output() showColumnLinesChange: EventEmitter<any>;
    @Output() showRowLinesChange: EventEmitter<any>;
    @Output() sortByGroupSummaryInfoChange: EventEmitter<any>;
    @Output() sortingChange: EventEmitter<any>;
    @Output() stateStoringChange: EventEmitter<any>;
    @Output() summaryChange: EventEmitter<any>;
    @Output() twoWayBindingEnabledChange: EventEmitter<any>;
    @Output() wordWrapEnabledChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
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

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onContentReady = new EventEmitter();
        this.onAdaptiveDetailRowPreparing = new EventEmitter();
        this.onCellClick = new EventEmitter();
        this.onCellHoverChanged = new EventEmitter();
        this.onCellPrepared = new EventEmitter();
        this.onContextMenuPreparing = new EventEmitter();
        this.onDataErrorOccurred = new EventEmitter();
        this.onEditingStart = new EventEmitter();
        this.onEditorPrepared = new EventEmitter();
        this.onEditorPreparing = new EventEmitter();
        this.onExported = new EventEmitter();
        this.onExporting = new EventEmitter();
        this.onFileSaving = new EventEmitter();
        this.onInitNewRow = new EventEmitter();
        this.onKeyDown = new EventEmitter();
        this.onRowClick = new EventEmitter();
        this.onRowCollapsed = new EventEmitter();
        this.onRowCollapsing = new EventEmitter();
        this.onRowExpanded = new EventEmitter();
        this.onRowExpanding = new EventEmitter();
        this.onRowInserted = new EventEmitter();
        this.onRowInserting = new EventEmitter();
        this.onRowPrepared = new EventEmitter();
        this.onRowRemoved = new EventEmitter();
        this.onRowRemoving = new EventEmitter();
        this.onRowUpdated = new EventEmitter();
        this.onRowUpdating = new EventEmitter();
        this.onRowValidating = new EventEmitter();
        this.onSelectionChanged = new EventEmitter();
        this.onToolbarPreparing = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.accessKeyChange = new EventEmitter();
        this.activeStateEnabledChange = new EventEmitter();
        this.disabledChange = new EventEmitter();
        this.focusStateEnabledChange = new EventEmitter();
        this.hintChange = new EventEmitter();
        this.hoverStateEnabledChange = new EventEmitter();
        this.tabIndexChange = new EventEmitter();
        this.visibleChange = new EventEmitter();
        this.allowColumnReorderingChange = new EventEmitter();
        this.allowColumnResizingChange = new EventEmitter();
        this.cacheEnabledChange = new EventEmitter();
        this.cellHintEnabledChange = new EventEmitter();
        this.columnAutoWidthChange = new EventEmitter();
        this.columnChooserChange = new EventEmitter();
        this.columnFixingChange = new EventEmitter();
        this.columnHidingEnabledChange = new EventEmitter();
        this.columnsChange = new EventEmitter();
        this.customizeColumnsChange = new EventEmitter();
        this.customizeExportDataChange = new EventEmitter();
        this.dataSourceChange = new EventEmitter();
        this.editingChange = new EventEmitter();
        this.errorRowEnabledChange = new EventEmitter();
        this.exportChange = new EventEmitter();
        this.filterRowChange = new EventEmitter();
        this.groupingChange = new EventEmitter();
        this.groupPanelChange = new EventEmitter();
        this.headerFilterChange = new EventEmitter();
        this.loadPanelChange = new EventEmitter();
        this.masterDetailChange = new EventEmitter();
        this.noDataTextChange = new EventEmitter();
        this.pagerChange = new EventEmitter();
        this.pagingChange = new EventEmitter();
        this.remoteOperationsChange = new EventEmitter();
        this.rowAlternationEnabledChange = new EventEmitter();
        this.rowTemplateChange = new EventEmitter();
        this.scrollingChange = new EventEmitter();
        this.searchPanelChange = new EventEmitter();
        this.selectedRowKeysChange = new EventEmitter();
        this.selectionChange = new EventEmitter();
        this.showBordersChange = new EventEmitter();
        this.showColumnHeadersChange = new EventEmitter();
        this.showColumnLinesChange = new EventEmitter();
        this.showRowLinesChange = new EventEmitter();
        this.sortByGroupSummaryInfoChange = new EventEmitter();
        this.sortingChange = new EventEmitter();
        this.stateStoringChange = new EventEmitter();
        this.summaryChange = new EventEmitter();
        this.twoWayBindingEnabledChange = new EventEmitter();
        this.wordWrapEnabledChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxDataGrid(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('columns', changes);
        this._idh.setup('dataSource', changes);
        this._idh.setup('selectedRowKeys', changes);
        this._idh.setup('sortByGroupSummaryInfo', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('columns');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('selectedRowKeys');
        this._idh.doCheck('sortByGroupSummaryInfo');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxDataGridComponent
  ],
  exports: [
    DxDataGridComponent
  ],
})
export class DxDataGridModule { }
