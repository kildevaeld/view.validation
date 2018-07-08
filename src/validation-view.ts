import { ValidationErrors, ValidationError } from './errors';
import { BaseViewConstructor, View, normalizeUIKeys, DelegateEvent } from '@viewjs/view';
import { result, triggerMethodOn, Constructor } from '@viewjs/utils';
import { getValue, setValue } from '@viewjs/html';
import { IValidatorCollection, ValidatorMap } from './types';
import { IModelController, IModel } from '@viewjs/data';


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

export function withValidation<
    T extends BaseViewConstructor<View<E>, E>,
    E extends Element
    >(Base: T, options: ValidationViewOptions = { event: 'change' }): Constructor<IValidationView> & T {

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

            triggerMethodOn(this, 'change:value');

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
