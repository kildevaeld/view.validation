export interface IValidator {
    readonly message: string;
    validate(value: any): boolean;
}
export interface IValidatorCollection {
    validate(value: any): void;
    key(): string | undefined;
    label(): string | undefined;
}
export declare type ValidatorMap = {
    [key: string]: IValidatorCollection;
};
