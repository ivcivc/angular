import { ElementRef, EventEmitter, NgZone } from '@angular/core';
import DxTextArea from 'devextreme/ui/text_area';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxTextAreaComponent extends DxComponent {
    private _watcherHelper;
    instance: DxTextArea;
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
    spellcheck: any;
    text: any;
    valueChangeEvent: any;
    maxLength: any;
    autoResizeEnabled: any;
    maxHeight: any;
    minHeight: any;
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
    spellcheckChange: EventEmitter<any>;
    textChange: EventEmitter<any>;
    valueChangeEventChange: EventEmitter<any>;
    maxLengthChange: EventEmitter<any>;
    autoResizeEnabledChange: EventEmitter<any>;
    maxHeightChange: EventEmitter<any>;
    minHeightChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper);
    protected _createInstance(element: any, options: any): DxTextArea;
}
export declare class DxTextAreaValueAccessorDirective implements ControlValueAccessor {
    private host;
    onChange(_: any): void;
    onTouched: () => void;
    constructor(host: DxTextAreaComponent);
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare class DxTextAreaModule {
}