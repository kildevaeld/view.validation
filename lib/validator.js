"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = require("./validators");
const errors_1 = require("./errors");
class AbstractValidatorCollection {
    constructor(key) {
        this._validators = [];
        this._key = key;
    }
    label(label) {
        if (arguments.length == 0)
            return this._label;
        this._label = label;
        return this;
    }
    key(key) {
        if (arguments.length == 0)
            return this._key;
        this._key = key;
        return this;
    }
    required(msg) {
        this._required = new validators_1.RequiredValidator(msg);
        return this;
    }
    match(selector, msg) {
        return this._addValidator(new validators_1.MatchValidator(selector, msg));
    }
    get message() {
        return this.getMessage();
    }
    validate(value) {
        if (this._required) {
            if (!this._required.validate(value)) {
                let e = errors_1.createError(this._required, {
                    label: this._label || '',
                    key: this._key || ''
                });
                throw new errors_1.ValidationErrors([e]);
            }
        }
        // Not required, but empty
        if (value == null || (typeof value === 'string' && value === '')) {
            return;
        }
        let errors = [];
        for (let i = 0, ii = this._validators.length; i < ii; i++) {
            const validator = this._validators[i];
            if (!validator.validate(value)) {
                errors.push(errors_1.createError(validator, {
                    label: this._label || '',
                    key: this._key || ''
                }));
            }
        }
        if (errors.length)
            throw new errors_1.ValidationErrors(errors);
    }
    getMessage() {
        return "";
    }
    _addValidator(v) {
        this._validators.push(v);
        return this;
    }
}
exports.AbstractValidatorCollection = AbstractValidatorCollection;
class StringValidator extends AbstractValidatorCollection {
    email(msg) {
        return this._addValidator(new validators_1.EmailValidator(msg));
    }
    reqexp(req, msg) {
        return this._addValidator(new validators_1.RegexValidator(msg, req));
    }
    min(len, msg) {
        return this._addValidator(new validators_1.MinLengthValidator(len, msg));
    }
    max(len, msg) {
        return this._addValidator(new validators_1.MaxLengthValidator(len, msg));
    }
}
exports.StringValidator = StringValidator;
