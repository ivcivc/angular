



import {
    Component,
    NgModule,
    ElementRef,
    EventEmitter,
    NgZone,
    Input,
    Output
} from '@angular/core';

import DxScrollView from 'devextreme/ui/scroll_view';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';


let providers = [];
providers.push(DxTemplateHost, WatcherHelper);


@Component({
    selector: 'dx-scroll-view',
    template: '<ng-content></ng-content>',
    providers: providers
})
export class DxScrollViewComponent extends DxComponent {
    instance: DxScrollView;


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
    get bounceEnabled(): any {
        return this._getOption('bounceEnabled');
    }

    set bounceEnabled(value: any) {
        this._setOption('bounceEnabled', value);
    }

    @Input()
    get direction(): any {
        return this._getOption('direction');
    }

    set direction(value: any) {
        this._setOption('direction', value);
    }

    @Input()
    get disabled(): any {
        return this._getOption('disabled');
    }

    set disabled(value: any) {
        this._setOption('disabled', value);
    }

    @Input()
    get scrollByContent(): any {
        return this._getOption('scrollByContent');
    }

    set scrollByContent(value: any) {
        this._setOption('scrollByContent', value);
    }

    @Input()
    get scrollByThumb(): any {
        return this._getOption('scrollByThumb');
    }

    set scrollByThumb(value: any) {
        this._setOption('scrollByThumb', value);
    }

    @Input()
    get showScrollbar(): any {
        return this._getOption('showScrollbar');
    }

    set showScrollbar(value: any) {
        this._setOption('showScrollbar', value);
    }

    @Input()
    get useNative(): any {
        return this._getOption('useNative');
    }

    set useNative(value: any) {
        this._setOption('useNative', value);
    }

    @Input()
    get pulledDownText(): any {
        return this._getOption('pulledDownText');
    }

    set pulledDownText(value: any) {
        this._setOption('pulledDownText', value);
    }

    @Input()
    get pullingDownText(): any {
        return this._getOption('pullingDownText');
    }

    set pullingDownText(value: any) {
        this._setOption('pullingDownText', value);
    }

    @Input()
    get reachBottomText(): any {
        return this._getOption('reachBottomText');
    }

    set reachBottomText(value: any) {
        this._setOption('reachBottomText', value);
    }

    @Input()
    get refreshingText(): any {
        return this._getOption('refreshingText');
    }

    set refreshingText(value: any) {
        this._setOption('refreshingText', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onScroll: EventEmitter<any>;
    @Output() onUpdated: EventEmitter<any>;
    @Output() onPullDown: EventEmitter<any>;
    @Output() onReachBottom: EventEmitter<any>;
    @Output() heightChange: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() widthChange: EventEmitter<any>;
    @Output() bounceEnabledChange: EventEmitter<any>;
    @Output() directionChange: EventEmitter<any>;
    @Output() disabledChange: EventEmitter<any>;
    @Output() scrollByContentChange: EventEmitter<any>;
    @Output() scrollByThumbChange: EventEmitter<any>;
    @Output() showScrollbarChange: EventEmitter<any>;
    @Output() useNativeChange: EventEmitter<any>;
    @Output() pulledDownTextChange: EventEmitter<any>;
    @Output() pullingDownTextChange: EventEmitter<any>;
    @Output() reachBottomTextChange: EventEmitter<any>;
    @Output() refreshingTextChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxScrollView';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'scroll', emit: 'onScroll' },
            { subscribe: 'updated', emit: 'onUpdated' },
            { subscribe: 'pullDown', emit: 'onPullDown' },
            { subscribe: 'reachBottom', emit: 'onReachBottom' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'bounceEnabledChange' },
            { emit: 'directionChange' },
            { emit: 'disabledChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollByThumbChange' },
            { emit: 'showScrollbarChange' },
            { emit: 'useNativeChange' },
            { emit: 'pulledDownTextChange' },
            { emit: 'pullingDownTextChange' },
            { emit: 'reachBottomTextChange' },
            { emit: 'refreshingTextChange' }
        ];

        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.bounceEnabled',
            'this.direction',
            'this.disabled',
            'this.scrollByContent',
            'this.scrollByThumb',
            'this.showScrollbar',
            'this.useNative',
            'this.pulledDownText',
            'this.pullingDownText',
            'this.reachBottomText',
            'this.refreshingText'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onScroll = new EventEmitter();
        this.onUpdated = new EventEmitter();
        this.onPullDown = new EventEmitter();
        this.onReachBottom = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.bounceEnabledChange = new EventEmitter();
        this.directionChange = new EventEmitter();
        this.disabledChange = new EventEmitter();
        this.scrollByContentChange = new EventEmitter();
        this.scrollByThumbChange = new EventEmitter();
        this.showScrollbarChange = new EventEmitter();
        this.useNativeChange = new EventEmitter();
        this.pulledDownTextChange = new EventEmitter();
        this.pullingDownTextChange = new EventEmitter();
        this.reachBottomTextChange = new EventEmitter();
        this.refreshingTextChange = new EventEmitter();
    }

    protected _createInstance(element, options) {
        return new DxScrollView(element, options);
    }

}



@NgModule({
  declarations: [
    DxScrollViewComponent
  ],
  exports: [
    DxScrollViewComponent
  ],
})
export class DxScrollViewModule { }
