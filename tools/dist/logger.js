"use strict";
var argv = require('yargs')
    .default('verbose', false)
    .argv;
function default_1() {
    var any = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        any[_i - 0] = arguments[_i];
    }
    if (argv.verbose) {
        console.log.apply(console, arguments);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
;

//# sourceMappingURL=logger.js.map
