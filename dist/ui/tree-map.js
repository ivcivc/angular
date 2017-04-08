"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var tree_map_1 = require('devextreme/viz/tree_map');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxTreeMapComponent = (function (_super) {
    __extends(DxTreeMapComponent, _super);
    function DxTreeMapComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
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
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onDrawn = new core_1.EventEmitter();
        this.onExported = new core_1.EventEmitter();
        this.onExporting = new core_1.EventEmitter();
        this.onFileSaving = new core_1.EventEmitter();
        this.onIncidentOccurred = new core_1.EventEmitter();
        this.onClick = new core_1.EventEmitter();
        this.onDrill = new core_1.EventEmitter();
        this.onHoverChanged = new core_1.EventEmitter();
        this.onNodesInitialized = new core_1.EventEmitter();
        this.onNodesRendering = new core_1.EventEmitter();
        this.onSelectionChanged = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.exportChange = new core_1.EventEmitter();
        this.loadingIndicatorChange = new core_1.EventEmitter();
        this.pathModifiedChange = new core_1.EventEmitter();
        this.redrawOnResizeChange = new core_1.EventEmitter();
        this.sizeChange = new core_1.EventEmitter();
        this.themeChange = new core_1.EventEmitter();
        this.titleChange = new core_1.EventEmitter();
        this.tooltipChange = new core_1.EventEmitter();
        this.childrenFieldChange = new core_1.EventEmitter();
        this.colorFieldChange = new core_1.EventEmitter();
        this.colorizerChange = new core_1.EventEmitter();
        this.dataSourceChange = new core_1.EventEmitter();
        this.groupChange = new core_1.EventEmitter();
        this.hoverEnabledChange = new core_1.EventEmitter();
        this.idFieldChange = new core_1.EventEmitter();
        this.interactWithGroupChange = new core_1.EventEmitter();
        this.labelFieldChange = new core_1.EventEmitter();
        this.layoutAlgorithmChange = new core_1.EventEmitter();
        this.layoutDirectionChange = new core_1.EventEmitter();
        this.maxDepthChange = new core_1.EventEmitter();
        this.parentFieldChange = new core_1.EventEmitter();
        this.resolveLabelOverflowChange = new core_1.EventEmitter();
        this.selectionModeChange = new core_1.EventEmitter();
        this.tileChange = new core_1.EventEmitter();
        this.valueFieldChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxTreeMapComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "export", {
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "loadingIndicator", {
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "pathModified", {
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "redrawOnResize", {
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "theme", {
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "tooltip", {
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "childrenField", {
        get: function () {
            return this._getOption('childrenField');
        },
        set: function (value) {
            this._setOption('childrenField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "colorField", {
        get: function () {
            return this._getOption('colorField');
        },
        set: function (value) {
            this._setOption('colorField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "colorizer", {
        get: function () {
            return this._getOption('colorizer');
        },
        set: function (value) {
            this._setOption('colorizer', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "group", {
        get: function () {
            return this._getOption('group');
        },
        set: function (value) {
            this._setOption('group', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "hoverEnabled", {
        get: function () {
            return this._getOption('hoverEnabled');
        },
        set: function (value) {
            this._setOption('hoverEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "idField", {
        get: function () {
            return this._getOption('idField');
        },
        set: function (value) {
            this._setOption('idField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "interactWithGroup", {
        get: function () {
            return this._getOption('interactWithGroup');
        },
        set: function (value) {
            this._setOption('interactWithGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "labelField", {
        get: function () {
            return this._getOption('labelField');
        },
        set: function (value) {
            this._setOption('labelField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "layoutAlgorithm", {
        get: function () {
            return this._getOption('layoutAlgorithm');
        },
        set: function (value) {
            this._setOption('layoutAlgorithm', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "layoutDirection", {
        get: function () {
            return this._getOption('layoutDirection');
        },
        set: function (value) {
            this._setOption('layoutDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "maxDepth", {
        get: function () {
            return this._getOption('maxDepth');
        },
        set: function (value) {
            this._setOption('maxDepth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "parentField", {
        get: function () {
            return this._getOption('parentField');
        },
        set: function (value) {
            this._setOption('parentField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "resolveLabelOverflow", {
        get: function () {
            return this._getOption('resolveLabelOverflow');
        },
        set: function (value) {
            this._setOption('resolveLabelOverflow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "selectionMode", {
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "tile", {
        get: function () {
            return this._getOption('tile');
        },
        set: function (value) {
            this._setOption('tile', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "valueField", {
        get: function () {
            return this._getOption('valueField');
        },
        set: function (value) {
            this._setOption('valueField', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTreeMapComponent.prototype._createInstance = function (element, options) {
        return new tree_map_1.default(element, options);
    };
    DxTreeMapComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
    };
    DxTreeMapComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "export", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "loadingIndicator", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "pathModified", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "redrawOnResize", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "size", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "theme", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "title", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "tooltip", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "childrenField", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "colorField", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "colorizer", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "group", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "hoverEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "idField", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "interactWithGroup", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "labelField", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "layoutAlgorithm", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "layoutDirection", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "maxDepth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "parentField", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "resolveLabelOverflow", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "selectionMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "tile", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxTreeMapComponent.prototype, "valueField", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "onDrawn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "onExported", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "onExporting", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "onFileSaving", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "onIncidentOccurred", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "onClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "onDrill", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "onHoverChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "onNodesInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "onNodesRendering", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "onSelectionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "exportChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "loadingIndicatorChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "pathModifiedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "redrawOnResizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "sizeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "themeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "titleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "tooltipChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "childrenFieldChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "colorFieldChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "colorizerChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "groupChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "hoverEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "idFieldChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "interactWithGroupChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "labelFieldChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "layoutAlgorithmChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "layoutDirectionChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "maxDepthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "parentFieldChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "resolveLabelOverflowChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "selectionModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "tileChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxTreeMapComponent.prototype, "valueFieldChange", void 0);
    DxTreeMapComponent = __decorate([
        core_1.Component({
            selector: 'dx-tree-map',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxTreeMapComponent);
    return DxTreeMapComponent;
}(dx_component_1.DxComponent));
exports.DxTreeMapComponent = DxTreeMapComponent;
var DxTreeMapModule = (function () {
    function DxTreeMapModule() {
    }
    DxTreeMapModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxTreeMapComponent
            ],
            exports: [
                DxTreeMapComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxTreeMapModule);
    return DxTreeMapModule;
}());
exports.DxTreeMapModule = DxTreeMapModule;

//# sourceMappingURL=tree-map.js.map
