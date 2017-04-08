
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

import DxLookup from 'devextreme/ui/lookup';

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
    selector: 'dx-lookup',
    template: '',
    providers: providers
})
export class DxLookupComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxLookup;


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
    get animation(): any {
        return this._getOption('animation');
    }

    set animation(value: any) {
        this._setOption('animation', value);
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
    get cleanSearchOnOpening(): any {
        return this._getOption('cleanSearchOnOpening');
    }

    set cleanSearchOnOpening(value: any) {
        this._setOption('cleanSearchOnOpening', value);
    }

    @Input()
    get clearButtonText(): any {
        return this._getOption('clearButtonText');
    }

    set clearButtonText(value: any) {
        this._setOption('clearButtonText', value);
    }

    @Input()
    get closeOnOutsideClick(): any {
        return this._getOption('closeOnOutsideClick');
    }

    set closeOnOutsideClick(value: any) {
        this._setOption('closeOnOutsideClick', value);
    }

    @Input()
    get fullScreen(): any {
        return this._getOption('fullScreen');
    }

    set fullScreen(value: any) {
        this._setOption('fullScreen', value);
    }

    @Input()
    get grouped(): any {
        return this._getOption('grouped');
    }

    set grouped(value: any) {
        this._setOption('grouped', value);
    }

    @Input()
    get groupTemplate(): any {
        return this._getOption('groupTemplate');
    }

    set groupTemplate(value: any) {
        this._setOption('groupTemplate', value);
    }

    @Input()
    get nextButtonText(): any {
        return this._getOption('nextButtonText');
    }

    set nextButtonText(value: any) {
        this._setOption('nextButtonText', value);
    }

    @Input()
    get pageLoadingText(): any {
        return this._getOption('pageLoadingText');
    }

    set pageLoadingText(value: any) {
        this._setOption('pageLoadingText', value);
    }

    @Input()
    get pageLoadMode(): any {
        return this._getOption('pageLoadMode');
    }

    set pageLoadMode(value: any) {
        this._setOption('pageLoadMode', value);
    }

    @Input()
    get popupHeight(): any {
        return this._getOption('popupHeight');
    }

    set popupHeight(value: any) {
        this._setOption('popupHeight', value);
    }

    @Input()
    get popupWidth(): any {
        return this._getOption('popupWidth');
    }

    set popupWidth(value: any) {
        this._setOption('popupWidth', value);
    }

    @Input()
    get pulledDownText(): any {
        return this._getOption('pulledDownText');
    }

    set pulledDownText(value: any) {
        this._setOption('pulledDownText', value);
    }

    @Input()
    get pullingDownText(): any {
        return this._getOption('pullingDownText');
    }

    set pullingDownText(value: any) {
        this._setOption('pullingDownText', value);
    }

    @Input()
    get pullRefreshEnabled(): any {
        return this._getOption('pullRefreshEnabled');
    }

    set pullRefreshEnabled(value: any) {
        this._setOption('pullRefreshEnabled', value);
    }

    @Input()
    get refreshingText(): any {
        return this._getOption('refreshingText');
    }

    set refreshingText(value: any) {
        this._setOption('refreshingText', value);
    }

    @Input()
    get searchPlaceholder(): any {
        return this._getOption('searchPlaceholder');
    }

    set searchPlaceholder(value: any) {
        this._setOption('searchPlaceholder', value);
    }

    @Input()
    get shading(): any {
        return this._getOption('shading');
    }

    set shading(value: any) {
        this._setOption('shading', value);
    }

    @Input()
    get showCancelButton(): any {
        return this._getOption('showCancelButton');
    }

    set showCancelButton(value: any) {
        this._setOption('showCancelButton', value);
    }

    @Input()
    get showNextButton(): any {
        return this._getOption('showNextButton');
    }

    set showNextButton(value: any) {
        this._setOption('showNextButton', value);
    }

    @Input()
    get showPopupTitle(): any {
        return this._getOption('showPopupTitle');
    }

    set showPopupTitle(value: any) {
        this._setOption('showPopupTitle', value);
    }

    @Input()
    get title(): any {
        return this._getOption('title');
    }

    set title(value: any) {
        this._setOption('title', value);
    }

    @Input()
    get titleTemplate(): any {
        return this._getOption('titleTemplate');
    }

    set titleTemplate(value: any) {
        this._setOption('titleTemplate', value);
    }

    @Input()
    get useNativeScrolling(): any {
        return this._getOption('useNativeScrolling');
    }

    set useNativeScrolling(value: any) {
        this._setOption('useNativeScrolling', value);
    }

    @Input()
    get usePopover(): any {
        return this._getOption('usePopover');
    }

    set usePopover(value: any) {
        this._setOption('usePopover', value);
    }

    @Input()
    get position(): any {
        return this._getOption('position');
    }

    set position(value: any) {
        this._setOption('position', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onValueChanged: EventEmitter<any>;
    @Output() onClosed: EventEmitter<any>;
    @Output() onOpened: EventEmitter<any>;
    @Output() onContentReady: EventEmitter<any>;
    @Output() onItemClick: EventEmitter<any>;
    @Output() onSelectionChanged: EventEmitter<any>;
    @Output() onPageLoading: EventEmitter<any>;
    @Output() onPullRefresh: EventEmitter<any>;
    @Output() onScroll: EventEmitter<any>;
    @Output() onTitleRendered: EventEmitter<any>;
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
    @Output() validationErrorChange: EventEmitter<any>;
    @Output() validationMessageModeChange: EventEmitter<any>;
    @Output() valueChange: EventEmitter<any>;
    @Output() attrChange: EventEmitter<any>;
    @Output() placeholderChange: EventEmitter<any>;
    @Output() showClearButtonChange: EventEmitter<any>;
    @Output() textChange: EventEmitter<any>;
    @Output() valueChangeEventChange: EventEmitter<any>;
    @Output() applyValueModeChange: EventEmitter<any>;
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
    @Output() animationChange: EventEmitter<any>;
    @Output() applyButtonTextChange: EventEmitter<any>;
    @Output() cancelButtonTextChange: EventEmitter<any>;
    @Output() cleanSearchOnOpeningChange: EventEmitter<any>;
    @Output() clearButtonTextChange: EventEmitter<any>;
    @Output() closeOnOutsideClickChange: EventEmitter<any>;
    @Output() fullScreenChange: EventEmitter<any>;
    @Output() groupedChange: EventEmitter<any>;
    @Output() groupTemplateChange: EventEmitter<any>;
    @Output() nextButtonTextChange: EventEmitter<any>;
    @Output() pageLoadingTextChange: EventEmitter<any>;
    @Output() pageLoadModeChange: EventEmitter<any>;
    @Output() popupHeightChange: EventEmitter<any>;
    @Output() popupWidthChange: EventEmitter<any>;
    @Output() pulledDownTextChange: EventEmitter<any>;
    @Output() pullingDownTextChange: EventEmitter<any>;
    @Output() pullRefreshEnabledChange: EventEmitter<any>;
    @Output() refreshingTextChange: EventEmitter<any>;
    @Output() searchPlaceholderChange: EventEmitter<any>;
    @Output() shadingChange: EventEmitter<any>;
    @Output() showCancelButtonChange: EventEmitter<any>;
    @Output() showNextButtonChange: EventEmitter<any>;
    @Output() showPopupTitleChange: EventEmitter<any>;
    @Output() titleChange: EventEmitter<any>;
    @Output() titleTemplateChange: EventEmitter<any>;
    @Output() useNativeScrollingChange: EventEmitter<any>;
    @Output() usePopoverChange: EventEmitter<any>;
    @Output() positionChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxLookup';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'pageLoading', emit: 'onPageLoading' },
            { subscribe: 'pullRefresh', emit: 'onPullRefresh' },
            { subscribe: 'scroll', emit: 'onScroll' },
            { subscribe: 'titleRendered', emit: 'onTitleRendered' },
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
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'attrChange' },
            { emit: 'placeholderChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'textChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'applyValueModeChange' },
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
            { emit: 'animationChange' },
            { emit: 'applyButtonTextChange' },
            { emit: 'cancelButtonTextChange' },
            { emit: 'cleanSearchOnOpeningChange' },
            { emit: 'clearButtonTextChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'fullScreenChange' },
            { emit: 'groupedChange' },
            { emit: 'groupTemplateChange' },
            { emit: 'nextButtonTextChange' },
            { emit: 'pageLoadingTextChange' },
            { emit: 'pageLoadModeChange' },
            { emit: 'popupHeightChange' },
            { emit: 'popupWidthChange' },
            { emit: 'pulledDownTextChange' },
            { emit: 'pullingDownTextChange' },
            { emit: 'pullRefreshEnabledChange' },
            { emit: 'refreshingTextChange' },
            { emit: 'searchPlaceholderChange' },
            { emit: 'shadingChange' },
            { emit: 'showCancelButtonChange' },
            { emit: 'showNextButtonChange' },
            { emit: 'showPopupTitleChange' },
            { emit: 'titleChange' },
            { emit: 'titleTemplateChange' },
            { emit: 'useNativeScrollingChange' },
            { emit: 'usePopoverChange' },
            { emit: 'positionChange' }
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
            'this.validationError',
            'this.validationMessageMode',
            'this.value',
            'this.attr',
            'this.placeholder',
            'this.showClearButton',
            'this.text',
            'this.valueChangeEvent',
            'this.applyValueMode',
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
            'this.animation',
            'this.applyButtonText',
            'this.cancelButtonText',
            'this.cleanSearchOnOpening',
            'this.clearButtonText',
            'this.closeOnOutsideClick',
            'this.fullScreen',
            'this.grouped',
            'this.groupTemplate',
            'this.nextButtonText',
            'this.pageLoadingText',
            'this.pageLoadMode',
            'this.popupHeight',
            'this.popupWidth',
            'this.pulledDownText',
            'this.pullingDownText',
            'this.pullRefreshEnabled',
            'this.refreshingText',
            'this.searchPlaceholder',
            'this.shading',
            'this.showCancelButton',
            'this.showNextButton',
            'this.showPopupTitle',
            'this.title',
            'this.titleTemplate',
            'this.useNativeScrolling',
            'this.usePopover',
            'this.position'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.onClosed = new EventEmitter();
        this.onOpened = new EventEmitter();
        this.onContentReady = new EventEmitter();
        this.onItemClick = new EventEmitter();
        this.onSelectionChanged = new EventEmitter();
        this.onPageLoading = new EventEmitter();
        this.onPullRefresh = new EventEmitter();
        this.onScroll = new EventEmitter();
        this.onTitleRendered = new EventEmitter();
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
        this.validationErrorChange = new EventEmitter();
        this.validationMessageModeChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.attrChange = new EventEmitter();
        this.placeholderChange = new EventEmitter();
        this.showClearButtonChange = new EventEmitter();
        this.textChange = new EventEmitter();
        this.valueChangeEventChange = new EventEmitter();
        this.applyValueModeChange = new EventEmitter();
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
        this.animationChange = new EventEmitter();
        this.applyButtonTextChange = new EventEmitter();
        this.cancelButtonTextChange = new EventEmitter();
        this.cleanSearchOnOpeningChange = new EventEmitter();
        this.clearButtonTextChange = new EventEmitter();
        this.closeOnOutsideClickChange = new EventEmitter();
        this.fullScreenChange = new EventEmitter();
        this.groupedChange = new EventEmitter();
        this.groupTemplateChange = new EventEmitter();
        this.nextButtonTextChange = new EventEmitter();
        this.pageLoadingTextChange = new EventEmitter();
        this.pageLoadModeChange = new EventEmitter();
        this.popupHeightChange = new EventEmitter();
        this.popupWidthChange = new EventEmitter();
        this.pulledDownTextChange = new EventEmitter();
        this.pullingDownTextChange = new EventEmitter();
        this.pullRefreshEnabledChange = new EventEmitter();
        this.refreshingTextChange = new EventEmitter();
        this.searchPlaceholderChange = new EventEmitter();
        this.shadingChange = new EventEmitter();
        this.showCancelButtonChange = new EventEmitter();
        this.showNextButtonChange = new EventEmitter();
        this.showPopupTitleChange = new EventEmitter();
        this.titleChange = new EventEmitter();
        this.titleTemplateChange = new EventEmitter();
        this.useNativeScrollingChange = new EventEmitter();
        this.usePopoverChange = new EventEmitter();
        this.positionChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        let widget = new DxLookup(element, options);
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
    useExisting: forwardRef(() => DxLookupValueAccessorDirective),
    multi: true
};

@Directive({
    selector: 'dx-lookup[formControlName],dx-lookup[formControl],dx-lookup[ngModel]',
    providers: [CUSTOM_VALUE_ACCESSOR]
})
export class DxLookupValueAccessorDirective implements ControlValueAccessor {
    @HostListener('valueChange', ['$event']) onChange(_) { }
    onTouched = () => {};

    constructor(private host: DxLookupComponent) { }

    writeValue(value: any): void {
        this.host.value = value;
    }

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}


@NgModule({
  declarations: [
    DxLookupComponent,
    DxLookupValueAccessorDirective
  ],
  exports: [
    DxLookupComponent,
    DxLookupValueAccessorDirective
  ],
})
export class DxLookupModule { }
