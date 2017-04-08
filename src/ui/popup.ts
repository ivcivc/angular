



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

import DxPopup from 'devextreme/ui/popup';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-popup',
    template: '<ng-content></ng-content>',
    providers: providers
})
export class DxPopupComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxPopup;


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
    get dragEnabled(): any {
        return this._getOption('dragEnabled');
    }

    set dragEnabled(value: any) {
        this._setOption('dragEnabled', value);
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
    get fullScreen(): any {
        return this._getOption('fullScreen');
    }

    set fullScreen(value: any) {
        this._setOption('fullScreen', value);
    }

    @Input()
    get resizeEnabled(): any {
        return this._getOption('resizeEnabled');
    }

    set resizeEnabled(value: any) {
        this._setOption('resizeEnabled', value);
    }

    @Input()
    get showCloseButton(): any {
        return this._getOption('showCloseButton');
    }

    set showCloseButton(value: any) {
        this._setOption('showCloseButton', value);
    }

    @Input()
    get showTitle(): any {
        return this._getOption('showTitle');
    }

    set showTitle(value: any) {
        this._setOption('showTitle', value);
    }

    @Input()
    get title(): any {
        return this._getOption('title');
    }

    set title(value: any) {
        this._setOption('title', value);
    }

    @Input()
    get titleTemplate(): any {
        return this._getOption('titleTemplate');
    }

    set titleTemplate(value: any) {
        this._setOption('titleTemplate', value);
    }

    @Input()
    get toolbarItems(): any {
        return this._getOption('toolbarItems');
    }

    set toolbarItems(value: any) {
        this._setOption('toolbarItems', value);
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
    @Output() onResize: EventEmitter<any>;
    @Output() onResizeEnd: EventEmitter<any>;
    @Output() onResizeStart: EventEmitter<any>;
    @Output() onTitleRendered: EventEmitter<any>;
    @Output() heightChange: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() widthChange: EventEmitter<any>;
    @Output() accessKeyChange: EventEmitter<any>;
    @Output() disabledChange: EventEmitter<any>;
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
    @Output() dragEnabledChange: EventEmitter<any>;
    @Output() maxHeightChange: EventEmitter<any>;
    @Output() maxWidthChange: EventEmitter<any>;
    @Output() minHeightChange: EventEmitter<any>;
    @Output() minWidthChange: EventEmitter<any>;
    @Output() shadingChange: EventEmitter<any>;
    @Output() shadingColorChange: EventEmitter<any>;
    @Output() buttonsChange: EventEmitter<any>;
    @Output() fullScreenChange: EventEmitter<any>;
    @Output() resizeEnabledChange: EventEmitter<any>;
    @Output() showCloseButtonChange: EventEmitter<any>;
    @Output() showTitleChange: EventEmitter<any>;
    @Output() titleChange: EventEmitter<any>;
    @Output() titleTemplateChange: EventEmitter<any>;
    @Output() toolbarItemsChange: EventEmitter<any>;
    @Output() positionChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxPopup';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { subscribe: 'resize', emit: 'onResize' },
            { subscribe: 'resizeEnd', emit: 'onResizeEnd' },
            { subscribe: 'resizeStart', emit: 'onResizeStart' },
            { subscribe: 'titleRendered', emit: 'onTitleRendered' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'accessKeyChange' },
            { emit: 'disabledChange' },
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
            { emit: 'dragEnabledChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'buttonsChange' },
            { emit: 'fullScreenChange' },
            { emit: 'resizeEnabledChange' },
            { emit: 'showCloseButtonChange' },
            { emit: 'showTitleChange' },
            { emit: 'titleChange' },
            { emit: 'titleTemplateChange' },
            { emit: 'toolbarItemsChange' },
            { emit: 'positionChange' }
        ];

        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.accessKey',
            'this.disabled',
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
            'this.dragEnabled',
            'this.maxHeight',
            'this.maxWidth',
            'this.minHeight',
            'this.minWidth',
            'this.shading',
            'this.shadingColor',
            'this.buttons',
            'this.fullScreen',
            'this.resizeEnabled',
            'this.showCloseButton',
            'this.showTitle',
            'this.title',
            'this.titleTemplate',
            'this.toolbarItems',
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
        this.onResize = new EventEmitter();
        this.onResizeEnd = new EventEmitter();
        this.onResizeStart = new EventEmitter();
        this.onTitleRendered = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.accessKeyChange = new EventEmitter();
        this.disabledChange = new EventEmitter();
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
        this.dragEnabledChange = new EventEmitter();
        this.maxHeightChange = new EventEmitter();
        this.maxWidthChange = new EventEmitter();
        this.minHeightChange = new EventEmitter();
        this.minWidthChange = new EventEmitter();
        this.shadingChange = new EventEmitter();
        this.shadingColorChange = new EventEmitter();
        this.buttonsChange = new EventEmitter();
        this.fullScreenChange = new EventEmitter();
        this.resizeEnabledChange = new EventEmitter();
        this.showCloseButtonChange = new EventEmitter();
        this.showTitleChange = new EventEmitter();
        this.titleChange = new EventEmitter();
        this.titleTemplateChange = new EventEmitter();
        this.toolbarItemsChange = new EventEmitter();
        this.positionChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxPopup(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('buttons', changes);
        this._idh.setup('toolbarItems', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('buttons');
        this._idh.doCheck('toolbarItems');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxPopupComponent
  ],
  exports: [
    DxPopupComponent
  ],
})
export class DxPopupModule { }
