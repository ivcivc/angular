



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

import DxForm from 'devextreme/ui/form';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-form',
    template: '',
    providers: providers
})
export class DxFormComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxForm;


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
    get alignItemLabels(): any {
        return this._getOption('alignItemLabels');
    }

    set alignItemLabels(value: any) {
        this._setOption('alignItemLabels', value);
    }

    @Input()
    get alignItemLabelsInAllGroups(): any {
        return this._getOption('alignItemLabelsInAllGroups');
    }

    set alignItemLabelsInAllGroups(value: any) {
        this._setOption('alignItemLabelsInAllGroups', value);
    }

    @Input()
    get colCount(): any {
        return this._getOption('colCount');
    }

    set colCount(value: any) {
        this._setOption('colCount', value);
    }

    @Input()
    get colCountByScreen(): any {
        return this._getOption('colCountByScreen');
    }

    set colCountByScreen(value: any) {
        this._setOption('colCountByScreen', value);
    }

    @Input()
    get customizeItem(): any {
        return this._getOption('customizeItem');
    }

    set customizeItem(value: any) {
        this._setOption('customizeItem', value);
    }

    @Input()
    get formData(): any {
        return this._getOption('formData');
    }

    set formData(value: any) {
        this._setOption('formData', value);
    }

    @Input()
    get items(): any {
        return this._getOption('items');
    }

    set items(value: any) {
        this._setOption('items', value);
    }

    @Input()
    get labelLocation(): any {
        return this._getOption('labelLocation');
    }

    set labelLocation(value: any) {
        this._setOption('labelLocation', value);
    }

    @Input()
    get minColWidth(): any {
        return this._getOption('minColWidth');
    }

    set minColWidth(value: any) {
        this._setOption('minColWidth', value);
    }

    @Input()
    get optionalMark(): any {
        return this._getOption('optionalMark');
    }

    set optionalMark(value: any) {
        this._setOption('optionalMark', value);
    }

    @Input()
    get readOnly(): any {
        return this._getOption('readOnly');
    }

    set readOnly(value: any) {
        this._setOption('readOnly', value);
    }

    @Input()
    get requiredMark(): any {
        return this._getOption('requiredMark');
    }

    set requiredMark(value: any) {
        this._setOption('requiredMark', value);
    }

    @Input()
    get requiredMessage(): any {
        return this._getOption('requiredMessage');
    }

    set requiredMessage(value: any) {
        this._setOption('requiredMessage', value);
    }

    @Input()
    get screenByWidth(): any {
        return this._getOption('screenByWidth');
    }

    set screenByWidth(value: any) {
        this._setOption('screenByWidth', value);
    }

    @Input()
    get scrollingEnabled(): any {
        return this._getOption('scrollingEnabled');
    }

    set scrollingEnabled(value: any) {
        this._setOption('scrollingEnabled', value);
    }

    @Input()
    get showColonAfterLabel(): any {
        return this._getOption('showColonAfterLabel');
    }

    set showColonAfterLabel(value: any) {
        this._setOption('showColonAfterLabel', value);
    }

    @Input()
    get showOptionalMark(): any {
        return this._getOption('showOptionalMark');
    }

    set showOptionalMark(value: any) {
        this._setOption('showOptionalMark', value);
    }

    @Input()
    get showRequiredMark(): any {
        return this._getOption('showRequiredMark');
    }

    set showRequiredMark(value: any) {
        this._setOption('showRequiredMark', value);
    }

    @Input()
    get showValidationSummary(): any {
        return this._getOption('showValidationSummary');
    }

    set showValidationSummary(value: any) {
        this._setOption('showValidationSummary', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onContentReady: EventEmitter<any>;
    @Output() onEditorEnterKey: EventEmitter<any>;
    @Output() onFieldDataChanged: EventEmitter<any>;
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
    @Output() alignItemLabelsChange: EventEmitter<any>;
    @Output() alignItemLabelsInAllGroupsChange: EventEmitter<any>;
    @Output() colCountChange: EventEmitter<any>;
    @Output() colCountByScreenChange: EventEmitter<any>;
    @Output() customizeItemChange: EventEmitter<any>;
    @Output() formDataChange: EventEmitter<any>;
    @Output() itemsChange: EventEmitter<any>;
    @Output() labelLocationChange: EventEmitter<any>;
    @Output() minColWidthChange: EventEmitter<any>;
    @Output() optionalMarkChange: EventEmitter<any>;
    @Output() readOnlyChange: EventEmitter<any>;
    @Output() requiredMarkChange: EventEmitter<any>;
    @Output() requiredMessageChange: EventEmitter<any>;
    @Output() screenByWidthChange: EventEmitter<any>;
    @Output() scrollingEnabledChange: EventEmitter<any>;
    @Output() showColonAfterLabelChange: EventEmitter<any>;
    @Output() showOptionalMarkChange: EventEmitter<any>;
    @Output() showRequiredMarkChange: EventEmitter<any>;
    @Output() showValidationSummaryChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxForm';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'editorEnterKey', emit: 'onEditorEnterKey' },
            { subscribe: 'fieldDataChanged', emit: 'onFieldDataChanged' },
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
            { emit: 'alignItemLabelsChange' },
            { emit: 'alignItemLabelsInAllGroupsChange' },
            { emit: 'colCountChange' },
            { emit: 'colCountByScreenChange' },
            { emit: 'customizeItemChange' },
            { emit: 'formDataChange' },
            { emit: 'itemsChange' },
            { emit: 'labelLocationChange' },
            { emit: 'minColWidthChange' },
            { emit: 'optionalMarkChange' },
            { emit: 'readOnlyChange' },
            { emit: 'requiredMarkChange' },
            { emit: 'requiredMessageChange' },
            { emit: 'screenByWidthChange' },
            { emit: 'scrollingEnabledChange' },
            { emit: 'showColonAfterLabelChange' },
            { emit: 'showOptionalMarkChange' },
            { emit: 'showRequiredMarkChange' },
            { emit: 'showValidationSummaryChange' }
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
            'this.alignItemLabels',
            'this.alignItemLabelsInAllGroups',
            'this.colCount',
            'this.colCountByScreen',
            'this.customizeItem',
            'this.formData',
            'this.items',
            'this.labelLocation',
            'this.minColWidth',
            'this.optionalMark',
            'this.readOnly',
            'this.requiredMark',
            'this.requiredMessage',
            'this.screenByWidth',
            'this.scrollingEnabled',
            'this.showColonAfterLabel',
            'this.showOptionalMark',
            'this.showRequiredMark',
            'this.showValidationSummary'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onContentReady = new EventEmitter();
        this.onEditorEnterKey = new EventEmitter();
        this.onFieldDataChanged = new EventEmitter();
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
        this.alignItemLabelsChange = new EventEmitter();
        this.alignItemLabelsInAllGroupsChange = new EventEmitter();
        this.colCountChange = new EventEmitter();
        this.colCountByScreenChange = new EventEmitter();
        this.customizeItemChange = new EventEmitter();
        this.formDataChange = new EventEmitter();
        this.itemsChange = new EventEmitter();
        this.labelLocationChange = new EventEmitter();
        this.minColWidthChange = new EventEmitter();
        this.optionalMarkChange = new EventEmitter();
        this.readOnlyChange = new EventEmitter();
        this.requiredMarkChange = new EventEmitter();
        this.requiredMessageChange = new EventEmitter();
        this.screenByWidthChange = new EventEmitter();
        this.scrollingEnabledChange = new EventEmitter();
        this.showColonAfterLabelChange = new EventEmitter();
        this.showOptionalMarkChange = new EventEmitter();
        this.showRequiredMarkChange = new EventEmitter();
        this.showValidationSummaryChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxForm(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('items', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxFormComponent
  ],
  exports: [
    DxFormComponent
  ],
})
export class DxFormModule { }
