



import {
    Component,
    NgModule,
    ElementRef,
    EventEmitter,
    NgZone,
    Input,
    Output
} from '@angular/core';

import DxSlideOutView from 'devextreme/ui/slide_out_view';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';


let providers = [];
providers.push(DxTemplateHost, WatcherHelper);


@Component({
    selector: 'dx-slide-out-view',
    template: '',
    providers: providers
})
export class DxSlideOutViewComponent extends DxComponent {
    instance: DxSlideOutView;


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
    get contentTemplate(): any {
        return this._getOption('contentTemplate');
    }

    set contentTemplate(value: any) {
        this._setOption('contentTemplate', value);
    }

    @Input()
    get menuPosition(): any {
        return this._getOption('menuPosition');
    }

    set menuPosition(value: any) {
        this._setOption('menuPosition', value);
    }

    @Input()
    get menuTemplate(): any {
        return this._getOption('menuTemplate');
    }

    set menuTemplate(value: any) {
        this._setOption('menuTemplate', value);
    }

    @Input()
    get menuVisible(): any {
        return this._getOption('menuVisible');
    }

    set menuVisible(value: any) {
        this._setOption('menuVisible', value);
    }

    @Input()
    get swipeEnabled(): any {
        return this._getOption('swipeEnabled');
    }

    set swipeEnabled(value: any) {
        this._setOption('swipeEnabled', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() heightChange: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() widthChange: EventEmitter<any>;
    @Output() activeStateEnabledChange: EventEmitter<any>;
    @Output() disabledChange: EventEmitter<any>;
    @Output() hintChange: EventEmitter<any>;
    @Output() hoverStateEnabledChange: EventEmitter<any>;
    @Output() visibleChange: EventEmitter<any>;
    @Output() contentTemplateChange: EventEmitter<any>;
    @Output() menuPositionChange: EventEmitter<any>;
    @Output() menuTemplateChange: EventEmitter<any>;
    @Output() menuVisibleChange: EventEmitter<any>;
    @Output() swipeEnabledChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxSlideOutView';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'menuPositionChange' },
            { emit: 'menuTemplateChange' },
            { emit: 'menuVisibleChange' },
            { emit: 'swipeEnabledChange' }
        ];

        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.activeStateEnabled',
            'this.disabled',
            'this.hint',
            'this.hoverStateEnabled',
            'this.visible',
            'this.contentTemplate',
            'this.menuPosition',
            'this.menuTemplate',
            'this.menuVisible',
            'this.swipeEnabled'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.activeStateEnabledChange = new EventEmitter();
        this.disabledChange = new EventEmitter();
        this.hintChange = new EventEmitter();
        this.hoverStateEnabledChange = new EventEmitter();
        this.visibleChange = new EventEmitter();
        this.contentTemplateChange = new EventEmitter();
        this.menuPositionChange = new EventEmitter();
        this.menuTemplateChange = new EventEmitter();
        this.menuVisibleChange = new EventEmitter();
        this.swipeEnabledChange = new EventEmitter();
    }

    protected _createInstance(element, options) {
        return new DxSlideOutView(element, options);
    }

}



@NgModule({
  declarations: [
    DxSlideOutViewComponent
  ],
  exports: [
    DxSlideOutViewComponent
  ],
})
export class DxSlideOutViewModule { }
