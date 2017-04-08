
/* tslint:disable:directive-selector-name */
/* tslint:disable:directive-selector-type */




import {
    Component,
    NgModule,
    ElementRef,
    EventEmitter,
    NgZone,
    Input,
    Output,
    ContentChild,
    Directive,
    forwardRef,
    HostListener,
    OnChanges,
    DoCheck,
    SimpleChanges
} from '@angular/core';

import DxCircularGauge from 'devextreme/viz/circular_gauge';

import { DxValidatorComponent } from './validator';

import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR
} from '@angular/forms';

import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-circular-gauge',
    template: '',
    providers: providers
})
export class DxCircularGaugeComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxCircularGauge;


    @ContentChild(DxValidatorComponent)
    validator: DxValidatorComponent;
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
    get containerBackgroundColor(): any {
        return this._getOption('containerBackgroundColor');
    }

    set containerBackgroundColor(value: any) {
        this._setOption('containerBackgroundColor', value);
    }

    @Input()
    get rangeContainer(): any {
        return this._getOption('rangeContainer');
    }

    set rangeContainer(value: any) {
        this._setOption('rangeContainer', value);
    }

    @Input()
    get scale(): any {
        return this._getOption('scale');
    }

    set scale(value: any) {
        this._setOption('scale', value);
    }

    @Input()
    get subtitle(): any {
        return this._getOption('subtitle');
    }

    set subtitle(value: any) {
        this._setOption('subtitle', value);
    }

    @Input()
    get subvalues(): any {
        return this._getOption('subvalues');
    }

    set subvalues(value: any) {
        this._setOption('subvalues', value);
    }

    @Input()
    get value(): any {
        return this._getOption('value');
    }

    set value(value: any) {
        this._setOption('value', value);
    }

    @Input()
    get geometry(): any {
        return this._getOption('geometry');
    }

    set geometry(value: any) {
        this._setOption('geometry', value);
    }

    @Input()
    get subvalueIndicator(): any {
        return this._getOption('subvalueIndicator');
    }

    set subvalueIndicator(value: any) {
        this._setOption('subvalueIndicator', value);
    }

    @Input()
    get valueIndicator(): any {
        return this._getOption('valueIndicator');
    }

    set valueIndicator(value: any) {
        this._setOption('valueIndicator', value);
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
    @Output() containerBackgroundColorChange: EventEmitter<any>;
    @Output() rangeContainerChange: EventEmitter<any>;
    @Output() scaleChange: EventEmitter<any>;
    @Output() subtitleChange: EventEmitter<any>;
    @Output() subvaluesChange: EventEmitter<any>;
    @Output() valueChange: EventEmitter<any>;
    @Output() geometryChange: EventEmitter<any>;
    @Output() subvalueIndicatorChange: EventEmitter<any>;
    @Output() valueIndicatorChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxCircularGauge';
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
            { emit: 'containerBackgroundColorChange' },
            { emit: 'rangeContainerChange' },
            { emit: 'scaleChange' },
            { emit: 'subtitleChange' },
            { emit: 'subvaluesChange' },
            { emit: 'valueChange' },
            { emit: 'geometryChange' },
            { emit: 'subvalueIndicatorChange' },
            { emit: 'valueIndicatorChange' }
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
            'this.containerBackgroundColor',
            'this.rangeContainer',
            'this.scale',
            'this.subtitle',
            'this.subvalues',
            'this.value',
            'this.geometry',
            'this.subvalueIndicator',
            'this.valueIndicator'
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
        this.containerBackgroundColorChange = new EventEmitter();
        this.rangeContainerChange = new EventEmitter();
        this.scaleChange = new EventEmitter();
        this.subtitleChange = new EventEmitter();
        this.subvaluesChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.geometryChange = new EventEmitter();
        this.subvalueIndicatorChange = new EventEmitter();
        this.valueIndicatorChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        let widget = new DxCircularGauge(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('subvalues', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('subvalues');
        this._watcherHelper.checkWatchers();
    }
}



const CUSTOM_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxCircularGaugeValueAccessorDirective),
    multi: true
};

@Directive({
    selector: 'dx-circular-gauge[formControlName],dx-circular-gauge[formControl],dx-circular-gauge[ngModel]',
    providers: [CUSTOM_VALUE_ACCESSOR]
})
export class DxCircularGaugeValueAccessorDirective implements ControlValueAccessor {
    @HostListener('valueChange', ['$event']) onChange(_) { }
    onTouched = () => {};

    constructor(private host: DxCircularGaugeComponent) { }

    writeValue(value: any): void {
        this.host.value = value;
    }

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}


@NgModule({
  declarations: [
    DxCircularGaugeComponent,
    DxCircularGaugeValueAccessorDirective
  ],
  exports: [
    DxCircularGaugeComponent,
    DxCircularGaugeValueAccessorDirective
  ],
})
export class DxCircularGaugeModule { }
