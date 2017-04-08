



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

import DxTreeMap from 'devextreme/viz/tree_map';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-tree-map',
    template: '',
    providers: providers
})
export class DxTreeMapComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxTreeMap;


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
    get childrenField(): any {
        return this._getOption('childrenField');
    }

    set childrenField(value: any) {
        this._setOption('childrenField', value);
    }

    @Input()
    get colorField(): any {
        return this._getOption('colorField');
    }

    set colorField(value: any) {
        this._setOption('colorField', value);
    }

    @Input()
    get colorizer(): any {
        return this._getOption('colorizer');
    }

    set colorizer(value: any) {
        this._setOption('colorizer', value);
    }

    @Input()
    get dataSource(): any {
        return this._getOption('dataSource');
    }

    set dataSource(value: any) {
        this._setOption('dataSource', value);
    }

    @Input()
    get group(): any {
        return this._getOption('group');
    }

    set group(value: any) {
        this._setOption('group', value);
    }

    @Input()
    get hoverEnabled(): any {
        return this._getOption('hoverEnabled');
    }

    set hoverEnabled(value: any) {
        this._setOption('hoverEnabled', value);
    }

    @Input()
    get idField(): any {
        return this._getOption('idField');
    }

    set idField(value: any) {
        this._setOption('idField', value);
    }

    @Input()
    get interactWithGroup(): any {
        return this._getOption('interactWithGroup');
    }

    set interactWithGroup(value: any) {
        this._setOption('interactWithGroup', value);
    }

    @Input()
    get labelField(): any {
        return this._getOption('labelField');
    }

    set labelField(value: any) {
        this._setOption('labelField', value);
    }

    @Input()
    get layoutAlgorithm(): any {
        return this._getOption('layoutAlgorithm');
    }

    set layoutAlgorithm(value: any) {
        this._setOption('layoutAlgorithm', value);
    }

    @Input()
    get layoutDirection(): any {
        return this._getOption('layoutDirection');
    }

    set layoutDirection(value: any) {
        this._setOption('layoutDirection', value);
    }

    @Input()
    get maxDepth(): any {
        return this._getOption('maxDepth');
    }

    set maxDepth(value: any) {
        this._setOption('maxDepth', value);
    }

    @Input()
    get parentField(): any {
        return this._getOption('parentField');
    }

    set parentField(value: any) {
        this._setOption('parentField', value);
    }

    @Input()
    get resolveLabelOverflow(): any {
        return this._getOption('resolveLabelOverflow');
    }

    set resolveLabelOverflow(value: any) {
        this._setOption('resolveLabelOverflow', value);
    }

    @Input()
    get selectionMode(): any {
        return this._getOption('selectionMode');
    }

    set selectionMode(value: any) {
        this._setOption('selectionMode', value);
    }

    @Input()
    get tile(): any {
        return this._getOption('tile');
    }

    set tile(value: any) {
        this._setOption('tile', value);
    }

    @Input()
    get valueField(): any {
        return this._getOption('valueField');
    }

    set valueField(value: any) {
        this._setOption('valueField', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onDrawn: EventEmitter<any>;
    @Output() onExported: EventEmitter<any>;
    @Output() onExporting: EventEmitter<any>;
    @Output() onFileSaving: EventEmitter<any>;
    @Output() onIncidentOccurred: EventEmitter<any>;
    @Output() onClick: EventEmitter<any>;
    @Output() onDrill: EventEmitter<any>;
    @Output() onHoverChanged: EventEmitter<any>;
    @Output() onNodesInitialized: EventEmitter<any>;
    @Output() onNodesRendering: EventEmitter<any>;
    @Output() onSelectionChanged: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() exportChange: EventEmitter<any>;
    @Output() loadingIndicatorChange: EventEmitter<any>;
    @Output() pathModifiedChange: EventEmitter<any>;
    @Output() redrawOnResizeChange: EventEmitter<any>;
    @Output() sizeChange: EventEmitter<any>;
    @Output() themeChange: EventEmitter<any>;
    @Output() titleChange: EventEmitter<any>;
    @Output() tooltipChange: EventEmitter<any>;
    @Output() childrenFieldChange: EventEmitter<any>;
    @Output() colorFieldChange: EventEmitter<any>;
    @Output() colorizerChange: EventEmitter<any>;
    @Output() dataSourceChange: EventEmitter<any>;
    @Output() groupChange: EventEmitter<any>;
    @Output() hoverEnabledChange: EventEmitter<any>;
    @Output() idFieldChange: EventEmitter<any>;
    @Output() interactWithGroupChange: EventEmitter<any>;
    @Output() labelFieldChange: EventEmitter<any>;
    @Output() layoutAlgorithmChange: EventEmitter<any>;
    @Output() layoutDirectionChange: EventEmitter<any>;
    @Output() maxDepthChange: EventEmitter<any>;
    @Output() parentFieldChange: EventEmitter<any>;
    @Output() resolveLabelOverflowChange: EventEmitter<any>;
    @Output() selectionModeChange: EventEmitter<any>;
    @Output() tileChange: EventEmitter<any>;
    @Output() valueFieldChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxTreeMap';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'drill', emit: 'onDrill' },
            { subscribe: 'hoverChanged', emit: 'onHoverChanged' },
            { subscribe: 'nodesInitialized', emit: 'onNodesInitialized' },
            { subscribe: 'nodesRendering', emit: 'onNodesRendering' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'rtlEnabledChange' },
            { emit: 'exportChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'childrenFieldChange' },
            { emit: 'colorFieldChange' },
            { emit: 'colorizerChange' },
            { emit: 'dataSourceChange' },
            { emit: 'groupChange' },
            { emit: 'hoverEnabledChange' },
            { emit: 'idFieldChange' },
            { emit: 'interactWithGroupChange' },
            { emit: 'labelFieldChange' },
            { emit: 'layoutAlgorithmChange' },
            { emit: 'layoutDirectionChange' },
            { emit: 'maxDepthChange' },
            { emit: 'parentFieldChange' },
            { emit: 'resolveLabelOverflowChange' },
            { emit: 'selectionModeChange' },
            { emit: 'tileChange' },
            { emit: 'valueFieldChange' }
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
            'this.childrenField',
            'this.colorField',
            'this.colorizer',
            'this.dataSource',
            'this.group',
            'this.hoverEnabled',
            'this.idField',
            'this.interactWithGroup',
            'this.labelField',
            'this.layoutAlgorithm',
            'this.layoutDirection',
            'this.maxDepth',
            'this.parentField',
            'this.resolveLabelOverflow',
            'this.selectionMode',
            'this.tile',
            'this.valueField'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onDrawn = new EventEmitter();
        this.onExported = new EventEmitter();
        this.onExporting = new EventEmitter();
        this.onFileSaving = new EventEmitter();
        this.onIncidentOccurred = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onDrill = new EventEmitter();
        this.onHoverChanged = new EventEmitter();
        this.onNodesInitialized = new EventEmitter();
        this.onNodesRendering = new EventEmitter();
        this.onSelectionChanged = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.exportChange = new EventEmitter();
        this.loadingIndicatorChange = new EventEmitter();
        this.pathModifiedChange = new EventEmitter();
        this.redrawOnResizeChange = new EventEmitter();
        this.sizeChange = new EventEmitter();
        this.themeChange = new EventEmitter();
        this.titleChange = new EventEmitter();
        this.tooltipChange = new EventEmitter();
        this.childrenFieldChange = new EventEmitter();
        this.colorFieldChange = new EventEmitter();
        this.colorizerChange = new EventEmitter();
        this.dataSourceChange = new EventEmitter();
        this.groupChange = new EventEmitter();
        this.hoverEnabledChange = new EventEmitter();
        this.idFieldChange = new EventEmitter();
        this.interactWithGroupChange = new EventEmitter();
        this.labelFieldChange = new EventEmitter();
        this.layoutAlgorithmChange = new EventEmitter();
        this.layoutDirectionChange = new EventEmitter();
        this.maxDepthChange = new EventEmitter();
        this.parentFieldChange = new EventEmitter();
        this.resolveLabelOverflowChange = new EventEmitter();
        this.selectionModeChange = new EventEmitter();
        this.tileChange = new EventEmitter();
        this.valueFieldChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxTreeMap(element, options);
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
    DxTreeMapComponent
  ],
  exports: [
    DxTreeMapComponent
  ],
})
export class DxTreeMapModule { }
