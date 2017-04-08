



import {
    Component,
    NgModule,
    ElementRef,
    EventEmitter,
    NgZone,
    Input,
    Output
} from '@angular/core';

import DxLoadIndicator from 'devextreme/ui/load_indicator';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';


let providers = [];
providers.push(DxTemplateHost, WatcherHelper);


@Component({
    selector: 'dx-load-indicator',
    template: '',
    providers: providers
})
export class DxLoadIndicatorComponent extends DxComponent {
    instance: DxLoadIndicator;


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
    get hint(): any {
        return this._getOption('hint');
    }

    set hint(value: any) {
        this._setOption('hint', value);
    }

    @Input()
    get visible(): any {
        return this._getOption('visible');
    }

    set visible(value: any) {
        this._setOption('visible', value);
    }

    @Input()
    get indicatorSrc(): any {
        return this._getOption('indicatorSrc');
    }

    set indicatorSrc(value: any) {
        this._setOption('indicatorSrc', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() heightChange: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() widthChange: EventEmitter<any>;
    @Output() hintChange: EventEmitter<any>;
    @Output() visibleChange: EventEmitter<any>;
    @Output() indicatorSrcChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxLoadIndicator';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'hintChange' },
            { emit: 'visibleChange' },
            { emit: 'indicatorSrcChange' }
        ];

        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.hint',
            'this.visible',
            'this.indicatorSrc'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.hintChange = new EventEmitter();
        this.visibleChange = new EventEmitter();
        this.indicatorSrcChange = new EventEmitter();
    }

    protected _createInstance(element, options) {
        return new DxLoadIndicator(element, options);
    }

}



@NgModule({
  declarations: [
    DxLoadIndicatorComponent
  ],
  exports: [
    DxLoadIndicatorComponent
  ],
})
export class DxLoadIndicatorModule { }
