
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

import DxRadioGroup from 'devextreme/ui/radio_group';

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
    selector: 'dx-radio-group',
    template: '',
    providers: providers
})
export class DxRadioGroupComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxRadioGroup;


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
    get dataSource(): any {
        return this._getOption('dataSource');
    }

    set dataSource(value: any) {
        this._setOption('dataSource', value);
    }

    @Input()
    get displayExpr(): any {
        return this._getOption('displayExpr');
    }

    set displayExpr(value: any) {
        this._setOption('displayExpr', value);
    }

    @Input()
    get itemTemplate(): any {
        return this._getOption('itemTemplate');
    }

    set itemTemplate(value: any) {
        this._setOption('itemTemplate', value);
    }

    @Input()
    get value(): any {
        return this._getOption('value');
    }

    set value(value: any) {
        this._setOption('value', value);
    }

    @Input()
    get valueExpr(): any {
        return this._getOption('valueExpr');
    }

    set valueExpr(value: any) {
        this._setOption('valueExpr', value);
    }

    @Input()
    get items(): any {
        return this._getOption('items');
    }

    set items(value: any) {
        this._setOption('items', value);
    }

    @Input()
    get layout(): any {
        return this._getOption('layout');
    }

    set layout(value: any) {
        this._setOption('layout', value);
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
    @Output() dataSourceChange: EventEmitter<any>;
    @Output() displayExprChange: EventEmitter<any>;
    @Output() itemTemplateChange: EventEmitter<any>;
    @Output() valueChange: EventEmitter<any>;
    @Output() valueExprChange: EventEmitter<any>;
    @Output() itemsChange: EventEmitter<any>;
    @Output() layoutChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxRadioGroup';
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
            { emit: 'dataSourceChange' },
            { emit: 'displayExprChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'valueChange' },
            { emit: 'valueExprChange' },
            { emit: 'itemsChange' },
            { emit: 'layoutChange' }
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
            'this.dataSource',
            'this.displayExpr',
            'this.itemTemplate',
            'this.value',
            'this.valueExpr',
            'this.items',
            'this.layout'
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
        this.dataSourceChange = new EventEmitter();
        this.displayExprChange = new EventEmitter();
        this.itemTemplateChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.valueExprChange = new EventEmitter();
        this.itemsChange = new EventEmitter();
        this.layoutChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        let widget = new DxRadioGroup(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
    }
}



const CUSTOM_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxRadioGroupValueAccessorDirective),
    multi: true
};

@Directive({
    selector: 'dx-radio-group[formControlName],dx-radio-group[formControl],dx-radio-group[ngModel]',
    providers: [CUSTOM_VALUE_ACCESSOR]
})
export class DxRadioGroupValueAccessorDirective implements ControlValueAccessor {
    @HostListener('valueChange', ['$event']) onChange(_) { }
    onTouched = () => {};

    constructor(private host: DxRadioGroupComponent) { }

    writeValue(value: any): void {
        this.host.value = value;
    }

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}


@NgModule({
  declarations: [
    DxRadioGroupComponent,
    DxRadioGroupValueAccessorDirective
  ],
  exports: [
    DxRadioGroupComponent,
    DxRadioGroupValueAccessorDirective
  ],
})
export class DxRadioGroupModule { }
