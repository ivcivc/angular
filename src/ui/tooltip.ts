



import {
    Component,
    NgModule,
    ElementRef,
    EventEmitter,
    NgZone,
    Input,
    Output,
    OnChanges,
    DoCheck,
    SimpleChanges
} from '@angular/core';

import DxTooltip from 'devextreme/ui/tooltip';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-tooltip',
    template: '',
    providers: providers
})
export class DxTooltipComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxTooltip;


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
    get disabled(): any {
        return this._getOption('disabled');
    }

    set disabled(value: any) {
        this._setOption('disabled', value);
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
    get buttons(): any {
        return this._getOption('buttons');
    }

    set buttons(value: any) {
        this._setOption('buttons', value);
    }

    @Input()
    get hideEvent(): any {
        return this._getOption('hideEvent');
    }

    set hideEvent(value: any) {
        this._setOption('hideEvent', value);
    }

    @Input()
    get position(): any {
        return this._getOption('position');
    }

    set position(value: any) {
        this._setOption('position', value);
    }

    @Input()
    get showEvent(): any {
        return this._getOption('showEvent');
    }

    set showEvent(value: any) {
        this._setOption('showEvent', value);
    }

    @Input()
    get target(): any {
        return this._getOption('target');
    }

    set target(value: any) {
        this._setOption('target', value);
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
    @Output() disabledChange: EventEmitter<any>;
    @Output() hintChange: EventEmitter<any>;
    @Output() hoverStateEnabledChange: EventEmitter<any>;
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
    @Output() buttonsChange: EventEmitter<any>;
    @Output() hideEventChange: EventEmitter<any>;
    @Output() positionChange: EventEmitter<any>;
    @Output() showEventChange: EventEmitter<any>;
    @Output() targetChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxTooltip';
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
            { emit: 'disabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
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
            { emit: 'buttonsChange' },
            { emit: 'hideEventChange' },
            { emit: 'positionChange' },
            { emit: 'showEventChange' },
            { emit: 'targetChange' }
        ];

        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.disabled',
            'this.hint',
            'this.hoverStateEnabled',
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
            'this.buttons',
            'this.hideEvent',
            'this.position',
            'this.showEvent',
            'this.target'
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
        this.disabledChange = new EventEmitter();
        this.hintChange = new EventEmitter();
        this.hoverStateEnabledChange = new EventEmitter();
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
        this.buttonsChange = new EventEmitter();
        this.hideEventChange = new EventEmitter();
        this.positionChange = new EventEmitter();
        this.showEventChange = new EventEmitter();
        this.targetChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxTooltip(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('buttons', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('buttons');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxTooltipComponent
  ],
  exports: [
    DxTooltipComponent
  ],
})
export class DxTooltipModule { }
