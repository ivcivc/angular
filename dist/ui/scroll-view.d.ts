import { ElementRef, EventEmitter, NgZone } from '@angular/core';
import DxScrollView from 'devextreme/ui/scroll_view';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxScrollViewComponent extends DxComponent {
    private _watcherHelper;
    instance: DxScrollView;
    height: any;
    rtlEnabled: any;
    width: any;
    bounceEnabled: any;
    direction: any;
    disabled: any;
    scrollByContent: any;
    scrollByThumb: any;
    showScrollbar: any;
    useNative: any;
    pulledDownText: any;
    pullingDownText: any;
    reachBottomText: any;
    refreshingText: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    onScroll: EventEmitter<any>;
    onUpdated: EventEmitter<any>;
    onPullDown: EventEmitter<any>;
    onReachBottom: EventEmitter<any>;
    heightChange: EventEmitter<any>;
    rtlEnabledChange: EventEmitter<any>;
    widthChange: EventEmitter<any>;
    bounceEnabledChange: EventEmitter<any>;
    directionChange: EventEmitter<any>;
    disabledChange: EventEmitter<any>;
    scrollByContentChange: EventEmitter<any>;
    scrollByThumbChange: EventEmitter<any>;
    showScrollbarChange: EventEmitter<any>;
    useNativeChange: EventEmitter<any>;
    pulledDownTextChange: EventEmitter<any>;
    pullingDownTextChange: EventEmitter<any>;
    reachBottomTextChange: EventEmitter<any>;
    refreshingTextChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper);
    protected _createInstance(element: any, options: any): DxScrollView;
}
export declare class DxScrollViewModule {
}
