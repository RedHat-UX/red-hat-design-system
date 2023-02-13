import type { ComplexAttributeConverter } from 'lit';
/** PatternFly Elements global config object */
export interface PfeConfig {
    /** Set to false to disable client-side page load performance tracking */
    trackPerformance?: boolean;
    /** Set to false to disable various debug logs */
    log?: boolean;
    /** Set to false to disable automatically removing `unresolved` attr from body */
    autoReveal?: boolean;
}
declare const noPref: unique symbol;
/**
 * A boolean value that indicates if the performance should be tracked.
 * For use in a JS file or script tag; can also be added in the constructor of a component during development.
 * @example trackPerformance(true);
 */
export declare function trackPerformance(preference?: boolean | typeof noPref): boolean | undefined;
/**
 * A LitElement property converter which represents a list of numbers as a comma separated string
 * @see https://lit.dev/docs/components/properties/#conversion-converter
 */
export declare const NumberListConverter: ComplexAttributeConverter<null | number[]>;
/**
 * A composed, bubbling event for UI interactions
 * e.g. when an accordion panel opens.
 */
export declare class ComposedEvent extends Event {
    constructor(type: string, init?: EventInit);
}
declare global {
    interface Window {
        /** Global configuration settings for PatternFly Elements */
        PfeConfig: PfeConfig;
    }
}
export {};
