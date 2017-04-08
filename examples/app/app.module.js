System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', './app.component', '../../dist'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, forms_1, app_component_1, dist_1;
    var MyAppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (dist_1_1) {
                dist_1 = dist_1_1;
            }],
        execute: function() {
            MyAppModule = (function () {
                function MyAppModule() {
                }
                MyAppModule = __decorate([
                    core_1.NgModule({
                        declarations: [app_component_1.AppComponent],
                        imports: [
                            platform_browser_1.BrowserModule,
                            dist_1.DevExtremeModule,
                            forms_1.ReactiveFormsModule
                        ],
                        bootstrap: [app_component_1.AppComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyAppModule);
                return MyAppModule;
            }());
            exports_1("MyAppModule", MyAppModule);
        }
    }
});

//# sourceMappingURL=app.module.js.map
