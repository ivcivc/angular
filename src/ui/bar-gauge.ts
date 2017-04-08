



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

import DxBarGauge from 'devextreme/viz/bar_gauge';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-bar-gauge',
    template: '',
    providers: providers
})
export class DxBarGaugeComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxBarGauge;


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
    get animation(): any {
        return this._getOption('animation');
    }

    set animation(value: any) {
        this._setOption('animation', value);
    }

    @Input()
    get backgroundColor(): any {
        return this._getOption('backgroundColor');
    }

    set backgroundColor(value: any) {
        this._setOption('backgroundColor', value);
    }

    @Input()
    get barSpacing(): any {
        return this._getOption('barSpacing');
    }

    set barSpacing(value: any) {
        this._setOption('barSpacing', value);
    }

    @Input()
    get baseValue(): any {
        return this._getOption('baseValue');
    }

    set baseValue(value: any) {
        this._setOption('baseValue', value);
    }

    @Input()
    get endValue(): any {
        return this._getOption('endValue');
    }

    set endValue(value: any) {
        this._setOption('endValue', value);
    }

    @Input()
    get geometry(): any {
        return this._getOption('geometry');
    }

    set geometry(value: any) {
        this._setOption('geometry', value);
    }

    @Input()
    get label(): any {
        return this._getOption('label');
    }

    set label(value: any) {
        this._setOption('label', value);
    }

    @Input()
    get palette(): any {
        return this._getOption('palette');
    }

    set palette(value: any) {
        this._setOption('palette', value);
    }

    @Input()
    get relativeInnerRadius(): any {
        return this._getOption('relativeInnerRadius');
    }

    set relativeInnerRadius(value: any) {
        this._setOption('relativeInnerRadius', value);
    }

    @Input()
    get startValue(): any {
        return this._getOption('startValue');
    }

    set startValue(value: any) {
        this._setOption('startValue', value);
    }

    @Input()
    get subtitle(): any {
        return this._getOption('subtitle');
    }

    set subtitle(value: any) {
        this._setOption('subtitle', value);
    }

    @Input()
    get values(): any {
        return this._getOption('values');
    }

    set values(value: any) {
        this._setOption('values', value);
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
    @Output() exportChange: EventEmitter<any>;
    @Output() loadingIndicatorChange: EventEmitter<any>;
    @Output() marginChange: EventEmitter<any>;
    @Output() pathModifiedChange: EventEmitter<any>;
    @Output() redrawOnResizeChange: EventEmitter<any>;
    @Output() sizeChange: EventEmitter<any>;
    @Output() themeChange: EventEmitter<any>;
    @Output() titleChange: EventEmitter<any>;
    @Output() tooltipChange: EventEmitter<any>;
    @Output() animationChange: EventEmitter<any>;
    @Output() backgroundColorChange: EventEmitter<any>;
    @Output() barSpacingChange: EventEmitter<any>;
    @Output() baseValueChange: EventEmitter<any>;
    @Output() endValueChange: EventEmitter<any>;
    @Output() geometryChange: EventEmitter<any>;
    @Output() labelChange: EventEmitter<any>;
    @Output() paletteChange: EventEmitter<any>;
    @Output() relativeInnerRadiusChange: EventEmitter<any>;
    @Output() startValueChange: EventEmitter<any>;
    @Output() subtitleChange: EventEmitter<any>;
    @Output() valuesChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxBarGauge';
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
            { emit: 'exportChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'animationChange' },
            { emit: 'backgroundColorChange' },
            { emit: 'barSpacingChange' },
            { emit: 'baseValueChange' },
            { emit: 'endValueChange' },
            { emit: 'geometryChange' },
            { emit: 'labelChange' },
            { emit: 'paletteChange' },
            { emit: 'relativeInnerRadiusChange' },
            { emit: 'startValueChange' },
            { emit: 'subtitleChange' },
            { emit: 'valuesChange' }
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
            'this.animation',
            'this.backgroundColor',
            'this.barSpacing',
            'this.baseValue',
            'this.endValue',
            'this.geometry',
            'this.label',
            'this.palette',
            'this.relativeInnerRadius',
            'this.startValue',
            'this.subtitle',
            'this.values'
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
        this.exportChange = new EventEmitter();
        this.loadingIndicatorChange = new EventEmitter();
        this.marginChange = new EventEmitter();
        this.pathModifiedChange = new EventEmitter();
        this.redrawOnResizeChange = new EventEmitter();
        this.sizeChange = new EventEmitter();
        this.themeChange = new EventEmitter();
        this.titleChange = new EventEmitter();
        this.tooltipChange = new EventEmitter();
        this.animationChange = new EventEmitter();
        this.backgroundColorChange = new EventEmitter();
        this.barSpacingChange = new EventEmitter();
        this.baseValueChange = new EventEmitter();
        this.endValueChange = new EventEmitter();
        this.geometryChange = new EventEmitter();
        this.labelChange = new EventEmitter();
        this.paletteChange = new EventEmitter();
        this.relativeInnerRadiusChange = new EventEmitter();
        this.startValueChange = new EventEmitter();
        this.subtitleChange = new EventEmitter();
        this.valuesChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxBarGauge(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('palette', changes);
        this._idh.setup('values', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('palette');
        this._idh.doCheck('values');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxBarGaugeComponent
  ],
  exports: [
    DxBarGaugeComponent
  ],
})
export class DxBarGaugeModule { }
