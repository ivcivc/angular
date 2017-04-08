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
    var Owner, Owners, OwnerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Owner = (function () {
                function Owner() {
                }
                return Owner;
            }());
            exports_1("Owner", Owner);
            Owners = [
                {
                    text: 'Samantha Bright',
                    id: 1,
                    color: '#cb6bb2'
                }, {
                    text: 'John Heart',
                    id: 2,
                    color: '#56ca85'
                }, {
                    text: 'Todd Hoffman',
                    id: 3,
                    color: '#1e90ff'
                }, {
                    text: 'Sandra Johnson',
                    id: 4,
                    color: '#ff9747'
                }
            ];
            OwnerService = (function () {
                function OwnerService() {
                }
                OwnerService.prototype.getOwners = function () {
                    return Owners;
                };
                OwnerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], OwnerService);
                return OwnerService;
            }());
            exports_1("OwnerService", OwnerService);
        }
    }
});

//# sourceMappingURL=owner.service.js.map
