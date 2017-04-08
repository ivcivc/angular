



import {
    Component,
    NgModule,
    ElementRef,
    EventEmitter,
    NgZone,
    Input,
    Output
} from '@angular/core';

import DxPivotGrid from 'devextreme/ui/pivot_grid';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';


let providers = [];
providers.push(DxTemplateHost, WatcherHelper);


@Component({
    selector: 'dx-pivot-grid',
    template: '',
    providers: providers
})
export class DxPivotGridComponent extends DxComponent {
    instance: DxPivotGrid;


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
    get allowExpandAll(): any {
        return this._getOption('allowExpandAll');
    }

    set allowExpandAll(value: any) {
        this._setOption('allowExpandAll', value);
    }

    @Input()
    get allowFiltering(): any {
        return this._getOption('allowFiltering');
    }

    set allowFiltering(value: any) {
        this._setOption('allowFiltering', value);
    }

    @Input()
    get allowSorting(): any {
        return this._getOption('allowSorting');
    }

    set allowSorting(value: any) {
        this._setOption('allowSorting', value);
    }

    @Input()
    get allowSortingBySummary(): any {
        return this._getOption('allowSortingBySummary');
    }

    set allowSortingBySummary(value: any) {
        this._setOption('allowSortingBySummary', value);
    }

    @Input()
    get dataFieldArea(): any {
        return this._getOption('dataFieldArea');
    }

    set dataFieldArea(value: any) {
        this._setOption('dataFieldArea', value);
    }

    @Input()
    get dataSource(): any {
        return this._getOption('dataSource');
    }

    set dataSource(value: any) {
        this._setOption('dataSource', value);
    }

    @Input()
    get export(): any {
        return this._getOption('export');
    }

    set export(value: any) {
        this._setOption('export', value);
    }

    @Input()
    get fieldChooser(): any {
        return this._getOption('fieldChooser');
    }

    set fieldChooser(value: any) {
        this._setOption('fieldChooser', value);
    }

    @Input()
    get fieldPanel(): any {
        return this._getOption('fieldPanel');
    }

    set fieldPanel(value: any) {
        this._setOption('fieldPanel', value);
    }

    @Input()
    get hideEmptySummaryCells(): any {
        return this._getOption('hideEmptySummaryCells');
    }

    set hideEmptySummaryCells(value: any) {
        this._setOption('hideEmptySummaryCells', value);
    }

    @Input()
    get loadPanel(): any {
        return this._getOption('loadPanel');
    }

    set loadPanel(value: any) {
        this._setOption('loadPanel', value);
    }

    @Input()
    get rowHeaderLayout(): any {
        return this._getOption('rowHeaderLayout');
    }

    set rowHeaderLayout(value: any) {
        this._setOption('rowHeaderLayout', value);
    }

    @Input()
    get scrolling(): any {
        return this._getOption('scrolling');
    }

    set scrolling(value: any) {
        this._setOption('scrolling', value);
    }

    @Input()
    get showBorders(): any {
        return this._getOption('showBorders');
    }

    set showBorders(value: any) {
        this._setOption('showBorders', value);
    }

    @Input()
    get showColumnGrandTotals(): any {
        return this._getOption('showColumnGrandTotals');
    }

    set showColumnGrandTotals(value: any) {
        this._setOption('showColumnGrandTotals', value);
    }

    @Input()
    get showColumnTotals(): any {
        return this._getOption('showColumnTotals');
    }

    set showColumnTotals(value: any) {
        this._setOption('showColumnTotals', value);
    }

    @Input()
    get showRowGrandTotals(): any {
        return this._getOption('showRowGrandTotals');
    }

    set showRowGrandTotals(value: any) {
        this._setOption('showRowGrandTotals', value);
    }

    @Input()
    get showRowTotals(): any {
        return this._getOption('showRowTotals');
    }

    set showRowTotals(value: any) {
        this._setOption('showRowTotals', value);
    }

    @Input()
    get showTotalsPrior(): any {
        return this._getOption('showTotalsPrior');
    }

    set showTotalsPrior(value: any) {
        this._setOption('showTotalsPrior', value);
    }

    @Input()
    get stateStoring(): any {
        return this._getOption('stateStoring');
    }

    set stateStoring(value: any) {
        this._setOption('stateStoring', value);
    }

    @Input()
    get texts(): any {
        return this._getOption('texts');
    }

    set texts(value: any) {
        this._setOption('texts', value);
    }

    @Input()
    get useNativeScrolling(): any {
        return this._getOption('useNativeScrolling');
    }

    set useNativeScrolling(value: any) {
        this._setOption('useNativeScrolling', value);
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
    @Output() onCellClick: EventEmitter<any>;
    @Output() onCellPrepared: EventEmitter<any>;
    @Output() onContextMenuPreparing: EventEmitter<any>;
    @Output() onExported: EventEmitter<any>;
    @Output() onExporting: EventEmitter<any>;
    @Output() onFileSaving: EventEmitter<any>;
    @Output() heightChange: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() widthChange: EventEmitter<any>;
    @Output() disabledChange: EventEmitter<any>;
    @Output() focusStateEnabledChange: EventEmitter<any>;
    @Output() hintChange: EventEmitter<any>;
    @Output() tabIndexChange: EventEmitter<any>;
    @Output() visibleChange: EventEmitter<any>;
    @Output() allowExpandAllChange: EventEmitter<any>;
    @Output() allowFilteringChange: EventEmitter<any>;
    @Output() allowSortingChange: EventEmitter<any>;
    @Output() allowSortingBySummaryChange: EventEmitter<any>;
    @Output() dataFieldAreaChange: EventEmitter<any>;
    @Output() dataSourceChange: EventEmitter<any>;
    @Output() exportChange: EventEmitter<any>;
    @Output() fieldChooserChange: EventEmitter<any>;
    @Output() fieldPanelChange: EventEmitter<any>;
    @Output() hideEmptySummaryCellsChange: EventEmitter<any>;
    @Output() loadPanelChange: EventEmitter<any>;
    @Output() rowHeaderLayoutChange: EventEmitter<any>;
    @Output() scrollingChange: EventEmitter<any>;
    @Output() showBordersChange: EventEmitter<any>;
    @Output() showColumnGrandTotalsChange: EventEmitter<any>;
    @Output() showColumnTotalsChange: EventEmitter<any>;
    @Output() showRowGrandTotalsChange: EventEmitter<any>;
    @Output() showRowTotalsChange: EventEmitter<any>;
    @Output() showTotalsPriorChange: EventEmitter<any>;
    @Output() stateStoringChange: EventEmitter<any>;
    @Output() textsChange: EventEmitter<any>;
    @Output() useNativeScrollingChange: EventEmitter<any>;
    @Output() wordWrapEnabledChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
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

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onContentReady = new EventEmitter();
        this.onCellClick = new EventEmitter();
        this.onCellPrepared = new EventEmitter();
        this.onContextMenuPreparing = new EventEmitter();
        this.onExported = new EventEmitter();
        this.onExporting = new EventEmitter();
        this.onFileSaving = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.disabledChange = new EventEmitter();
        this.focusStateEnabledChange = new EventEmitter();
        this.hintChange = new EventEmitter();
        this.tabIndexChange = new EventEmitter();
        this.visibleChange = new EventEmitter();
        this.allowExpandAllChange = new EventEmitter();
        this.allowFilteringChange = new EventEmitter();
        this.allowSortingChange = new EventEmitter();
        this.allowSortingBySummaryChange = new EventEmitter();
        this.dataFieldAreaChange = new EventEmitter();
        this.dataSourceChange = new EventEmitter();
        this.exportChange = new EventEmitter();
        this.fieldChooserChange = new EventEmitter();
        this.fieldPanelChange = new EventEmitter();
        this.hideEmptySummaryCellsChange = new EventEmitter();
        this.loadPanelChange = new EventEmitter();
        this.rowHeaderLayoutChange = new EventEmitter();
        this.scrollingChange = new EventEmitter();
        this.showBordersChange = new EventEmitter();
        this.showColumnGrandTotalsChange = new EventEmitter();
        this.showColumnTotalsChange = new EventEmitter();
        this.showRowGrandTotalsChange = new EventEmitter();
        this.showRowTotalsChange = new EventEmitter();
        this.showTotalsPriorChange = new EventEmitter();
        this.stateStoringChange = new EventEmitter();
        this.textsChange = new EventEmitter();
        this.useNativeScrollingChange = new EventEmitter();
        this.wordWrapEnabledChange = new EventEmitter();
    }

    protected _createInstance(element, options) {
        return new DxPivotGrid(element, options);
    }

}



@NgModule({
  declarations: [
    DxPivotGridComponent
  ],
  exports: [
    DxPivotGridComponent
  ],
})
export class DxPivotGridModule { }
