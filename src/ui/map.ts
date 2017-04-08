



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

import DxMap from 'devextreme/ui/map';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-map',
    template: '',
    providers: providers
})
export class DxMapComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxMap;


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
    get accessKey(): any {
        return this._getOption('accessKey');
    }

    set accessKey(value: any) {
        this._setOption('accessKey', value);
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
    get focusStateEnabled(): any {
        return this._getOption('focusStateEnabled');
    }

    set focusStateEnabled(value: any) {
        this._setOption('focusStateEnabled', value);
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
    get tabIndex(): any {
        return this._getOption('tabIndex');
    }

    set tabIndex(value: any) {
        this._setOption('tabIndex', value);
    }

    @Input()
    get visible(): any {
        return this._getOption('visible');
    }

    set visible(value: any) {
        this._setOption('visible', value);
    }

    @Input()
    get autoAdjust(): any {
        return this._getOption('autoAdjust');
    }

    set autoAdjust(value: any) {
        this._setOption('autoAdjust', value);
    }

    @Input()
    get center(): any {
        return this._getOption('center');
    }

    set center(value: any) {
        this._setOption('center', value);
    }

    @Input()
    get controls(): any {
        return this._getOption('controls');
    }

    set controls(value: any) {
        this._setOption('controls', value);
    }

    @Input()
    get key(): any {
        return this._getOption('key');
    }

    set key(value: any) {
        this._setOption('key', value);
    }

    @Input()
    get markerIconSrc(): any {
        return this._getOption('markerIconSrc');
    }

    set markerIconSrc(value: any) {
        this._setOption('markerIconSrc', value);
    }

    @Input()
    get markers(): any {
        return this._getOption('markers');
    }

    set markers(value: any) {
        this._setOption('markers', value);
    }

    @Input()
    get provider(): any {
        return this._getOption('provider');
    }

    set provider(value: any) {
        this._setOption('provider', value);
    }

    @Input()
    get routes(): any {
        return this._getOption('routes');
    }

    set routes(value: any) {
        this._setOption('routes', value);
    }

    @Input()
    get type(): any {
        return this._getOption('type');
    }

    set type(value: any) {
        this._setOption('type', value);
    }

    @Input()
    get zoom(): any {
        return this._getOption('zoom');
    }

    set zoom(value: any) {
        this._setOption('zoom', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onClick: EventEmitter<any>;
    @Output() onMarkerAdded: EventEmitter<any>;
    @Output() onMarkerRemoved: EventEmitter<any>;
    @Output() onReady: EventEmitter<any>;
    @Output() onRouteAdded: EventEmitter<any>;
    @Output() onRouteRemoved: EventEmitter<any>;
    @Output() heightChange: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() widthChange: EventEmitter<any>;
    @Output() accessKeyChange: EventEmitter<any>;
    @Output() activeStateEnabledChange: EventEmitter<any>;
    @Output() disabledChange: EventEmitter<any>;
    @Output() focusStateEnabledChange: EventEmitter<any>;
    @Output() hintChange: EventEmitter<any>;
    @Output() hoverStateEnabledChange: EventEmitter<any>;
    @Output() tabIndexChange: EventEmitter<any>;
    @Output() visibleChange: EventEmitter<any>;
    @Output() autoAdjustChange: EventEmitter<any>;
    @Output() centerChange: EventEmitter<any>;
    @Output() controlsChange: EventEmitter<any>;
    @Output() keyChange: EventEmitter<any>;
    @Output() markerIconSrcChange: EventEmitter<any>;
    @Output() markersChange: EventEmitter<any>;
    @Output() providerChange: EventEmitter<any>;
    @Output() routesChange: EventEmitter<any>;
    @Output() typeChange: EventEmitter<any>;
    @Output() zoomChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxMap';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'markerAdded', emit: 'onMarkerAdded' },
            { subscribe: 'markerRemoved', emit: 'onMarkerRemoved' },
            { subscribe: 'ready', emit: 'onReady' },
            { subscribe: 'routeAdded', emit: 'onRouteAdded' },
            { subscribe: 'routeRemoved', emit: 'onRouteRemoved' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'autoAdjustChange' },
            { emit: 'centerChange' },
            { emit: 'controlsChange' },
            { emit: 'keyChange' },
            { emit: 'markerIconSrcChange' },
            { emit: 'markersChange' },
            { emit: 'providerChange' },
            { emit: 'routesChange' },
            { emit: 'typeChange' },
            { emit: 'zoomChange' }
        ];

        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.accessKey',
            'this.activeStateEnabled',
            'this.disabled',
            'this.focusStateEnabled',
            'this.hint',
            'this.hoverStateEnabled',
            'this.tabIndex',
            'this.visible',
            'this.autoAdjust',
            'this.center',
            'this.controls',
            'this.key',
            'this.markerIconSrc',
            'this.markers',
            'this.provider',
            'this.routes',
            'this.type',
            'this.zoom'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onMarkerAdded = new EventEmitter();
        this.onMarkerRemoved = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onRouteAdded = new EventEmitter();
        this.onRouteRemoved = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.accessKeyChange = new EventEmitter();
        this.activeStateEnabledChange = new EventEmitter();
        this.disabledChange = new EventEmitter();
        this.focusStateEnabledChange = new EventEmitter();
        this.hintChange = new EventEmitter();
        this.hoverStateEnabledChange = new EventEmitter();
        this.tabIndexChange = new EventEmitter();
        this.visibleChange = new EventEmitter();
        this.autoAdjustChange = new EventEmitter();
        this.centerChange = new EventEmitter();
        this.controlsChange = new EventEmitter();
        this.keyChange = new EventEmitter();
        this.markerIconSrcChange = new EventEmitter();
        this.markersChange = new EventEmitter();
        this.providerChange = new EventEmitter();
        this.routesChange = new EventEmitter();
        this.typeChange = new EventEmitter();
        this.zoomChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxMap(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('center', changes);
        this._idh.setup('markers', changes);
        this._idh.setup('routes', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('center');
        this._idh.doCheck('markers');
        this._idh.doCheck('routes');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxMapComponent
  ],
  exports: [
    DxMapComponent
  ],
})
export class DxMapModule { }
