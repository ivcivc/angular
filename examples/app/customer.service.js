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
    var Customer, CUSTOMERS, CustomerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Customer = (function () {
                function Customer() {
                }
                return Customer;
            }());
            exports_1("Customer", Customer);
            CUSTOMERS = [{
                    ID: 1,
                    CompanyName: 'Super Mart of the West',
                    Address: '702 SW 8th Street',
                    City: 'Bentonville',
                    State: 'Arkansas',
                    Zipcode: 72716,
                    Phone: '(800) 555-2797',
                    Fax: '(800) 555-2171',
                    Website: 'http://www.nowebsitesupermart.com'
                }, {
                    ID: 2,
                    CompanyName: 'Electronics Depot',
                    Address: '2455 Paces Ferry Road NW',
                    City: 'Atlanta',
                    State: 'Georgia',
                    Zipcode: 30339,
                    Phone: '(800) 595-3232',
                    Fax: '(800) 595-3231',
                    Website: 'http://www.nowebsitedepot.com'
                }, {
                    ID: 3,
                    CompanyName: 'K&S Music',
                    Address: '1000 Nicllet Mall',
                    City: 'Minneapolis',
                    State: 'Minnesota',
                    Zipcode: 55403,
                    Phone: '(612) 304-6073',
                    Fax: '(612) 304-6074',
                    Website: 'http://www.nowebsitemusic.com'
                }, {
                    ID: 4,
                    CompanyName: 'Tom\'s Club',
                    Address: '999 Lake Drive',
                    City: 'Issaquah',
                    State: 'Washington',
                    Zipcode: 98027,
                    Phone: '(800) 955-2292',
                    Fax: '(800) 955-2293',
                    Website: 'http://www.nowebsitetomsclub.com'
                }, {
                    ID: 5,
                    CompanyName: 'E-Mart',
                    Address: '3333 Beverly Rd',
                    City: 'Hoffman Estates',
                    State: 'Illinois',
                    Zipcode: 60179,
                    Phone: '(847) 286-2500',
                    Fax: '(847) 286-2501',
                    Website: 'http://www.nowebsiteemart.com'
                }, {
                    ID: 6,
                    CompanyName: 'Walters',
                    Address: '200 Wilmot Rd',
                    City: 'Deerfield',
                    State: 'Illinois',
                    Zipcode: 60015,
                    Phone: '(847) 940-2500',
                    Fax: '(847) 940-2501',
                    Website: 'http://www.nowebsitewalters.com'
                }, {
                    ID: 7,
                    CompanyName: 'StereoShack',
                    Address: '400 Commerce S',
                    City: 'Fort Worth',
                    State: 'Texas',
                    Zipcode: 76102,
                    Phone: '(817) 820-0741',
                    Fax: '(817) 820-0742',
                    Website: 'http://www.nowebsiteshack.com'
                }, {
                    ID: 8,
                    CompanyName: 'Circuit Town',
                    Address: '2200 Kensington Court',
                    City: 'Oak Brook',
                    State: 'Illinois',
                    Zipcode: 60523,
                    Phone: '(800) 955-2929',
                    Fax: '(800) 955-9392',
                    Website: 'http://www.nowebsitecircuittown.com'
                }, {
                    ID: 9,
                    CompanyName: 'Premier Buy',
                    Address: '7601 Penn Avenue South',
                    City: 'Richfield',
                    State: 'Minnesota',
                    Zipcode: 55423,
                    Phone: '(612) 291-1000',
                    Fax: '(612) 291-2001',
                    Website: 'http://www.nowebsitepremierbuy.com'
                }, {
                    ID: 10,
                    CompanyName: 'ElectrixMax',
                    Address: '263 Shuman Blvd',
                    City: 'Naperville',
                    State: 'Illinois',
                    Zipcode: 60563,
                    Phone: '(630) 438-7800',
                    Fax: '(630) 438-7801',
                    Website: 'http://www.nowebsiteelectrixmax.com'
                }, {
                    ID: 11,
                    CompanyName: 'Video Emporium',
                    Address: '1201 Elm Street',
                    City: 'Dallas',
                    State: 'Texas',
                    Zipcode: 75270,
                    Phone: '(214) 854-3000',
                    Fax: '(214) 854-3001',
                    Website: 'http://www.nowebsitevideoemporium.com'
                }, {
                    ID: 12,
                    CompanyName: 'Screen Shop',
                    Address: '1000 Lowes Blvd',
                    City: 'Mooresville',
                    State: 'North Carolina',
                    Zipcode: 28117,
                    Phone: '(800) 445-6937',
                    Fax: '(800) 445-6938',
                    Website: 'http://www.nowebsitescreenshop.com'
                }, {
                    ID: 13,
                    CompanyName: 'Braeburn',
                    Address: '1 Infinite Loop',
                    City: 'Cupertino',
                    State: 'California',
                    Zipcode: 95014,
                    Phone: '(408) 996-1010',
                    Fax: '(408) 996-1012',
                    Website: 'http://www.nowebsitebraeburn.com'
                }, {
                    ID: 14,
                    CompanyName: 'PriceCo',
                    Address: '30 Hunter Lane',
                    City: 'Camp Hill',
                    State: 'Pennsylvania',
                    Zipcode: 17011,
                    Phone: '(717) 761-2633',
                    Fax: '(717) 761-2334',
                    Website: 'http://www.nowebsitepriceco.com'
                }, {
                    ID: 15,
                    CompanyName: 'Ultimate Gadget',
                    Address: '1557 Watson Blvd',
                    City: 'Warner Robbins',
                    State: 'Georgia',
                    Zipcode: 31093,
                    Phone: '(995) 623-6785',
                    Fax: '(995) 623-6786',
                    Website: 'http://www.nowebsiteultimategadget.com'
                }, {
                    ID: 16,
                    CompanyName: 'EZ Stop',
                    Address: '618 Michillinda Ave.',
                    City: 'Arcadia',
                    State: 'California',
                    Zipcode: 91007,
                    Phone: '(626) 265-8632',
                    Fax: '(626) 265-8633',
                    Website: 'http://www.nowebsiteezstop.com'
                }, {
                    ID: 17,
                    CompanyName: 'Clicker',
                    Address: '1100 W. Artesia Blvd.',
                    City: 'Compton',
                    State: 'California',
                    Zipcode: 90220,
                    Phone: '(310) 884-9000',
                    Fax: '(310) 884-9001',
                    Website: 'http://www.nowebsiteclicker.com'
                }, {
                    ID: 18,
                    CompanyName: 'Store of America',
                    Address: '2401 Utah Ave. South',
                    City: 'Seattle',
                    State: 'Washington',
                    Zipcode: 98134,
                    Phone: '(206) 447-1575',
                    Fax: '(206) 447-1576',
                    Website: 'http://www.nowebsiteamerica.com'
                }, {
                    ID: 19,
                    CompanyName: 'Zone Toys',
                    Address: '1945 S Cienega Boulevard',
                    City: 'Los Angeles',
                    State: 'California',
                    Zipcode: 90034,
                    Phone: '(310) 237-5642',
                    Fax: '(310) 237-5643',
                    Website: 'http://www.nowebsitezonetoys.com'
                }, {
                    ID: 20,
                    CompanyName: 'ACME',
                    Address: '2525 E El Segundo Blvd',
                    City: 'El Segundo',
                    State: 'California',
                    Zipcode: 90245,
                    Phone: '(310) 536-0611',
                    Fax: '(310) 536-0612',
                    Website: 'http://www.nowebsiteacme.com'
                }];
            CustomerService = (function () {
                function CustomerService() {
                }
                CustomerService.prototype.getCustomers = function () {
                    return CUSTOMERS;
                };
                CustomerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CustomerService);
                return CustomerService;
            }());
            exports_1("CustomerService", CustomerService);
        }
    }
});

//# sourceMappingURL=customer.service.js.map
