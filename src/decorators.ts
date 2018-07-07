import { ValidatorMap } from './types';
import { View, BaseViewOptions } from '@viewjs/view';
import { StringValidator } from './validator';
import { Constructor } from '@viewjs/utils'



export function validations(v: ValidatorMap | (() => ValidatorMap)) {
    return function <T extends Constructor<View<E, U>>, E extends HTMLElement, U extends BaseViewOptions<E>>(target: T) {
        target.prototype._validations = v;
    }
}

export namespace validations {

    export function string(key?: string) {
        return new StringValidator(key);
    }

}