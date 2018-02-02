import { ValidationErrors, ValidationError } from './errors';
import { Constructor, BaseViewConstructor, BaseView, normalizeUIKeys, DelegateEvent, result } from 'view';
import { getValue, setValue } from 'view.html';
import { IValidatorCollection, ValidatorMap } from './types';

export interface IValidationView {

    /**
     * Validate view. Throws a ValidationErrors on error
     * Will all call setValidationError on error, and clearValidationError when no error
     * 
     * @param {boolean} [silent] 
     * @memberof IValidationView
     */
    validate(silent?: boolean): void;
    /**
     * Check if the view validates to true
     * 
     * @returns {boolean} 
     * @memberof IValidationView
     */
    isValid(): boolean;
    /**
     * Get the values of the elements defined in the validation hash
     * 
     * @returns {{ [key: string]: any }} 
     * @memberof IValidationView
     */
    getValue(): { [key: string]: any };

    /**
     * Set the values of the elements defined in the validation hash
     * 
     * @param {{ [key: string]: any }} value 
     * @memberof IValidationView
     */
    setValue(value: { [key: string]: any }): void;

    /**
     * Clear the value (set to empty) of all the elements defined in the validation hash
     * 
     * @memberof IValidationView
     */
    clear(): void;

    /**
     * This is called when a element is invalid
     * 
     * @param {HTMLElement} target 
     * @param {ValidationErrors} error 
     * @memberof IValidationView
     */
    setValidationError(target: HTMLElement, error: ValidationErrors): void;
    clearValidationError(target: HTMLElement): void;
    clearAllErrors(): this;
}

export interface ValidationViewOptions {
    event: string;
}

export function ValidationView<T extends BaseViewConstructor<BaseView<E>, E>, E extends Element>(Base: T, options: ValidationViewOptions = { event: 'change' }): Constructor<IValidationView> & T {

    function validation_wrap<T extends any>(self: T, v: IValidatorCollection) {
        return function (this: T, e: DelegateEvent) {
            let target = e.delegateTarget || e.target;
            if (!target) throw new TypeError('no target');


            try {
                v.validate(getValue(target as HTMLElement));
                if (typeof this.clearValidationError === 'function') {
                    this.clearValidationError(target);
                }
            } catch (e) {

                if (typeof this.setValidationError === 'function') {
                    this.setValidationError(target, e);
                }
            }

        }.bind(self);
    }


    return class extends Base {
        private _validations: ValidatorMap | ((this: T) => ValidatorMap);

        render() {
            super.render()

            const v = this._getValidations();

            for (let key in v) {

                const wrapper = validation_wrap(this, v[key]);
                this.delegate(options.event, key, wrapper);
                if (options.event !== 'change')
                    this.delegate('change', wrapper)

                //this.delegate(options.event, key, validation_wrap(this, v[key]));

                this.delegate('blur', key, (e: DelegateEvent) => {
                    let target = e.delegateTarget as HTMLElement,
                        value = getValue(target);
                    if (!value) this.clearValidationError(target);
                });
            }

            return this;

        }

        setValidationError(..._: any[]) { }

        clearValidationError(..._: any[]) { }

        validate(silent: boolean = false): void {

            const v = this._getValidations(),
                errors = [] as ValidationError[];
            for (let key in v) {
                let el = this.el!.querySelector(key);

                try {
                    v[key].validate(getValue(el as HTMLElement));
                    if (!silent)
                        this.clearValidationError(el!);
                } catch (e) {

                    if (!silent)
                        this.setValidationError(el!, e);
                    (e as ValidationErrors).errors.forEach(m => errors.push(e));
                }
            }

            if (errors.length) {
                throw new ValidationErrors(errors);
            }
        }

        getValue() {
            const v = this._getValidations(),
                out: { [key: string]: any } = {};

            for (let key in v) {
                const el = this.el!.querySelector(key),
                    name = v[key].key() || el!.getAttribute('name') || v[key].label() || key;
                out[name] = getValue(el as HTMLElement);
            }

            return out;
        }

        setValue(input: { [key: string]: any }) {
            const v = this._getValidations();

            for (let key in v) {
                const el = this.el!.querySelector(key) as HTMLElement,
                    name = v[key].key() || el!.getAttribute('name') || v[key].label() || key;
                if (input[name]) {
                    setValue(el!, input[name]);
                }
            }
        }

        clear() {
            const v = this._getValidations();

            for (let key in v) {
                const el = this.el!.querySelector(key) as HTMLElement;
                setValue(el, null);
            }
        }

        isValid() {
            try {
                this.validate(true);
                return true;
            } catch (e) {
                return false;
            }
        }

        clearAllErrors() {
            const ui = (<any>this)._ui || this.ui,
                v: any = normalizeUIKeys(this._validations, ui);
            for (let key in v) {
                let el = this.el!.querySelector(key);
                this.clearValidationError(el!);
            }

            return this;
        }

        private _getValidations(): ValidatorMap {
            const ui = (<any>this)._ui || this.ui,
                validations = result(this, '_validations') || (<any>this.constructor).validations || {},
                v: any = normalizeUIKeys(validations, ui);

            return v;
        }
    }
}
