import { View, BaseViewOptions } from '@viewjs/view';
import { extend, triggerMethodOn } from '@viewjs/utils';
import { ValidationErrors } from './errors';
import { withValidation, IValidationView } from './validation-view';

export interface FormViewOptions extends BaseViewOptions<HTMLElement> {
    errorClass?: string;
    showErrorMessage?: boolean;
    errorMessageClass?: string;
}

export class FormView extends withValidation(View, { event: 'keyup' }) implements IValidationView {

    readonly options: FormViewOptions;

    constructor(options?: FormViewOptions) {
        super(extend({
            errorMessageClass: 'input-message',
            errorClass: 'has-error',
            showErrorMessage: true
        }, options || {}));

    }


    setValidationError(target: HTMLElement, errors: ValidationErrors) {

        if (target != document.activeElement) {
            // Only show new errors in active element
            return;
        }

        const container = target.parentElement!

        if (this.options.showErrorMessage) {
            let msg = container.querySelector('.' + this.options.errorMessageClass!);

            const text = this._getErrorMessage(errors);

            if (!msg) {
                msg = document.createElement('div');
                msg.classList.add(this.options.errorMessageClass!);
                container.appendChild(msg);
            }

            msg.innerHTML = text;

            msg.classList.remove('hidden');

        }

        container.classList.add(this.options.errorClass!);


        triggerMethodOn(this, 'valid', false);


    }

    clearValidationError(target: HTMLElement) {
        const container = target.parentElement!
        let msg = container.querySelector('.' + this.options.errorMessageClass!);
        if (msg) {
            msg.innerHTML = '';
            msg.classList.add('hidden');
        }
        container.classList.remove(this.options.errorClass!);

        triggerMethodOn(this, 'valid', this.isValid());

    }


    protected _getErrorMessage(errors: ValidationErrors) {
        return errors.errors.map(m => {
            return m.message;
        }).join('<br/>');
    }

}