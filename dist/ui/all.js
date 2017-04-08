"use strict";
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
var accordion_1 = require('./accordion');
var action_sheet_1 = require('./action-sheet');
var autocomplete_1 = require('./autocomplete');
var bar_gauge_1 = require('./bar-gauge');
var box_1 = require('./box');
var bullet_1 = require('./bullet');
var button_1 = require('./button');
var calendar_1 = require('./calendar');
var chart_1 = require('./chart');
var check_box_1 = require('./check-box');
var circular_gauge_1 = require('./circular-gauge');
var color_box_1 = require('./color-box');
var context_menu_1 = require('./context-menu');
var data_grid_1 = require('./data-grid');
var date_box_1 = require('./date-box');
var defer_rendering_1 = require('./defer-rendering');
var file_uploader_1 = require('./file-uploader');
var form_1 = require('./form');
var gallery_1 = require('./gallery');
var linear_gauge_1 = require('./linear-gauge');
var list_1 = require('./list');
var load_indicator_1 = require('./load-indicator');
var load_panel_1 = require('./load-panel');
var lookup_1 = require('./lookup');
var map_1 = require('./map');
var menu_1 = require('./menu');
var multi_view_1 = require('./multi-view');
var nav_bar_1 = require('./nav-bar');
var number_box_1 = require('./number-box');
var panorama_1 = require('./panorama');
var pie_chart_1 = require('./pie-chart');
var pivot_grid_field_chooser_1 = require('./pivot-grid-field-chooser');
var pivot_grid_1 = require('./pivot-grid');
var pivot_1 = require('./pivot');
var polar_chart_1 = require('./polar-chart');
var popover_1 = require('./popover');
var popup_1 = require('./popup');
var progress_bar_1 = require('./progress-bar');
var radio_group_1 = require('./radio-group');
var range_selector_1 = require('./range-selector');
var range_slider_1 = require('./range-slider');
var resizable_1 = require('./resizable');
var responsive_box_1 = require('./responsive-box');
var scheduler_1 = require('./scheduler');
var scroll_view_1 = require('./scroll-view');
var select_box_1 = require('./select-box');
var slide_out_view_1 = require('./slide-out-view');
var slide_out_1 = require('./slide-out');
var slider_1 = require('./slider');
var sparkline_1 = require('./sparkline');
var switch_1 = require('./switch');
var tab_panel_1 = require('./tab-panel');
var tabs_1 = require('./tabs');
var tag_box_1 = require('./tag-box');
var text_area_1 = require('./text-area');
var text_box_1 = require('./text-box');
var tile_view_1 = require('./tile-view');
var toast_1 = require('./toast');
var toolbar_1 = require('./toolbar');
var tooltip_1 = require('./tooltip');
var tree_map_1 = require('./tree-map');
var tree_view_1 = require('./tree-view');
var validation_group_1 = require('./validation-group');
var validation_summary_1 = require('./validation-summary');
var validator_1 = require('./validator');
var vector_map_1 = require('./vector-map');
var dx_template_1 = require('../core/dx.template');
var DevExtremeModule = (function () {
    function DevExtremeModule() {
    }
    DevExtremeModule = __decorate([
        core_1.NgModule({
            imports: [
                accordion_1.DxAccordionModule,
                action_sheet_1.DxActionSheetModule,
                autocomplete_1.DxAutocompleteModule,
                bar_gauge_1.DxBarGaugeModule,
                box_1.DxBoxModule,
                bullet_1.DxBulletModule,
                button_1.DxButtonModule,
                calendar_1.DxCalendarModule,
                chart_1.DxChartModule,
                check_box_1.DxCheckBoxModule,
                circular_gauge_1.DxCircularGaugeModule,
                color_box_1.DxColorBoxModule,
                context_menu_1.DxContextMenuModule,
                data_grid_1.DxDataGridModule,
                date_box_1.DxDateBoxModule,
                defer_rendering_1.DxDeferRenderingModule,
                file_uploader_1.DxFileUploaderModule,
                form_1.DxFormModule,
                gallery_1.DxGalleryModule,
                linear_gauge_1.DxLinearGaugeModule,
                list_1.DxListModule,
                load_indicator_1.DxLoadIndicatorModule,
                load_panel_1.DxLoadPanelModule,
                lookup_1.DxLookupModule,
                map_1.DxMapModule,
                menu_1.DxMenuModule,
                multi_view_1.DxMultiViewModule,
                nav_bar_1.DxNavBarModule,
                number_box_1.DxNumberBoxModule,
                panorama_1.DxPanoramaModule,
                pie_chart_1.DxPieChartModule,
                pivot_grid_field_chooser_1.DxPivotGridFieldChooserModule,
                pivot_grid_1.DxPivotGridModule,
                pivot_1.DxPivotModule,
                polar_chart_1.DxPolarChartModule,
                popover_1.DxPopoverModule,
                popup_1.DxPopupModule,
                progress_bar_1.DxProgressBarModule,
                radio_group_1.DxRadioGroupModule,
                range_selector_1.DxRangeSelectorModule,
                range_slider_1.DxRangeSliderModule,
                resizable_1.DxResizableModule,
                responsive_box_1.DxResponsiveBoxModule,
                scheduler_1.DxSchedulerModule,
                scroll_view_1.DxScrollViewModule,
                select_box_1.DxSelectBoxModule,
                slide_out_view_1.DxSlideOutViewModule,
                slide_out_1.DxSlideOutModule,
                slider_1.DxSliderModule,
                sparkline_1.DxSparklineModule,
                switch_1.DxSwitchModule,
                tab_panel_1.DxTabPanelModule,
                tabs_1.DxTabModule,
                tag_box_1.DxTagBoxModule,
                text_area_1.DxTextAreaModule,
                text_box_1.DxTextBoxModule,
                tile_view_1.DxTileViewModule,
                toast_1.DxToastModule,
                toolbar_1.DxToolbarModule,
                tooltip_1.DxTooltipModule,
                tree_map_1.DxTreeMapModule,
                tree_view_1.DxTreeViewModule,
                validation_group_1.DxValidationGroupModule,
                validation_summary_1.DxValidationSummaryModule,
                validator_1.DxValidatorModule,
                vector_map_1.DxVectorMapModule,
                dx_template_1.DxTemplateModule
            ],
            exports: [
                accordion_1.DxAccordionModule,
                action_sheet_1.DxActionSheetModule,
                autocomplete_1.DxAutocompleteModule,
                bar_gauge_1.DxBarGaugeModule,
                box_1.DxBoxModule,
                bullet_1.DxBulletModule,
                button_1.DxButtonModule,
                calendar_1.DxCalendarModule,
                chart_1.DxChartModule,
                check_box_1.DxCheckBoxModule,
                circular_gauge_1.DxCircularGaugeModule,
                color_box_1.DxColorBoxModule,
                context_menu_1.DxContextMenuModule,
                data_grid_1.DxDataGridModule,
                date_box_1.DxDateBoxModule,
                defer_rendering_1.DxDeferRenderingModule,
                file_uploader_1.DxFileUploaderModule,
                form_1.DxFormModule,
                gallery_1.DxGalleryModule,
                linear_gauge_1.DxLinearGaugeModule,
                list_1.DxListModule,
                load_indicator_1.DxLoadIndicatorModule,
                load_panel_1.DxLoadPanelModule,
                lookup_1.DxLookupModule,
                map_1.DxMapModule,
                menu_1.DxMenuModule,
                multi_view_1.DxMultiViewModule,
                nav_bar_1.DxNavBarModule,
                number_box_1.DxNumberBoxModule,
                panorama_1.DxPanoramaModule,
                pie_chart_1.DxPieChartModule,
                pivot_grid_field_chooser_1.DxPivotGridFieldChooserModule,
                pivot_grid_1.DxPivotGridModule,
                pivot_1.DxPivotModule,
                polar_chart_1.DxPolarChartModule,
                popover_1.DxPopoverModule,
                popup_1.DxPopupModule,
                progress_bar_1.DxProgressBarModule,
                radio_group_1.DxRadioGroupModule,
                range_selector_1.DxRangeSelectorModule,
                range_slider_1.DxRangeSliderModule,
                resizable_1.DxResizableModule,
                responsive_box_1.DxResponsiveBoxModule,
                scheduler_1.DxSchedulerModule,
                scroll_view_1.DxScrollViewModule,
                select_box_1.DxSelectBoxModule,
                slide_out_view_1.DxSlideOutViewModule,
                slide_out_1.DxSlideOutModule,
                slider_1.DxSliderModule,
                sparkline_1.DxSparklineModule,
                switch_1.DxSwitchModule,
                tab_panel_1.DxTabPanelModule,
                tabs_1.DxTabModule,
                tag_box_1.DxTagBoxModule,
                text_area_1.DxTextAreaModule,
                text_box_1.DxTextBoxModule,
                tile_view_1.DxTileViewModule,
                toast_1.DxToastModule,
                toolbar_1.DxToolbarModule,
                tooltip_1.DxTooltipModule,
                tree_map_1.DxTreeMapModule,
                tree_view_1.DxTreeViewModule,
                validation_group_1.DxValidationGroupModule,
                validation_summary_1.DxValidationSummaryModule,
                validator_1.DxValidatorModule,
                vector_map_1.DxVectorMapModule,
                dx_template_1.DxTemplateModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DevExtremeModule);
    return DevExtremeModule;
}());
exports.DevExtremeModule = DevExtremeModule;

//# sourceMappingURL=all.js.map
