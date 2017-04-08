import { ElementRef, EventEmitter, NgZone, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxForm from 'devextreme/ui/form';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxFormComponent extends DxComponent implements OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxForm;
    height: any;
    rtlEnabled: any;
    width: any;
    accessKey: any;
    activeStateEnabled: any;
    disabled: any;
    focusStateEnabled: any;
    hint: any;
    hoverStateEnabled: any;
    tabIndex: any;
    visible: any;
    alignItemLabels: any;
    alignItemLabelsInAllGroups: any;
    colCount: any;
    colCountByScreen: any;
    customizeItem: any;
    formData: any;
    items: any;
    labelLocation: any;
    minColWidth: any;
    optionalMark: any;
    readOnly: any;
    requiredMark: any;
    requiredMessage: any;
    screenByWidth: any;
    scrollingEnabled: any;
    showColonAfterLabel: any;
    showOptionalMark: any;
    showRequiredMark: any;
    showValidationSummary: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    onContentReady: EventEmitter<any>;
    onEditorEnterKey: EventEmitter<any>;
    onFieldDataChanged: EventEmitter<any>;
    heightChange: EventEmitter<any>;
    rtlEnabledChange: EventEmitter<any>;
    widthChange: EventEmitter<any>;
    accessKeyChange: EventEmitter<any>;
    activeStateEnabledChange: EventEmitter<any>;
    disabledChange: EventEmitter<any>;
    focusStateEnabledChange: EventEmitter<any>;
    hintChange: EventEmitter<any>;
    hoverStateEnabledChange: EventEmitter<any>;
    tabIndexChange: EventEmitter<any>;
    visibleChange: EventEmitter<any>;
    alignItemLabelsChange: EventEmitter<any>;
    alignItemLabelsInAllGroupsChange: EventEmitter<any>;
    colCountChange: EventEmitter<any>;
    colCountByScreenChange: EventEmitter<any>;
    customizeItemChange: EventEmitter<any>;
    formDataChange: EventEmitter<any>;
    itemsChange: EventEmitter<any>;
    labelLocationChange: EventEmitter<any>;
    minColWidthChange: EventEmitter<any>;
    optionalMarkChange: EventEmitter<any>;
    readOnlyChange: EventEmitter<any>;
    requiredMarkChange: EventEmitter<any>;
    requiredMessageChange: EventEmitter<any>;
    screenByWidthChange: EventEmitter<any>;
    scrollingEnabledChange: EventEmitter<any>;
    showColonAfterLabelChange: EventEmitter<any>;
    showOptionalMarkChange: EventEmitter<any>;
    showRequiredMarkChange: EventEmitter<any>;
    showValidationSummaryChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper);
    protected _createInstance(element: any, options: any): DxForm;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
}
export declare class DxFormModule {
}