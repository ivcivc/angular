import { SimpleChanges, IterableDiffers, ChangeDetectorRef } from '@angular/core';
import { DxComponentBase } from './dx.component';
export declare class IterableDifferHelper {
    private _differs;
    private _cdr;
    private _host;
    private _propertyDiffers;
    constructor(_differs: IterableDiffers, _cdr: ChangeDetectorRef);
    setHost(host: DxComponentBase): void;
    setup(prop: string, changes: SimpleChanges): void;
    doCheck(prop: string): void;
}
