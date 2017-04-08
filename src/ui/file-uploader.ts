
/* tslint:disable:directive-selector-name */
/* tslint:disable:directive-selector-type */




import {
    Component,
    NgModule,
    ElementRef,
    EventEmitter,
    NgZone,
    Input,
    Output,
    ContentChild,
    Directive,
    forwardRef,
    HostListener,
    OnChanges,
    DoCheck,
    SimpleChanges
} from '@angular/core';

import DxFileUploader from 'devextreme/ui/file_uploader';

import { DxValidatorComponent } from './validator';

import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR
} from '@angular/forms';

import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-file-uploader',
    template: '',
    providers: providers
})
export class DxFileUploaderComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxFileUploader;


    @ContentChild(DxValidatorComponent)
    validator: DxValidatorComponent;
    @Input()
    get height(): any {
        return this._getOption('height');
    }

    set height(value: any) {
        this._setOption('height', value);
    }

    @Input()
    get rtlEnabled(): any {
        return this._getOption('rtlEnabled');
    }

    set rtlEnabled(value: any) {
        this._setOption('rtlEnabled', value);
    }

    @Input()
    get width(): any {
        return this._getOption('width');
    }

    set width(value: any) {
        this._setOption('width', value);
    }

    @Input()
    get accessKey(): any {
        return this._getOption('accessKey');
    }

    set accessKey(value: any) {
        this._setOption('accessKey', value);
    }

    @Input()
    get activeStateEnabled(): any {
        return this._getOption('activeStateEnabled');
    }

    set activeStateEnabled(value: any) {
        this._setOption('activeStateEnabled', value);
    }

    @Input()
    get disabled(): any {
        return this._getOption('disabled');
    }

    set disabled(value: any) {
        this._setOption('disabled', value);
    }

    @Input()
    get focusStateEnabled(): any {
        return this._getOption('focusStateEnabled');
    }

    set focusStateEnabled(value: any) {
        this._setOption('focusStateEnabled', value);
    }

    @Input()
    get hint(): any {
        return this._getOption('hint');
    }

    set hint(value: any) {
        this._setOption('hint', value);
    }

    @Input()
    get hoverStateEnabled(): any {
        return this._getOption('hoverStateEnabled');
    }

    set hoverStateEnabled(value: any) {
        this._setOption('hoverStateEnabled', value);
    }

    @Input()
    get tabIndex(): any {
        return this._getOption('tabIndex');
    }

    set tabIndex(value: any) {
        this._setOption('tabIndex', value);
    }

    @Input()
    get visible(): any {
        return this._getOption('visible');
    }

    set visible(value: any) {
        this._setOption('visible', value);
    }

    @Input()
    get isValid(): any {
        return this._getOption('isValid');
    }

    set isValid(value: any) {
        this._setOption('isValid', value);
    }

    @Input()
    get name(): any {
        return this._getOption('name');
    }

    set name(value: any) {
        this._setOption('name', value);
    }

    @Input()
    get readOnly(): any {
        return this._getOption('readOnly');
    }

    set readOnly(value: any) {
        this._setOption('readOnly', value);
    }

    @Input()
    get validationError(): any {
        return this._getOption('validationError');
    }

    set validationError(value: any) {
        this._setOption('validationError', value);
    }

    @Input()
    get value(): any {
        return this._getOption('value');
    }

    set value(value: any) {
        this._setOption('value', value);
    }

    @Input()
    get accept(): any {
        return this._getOption('accept');
    }

    set accept(value: any) {
        this._setOption('accept', value);
    }

    @Input()
    get allowCanceling(): any {
        return this._getOption('allowCanceling');
    }

    set allowCanceling(value: any) {
        this._setOption('allowCanceling', value);
    }

    @Input()
    get buttonText(): any {
        return this._getOption('buttonText');
    }

    set buttonText(value: any) {
        this._setOption('buttonText', value);
    }

    @Input()
    get labelText(): any {
        return this._getOption('labelText');
    }

    set labelText(value: any) {
        this._setOption('labelText', value);
    }

    @Input()
    get multiple(): any {
        return this._getOption('multiple');
    }

    set multiple(value: any) {
        this._setOption('multiple', value);
    }

    @Input()
    get progress(): any {
        return this._getOption('progress');
    }

    set progress(value: any) {
        this._setOption('progress', value);
    }

    @Input()
    get readyToUploadMessage(): any {
        return this._getOption('readyToUploadMessage');
    }

    set readyToUploadMessage(value: any) {
        this._setOption('readyToUploadMessage', value);
    }

    @Input()
    get selectButtonText(): any {
        return this._getOption('selectButtonText');
    }

    set selectButtonText(value: any) {
        this._setOption('selectButtonText', value);
    }

    @Input()
    get showFileList(): any {
        return this._getOption('showFileList');
    }

    set showFileList(value: any) {
        this._setOption('showFileList', value);
    }

    @Input()
    get uploadButtonText(): any {
        return this._getOption('uploadButtonText');
    }

    set uploadButtonText(value: any) {
        this._setOption('uploadButtonText', value);
    }

    @Input()
    get uploadedMessage(): any {
        return this._getOption('uploadedMessage');
    }

    set uploadedMessage(value: any) {
        this._setOption('uploadedMessage', value);
    }

    @Input()
    get uploadFailedMessage(): any {
        return this._getOption('uploadFailedMessage');
    }

    set uploadFailedMessage(value: any) {
        this._setOption('uploadFailedMessage', value);
    }

    @Input()
    get uploadHeaders(): any {
        return this._getOption('uploadHeaders');
    }

    set uploadHeaders(value: any) {
        this._setOption('uploadHeaders', value);
    }

    @Input()
    get uploadMethod(): any {
        return this._getOption('uploadMethod');
    }

    set uploadMethod(value: any) {
        this._setOption('uploadMethod', value);
    }

    @Input()
    get uploadMode(): any {
        return this._getOption('uploadMode');
    }

    set uploadMode(value: any) {
        this._setOption('uploadMode', value);
    }

    @Input()
    get uploadUrl(): any {
        return this._getOption('uploadUrl');
    }

    set uploadUrl(value: any) {
        this._setOption('uploadUrl', value);
    }

    @Input()
    get values(): any {
        return this._getOption('values');
    }

    set values(value: any) {
        this._setOption('values', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onValueChanged: EventEmitter<any>;
    @Output() onProgress: EventEmitter<any>;
    @Output() onUploadAborted: EventEmitter<any>;
    @Output() onUploaded: EventEmitter<any>;
    @Output() onUploadError: EventEmitter<any>;
    @Output() onUploadStarted: EventEmitter<any>;
    @Output() heightChange: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() widthChange: EventEmitter<any>;
    @Output() accessKeyChange: EventEmitter<any>;
    @Output() activeStateEnabledChange: EventEmitter<any>;
    @Output() disabledChange: EventEmitter<any>;
    @Output() focusStateEnabledChange: EventEmitter<any>;
    @Output() hintChange: EventEmitter<any>;
    @Output() hoverStateEnabledChange: EventEmitter<any>;
    @Output() tabIndexChange: EventEmitter<any>;
    @Output() visibleChange: EventEmitter<any>;
    @Output() isValidChange: EventEmitter<any>;
    @Output() nameChange: EventEmitter<any>;
    @Output() readOnlyChange: EventEmitter<any>;
    @Output() validationErrorChange: EventEmitter<any>;
    @Output() valueChange: EventEmitter<any>;
    @Output() acceptChange: EventEmitter<any>;
    @Output() allowCancelingChange: EventEmitter<any>;
    @Output() buttonTextChange: EventEmitter<any>;
    @Output() labelTextChange: EventEmitter<any>;
    @Output() multipleChange: EventEmitter<any>;
    @Output() progressChange: EventEmitter<any>;
    @Output() readyToUploadMessageChange: EventEmitter<any>;
    @Output() selectButtonTextChange: EventEmitter<any>;
    @Output() showFileListChange: EventEmitter<any>;
    @Output() uploadButtonTextChange: EventEmitter<any>;
    @Output() uploadedMessageChange: EventEmitter<any>;
    @Output() uploadFailedMessageChange: EventEmitter<any>;
    @Output() uploadHeadersChange: EventEmitter<any>;
    @Output() uploadMethodChange: EventEmitter<any>;
    @Output() uploadModeChange: EventEmitter<any>;
    @Output() uploadUrlChange: EventEmitter<any>;
    @Output() valuesChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxFileUploader';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { subscribe: 'progress', emit: 'onProgress' },
            { subscribe: 'uploadAborted', emit: 'onUploadAborted' },
            { subscribe: 'uploaded', emit: 'onUploaded' },
            { subscribe: 'uploadError', emit: 'onUploadError' },
            { subscribe: 'uploadStarted', emit: 'onUploadStarted' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'isValidChange' },
            { emit: 'nameChange' },
            { emit: 'readOnlyChange' },
            { emit: 'validationErrorChange' },
            { emit: 'valueChange' },
            { emit: 'acceptChange' },
            { emit: 'allowCancelingChange' },
            { emit: 'buttonTextChange' },
            { emit: 'labelTextChange' },
            { emit: 'multipleChange' },
            { emit: 'progressChange' },
            { emit: 'readyToUploadMessageChange' },
            { emit: 'selectButtonTextChange' },
            { emit: 'showFileListChange' },
            { emit: 'uploadButtonTextChange' },
            { emit: 'uploadedMessageChange' },
            { emit: 'uploadFailedMessageChange' },
            { emit: 'uploadHeadersChange' },
            { emit: 'uploadMethodChange' },
            { emit: 'uploadModeChange' },
            { emit: 'uploadUrlChange' },
            { emit: 'valuesChange' }
        ];

        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.accessKey',
            'this.activeStateEnabled',
            'this.disabled',
            'this.focusStateEnabled',
            'this.hint',
            'this.hoverStateEnabled',
            'this.tabIndex',
            'this.visible',
            'this.isValid',
            'this.name',
            'this.readOnly',
            'this.validationError',
            'this.value',
            'this.accept',
            'this.allowCanceling',
            'this.buttonText',
            'this.labelText',
            'this.multiple',
            'this.progress',
            'this.readyToUploadMessage',
            'this.selectButtonText',
            'this.showFileList',
            'this.uploadButtonText',
            'this.uploadedMessage',
            'this.uploadFailedMessage',
            'this.uploadHeaders',
            'this.uploadMethod',
            'this.uploadMode',
            'this.uploadUrl',
            'this.values'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.onProgress = new EventEmitter();
        this.onUploadAborted = new EventEmitter();
        this.onUploaded = new EventEmitter();
        this.onUploadError = new EventEmitter();
        this.onUploadStarted = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.accessKeyChange = new EventEmitter();
        this.activeStateEnabledChange = new EventEmitter();
        this.disabledChange = new EventEmitter();
        this.focusStateEnabledChange = new EventEmitter();
        this.hintChange = new EventEmitter();
        this.hoverStateEnabledChange = new EventEmitter();
        this.tabIndexChange = new EventEmitter();
        this.visibleChange = new EventEmitter();
        this.isValidChange = new EventEmitter();
        this.nameChange = new EventEmitter();
        this.readOnlyChange = new EventEmitter();
        this.validationErrorChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.acceptChange = new EventEmitter();
        this.allowCancelingChange = new EventEmitter();
        this.buttonTextChange = new EventEmitter();
        this.labelTextChange = new EventEmitter();
        this.multipleChange = new EventEmitter();
        this.progressChange = new EventEmitter();
        this.readyToUploadMessageChange = new EventEmitter();
        this.selectButtonTextChange = new EventEmitter();
        this.showFileListChange = new EventEmitter();
        this.uploadButtonTextChange = new EventEmitter();
        this.uploadedMessageChange = new EventEmitter();
        this.uploadFailedMessageChange = new EventEmitter();
        this.uploadHeadersChange = new EventEmitter();
        this.uploadMethodChange = new EventEmitter();
        this.uploadModeChange = new EventEmitter();
        this.uploadUrlChange = new EventEmitter();
        this.valuesChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        let widget = new DxFileUploader(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('value', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('value');
        this._watcherHelper.checkWatchers();
    }
}



const CUSTOM_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxFileUploaderValueAccessorDirective),
    multi: true
};

@Directive({
    selector: 'dx-file-uploader[formControlName],dx-file-uploader[formControl],dx-file-uploader[ngModel]',
    providers: [CUSTOM_VALUE_ACCESSOR]
})
export class DxFileUploaderValueAccessorDirective implements ControlValueAccessor {
    @HostListener('valueChange', ['$event']) onChange(_) { }
    onTouched = () => {};

    constructor(private host: DxFileUploaderComponent) { }

    writeValue(value: any): void {
        this.host.value = value;
    }

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}


@NgModule({
  declarations: [
    DxFileUploaderComponent,
    DxFileUploaderValueAccessorDirective
  ],
  exports: [
    DxFileUploaderComponent,
    DxFileUploaderValueAccessorDirective
  ],
})
export class DxFileUploaderModule { }
