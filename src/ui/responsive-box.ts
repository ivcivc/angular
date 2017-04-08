



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

import DxResponsiveBox from 'devextreme/ui/responsive_box';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-responsive-box',
    template: '',
    providers: providers
})
export class DxResponsiveBoxComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxResponsiveBox;


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
    get dataSource(): any {
        return this._getOption('dataSource');
    }

    set dataSource(value: any) {
        this._setOption('dataSource', value);
    }

    @Input()
    get itemHoldTimeout(): any {
        return this._getOption('itemHoldTimeout');
    }

    set itemHoldTimeout(value: any) {
        this._setOption('itemHoldTimeout', value);
    }

    @Input()
    get itemTemplate(): any {
        return this._getOption('itemTemplate');
    }

    set itemTemplate(value: any) {
        this._setOption('itemTemplate', value);
    }

    @Input()
    get items(): any {
        return this._getOption('items');
    }

    set items(value: any) {
        this._setOption('items', value);
    }

    @Input()
    get cols(): any {
        return this._getOption('cols');
    }

    set cols(value: any) {
        this._setOption('cols', value);
    }

    @Input()
    get rows(): any {
        return this._getOption('rows');
    }

    set rows(value: any) {
        this._setOption('rows', value);
    }

    @Input()
    get screenByWidth(): any {
        return this._getOption('screenByWidth');
    }

    set screenByWidth(value: any) {
        this._setOption('screenByWidth', value);
    }

    @Input()
    get singleColumnScreen(): any {
        return this._getOption('singleColumnScreen');
    }

    set singleColumnScreen(value: any) {
        this._setOption('singleColumnScreen', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onContentReady: EventEmitter<any>;
    @Output() onItemClick: EventEmitter<any>;
    @Output() onItemContextMenu: EventEmitter<any>;
    @Output() onItemHold: EventEmitter<any>;
    @Output() onItemRendered: EventEmitter<any>;
    @Output() heightChange: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() widthChange: EventEmitter<any>;
    @Output() disabledChange: EventEmitter<any>;
    @Output() hoverStateEnabledChange: EventEmitter<any>;
    @Output() visibleChange: EventEmitter<any>;
    @Output() dataSourceChange: EventEmitter<any>;
    @Output() itemHoldTimeoutChange: EventEmitter<any>;
    @Output() itemTemplateChange: EventEmitter<any>;
    @Output() itemsChange: EventEmitter<any>;
    @Output() colsChange: EventEmitter<any>;
    @Output() rowsChange: EventEmitter<any>;
    @Output() screenByWidthChange: EventEmitter<any>;
    @Output() singleColumnScreenChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxResponsiveBox';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'disabledChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'dataSourceChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'itemsChange' },
            { emit: 'colsChange' },
            { emit: 'rowsChange' },
            { emit: 'screenByWidthChange' },
            { emit: 'singleColumnScreenChange' }
        ];

        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.disabled',
            'this.hoverStateEnabled',
            'this.visible',
            'this.dataSource',
            'this.itemHoldTimeout',
            'this.itemTemplate',
            'this.items',
            'this.cols',
            'this.rows',
            'this.screenByWidth',
            'this.singleColumnScreen'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onContentReady = new EventEmitter();
        this.onItemClick = new EventEmitter();
        this.onItemContextMenu = new EventEmitter();
        this.onItemHold = new EventEmitter();
        this.onItemRendered = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.disabledChange = new EventEmitter();
        this.hoverStateEnabledChange = new EventEmitter();
        this.visibleChange = new EventEmitter();
        this.dataSourceChange = new EventEmitter();
        this.itemHoldTimeoutChange = new EventEmitter();
        this.itemTemplateChange = new EventEmitter();
        this.itemsChange = new EventEmitter();
        this.colsChange = new EventEmitter();
        this.rowsChange = new EventEmitter();
        this.screenByWidthChange = new EventEmitter();
        this.singleColumnScreenChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxResponsiveBox(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
        this._idh.setup('cols', changes);
        this._idh.setup('rows', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('cols');
        this._idh.doCheck('rows');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxResponsiveBoxComponent
  ],
  exports: [
    DxResponsiveBoxComponent
  ],
})
export class DxResponsiveBoxModule { }
