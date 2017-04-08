
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
    HostListener
} from '@angular/core';

import DxBullet from 'devextreme/viz/bullet';

import { DxValidatorComponent } from './validator';

import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR
} from '@angular/forms';

import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';


let providers = [];
providers.push(DxTemplateHost, WatcherHelper);


@Component({
    selector: 'dx-bullet',
    template: '',
    providers: providers
})
export class DxBulletComponent extends DxComponent {
    instance: DxBullet;


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
    get color(): any {
        return this._getOption('color');
    }

    set color(value: any) {
        this._setOption('color', value);
    }

    @Input()
    get endScaleValue(): any {
        return this._getOption('endScaleValue');
    }

    set endScaleValue(value: any) {
        this._setOption('endScaleValue', value);
    }

    @Input()
    get showTarget(): any {
        return this._getOption('showTarget');
    }

    set showTarget(value: any) {
        this._setOption('showTarget', value);
    }

    @Input()
    get showZeroLevel(): any {
        return this._getOption('showZeroLevel');
    }

    set showZeroLevel(value: any) {
        this._setOption('showZeroLevel', value);
    }

    @Input()
    get startScaleValue(): any {
        return this._getOption('startScaleValue');
    }

    set startScaleValue(value: any) {
        this._setOption('startScaleValue', value);
    }

    @Input()
    get target(): any {
        return this._getOption('target');
    }

    set target(value: any) {
        this._setOption('target', value);
    }

    @Input()
    get targetColor(): any {
        return this._getOption('targetColor');
    }

    set targetColor(value: any) {
        this._setOption('targetColor', value);
    }

    @Input()
    get targetWidth(): any {
        return this._getOption('targetWidth');
    }

    set targetWidth(value: any) {
        this._setOption('targetWidth', value);
    }

    @Input()
    get value(): any {
        return this._getOption('value');
    }

    set value(value: any) {
        this._setOption('value', value);
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
    @Output() colorChange: EventEmitter<any>;
    @Output() endScaleValueChange: EventEmitter<any>;
    @Output() showTargetChange: EventEmitter<any>;
    @Output() showZeroLevelChange: EventEmitter<any>;
    @Output() startScaleValueChange: EventEmitter<any>;
    @Output() targetChange: EventEmitter<any>;
    @Output() targetColorChange: EventEmitter<any>;
    @Output() targetWidthChange: EventEmitter<any>;
    @Output() valueChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxBullet';
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
            { emit: 'colorChange' },
            { emit: 'endScaleValueChange' },
            { emit: 'showTargetChange' },
            { emit: 'showZeroLevelChange' },
            { emit: 'startScaleValueChange' },
            { emit: 'targetChange' },
            { emit: 'targetColorChange' },
            { emit: 'targetWidthChange' },
            { emit: 'valueChange' }
        ];

        this._properties = [
            'this.rtlEnabled',
            'this.margin',
            'this.pathModified',
            'this.size',
            'this.theme',
            'this.tooltip',
            'this.color',
            'this.endScaleValue',
            'this.showTarget',
            'this.showZeroLevel',
            'this.startScaleValue',
            'this.target',
            'this.targetColor',
            'this.targetWidth',
            'this.value'
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
        this.colorChange = new EventEmitter();
        this.endScaleValueChange = new EventEmitter();
        this.showTargetChange = new EventEmitter();
        this.showZeroLevelChange = new EventEmitter();
        this.startScaleValueChange = new EventEmitter();
        this.targetChange = new EventEmitter();
        this.targetColorChange = new EventEmitter();
        this.targetWidthChange = new EventEmitter();
        this.valueChange = new EventEmitter();
    }

    protected _createInstance(element, options) {
        let widget = new DxBullet(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    }

}



const CUSTOM_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxBulletValueAccessorDirective),
    multi: true
};

@Directive({
    selector: 'dx-bullet[formControlName],dx-bullet[formControl],dx-bullet[ngModel]',
    providers: [CUSTOM_VALUE_ACCESSOR]
})
export class DxBulletValueAccessorDirective implements ControlValueAccessor {
    @HostListener('valueChange', ['$event']) onChange(_) { }
    onTouched = () => {};

    constructor(private host: DxBulletComponent) { }

    writeValue(value: any): void {
        this.host.value = value;
    }

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}


@NgModule({
  declarations: [
    DxBulletComponent,
    DxBulletValueAccessorDirective
  ],
  exports: [
    DxBulletComponent,
    DxBulletValueAccessorDirective
  ],
})
export class DxBulletModule { }
