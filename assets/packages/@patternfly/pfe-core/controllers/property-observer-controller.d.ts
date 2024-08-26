import type { ReactiveController, ReactiveElement } from 'lit';
export type ChangeCallback<T extends ReactiveElement, V = T[keyof T]> = (this: T, old?: V, newV?: V) => void;
export interface PropertyObserverOptions<T extends ReactiveElement> {
    propertyName: string & keyof T;
    callback: ChangeCallback<T>;
    waitFor?: 'connected' | 'updated' | 'firstUpdated';
}
export declare class PropertyObserverController<T extends ReactiveElement> implements ReactiveController {
    #private;
    private host;
    private options;
    private oldVal;
    constructor(host: T, options: PropertyObserverOptions<T>);
    hostConnected(): void;
    /** Set any cached valued accumulated between constructor and connectedCallback */
    hostUpdate(): Promise<void>;
}
