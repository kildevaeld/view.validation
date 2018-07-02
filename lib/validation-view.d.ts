import { ValidationErrors } from './errors';
import { Constructor, BaseViewConstructor, BaseView } from '@viewjs/view';
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
    getValue(): {
        [key: string]: any;
    };
    /**
     * Set the values of the elements defined in the validation hash
     *
     * @param {{ [key: string]: any }} value
     * @memberof IValidationView
     */
    setValue(value: {
        [key: string]: any;
    }): void;
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
export declare function withValidation<T extends BaseViewConstructor<BaseView<E>, E>, E extends Element>(Base: T, options?: ValidationViewOptions): Constructor<IValidationView> & T;
