import { ElementRef, EventEmitter, NgZone } from '@angular/core';
import DxProgressBar from 'devextreme/ui/progress_bar';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxProgressBarComponent extends DxComponent {
    private _watcherHelper;
    instance: DxProgressBar;
    validator: DxValidatorComponent;
    height: any;
    rtlEnabled: any;
    width: any;
    disabled: any;
    hint: any;
    hoverStateEnabled: any;
    visible: any;
    isValid: any;
    readOnly: any;
    validationError: any;
    validationMessageMode: any;
    value: any;
    max: any;
    min: any;
    showStatus: any;
    statusFormat: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    onValueChanged: EventEmitter<any>;
    onComplete: EventEmitter<any>;
    heightChange: EventEmitter<any>;
    rtlEnabledChange: EventEmitter<any>;
    widthChange: EventEmitter<any>;
    disabledChange: EventEmitter<any>;
    hintChange: EventEmitter<any>;
    hoverStateEnabledChange: EventEmitter<any>;
    visibleChange: EventEmitter<any>;
    isValidChange: EventEmitter<any>;
    readOnlyChange: EventEmitter<any>;
    validationErrorChange: EventEmitter<any>;
    validationMessageModeChange: EventEmitter<any>;
    valueChange: EventEmitter<any>;
    maxChange: EventEmitter<any>;
    minChange: EventEmitter<any>;
    showStatusChange: EventEmitter<any>;
    statusFormatChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper);
    protected _createInstance(element: any, options: any): DxProgressBar;
}
export declare class DxProgressBarValueAccessorDirective implements ControlValueAccessor {
    private host;
    onChange(_: any): void;
    onTouched: () => void;
    constructor(host: DxProgressBarComponent);
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare class DxProgressBarModule {
}
