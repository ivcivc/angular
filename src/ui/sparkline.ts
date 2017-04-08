



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

import DxSparkline from 'devextreme/viz/sparkline';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-sparkline',
    template: '',
    providers: providers
})
export class DxSparklineComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxSparkline;


    @Input()
    get rtlEnabled(): any {
        return this._getOption('rtlEnabled');
    }

    set rtlEnabled(value: any) {
        this._setOption('rtlEnabled', value);
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
    get tooltip(): any {
        return this._getOption('tooltip');
    }

    set tooltip(value: any) {
        this._setOption('tooltip', value);
    }

    @Input()
    get argumentField(): any {
        return this._getOption('argumentField');
    }

    set argumentField(value: any) {
        this._setOption('argumentField', value);
    }

    @Input()
    get barNegativeColor(): any {
        return this._getOption('barNegativeColor');
    }

    set barNegativeColor(value: any) {
        this._setOption('barNegativeColor', value);
    }

    @Input()
    get barPositiveColor(): any {
        return this._getOption('barPositiveColor');
    }

    set barPositiveColor(value: any) {
        this._setOption('barPositiveColor', value);
    }

    @Input()
    get dataSource(): any {
        return this._getOption('dataSource');
    }

    set dataSource(value: any) {
        this._setOption('dataSource', value);
    }

    @Input()
    get firstLastColor(): any {
        return this._getOption('firstLastColor');
    }

    set firstLastColor(value: any) {
        this._setOption('firstLastColor', value);
    }

    @Input()
    get ignoreEmptyPoints(): any {
        return this._getOption('ignoreEmptyPoints');
    }

    set ignoreEmptyPoints(value: any) {
        this._setOption('ignoreEmptyPoints', value);
    }

    @Input()
    get lineColor(): any {
        return this._getOption('lineColor');
    }

    set lineColor(value: any) {
        this._setOption('lineColor', value);
    }

    @Input()
    get lineWidth(): any {
        return this._getOption('lineWidth');
    }

    set lineWidth(value: any) {
        this._setOption('lineWidth', value);
    }

    @Input()
    get lossColor(): any {
        return this._getOption('lossColor');
    }

    set lossColor(value: any) {
        this._setOption('lossColor', value);
    }

    @Input()
    get maxColor(): any {
        return this._getOption('maxColor');
    }

    set maxColor(value: any) {
        this._setOption('maxColor', value);
    }

    @Input()
    get maxValue(): any {
        return this._getOption('maxValue');
    }

    set maxValue(value: any) {
        this._setOption('maxValue', value);
    }

    @Input()
    get minColor(): any {
        return this._getOption('minColor');
    }

    set minColor(value: any) {
        this._setOption('minColor', value);
    }

    @Input()
    get minValue(): any {
        return this._getOption('minValue');
    }

    set minValue(value: any) {
        this._setOption('minValue', value);
    }

    @Input()
    get pointColor(): any {
        return this._getOption('pointColor');
    }

    set pointColor(value: any) {
        this._setOption('pointColor', value);
    }

    @Input()
    get pointSize(): any {
        return this._getOption('pointSize');
    }

    set pointSize(value: any) {
        this._setOption('pointSize', value);
    }

    @Input()
    get pointSymbol(): any {
        return this._getOption('pointSymbol');
    }

    set pointSymbol(value: any) {
        this._setOption('pointSymbol', value);
    }

    @Input()
    get showFirstLast(): any {
        return this._getOption('showFirstLast');
    }

    set showFirstLast(value: any) {
        this._setOption('showFirstLast', value);
    }

    @Input()
    get showMinMax(): any {
        return this._getOption('showMinMax');
    }

    set showMinMax(value: any) {
        this._setOption('showMinMax', value);
    }

    @Input()
    get type(): any {
        return this._getOption('type');
    }

    set type(value: any) {
        this._setOption('type', value);
    }

    @Input()
    get valueField(): any {
        return this._getOption('valueField');
    }

    set valueField(value: any) {
        this._setOption('valueField', value);
    }

    @Input()
    get winColor(): any {
        return this._getOption('winColor');
    }

    set winColor(value: any) {
        this._setOption('winColor', value);
    }

    @Input()
    get winlossThreshold(): any {
        return this._getOption('winlossThreshold');
    }

    set winlossThreshold(value: any) {
        this._setOption('winlossThreshold', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onDrawn: EventEmitter<any>;
    @Output() onExported: EventEmitter<any>;
    @Output() onExporting: EventEmitter<any>;
    @Output() onFileSaving: EventEmitter<any>;
    @Output() onIncidentOccurred: EventEmitter<any>;
    @Output() onTooltipHidden: EventEmitter<any>;
    @Output() onTooltipShown: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() marginChange: EventEmitter<any>;
    @Output() pathModifiedChange: EventEmitter<any>;
    @Output() sizeChange: EventEmitter<any>;
    @Output() themeChange: EventEmitter<any>;
    @Output() tooltipChange: EventEmitter<any>;
    @Output() argumentFieldChange: EventEmitter<any>;
    @Output() barNegativeColorChange: EventEmitter<any>;
    @Output() barPositiveColorChange: EventEmitter<any>;
    @Output() dataSourceChange: EventEmitter<any>;
    @Output() firstLastColorChange: EventEmitter<any>;
    @Output() ignoreEmptyPointsChange: EventEmitter<any>;
    @Output() lineColorChange: EventEmitter<any>;
    @Output() lineWidthChange: EventEmitter<any>;
    @Output() lossColorChange: EventEmitter<any>;
    @Output() maxColorChange: EventEmitter<any>;
    @Output() maxValueChange: EventEmitter<any>;
    @Output() minColorChange: EventEmitter<any>;
    @Output() minValueChange: EventEmitter<any>;
    @Output() pointColorChange: EventEmitter<any>;
    @Output() pointSizeChange: EventEmitter<any>;
    @Output() pointSymbolChange: EventEmitter<any>;
    @Output() showFirstLastChange: EventEmitter<any>;
    @Output() showMinMaxChange: EventEmitter<any>;
    @Output() typeChange: EventEmitter<any>;
    @Output() valueFieldChange: EventEmitter<any>;
    @Output() winColorChange: EventEmitter<any>;
    @Output() winlossThresholdChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxSparkline';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { emit: 'rtlEnabledChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'tooltipChange' },
            { emit: 'argumentFieldChange' },
            { emit: 'barNegativeColorChange' },
            { emit: 'barPositiveColorChange' },
            { emit: 'dataSourceChange' },
            { emit: 'firstLastColorChange' },
            { emit: 'ignoreEmptyPointsChange' },
            { emit: 'lineColorChange' },
            { emit: 'lineWidthChange' },
            { emit: 'lossColorChange' },
            { emit: 'maxColorChange' },
            { emit: 'maxValueChange' },
            { emit: 'minColorChange' },
            { emit: 'minValueChange' },
            { emit: 'pointColorChange' },
            { emit: 'pointSizeChange' },
            { emit: 'pointSymbolChange' },
            { emit: 'showFirstLastChange' },
            { emit: 'showMinMaxChange' },
            { emit: 'typeChange' },
            { emit: 'valueFieldChange' },
            { emit: 'winColorChange' },
            { emit: 'winlossThresholdChange' }
        ];

        this._properties = [
            'this.rtlEnabled',
            'this.margin',
            'this.pathModified',
            'this.size',
            'this.theme',
            'this.tooltip',
            'this.argumentField',
            'this.barNegativeColor',
            'this.barPositiveColor',
            'this.dataSource',
            'this.firstLastColor',
            'this.ignoreEmptyPoints',
            'this.lineColor',
            'this.lineWidth',
            'this.lossColor',
            'this.maxColor',
            'this.maxValue',
            'this.minColor',
            'this.minValue',
            'this.pointColor',
            'this.pointSize',
            'this.pointSymbol',
            'this.showFirstLast',
            'this.showMinMax',
            'this.type',
            'this.valueField',
            'this.winColor',
            'this.winlossThreshold'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onDrawn = new EventEmitter();
        this.onExported = new EventEmitter();
        this.onExporting = new EventEmitter();
        this.onFileSaving = new EventEmitter();
        this.onIncidentOccurred = new EventEmitter();
        this.onTooltipHidden = new EventEmitter();
        this.onTooltipShown = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.marginChange = new EventEmitter();
        this.pathModifiedChange = new EventEmitter();
        this.sizeChange = new EventEmitter();
        this.themeChange = new EventEmitter();
        this.tooltipChange = new EventEmitter();
        this.argumentFieldChange = new EventEmitter();
        this.barNegativeColorChange = new EventEmitter();
        this.barPositiveColorChange = new EventEmitter();
        this.dataSourceChange = new EventEmitter();
        this.firstLastColorChange = new EventEmitter();
        this.ignoreEmptyPointsChange = new EventEmitter();
        this.lineColorChange = new EventEmitter();
        this.lineWidthChange = new EventEmitter();
        this.lossColorChange = new EventEmitter();
        this.maxColorChange = new EventEmitter();
        this.maxValueChange = new EventEmitter();
        this.minColorChange = new EventEmitter();
        this.minValueChange = new EventEmitter();
        this.pointColorChange = new EventEmitter();
        this.pointSizeChange = new EventEmitter();
        this.pointSymbolChange = new EventEmitter();
        this.showFirstLastChange = new EventEmitter();
        this.showMinMaxChange = new EventEmitter();
        this.typeChange = new EventEmitter();
        this.valueFieldChange = new EventEmitter();
        this.winColorChange = new EventEmitter();
        this.winlossThresholdChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxSparkline(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('dataSource', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxSparklineComponent
  ],
  exports: [
    DxSparklineComponent
  ],
})
export class DxSparklineModule { }
