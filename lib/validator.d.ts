import { IValidator } from './types';
export declare abstract class AbstractValidatorCollection<T> {
    private _label?;
    private _key?;
    private _required?;
    private _validators;
    constructor(key?: string);
    label(label: string): this;
    label(): string | undefined;
    key(key: string): this;
    key(): string | undefined;
    required(msg?: string): this;
    match(selector: string, msg?: string): this;
    readonly message: string;
    validate(value: T | undefined): void;
    protected getMessage(): string;
    protected _addValidator(v: IValidator): this;
}
export declare class StringValidator extends AbstractValidatorCollection<string> {
    email(msg?: string): this;
    reqexp(req: RegExp, msg?: string): this;
    min(len: number, msg?: string): this;
    max(len: number, msg?: string): this;
}
