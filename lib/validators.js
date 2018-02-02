"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_extras_1 = require("view.extras");
const equaljs_1 = require("equaljs");
class AbstractValidator {
    constructor(msg) {
        if (msg)
            this.message = msg;
    }
}
exports.AbstractValidator = AbstractValidator;
class RequiredValidator extends AbstractValidator {
    validate(value) {
        if (value === null || value === void 0)
            return false;
        if (typeof value === 'string' && value == '')
            return false;
        return true;
    }
    constructor(msg = "{{label}} mangler") {
        super(msg);
    }
}
exports.RequiredValidator = RequiredValidator;
class RegexValidator extends AbstractValidator {
    constructor(msg = "{{label}} er invalid", regex) {
        super(msg);
        this.regex = regex;
    }
    validate(value) {
        return this.regex.test(String(value));
    }
}
exports.RegexValidator = RegexValidator;
class EmailValidator extends RegexValidator {
    constructor(msg = "{{label}} er ikke en valid email") {
        super(msg);
        this.regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
}
exports.EmailValidator = EmailValidator;
class MinLengthValidator extends AbstractValidator {
    constructor(n, msg) {
        super(msg);
        this.len = n;
    }
    validate(value) {
        if (typeof value === 'string') {
            return value.length >= this.len;
        }
        else if (typeof value === 'number') {
            return value >= this.len;
        }
        return false;
    }
}
exports.MinLengthValidator = MinLengthValidator;
class MaxLengthValidator extends AbstractValidator {
    constructor(n, msg) {
        super(msg);
        this.len = n;
    }
    validate(value) {
        if (typeof value === 'string') {
            return value.length <= this.len;
        }
        else if (typeof value === 'number') {
            return value <= this.len;
        }
        return false;
    }
}
exports.MaxLengthValidator = MaxLengthValidator;
class MatchValidator extends AbstractValidator {
    constructor(selector, msg) {
        super(msg);
        this.selector = selector;
    }
    validate(value) {
        const el = document.querySelector(this.selector);
        if (!el) {
            throw new TypeError(`element with selector: "${this.selector}" not found in dom`);
        }
        const otherValue = view_extras_1.getValue(el);
        return equaljs_1.equal(value, otherValue);
    }
}
exports.MatchValidator = MatchValidator;
