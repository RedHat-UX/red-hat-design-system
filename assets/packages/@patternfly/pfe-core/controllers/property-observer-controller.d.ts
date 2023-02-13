import type { ReactiveController, ReactiveElement } from 'lit';
export declare const observedController: unique symbol;
export type ChangeCallback<T = ReactiveElement> = (this: T, old?: T[keyof T], newV?: T[keyof T]) => void;
export type ChangeCallbackName = `_${string}Changed`;
export type PropertyObserverHost<T> = T & Record<ChangeCallbackName, ChangeCallback<T>> & {
    [observedController]: PropertyObserverController;
};
/** This controller holds a cache of observed property values which were set before the element updated */
export declare class PropertyObserverController implements ReactiveController {
    private host;
    private static hosts;
    private values;
    private delete;
    constructor(host: ReactiveElement);
    /** Set any cached valued accumulated between constructor and connectedCallback */
    hostUpdate(): void;
    /** Once the element has updated, we no longer need this controller, so we remove it */
    hostUpdated(): void;
    cache(key: string, methodName: string, ...vals: [unknown, unknown]): void;
}
