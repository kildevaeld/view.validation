import { ValidatorMap } from './types';
import { BaseView, Constructor, BaseViewOptions } from '@viewjs/view';
import { StringValidator } from './validator'


export function validations(v: ValidatorMap | (() => ValidatorMap)) {
    return function <T extends Constructor<BaseView<E, U>>, E extends HTMLElement, U extends BaseViewOptions<E>>(target: T) {
        target.prototype._validations = v;
    }
}

export namespace validations {

    export function string(key?: string) {
        return new StringValidator(key);
    }

}