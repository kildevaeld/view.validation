import { ValidatorMap } from './types';
import { BaseView, Constructor } from 'view';
import { StringValidator } from './validator'


export function validations(v: ValidatorMap | (() => ValidatorMap)) {
    return function <T extends Constructor<BaseView<U>>, U extends Element>(target: T) {
        target.prototype._validations = v;
    }
}

export namespace validations {

    export function string(key?: string) {
        return new StringValidator(key);
    }

}