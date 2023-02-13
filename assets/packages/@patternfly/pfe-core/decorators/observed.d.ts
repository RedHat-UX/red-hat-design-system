import type { ReactiveElement } from 'lit';
import type { ChangeCallback } from '../controllers/property-observer-controller.js';
type TypedFieldDecorator<T> = (proto: T, key: string | keyof T) => void;
/**
 * Calls a _fooChanged method on the instance when the value changes.
 * Works on any class field. When using on lit observed properties,
 * Make sure `@observed` is to the left (i.e. called after) the `@property`
 * or `@state` decorator.
 *
 * @example observing a lit property
 * ```ts
 * @observed @property() foo = 'bar';
 *
 * protected _fooChanged(oldValue?: string, newValue?: string) {}
 * ```
 *
 * @example using a custom callback
 * ```ts
 * @observed('_myCallback') size = 'lg';
 *
 * _myCallback(_, size) {...}
 * ```
 *
 * @example using an arrow function
 * ```ts
 * @observed((oldVal, newVal) => console.log(`Size changed from ${oldVal} to ${newVal}`))
 * ```
 */
export declare function observed<T extends ReactiveElement>(methodName: string): TypedFieldDecorator<T>;
export declare function observed<T extends ReactiveElement>(cb: ChangeCallback<T>): TypedFieldDecorator<T>;
export declare function observed<T extends ReactiveElement>(proto: T, key: string): void;
export declare function observeProperty<T extends ReactiveElement>(proto: T, key: string & keyof T, callbackOrMethod?: ChangeCallback<T>): void;
export {};
