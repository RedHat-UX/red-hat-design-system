/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { ContextCallback } from './context-request-event.js';
/**
 * A disposer function
 */
type Disposer = () => void;
interface CallbackInfo {
    disposer: Disposer;
    consumerHost: Element;
}
/**
 * A simple class which stores a value, and triggers registered callbacks when
 * the value is changed via its setter.
 *
 * An implementor might use other observable patterns such as MobX or Redux to
 * get behavior like this. But this is a pretty minimal approach that will
 * likely work for a number of use cases.
 */
export declare class ValueNotifier<T> {
    protected readonly subscriptions: Map<ContextCallback<T>, CallbackInfo>;
    private _value;
    get value(): T;
    set value(v: T);
    setValue(v: T, force?: boolean): void;
    constructor(defaultValue?: T);
    updateObservers: () => void;
    addCallback(callback: ContextCallback<T>, consumerHost: Element, subscribe?: boolean): void;
    clearCallbacks(): void;
}
export {};
//# sourceMappingURL=value-notifier.d.ts.map