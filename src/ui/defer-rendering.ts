



import {
    Component,
    NgModule,
    ElementRef,
    EventEmitter,
    NgZone,
    Input,
    Output
} from '@angular/core';

import DxDeferRendering from 'devextreme/ui/defer_rendering';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';


let providers = [];
providers.push(DxTemplateHost, WatcherHelper);


@Component({
    selector: 'dx-defer-rendering',
    template: '<ng-content></ng-content>',
    providers: providers
})
export class DxDeferRenderingComponent extends DxComponent {
    instance: DxDeferRendering;


    @Input()
    get renderWhen(): any {
        return this._getOption('renderWhen');
    }

    set renderWhen(value: any) {
        this._setOption('renderWhen', value);
    }

    @Input()
    get showLoadIndicator(): any {
        return this._getOption('showLoadIndicator');
    }

    set showLoadIndicator(value: any) {
        this._setOption('showLoadIndicator', value);
    }

    @Input()
    get staggerItemSelector(): any {
        return this._getOption('staggerItemSelector');
    }

    set staggerItemSelector(value: any) {
        this._setOption('staggerItemSelector', value);
    }

    @Input()
    get animation(): any {
        return this._getOption('animation');
    }

    set animation(value: any) {
        this._setOption('animation', value);
    }

    @Output() onRendered: EventEmitter<any>;
    @Output() onShown: EventEmitter<any>;
    @Output() renderWhenChange: EventEmitter<any>;
    @Output() showLoadIndicatorChange: EventEmitter<any>;
    @Output() staggerItemSelectorChange: EventEmitter<any>;
    @Output() animationChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxDeferRendering';
        this._events = [
            { subscribe: 'rendered', emit: 'onRendered' },
            { subscribe: 'shown', emit: 'onShown' },
            { emit: 'renderWhenChange' },
            { emit: 'showLoadIndicatorChange' },
            { emit: 'staggerItemSelectorChange' },
            { emit: 'animationChange' }
        ];

        this._properties = [
            'this.renderWhen',
            'this.showLoadIndicator',
            'this.staggerItemSelector',
            'this.animation'
        ];

        this.onRendered = new EventEmitter();
        this.onShown = new EventEmitter();
        this.renderWhenChange = new EventEmitter();
        this.showLoadIndicatorChange = new EventEmitter();
        this.staggerItemSelectorChange = new EventEmitter();
        this.animationChange = new EventEmitter();
    }

    protected _createInstance(element, options) {
        return new DxDeferRendering(element, options);
    }

}



@NgModule({
  declarations: [
    DxDeferRenderingComponent
  ],
  exports: [
    DxDeferRenderingComponent
  ],
})
export class DxDeferRenderingModule { }
