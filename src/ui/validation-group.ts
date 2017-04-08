



import {
    Component,
    NgModule,
    ElementRef,
    EventEmitter,
    NgZone,
    Input,
    Output
} from '@angular/core';

import DxValidationGroup from 'devextreme/ui/validation_group';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';


let providers = [];
providers.push(DxTemplateHost, WatcherHelper);


@Component({
    selector: 'dx-validation-group',
    template: '<ng-content></ng-content>',
    providers: providers
})
export class DxValidationGroupComponent extends DxComponent {
    instance: DxValidationGroup;


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

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() heightChange: EventEmitter<any>;
    @Output() widthChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxValidationGroup';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'heightChange' },
            { emit: 'widthChange' }
        ];

        this._properties = [
            'this.height',
            'this.width'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.widthChange = new EventEmitter();
    }

    protected _createInstance(element, options) {
        return new DxValidationGroup(element, options);
    }

}



@NgModule({
  declarations: [
    DxValidationGroupComponent
  ],
  exports: [
    DxValidationGroupComponent
  ],
})
export class DxValidationGroupModule { }
