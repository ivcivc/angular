



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

import DxGallery from 'devextreme/ui/gallery';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-gallery',
    template: '',
    providers: providers
})
export class DxGalleryComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxGallery;


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
    get animationDuration(): any {
        return this._getOption('animationDuration');
    }

    set animationDuration(value: any) {
        this._setOption('animationDuration', value);
    }

    @Input()
    get animationEnabled(): any {
        return this._getOption('animationEnabled');
    }

    set animationEnabled(value: any) {
        this._setOption('animationEnabled', value);
    }

    @Input()
    get indicatorEnabled(): any {
        return this._getOption('indicatorEnabled');
    }

    set indicatorEnabled(value: any) {
        this._setOption('indicatorEnabled', value);
    }

    @Input()
    get initialItemWidth(): any {
        return this._getOption('initialItemWidth');
    }

    set initialItemWidth(value: any) {
        this._setOption('initialItemWidth', value);
    }

    @Input()
    get loop(): any {
        return this._getOption('loop');
    }

    set loop(value: any) {
        this._setOption('loop', value);
    }

    @Input()
    get showIndicator(): any {
        return this._getOption('showIndicator');
    }

    set showIndicator(value: any) {
        this._setOption('showIndicator', value);
    }

    @Input()
    get showNavButtons(): any {
        return this._getOption('showNavButtons');
    }

    set showNavButtons(value: any) {
        this._setOption('showNavButtons', value);
    }

    @Input()
    get slideshowDelay(): any {
        return this._getOption('slideshowDelay');
    }

    set slideshowDelay(value: any) {
        this._setOption('slideshowDelay', value);
    }

    @Input()
    get stretchImages(): any {
        return this._getOption('stretchImages');
    }

    set stretchImages(value: any) {
        this._setOption('stretchImages', value);
    }

    @Input()
    get swipeEnabled(): any {
        return this._getOption('swipeEnabled');
    }

    set swipeEnabled(value: any) {
        this._setOption('swipeEnabled', value);
    }

    @Input()
    get wrapAround(): any {
        return this._getOption('wrapAround');
    }

    set wrapAround(value: any) {
        this._setOption('wrapAround', value);
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
    @Output() heightChange: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() widthChange: EventEmitter<any>;
    @Output() accessKeyChange: EventEmitter<any>;
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
    @Output() animationDurationChange: EventEmitter<any>;
    @Output() animationEnabledChange: EventEmitter<any>;
    @Output() indicatorEnabledChange: EventEmitter<any>;
    @Output() initialItemWidthChange: EventEmitter<any>;
    @Output() loopChange: EventEmitter<any>;
    @Output() showIndicatorChange: EventEmitter<any>;
    @Output() showNavButtonsChange: EventEmitter<any>;
    @Output() slideshowDelayChange: EventEmitter<any>;
    @Output() stretchImagesChange: EventEmitter<any>;
    @Output() swipeEnabledChange: EventEmitter<any>;
    @Output() wrapAroundChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxGallery';
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
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'accessKeyChange' },
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
            { emit: 'animationDurationChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'indicatorEnabledChange' },
            { emit: 'initialItemWidthChange' },
            { emit: 'loopChange' },
            { emit: 'showIndicatorChange' },
            { emit: 'showNavButtonsChange' },
            { emit: 'slideshowDelayChange' },
            { emit: 'stretchImagesChange' },
            { emit: 'swipeEnabledChange' },
            { emit: 'wrapAroundChange' }
        ];

        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.accessKey',
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
            'this.animationDuration',
            'this.animationEnabled',
            'this.indicatorEnabled',
            'this.initialItemWidth',
            'this.loop',
            'this.showIndicator',
            'this.showNavButtons',
            'this.slideshowDelay',
            'this.stretchImages',
            'this.swipeEnabled',
            'this.wrapAround'
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
        this.heightChange = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.accessKeyChange = new EventEmitter();
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
        this.animationDurationChange = new EventEmitter();
        this.animationEnabledChange = new EventEmitter();
        this.indicatorEnabledChange = new EventEmitter();
        this.initialItemWidthChange = new EventEmitter();
        this.loopChange = new EventEmitter();
        this.showIndicatorChange = new EventEmitter();
        this.showNavButtonsChange = new EventEmitter();
        this.slideshowDelayChange = new EventEmitter();
        this.stretchImagesChange = new EventEmitter();
        this.swipeEnabledChange = new EventEmitter();
        this.wrapAroundChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxGallery(element, options);
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
    DxGalleryComponent
  ],
  exports: [
    DxGalleryComponent
  ],
})
export class DxGalleryModule { }
