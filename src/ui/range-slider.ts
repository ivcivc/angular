



import {
    Component,
    NgModule,
    ElementRef,
    EventEmitter,
    NgZone,
    Input,
    Output
} from '@angular/core';

import DxRangeSlider from 'devextreme/ui/range_slider';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';


let providers = [];
providers.push(DxTemplateHost, WatcherHelper);


@Component({
    selector: 'dx-range-slider',
    template: '',
    providers: providers
})
export class DxRangeSliderComponent extends DxComponent {
    instance: DxRangeSlider;


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
    get isValid(): any {
        return this._getOption('isValid');
    }

    set isValid(value: any) {
        this._setOption('isValid', value);
    }

    @Input()
    get readOnly(): any {
        return this._getOption('readOnly');
    }

    set readOnly(value: any) {
        this._setOption('readOnly', value);
    }

    @Input()
    get validationError(): any {
        return this._getOption('validationError');
    }

    set validationError(value: any) {
        this._setOption('validationError', value);
    }

    @Input()
    get validationMessageMode(): any {
        return this._getOption('validationMessageMode');
    }

    set validationMessageMode(value: any) {
        this._setOption('validationMessageMode', value);
    }

    @Input()
    get max(): any {
        return this._getOption('max');
    }

    set max(value: any) {
        this._setOption('max', value);
    }

    @Input()
    get min(): any {
        return this._getOption('min');
    }

    set min(value: any) {
        this._setOption('min', value);
    }

    @Input()
    get keyStep(): any {
        return this._getOption('keyStep');
    }

    set keyStep(value: any) {
        this._setOption('keyStep', value);
    }

    @Input()
    get label(): any {
        return this._getOption('label');
    }

    set label(value: any) {
        this._setOption('label', value);
    }

    @Input()
    get showRange(): any {
        return this._getOption('showRange');
    }

    set showRange(value: any) {
        this._setOption('showRange', value);
    }

    @Input()
    get step(): any {
        return this._getOption('step');
    }

    set step(value: any) {
        this._setOption('step', value);
    }

    @Input()
    get tooltip(): any {
        return this._getOption('tooltip');
    }

    set tooltip(value: any) {
        this._setOption('tooltip', value);
    }

    @Input()
    get end(): any {
        return this._getOption('end');
    }

    set end(value: any) {
        this._setOption('end', value);
    }

    @Input()
    get endName(): any {
        return this._getOption('endName');
    }

    set endName(value: any) {
        this._setOption('endName', value);
    }

    @Input()
    get start(): any {
        return this._getOption('start');
    }

    set start(value: any) {
        this._setOption('start', value);
    }

    @Input()
    get startName(): any {
        return this._getOption('startName');
    }

    set startName(value: any) {
        this._setOption('startName', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onValueChanged: EventEmitter<any>;
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
    @Output() isValidChange: EventEmitter<any>;
    @Output() readOnlyChange: EventEmitter<any>;
    @Output() validationErrorChange: EventEmitter<any>;
    @Output() validationMessageModeChange: EventEmitter<any>;
    @Output() maxChange: EventEmitter<any>;
    @Output() minChange: EventEmitter<any>;
    @Output() keyStepChange: EventEmitter<any>;
    @Output() labelChange: EventEmitter<any>;
    @Output() showRangeChange: EventEmitter<any>;
    @Output() stepChange: EventEmitter<any>;
    @Output() tooltipChange: EventEmitter<any>;
    @Output() endChange: EventEmitter<any>;
    @Output() endNameChange: EventEmitter<any>;
    @Output() startChange: EventEmitter<any>;
    @Output() startNameChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxRangeSlider';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
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
            { emit: 'isValidChange' },
            { emit: 'readOnlyChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'maxChange' },
            { emit: 'minChange' },
            { emit: 'keyStepChange' },
            { emit: 'labelChange' },
            { emit: 'showRangeChange' },
            { emit: 'stepChange' },
            { emit: 'tooltipChange' },
            { emit: 'endChange' },
            { emit: 'endNameChange' },
            { emit: 'startChange' },
            { emit: 'startNameChange' }
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
            'this.isValid',
            'this.readOnly',
            'this.validationError',
            'this.validationMessageMode',
            'this.max',
            'this.min',
            'this.keyStep',
            'this.label',
            'this.showRange',
            'this.step',
            'this.tooltip',
            'this.end',
            'this.endName',
            'this.start',
            'this.startName'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onValueChanged = new EventEmitter();
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
        this.isValidChange = new EventEmitter();
        this.readOnlyChange = new EventEmitter();
        this.validationErrorChange = new EventEmitter();
        this.validationMessageModeChange = new EventEmitter();
        this.maxChange = new EventEmitter();
        this.minChange = new EventEmitter();
        this.keyStepChange = new EventEmitter();
        this.labelChange = new EventEmitter();
        this.showRangeChange = new EventEmitter();
        this.stepChange = new EventEmitter();
        this.tooltipChange = new EventEmitter();
        this.endChange = new EventEmitter();
        this.endNameChange = new EventEmitter();
        this.startChange = new EventEmitter();
        this.startNameChange = new EventEmitter();
    }

    protected _createInstance(element, options) {
        return new DxRangeSlider(element, options);
    }

}



@NgModule({
  declarations: [
    DxRangeSliderComponent
  ],
  exports: [
    DxRangeSliderComponent
  ],
})
export class DxRangeSliderModule { }
