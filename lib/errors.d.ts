import { IValidator } from './types';
export declare class ValidationError extends Error {
    validator?: IValidator | undefined;
    message: string;
    constructor(message: string, validator?: IValidator | undefined);
}
export declare class ValidationErrors extends Error {
    errors: ValidationError[];
    constructor(errors: ValidationError[], message?: string);
}
export declare function createError(v: IValidator | {
    message: string;
}, label?: string | {
    [key: string]: string;
}): ValidationError;
