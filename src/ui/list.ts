



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

import DxList from 'devextreme/ui/list';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-list',
    template: '',
    providers: providers
})
export class DxListComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxList;


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
    get dataSource(): any {
        return this._getOption('dataSource');
    }

    set dataSource(value: any) {
        this._setOption('dataSource', value);
    }

    @Input()
    get itemHoldTimeout(): any {
        return this._getOption('itemHoldTimeout');
    }

    set itemHoldTimeout(value: any) {
        this._setOption('itemHoldTimeout', value);
    }

    @Input()
    get itemTemplate(): any {
        return this._getOption('itemTemplate');
    }

    set itemTemplate(value: any) {
        this._setOption('itemTemplate', value);
    }

    @Input()
    get noDataText(): any {
        return this._getOption('noDataText');
    }

    set noDataText(value: any) {
        this._setOption('noDataText', value);
    }

    @Input()
    get selectedItems(): any {
        return this._getOption('selectedItems');
    }

    set selectedItems(value: any) {
        this._setOption('selectedItems', value);
    }

    @Input()
    get selectionMode(): any {
        return this._getOption('selectionMode');
    }

    set selectionMode(value: any) {
        this._setOption('selectionMode', value);
    }

    @Input()
    get items(): any {
        return this._getOption('items');
    }

    set items(value: any) {
        this._setOption('items', value);
    }

    @Input()
    get allowItemDeleting(): any {
        return this._getOption('allowItemDeleting');
    }

    set allowItemDeleting(value: any) {
        this._setOption('allowItemDeleting', value);
    }

    @Input()
    get allowItemReordering(): any {
        return this._getOption('allowItemReordering');
    }

    set allowItemReordering(value: any) {
        this._setOption('allowItemReordering', value);
    }

    @Input()
    get autoPagingEnabled(): any {
        return this._getOption('autoPagingEnabled');
    }

    set autoPagingEnabled(value: any) {
        this._setOption('autoPagingEnabled', value);
    }

    @Input()
    get bounceEnabled(): any {
        return this._getOption('bounceEnabled');
    }

    set bounceEnabled(value: any) {
        this._setOption('bounceEnabled', value);
    }

    @Input()
    get collapsibleGroups(): any {
        return this._getOption('collapsibleGroups');
    }

    set collapsibleGroups(value: any) {
        this._setOption('collapsibleGroups', value);
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
    get indicateLoading(): any {
        return this._getOption('indicateLoading');
    }

    set indicateLoading(value: any) {
        this._setOption('indicateLoading', value);
    }

    @Input()
    get itemDeleteMode(): any {
        return this._getOption('itemDeleteMode');
    }

    set itemDeleteMode(value: any) {
        this._setOption('itemDeleteMode', value);
    }

    @Input()
    get menuItems(): any {
        return this._getOption('menuItems');
    }

    set menuItems(value: any) {
        this._setOption('menuItems', value);
    }

    @Input()
    get menuMode(): any {
        return this._getOption('menuMode');
    }

    set menuMode(value: any) {
        this._setOption('menuMode', value);
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
    get scrollByContent(): any {
        return this._getOption('scrollByContent');
    }

    set scrollByContent(value: any) {
        this._setOption('scrollByContent', value);
    }

    @Input()
    get scrollByThumb(): any {
        return this._getOption('scrollByThumb');
    }

    set scrollByThumb(value: any) {
        this._setOption('scrollByThumb', value);
    }

    @Input()
    get scrollingEnabled(): any {
        return this._getOption('scrollingEnabled');
    }

    set scrollingEnabled(value: any) {
        this._setOption('scrollingEnabled', value);
    }

    @Input()
    get showNextButton(): any {
        return this._getOption('showNextButton');
    }

    set showNextButton(value: any) {
        this._setOption('showNextButton', value);
    }

    @Input()
    get showScrollbar(): any {
        return this._getOption('showScrollbar');
    }

    set showScrollbar(value: any) {
        this._setOption('showScrollbar', value);
    }

    @Input()
    get showSelectionControls(): any {
        return this._getOption('showSelectionControls');
    }

    set showSelectionControls(value: any) {
        this._setOption('showSelectionControls', value);
    }

    @Input()
    get useNativeScrolling(): any {
        return this._getOption('useNativeScrolling');
    }

    set useNativeScrolling(value: any) {
        this._setOption('useNativeScrolling', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onContentReady: EventEmitter<any>;
    @Output() onItemClick: EventEmitter<any>;
    @Output() onItemContextMenu: EventEmitter<any>;
    @Output() onItemDeleted: EventEmitter<any>;
    @Output() onItemDeleting: EventEmitter<any>;
    @Output() onItemHold: EventEmitter<any>;
    @Output() onItemRendered: EventEmitter<any>;
    @Output() onItemReordered: EventEmitter<any>;
    @Output() onSelectionChanged: EventEmitter<any>;
    @Output() onGroupRendered: EventEmitter<any>;
    @Output() onItemSwipe: EventEmitter<any>;
    @Output() onPageLoading: EventEmitter<any>;
    @Output() onPullRefresh: EventEmitter<any>;
    @Output() onScroll: EventEmitter<any>;
    @Output() onSelectAllValueChanged: EventEmitter<any>;
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
    @Output() dataSourceChange: EventEmitter<any>;
    @Output() itemHoldTimeoutChange: EventEmitter<any>;
    @Output() itemTemplateChange: EventEmitter<any>;
    @Output() noDataTextChange: EventEmitter<any>;
    @Output() selectedItemsChange: EventEmitter<any>;
    @Output() selectionModeChange: EventEmitter<any>;
    @Output() itemsChange: EventEmitter<any>;
    @Output() allowItemDeletingChange: EventEmitter<any>;
    @Output() allowItemReorderingChange: EventEmitter<any>;
    @Output() autoPagingEnabledChange: EventEmitter<any>;
    @Output() bounceEnabledChange: EventEmitter<any>;
    @Output() collapsibleGroupsChange: EventEmitter<any>;
    @Output() groupedChange: EventEmitter<any>;
    @Output() groupTemplateChange: EventEmitter<any>;
    @Output() indicateLoadingChange: EventEmitter<any>;
    @Output() itemDeleteModeChange: EventEmitter<any>;
    @Output() menuItemsChange: EventEmitter<any>;
    @Output() menuModeChange: EventEmitter<any>;
    @Output() nextButtonTextChange: EventEmitter<any>;
    @Output() pageLoadingTextChange: EventEmitter<any>;
    @Output() pageLoadModeChange: EventEmitter<any>;
    @Output() pulledDownTextChange: EventEmitter<any>;
    @Output() pullingDownTextChange: EventEmitter<any>;
    @Output() pullRefreshEnabledChange: EventEmitter<any>;
    @Output() refreshingTextChange: EventEmitter<any>;
    @Output() scrollByContentChange: EventEmitter<any>;
    @Output() scrollByThumbChange: EventEmitter<any>;
    @Output() scrollingEnabledChange: EventEmitter<any>;
    @Output() showNextButtonChange: EventEmitter<any>;
    @Output() showScrollbarChange: EventEmitter<any>;
    @Output() showSelectionControlsChange: EventEmitter<any>;
    @Output() useNativeScrollingChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxList';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemDeleted', emit: 'onItemDeleted' },
            { subscribe: 'itemDeleting', emit: 'onItemDeleting' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'itemReordered', emit: 'onItemReordered' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'groupRendered', emit: 'onGroupRendered' },
            { subscribe: 'itemSwipe', emit: 'onItemSwipe' },
            { subscribe: 'pageLoading', emit: 'onPageLoading' },
            { subscribe: 'pullRefresh', emit: 'onPullRefresh' },
            { subscribe: 'scroll', emit: 'onScroll' },
            { subscribe: 'selectAllValueChanged', emit: 'onSelectAllValueChanged' },
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
            { emit: 'dataSourceChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'noDataTextChange' },
            { emit: 'selectedItemsChange' },
            { emit: 'selectionModeChange' },
            { emit: 'itemsChange' },
            { emit: 'allowItemDeletingChange' },
            { emit: 'allowItemReorderingChange' },
            { emit: 'autoPagingEnabledChange' },
            { emit: 'bounceEnabledChange' },
            { emit: 'collapsibleGroupsChange' },
            { emit: 'groupedChange' },
            { emit: 'groupTemplateChange' },
            { emit: 'indicateLoadingChange' },
            { emit: 'itemDeleteModeChange' },
            { emit: 'menuItemsChange' },
            { emit: 'menuModeChange' },
            { emit: 'nextButtonTextChange' },
            { emit: 'pageLoadingTextChange' },
            { emit: 'pageLoadModeChange' },
            { emit: 'pulledDownTextChange' },
            { emit: 'pullingDownTextChange' },
            { emit: 'pullRefreshEnabledChange' },
            { emit: 'refreshingTextChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollByThumbChange' },
            { emit: 'scrollingEnabledChange' },
            { emit: 'showNextButtonChange' },
            { emit: 'showScrollbarChange' },
            { emit: 'showSelectionControlsChange' },
            { emit: 'useNativeScrollingChange' }
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
            'this.dataSource',
            'this.itemHoldTimeout',
            'this.itemTemplate',
            'this.noDataText',
            'this.selectedItems',
            'this.selectionMode',
            'this.items',
            'this.allowItemDeleting',
            'this.allowItemReordering',
            'this.autoPagingEnabled',
            'this.bounceEnabled',
            'this.collapsibleGroups',
            'this.grouped',
            'this.groupTemplate',
            'this.indicateLoading',
            'this.itemDeleteMode',
            'this.menuItems',
            'this.menuMode',
            'this.nextButtonText',
            'this.pageLoadingText',
            'this.pageLoadMode',
            'this.pulledDownText',
            'this.pullingDownText',
            'this.pullRefreshEnabled',
            'this.refreshingText',
            'this.scrollByContent',
            'this.scrollByThumb',
            'this.scrollingEnabled',
            'this.showNextButton',
            'this.showScrollbar',
            'this.showSelectionControls',
            'this.useNativeScrolling'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onContentReady = new EventEmitter();
        this.onItemClick = new EventEmitter();
        this.onItemContextMenu = new EventEmitter();
        this.onItemDeleted = new EventEmitter();
        this.onItemDeleting = new EventEmitter();
        this.onItemHold = new EventEmitter();
        this.onItemRendered = new EventEmitter();
        this.onItemReordered = new EventEmitter();
        this.onSelectionChanged = new EventEmitter();
        this.onGroupRendered = new EventEmitter();
        this.onItemSwipe = new EventEmitter();
        this.onPageLoading = new EventEmitter();
        this.onPullRefresh = new EventEmitter();
        this.onScroll = new EventEmitter();
        this.onSelectAllValueChanged = new EventEmitter();
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
        this.dataSourceChange = new EventEmitter();
        this.itemHoldTimeoutChange = new EventEmitter();
        this.itemTemplateChange = new EventEmitter();
        this.noDataTextChange = new EventEmitter();
        this.selectedItemsChange = new EventEmitter();
        this.selectionModeChange = new EventEmitter();
        this.itemsChange = new EventEmitter();
        this.allowItemDeletingChange = new EventEmitter();
        this.allowItemReorderingChange = new EventEmitter();
        this.autoPagingEnabledChange = new EventEmitter();
        this.bounceEnabledChange = new EventEmitter();
        this.collapsibleGroupsChange = new EventEmitter();
        this.groupedChange = new EventEmitter();
        this.groupTemplateChange = new EventEmitter();
        this.indicateLoadingChange = new EventEmitter();
        this.itemDeleteModeChange = new EventEmitter();
        this.menuItemsChange = new EventEmitter();
        this.menuModeChange = new EventEmitter();
        this.nextButtonTextChange = new EventEmitter();
        this.pageLoadingTextChange = new EventEmitter();
        this.pageLoadModeChange = new EventEmitter();
        this.pulledDownTextChange = new EventEmitter();
        this.pullingDownTextChange = new EventEmitter();
        this.pullRefreshEnabledChange = new EventEmitter();
        this.refreshingTextChange = new EventEmitter();
        this.scrollByContentChange = new EventEmitter();
        this.scrollByThumbChange = new EventEmitter();
        this.scrollingEnabledChange = new EventEmitter();
        this.showNextButtonChange = new EventEmitter();
        this.showScrollbarChange = new EventEmitter();
        this.showSelectionControlsChange = new EventEmitter();
        this.useNativeScrollingChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxList(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('selectedItems', changes);
        this._idh.setup('items', changes);
        this._idh.setup('menuItems', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('selectedItems');
        this._idh.doCheck('items');
        this._idh.doCheck('menuItems');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxListComponent
  ],
  exports: [
    DxListComponent
  ],
})
export class DxListModule { }
