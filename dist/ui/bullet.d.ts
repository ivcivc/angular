import { ElementRef, EventEmitter, NgZone } from '@angular/core';
import DxBullet from 'devextreme/viz/bullet';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
export declare class DxBulletComponent extends DxComponent {
    private _watcherHelper;
    instance: DxBullet;
    validator: DxValidatorComponent;
    rtlEnabled: any;
    margin: any;
    pathModified: any;
    size: any;
    theme: any;
    tooltip: any;
    color: any;
    endScaleValue: any;
    showTarget: any;
    showZeroLevel: any;
    startScaleValue: any;
    target: any;
    targetColor: any;
    targetWidth: any;
    value: any;
    onDisposing: EventEmitter<any>;
    onInitialized: EventEmitter<any>;
    onOptionChanged: EventEmitter<any>;
    onDrawn: EventEmitter<any>;
    onExported: EventEmitter<any>;
    onExporting: EventEmitter<any>;
    onFileSaving: EventEmitter<any>;
    onIncidentOccurred: EventEmitter<any>;
    onTooltipHidden: EventEmitter<any>;
    onTooltipShown: EventEmitter<any>;
    rtlEnabledChange: EventEmitter<any>;
    marginChange: EventEmitter<any>;
    pathModifiedChange: EventEmitter<any>;
    sizeChange: EventEmitter<any>;
    themeChange: EventEmitter<any>;
    tooltipChange: EventEmitter<any>;
    colorChange: EventEmitter<any>;
    endScaleValueChange: EventEmitter<any>;
    showTargetChange: EventEmitter<any>;
    showZeroLevelChange: EventEmitter<any>;
    startScaleValueChange: EventEmitter<any>;
    targetChange: EventEmitter<any>;
    targetColorChange: EventEmitter<any>;
    targetWidthChange: EventEmitter<any>;
    valueChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper);
    protected _createInstance(element: any, options: any): DxBullet;
}
export declare class DxBulletValueAccessorDirective implements ControlValueAccessor {
    private host;
    onChange(_: any): void;
    onTouched: () => void;
    constructor(host: DxBulletComponent);
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare class DxBulletModule {
}
