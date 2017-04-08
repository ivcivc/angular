import { ElementRef, EventEmitter, NgZone } from '@angular/core';
import DxSlideOutView from 'devextreme/ui/slide_out_view';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxSlideOutViewComponent extends DxComponent {
    private _watcherHelper;
    instance: DxSlideOutView;
    height: any;
    rtlEnabled: any;
    width: any;
    activeStateEnabled: any;
    disabled: any;
    hint: any;
    hoverStateEnabled: any;
    visible: any;
    contentTemplate: any;
    menuPosition: any;
    menuTemplate: any;
    menuVisible: any;
    swipeEnabled: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    heightChange: EventEmitter<any>;
    rtlEnabledChange: EventEmitter<any>;
    widthChange: EventEmitter<any>;
    activeStateEnabledChange: EventEmitter<any>;
    disabledChange: EventEmitter<any>;
    hintChange: EventEmitter<any>;
    hoverStateEnabledChange: EventEmitter<any>;
    visibleChange: EventEmitter<any>;
    contentTemplateChange: EventEmitter<any>;
    menuPositionChange: EventEmitter<any>;
    menuTemplateChange: EventEmitter<any>;
    menuVisibleChange: EventEmitter<any>;
    swipeEnabledChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper);
    protected _createInstance(element: any, options: any): DxSlideOutView;
}
export declare class DxSlideOutViewModule {
}
