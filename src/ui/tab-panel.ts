



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

import DxTabPanel from 'devextreme/ui/tab_panel';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-tab-panel',
    template: '',
    providers: providers
})
export class DxTabPanelComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxTabPanel;


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
    get selectedIndex(): any {
        return this._getOption('selectedIndex');
    }

    set selectedIndex(value: any) {
        this._setOption('selectedIndex', value);
    }

    @Input()
    get selectedItem(): any {
        return this._getOption('selectedItem');
    }

    set selectedItem(value: any) {
        this._setOption('selectedItem', value);
    }

    @Input()
    get items(): any {
        return this._getOption('items');
    }

    set items(value: any) {
        this._setOption('items', value);
    }

    @Input()
    get animationEnabled(): any {
        return this._getOption('animationEnabled');
    }

    set animationEnabled(value: any) {
        this._setOption('animationEnabled', value);
    }

    @Input()
    get deferRendering(): any {
        return this._getOption('deferRendering');
    }

    set deferRendering(value: any) {
        this._setOption('deferRendering', value);
    }

    @Input()
    get loop(): any {
        return this._getOption('loop');
    }

    set loop(value: any) {
        this._setOption('loop', value);
    }

    @Input()
    get swipeEnabled(): any {
        return this._getOption('swipeEnabled');
    }

    set swipeEnabled(value: any) {
        this._setOption('swipeEnabled', value);
    }

    @Input()
    get itemTitleTemplate(): any {
        return this._getOption('itemTitleTemplate');
    }

    set itemTitleTemplate(value: any) {
        this._setOption('itemTitleTemplate', value);
    }

    @Input()
    get scrollByContent(): any {
        return this._getOption('scrollByContent');
    }

    set scrollByContent(value: any) {
        this._setOption('scrollByContent', value);
    }

    @Input()
    get scrollingEnabled(): any {
        return this._getOption('scrollingEnabled');
    }

    set scrollingEnabled(value: any) {
        this._setOption('scrollingEnabled', value);
    }

    @Input()
    get showNavButtons(): any {
        return this._getOption('showNavButtons');
    }

    set showNavButtons(value: any) {
        this._setOption('showNavButtons', value);
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
    @Output() onTitleClick: EventEmitter<any>;
    @Output() onTitleHold: EventEmitter<any>;
    @Output() onTitleRendered: EventEmitter<any>;
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
    @Output() selectedIndexChange: EventEmitter<any>;
    @Output() selectedItemChange: EventEmitter<any>;
    @Output() itemsChange: EventEmitter<any>;
    @Output() animationEnabledChange: EventEmitter<any>;
    @Output() deferRenderingChange: EventEmitter<any>;
    @Output() loopChange: EventEmitter<any>;
    @Output() swipeEnabledChange: EventEmitter<any>;
    @Output() itemTitleTemplateChange: EventEmitter<any>;
    @Output() scrollByContentChange: EventEmitter<any>;
    @Output() scrollingEnabledChange: EventEmitter<any>;
    @Output() showNavButtonsChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxTabPanel';
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
            { subscribe: 'titleClick', emit: 'onTitleClick' },
            { subscribe: 'titleHold', emit: 'onTitleHold' },
            { subscribe: 'titleRendered', emit: 'onTitleRendered' },
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
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' },
            { emit: 'itemsChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'loopChange' },
            { emit: 'swipeEnabledChange' },
            { emit: 'itemTitleTemplateChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollingEnabledChange' },
            { emit: 'showNavButtonsChange' }
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
            'this.selectedIndex',
            'this.selectedItem',
            'this.items',
            'this.animationEnabled',
            'this.deferRendering',
            'this.loop',
            'this.swipeEnabled',
            'this.itemTitleTemplate',
            'this.scrollByContent',
            'this.scrollingEnabled',
            'this.showNavButtons'
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
        this.onTitleClick = new EventEmitter();
        this.onTitleHold = new EventEmitter();
        this.onTitleRendered = new EventEmitter();
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
        this.selectedIndexChange = new EventEmitter();
        this.selectedItemChange = new EventEmitter();
        this.itemsChange = new EventEmitter();
        this.animationEnabledChange = new EventEmitter();
        this.deferRenderingChange = new EventEmitter();
        this.loopChange = new EventEmitter();
        this.swipeEnabledChange = new EventEmitter();
        this.itemTitleTemplateChange = new EventEmitter();
        this.scrollByContentChange = new EventEmitter();
        this.scrollingEnabledChange = new EventEmitter();
        this.showNavButtonsChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxTabPanel(element, options);
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
    DxTabPanelComponent
  ],
  exports: [
    DxTabPanelComponent
  ],
})
export class DxTabPanelModule { }
