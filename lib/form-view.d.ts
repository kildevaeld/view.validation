import { BaseViewOptions, BaseView, Constructor } from '@viewjs/view';
import { ValidationErrors } from './errors';
import { IValidationView } from './validation-view';
export interface FormViewOptions extends BaseViewOptions<HTMLElement> {
    errorClass?: string;
    showErrorMessage?: boolean;
    errorMessageClass?: string;
}
declare const FormView_base: Constructor<IValidationView> & Constructor<BaseView<HTMLElement, FormViewOptions>>;
export declare class FormView extends FormView_base implements IValidationView {
    constructor(options?: FormViewOptions);
    setValidationError(target: HTMLElement, errors: ValidationErrors): void;
    clearValidationError(target: HTMLElement): void;
    protected _getErrorMessage(errors: ValidationErrors): string;
}
export {};
