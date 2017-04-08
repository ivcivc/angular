import { ElementRef, EventEmitter, NgZone, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxValidator from 'devextreme/ui/validator';
import { DxComponentExtension } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxValidatorComponent extends DxComponentExtension implements OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxValidator;
    height: any;
    width: any;
    adapter: any;
    name: any;
    validationGroup: any;
    validationRules: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    onValidated: EventEmitter<any>;
    heightChange: EventEmitter<any>;
    widthChange: EventEmitter<any>;
    adapterChange: EventEmitter<any>;
    nameChange: EventEmitter<any>;
    validationGroupChange: EventEmitter<any>;
    validationRulesChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper);
    protected _createInstance(element: any, options: any): DxValidator;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
}
export declare class DxValidatorModule {
}
