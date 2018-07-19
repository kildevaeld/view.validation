import { ValidationErrors } from './errors';
import { BaseViewConstructor, View } from '@viewjs/view';
import { Constructor } from '@viewjs/utils';
import { ValidatorMap } from './types';
import { IModel } from '@viewjs/models';
export interface IValidationView<ModelType extends IModel> {
    validations: ValidatorMap | ((this: ModelType) => ValidatorMap);
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
export declare function withValidation<T extends BaseViewConstructor<View<E>, E>, E extends Element, ModelType extends IModel>(Base: T, options?: ValidationViewOptions): Constructor<IValidationView<ModelType>> & T;
