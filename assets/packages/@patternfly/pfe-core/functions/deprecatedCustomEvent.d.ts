/**
 * Construct a CustomEvent with the given name and detail.
 * The event bubbles and is composed.
 */
export declare function deprecatedCustomEvent<T>(name: string, detail?: T): CustomEvent<T>;
