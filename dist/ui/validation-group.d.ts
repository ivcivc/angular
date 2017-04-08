import { ElementRef, EventEmitter, NgZone } from '@angular/core';
import DxValidationGroup from 'devextreme/ui/validation_group';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxValidationGroupComponent extends DxComponent {
    private _watcherHelper;
    instance: DxValidationGroup;
    height: any;
    width: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    heightChange: EventEmitter<any>;
    widthChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper);
    protected _createInstance(element: any, options: any): DxValidationGroup;
}
export declare class DxValidationGroupModule {
}
