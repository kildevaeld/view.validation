import { View, BaseViewOptions } from '@viewjs/view';
import { Constructor } from '@viewjs/utils';
import { ValidationErrors } from './errors';
import { IValidationView } from './validation-view';
import { IModelController } from '@viewjs/data';
export interface FormViewOptions extends BaseViewOptions<HTMLElement> {
    errorClass?: string;
    showErrorMessage?: boolean;
    errorMessageClass?: string;
}
declare const FormView_base: Constructor<IValidationView<import("../../../../../../Users/rasmus/Development/Javascripts/view.validation/node_modules/@viewjs/data/lib/types").IModel>> & typeof View & Constructor<IModelController<import("../../../../../../Users/rasmus/Development/Javascripts/view.validation/node_modules/@viewjs/data/lib/types").IModel>> & Constructor<import("../../../../../../Users/rasmus/Development/Javascripts/view.validation/node_modules/@viewjs/data/lib/with-bindings").IBindableView>;
export declare class FormView extends FormView_base {
    constructor(options?: FormViewOptions);
    setValidationError(target: HTMLElement, errors: ValidationErrors): void;
    clearValidationError(target: HTMLElement): void;
    protected _getErrorMessage(errors: ValidationErrors): string;
}
export {};
