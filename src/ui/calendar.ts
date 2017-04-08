
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

import DxCalendar from 'devextreme/ui/calendar';

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
    selector: 'dx-calendar',
    template: '',
    providers: providers
})
export class DxCalendarComponent extends DxComponent {
    instance: DxCalendar;


    @ContentChild(DxValidatorComponent)
    validator: DxValidatorComponent;
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
    get name(): any {
        return this._getOption('name');
    }

    set name(value: any) {
        this._setOption('name', value);
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
    get value(): any {
        return this._getOption('value');
    }

    set value(value: any) {
        this._setOption('value', value);
    }

    @Input()
    get cellTemplate(): any {
        return this._getOption('cellTemplate');
    }

    set cellTemplate(value: any) {
        this._setOption('cellTemplate', value);
    }

    @Input()
    get firstDayOfWeek(): any {
        return this._getOption('firstDayOfWeek');
    }

    set firstDayOfWeek(value: any) {
        this._setOption('firstDayOfWeek', value);
    }

    @Input()
    get max(): any {
        return this._getOption('max');
    }

    set max(value: any) {
        this._setOption('max', value);
    }

    @Input()
    get maxZoomLevel(): any {
        return this._getOption('maxZoomLevel');
    }

    set maxZoomLevel(value: any) {
        this._setOption('maxZoomLevel', value);
    }

    @Input()
    get min(): any {
        return this._getOption('min');
    }

    set min(value: any) {
        this._setOption('min', value);
    }

    @Input()
    get minZoomLevel(): any {
        return this._getOption('minZoomLevel');
    }

    set minZoomLevel(value: any) {
        this._setOption('minZoomLevel', value);
    }

    @Input()
    get showTodayButton(): any {
        return this._getOption('showTodayButton');
    }

    set showTodayButton(value: any) {
        this._setOption('showTodayButton', value);
    }

    @Input()
    get zoomLevel(): any {
        return this._getOption('zoomLevel');
    }

    set zoomLevel(value: any) {
        this._setOption('zoomLevel', value);
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
    @Output() nameChange: EventEmitter<any>;
    @Output() readOnlyChange: EventEmitter<any>;
    @Output() validationErrorChange: EventEmitter<any>;
    @Output() validationMessageModeChange: EventEmitter<any>;
    @Output() valueChange: EventEmitter<any>;
    @Output() cellTemplateChange: EventEmitter<any>;
    @Output() firstDayOfWeekChange: EventEmitter<any>;
    @Output() maxChange: EventEmitter<any>;
    @Output() maxZoomLevelChange: EventEmitter<any>;
    @Output() minChange: EventEmitter<any>;
    @Output() minZoomLevelChange: EventEmitter<any>;
    @Output() showTodayButtonChange: EventEmitter<any>;
    @Output() zoomLevelChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxCalendar';
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
            { emit: 'nameChange' },
            { emit: 'readOnlyChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'cellTemplateChange' },
            { emit: 'firstDayOfWeekChange' },
            { emit: 'maxChange' },
            { emit: 'maxZoomLevelChange' },
            { emit: 'minChange' },
            { emit: 'minZoomLevelChange' },
            { emit: 'showTodayButtonChange' },
            { emit: 'zoomLevelChange' }
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
            'this.name',
            'this.readOnly',
            'this.validationError',
            'this.validationMessageMode',
            'this.value',
            'this.cellTemplate',
            'this.firstDayOfWeek',
            'this.max',
            'this.maxZoomLevel',
            'this.min',
            'this.minZoomLevel',
            'this.showTodayButton',
            'this.zoomLevel'
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
        this.nameChange = new EventEmitter();
        this.readOnlyChange = new EventEmitter();
        this.validationErrorChange = new EventEmitter();
        this.validationMessageModeChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.cellTemplateChange = new EventEmitter();
        this.firstDayOfWeekChange = new EventEmitter();
        this.maxChange = new EventEmitter();
        this.maxZoomLevelChange = new EventEmitter();
        this.minChange = new EventEmitter();
        this.minZoomLevelChange = new EventEmitter();
        this.showTodayButtonChange = new EventEmitter();
        this.zoomLevelChange = new EventEmitter();
    }

    protected _createInstance(element, options) {
        let widget = new DxCalendar(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    }

}



const CUSTOM_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxCalendarValueAccessorDirective),
    multi: true
};

@Directive({
    selector: 'dx-calendar[formControlName],dx-calendar[formControl],dx-calendar[ngModel]',
    providers: [CUSTOM_VALUE_ACCESSOR]
})
export class DxCalendarValueAccessorDirective implements ControlValueAccessor {
    @HostListener('valueChange', ['$event']) onChange(_) { }
    onTouched = () => {};

    constructor(private host: DxCalendarComponent) { }

    writeValue(value: any): void {
        this.host.value = value;
    }

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}


@NgModule({
  declarations: [
    DxCalendarComponent,
    DxCalendarValueAccessorDirective
  ],
  exports: [
    DxCalendarComponent,
    DxCalendarValueAccessorDirective
  ],
})
export class DxCalendarModule { }
