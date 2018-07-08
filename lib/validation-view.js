"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
const view_1 = require("@viewjs/view");
const utils_1 = require("@viewjs/utils");
const html_1 = require("@viewjs/html");
function withValidation(Base, options = { event: 'change' }) {
    function validation_wrap(self, v) {
        return function (e) {
            let target = e.delegateTarget || e.target;
            if (!target)
                throw new TypeError('no target');
            try {
                v.validate(html_1.getValue(target));
                if (typeof this.clearValidationError === 'function') {
                    this.clearValidationError(target);
                }
            }
            catch (e) {
                if (typeof this.setValidationError === 'function') {
                    this.setValidationError(target, e);
                }
            }
            utils_1.triggerMethodOn(this, 'change:value');
        }.bind(self);
    }
    return class extends Base {
        render() {
            super.render();
            const v = this._getValidations();
            for (let key in v) {
                const wrapper = validation_wrap(this, v[key]);
                this.delegate(options.event, key, wrapper);
                if (options.event !== 'change')
                    this.delegate('change', wrapper);
                this.delegate('blur', key, (e) => {
                    let target = e.delegateTarget, value = html_1.getValue(target);
                    if (!value)
                        this.clearValidationError(target);
                });
            }
            return this;
        }
        setValidationError(..._) { }
        clearValidationError(..._) { }
        validate(silent = false) {
            const v = this._getValidations(), errors = [];
            for (let key in v) {
                let el = this.el.querySelector(key);
                try {
                    v[key].validate(html_1.getValue(el));
                    if (!silent)
                        this.clearValidationError(el);
                }
                catch (e) {
                    if (!silent)
                        this.setValidationError(el, e);
                    e.errors.forEach(m => errors.push(e));
                }
            }
            if (errors.length) {
                throw new errors_1.ValidationErrors(errors);
            }
        }
        isValid() {
            try {
                this.validate(true);
                return true;
            }
            catch (e) {
                return false;
            }
        }
        clearAllErrors() {
            const ui = this._ui || this.ui, v = view_1.normalizeUIKeys(this.validations, ui);
            for (let key in v) {
                let el = this.el.querySelector(key);
                this.clearValidationError(el);
            }
            return this;
        }
        _getValidations() {
            const ui = this._ui || this.ui, validations = utils_1.result(this, '_validations') || this.constructor.validations || {}, v = view_1.normalizeUIKeys(validations, ui);
            return v;
        }
    };
}
exports.withValidation = withValidation;
