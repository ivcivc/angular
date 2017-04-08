import { ElementRef, EventEmitter, NgZone, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxSparkline from 'devextreme/viz/sparkline';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxSparklineComponent extends DxComponent implements OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxSparkline;
    rtlEnabled: any;
    margin: any;
    pathModified: any;
    size: any;
    theme: any;
    tooltip: any;
    argumentField: any;
    barNegativeColor: any;
    barPositiveColor: any;
    dataSource: any;
    firstLastColor: any;
    ignoreEmptyPoints: any;
    lineColor: any;
    lineWidth: any;
    lossColor: any;
    maxColor: any;
    maxValue: any;
    minColor: any;
    minValue: any;
    pointColor: any;
    pointSize: any;
    pointSymbol: any;
    showFirstLast: any;
    showMinMax: any;
    type: any;
    valueField: any;
    winColor: any;
    winlossThreshold: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    onDrawn: EventEmitter<any>;
    onExported: EventEmitter<any>;
    onExporting: EventEmitter<any>;
    onFileSaving: EventEmitter<any>;
    onIncidentOccurred: EventEmitter<any>;
    onTooltipHidden: EventEmitter<any>;
    onTooltipShown: EventEmitter<any>;
    rtlEnabledChange: EventEmitter<any>;
    marginChange: EventEmitter<any>;
    pathModifiedChange: EventEmitter<any>;
    sizeChange: EventEmitter<any>;
    themeChange: EventEmitter<any>;
    tooltipChange: EventEmitter<any>;
    argumentFieldChange: EventEmitter<any>;
    barNegativeColorChange: EventEmitter<any>;
    barPositiveColorChange: EventEmitter<any>;
    dataSourceChange: EventEmitter<any>;
    firstLastColorChange: EventEmitter<any>;
    ignoreEmptyPointsChange: EventEmitter<any>;
    lineColorChange: EventEmitter<any>;
    lineWidthChange: EventEmitter<any>;
    lossColorChange: EventEmitter<any>;
    maxColorChange: EventEmitter<any>;
    maxValueChange: EventEmitter<any>;
    minColorChange: EventEmitter<any>;
    minValueChange: EventEmitter<any>;
    pointColorChange: EventEmitter<any>;
    pointSizeChange: EventEmitter<any>;
    pointSymbolChange: EventEmitter<any>;
    showFirstLastChange: EventEmitter<any>;
    showMinMaxChange: EventEmitter<any>;
    typeChange: EventEmitter<any>;
    valueFieldChange: EventEmitter<any>;
    winColorChange: EventEmitter<any>;
    winlossThresholdChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper);
    protected _createInstance(element: any, options: any): DxSparkline;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
}
export declare class DxSparklineModule {
}