import type { ComplexAttributeConverter } from 'lit';
export type RequireProps<T, Ps extends keyof T> = T & {
    [P in Ps]-?: T[P];
};
/**
 * A LitElement property converter which represents a list of numbers as a comma separated string
 * @see https://lit.dev/docs/components/properties/#conversion-converter
 */
export declare const NumberListConverter: ComplexAttributeConverter<number[] | null, unknown>;
/**
 * A LitElement property converter which represents a list of strings as a comma separated string
 * @see https://lit.dev/docs/components/properties/#conversion-converter
 */
export declare const StringListConverter: ComplexAttributeConverter<string[] | null, unknown>;
/**
 * A composed, bubbling event for UI interactions
 * e.g. when an accordion panel opens.
 */
export declare class ComposedEvent extends Event {
    constructor(type: string, init?: EventInit);
}
