"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tim_1 = require("./tim");
class ValidationError extends Error {
    constructor(message, validator) {
        super(message);
        this.validator = validator;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.ValidationError = ValidationError;
class ValidationErrors extends Error {
    constructor(errors, message) {
        super(message);
        this.errors = errors;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.ValidationErrors = ValidationErrors;
function createError(v, label) {
    if (typeof label === 'string') {
        label = { label: label };
    }
    let msg = '';
    if (v.message)
        msg = tim_1.tim(v.message, label);
    return new ValidationError(msg, v);
}
exports.createError = createError;
