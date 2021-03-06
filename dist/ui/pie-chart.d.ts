import { ElementRef, EventEmitter, NgZone, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxPieChart from 'devextreme/viz/pie_chart';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxPieChartComponent extends DxComponent implements OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxPieChart;
    rtlEnabled: any;
    export: any;
    loadingIndicator: any;
    margin: any;
    pathModified: any;
    redrawOnResize: any;
    size: any;
    theme: any;
    title: any;
    tooltip: any;
    adaptiveLayout: any;
    animation: any;
    customizeLabel: any;
    customizePoint: any;
    dataSource: any;
    legend: any;
    palette: any;
    pointSelectionMode: any;
    commonSeriesSettings: any;
    diameter: any;
    innerRadius: any;
    resolveLabelOverlapping: any;
    segmentsDirection: any;
    series: any;
    startAngle: any;
    type: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    onDrawn: EventEmitter<any>;
    onExported: EventEmitter<any>;
    onExporting: EventEmitter<any>;
    onFileSaving: EventEmitter<any>;
    onIncidentOccurred: EventEmitter<any>;
    onDone: EventEmitter<any>;
    onPointClick: EventEmitter<any>;
    onPointHoverChanged: EventEmitter<any>;
    onPointSelectionChanged: EventEmitter<any>;
    onTooltipHidden: EventEmitter<any>;
    onTooltipShown: EventEmitter<any>;
    onLegendClick: EventEmitter<any>;
    rtlEnabledChange: EventEmitter<any>;
    exportChange: EventEmitter<any>;
    loadingIndicatorChange: EventEmitter<any>;
    marginChange: EventEmitter<any>;
    pathModifiedChange: EventEmitter<any>;
    redrawOnResizeChange: EventEmitter<any>;
    sizeChange: EventEmitter<any>;
    themeChange: EventEmitter<any>;
    titleChange: EventEmitter<any>;
    tooltipChange: EventEmitter<any>;
    adaptiveLayoutChange: EventEmitter<any>;
    animationChange: EventEmitter<any>;
    customizeLabelChange: EventEmitter<any>;
    customizePointChange: EventEmitter<any>;
    dataSourceChange: EventEmitter<any>;
    legendChange: EventEmitter<any>;
    paletteChange: EventEmitter<any>;
    pointSelectionModeChange: EventEmitter<any>;
    commonSeriesSettingsChange: EventEmitter<any>;
    diameterChange: EventEmitter<any>;
    innerRadiusChange: EventEmitter<any>;
    resolveLabelOverlappingChange: EventEmitter<any>;
    segmentsDirectionChange: EventEmitter<any>;
    seriesChange: EventEmitter<any>;
    startAngleChange: EventEmitter<any>;
    typeChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper);
    protected _createInstance(element: any, options: any): DxPieChart;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
}
export declare class DxPieChartModule {
}
