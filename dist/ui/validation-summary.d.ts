import { ElementRef, EventEmitter, NgZone, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxValidationSummary from 'devextreme/ui/validation_summary';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxValidationSummaryComponent extends DxComponent implements OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxValidationSummary;
    hoverStateEnabled: any;
    itemTemplate: any;
    items: any;
    validationGroup: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    onContentReady: EventEmitter<any>;
    onItemClick: EventEmitter<any>;
    hoverStateEnabledChange: EventEmitter<any>;
    itemTemplateChange: EventEmitter<any>;
    itemsChange: EventEmitter<any>;
    validationGroupChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper);
    protected _createInstance(element: any, options: any): DxValidationSummary;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
}
export declare class DxValidationSummaryModule {
}
