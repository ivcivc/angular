System.register(['@angular/platform-browser-dynamic', './app.module', 'devextreme/core/config'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_module_1, config_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            config_1.default({ defaulCurrency: 'EUR' });
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.MyAppModule);
        }
    }
});

//# sourceMappingURL=main.js.map
