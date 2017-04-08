



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

import DxTreeView from 'devextreme/ui/tree_view';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-tree-view',
    template: '',
    providers: providers
})
export class DxTreeViewComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxTreeView;


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
    get disabledExpr(): any {
        return this._getOption('disabledExpr');
    }

    set disabledExpr(value: any) {
        this._setOption('disabledExpr', value);
    }

    @Input()
    get displayExpr(): any {
        return this._getOption('displayExpr');
    }

    set displayExpr(value: any) {
        this._setOption('displayExpr', value);
    }

    @Input()
    get itemsExpr(): any {
        return this._getOption('itemsExpr');
    }

    set itemsExpr(value: any) {
        this._setOption('itemsExpr', value);
    }

    @Input()
    get keyExpr(): any {
        return this._getOption('keyExpr');
    }

    set keyExpr(value: any) {
        this._setOption('keyExpr', value);
    }

    @Input()
    get selectedExpr(): any {
        return this._getOption('selectedExpr');
    }

    set selectedExpr(value: any) {
        this._setOption('selectedExpr', value);
    }

    @Input()
    get animationEnabled(): any {
        return this._getOption('animationEnabled');
    }

    set animationEnabled(value: any) {
        this._setOption('animationEnabled', value);
    }

    @Input()
    get createChildren(): any {
        return this._getOption('createChildren');
    }

    set createChildren(value: any) {
        this._setOption('createChildren', value);
    }

    @Input()
    get dataStructure(): any {
        return this._getOption('dataStructure');
    }

    set dataStructure(value: any) {
        this._setOption('dataStructure', value);
    }

    @Input()
    get expandAllEnabled(): any {
        return this._getOption('expandAllEnabled');
    }

    set expandAllEnabled(value: any) {
        this._setOption('expandAllEnabled', value);
    }

    @Input()
    get expandedExpr(): any {
        return this._getOption('expandedExpr');
    }

    set expandedExpr(value: any) {
        this._setOption('expandedExpr', value);
    }

    @Input()
    get expandNodesRecursive(): any {
        return this._getOption('expandNodesRecursive');
    }

    set expandNodesRecursive(value: any) {
        this._setOption('expandNodesRecursive', value);
    }

    @Input()
    get hasItemsExpr(): any {
        return this._getOption('hasItemsExpr');
    }

    set hasItemsExpr(value: any) {
        this._setOption('hasItemsExpr', value);
    }

    @Input()
    get parentIdExpr(): any {
        return this._getOption('parentIdExpr');
    }

    set parentIdExpr(value: any) {
        this._setOption('parentIdExpr', value);
    }

    @Input()
    get rootValue(): any {
        return this._getOption('rootValue');
    }

    set rootValue(value: any) {
        this._setOption('rootValue', value);
    }

    @Input()
    get scrollDirection(): any {
        return this._getOption('scrollDirection');
    }

    set scrollDirection(value: any) {
        this._setOption('scrollDirection', value);
    }

    @Input()
    get searchValue(): any {
        return this._getOption('searchValue');
    }

    set searchValue(value: any) {
        this._setOption('searchValue', value);
    }

    @Input()
    get selectAllEnabled(): any {
        return this._getOption('selectAllEnabled');
    }

    set selectAllEnabled(value: any) {
        this._setOption('selectAllEnabled', value);
    }

    @Input()
    get selectAllText(): any {
        return this._getOption('selectAllText');
    }

    set selectAllText(value: any) {
        this._setOption('selectAllText', value);
    }

    @Input()
    get selectByClick(): any {
        return this._getOption('selectByClick');
    }

    set selectByClick(value: any) {
        this._setOption('selectByClick', value);
    }

    @Input()
    get selectNodesRecursive(): any {
        return this._getOption('selectNodesRecursive');
    }

    set selectNodesRecursive(value: any) {
        this._setOption('selectNodesRecursive', value);
    }

    @Input()
    get showCheckBoxes(): any {
        return this._getOption('showCheckBoxes');
    }

    set showCheckBoxes(value: any) {
        this._setOption('showCheckBoxes', value);
    }

    @Input()
    get showCheckBoxesMode(): any {
        return this._getOption('showCheckBoxesMode');
    }

    set showCheckBoxesMode(value: any) {
        this._setOption('showCheckBoxesMode', value);
    }

    @Input()
    get virtualModeEnabled(): any {
        return this._getOption('virtualModeEnabled');
    }

    set virtualModeEnabled(value: any) {
        this._setOption('virtualModeEnabled', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onContentReady: EventEmitter<any>;
    @Output() onItemClick: EventEmitter<any>;
    @Output() onItemContextMenu: EventEmitter<any>;
    @Output() onItemHold: EventEmitter<any>;
    @Output() onItemRendered: EventEmitter<any>;
    @Output() onSelectionChanged: EventEmitter<any>;
    @Output() onItemCollapsed: EventEmitter<any>;
    @Output() onItemExpanded: EventEmitter<any>;
    @Output() onItemSelected: EventEmitter<any>;
    @Output() onItemSelectionChanged: EventEmitter<any>;
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
    @Output() selectionModeChange: EventEmitter<any>;
    @Output() itemsChange: EventEmitter<any>;
    @Output() disabledExprChange: EventEmitter<any>;
    @Output() displayExprChange: EventEmitter<any>;
    @Output() itemsExprChange: EventEmitter<any>;
    @Output() keyExprChange: EventEmitter<any>;
    @Output() selectedExprChange: EventEmitter<any>;
    @Output() animationEnabledChange: EventEmitter<any>;
    @Output() createChildrenChange: EventEmitter<any>;
    @Output() dataStructureChange: EventEmitter<any>;
    @Output() expandAllEnabledChange: EventEmitter<any>;
    @Output() expandedExprChange: EventEmitter<any>;
    @Output() expandNodesRecursiveChange: EventEmitter<any>;
    @Output() hasItemsExprChange: EventEmitter<any>;
    @Output() parentIdExprChange: EventEmitter<any>;
    @Output() rootValueChange: EventEmitter<any>;
    @Output() scrollDirectionChange: EventEmitter<any>;
    @Output() searchValueChange: EventEmitter<any>;
    @Output() selectAllEnabledChange: EventEmitter<any>;
    @Output() selectAllTextChange: EventEmitter<any>;
    @Output() selectByClickChange: EventEmitter<any>;
    @Output() selectNodesRecursiveChange: EventEmitter<any>;
    @Output() showCheckBoxesChange: EventEmitter<any>;
    @Output() showCheckBoxesModeChange: EventEmitter<any>;
    @Output() virtualModeEnabledChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxTreeView';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'itemCollapsed', emit: 'onItemCollapsed' },
            { subscribe: 'itemExpanded', emit: 'onItemExpanded' },
            { subscribe: 'itemSelected', emit: 'onItemSelected' },
            { subscribe: 'itemSelectionChanged', emit: 'onItemSelectionChanged' },
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
            { emit: 'selectionModeChange' },
            { emit: 'itemsChange' },
            { emit: 'disabledExprChange' },
            { emit: 'displayExprChange' },
            { emit: 'itemsExprChange' },
            { emit: 'keyExprChange' },
            { emit: 'selectedExprChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'createChildrenChange' },
            { emit: 'dataStructureChange' },
            { emit: 'expandAllEnabledChange' },
            { emit: 'expandedExprChange' },
            { emit: 'expandNodesRecursiveChange' },
            { emit: 'hasItemsExprChange' },
            { emit: 'parentIdExprChange' },
            { emit: 'rootValueChange' },
            { emit: 'scrollDirectionChange' },
            { emit: 'searchValueChange' },
            { emit: 'selectAllEnabledChange' },
            { emit: 'selectAllTextChange' },
            { emit: 'selectByClickChange' },
            { emit: 'selectNodesRecursiveChange' },
            { emit: 'showCheckBoxesChange' },
            { emit: 'showCheckBoxesModeChange' },
            { emit: 'virtualModeEnabledChange' }
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
            'this.selectionMode',
            'this.items',
            'this.disabledExpr',
            'this.displayExpr',
            'this.itemsExpr',
            'this.keyExpr',
            'this.selectedExpr',
            'this.animationEnabled',
            'this.createChildren',
            'this.dataStructure',
            'this.expandAllEnabled',
            'this.expandedExpr',
            'this.expandNodesRecursive',
            'this.hasItemsExpr',
            'this.parentIdExpr',
            'this.rootValue',
            'this.scrollDirection',
            'this.searchValue',
            'this.selectAllEnabled',
            'this.selectAllText',
            'this.selectByClick',
            'this.selectNodesRecursive',
            'this.showCheckBoxes',
            'this.showCheckBoxesMode',
            'this.virtualModeEnabled'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onContentReady = new EventEmitter();
        this.onItemClick = new EventEmitter();
        this.onItemContextMenu = new EventEmitter();
        this.onItemHold = new EventEmitter();
        this.onItemRendered = new EventEmitter();
        this.onSelectionChanged = new EventEmitter();
        this.onItemCollapsed = new EventEmitter();
        this.onItemExpanded = new EventEmitter();
        this.onItemSelected = new EventEmitter();
        this.onItemSelectionChanged = new EventEmitter();
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
        this.selectionModeChange = new EventEmitter();
        this.itemsChange = new EventEmitter();
        this.disabledExprChange = new EventEmitter();
        this.displayExprChange = new EventEmitter();
        this.itemsExprChange = new EventEmitter();
        this.keyExprChange = new EventEmitter();
        this.selectedExprChange = new EventEmitter();
        this.animationEnabledChange = new EventEmitter();
        this.createChildrenChange = new EventEmitter();
        this.dataStructureChange = new EventEmitter();
        this.expandAllEnabledChange = new EventEmitter();
        this.expandedExprChange = new EventEmitter();
        this.expandNodesRecursiveChange = new EventEmitter();
        this.hasItemsExprChange = new EventEmitter();
        this.parentIdExprChange = new EventEmitter();
        this.rootValueChange = new EventEmitter();
        this.scrollDirectionChange = new EventEmitter();
        this.searchValueChange = new EventEmitter();
        this.selectAllEnabledChange = new EventEmitter();
        this.selectAllTextChange = new EventEmitter();
        this.selectByClickChange = new EventEmitter();
        this.selectNodesRecursiveChange = new EventEmitter();
        this.showCheckBoxesChange = new EventEmitter();
        this.showCheckBoxesModeChange = new EventEmitter();
        this.virtualModeEnabledChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxTreeView(element, options);
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



@NgModule({
  declarations: [
    DxTreeViewComponent
  ],
  exports: [
    DxTreeViewComponent
  ],
})
export class DxTreeViewModule { }
