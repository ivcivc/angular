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
    var Appointment, Appointments, AppointmentService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Appointment = (function () {
                function Appointment() {
                }
                return Appointment;
            }());
            exports_1("Appointment", Appointment);
            Appointments = [
                {
                    Text: 'Website Re-Design Plan',
                    OwnerId: [4],
                    StartDate: new Date(2015, 4, 25, 9, 30),
                    EndDate: new Date(2015, 4, 25, 11, 30)
                }, {
                    Text: 'Book Flights to San Fran for Sales Trip',
                    OwnerId: [2],
                    StartDate: new Date(2015, 4, 25, 12, 0),
                    EndDate: new Date(2015, 4, 25, 13, 0)
                }, {
                    Text: 'Install New Router in Dev Room',
                    OwnerId: [1],
                    StartDate: new Date(2015, 4, 25, 14, 30),
                    EndDate: new Date(2015, 4, 25, 15, 30)
                }, {
                    Text: 'Approve Personal Computer Upgrade Plan',
                    OwnerId: [3],
                    StartDate: new Date(2015, 4, 26, 10, 0),
                    EndDate: new Date(2015, 4, 26, 11, 0)
                }, {
                    Text: 'Final Budget Review',
                    OwnerId: [1],
                    StartDate: new Date(2015, 4, 26, 12, 0),
                    EndDate: new Date(2015, 4, 26, 13, 35)
                }, {
                    Text: 'New Brochures',
                    OwnerId: [4],
                    StartDate: new Date(2015, 4, 26, 14, 30),
                    EndDate: new Date(2015, 4, 26, 15, 45)
                }, {
                    Text: 'Install New Database',
                    OwnerId: [2],
                    StartDate: new Date(2015, 4, 27, 9, 45),
                    EndDate: new Date(2015, 4, 27, 11, 15)
                }, {
                    Text: 'Approve New Online Marketing Strategy',
                    OwnerId: [3, 4],
                    StartDate: new Date(2015, 4, 27, 12, 0),
                    EndDate: new Date(2015, 4, 27, 14, 0)
                }, {
                    Text: 'Upgrade Personal Computers',
                    OwnerId: [2],
                    StartDate: new Date(2015, 4, 27, 15, 15),
                    EndDate: new Date(2015, 4, 27, 16, 30)
                }, {
                    Text: 'Prepare 2015 Marketing Plan',
                    OwnerId: [1, 3],
                    StartDate: new Date(2015, 4, 28, 11, 0),
                    EndDate: new Date(2015, 4, 28, 13, 30)
                }, {
                    Text: 'Brochure Design Review',
                    OwnerId: [4],
                    StartDate: new Date(2015, 4, 28, 14, 0),
                    EndDate: new Date(2015, 4, 28, 15, 30)
                }, {
                    Text: 'Create Icons for Website',
                    OwnerId: [3],
                    StartDate: new Date(2015, 4, 29, 10, 0),
                    EndDate: new Date(2015, 4, 29, 11, 30)
                }, {
                    Text: 'Upgrade Server Hardware',
                    OwnerId: [4],
                    StartDate: new Date(2015, 4, 29, 14, 30),
                    EndDate: new Date(2015, 4, 29, 16, 0)
                }, {
                    Text: 'Submit New Website Design',
                    OwnerId: [1],
                    StartDate: new Date(2015, 4, 29, 16, 30),
                    EndDate: new Date(2015, 4, 29, 18, 0)
                }, {
                    Text: 'Launch New Website',
                    OwnerId: [2],
                    StartDate: new Date(2015, 4, 29, 12, 20),
                    EndDate: new Date(2015, 4, 29, 14, 0)
                }
            ];
            AppointmentService = (function () {
                function AppointmentService() {
                }
                AppointmentService.prototype.getAppointments = function () {
                    return Appointments;
                };
                AppointmentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AppointmentService);
                return AppointmentService;
            }());
            exports_1("AppointmentService", AppointmentService);
        }
    }
});

//# sourceMappingURL=appointment.service.js.map
