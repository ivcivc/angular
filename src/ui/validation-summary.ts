



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

import DxValidationSummary from 'devextreme/ui/validation_summary';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-validation-summary',
    template: '',
    providers: providers
})
export class DxValidationSummaryComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxValidationSummary;


    @Input()
    get hoverStateEnabled(): any {
        return this._getOption('hoverStateEnabled');
    }

    set hoverStateEnabled(value: any) {
        this._setOption('hoverStateEnabled', value);
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
    get validationGroup(): any {
        return this._getOption('validationGroup');
    }

    set validationGroup(value: any) {
        this._setOption('validationGroup', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onContentReady: EventEmitter<any>;
    @Output() onItemClick: EventEmitter<any>;
    @Output() hoverStateEnabledChange: EventEmitter<any>;
    @Output() itemTemplateChange: EventEmitter<any>;
    @Output() itemsChange: EventEmitter<any>;
    @Output() validationGroupChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxValidationSummary';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'itemsChange' },
            { emit: 'validationGroupChange' }
        ];

        this._properties = [
            'this.hoverStateEnabled',
            'this.itemTemplate',
            'this.items',
            'this.validationGroup'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onContentReady = new EventEmitter();
        this.onItemClick = new EventEmitter();
        this.hoverStateEnabledChange = new EventEmitter();
        this.itemTemplateChange = new EventEmitter();
        this.itemsChange = new EventEmitter();
        this.validationGroupChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxValidationSummary(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('items', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxValidationSummaryComponent
  ],
  exports: [
    DxValidationSummaryComponent
  ],
})
export class DxValidationSummaryModule { }
