import { ElementRef, EventEmitter, NgZone, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxNavBar from 'devextreme/ui/nav_bar';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxNavBarComponent extends DxComponent implements OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxNavBar;
    height: any;
    rtlEnabled: any;
    width: any;
    accessKey: any;
    disabled: any;
    focusStateEnabled: any;
    hint: any;
    hoverStateEnabled: any;
    tabIndex: any;
    visible: any;
    dataSource: any;
    itemHoldTimeout: any;
    itemTemplate: any;
    selectedIndex: any;
    selectedItem: any;
    selectedItems: any;
    selectionMode: any;
    items: any;
    scrollByContent: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    onContentReady: EventEmitter<any>;
    onItemClick: EventEmitter<any>;
    onItemContextMenu: EventEmitter<any>;
    onItemHold: EventEmitter<any>;
    onItemRendered: EventEmitter<any>;
    onSelectionChanged: EventEmitter<any>;
    heightChange: EventEmitter<any>;
    rtlEnabledChange: EventEmitter<any>;
    widthChange: EventEmitter<any>;
    accessKeyChange: EventEmitter<any>;
    disabledChange: EventEmitter<any>;
    focusStateEnabledChange: EventEmitter<any>;
    hintChange: EventEmitter<any>;
    hoverStateEnabledChange: EventEmitter<any>;
    tabIndexChange: EventEmitter<any>;
    visibleChange: EventEmitter<any>;
    dataSourceChange: EventEmitter<any>;
    itemHoldTimeoutChange: EventEmitter<any>;
    itemTemplateChange: EventEmitter<any>;
    selectedIndexChange: EventEmitter<any>;
    selectedItemChange: EventEmitter<any>;
    selectedItemsChange: EventEmitter<any>;
    selectionModeChange: EventEmitter<any>;
    itemsChange: EventEmitter<any>;
    scrollByContentChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper);
    protected _createInstance(element: any, options: any): DxNavBar;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
}
export declare class DxNavBarModule {
}
