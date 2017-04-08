



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

import DxRangeSelector from 'devextreme/viz/range_selector';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-range-selector',
    template: '',
    providers: providers
})
export class DxRangeSelectorComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxRangeSelector;


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
    get margin(): any {
        return this._getOption('margin');
    }

    set margin(value: any) {
        this._setOption('margin', value);
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
    get background(): any {
        return this._getOption('background');
    }

    set background(value: any) {
        this._setOption('background', value);
    }

    @Input()
    get behavior(): any {
        return this._getOption('behavior');
    }

    set behavior(value: any) {
        this._setOption('behavior', value);
    }

    @Input()
    get chart(): any {
        return this._getOption('chart');
    }

    set chart(value: any) {
        this._setOption('chart', value);
    }

    @Input()
    get containerBackgroundColor(): any {
        return this._getOption('containerBackgroundColor');
    }

    set containerBackgroundColor(value: any) {
        this._setOption('containerBackgroundColor', value);
    }

    @Input()
    get dataSource(): any {
        return this._getOption('dataSource');
    }

    set dataSource(value: any) {
        this._setOption('dataSource', value);
    }

    @Input()
    get dataSourceField(): any {
        return this._getOption('dataSourceField');
    }

    set dataSourceField(value: any) {
        this._setOption('dataSourceField', value);
    }

    @Input()
    get indent(): any {
        return this._getOption('indent');
    }

    set indent(value: any) {
        this._setOption('indent', value);
    }

    @Input()
    get scale(): any {
        return this._getOption('scale');
    }

    set scale(value: any) {
        this._setOption('scale', value);
    }

    @Input()
    get selectedRange(): any {
        return this._getOption('selectedRange');
    }

    set selectedRange(value: any) {
        this._setOption('selectedRange', value);
    }

    @Input()
    get selectedRangeColor(): any {
        return this._getOption('selectedRangeColor');
    }

    set selectedRangeColor(value: any) {
        this._setOption('selectedRangeColor', value);
    }

    @Input()
    get shutter(): any {
        return this._getOption('shutter');
    }

    set shutter(value: any) {
        this._setOption('shutter', value);
    }

    @Input()
    get sliderHandle(): any {
        return this._getOption('sliderHandle');
    }

    set sliderHandle(value: any) {
        this._setOption('sliderHandle', value);
    }

    @Input()
    get sliderMarker(): any {
        return this._getOption('sliderMarker');
    }

    set sliderMarker(value: any) {
        this._setOption('sliderMarker', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onDrawn: EventEmitter<any>;
    @Output() onExported: EventEmitter<any>;
    @Output() onExporting: EventEmitter<any>;
    @Output() onFileSaving: EventEmitter<any>;
    @Output() onIncidentOccurred: EventEmitter<any>;
    @Output() onSelectedRangeChanged: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() exportChange: EventEmitter<any>;
    @Output() loadingIndicatorChange: EventEmitter<any>;
    @Output() marginChange: EventEmitter<any>;
    @Output() pathModifiedChange: EventEmitter<any>;
    @Output() redrawOnResizeChange: EventEmitter<any>;
    @Output() sizeChange: EventEmitter<any>;
    @Output() themeChange: EventEmitter<any>;
    @Output() titleChange: EventEmitter<any>;
    @Output() backgroundChange: EventEmitter<any>;
    @Output() behaviorChange: EventEmitter<any>;
    @Output() chartChange: EventEmitter<any>;
    @Output() containerBackgroundColorChange: EventEmitter<any>;
    @Output() dataSourceChange: EventEmitter<any>;
    @Output() dataSourceFieldChange: EventEmitter<any>;
    @Output() indentChange: EventEmitter<any>;
    @Output() scaleChange: EventEmitter<any>;
    @Output() selectedRangeChange: EventEmitter<any>;
    @Output() selectedRangeColorChange: EventEmitter<any>;
    @Output() shutterChange: EventEmitter<any>;
    @Output() sliderHandleChange: EventEmitter<any>;
    @Output() sliderMarkerChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxRangeSelector';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'selectedRangeChanged', emit: 'onSelectedRangeChanged' },
            { emit: 'rtlEnabledChange' },
            { emit: 'exportChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'backgroundChange' },
            { emit: 'behaviorChange' },
            { emit: 'chartChange' },
            { emit: 'containerBackgroundColorChange' },
            { emit: 'dataSourceChange' },
            { emit: 'dataSourceFieldChange' },
            { emit: 'indentChange' },
            { emit: 'scaleChange' },
            { emit: 'selectedRangeChange' },
            { emit: 'selectedRangeColorChange' },
            { emit: 'shutterChange' },
            { emit: 'sliderHandleChange' },
            { emit: 'sliderMarkerChange' }
        ];

        this._properties = [
            'this.rtlEnabled',
            'this.export',
            'this.loadingIndicator',
            'this.margin',
            'this.pathModified',
            'this.redrawOnResize',
            'this.size',
            'this.theme',
            'this.title',
            'this.background',
            'this.behavior',
            'this.chart',
            'this.containerBackgroundColor',
            'this.dataSource',
            'this.dataSourceField',
            'this.indent',
            'this.scale',
            'this.selectedRange',
            'this.selectedRangeColor',
            'this.shutter',
            'this.sliderHandle',
            'this.sliderMarker'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onDrawn = new EventEmitter();
        this.onExported = new EventEmitter();
        this.onExporting = new EventEmitter();
        this.onFileSaving = new EventEmitter();
        this.onIncidentOccurred = new EventEmitter();
        this.onSelectedRangeChanged = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.exportChange = new EventEmitter();
        this.loadingIndicatorChange = new EventEmitter();
        this.marginChange = new EventEmitter();
        this.pathModifiedChange = new EventEmitter();
        this.redrawOnResizeChange = new EventEmitter();
        this.sizeChange = new EventEmitter();
        this.themeChange = new EventEmitter();
        this.titleChange = new EventEmitter();
        this.backgroundChange = new EventEmitter();
        this.behaviorChange = new EventEmitter();
        this.chartChange = new EventEmitter();
        this.containerBackgroundColorChange = new EventEmitter();
        this.dataSourceChange = new EventEmitter();
        this.dataSourceFieldChange = new EventEmitter();
        this.indentChange = new EventEmitter();
        this.scaleChange = new EventEmitter();
        this.selectedRangeChange = new EventEmitter();
        this.selectedRangeColorChange = new EventEmitter();
        this.shutterChange = new EventEmitter();
        this.sliderHandleChange = new EventEmitter();
        this.sliderMarkerChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxRangeSelector(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('dataSource', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxRangeSelectorComponent
  ],
  exports: [
    DxRangeSelectorComponent
  ],
})
export class DxRangeSelectorModule { }
