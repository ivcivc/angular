import { ElementRef, EventEmitter, NgZone } from '@angular/core';
import DxNumberBox from 'devextreme/ui/number_box';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxNumberBoxComponent extends DxComponent {
    private _watcherHelper;
    instance: DxNumberBox;
    validator: DxValidatorComponent;
    height: any;
    rtlEnabled: any;
    width: any;
    accessKey: any;
    activeStateEnabled: any;
    disabled: any;
    focusStateEnabled: any;
    hint: any;
    hoverStateEnabled: any;
    tabIndex: any;
    visible: any;
    isValid: any;
    name: any;
    readOnly: any;
    validationError: any;
    validationMessageMode: any;
    value: any;
    attr: any;
    placeholder: any;
    showClearButton: any;
    text: any;
    valueChangeEvent: any;
    invalidValueMessage: any;
    max: any;
    min: any;
    mode: any;
    showSpinButtons: any;
    step: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    onFocusIn: EventEmitter<any>;
    onFocusOut: EventEmitter<any>;
    onValueChanged: EventEmitter<any>;
    onChange: EventEmitter<any>;
    onCopy: EventEmitter<any>;
    onCut: EventEmitter<any>;
    onEnterKey: EventEmitter<any>;
    onInput: EventEmitter<any>;
    onKeyDown: EventEmitter<any>;
    onKeyPress: EventEmitter<any>;
    onKeyUp: EventEmitter<any>;
    onPaste: EventEmitter<any>;
    heightChange: EventEmitter<any>;
    rtlEnabledChange: EventEmitter<any>;
    widthChange: EventEmitter<any>;
    accessKeyChange: EventEmitter<any>;
    activeStateEnabledChange: EventEmitter<any>;
    disabledChange: EventEmitter<any>;
    focusStateEnabledChange: EventEmitter<any>;
    hintChange: EventEmitter<any>;
    hoverStateEnabledChange: EventEmitter<any>;
    tabIndexChange: EventEmitter<any>;
    visibleChange: EventEmitter<any>;
    isValidChange: EventEmitter<any>;
    nameChange: EventEmitter<any>;
    readOnlyChange: EventEmitter<any>;
    validationErrorChange: EventEmitter<any>;
    validationMessageModeChange: EventEmitter<any>;
    valueChange: EventEmitter<any>;
    attrChange: EventEmitter<any>;
    placeholderChange: EventEmitter<any>;
    showClearButtonChange: EventEmitter<any>;
    textChange: EventEmitter<any>;
    valueChangeEventChange: EventEmitter<any>;
    invalidValueMessageChange: EventEmitter<any>;
    maxChange: EventEmitter<any>;
    minChange: EventEmitter<any>;
    modeChange: EventEmitter<any>;
    showSpinButtonsChange: EventEmitter<any>;
    stepChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper);
    protected _createInstance(element: any, options: any): DxNumberBox;
}
export declare class DxNumberBoxValueAccessorDirective implements ControlValueAccessor {
    private host;
    onChange(_: any): void;
    onTouched: () => void;
    constructor(host: DxNumberBoxComponent);
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare class DxNumberBoxModule {
}
