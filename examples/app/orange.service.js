System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var Orange, ORANGES, OrangeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Orange = (function () {
                function Orange() {
                }
                return Orange;
            }());
            exports_1("Orange", Orange);
            ORANGES = [{
                    day: 'Monday',
                    oranges: 3
                }, {
                    day: 'Tuesday',
                    oranges: 2
                }, {
                    day: 'Wednesday',
                    oranges: 3
                }, {
                    day: 'Thursday',
                    oranges: 4
                }, {
                    day: 'Friday',
                    oranges: 6
                }, {
                    day: 'Saturday',
                    oranges: 11
                }, {
                    day: 'Sunday',
                    oranges: 4
                }];
            OrangeService = (function () {
                function OrangeService() {
                }
                OrangeService.prototype.getOranges = function () {
                    return ORANGES;
                };
                OrangeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], OrangeService);
                return OrangeService;
            }());
            exports_1("OrangeService", OrangeService);
        }
    }
});

//# sourceMappingURL=orange.service.js.map
