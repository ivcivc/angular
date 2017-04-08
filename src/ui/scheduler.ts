



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

import DxScheduler from 'devextreme/ui/scheduler';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';

let providers = [];
providers.push(DxTemplateHost, WatcherHelper);
providers.push(IterableDifferHelper);

@Component({
    selector: 'dx-scheduler',
    template: '',
    providers: providers
})
export class DxSchedulerComponent extends DxComponent implements OnChanges, DoCheck {
    instance: DxScheduler;


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
    get allDayExpr(): any {
        return this._getOption('allDayExpr');
    }

    set allDayExpr(value: any) {
        this._setOption('allDayExpr', value);
    }

    @Input()
    get appointmentTemplate(): any {
        return this._getOption('appointmentTemplate');
    }

    set appointmentTemplate(value: any) {
        this._setOption('appointmentTemplate', value);
    }

    @Input()
    get appointmentTooltipTemplate(): any {
        return this._getOption('appointmentTooltipTemplate');
    }

    set appointmentTooltipTemplate(value: any) {
        this._setOption('appointmentTooltipTemplate', value);
    }

    @Input()
    get cellDuration(): any {
        return this._getOption('cellDuration');
    }

    set cellDuration(value: any) {
        this._setOption('cellDuration', value);
    }

    @Input()
    get crossScrollingEnabled(): any {
        return this._getOption('crossScrollingEnabled');
    }

    set crossScrollingEnabled(value: any) {
        this._setOption('crossScrollingEnabled', value);
    }

    @Input()
    get currentDate(): any {
        return this._getOption('currentDate');
    }

    set currentDate(value: any) {
        this._setOption('currentDate', value);
    }

    @Input()
    get currentView(): any {
        return this._getOption('currentView');
    }

    set currentView(value: any) {
        this._setOption('currentView', value);
    }

    @Input()
    get dataCellTemplate(): any {
        return this._getOption('dataCellTemplate');
    }

    set dataCellTemplate(value: any) {
        this._setOption('dataCellTemplate', value);
    }

    @Input()
    get dataSource(): any {
        return this._getOption('dataSource');
    }

    set dataSource(value: any) {
        this._setOption('dataSource', value);
    }

    @Input()
    get dateCellTemplate(): any {
        return this._getOption('dateCellTemplate');
    }

    set dateCellTemplate(value: any) {
        this._setOption('dateCellTemplate', value);
    }

    @Input()
    get descriptionExpr(): any {
        return this._getOption('descriptionExpr');
    }

    set descriptionExpr(value: any) {
        this._setOption('descriptionExpr', value);
    }

    @Input()
    get editing(): any {
        return this._getOption('editing');
    }

    set editing(value: any) {
        this._setOption('editing', value);
    }

    @Input()
    get endDateExpr(): any {
        return this._getOption('endDateExpr');
    }

    set endDateExpr(value: any) {
        this._setOption('endDateExpr', value);
    }

    @Input()
    get endDateTimeZoneExpr(): any {
        return this._getOption('endDateTimeZoneExpr');
    }

    set endDateTimeZoneExpr(value: any) {
        this._setOption('endDateTimeZoneExpr', value);
    }

    @Input()
    get endDayHour(): any {
        return this._getOption('endDayHour');
    }

    set endDayHour(value: any) {
        this._setOption('endDayHour', value);
    }

    @Input()
    get firstDayOfWeek(): any {
        return this._getOption('firstDayOfWeek');
    }

    set firstDayOfWeek(value: any) {
        this._setOption('firstDayOfWeek', value);
    }

    @Input()
    get groups(): any {
        return this._getOption('groups');
    }

    set groups(value: any) {
        this._setOption('groups', value);
    }

    @Input()
    get horizontalScrollingEnabled(): any {
        return this._getOption('horizontalScrollingEnabled');
    }

    set horizontalScrollingEnabled(value: any) {
        this._setOption('horizontalScrollingEnabled', value);
    }

    @Input()
    get max(): any {
        return this._getOption('max');
    }

    set max(value: any) {
        this._setOption('max', value);
    }

    @Input()
    get min(): any {
        return this._getOption('min');
    }

    set min(value: any) {
        this._setOption('min', value);
    }

    @Input()
    get noDataText(): any {
        return this._getOption('noDataText');
    }

    set noDataText(value: any) {
        this._setOption('noDataText', value);
    }

    @Input()
    get recurrenceEditMode(): any {
        return this._getOption('recurrenceEditMode');
    }

    set recurrenceEditMode(value: any) {
        this._setOption('recurrenceEditMode', value);
    }

    @Input()
    get recurrenceExceptionExpr(): any {
        return this._getOption('recurrenceExceptionExpr');
    }

    set recurrenceExceptionExpr(value: any) {
        this._setOption('recurrenceExceptionExpr', value);
    }

    @Input()
    get recurrenceRuleExpr(): any {
        return this._getOption('recurrenceRuleExpr');
    }

    set recurrenceRuleExpr(value: any) {
        this._setOption('recurrenceRuleExpr', value);
    }

    @Input()
    get remoteFiltering(): any {
        return this._getOption('remoteFiltering');
    }

    set remoteFiltering(value: any) {
        this._setOption('remoteFiltering', value);
    }

    @Input()
    get resourceCellTemplate(): any {
        return this._getOption('resourceCellTemplate');
    }

    set resourceCellTemplate(value: any) {
        this._setOption('resourceCellTemplate', value);
    }

    @Input()
    get resources(): any {
        return this._getOption('resources');
    }

    set resources(value: any) {
        this._setOption('resources', value);
    }

    @Input()
    get showAllDayPanel(): any {
        return this._getOption('showAllDayPanel');
    }

    set showAllDayPanel(value: any) {
        this._setOption('showAllDayPanel', value);
    }

    @Input()
    get startDateExpr(): any {
        return this._getOption('startDateExpr');
    }

    set startDateExpr(value: any) {
        this._setOption('startDateExpr', value);
    }

    @Input()
    get startDateTimeZoneExpr(): any {
        return this._getOption('startDateTimeZoneExpr');
    }

    set startDateTimeZoneExpr(value: any) {
        this._setOption('startDateTimeZoneExpr', value);
    }

    @Input()
    get startDayHour(): any {
        return this._getOption('startDayHour');
    }

    set startDayHour(value: any) {
        this._setOption('startDayHour', value);
    }

    @Input()
    get textExpr(): any {
        return this._getOption('textExpr');
    }

    set textExpr(value: any) {
        this._setOption('textExpr', value);
    }

    @Input()
    get timeCellTemplate(): any {
        return this._getOption('timeCellTemplate');
    }

    set timeCellTemplate(value: any) {
        this._setOption('timeCellTemplate', value);
    }

    @Input()
    get timeZone(): any {
        return this._getOption('timeZone');
    }

    set timeZone(value: any) {
        this._setOption('timeZone', value);
    }

    @Input()
    get useDropDownViewSwitcher(): any {
        return this._getOption('useDropDownViewSwitcher');
    }

    set useDropDownViewSwitcher(value: any) {
        this._setOption('useDropDownViewSwitcher', value);
    }

    @Input()
    get views(): any {
        return this._getOption('views');
    }

    set views(value: any) {
        this._setOption('views', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onContentReady: EventEmitter<any>;
    @Output() onAppointmentAdded: EventEmitter<any>;
    @Output() onAppointmentAdding: EventEmitter<any>;
    @Output() onAppointmentClick: EventEmitter<any>;
    @Output() onAppointmentDblClick: EventEmitter<any>;
    @Output() onAppointmentDeleted: EventEmitter<any>;
    @Output() onAppointmentDeleting: EventEmitter<any>;
    @Output() onAppointmentFormCreated: EventEmitter<any>;
    @Output() onAppointmentRendered: EventEmitter<any>;
    @Output() onAppointmentUpdated: EventEmitter<any>;
    @Output() onAppointmentUpdating: EventEmitter<any>;
    @Output() onCellClick: EventEmitter<any>;
    @Output() heightChange: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() widthChange: EventEmitter<any>;
    @Output() accessKeyChange: EventEmitter<any>;
    @Output() disabledChange: EventEmitter<any>;
    @Output() focusStateEnabledChange: EventEmitter<any>;
    @Output() hintChange: EventEmitter<any>;
    @Output() tabIndexChange: EventEmitter<any>;
    @Output() visibleChange: EventEmitter<any>;
    @Output() allDayExprChange: EventEmitter<any>;
    @Output() appointmentTemplateChange: EventEmitter<any>;
    @Output() appointmentTooltipTemplateChange: EventEmitter<any>;
    @Output() cellDurationChange: EventEmitter<any>;
    @Output() crossScrollingEnabledChange: EventEmitter<any>;
    @Output() currentDateChange: EventEmitter<any>;
    @Output() currentViewChange: EventEmitter<any>;
    @Output() dataCellTemplateChange: EventEmitter<any>;
    @Output() dataSourceChange: EventEmitter<any>;
    @Output() dateCellTemplateChange: EventEmitter<any>;
    @Output() descriptionExprChange: EventEmitter<any>;
    @Output() editingChange: EventEmitter<any>;
    @Output() endDateExprChange: EventEmitter<any>;
    @Output() endDateTimeZoneExprChange: EventEmitter<any>;
    @Output() endDayHourChange: EventEmitter<any>;
    @Output() firstDayOfWeekChange: EventEmitter<any>;
    @Output() groupsChange: EventEmitter<any>;
    @Output() horizontalScrollingEnabledChange: EventEmitter<any>;
    @Output() maxChange: EventEmitter<any>;
    @Output() minChange: EventEmitter<any>;
    @Output() noDataTextChange: EventEmitter<any>;
    @Output() recurrenceEditModeChange: EventEmitter<any>;
    @Output() recurrenceExceptionExprChange: EventEmitter<any>;
    @Output() recurrenceRuleExprChange: EventEmitter<any>;
    @Output() remoteFilteringChange: EventEmitter<any>;
    @Output() resourceCellTemplateChange: EventEmitter<any>;
    @Output() resourcesChange: EventEmitter<any>;
    @Output() showAllDayPanelChange: EventEmitter<any>;
    @Output() startDateExprChange: EventEmitter<any>;
    @Output() startDateTimeZoneExprChange: EventEmitter<any>;
    @Output() startDayHourChange: EventEmitter<any>;
    @Output() textExprChange: EventEmitter<any>;
    @Output() timeCellTemplateChange: EventEmitter<any>;
    @Output() timeZoneChange: EventEmitter<any>;
    @Output() useDropDownViewSwitcherChange: EventEmitter<any>;
    @Output() viewsChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
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

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onContentReady = new EventEmitter();
        this.onAppointmentAdded = new EventEmitter();
        this.onAppointmentAdding = new EventEmitter();
        this.onAppointmentClick = new EventEmitter();
        this.onAppointmentDblClick = new EventEmitter();
        this.onAppointmentDeleted = new EventEmitter();
        this.onAppointmentDeleting = new EventEmitter();
        this.onAppointmentFormCreated = new EventEmitter();
        this.onAppointmentRendered = new EventEmitter();
        this.onAppointmentUpdated = new EventEmitter();
        this.onAppointmentUpdating = new EventEmitter();
        this.onCellClick = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.accessKeyChange = new EventEmitter();
        this.disabledChange = new EventEmitter();
        this.focusStateEnabledChange = new EventEmitter();
        this.hintChange = new EventEmitter();
        this.tabIndexChange = new EventEmitter();
        this.visibleChange = new EventEmitter();
        this.allDayExprChange = new EventEmitter();
        this.appointmentTemplateChange = new EventEmitter();
        this.appointmentTooltipTemplateChange = new EventEmitter();
        this.cellDurationChange = new EventEmitter();
        this.crossScrollingEnabledChange = new EventEmitter();
        this.currentDateChange = new EventEmitter();
        this.currentViewChange = new EventEmitter();
        this.dataCellTemplateChange = new EventEmitter();
        this.dataSourceChange = new EventEmitter();
        this.dateCellTemplateChange = new EventEmitter();
        this.descriptionExprChange = new EventEmitter();
        this.editingChange = new EventEmitter();
        this.endDateExprChange = new EventEmitter();
        this.endDateTimeZoneExprChange = new EventEmitter();
        this.endDayHourChange = new EventEmitter();
        this.firstDayOfWeekChange = new EventEmitter();
        this.groupsChange = new EventEmitter();
        this.horizontalScrollingEnabledChange = new EventEmitter();
        this.maxChange = new EventEmitter();
        this.minChange = new EventEmitter();
        this.noDataTextChange = new EventEmitter();
        this.recurrenceEditModeChange = new EventEmitter();
        this.recurrenceExceptionExprChange = new EventEmitter();
        this.recurrenceRuleExprChange = new EventEmitter();
        this.remoteFilteringChange = new EventEmitter();
        this.resourceCellTemplateChange = new EventEmitter();
        this.resourcesChange = new EventEmitter();
        this.showAllDayPanelChange = new EventEmitter();
        this.startDateExprChange = new EventEmitter();
        this.startDateTimeZoneExprChange = new EventEmitter();
        this.startDayHourChange = new EventEmitter();
        this.textExprChange = new EventEmitter();
        this.timeCellTemplateChange = new EventEmitter();
        this.timeZoneChange = new EventEmitter();
        this.useDropDownViewSwitcherChange = new EventEmitter();
        this.viewsChange = new EventEmitter();

        this._idh.setHost(this);
    }

    protected _createInstance(element, options) {
        return new DxScheduler(element, options);
    }

    ngOnChanges(changes: SimpleChanges) {
        this._idh.setup('dataSource', changes);
        this._idh.setup('groups', changes);
        this._idh.setup('resources', changes);
        this._idh.setup('views', changes);
    }

    ngDoCheck() {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('groups');
        this._idh.doCheck('resources');
        this._idh.doCheck('views');
        this._watcherHelper.checkWatchers();
    }
}



@NgModule({
  declarations: [
    DxSchedulerComponent
  ],
  exports: [
    DxSchedulerComponent
  ],
})
export class DxSchedulerModule { }
