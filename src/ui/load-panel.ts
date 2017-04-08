



import {
    Component,
    NgModule,
    ElementRef,
    EventEmitter,
    NgZone,
    Input,
    Output
} from '@angular/core';

import DxLoadPanel from 'devextreme/ui/load_panel';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';


let providers = [];
providers.push(DxTemplateHost, WatcherHelper);


@Component({
    selector: 'dx-load-panel',
    template: '',
    providers: providers
})
export class DxLoadPanelComponent extends DxComponent {
    instance: DxLoadPanel;


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
    get closeOnOutsideClick(): any {
        return this._getOption('closeOnOutsideClick');
    }

    set closeOnOutsideClick(value: any) {
        this._setOption('closeOnOutsideClick', value);
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
    get delay(): any {
        return this._getOption('delay');
    }

    set delay(value: any) {
        this._setOption('delay', value);
    }

    @Input()
    get indicatorSrc(): any {
        return this._getOption('indicatorSrc');
    }

    set indicatorSrc(value: any) {
        this._setOption('indicatorSrc', value);
    }

    @Input()
    get message(): any {
        return this._getOption('message');
    }

    set message(value: any) {
        this._setOption('message', value);
    }

    @Input()
    get showIndicator(): any {
        return this._getOption('showIndicator');
    }

    set showIndicator(value: any) {
        this._setOption('showIndicator', value);
    }

    @Input()
    get showPane(): any {
        return this._getOption('showPane');
    }

    set showPane(value: any) {
        this._setOption('showPane', value);
    }

    @Input()
    get position(): any {
        return this._getOption('position');
    }

    set position(value: any) {
        this._setOption('position', value);
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
    @Output() focusStateEnabledChange: EventEmitter<any>;
    @Output() hintChange: EventEmitter<any>;
    @Output() hoverStateEnabledChange: EventEmitter<any>;
    @Output() visibleChange: EventEmitter<any>;
    @Output() animationChange: EventEmitter<any>;
    @Output() closeOnOutsideClickChange: EventEmitter<any>;
    @Output() deferRenderingChange: EventEmitter<any>;
    @Output() maxHeightChange: EventEmitter<any>;
    @Output() maxWidthChange: EventEmitter<any>;
    @Output() minHeightChange: EventEmitter<any>;
    @Output() minWidthChange: EventEmitter<any>;
    @Output() shadingChange: EventEmitter<any>;
    @Output() shadingColorChange: EventEmitter<any>;
    @Output() delayChange: EventEmitter<any>;
    @Output() indicatorSrcChange: EventEmitter<any>;
    @Output() messageChange: EventEmitter<any>;
    @Output() showIndicatorChange: EventEmitter<any>;
    @Output() showPaneChange: EventEmitter<any>;
    @Output() positionChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxLoadPanel';
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
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'animationChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'delayChange' },
            { emit: 'indicatorSrcChange' },
            { emit: 'messageChange' },
            { emit: 'showIndicatorChange' },
            { emit: 'showPaneChange' },
            { emit: 'positionChange' }
        ];

        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.focusStateEnabled',
            'this.hint',
            'this.hoverStateEnabled',
            'this.visible',
            'this.animation',
            'this.closeOnOutsideClick',
            'this.deferRendering',
            'this.maxHeight',
            'this.maxWidth',
            'this.minHeight',
            'this.minWidth',
            'this.shading',
            'this.shadingColor',
            'this.delay',
            'this.indicatorSrc',
            'this.message',
            'this.showIndicator',
            'this.showPane',
            'this.position'
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
        this.focusStateEnabledChange = new EventEmitter();
        this.hintChange = new EventEmitter();
        this.hoverStateEnabledChange = new EventEmitter();
        this.visibleChange = new EventEmitter();
        this.animationChange = new EventEmitter();
        this.closeOnOutsideClickChange = new EventEmitter();
        this.deferRenderingChange = new EventEmitter();
        this.maxHeightChange = new EventEmitter();
        this.maxWidthChange = new EventEmitter();
        this.minHeightChange = new EventEmitter();
        this.minWidthChange = new EventEmitter();
        this.shadingChange = new EventEmitter();
        this.shadingColorChange = new EventEmitter();
        this.delayChange = new EventEmitter();
        this.indicatorSrcChange = new EventEmitter();
        this.messageChange = new EventEmitter();
        this.showIndicatorChange = new EventEmitter();
        this.showPaneChange = new EventEmitter();
        this.positionChange = new EventEmitter();
    }

    protected _createInstance(element, options) {
        return new DxLoadPanel(element, options);
    }

}



@NgModule({
  declarations: [
    DxLoadPanelComponent
  ],
  exports: [
    DxLoadPanelComponent
  ],
})
export class DxLoadPanelModule { }
