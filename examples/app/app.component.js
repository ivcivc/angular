System.register(['@angular/core', '@angular/forms', './orange.service', './customer.service', './appointment.service', './owner.service', '../../dist'], function(exports_1, context_1) {
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
    var core_1, forms_1, orange_service_1, customer_service_1, appointment_service_1, owner_service_1, dist_1;
    var AppComponent, CustomValidator;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (orange_service_1_1) {
                orange_service_1 = orange_service_1_1;
            },
            function (customer_service_1_1) {
                customer_service_1 = customer_service_1_1;
            },
            function (appointment_service_1_1) {
                appointment_service_1 = appointment_service_1_1;
            },
            function (owner_service_1_1) {
                owner_service_1 = owner_service_1_1;
            },
            function (dist_1_1) {
                dist_1 = dist_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(orangeService, customerService, appointmentService, ownerService) {
                    this.orangeService = orangeService;
                    this.customerService = customerService;
                    this.appointmentService = appointmentService;
                    this.ownerService = ownerService;
                    this.text = 'Initial text';
                    this.dxValidationRules = {
                        email: [
                            { type: 'required', message: 'Email is required.' },
                            { type: 'email', message: 'Email is invalid.' }
                        ],
                        password: [
                            { type: 'required', message: 'Email is required.' }
                        ]
                    };
                    this.popupVisible = false;
                    this.series = {
                        argumentField: 'day',
                        valueField: 'oranges',
                        name: 'My oranges',
                        type: 'bar',
                        color: '#ffa500'
                    };
                    this.tabs = [
                        {
                            id: 0,
                            text: 'user',
                            icon: 'user',
                            content: 'User tab content'
                        }, {
                            id: 1,
                            text: 'comment',
                            icon: 'comment',
                            content: 'Comment tab content'
                        }, {
                            id: 2,
                            text: 'find',
                            icon: 'find',
                            content: 'Find tab content'
                        }
                    ];
                    this.text = 'Text in textbox';
                    this.boolValue = true;
                    this.numberValue = 10;
                    this.dateValue = new Date();
                    this.currentDate = new Date(2015, 4, 25);
                    this.demoItems = [
                        'item1',
                        'item2',
                        'item3'
                    ];
                    this.tabContent = this.tabs[0].content;
                }
                AppComponent.prototype.helloWorld = function () {
                    alert('Hello world');
                };
                AppComponent.prototype.buy = function (model) {
                    alert(model + ' has been added to order');
                };
                AppComponent.prototype.callNumber = function (number) {
                    alert(number + ' is being called...');
                };
                AppComponent.prototype.onSubmit = function () {
                    this.form.updateValueAndValidity();
                    console.log('submitted');
                    return false;
                };
                AppComponent.prototype.validate = function (params) {
                    var result = params.validationGroup.validate();
                    if (result.isValid) {
                        alert('Form data is valid');
                    }
                    else {
                        alert('Form data is invalid');
                    }
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.form = new forms_1.FormGroup({
                        emailControl: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, CustomValidator.mailFormat])),
                        passwordControl: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)]))
                    });
                    this.emailControl = this.form.controls['emailControl'];
                    this.passwordControl = this.form.controls['passwordControl'];
                    this.oranges = this.orangeService.getOranges();
                    this.customers = this.customerService.getCustomers();
                    this.appointments = this.appointmentService.getAppointments();
                    this.resources = [{
                            field: 'OwnerId',
                            allowMultiple: true,
                            dataSource: this.ownerService.getOwners(),
                            label: 'Owner'
                        }];
                    this.tabPanelItems = this.customers.slice(0, 4);
                };
                AppComponent.prototype.showPopover = function () {
                    this.popover.instance.show();
                };
                AppComponent.prototype.selectTab = function (e) {
                    this.tabContent = this.tabs[e.itemIndex].content;
                };
                __decorate([
                    core_1.ViewChild(dist_1.DxPopoverComponent), 
                    __metadata('design:type', dist_1.DxPopoverComponent)
                ], AppComponent.prototype, "popover", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: ["\n        h1, h2, h3 {\n            font-family: 'Helvetica Neue','Segoe UI',Helvetica,Verdana,sans-serif;\n        }\n        .demo-container {\n            width: 400px;\n        }\n        .demo-container > .dx-widget {\n            margin-bottom: 20px;\n            -display: block;\n        }\n        .float-right {\n            float: right;\n        }\n        .full-width {\n            width: 100%;\n            display: block;\n        }\n        .scroll-view-height {\n            height: 200px;\n            display: block;\n        }\n        .resizable {\n            display: block; \n            background-color: #ccc;\n        }\n        .tab-content {\n            text-align: justify;\n            margin-top: 25px;\n        }\n        #tabs {\n            margin-top: 60px;\n        }\n        .tabpanel-item {\n            height: 200px;\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            padding-left: 25px;\n            padding-top: 55px;\n        }\n        .tabpanel-item  > div {\n            float: left;\n            padding: 0 85px 10px 10px\n        }\n        .tabpanel-item  p {\n            font-size: 16px;\n        }\n        .form-group {\n            margin-bottom: 10px;\n        }\n    "],
                        templateUrl: 'app/app.component.html',
                        providers: [
                            orange_service_1.OrangeService,
                            customer_service_1.CustomerService,
                            appointment_service_1.AppointmentService,
                            owner_service_1.OwnerService
                        ]
                    }), 
                    __metadata('design:paramtypes', [orange_service_1.OrangeService, customer_service_1.CustomerService, appointment_service_1.AppointmentService, owner_service_1.OwnerService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            CustomValidator = (function () {
                function CustomValidator() {
                }
                CustomValidator.mailFormat = function (control) {
                    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    if (control.value && control.value.length && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
                        return { 'incorrectMailFormat': true };
                    }
                    return null;
                };
                return CustomValidator;
            }());
            exports_1("CustomValidator", CustomValidator);
        }
    }
});

//# sourceMappingURL=app.component.js.map
