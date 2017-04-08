import { ElementRef, EventEmitter, NgZone } from '@angular/core';
import DxResizable from 'devextreme/ui/resizable';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxResizableComponent extends DxComponent {
    private _watcherHelper;
    instance: DxResizable;
    height: any;
    rtlEnabled: any;
    width: any;
    handles: any;
    maxHeight: any;
    maxWidth: any;
    minHeight: any;
    minWidth: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    onResize: EventEmitter<any>;
    onResizeEnd: EventEmitter<any>;
    onResizeStart: EventEmitter<any>;
    heightChange: EventEmitter<any>;
    rtlEnabledChange: EventEmitter<any>;
    widthChange: EventEmitter<any>;
    handlesChange: EventEmitter<any>;
    maxHeightChange: EventEmitter<any>;
    maxWidthChange: EventEmitter<any>;
    minHeightChange: EventEmitter<any>;
    minWidthChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper);
    protected _createInstance(element: any, options: any): DxResizable;
}
export declare class DxResizableModule {
}
