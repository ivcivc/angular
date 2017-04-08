import { ElementRef, EventEmitter, NgZone } from '@angular/core';
import DxLoadIndicator from 'devextreme/ui/load_indicator';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxLoadIndicatorComponent extends DxComponent {
    private _watcherHelper;
    instance: DxLoadIndicator;
    height: any;
    rtlEnabled: any;
    width: any;
    hint: any;
    visible: any;
    indicatorSrc: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    heightChange: EventEmitter<any>;
    rtlEnabledChange: EventEmitter<any>;
    widthChange: EventEmitter<any>;
    hintChange: EventEmitter<any>;
    visibleChange: EventEmitter<any>;
    indicatorSrcChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper);
    protected _createInstance(element: any, options: any): DxLoadIndicator;
}
export declare class DxLoadIndicatorModule {
}
