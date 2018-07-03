import { ValidatorMap } from './types';
import { BaseView, Constructor, BaseViewOptions } from '@viewjs/view';
import { StringValidator } from './validator';
export declare function validations(v: ValidatorMap | (() => ValidatorMap)): <T extends Constructor<BaseView<E, U>>, E extends HTMLElement, U extends BaseViewOptions<E>>(target: T) => void;
export declare namespace validations {
    function string(key?: string): StringValidator;
}
