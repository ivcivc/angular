



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

import DxValidator from 'devextreme/ui/validator';


import { DxComponentExtension } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-validator',
    template: '',
    providers: providers
})
export class DxValidatorComponent extends DxComponentExtension implements OnChanges, DoCheck {
    instance: DxValidator;


    @Input()
    get height(): any {
        return this._getOption('height');
    }

    set height(value: any) {
        this._setOption('height', value);
    }

    @Input()
    get width(): any {
        return this._getOption('width');
    }

    set width(value: any) {
        this._setOption('width', value);
    }

    @Input()
    get adapter(): any {
        return this._getOption('adapter');
    }

    set adapter(value: any) {
        this._setOption('adapter', value);
    }

    @Input()
    get name(): any {
        return this._getOption('name');
    }

    set name(value: any) {
        this._setOption('name', value);
    }

    @Input()
    get validationGroup(): any {
        return this._getOption('validationGroup');
    }

    set validationGroup(value: any) {
        this._setOption('validationGroup', value);
    }

    @Input()
    get validationRules(): any {
        return this._getOption('validationRules');
    }

    set validationRules(value: any) {
        this._setOption('validationRules', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onValidated: EventEmitter<any>;
    @Output() heightChange: EventEmitter<any>;
    @Output() widthChange: EventEmitter<any>;
    @Output() adapterChange: EventEmitter<any>;
    @Output() nameChange: EventEmitter<any>;
    @Output() validationGroupChange: EventEmitter<any>;
    @Output() validationRulesChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxValidator';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'validated', emit: 'onValidated' },
            { emit: 'heightChange' },
            { emit: 'widthChange' },
            { emit: 'adapterChange' },
            { emit: 'nameChange' },
            { emit: 'validationGroupChange' },
            { emit: 'validationRulesChange' }
        ];

        this._properties = [
            'this.height',
            'this.width',
            'this.adapter',
            'this.name',
            'this.validationGroup',
            'this.validationRules'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onValidated = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.adapterChange = new EventEmitter();
        this.nameChange = new EventEmitter();
        this.validationGroupChange = new EventEmitter();
        this.validationRulesChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxValidator(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('validationRules', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('validationRules');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxValidatorComponent
  ],
  exports: [
    DxValidatorComponent
  ],
})
export class DxValidatorModule { }
