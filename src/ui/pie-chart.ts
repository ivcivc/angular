



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

import DxPieChart from 'devextreme/viz/pie_chart';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-pie-chart',
    template: '',
    providers: providers
})
export class DxPieChartComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxPieChart;


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
    get commonSeriesSettings(): any {
        return this._getOption('commonSeriesSettings');
    }

    set commonSeriesSettings(value: any) {
        this._setOption('commonSeriesSettings', value);
    }

    @Input()
    get diameter(): any {
        return this._getOption('diameter');
    }

    set diameter(value: any) {
        this._setOption('diameter', value);
    }

    @Input()
    get innerRadius(): any {
        return this._getOption('innerRadius');
    }

    set innerRadius(value: any) {
        this._setOption('innerRadius', value);
    }

    @Input()
    get resolveLabelOverlapping(): any {
        return this._getOption('resolveLabelOverlapping');
    }

    set resolveLabelOverlapping(value: any) {
        this._setOption('resolveLabelOverlapping', value);
    }

    @Input()
    get segmentsDirection(): any {
        return this._getOption('segmentsDirection');
    }

    set segmentsDirection(value: any) {
        this._setOption('segmentsDirection', value);
    }

    @Input()
    get series(): any {
        return this._getOption('series');
    }

    set series(value: any) {
        this._setOption('series', value);
    }

    @Input()
    get startAngle(): any {
        return this._getOption('startAngle');
    }

    set startAngle(value: any) {
        this._setOption('startAngle', value);
    }

    @Input()
    get type(): any {
        return this._getOption('type');
    }

    set type(value: any) {
        this._setOption('type', value);
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
    @Output() onLegendClick: EventEmitter<any>;
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
    @Output() commonSeriesSettingsChange: EventEmitter<any>;
    @Output() diameterChange: EventEmitter<any>;
    @Output() innerRadiusChange: EventEmitter<any>;
    @Output() resolveLabelOverlappingChange: EventEmitter<any>;
    @Output() segmentsDirectionChange: EventEmitter<any>;
    @Output() seriesChange: EventEmitter<any>;
    @Output() startAngleChange: EventEmitter<any>;
    @Output() typeChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxPieChart';
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
            { subscribe: 'legendClick', emit: 'onLegendClick' },
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
            { emit: 'commonSeriesSettingsChange' },
            { emit: 'diameterChange' },
            { emit: 'innerRadiusChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'segmentsDirectionChange' },
            { emit: 'seriesChange' },
            { emit: 'startAngleChange' },
            { emit: 'typeChange' }
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
            'this.commonSeriesSettings',
            'this.diameter',
            'this.innerRadius',
            'this.resolveLabelOverlapping',
            'this.segmentsDirection',
            'this.series',
            'this.startAngle',
            'this.type'
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
        this.onLegendClick = new EventEmitter();
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
        this.commonSeriesSettingsChange = new EventEmitter();
        this.diameterChange = new EventEmitter();
        this.innerRadiusChange = new EventEmitter();
        this.resolveLabelOverlappingChange = new EventEmitter();
        this.segmentsDirectionChange = new EventEmitter();
        this.seriesChange = new EventEmitter();
        this.startAngleChange = new EventEmitter();
        this.typeChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxPieChart(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('palette', changes);
        this._idh.setup('series', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('series');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxPieChartComponent
  ],
  exports: [
    DxPieChartComponent
  ],
})
export class DxPieChartModule { }
