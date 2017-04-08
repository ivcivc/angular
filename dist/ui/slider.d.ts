import { ElementRef, EventEmitter, NgZone } from '@angular/core';
import DxSlider from 'devextreme/ui/slider';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxSliderComponent extends DxComponent {
    private _watcherHelper;
    instance: DxSlider;
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
    max: any;
    min: any;
    keyStep: any;
    label: any;
    showRange: any;
    step: any;
    tooltip: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    onValueChanged: EventEmitter<any>;
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
    maxChange: EventEmitter<any>;
    minChange: EventEmitter<any>;
    keyStepChange: EventEmitter<any>;
    labelChange: EventEmitter<any>;
    showRangeChange: EventEmitter<any>;
    stepChange: EventEmitter<any>;
    tooltipChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper);
    protected _createInstance(element: any, options: any): DxSlider;
}
export declare class DxSliderValueAccessorDirective implements ControlValueAccessor {
    private host;
    onChange(_: any): void;
    onTouched: () => void;
    constructor(host: DxSliderComponent);
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare class DxSliderModule {
}
