import { ElementRef, EventEmitter, NgZone, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxFileUploader from 'devextreme/ui/file_uploader';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
export declare class DxFileUploaderComponent extends DxComponent implements OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxFileUploader;
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
    value: any;
    accept: any;
    allowCanceling: any;
    buttonText: any;
    labelText: any;
    multiple: any;
    progress: any;
    readyToUploadMessage: any;
    selectButtonText: any;
    showFileList: any;
    uploadButtonText: any;
    uploadedMessage: any;
    uploadFailedMessage: any;
    uploadHeaders: any;
    uploadMethod: any;
    uploadMode: any;
    uploadUrl: any;
    values: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    onValueChanged: EventEmitter<any>;
    onProgress: EventEmitter<any>;
    onUploadAborted: EventEmitter<any>;
    onUploaded: EventEmitter<any>;
    onUploadError: EventEmitter<any>;
    onUploadStarted: EventEmitter<any>;
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
    valueChange: EventEmitter<any>;
    acceptChange: EventEmitter<any>;
    allowCancelingChange: EventEmitter<any>;
    buttonTextChange: EventEmitter<any>;
    labelTextChange: EventEmitter<any>;
    multipleChange: EventEmitter<any>;
    progressChange: EventEmitter<any>;
    readyToUploadMessageChange: EventEmitter<any>;
    selectButtonTextChange: EventEmitter<any>;
    showFileListChange: EventEmitter<any>;
    uploadButtonTextChange: EventEmitter<any>;
    uploadedMessageChange: EventEmitter<any>;
    uploadFailedMessageChange: EventEmitter<any>;
    uploadHeadersChange: EventEmitter<any>;
    uploadMethodChange: EventEmitter<any>;
    uploadModeChange: EventEmitter<any>;
    uploadUrlChange: EventEmitter<any>;
    valuesChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper);
    protected _createInstance(element: any, options: any): DxFileUploader;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
}
export declare class DxFileUploaderValueAccessorDirective implements ControlValueAccessor {
    private host;
    onChange(_: any): void;
    onTouched: () => void;
    constructor(host: DxFileUploaderComponent);
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare class DxFileUploaderModule {
}