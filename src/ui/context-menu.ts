



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

import DxContextMenu from 'devextreme/ui/context_menu';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-context-menu',
    template: '',
    providers: providers
})
export class DxContextMenuComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxContextMenu;


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
    get itemTemplate(): any {
        return this._getOption('itemTemplate');
    }

    set itemTemplate(value: any) {
        this._setOption('itemTemplate', value);
    }

    @Input()
    get selectedItem(): any {
        return this._getOption('selectedItem');
    }

    set selectedItem(value: any) {
        this._setOption('selectedItem', value);
    }

    @Input()
    get selectedItems(): any {
        return this._getOption('selectedItems');
    }

    set selectedItems(value: any) {
        this._setOption('selectedItems', value);
    }

    @Input()
    get selectionByClick(): any {
        return this._getOption('selectionByClick');
    }

    set selectionByClick(value: any) {
        this._setOption('selectionByClick', value);
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
    get selectedExpr(): any {
        return this._getOption('selectedExpr');
    }

    set selectedExpr(value: any) {
        this._setOption('selectedExpr', value);
    }

    @Input()
    get animation(): any {
        return this._getOption('animation');
    }

    set animation(value: any) {
        this._setOption('animation', value);
    }

    @Input()
    get cssClass(): any {
        return this._getOption('cssClass');
    }

    set cssClass(value: any) {
        this._setOption('cssClass', value);
    }

    @Input()
    get selectByClick(): any {
        return this._getOption('selectByClick');
    }

    set selectByClick(value: any) {
        this._setOption('selectByClick', value);
    }

    @Input()
    get showSubmenuMode(): any {
        return this._getOption('showSubmenuMode');
    }

    set showSubmenuMode(value: any) {
        this._setOption('showSubmenuMode', value);
    }

    @Input()
    get closeOnOutsideClick(): any {
        return this._getOption('closeOnOutsideClick');
    }

    set closeOnOutsideClick(value: any) {
        this._setOption('closeOnOutsideClick', value);
    }

    @Input()
    get showEvent(): any {
        return this._getOption('showEvent');
    }

    set showEvent(value: any) {
        this._setOption('showEvent', value);
    }

    @Input()
    get submenuDirection(): any {
        return this._getOption('submenuDirection');
    }

    set submenuDirection(value: any) {
        this._setOption('submenuDirection', value);
    }

    @Input()
    get target(): any {
        return this._getOption('target');
    }

    set target(value: any) {
        this._setOption('target', value);
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
    @Output() onContentReady: EventEmitter<any>;
    @Output() onItemClick: EventEmitter<any>;
    @Output() onItemContextMenu: EventEmitter<any>;
    @Output() onItemRendered: EventEmitter<any>;
    @Output() onSelectionChanged: EventEmitter<any>;
    @Output() onHidden: EventEmitter<any>;
    @Output() onHiding: EventEmitter<any>;
    @Output() onPositioning: EventEmitter<any>;
    @Output() onShowing: EventEmitter<any>;
    @Output() onShown: EventEmitter<any>;
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
    @Output() itemTemplateChange: EventEmitter<any>;
    @Output() selectedItemChange: EventEmitter<any>;
    @Output() selectedItemsChange: EventEmitter<any>;
    @Output() selectionByClickChange: EventEmitter<any>;
    @Output() selectionModeChange: EventEmitter<any>;
    @Output() itemsChange: EventEmitter<any>;
    @Output() disabledExprChange: EventEmitter<any>;
    @Output() displayExprChange: EventEmitter<any>;
    @Output() itemsExprChange: EventEmitter<any>;
    @Output() selectedExprChange: EventEmitter<any>;
    @Output() animationChange: EventEmitter<any>;
    @Output() cssClassChange: EventEmitter<any>;
    @Output() selectByClickChange: EventEmitter<any>;
    @Output() showSubmenuModeChange: EventEmitter<any>;
    @Output() closeOnOutsideClickChange: EventEmitter<any>;
    @Output() showEventChange: EventEmitter<any>;
    @Output() submenuDirectionChange: EventEmitter<any>;
    @Output() targetChange: EventEmitter<any>;
    @Output() positionChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxContextMenu';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'positioning', emit: 'onPositioning' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
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
            { emit: 'itemTemplateChange' },
            { emit: 'selectedItemChange' },
            { emit: 'selectedItemsChange' },
            { emit: 'selectionByClickChange' },
            { emit: 'selectionModeChange' },
            { emit: 'itemsChange' },
            { emit: 'disabledExprChange' },
            { emit: 'displayExprChange' },
            { emit: 'itemsExprChange' },
            { emit: 'selectedExprChange' },
            { emit: 'animationChange' },
            { emit: 'cssClassChange' },
            { emit: 'selectByClickChange' },
            { emit: 'showSubmenuModeChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'showEventChange' },
            { emit: 'submenuDirectionChange' },
            { emit: 'targetChange' },
            { emit: 'positionChange' }
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
            'this.itemTemplate',
            'this.selectedItem',
            'this.selectedItems',
            'this.selectionByClick',
            'this.selectionMode',
            'this.items',
            'this.disabledExpr',
            'this.displayExpr',
            'this.itemsExpr',
            'this.selectedExpr',
            'this.animation',
            'this.cssClass',
            'this.selectByClick',
            'this.showSubmenuMode',
            'this.closeOnOutsideClick',
            'this.showEvent',
            'this.submenuDirection',
            'this.target',
            'this.position'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onContentReady = new EventEmitter();
        this.onItemClick = new EventEmitter();
        this.onItemContextMenu = new EventEmitter();
        this.onItemRendered = new EventEmitter();
        this.onSelectionChanged = new EventEmitter();
        this.onHidden = new EventEmitter();
        this.onHiding = new EventEmitter();
        this.onPositioning = new EventEmitter();
        this.onShowing = new EventEmitter();
        this.onShown = new EventEmitter();
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
        this.itemTemplateChange = new EventEmitter();
        this.selectedItemChange = new EventEmitter();
        this.selectedItemsChange = new EventEmitter();
        this.selectionByClickChange = new EventEmitter();
        this.selectionModeChange = new EventEmitter();
        this.itemsChange = new EventEmitter();
        this.disabledExprChange = new EventEmitter();
        this.displayExprChange = new EventEmitter();
        this.itemsExprChange = new EventEmitter();
        this.selectedExprChange = new EventEmitter();
        this.animationChange = new EventEmitter();
        this.cssClassChange = new EventEmitter();
        this.selectByClickChange = new EventEmitter();
        this.showSubmenuModeChange = new EventEmitter();
        this.closeOnOutsideClickChange = new EventEmitter();
        this.showEventChange = new EventEmitter();
        this.submenuDirectionChange = new EventEmitter();
        this.targetChange = new EventEmitter();
        this.positionChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxContextMenu(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('selectedItems', changes);
        this._idh.setup('items', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('selectedItems');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxContextMenuComponent
  ],
  exports: [
    DxContextMenuComponent
  ],
})
export class DxContextMenuModule { }
