



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

import DxVectorMap from 'devextreme/viz/vector_map';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-vector-map',
    template: '',
    providers: providers
})
export class DxVectorMapComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxVectorMap;


    @Input()
    get rtlEnabled(): any {
        return this._getOption('rtlEnabled');
    }

    set rtlEnabled(value: any) {
        this._setOption('rtlEnabled', value);
    }

    @Input()
    get export(): any {
        return this._getOption('export');
    }

    set export(value: any) {
        this._setOption('export', value);
    }

    @Input()
    get loadingIndicator(): any {
        return this._getOption('loadingIndicator');
    }

    set loadingIndicator(value: any) {
        this._setOption('loadingIndicator', value);
    }

    @Input()
    get pathModified(): any {
        return this._getOption('pathModified');
    }

    set pathModified(value: any) {
        this._setOption('pathModified', value);
    }

    @Input()
    get redrawOnResize(): any {
        return this._getOption('redrawOnResize');
    }

    set redrawOnResize(value: any) {
        this._setOption('redrawOnResize', value);
    }

    @Input()
    get size(): any {
        return this._getOption('size');
    }

    set size(value: any) {
        this._setOption('size', value);
    }

    @Input()
    get theme(): any {
        return this._getOption('theme');
    }

    set theme(value: any) {
        this._setOption('theme', value);
    }

    @Input()
    get title(): any {
        return this._getOption('title');
    }

    set title(value: any) {
        this._setOption('title', value);
    }

    @Input()
    get tooltip(): any {
        return this._getOption('tooltip');
    }

    set tooltip(value: any) {
        this._setOption('tooltip', value);
    }

    @Input()
    get areaSettings(): any {
        return this._getOption('areaSettings');
    }

    set areaSettings(value: any) {
        this._setOption('areaSettings', value);
    }

    @Input()
    get background(): any {
        return this._getOption('background');
    }

    set background(value: any) {
        this._setOption('background', value);
    }

    @Input()
    get bounds(): any {
        return this._getOption('bounds');
    }

    set bounds(value: any) {
        this._setOption('bounds', value);
    }

    @Input()
    get center(): any {
        return this._getOption('center');
    }

    set center(value: any) {
        this._setOption('center', value);
    }

    @Input()
    get controlBar(): any {
        return this._getOption('controlBar');
    }

    set controlBar(value: any) {
        this._setOption('controlBar', value);
    }

    @Input()
    get layers(): any {
        return this._getOption('layers');
    }

    set layers(value: any) {
        this._setOption('layers', value);
    }

    @Input()
    get legends(): any {
        return this._getOption('legends');
    }

    set legends(value: any) {
        this._setOption('legends', value);
    }

    @Input()
    get mapData(): any {
        return this._getOption('mapData');
    }

    set mapData(value: any) {
        this._setOption('mapData', value);
    }

    @Input()
    get markers(): any {
        return this._getOption('markers');
    }

    set markers(value: any) {
        this._setOption('markers', value);
    }

    @Input()
    get markerSettings(): any {
        return this._getOption('markerSettings');
    }

    set markerSettings(value: any) {
        this._setOption('markerSettings', value);
    }

    @Input()
    get maxZoomFactor(): any {
        return this._getOption('maxZoomFactor');
    }

    set maxZoomFactor(value: any) {
        this._setOption('maxZoomFactor', value);
    }

    @Input()
    get panningEnabled(): any {
        return this._getOption('panningEnabled');
    }

    set panningEnabled(value: any) {
        this._setOption('panningEnabled', value);
    }

    @Input()
    get projection(): any {
        return this._getOption('projection');
    }

    set projection(value: any) {
        this._setOption('projection', value);
    }

    @Input()
    get touchEnabled(): any {
        return this._getOption('touchEnabled');
    }

    set touchEnabled(value: any) {
        this._setOption('touchEnabled', value);
    }

    @Input()
    get wheelEnabled(): any {
        return this._getOption('wheelEnabled');
    }

    set wheelEnabled(value: any) {
        this._setOption('wheelEnabled', value);
    }

    @Input()
    get zoomFactor(): any {
        return this._getOption('zoomFactor');
    }

    set zoomFactor(value: any) {
        this._setOption('zoomFactor', value);
    }

    @Input()
    get zoomingEnabled(): any {
        return this._getOption('zoomingEnabled');
    }

    set zoomingEnabled(value: any) {
        this._setOption('zoomingEnabled', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onDrawn: EventEmitter<any>;
    @Output() onExported: EventEmitter<any>;
    @Output() onExporting: EventEmitter<any>;
    @Output() onFileSaving: EventEmitter<any>;
    @Output() onIncidentOccurred: EventEmitter<any>;
    @Output() onAreaClick: EventEmitter<any>;
    @Output() onAreaSelectionChanged: EventEmitter<any>;
    @Output() onCenterChanged: EventEmitter<any>;
    @Output() onClick: EventEmitter<any>;
    @Output() onMarkerClick: EventEmitter<any>;
    @Output() onMarkerSelectionChanged: EventEmitter<any>;
    @Output() onSelectionChanged: EventEmitter<any>;
    @Output() onTooltipHidden: EventEmitter<any>;
    @Output() onTooltipShown: EventEmitter<any>;
    @Output() onZoomFactorChanged: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() exportChange: EventEmitter<any>;
    @Output() loadingIndicatorChange: EventEmitter<any>;
    @Output() pathModifiedChange: EventEmitter<any>;
    @Output() redrawOnResizeChange: EventEmitter<any>;
    @Output() sizeChange: EventEmitter<any>;
    @Output() themeChange: EventEmitter<any>;
    @Output() titleChange: EventEmitter<any>;
    @Output() tooltipChange: EventEmitter<any>;
    @Output() areaSettingsChange: EventEmitter<any>;
    @Output() backgroundChange: EventEmitter<any>;
    @Output() boundsChange: EventEmitter<any>;
    @Output() centerChange: EventEmitter<any>;
    @Output() controlBarChange: EventEmitter<any>;
    @Output() layersChange: EventEmitter<any>;
    @Output() legendsChange: EventEmitter<any>;
    @Output() mapDataChange: EventEmitter<any>;
    @Output() markersChange: EventEmitter<any>;
    @Output() markerSettingsChange: EventEmitter<any>;
    @Output() maxZoomFactorChange: EventEmitter<any>;
    @Output() panningEnabledChange: EventEmitter<any>;
    @Output() projectionChange: EventEmitter<any>;
    @Output() touchEnabledChange: EventEmitter<any>;
    @Output() wheelEnabledChange: EventEmitter<any>;
    @Output() zoomFactorChange: EventEmitter<any>;
    @Output() zoomingEnabledChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxVectorMap';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'areaClick', emit: 'onAreaClick' },
            { subscribe: 'areaSelectionChanged', emit: 'onAreaSelectionChanged' },
            { subscribe: 'centerChanged', emit: 'onCenterChanged' },
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'markerClick', emit: 'onMarkerClick' },
            { subscribe: 'markerSelectionChanged', emit: 'onMarkerSelectionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { subscribe: 'zoomFactorChanged', emit: 'onZoomFactorChanged' },
            { emit: 'rtlEnabledChange' },
            { emit: 'exportChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'areaSettingsChange' },
            { emit: 'backgroundChange' },
            { emit: 'boundsChange' },
            { emit: 'centerChange' },
            { emit: 'controlBarChange' },
            { emit: 'layersChange' },
            { emit: 'legendsChange' },
            { emit: 'mapDataChange' },
            { emit: 'markersChange' },
            { emit: 'markerSettingsChange' },
            { emit: 'maxZoomFactorChange' },
            { emit: 'panningEnabledChange' },
            { emit: 'projectionChange' },
            { emit: 'touchEnabledChange' },
            { emit: 'wheelEnabledChange' },
            { emit: 'zoomFactorChange' },
            { emit: 'zoomingEnabledChange' }
        ];

        this._properties = [
            'this.rtlEnabled',
            'this.export',
            'this.loadingIndicator',
            'this.pathModified',
            'this.redrawOnResize',
            'this.size',
            'this.theme',
            'this.title',
            'this.tooltip',
            'this.areaSettings',
            'this.background',
            'this.bounds',
            'this.center',
            'this.controlBar',
            'this.layers',
            'this.legends',
            'this.mapData',
            'this.markers',
            'this.markerSettings',
            'this.maxZoomFactor',
            'this.panningEnabled',
            'this.projection',
            'this.touchEnabled',
            'this.wheelEnabled',
            'this.zoomFactor',
            'this.zoomingEnabled'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onDrawn = new EventEmitter();
        this.onExported = new EventEmitter();
        this.onExporting = new EventEmitter();
        this.onFileSaving = new EventEmitter();
        this.onIncidentOccurred = new EventEmitter();
        this.onAreaClick = new EventEmitter();
        this.onAreaSelectionChanged = new EventEmitter();
        this.onCenterChanged = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onMarkerClick = new EventEmitter();
        this.onMarkerSelectionChanged = new EventEmitter();
        this.onSelectionChanged = new EventEmitter();
        this.onTooltipHidden = new EventEmitter();
        this.onTooltipShown = new EventEmitter();
        this.onZoomFactorChanged = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.exportChange = new EventEmitter();
        this.loadingIndicatorChange = new EventEmitter();
        this.pathModifiedChange = new EventEmitter();
        this.redrawOnResizeChange = new EventEmitter();
        this.sizeChange = new EventEmitter();
        this.themeChange = new EventEmitter();
        this.titleChange = new EventEmitter();
        this.tooltipChange = new EventEmitter();
        this.areaSettingsChange = new EventEmitter();
        this.backgroundChange = new EventEmitter();
        this.boundsChange = new EventEmitter();
        this.centerChange = new EventEmitter();
        this.controlBarChange = new EventEmitter();
        this.layersChange = new EventEmitter();
        this.legendsChange = new EventEmitter();
        this.mapDataChange = new EventEmitter();
        this.markersChange = new EventEmitter();
        this.markerSettingsChange = new EventEmitter();
        this.maxZoomFactorChange = new EventEmitter();
        this.panningEnabledChange = new EventEmitter();
        this.projectionChange = new EventEmitter();
        this.touchEnabledChange = new EventEmitter();
        this.wheelEnabledChange = new EventEmitter();
        this.zoomFactorChange = new EventEmitter();
        this.zoomingEnabledChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxVectorMap(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('bounds', changes);
        this._idh.setup('center', changes);
        this._idh.setup('layers', changes);
        this._idh.setup('legends', changes);
        this._idh.setup('mapData', changes);
        this._idh.setup('markers', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('bounds');
        this._idh.doCheck('center');
        this._idh.doCheck('layers');
        this._idh.doCheck('legends');
        this._idh.doCheck('mapData');
        this._idh.doCheck('markers');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxVectorMapComponent
  ],
  exports: [
    DxVectorMapComponent
  ],
})
export class DxVectorMapModule { }
