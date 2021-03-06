import { ElementRef, EventEmitter, NgZone, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxList from 'devextreme/ui/list';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxListComponent extends DxComponent implements OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxList;
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
    dataSource: any;
    itemHoldTimeout: any;
    itemTemplate: any;
    noDataText: any;
    selectedItems: any;
    selectionMode: any;
    items: any;
    allowItemDeleting: any;
    allowItemReordering: any;
    autoPagingEnabled: any;
    bounceEnabled: any;
    collapsibleGroups: any;
    grouped: any;
    groupTemplate: any;
    indicateLoading: any;
    itemDeleteMode: any;
    menuItems: any;
    menuMode: any;
    nextButtonText: any;
    pageLoadingText: any;
    pageLoadMode: any;
    pulledDownText: any;
    pullingDownText: any;
    pullRefreshEnabled: any;
    refreshingText: any;
    scrollByContent: any;
    scrollByThumb: any;
    scrollingEnabled: any;
    showNextButton: any;
    showScrollbar: any;
    showSelectionControls: any;
    useNativeScrolling: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    onContentReady: EventEmitter<any>;
    onItemClick: EventEmitter<any>;
    onItemContextMenu: EventEmitter<any>;
    onItemDeleted: EventEmitter<any>;
    onItemDeleting: EventEmitter<any>;
    onItemHold: EventEmitter<any>;
    onItemRendered: EventEmitter<any>;
    onItemReordered: EventEmitter<any>;
    onSelectionChanged: EventEmitter<any>;
    onGroupRendered: EventEmitter<any>;
    onItemSwipe: EventEmitter<any>;
    onPageLoading: EventEmitter<any>;
    onPullRefresh: EventEmitter<any>;
    onScroll: EventEmitter<any>;
    onSelectAllValueChanged: EventEmitter<any>;
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
    dataSourceChange: EventEmitter<any>;
    itemHoldTimeoutChange: EventEmitter<any>;
    itemTemplateChange: EventEmitter<any>;
    noDataTextChange: EventEmitter<any>;
    selectedItemsChange: EventEmitter<any>;
    selectionModeChange: EventEmitter<any>;
    itemsChange: EventEmitter<any>;
    allowItemDeletingChange: EventEmitter<any>;
    allowItemReorderingChange: EventEmitter<any>;
    autoPagingEnabledChange: EventEmitter<any>;
    bounceEnabledChange: EventEmitter<any>;
    collapsibleGroupsChange: EventEmitter<any>;
    groupedChange: EventEmitter<any>;
    groupTemplateChange: EventEmitter<any>;
    indicateLoadingChange: EventEmitter<any>;
    itemDeleteModeChange: EventEmitter<any>;
    menuItemsChange: EventEmitter<any>;
    menuModeChange: EventEmitter<any>;
    nextButtonTextChange: EventEmitter<any>;
    pageLoadingTextChange: EventEmitter<any>;
    pageLoadModeChange: EventEmitter<any>;
    pulledDownTextChange: EventEmitter<any>;
    pullingDownTextChange: EventEmitter<any>;
    pullRefreshEnabledChange: EventEmitter<any>;
    refreshingTextChange: EventEmitter<any>;
    scrollByContentChange: EventEmitter<any>;
    scrollByThumbChange: EventEmitter<any>;
    scrollingEnabledChange: EventEmitter<any>;
    showNextButtonChange: EventEmitter<any>;
    showScrollbarChange: EventEmitter<any>;
    showSelectionControlsChange: EventEmitter<any>;
    useNativeScrollingChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper);
    protected _createInstance(element: any, options: any): DxList;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
}
export declare class DxListModule {
}
