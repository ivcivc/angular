



import {
    Component,
    NgModule,
    ElementRef,
    EventEmitter,
    NgZone,
    Input,
    Output
} from '@angular/core';

import DxResizable from 'devextreme/ui/resizable';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';


let providers = [];
providers.push(DxTemplateHost, WatcherHelper);


@Component({
    selector: 'dx-resizable',
    template: '<ng-content></ng-content>',
    providers: providers
})
export class DxResizableComponent extends DxComponent {
    instance: DxResizable;


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
    get handles(): any {
        return this._getOption('handles');
    }

    set handles(value: any) {
        this._setOption('handles', value);
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

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onResize: EventEmitter<any>;
    @Output() onResizeEnd: EventEmitter<any>;
    @Output() onResizeStart: EventEmitter<any>;
    @Output() heightChange: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() widthChange: EventEmitter<any>;
    @Output() handlesChange: EventEmitter<any>;
    @Output() maxHeightChange: EventEmitter<any>;
    @Output() maxWidthChange: EventEmitter<any>;
    @Output() minHeightChange: EventEmitter<any>;
    @Output() minWidthChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxResizable';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'resize', emit: 'onResize' },
            { subscribe: 'resizeEnd', emit: 'onResizeEnd' },
            { subscribe: 'resizeStart', emit: 'onResizeStart' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'handlesChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' }
        ];

        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.handles',
            'this.maxHeight',
            'this.maxWidth',
            'this.minHeight',
            'this.minWidth'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onResize = new EventEmitter();
        this.onResizeEnd = new EventEmitter();
        this.onResizeStart = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.handlesChange = new EventEmitter();
        this.maxHeightChange = new EventEmitter();
        this.maxWidthChange = new EventEmitter();
        this.minHeightChange = new EventEmitter();
        this.minWidthChange = new EventEmitter();
    }

    protected _createInstance(element, options) {
        return new DxResizable(element, options);
    }

}



@NgModule({
  declarations: [
    DxResizableComponent
  ],
  exports: [
    DxResizableComponent
  ],
})
export class DxResizableModule { }
