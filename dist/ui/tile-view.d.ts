import { ElementRef, EventEmitter, NgZone, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxTileView from 'devextreme/ui/tile_view';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxTileViewComponent extends DxComponent implements OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxTileView;
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
    items: any;
    baseItemHeight: any;
    baseItemWidth: any;
    direction: any;
    itemMargin: any;
    showScrollbar: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    onContentReady: EventEmitter<any>;
    onItemClick: EventEmitter<any>;
    onItemContextMenu: EventEmitter<any>;
    onItemHold: EventEmitter<any>;
    onItemRendered: EventEmitter<any>;
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
    itemsChange: EventEmitter<any>;
    baseItemHeightChange: EventEmitter<any>;
    baseItemWidthChange: EventEmitter<any>;
    directionChange: EventEmitter<any>;
    itemMarginChange: EventEmitter<any>;
    showScrollbarChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper);
    protected _createInstance(element: any, options: any): DxTileView;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
}
export declare class DxTileViewModule {
}
