/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { ReactiveElement } from '@lit/reactive-element';
import { Context } from '../create-context.js';
/**
 * A property decorator that adds a ContextProvider controller to the component
 * making it respond to any `context-request` events from its children consumer.
 *
 * @param context A Context identifier value created via `createContext`
 *
 * @example
 *
 * ```ts
 * import {provide} from '@lit/context';
 * import {Logger} from 'my-logging-library';
 * import {loggerContext} from './logger-context.js';
 *
 * class MyElement {
 *   @provide({context: loggerContext})
 *   logger = new Logger();
 * }
 * ```
 * @category Decorator
 */
export declare function provide<ValueType>({ context: context, }: {
    context: Context<unknown, ValueType>;
}): ProvideDecorator<ValueType>;
/**
 * Generates a public interface type that removes private and protected fields.
 * This allows accepting otherwise compatible versions of the type (e.g. from
 * multiple copies of the same package in `node_modules`).
 */
type Interface<T> = {
    [K in keyof T]: T[K];
};
type ProvideDecorator<ContextType> = {
    <K extends PropertyKey, Proto extends Interface<Omit<ReactiveElement, 'renderRoot'>>>(protoOrDescriptor: Proto, name?: K): FieldMustMatchContextType<Proto, K, ContextType>;
    <C extends Interface<Omit<ReactiveElement, 'renderRoot'>>, V extends ContextType>(value: ClassAccessorDecoratorTarget<C, V>, context: ClassAccessorDecoratorContext<C, V>): void;
};
type DecoratorReturn = void | any;
type FieldMustMatchContextType<Obj, Key extends PropertyKey, ContextType> = Obj extends Record<Key, infer ProvidingType> ? [
    ProvidingType
] extends [ContextType] ? DecoratorReturn : {
    message: 'providing field not assignable to context';
    context: ContextType;
    provided: ProvidingType;
} : Obj extends Partial<Record<Key, infer Providing>> ? [
    Providing | undefined
] extends [ContextType] ? DecoratorReturn : {
    message: 'providing field not assignable to context';
    context: ContextType;
    consuming: Providing | undefined;
} : DecoratorReturn;
export {};
//# sourceMappingURL=provide.d.ts.map