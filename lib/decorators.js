"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = require("./validator");
function validations(v) {
    return function (target) {
        target.prototype._validations = v;
    };
}
exports.validations = validations;
(function (validations) {
    function string(key) {
        return new validator_1.StringValidator(key);
    }
    validations.string = string;
})(validations = exports.validations || (exports.validations = {}));
