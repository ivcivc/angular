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
var scheduler_1 = require('devextreme/ui/scheduler');
var dx_component_1 = require('../core/dx.component');
var dx_template_host_1 = require('../core/dx.template-host');
var watcher_helper_1 = require('../core/watcher-helper');
var iterable_differ_helper_1 = require('../core/iterable-differ-helper');
var providers = [];
providers.push(dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper);
providers.push(iterable_differ_helper_1.IterableDifferHelper);
var DxSchedulerComponent = (function (_super) {
    __extends(DxSchedulerComponent, _super);
    function DxSchedulerComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh) {
        _super.call(this, elementRef, ngZone, templateHost, _watcherHelper);
        this._watcherHelper = _watcherHelper;
        this._idh = _idh;
        this.widgetClassName = 'dxScheduler';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'appointmentAdded', emit: 'onAppointmentAdded' },
            { subscribe: 'appointmentAdding', emit: 'onAppointmentAdding' },
            { subscribe: 'appointmentClick', emit: 'onAppointmentClick' },
            { subscribe: 'appointmentDblClick', emit: 'onAppointmentDblClick' },
            { subscribe: 'appointmentDeleted', emit: 'onAppointmentDeleted' },
            { subscribe: 'appointmentDeleting', emit: 'onAppointmentDeleting' },
            { subscribe: 'appointmentFormCreated', emit: 'onAppointmentFormCreated' },
            { subscribe: 'appointmentRendered', emit: 'onAppointmentRendered' },
            { subscribe: 'appointmentUpdated', emit: 'onAppointmentUpdated' },
            { subscribe: 'appointmentUpdating', emit: 'onAppointmentUpdating' },
            { subscribe: 'cellClick', emit: 'onCellClick' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'accessKeyChange' },
            { emit: 'disabledChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'allDayExprChange' },
            { emit: 'appointmentTemplateChange' },
            { emit: 'appointmentTooltipTemplateChange' },
            { emit: 'cellDurationChange' },
            { emit: 'crossScrollingEnabledChange' },
            { emit: 'currentDateChange' },
            { emit: 'currentViewChange' },
            { emit: 'dataCellTemplateChange' },
            { emit: 'dataSourceChange' },
            { emit: 'dateCellTemplateChange' },
            { emit: 'descriptionExprChange' },
            { emit: 'editingChange' },
            { emit: 'endDateExprChange' },
            { emit: 'endDateTimeZoneExprChange' },
            { emit: 'endDayHourChange' },
            { emit: 'firstDayOfWeekChange' },
            { emit: 'groupsChange' },
            { emit: 'horizontalScrollingEnabledChange' },
            { emit: 'maxChange' },
            { emit: 'minChange' },
            { emit: 'noDataTextChange' },
            { emit: 'recurrenceEditModeChange' },
            { emit: 'recurrenceExceptionExprChange' },
            { emit: 'recurrenceRuleExprChange' },
            { emit: 'remoteFilteringChange' },
            { emit: 'resourceCellTemplateChange' },
            { emit: 'resourcesChange' },
            { emit: 'showAllDayPanelChange' },
            { emit: 'startDateExprChange' },
            { emit: 'startDateTimeZoneExprChange' },
            { emit: 'startDayHourChange' },
            { emit: 'textExprChange' },
            { emit: 'timeCellTemplateChange' },
            { emit: 'timeZoneChange' },
            { emit: 'useDropDownViewSwitcherChange' },
            { emit: 'viewsChange' }
        ];
        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.accessKey',
            'this.disabled',
            'this.focusStateEnabled',
            'this.hint',
            'this.tabIndex',
            'this.visible',
            'this.allDayExpr',
            'this.appointmentTemplate',
            'this.appointmentTooltipTemplate',
            'this.cellDuration',
            'this.crossScrollingEnabled',
            'this.currentDate',
            'this.currentView',
            'this.dataCellTemplate',
            'this.dataSource',
            'this.dateCellTemplate',
            'this.descriptionExpr',
            'this.editing',
            'this.endDateExpr',
            'this.endDateTimeZoneExpr',
            'this.endDayHour',
            'this.firstDayOfWeek',
            'this.groups',
            'this.horizontalScrollingEnabled',
            'this.max',
            'this.min',
            'this.noDataText',
            'this.recurrenceEditMode',
            'this.recurrenceExceptionExpr',
            'this.recurrenceRuleExpr',
            'this.remoteFiltering',
            'this.resourceCellTemplate',
            'this.resources',
            'this.showAllDayPanel',
            'this.startDateExpr',
            'this.startDateTimeZoneExpr',
            'this.startDayHour',
            'this.textExpr',
            'this.timeCellTemplate',
            'this.timeZone',
            'this.useDropDownViewSwitcher',
            'this.views'
        ];
        this.onDisposing = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onOptionChanged = new core_1.EventEmitter();
        this.onContentReady = new core_1.EventEmitter();
        this.onAppointmentAdded = new core_1.EventEmitter();
        this.onAppointmentAdding = new core_1.EventEmitter();
        this.onAppointmentClick = new core_1.EventEmitter();
        this.onAppointmentDblClick = new core_1.EventEmitter();
        this.onAppointmentDeleted = new core_1.EventEmitter();
        this.onAppointmentDeleting = new core_1.EventEmitter();
        this.onAppointmentFormCreated = new core_1.EventEmitter();
        this.onAppointmentRendered = new core_1.EventEmitter();
        this.onAppointmentUpdated = new core_1.EventEmitter();
        this.onAppointmentUpdating = new core_1.EventEmitter();
        this.onCellClick = new core_1.EventEmitter();
        this.heightChange = new core_1.EventEmitter();
        this.rtlEnabledChange = new core_1.EventEmitter();
        this.widthChange = new core_1.EventEmitter();
        this.accessKeyChange = new core_1.EventEmitter();
        this.disabledChange = new core_1.EventEmitter();
        this.focusStateEnabledChange = new core_1.EventEmitter();
        this.hintChange = new core_1.EventEmitter();
        this.tabIndexChange = new core_1.EventEmitter();
        this.visibleChange = new core_1.EventEmitter();
        this.allDayExprChange = new core_1.EventEmitter();
        this.appointmentTemplateChange = new core_1.EventEmitter();
        this.appointmentTooltipTemplateChange = new core_1.EventEmitter();
        this.cellDurationChange = new core_1.EventEmitter();
        this.crossScrollingEnabledChange = new core_1.EventEmitter();
        this.currentDateChange = new core_1.EventEmitter();
        this.currentViewChange = new core_1.EventEmitter();
        this.dataCellTemplateChange = new core_1.EventEmitter();
        this.dataSourceChange = new core_1.EventEmitter();
        this.dateCellTemplateChange = new core_1.EventEmitter();
        this.descriptionExprChange = new core_1.EventEmitter();
        this.editingChange = new core_1.EventEmitter();
        this.endDateExprChange = new core_1.EventEmitter();
        this.endDateTimeZoneExprChange = new core_1.EventEmitter();
        this.endDayHourChange = new core_1.EventEmitter();
        this.firstDayOfWeekChange = new core_1.EventEmitter();
        this.groupsChange = new core_1.EventEmitter();
        this.horizontalScrollingEnabledChange = new core_1.EventEmitter();
        this.maxChange = new core_1.EventEmitter();
        this.minChange = new core_1.EventEmitter();
        this.noDataTextChange = new core_1.EventEmitter();
        this.recurrenceEditModeChange = new core_1.EventEmitter();
        this.recurrenceExceptionExprChange = new core_1.EventEmitter();
        this.recurrenceRuleExprChange = new core_1.EventEmitter();
        this.remoteFilteringChange = new core_1.EventEmitter();
        this.resourceCellTemplateChange = new core_1.EventEmitter();
        this.resourcesChange = new core_1.EventEmitter();
        this.showAllDayPanelChange = new core_1.EventEmitter();
        this.startDateExprChange = new core_1.EventEmitter();
        this.startDateTimeZoneExprChange = new core_1.EventEmitter();
        this.startDayHourChange = new core_1.EventEmitter();
        this.textExprChange = new core_1.EventEmitter();
        this.timeCellTemplateChange = new core_1.EventEmitter();
        this.timeZoneChange = new core_1.EventEmitter();
        this.useDropDownViewSwitcherChange = new core_1.EventEmitter();
        this.viewsChange = new core_1.EventEmitter();
        this._idh.setHost(this);
    }
    Object.defineProperty(DxSchedulerComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "rtlEnabled", {
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "accessKey", {
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "focusStateEnabled", {
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "hint", {
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "tabIndex", {
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "allDayExpr", {
        get: function () {
            return this._getOption('allDayExpr');
        },
        set: function (value) {
            this._setOption('allDayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "appointmentTemplate", {
        get: function () {
            return this._getOption('appointmentTemplate');
        },
        set: function (value) {
            this._setOption('appointmentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "appointmentTooltipTemplate", {
        get: function () {
            return this._getOption('appointmentTooltipTemplate');
        },
        set: function (value) {
            this._setOption('appointmentTooltipTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "cellDuration", {
        get: function () {
            return this._getOption('cellDuration');
        },
        set: function (value) {
            this._setOption('cellDuration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "crossScrollingEnabled", {
        get: function () {
            return this._getOption('crossScrollingEnabled');
        },
        set: function (value) {
            this._setOption('crossScrollingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "currentDate", {
        get: function () {
            return this._getOption('currentDate');
        },
        set: function (value) {
            this._setOption('currentDate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "currentView", {
        get: function () {
            return this._getOption('currentView');
        },
        set: function (value) {
            this._setOption('currentView', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "dataCellTemplate", {
        get: function () {
            return this._getOption('dataCellTemplate');
        },
        set: function (value) {
            this._setOption('dataCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "dateCellTemplate", {
        get: function () {
            return this._getOption('dateCellTemplate');
        },
        set: function (value) {
            this._setOption('dateCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "descriptionExpr", {
        get: function () {
            return this._getOption('descriptionExpr');
        },
        set: function (value) {
            this._setOption('descriptionExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "editing", {
        get: function () {
            return this._getOption('editing');
        },
        set: function (value) {
            this._setOption('editing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "endDateExpr", {
        get: function () {
            return this._getOption('endDateExpr');
        },
        set: function (value) {
            this._setOption('endDateExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "endDateTimeZoneExpr", {
        get: function () {
            return this._getOption('endDateTimeZoneExpr');
        },
        set: function (value) {
            this._setOption('endDateTimeZoneExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "endDayHour", {
        get: function () {
            return this._getOption('endDayHour');
        },
        set: function (value) {
            this._setOption('endDayHour', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "firstDayOfWeek", {
        get: function () {
            return this._getOption('firstDayOfWeek');
        },
        set: function (value) {
            this._setOption('firstDayOfWeek', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "groups", {
        get: function () {
            return this._getOption('groups');
        },
        set: function (value) {
            this._setOption('groups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "horizontalScrollingEnabled", {
        get: function () {
            return this._getOption('horizontalScrollingEnabled');
        },
        set: function (value) {
            this._setOption('horizontalScrollingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "max", {
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "min", {
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "noDataText", {
        get: function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "recurrenceEditMode", {
        get: function () {
            return this._getOption('recurrenceEditMode');
        },
        set: function (value) {
            this._setOption('recurrenceEditMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "recurrenceExceptionExpr", {
        get: function () {
            return this._getOption('recurrenceExceptionExpr');
        },
        set: function (value) {
            this._setOption('recurrenceExceptionExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "recurrenceRuleExpr", {
        get: function () {
            return this._getOption('recurrenceRuleExpr');
        },
        set: function (value) {
            this._setOption('recurrenceRuleExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "remoteFiltering", {
        get: function () {
            return this._getOption('remoteFiltering');
        },
        set: function (value) {
            this._setOption('remoteFiltering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "resourceCellTemplate", {
        get: function () {
            return this._getOption('resourceCellTemplate');
        },
        set: function (value) {
            this._setOption('resourceCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "resources", {
        get: function () {
            return this._getOption('resources');
        },
        set: function (value) {
            this._setOption('resources', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "showAllDayPanel", {
        get: function () {
            return this._getOption('showAllDayPanel');
        },
        set: function (value) {
            this._setOption('showAllDayPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "startDateExpr", {
        get: function () {
            return this._getOption('startDateExpr');
        },
        set: function (value) {
            this._setOption('startDateExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "startDateTimeZoneExpr", {
        get: function () {
            return this._getOption('startDateTimeZoneExpr');
        },
        set: function (value) {
            this._setOption('startDateTimeZoneExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "startDayHour", {
        get: function () {
            return this._getOption('startDayHour');
        },
        set: function (value) {
            this._setOption('startDayHour', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "textExpr", {
        get: function () {
            return this._getOption('textExpr');
        },
        set: function (value) {
            this._setOption('textExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "timeCellTemplate", {
        get: function () {
            return this._getOption('timeCellTemplate');
        },
        set: function (value) {
            this._setOption('timeCellTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "timeZone", {
        get: function () {
            return this._getOption('timeZone');
        },
        set: function (value) {
            this._setOption('timeZone', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "useDropDownViewSwitcher", {
        get: function () {
            return this._getOption('useDropDownViewSwitcher');
        },
        set: function (value) {
            this._setOption('useDropDownViewSwitcher', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxSchedulerComponent.prototype, "views", {
        get: function () {
            return this._getOption('views');
        },
        set: function (value) {
            this._setOption('views', value);
        },
        enumerable: true,
        configurable: true
    });
    DxSchedulerComponent.prototype._createInstance = function (element, options) {
        return new scheduler_1.default(element, options);
    };
    DxSchedulerComponent.prototype.ngOnChanges = function (changes) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('groups', changes);
        this._idh.setup('resources', changes);
        this._idh.setup('views', changes);
    };
    DxSchedulerComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('groups');
        this._idh.doCheck('resources');
        this._idh.doCheck('views');
        this._watcherHelper.checkWatchers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "height", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "rtlEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "width", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "accessKey", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "focusStateEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "hint", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "tabIndex", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "allDayExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "appointmentTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "appointmentTooltipTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "cellDuration", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "crossScrollingEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "currentDate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "currentView", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "dataCellTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "dataSource", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "dateCellTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "descriptionExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "editing", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "endDateExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "endDateTimeZoneExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "endDayHour", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "firstDayOfWeek", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "groups", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "horizontalScrollingEnabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "max", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "min", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "noDataText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "recurrenceEditMode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "recurrenceExceptionExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "recurrenceRuleExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "remoteFiltering", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "resourceCellTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "resources", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "showAllDayPanel", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "startDateExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "startDateTimeZoneExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "startDayHour", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "textExpr", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "timeCellTemplate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "timeZone", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "useDropDownViewSwitcher", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DxSchedulerComponent.prototype, "views", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "onDisposing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "onOptionChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "onContentReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentAdded", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentAdding", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentDblClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentDeleted", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentDeleting", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentFormCreated", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentRendered", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentUpdated", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "onAppointmentUpdating", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "onCellClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "rtlEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "accessKeyChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "disabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "focusStateEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "hintChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "tabIndexChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "allDayExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "appointmentTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "appointmentTooltipTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "cellDurationChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "crossScrollingEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "currentDateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "currentViewChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "dataCellTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "dataSourceChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "dateCellTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "descriptionExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "editingChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "endDateExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "endDateTimeZoneExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "endDayHourChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "firstDayOfWeekChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "groupsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "horizontalScrollingEnabledChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "maxChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "minChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "noDataTextChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "recurrenceEditModeChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "recurrenceExceptionExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "recurrenceRuleExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "remoteFilteringChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "resourceCellTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "resourcesChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "showAllDayPanelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "startDateExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "startDateTimeZoneExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "startDayHourChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "textExprChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "timeCellTemplateChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "timeZoneChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "useDropDownViewSwitcherChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DxSchedulerComponent.prototype, "viewsChange", void 0);
    DxSchedulerComponent = __decorate([
        core_1.Component({
            selector: 'dx-scheduler',
            template: '',
            providers: providers
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, dx_template_host_1.DxTemplateHost, watcher_helper_1.WatcherHelper, iterable_differ_helper_1.IterableDifferHelper])
    ], DxSchedulerComponent);
    return DxSchedulerComponent;
}(dx_component_1.DxComponent));
exports.DxSchedulerComponent = DxSchedulerComponent;
var DxSchedulerModule = (function () {
    function DxSchedulerModule() {
    }
    DxSchedulerModule = __decorate([
        core_1.NgModule({
            declarations: [
                DxSchedulerComponent
            ],
            exports: [
                DxSchedulerComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DxSchedulerModule);
    return DxSchedulerModule;
}());
exports.DxSchedulerModule = DxSchedulerModule;

//# sourceMappingURL=scheduler.js.map
