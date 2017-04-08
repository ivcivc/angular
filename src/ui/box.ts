



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

import DxBox from 'devextreme/ui/box';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-box',
    template: '',
    providers: providers
})
export class DxBoxComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxBox;


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
    get align(): any {
        return this._getOption('align');
    }

    set align(value: any) {
        this._setOption('align', value);
    }

    @Input()
    get crossAlign(): any {
        return this._getOption('crossAlign');
    }

    set crossAlign(value: any) {
        this._setOption('crossAlign', value);
    }

    @Input()
    get direction(): any {
        return this._getOption('direction');
    }

    set direction(value: any) {
        this._setOption('direction', value);
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
    @Output() alignChange: EventEmitter<any>;
    @Output() crossAlignChange: EventEmitter<any>;
    @Output() directionChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxBox';
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
            { emit: 'alignChange' },
            { emit: 'crossAlignChange' },
            { emit: 'directionChange' }
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
            'this.align',
            'this.crossAlign',
            'this.direction'
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
        this.alignChange = new EventEmitter();
        this.crossAlignChange = new EventEmitter();
        this.directionChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxBox(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('items', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxBoxComponent
  ],
  exports: [
    DxBoxComponent
  ],
})
export class DxBoxModule { }
