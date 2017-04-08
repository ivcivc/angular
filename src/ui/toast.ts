



import {
    Component,
    NgModule,
    ElementRef,
    EventEmitter,
    NgZone,
    Input,
    Output
} from '@angular/core';

import DxToast from 'devextreme/ui/toast';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';


let providers = [];
providers.push(DxTemplateHost, WatcherHelper);


@Component({
    selector: 'dx-toast',
    template: '',
    providers: providers
})
export class DxToastComponent extends DxComponent {
    instance: DxToast;


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
    get animation(): any {
        return this._getOption('animation');
    }

    set animation(value: any) {
        this._setOption('animation', value);
    }

    @Input()
    get closeOnBackButton(): any {
        return this._getOption('closeOnBackButton');
    }

    set closeOnBackButton(value: any) {
        this._setOption('closeOnBackButton', value);
    }

    @Input()
    get closeOnOutsideClick(): any {
        return this._getOption('closeOnOutsideClick');
    }

    set closeOnOutsideClick(value: any) {
        this._setOption('closeOnOutsideClick', value);
    }

    @Input()
    get contentTemplate(): any {
        return this._getOption('contentTemplate');
    }

    set contentTemplate(value: any) {
        this._setOption('contentTemplate', value);
    }

    @Input()
    get deferRendering(): any {
        return this._getOption('deferRendering');
    }

    set deferRendering(value: any) {
        this._setOption('deferRendering', value);
    }

    @Input()
    get maxHeight(): any {
        return this._getOption('maxHeight');
    }

    set maxHeight(value: any) {
        this._setOption('maxHeight', value);
    }

    @Input()
    get maxWidth(): any {
        return this._getOption('maxWidth');
    }

    set maxWidth(value: any) {
        this._setOption('maxWidth', value);
    }

    @Input()
    get minHeight(): any {
        return this._getOption('minHeight');
    }

    set minHeight(value: any) {
        this._setOption('minHeight', value);
    }

    @Input()
    get minWidth(): any {
        return this._getOption('minWidth');
    }

    set minWidth(value: any) {
        this._setOption('minWidth', value);
    }

    @Input()
    get shading(): any {
        return this._getOption('shading');
    }

    set shading(value: any) {
        this._setOption('shading', value);
    }

    @Input()
    get shadingColor(): any {
        return this._getOption('shadingColor');
    }

    set shadingColor(value: any) {
        this._setOption('shadingColor', value);
    }

    @Input()
    get closeOnClick(): any {
        return this._getOption('closeOnClick');
    }

    set closeOnClick(value: any) {
        this._setOption('closeOnClick', value);
    }

    @Input()
    get closeOnSwipe(): any {
        return this._getOption('closeOnSwipe');
    }

    set closeOnSwipe(value: any) {
        this._setOption('closeOnSwipe', value);
    }

    @Input()
    get displayTime(): any {
        return this._getOption('displayTime');
    }

    set displayTime(value: any) {
        this._setOption('displayTime', value);
    }

    @Input()
    get message(): any {
        return this._getOption('message');
    }

    set message(value: any) {
        this._setOption('message', value);
    }

    @Input()
    get position(): any {
        return this._getOption('position');
    }

    set position(value: any) {
        this._setOption('position', value);
    }

    @Input()
    get type(): any {
        return this._getOption('type');
    }

    set type(value: any) {
        this._setOption('type', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onContentReady: EventEmitter<any>;
    @Output() onHidden: EventEmitter<any>;
    @Output() onHiding: EventEmitter<any>;
    @Output() onShowing: EventEmitter<any>;
    @Output() onShown: EventEmitter<any>;
    @Output() heightChange: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() widthChange: EventEmitter<any>;
    @Output() accessKeyChange: EventEmitter<any>;
    @Output() focusStateEnabledChange: EventEmitter<any>;
    @Output() hintChange: EventEmitter<any>;
    @Output() hoverStateEnabledChange: EventEmitter<any>;
    @Output() tabIndexChange: EventEmitter<any>;
    @Output() visibleChange: EventEmitter<any>;
    @Output() animationChange: EventEmitter<any>;
    @Output() closeOnBackButtonChange: EventEmitter<any>;
    @Output() closeOnOutsideClickChange: EventEmitter<any>;
    @Output() contentTemplateChange: EventEmitter<any>;
    @Output() deferRenderingChange: EventEmitter<any>;
    @Output() maxHeightChange: EventEmitter<any>;
    @Output() maxWidthChange: EventEmitter<any>;
    @Output() minHeightChange: EventEmitter<any>;
    @Output() minWidthChange: EventEmitter<any>;
    @Output() shadingChange: EventEmitter<any>;
    @Output() shadingColorChange: EventEmitter<any>;
    @Output() closeOnClickChange: EventEmitter<any>;
    @Output() closeOnSwipeChange: EventEmitter<any>;
    @Output() displayTimeChange: EventEmitter<any>;
    @Output() messageChange: EventEmitter<any>;
    @Output() positionChange: EventEmitter<any>;
    @Output() typeChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxToast';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'accessKeyChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'animationChange' },
            { emit: 'closeOnBackButtonChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'closeOnClickChange' },
            { emit: 'closeOnSwipeChange' },
            { emit: 'displayTimeChange' },
            { emit: 'messageChange' },
            { emit: 'positionChange' },
            { emit: 'typeChange' }
        ];

        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.accessKey',
            'this.focusStateEnabled',
            'this.hint',
            'this.hoverStateEnabled',
            'this.tabIndex',
            'this.visible',
            'this.animation',
            'this.closeOnBackButton',
            'this.closeOnOutsideClick',
            'this.contentTemplate',
            'this.deferRendering',
            'this.maxHeight',
            'this.maxWidth',
            'this.minHeight',
            'this.minWidth',
            'this.shading',
            'this.shadingColor',
            'this.closeOnClick',
            'this.closeOnSwipe',
            'this.displayTime',
            'this.message',
            'this.position',
            'this.type'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onContentReady = new EventEmitter();
        this.onHidden = new EventEmitter();
        this.onHiding = new EventEmitter();
        this.onShowing = new EventEmitter();
        this.onShown = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.accessKeyChange = new EventEmitter();
        this.focusStateEnabledChange = new EventEmitter();
        this.hintChange = new EventEmitter();
        this.hoverStateEnabledChange = new EventEmitter();
        this.tabIndexChange = new EventEmitter();
        this.visibleChange = new EventEmitter();
        this.animationChange = new EventEmitter();
        this.closeOnBackButtonChange = new EventEmitter();
        this.closeOnOutsideClickChange = new EventEmitter();
        this.contentTemplateChange = new EventEmitter();
        this.deferRenderingChange = new EventEmitter();
        this.maxHeightChange = new EventEmitter();
        this.maxWidthChange = new EventEmitter();
        this.minHeightChange = new EventEmitter();
        this.minWidthChange = new EventEmitter();
        this.shadingChange = new EventEmitter();
        this.shadingColorChange = new EventEmitter();
        this.closeOnClickChange = new EventEmitter();
        this.closeOnSwipeChange = new EventEmitter();
        this.displayTimeChange = new EventEmitter();
        this.messageChange = new EventEmitter();
        this.positionChange = new EventEmitter();
        this.typeChange = new EventEmitter();
    }

    protected _createInstance(element, options) {
        return new DxToast(element, options);
    }

}



@NgModule({
  declarations: [
    DxToastComponent
  ],
  exports: [
    DxToastComponent
  ],
})
export class DxToastModule { }
