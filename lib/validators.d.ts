import { IValidator } from './types';
export declare abstract class AbstractValidator {
    message: string;
    constructor(msg?: string);
}
export declare class RequiredValidator extends AbstractValidator implements IValidator {
    validate(value: any): boolean;
    constructor(msg?: string);
}
export declare class RegexValidator extends AbstractValidator implements IValidator {
    readonly regex: RegExp;
    constructor(msg?: string, regex?: RegExp);
    validate(value: any): boolean;
}
export declare class EmailValidator extends RegexValidator {
    regex: RegExp;
    constructor(msg?: string);
}
export declare class MinLengthValidator extends AbstractValidator implements IValidator {
    len: number;
    constructor(n: number, msg?: string);
    validate(value: any): boolean;
}
export declare class MaxLengthValidator extends AbstractValidator implements IValidator {
    len: number;
    constructor(n: number, msg?: string);
    validate(value: any): boolean;
}
export declare class MatchValidator extends AbstractValidator implements IValidator {
    private selector;
    constructor(selector: string, msg?: string);
    validate(value: any): boolean;
}
