
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

import DxDateBox from 'devextreme/ui/date_box';

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
    selector: 'dx-date-box',
    template: '',
    providers: providers
})
export class DxDateBoxComponent extends DxComponent {
    instance: DxDateBox;


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
    get attr(): any {
        return this._getOption('attr');
    }

    set attr(value: any) {
        this._setOption('attr', value);
    }

    @Input()
    get placeholder(): any {
        return this._getOption('placeholder');
    }

    set placeholder(value: any) {
        this._setOption('placeholder', value);
    }

    @Input()
    get showClearButton(): any {
        return this._getOption('showClearButton');
    }

    set showClearButton(value: any) {
        this._setOption('showClearButton', value);
    }

    @Input()
    get spellcheck(): any {
        return this._getOption('spellcheck');
    }

    set spellcheck(value: any) {
        this._setOption('spellcheck', value);
    }

    @Input()
    get text(): any {
        return this._getOption('text');
    }

    set text(value: any) {
        this._setOption('text', value);
    }

    @Input()
    get valueChangeEvent(): any {
        return this._getOption('valueChangeEvent');
    }

    set valueChangeEvent(value: any) {
        this._setOption('valueChangeEvent', value);
    }

    @Input()
    get maxLength(): any {
        return this._getOption('maxLength');
    }

    set maxLength(value: any) {
        this._setOption('maxLength', value);
    }

    @Input()
    get acceptCustomValue(): any {
        return this._getOption('acceptCustomValue');
    }

    set acceptCustomValue(value: any) {
        this._setOption('acceptCustomValue', value);
    }

    @Input()
    get applyValueMode(): any {
        return this._getOption('applyValueMode');
    }

    set applyValueMode(value: any) {
        this._setOption('applyValueMode', value);
    }

    @Input()
    get deferRendering(): any {
        return this._getOption('deferRendering');
    }

    set deferRendering(value: any) {
        this._setOption('deferRendering', value);
    }

    @Input()
    get fieldEditEnabled(): any {
        return this._getOption('fieldEditEnabled');
    }

    set fieldEditEnabled(value: any) {
        this._setOption('fieldEditEnabled', value);
    }

    @Input()
    get opened(): any {
        return this._getOption('opened');
    }

    set opened(value: any) {
        this._setOption('opened', value);
    }

    @Input()
    get adaptivityEnabled(): any {
        return this._getOption('adaptivityEnabled');
    }

    set adaptivityEnabled(value: any) {
        this._setOption('adaptivityEnabled', value);
    }

    @Input()
    get applyButtonText(): any {
        return this._getOption('applyButtonText');
    }

    set applyButtonText(value: any) {
        this._setOption('applyButtonText', value);
    }

    @Input()
    get cancelButtonText(): any {
        return this._getOption('cancelButtonText');
    }

    set cancelButtonText(value: any) {
        this._setOption('cancelButtonText', value);
    }

    @Input()
    get dateOutOfRangeMessage(): any {
        return this._getOption('dateOutOfRangeMessage');
    }

    set dateOutOfRangeMessage(value: any) {
        this._setOption('dateOutOfRangeMessage', value);
    }

    @Input()
    get displayFormat(): any {
        return this._getOption('displayFormat');
    }

    set displayFormat(value: any) {
        this._setOption('displayFormat', value);
    }

    @Input()
    get format(): any {
        return this._getOption('format');
    }

    set format(value: any) {
        this._setOption('format', value);
    }

    @Input()
    get formatString(): any {
        return this._getOption('formatString');
    }

    set formatString(value: any) {
        this._setOption('formatString', value);
    }

    @Input()
    get interval(): any {
        return this._getOption('interval');
    }

    set interval(value: any) {
        this._setOption('interval', value);
    }

    @Input()
    get invalidDateMessage(): any {
        return this._getOption('invalidDateMessage');
    }

    set invalidDateMessage(value: any) {
        this._setOption('invalidDateMessage', value);
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
    get pickerType(): any {
        return this._getOption('pickerType');
    }

    set pickerType(value: any) {
        this._setOption('pickerType', value);
    }

    @Input()
    get type(): any {
        return this._getOption('type');
    }

    set type(value: any) {
        this._setOption('type', value);
    }

    @Input()
    get useCalendar(): any {
        return this._getOption('useCalendar');
    }

    set useCalendar(value: any) {
        this._setOption('useCalendar', value);
    }

    @Input()
    get useNative(): any {
        return this._getOption('useNative');
    }

    set useNative(value: any) {
        this._setOption('useNative', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onFocusIn: EventEmitter<any>;
    @Output() onFocusOut: EventEmitter<any>;
    @Output() onValueChanged: EventEmitter<any>;
    @Output() onChange: EventEmitter<any>;
    @Output() onCopy: EventEmitter<any>;
    @Output() onCut: EventEmitter<any>;
    @Output() onEnterKey: EventEmitter<any>;
    @Output() onInput: EventEmitter<any>;
    @Output() onKeyDown: EventEmitter<any>;
    @Output() onKeyPress: EventEmitter<any>;
    @Output() onKeyUp: EventEmitter<any>;
    @Output() onPaste: EventEmitter<any>;
    @Output() onClosed: EventEmitter<any>;
    @Output() onOpened: EventEmitter<any>;
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
    @Output() attrChange: EventEmitter<any>;
    @Output() placeholderChange: EventEmitter<any>;
    @Output() showClearButtonChange: EventEmitter<any>;
    @Output() spellcheckChange: EventEmitter<any>;
    @Output() textChange: EventEmitter<any>;
    @Output() valueChangeEventChange: EventEmitter<any>;
    @Output() maxLengthChange: EventEmitter<any>;
    @Output() acceptCustomValueChange: EventEmitter<any>;
    @Output() applyValueModeChange: EventEmitter<any>;
    @Output() deferRenderingChange: EventEmitter<any>;
    @Output() fieldEditEnabledChange: EventEmitter<any>;
    @Output() openedChange: EventEmitter<any>;
    @Output() adaptivityEnabledChange: EventEmitter<any>;
    @Output() applyButtonTextChange: EventEmitter<any>;
    @Output() cancelButtonTextChange: EventEmitter<any>;
    @Output() dateOutOfRangeMessageChange: EventEmitter<any>;
    @Output() displayFormatChange: EventEmitter<any>;
    @Output() formatChange: EventEmitter<any>;
    @Output() formatStringChange: EventEmitter<any>;
    @Output() intervalChange: EventEmitter<any>;
    @Output() invalidDateMessageChange: EventEmitter<any>;
    @Output() maxChange: EventEmitter<any>;
    @Output() maxZoomLevelChange: EventEmitter<any>;
    @Output() minChange: EventEmitter<any>;
    @Output() minZoomLevelChange: EventEmitter<any>;
    @Output() pickerTypeChange: EventEmitter<any>;
    @Output() typeChange: EventEmitter<any>;
    @Output() useCalendarChange: EventEmitter<any>;
    @Output() useNativeChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxDateBox';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'copy', emit: 'onCopy' },
            { subscribe: 'cut', emit: 'onCut' },
            { subscribe: 'enterKey', emit: 'onEnterKey' },
            { subscribe: 'input', emit: 'onInput' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'keyPress', emit: 'onKeyPress' },
            { subscribe: 'keyUp', emit: 'onKeyUp' },
            { subscribe: 'paste', emit: 'onPaste' },
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'opened', emit: 'onOpened' },
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
            { emit: 'attrChange' },
            { emit: 'placeholderChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'spellcheckChange' },
            { emit: 'textChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'maxLengthChange' },
            { emit: 'acceptCustomValueChange' },
            { emit: 'applyValueModeChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'fieldEditEnabledChange' },
            { emit: 'openedChange' },
            { emit: 'adaptivityEnabledChange' },
            { emit: 'applyButtonTextChange' },
            { emit: 'cancelButtonTextChange' },
            { emit: 'dateOutOfRangeMessageChange' },
            { emit: 'displayFormatChange' },
            { emit: 'formatChange' },
            { emit: 'formatStringChange' },
            { emit: 'intervalChange' },
            { emit: 'invalidDateMessageChange' },
            { emit: 'maxChange' },
            { emit: 'maxZoomLevelChange' },
            { emit: 'minChange' },
            { emit: 'minZoomLevelChange' },
            { emit: 'pickerTypeChange' },
            { emit: 'typeChange' },
            { emit: 'useCalendarChange' },
            { emit: 'useNativeChange' }
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
            'this.attr',
            'this.placeholder',
            'this.showClearButton',
            'this.spellcheck',
            'this.text',
            'this.valueChangeEvent',
            'this.maxLength',
            'this.acceptCustomValue',
            'this.applyValueMode',
            'this.deferRendering',
            'this.fieldEditEnabled',
            'this.opened',
            'this.adaptivityEnabled',
            'this.applyButtonText',
            'this.cancelButtonText',
            'this.dateOutOfRangeMessage',
            'this.displayFormat',
            'this.format',
            'this.formatString',
            'this.interval',
            'this.invalidDateMessage',
            'this.max',
            'this.maxZoomLevel',
            'this.min',
            'this.minZoomLevel',
            'this.pickerType',
            'this.type',
            'this.useCalendar',
            'this.useNative'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onFocusIn = new EventEmitter();
        this.onFocusOut = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onCopy = new EventEmitter();
        this.onCut = new EventEmitter();
        this.onEnterKey = new EventEmitter();
        this.onInput = new EventEmitter();
        this.onKeyDown = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onKeyUp = new EventEmitter();
        this.onPaste = new EventEmitter();
        this.onClosed = new EventEmitter();
        this.onOpened = new EventEmitter();
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
        this.attrChange = new EventEmitter();
        this.placeholderChange = new EventEmitter();
        this.showClearButtonChange = new EventEmitter();
        this.spellcheckChange = new EventEmitter();
        this.textChange = new EventEmitter();
        this.valueChangeEventChange = new EventEmitter();
        this.maxLengthChange = new EventEmitter();
        this.acceptCustomValueChange = new EventEmitter();
        this.applyValueModeChange = new EventEmitter();
        this.deferRenderingChange = new EventEmitter();
        this.fieldEditEnabledChange = new EventEmitter();
        this.openedChange = new EventEmitter();
        this.adaptivityEnabledChange = new EventEmitter();
        this.applyButtonTextChange = new EventEmitter();
        this.cancelButtonTextChange = new EventEmitter();
        this.dateOutOfRangeMessageChange = new EventEmitter();
        this.displayFormatChange = new EventEmitter();
        this.formatChange = new EventEmitter();
        this.formatStringChange = new EventEmitter();
        this.intervalChange = new EventEmitter();
        this.invalidDateMessageChange = new EventEmitter();
        this.maxChange = new EventEmitter();
        this.maxZoomLevelChange = new EventEmitter();
        this.minChange = new EventEmitter();
        this.minZoomLevelChange = new EventEmitter();
        this.pickerTypeChange = new EventEmitter();
        this.typeChange = new EventEmitter();
        this.useCalendarChange = new EventEmitter();
        this.useNativeChange = new EventEmitter();
    }

    protected _createInstance(element, options) {
        let widget = new DxDateBox(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    }

}



const CUSTOM_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxDateBoxValueAccessorDirective),
    multi: true
};

@Directive({
    selector: 'dx-date-box[formControlName],dx-date-box[formControl],dx-date-box[ngModel]',
    providers: [CUSTOM_VALUE_ACCESSOR]
})
export class DxDateBoxValueAccessorDirective implements ControlValueAccessor {
    @HostListener('valueChange', ['$event']) onChange(_) { }
    onTouched = () => {};

    constructor(private host: DxDateBoxComponent) { }

    writeValue(value: any): void {
        this.host.value = value;
    }

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}


@NgModule({
  declarations: [
    DxDateBoxComponent,
    DxDateBoxValueAccessorDirective
  ],
  exports: [
    DxDateBoxComponent,
    DxDateBoxValueAccessorDirective
  ],
})
export class DxDateBoxModule { }
