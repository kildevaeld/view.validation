import { IValidator } from './types';
import { tim } from './tim';


export class ValidationError extends Error {
    message: string;
    constructor(message: string, public validator?: IValidator) {
        super(message);
        // TODO: use Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}

export class ValidationErrors extends Error {
    constructor(public errors: ValidationError[], message?: string) {
        super(message);
        // TODO: use Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(this, ValidationErrors.prototype);
    }
}

export function createError(v: IValidator | { message: string }, label?: string | { [key: string]: string }) {
    if (typeof label === 'string') {
        label = { label: label };
    }

    let msg = '';
    if (v.message)
        msg = tim(v.message, label);

    return new ValidationError(msg, v as any);
}