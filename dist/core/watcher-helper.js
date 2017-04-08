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
var DOCUMENT_NODE_TYPE = 9;
var WatcherHelper = (function () {
    function WatcherHelper() {
        this._watchers = [];
    }
    WatcherHelper.prototype.getWatchMethod = function () {
        var _this = this;
        var watchMethod = function (valueGetter, valueChangeCallback, options) {
            var oldValue = valueGetter();
            options = options || {};
            if (!options.skipImmediate) {
                valueChangeCallback(oldValue);
            }
            var watcher = function () {
                var newValue = valueGetter();
                if (_this._isDifferentValues(oldValue, newValue, options.deep)) {
                    if (options.disposeWithElement && _this._isElementExpired(options.disposeWithElement)) {
                        return true;
                    }
                    valueChangeCallback(newValue);
                    oldValue = newValue;
                }
            };
            _this._watchers.push(watcher);
            return function () {
                var index = _this._watchers.indexOf(watcher);
                if (index !== -1) {
                    _this._watchers.splice(index, 1);
                }
            };
        };
        return watchMethod;
    };
    WatcherHelper.prototype._isElementExpired = function (element) {
        var isExpired = false;
        if (element) {
            isExpired = element.getRootNode().nodeType !== DOCUMENT_NODE_TYPE;
        }
        return isExpired;
    };
    WatcherHelper.prototype._isDifferentValues = function (oldValue, newValue, deepCheck) {
        var isDifferentValue = false;
        if (deepCheck && newValue instanceof (Object)) {
            isDifferentValue = this._checkObjectsFields(newValue, oldValue);
        }
        else {
            isDifferentValue = oldValue !== newValue;
        }
        return isDifferentValue;
    };
    WatcherHelper.prototype._checkObjectsFields = function (checkingFromObject, checkingToObject) {
        var isDifferentObjects = false;
        for (var field in checkingFromObject) {
            isDifferentObjects = checkingFromObject[field] !== checkingToObject[field];
            if (isDifferentObjects) {
                break;
            }
        }
        return isDifferentObjects;
    };
    WatcherHelper.prototype.checkWatchers = function () {
        for (var _i = 0, _a = this._watchers; _i < _a.length; _i++) {
            var watcher = _a[_i];
            var isWatcherExpired = watcher();
            if (isWatcherExpired) {
                this._watchers.splice(this._watchers.indexOf(watcher), 1);
            }
        }
    };
    WatcherHelper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WatcherHelper);
    return WatcherHelper;
}());
exports.WatcherHelper = WatcherHelper;

//# sourceMappingURL=watcher-helper.js.map
