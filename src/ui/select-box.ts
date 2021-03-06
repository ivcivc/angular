
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

import DxSelectBox from 'devextreme/ui/select_box';

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
    selector: 'dx-select-box',
    template: '',
    providers: providers
})
export class DxSelectBoxComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxSelectBox;


    @ContentChild(DxValidatorComponent)
    validator: DxValidatorComponent;
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
    get displayValue(): any {
        return this._getOption('displayValue');
    }

    set displayValue(value: any) {
        this._setOption('displayValue', value);
    }

    @Input()
    get fieldTemplate(): any {
        return this._getOption('fieldTemplate');
    }

    set fieldTemplate(value: any) {
        this._setOption('fieldTemplate', value);
    }

    @Input()
    get minSearchLength(): any {
        return this._getOption('minSearchLength');
    }

    set minSearchLength(value: any) {
        this._setOption('minSearchLength', value);
    }

    @Input()
    get noDataText(): any {
        return this._getOption('noDataText');
    }

    set noDataText(value: any) {
        this._setOption('noDataText', value);
    }

    @Input()
    get pagingEnabled(): any {
        return this._getOption('pagingEnabled');
    }

    set pagingEnabled(value: any) {
        this._setOption('pagingEnabled', value);
    }

    @Input()
    get searchEnabled(): any {
        return this._getOption('searchEnabled');
    }

    set searchEnabled(value: any) {
        this._setOption('searchEnabled', value);
    }

    @Input()
    get searchExpr(): any {
        return this._getOption('searchExpr');
    }

    set searchExpr(value: any) {
        this._setOption('searchExpr', value);
    }

    @Input()
    get searchMode(): any {
        return this._getOption('searchMode');
    }

    set searchMode(value: any) {
        this._setOption('searchMode', value);
    }

    @Input()
    get searchTimeout(): any {
        return this._getOption('searchTimeout');
    }

    set searchTimeout(value: any) {
        this._setOption('searchTimeout', value);
    }

    @Input()
    get selectedItem(): any {
        return this._getOption('selectedItem');
    }

    set selectedItem(value: any) {
        this._setOption('selectedItem', value);
    }

    @Input()
    get showDataBeforeSearch(): any {
        return this._getOption('showDataBeforeSearch');
    }

    set showDataBeforeSearch(value: any) {
        this._setOption('showDataBeforeSearch', value);
    }

    @Input()
    get showSelectionControls(): any {
        return this._getOption('showSelectionControls');
    }

    set showSelectionControls(value: any) {
        this._setOption('showSelectionControls', value);
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
    @Output() onContentReady: EventEmitter<any>;
    @Output() onItemClick: EventEmitter<any>;
    @Output() onSelectionChanged: EventEmitter<any>;
    @Output() onCustomItemCreating: EventEmitter<any>;
    @Output() dataSourceChange: EventEmitter<any>;
    @Output() displayExprChange: EventEmitter<any>;
    @Output() itemTemplateChange: EventEmitter<any>;
    @Output() valueExprChange: EventEmitter<any>;
    @Output() itemsChange: EventEmitter<any>;
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
    @Output() deferRenderingChange: EventEmitter<any>;
    @Output() fieldEditEnabledChange: EventEmitter<any>;
    @Output() openedChange: EventEmitter<any>;
    @Output() displayValueChange: EventEmitter<any>;
    @Output() fieldTemplateChange: EventEmitter<any>;
    @Output() minSearchLengthChange: EventEmitter<any>;
    @Output() noDataTextChange: EventEmitter<any>;
    @Output() pagingEnabledChange: EventEmitter<any>;
    @Output() searchEnabledChange: EventEmitter<any>;
    @Output() searchExprChange: EventEmitter<any>;
    @Output() searchModeChange: EventEmitter<any>;
    @Output() searchTimeoutChange: EventEmitter<any>;
    @Output() selectedItemChange: EventEmitter<any>;
    @Output() showDataBeforeSearchChange: EventEmitter<any>;
    @Output() showSelectionControlsChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxSelectBox';
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
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'customItemCreating', emit: 'onCustomItemCreating' },
            { emit: 'dataSourceChange' },
            { emit: 'displayExprChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'valueExprChange' },
            { emit: 'itemsChange' },
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
            { emit: 'deferRenderingChange' },
            { emit: 'fieldEditEnabledChange' },
            { emit: 'openedChange' },
            { emit: 'displayValueChange' },
            { emit: 'fieldTemplateChange' },
            { emit: 'minSearchLengthChange' },
            { emit: 'noDataTextChange' },
            { emit: 'pagingEnabledChange' },
            { emit: 'searchEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'selectedItemChange' },
            { emit: 'showDataBeforeSearchChange' },
            { emit: 'showSelectionControlsChange' }
        ];

        this._properties = [
            'this.dataSource',
            'this.displayExpr',
            'this.itemTemplate',
            'this.valueExpr',
            'this.items',
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
            'this.deferRendering',
            'this.fieldEditEnabled',
            'this.opened',
            'this.displayValue',
            'this.fieldTemplate',
            'this.minSearchLength',
            'this.noDataText',
            'this.pagingEnabled',
            'this.searchEnabled',
            'this.searchExpr',
            'this.searchMode',
            'this.searchTimeout',
            'this.selectedItem',
            'this.showDataBeforeSearch',
            'this.showSelectionControls'
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
        this.onContentReady = new EventEmitter();
        this.onItemClick = new EventEmitter();
        this.onSelectionChanged = new EventEmitter();
        this.onCustomItemCreating = new EventEmitter();
        this.dataSourceChange = new EventEmitter();
        this.displayExprChange = new EventEmitter();
        this.itemTemplateChange = new EventEmitter();
        this.valueExprChange = new EventEmitter();
        this.itemsChange = new EventEmitter();
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
        this.deferRenderingChange = new EventEmitter();
        this.fieldEditEnabledChange = new EventEmitter();
        this.openedChange = new EventEmitter();
        this.displayValueChange = new EventEmitter();
        this.fieldTemplateChange = new EventEmitter();
        this.minSearchLengthChange = new EventEmitter();
        this.noDataTextChange = new EventEmitter();
        this.pagingEnabledChange = new EventEmitter();
        this.searchEnabledChange = new EventEmitter();
        this.searchExprChange = new EventEmitter();
        this.searchModeChange = new EventEmitter();
        this.searchTimeoutChange = new EventEmitter();
        this.selectedItemChange = new EventEmitter();
        this.showDataBeforeSearchChange = new EventEmitter();
        this.showSelectionControlsChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        let widget = new DxSelectBox(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
        this._idh.setup('searchExpr', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
        this._watcherHelper.checkWatchers();
    }
}



const CUSTOM_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxSelectBoxValueAccessorDirective),
    multi: true
};

@Directive({
    selector: 'dx-select-box[formControlName],dx-select-box[formControl],dx-select-box[ngModel]',
    providers: [CUSTOM_VALUE_ACCESSOR]
})
export class DxSelectBoxValueAccessorDirective implements ControlValueAccessor {
    @HostListener('valueChange', ['$event']) onChange(_) { }
    onTouched = () => {};

    constructor(private host: DxSelectBoxComponent) { }

    writeValue(value: any): void {
        this.host.value = value;
    }

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}


@NgModule({
  declarations: [
    DxSelectBoxComponent,
    DxSelectBoxValueAccessorDirective
  ],
  exports: [
    DxSelectBoxComponent,
    DxSelectBoxValueAccessorDirective
  ],
})
export class DxSelectBoxModule { }
