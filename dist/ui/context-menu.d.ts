import { ElementRef, EventEmitter, NgZone, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxContextMenu from 'devextreme/ui/context_menu';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxContextMenuComponent extends DxComponent implements OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxContextMenu;
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
    itemTemplate: any;
    selectedItem: any;
    selectedItems: any;
    selectionByClick: any;
    selectionMode: any;
    items: any;
    disabledExpr: any;
    displayExpr: any;
    itemsExpr: any;
    selectedExpr: any;
    animation: any;
    cssClass: any;
    selectByClick: any;
    showSubmenuMode: any;
    closeOnOutsideClick: any;
    showEvent: any;
    submenuDirection: any;
    target: any;
    position: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    onContentReady: EventEmitter<any>;
    onItemClick: EventEmitter<any>;
    onItemContextMenu: EventEmitter<any>;
    onItemRendered: EventEmitter<any>;
    onSelectionChanged: EventEmitter<any>;
    onHidden: EventEmitter<any>;
    onHiding: EventEmitter<any>;
    onPositioning: EventEmitter<any>;
    onShowing: EventEmitter<any>;
    onShown: EventEmitter<any>;
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
    itemTemplateChange: EventEmitter<any>;
    selectedItemChange: EventEmitter<any>;
    selectedItemsChange: EventEmitter<any>;
    selectionByClickChange: EventEmitter<any>;
    selectionModeChange: EventEmitter<any>;
    itemsChange: EventEmitter<any>;
    disabledExprChange: EventEmitter<any>;
    displayExprChange: EventEmitter<any>;
    itemsExprChange: EventEmitter<any>;
    selectedExprChange: EventEmitter<any>;
    animationChange: EventEmitter<any>;
    cssClassChange: EventEmitter<any>;
    selectByClickChange: EventEmitter<any>;
    showSubmenuModeChange: EventEmitter<any>;
    closeOnOutsideClickChange: EventEmitter<any>;
    showEventChange: EventEmitter<any>;
    submenuDirectionChange: EventEmitter<any>;
    targetChange: EventEmitter<any>;
    positionChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper);
    protected _createInstance(element: any, options: any): DxContextMenu;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
}
export declare class DxContextMenuModule {
}