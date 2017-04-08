import { ElementRef, EventEmitter, NgZone } from '@angular/core';
import DxDeferRendering from 'devextreme/ui/defer_rendering';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxDeferRenderingComponent extends DxComponent {
    private _watcherHelper;
    instance: DxDeferRendering;
    renderWhen: any;
    showLoadIndicator: any;
    staggerItemSelector: any;
    animation: any;
    onRendered: EventEmitter<any>;
    onShown: EventEmitter<any>;
    renderWhenChange: EventEmitter<any>;
    showLoadIndicatorChange: EventEmitter<any>;
    staggerItemSelectorChange: EventEmitter<any>;
    animationChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper);
    protected _createInstance(element: any, options: any): DxDeferRendering;
}
export declare class DxDeferRenderingModule {
}
