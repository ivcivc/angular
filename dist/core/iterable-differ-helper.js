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
var IterableDifferHelper = (function () {
    function IterableDifferHelper(_differs, _cdr) {
        this._differs = _differs;
        this._cdr = _cdr;
        this._propertyDiffers = {};
    }
    IterableDifferHelper.prototype.setHost = function (host) {
        this._host = host;
    };
    IterableDifferHelper.prototype.setup = function (prop, changes) {
        if (prop in changes) {
            var value = changes[prop].currentValue;
            if (value && Array.isArray(value)) {
                if (!this._propertyDiffers[prop]) {
                    try {
                        this._propertyDiffers[prop] = this._differs.find(value).create(this._cdr, null);
                    }
                    catch (e) { }
                }
            }
            else {
                delete this._propertyDiffers[prop];
            }
        }
    };
    IterableDifferHelper.prototype.doCheck = function (prop) {
        if (this._propertyDiffers[prop]) {
            var changes = this._propertyDiffers[prop].diff(this._host[prop]);
            if (changes && this._host.instance) {
                this._host.instance.option(prop, this._host[prop]);
            }
        }
    };
    IterableDifferHelper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.IterableDiffers, core_1.ChangeDetectorRef])
    ], IterableDifferHelper);
    return IterableDifferHelper;
}());
exports.IterableDifferHelper = IterableDifferHelper;

//# sourceMappingURL=iterable-differ-helper.js.map
