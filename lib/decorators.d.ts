import { ValidatorMap } from './types';
import { View, BaseViewOptions } from '@viewjs/view';
import { StringValidator } from './validator';
import { Constructor } from '@viewjs/utils';
export declare function validations(v: ValidatorMap | (() => ValidatorMap)): <T extends Constructor<View<E, U>>, E extends HTMLElement, U extends BaseViewOptions<E>>(target: T) => void;
export declare namespace validations {
    function string(key?: string): StringValidator;
}
