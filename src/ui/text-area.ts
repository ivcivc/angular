
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

import DxTextArea from 'devextreme/ui/text_area';

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
    selector: 'dx-text-area',
    template: '',
    providers: providers
})
export class DxTextAreaComponent extends DxComponent {
    instance: DxTextArea;


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
    get autoResizeEnabled(): any {
        return this._getOption('autoResizeEnabled');
    }

    set autoResizeEnabled(value: any) {
        this._setOption('autoResizeEnabled', value);
    }

    @Input()
    get maxHeight(): any {
        return this._getOption('maxHeight');
    }

    set maxHeight(value: any) {
        this._setOption('maxHeight', value);
    }

    @Input()
    get minHeight(): any {
        return this._getOption('minHeight');
    }

    set minHeight(value: any) {
        this._setOption('minHeight', value);
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
    @Output() spellcheckChange: EventEmitter<any>;
    @Output() textChange: EventEmitter<any>;
    @Output() valueChangeEventChange: EventEmitter<any>;
    @Output() maxLengthChange: EventEmitter<any>;
    @Output() autoResizeEnabledChange: EventEmitter<any>;
    @Output() maxHeightChange: EventEmitter<any>;
    @Output() minHeightChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxTextArea';
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
            { emit: 'spellcheckChange' },
            { emit: 'textChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'maxLengthChange' },
            { emit: 'autoResizeEnabledChange' },
            { emit: 'maxHeightChange' },
            { emit: 'minHeightChange' }
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
            'this.spellcheck',
            'this.text',
            'this.valueChangeEvent',
            'this.maxLength',
            'this.autoResizeEnabled',
            'this.maxHeight',
            'this.minHeight'
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
        this.spellcheckChange = new EventEmitter();
        this.textChange = new EventEmitter();
        this.valueChangeEventChange = new EventEmitter();
        this.maxLengthChange = new EventEmitter();
        this.autoResizeEnabledChange = new EventEmitter();
        this.maxHeightChange = new EventEmitter();
        this.minHeightChange = new EventEmitter();
    }

    protected _createInstance(element, options) {
        let widget = new DxTextArea(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    }

}



const CUSTOM_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxTextAreaValueAccessorDirective),
    multi: true
};

@Directive({
    selector: 'dx-text-area[formControlName],dx-text-area[formControl],dx-text-area[ngModel]',
    providers: [CUSTOM_VALUE_ACCESSOR]
})
export class DxTextAreaValueAccessorDirective implements ControlValueAccessor {
    @HostListener('valueChange', ['$event']) onChange(_) { }
    onTouched = () => {};

    constructor(private host: DxTextAreaComponent) { }

    writeValue(value: any): void {
        this.host.value = value;
    }

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}


@NgModule({
  declarations: [
    DxTextAreaComponent,
    DxTextAreaValueAccessorDirective
  ],
  exports: [
    DxTextAreaComponent,
    DxTextAreaValueAccessorDirective
  ],
})
export class DxTextAreaModule { }
