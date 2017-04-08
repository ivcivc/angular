



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

import DxChart from 'devextreme/viz/chart';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-chart',
    template: '',
    providers: providers
})
export class DxChartComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxChart;


    @Input()
    get rtlEnabled(): any {
        return this._getOption('rtlEnabled');
    }

    set rtlEnabled(value: any) {
        this._setOption('rtlEnabled', value);
    }

    @Input()
    get export(): any {
        return this._getOption('export');
    }

    set export(value: any) {
        this._setOption('export', value);
    }

    @Input()
    get loadingIndicator(): any {
        return this._getOption('loadingIndicator');
    }

    set loadingIndicator(value: any) {
        this._setOption('loadingIndicator', value);
    }

    @Input()
    get margin(): any {
        return this._getOption('margin');
    }

    set margin(value: any) {
        this._setOption('margin', value);
    }

    @Input()
    get pathModified(): any {
        return this._getOption('pathModified');
    }

    set pathModified(value: any) {
        this._setOption('pathModified', value);
    }

    @Input()
    get redrawOnResize(): any {
        return this._getOption('redrawOnResize');
    }

    set redrawOnResize(value: any) {
        this._setOption('redrawOnResize', value);
    }

    @Input()
    get size(): any {
        return this._getOption('size');
    }

    set size(value: any) {
        this._setOption('size', value);
    }

    @Input()
    get theme(): any {
        return this._getOption('theme');
    }

    set theme(value: any) {
        this._setOption('theme', value);
    }

    @Input()
    get title(): any {
        return this._getOption('title');
    }

    set title(value: any) {
        this._setOption('title', value);
    }

    @Input()
    get tooltip(): any {
        return this._getOption('tooltip');
    }

    set tooltip(value: any) {
        this._setOption('tooltip', value);
    }

    @Input()
    get adaptiveLayout(): any {
        return this._getOption('adaptiveLayout');
    }

    set adaptiveLayout(value: any) {
        this._setOption('adaptiveLayout', value);
    }

    @Input()
    get animation(): any {
        return this._getOption('animation');
    }

    set animation(value: any) {
        this._setOption('animation', value);
    }

    @Input()
    get customizeLabel(): any {
        return this._getOption('customizeLabel');
    }

    set customizeLabel(value: any) {
        this._setOption('customizeLabel', value);
    }

    @Input()
    get customizePoint(): any {
        return this._getOption('customizePoint');
    }

    set customizePoint(value: any) {
        this._setOption('customizePoint', value);
    }

    @Input()
    get dataSource(): any {
        return this._getOption('dataSource');
    }

    set dataSource(value: any) {
        this._setOption('dataSource', value);
    }

    @Input()
    get legend(): any {
        return this._getOption('legend');
    }

    set legend(value: any) {
        this._setOption('legend', value);
    }

    @Input()
    get palette(): any {
        return this._getOption('palette');
    }

    set palette(value: any) {
        this._setOption('palette', value);
    }

    @Input()
    get pointSelectionMode(): any {
        return this._getOption('pointSelectionMode');
    }

    set pointSelectionMode(value: any) {
        this._setOption('pointSelectionMode', value);
    }

    @Input()
    get adjustOnZoom(): any {
        return this._getOption('adjustOnZoom');
    }

    set adjustOnZoom(value: any) {
        this._setOption('adjustOnZoom', value);
    }

    @Input()
    get argumentAxis(): any {
        return this._getOption('argumentAxis');
    }

    set argumentAxis(value: any) {
        this._setOption('argumentAxis', value);
    }

    @Input()
    get barWidth(): any {
        return this._getOption('barWidth');
    }

    set barWidth(value: any) {
        this._setOption('barWidth', value);
    }

    @Input()
    get commonAxisSettings(): any {
        return this._getOption('commonAxisSettings');
    }

    set commonAxisSettings(value: any) {
        this._setOption('commonAxisSettings', value);
    }

    @Input()
    get commonPaneSettings(): any {
        return this._getOption('commonPaneSettings');
    }

    set commonPaneSettings(value: any) {
        this._setOption('commonPaneSettings', value);
    }

    @Input()
    get commonSeriesSettings(): any {
        return this._getOption('commonSeriesSettings');
    }

    set commonSeriesSettings(value: any) {
        this._setOption('commonSeriesSettings', value);
    }

    @Input()
    get containerBackgroundColor(): any {
        return this._getOption('containerBackgroundColor');
    }

    set containerBackgroundColor(value: any) {
        this._setOption('containerBackgroundColor', value);
    }

    @Input()
    get crosshair(): any {
        return this._getOption('crosshair');
    }

    set crosshair(value: any) {
        this._setOption('crosshair', value);
    }

    @Input()
    get dataPrepareSettings(): any {
        return this._getOption('dataPrepareSettings');
    }

    set dataPrepareSettings(value: any) {
        this._setOption('dataPrepareSettings', value);
    }

    @Input()
    get defaultPane(): any {
        return this._getOption('defaultPane');
    }

    set defaultPane(value: any) {
        this._setOption('defaultPane', value);
    }

    @Input()
    get equalBarWidth(): any {
        return this._getOption('equalBarWidth');
    }

    set equalBarWidth(value: any) {
        this._setOption('equalBarWidth', value);
    }

    @Input()
    get maxBubbleSize(): any {
        return this._getOption('maxBubbleSize');
    }

    set maxBubbleSize(value: any) {
        this._setOption('maxBubbleSize', value);
    }

    @Input()
    get minBubbleSize(): any {
        return this._getOption('minBubbleSize');
    }

    set minBubbleSize(value: any) {
        this._setOption('minBubbleSize', value);
    }

    @Input()
    get negativesAsZeroes(): any {
        return this._getOption('negativesAsZeroes');
    }

    set negativesAsZeroes(value: any) {
        this._setOption('negativesAsZeroes', value);
    }

    @Input()
    get panes(): any {
        return this._getOption('panes');
    }

    set panes(value: any) {
        this._setOption('panes', value);
    }

    @Input()
    get resolveLabelOverlapping(): any {
        return this._getOption('resolveLabelOverlapping');
    }

    set resolveLabelOverlapping(value: any) {
        this._setOption('resolveLabelOverlapping', value);
    }

    @Input()
    get rotated(): any {
        return this._getOption('rotated');
    }

    set rotated(value: any) {
        this._setOption('rotated', value);
    }

    @Input()
    get scrollBar(): any {
        return this._getOption('scrollBar');
    }

    set scrollBar(value: any) {
        this._setOption('scrollBar', value);
    }

    @Input()
    get scrollingMode(): any {
        return this._getOption('scrollingMode');
    }

    set scrollingMode(value: any) {
        this._setOption('scrollingMode', value);
    }

    @Input()
    get series(): any {
        return this._getOption('series');
    }

    set series(value: any) {
        this._setOption('series', value);
    }

    @Input()
    get seriesSelectionMode(): any {
        return this._getOption('seriesSelectionMode');
    }

    set seriesSelectionMode(value: any) {
        this._setOption('seriesSelectionMode', value);
    }

    @Input()
    get seriesTemplate(): any {
        return this._getOption('seriesTemplate');
    }

    set seriesTemplate(value: any) {
        this._setOption('seriesTemplate', value);
    }

    @Input()
    get synchronizeMultiAxes(): any {
        return this._getOption('synchronizeMultiAxes');
    }

    set synchronizeMultiAxes(value: any) {
        this._setOption('synchronizeMultiAxes', value);
    }

    @Input()
    get useAggregation(): any {
        return this._getOption('useAggregation');
    }

    set useAggregation(value: any) {
        this._setOption('useAggregation', value);
    }

    @Input()
    get valueAxis(): any {
        return this._getOption('valueAxis');
    }

    set valueAxis(value: any) {
        this._setOption('valueAxis', value);
    }

    @Input()
    get zoomingMode(): any {
        return this._getOption('zoomingMode');
    }

    set zoomingMode(value: any) {
        this._setOption('zoomingMode', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onDrawn: EventEmitter<any>;
    @Output() onExported: EventEmitter<any>;
    @Output() onExporting: EventEmitter<any>;
    @Output() onFileSaving: EventEmitter<any>;
    @Output() onIncidentOccurred: EventEmitter<any>;
    @Output() onDone: EventEmitter<any>;
    @Output() onPointClick: EventEmitter<any>;
    @Output() onPointHoverChanged: EventEmitter<any>;
    @Output() onPointSelectionChanged: EventEmitter<any>;
    @Output() onTooltipHidden: EventEmitter<any>;
    @Output() onTooltipShown: EventEmitter<any>;
    @Output() onArgumentAxisClick: EventEmitter<any>;
    @Output() onLegendClick: EventEmitter<any>;
    @Output() onSeriesClick: EventEmitter<any>;
    @Output() onSeriesHoverChanged: EventEmitter<any>;
    @Output() onSeriesSelectionChanged: EventEmitter<any>;
    @Output() onZoomEnd: EventEmitter<any>;
    @Output() onZoomStart: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() exportChange: EventEmitter<any>;
    @Output() loadingIndicatorChange: EventEmitter<any>;
    @Output() marginChange: EventEmitter<any>;
    @Output() pathModifiedChange: EventEmitter<any>;
    @Output() redrawOnResizeChange: EventEmitter<any>;
    @Output() sizeChange: EventEmitter<any>;
    @Output() themeChange: EventEmitter<any>;
    @Output() titleChange: EventEmitter<any>;
    @Output() tooltipChange: EventEmitter<any>;
    @Output() adaptiveLayoutChange: EventEmitter<any>;
    @Output() animationChange: EventEmitter<any>;
    @Output() customizeLabelChange: EventEmitter<any>;
    @Output() customizePointChange: EventEmitter<any>;
    @Output() dataSourceChange: EventEmitter<any>;
    @Output() legendChange: EventEmitter<any>;
    @Output() paletteChange: EventEmitter<any>;
    @Output() pointSelectionModeChange: EventEmitter<any>;
    @Output() adjustOnZoomChange: EventEmitter<any>;
    @Output() argumentAxisChange: EventEmitter<any>;
    @Output() barWidthChange: EventEmitter<any>;
    @Output() commonAxisSettingsChange: EventEmitter<any>;
    @Output() commonPaneSettingsChange: EventEmitter<any>;
    @Output() commonSeriesSettingsChange: EventEmitter<any>;
    @Output() containerBackgroundColorChange: EventEmitter<any>;
    @Output() crosshairChange: EventEmitter<any>;
    @Output() dataPrepareSettingsChange: EventEmitter<any>;
    @Output() defaultPaneChange: EventEmitter<any>;
    @Output() equalBarWidthChange: EventEmitter<any>;
    @Output() maxBubbleSizeChange: EventEmitter<any>;
    @Output() minBubbleSizeChange: EventEmitter<any>;
    @Output() negativesAsZeroesChange: EventEmitter<any>;
    @Output() panesChange: EventEmitter<any>;
    @Output() resolveLabelOverlappingChange: EventEmitter<any>;
    @Output() rotatedChange: EventEmitter<any>;
    @Output() scrollBarChange: EventEmitter<any>;
    @Output() scrollingModeChange: EventEmitter<any>;
    @Output() seriesChange: EventEmitter<any>;
    @Output() seriesSelectionModeChange: EventEmitter<any>;
    @Output() seriesTemplateChange: EventEmitter<any>;
    @Output() synchronizeMultiAxesChange: EventEmitter<any>;
    @Output() useAggregationChange: EventEmitter<any>;
    @Output() valueAxisChange: EventEmitter<any>;
    @Output() zoomingModeChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxChart';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'done', emit: 'onDone' },
            { subscribe: 'pointClick', emit: 'onPointClick' },
            { subscribe: 'pointHoverChanged', emit: 'onPointHoverChanged' },
            { subscribe: 'pointSelectionChanged', emit: 'onPointSelectionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { subscribe: 'argumentAxisClick', emit: 'onArgumentAxisClick' },
            { subscribe: 'legendClick', emit: 'onLegendClick' },
            { subscribe: 'seriesClick', emit: 'onSeriesClick' },
            { subscribe: 'seriesHoverChanged', emit: 'onSeriesHoverChanged' },
            { subscribe: 'seriesSelectionChanged', emit: 'onSeriesSelectionChanged' },
            { subscribe: 'zoomEnd', emit: 'onZoomEnd' },
            { subscribe: 'zoomStart', emit: 'onZoomStart' },
            { emit: 'rtlEnabledChange' },
            { emit: 'exportChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'adaptiveLayoutChange' },
            { emit: 'animationChange' },
            { emit: 'customizeLabelChange' },
            { emit: 'customizePointChange' },
            { emit: 'dataSourceChange' },
            { emit: 'legendChange' },
            { emit: 'paletteChange' },
            { emit: 'pointSelectionModeChange' },
            { emit: 'adjustOnZoomChange' },
            { emit: 'argumentAxisChange' },
            { emit: 'barWidthChange' },
            { emit: 'commonAxisSettingsChange' },
            { emit: 'commonPaneSettingsChange' },
            { emit: 'commonSeriesSettingsChange' },
            { emit: 'containerBackgroundColorChange' },
            { emit: 'crosshairChange' },
            { emit: 'dataPrepareSettingsChange' },
            { emit: 'defaultPaneChange' },
            { emit: 'equalBarWidthChange' },
            { emit: 'maxBubbleSizeChange' },
            { emit: 'minBubbleSizeChange' },
            { emit: 'negativesAsZeroesChange' },
            { emit: 'panesChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'rotatedChange' },
            { emit: 'scrollBarChange' },
            { emit: 'scrollingModeChange' },
            { emit: 'seriesChange' },
            { emit: 'seriesSelectionModeChange' },
            { emit: 'seriesTemplateChange' },
            { emit: 'synchronizeMultiAxesChange' },
            { emit: 'useAggregationChange' },
            { emit: 'valueAxisChange' },
            { emit: 'zoomingModeChange' }
        ];

        this._properties = [
            'this.rtlEnabled',
            'this.export',
            'this.loadingIndicator',
            'this.margin',
            'this.pathModified',
            'this.redrawOnResize',
            'this.size',
            'this.theme',
            'this.title',
            'this.tooltip',
            'this.adaptiveLayout',
            'this.animation',
            'this.customizeLabel',
            'this.customizePoint',
            'this.dataSource',
            'this.legend',
            'this.palette',
            'this.pointSelectionMode',
            'this.adjustOnZoom',
            'this.argumentAxis',
            'this.barWidth',
            'this.commonAxisSettings',
            'this.commonPaneSettings',
            'this.commonSeriesSettings',
            'this.containerBackgroundColor',
            'this.crosshair',
            'this.dataPrepareSettings',
            'this.defaultPane',
            'this.equalBarWidth',
            'this.maxBubbleSize',
            'this.minBubbleSize',
            'this.negativesAsZeroes',
            'this.panes',
            'this.resolveLabelOverlapping',
            'this.rotated',
            'this.scrollBar',
            'this.scrollingMode',
            'this.series',
            'this.seriesSelectionMode',
            'this.seriesTemplate',
            'this.synchronizeMultiAxes',
            'this.useAggregation',
            'this.valueAxis',
            'this.zoomingMode'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onDrawn = new EventEmitter();
        this.onExported = new EventEmitter();
        this.onExporting = new EventEmitter();
        this.onFileSaving = new EventEmitter();
        this.onIncidentOccurred = new EventEmitter();
        this.onDone = new EventEmitter();
        this.onPointClick = new EventEmitter();
        this.onPointHoverChanged = new EventEmitter();
        this.onPointSelectionChanged = new EventEmitter();
        this.onTooltipHidden = new EventEmitter();
        this.onTooltipShown = new EventEmitter();
        this.onArgumentAxisClick = new EventEmitter();
        this.onLegendClick = new EventEmitter();
        this.onSeriesClick = new EventEmitter();
        this.onSeriesHoverChanged = new EventEmitter();
        this.onSeriesSelectionChanged = new EventEmitter();
        this.onZoomEnd = new EventEmitter();
        this.onZoomStart = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.exportChange = new EventEmitter();
        this.loadingIndicatorChange = new EventEmitter();
        this.marginChange = new EventEmitter();
        this.pathModifiedChange = new EventEmitter();
        this.redrawOnResizeChange = new EventEmitter();
        this.sizeChange = new EventEmitter();
        this.themeChange = new EventEmitter();
        this.titleChange = new EventEmitter();
        this.tooltipChange = new EventEmitter();
        this.adaptiveLayoutChange = new EventEmitter();
        this.animationChange = new EventEmitter();
        this.customizeLabelChange = new EventEmitter();
        this.customizePointChange = new EventEmitter();
        this.dataSourceChange = new EventEmitter();
        this.legendChange = new EventEmitter();
        this.paletteChange = new EventEmitter();
        this.pointSelectionModeChange = new EventEmitter();
        this.adjustOnZoomChange = new EventEmitter();
        this.argumentAxisChange = new EventEmitter();
        this.barWidthChange = new EventEmitter();
        this.commonAxisSettingsChange = new EventEmitter();
        this.commonPaneSettingsChange = new EventEmitter();
        this.commonSeriesSettingsChange = new EventEmitter();
        this.containerBackgroundColorChange = new EventEmitter();
        this.crosshairChange = new EventEmitter();
        this.dataPrepareSettingsChange = new EventEmitter();
        this.defaultPaneChange = new EventEmitter();
        this.equalBarWidthChange = new EventEmitter();
        this.maxBubbleSizeChange = new EventEmitter();
        this.minBubbleSizeChange = new EventEmitter();
        this.negativesAsZeroesChange = new EventEmitter();
        this.panesChange = new EventEmitter();
        this.resolveLabelOverlappingChange = new EventEmitter();
        this.rotatedChange = new EventEmitter();
        this.scrollBarChange = new EventEmitter();
        this.scrollingModeChange = new EventEmitter();
        this.seriesChange = new EventEmitter();
        this.seriesSelectionModeChange = new EventEmitter();
        this.seriesTemplateChange = new EventEmitter();
        this.synchronizeMultiAxesChange = new EventEmitter();
        this.useAggregationChange = new EventEmitter();
        this.valueAxisChange = new EventEmitter();
        this.zoomingModeChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxChart(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('palette', changes);
        this._idh.setup('panes', changes);
        this._idh.setup('series', changes);
        this._idh.setup('valueAxis', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('panes');
        this._idh.doCheck('series');
        this._idh.doCheck('valueAxis');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxChartComponent
  ],
  exports: [
    DxChartComponent
  ],
})
export class DxChartModule { }
