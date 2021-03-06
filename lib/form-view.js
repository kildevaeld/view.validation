"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("view");
const validation_view_1 = require("./validation-view");
class FormView extends validation_view_1.withValidation(view_1.View, { event: 'keyup' }) {
    constructor(options) {
        super(view_1.extend({
            errorMessageClass: 'input-message',
            errorClass: 'has-error',
            showErrorMessage: true
        }, options || {}));
    }
    setValidationError(target, errors) {
        if (target != document.activeElement) {
            // Only show new errors in active element
            return;
        }
        const container = target.parentElement;
        if (this.options.showErrorMessage) {
            let msg = container.querySelector('.' + this.options.errorMessageClass);
            const text = this._getErrorMessage(errors);
            if (!msg) {
                msg = document.createElement('div');
                msg.classList.add(this.options.errorMessageClass);
                container.appendChild(msg);
            }
            msg.innerHTML = text;
            msg.classList.remove('hidden');
        }
        container.classList.add(this.options.errorClass);
        view_1.triggerMethodOn(this, 'valid', false);
    }
    clearValidationError(target) {
        const container = target.parentElement;
        let msg = container.querySelector('.' + this.options.errorMessageClass);
        if (msg) {
            msg.innerHTML = '';
            msg.classList.add('hidden');
        }
        container.classList.remove(this.options.errorClass);
        view_1.triggerMethodOn(this, 'valid', this.isValid());
    }
    _getErrorMessage(errors) {
        return errors.errors.map(m => {
            return m.message;
        }).join('<br/>');
    }
}
exports.FormView = FormView;
