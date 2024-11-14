/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { ReactiveElement } from '@lit/reactive-element';
import { Context } from '../create-context.js';
/**
 * A property decorator that adds a ContextConsumer controller to the component
 * which will try and retrieve a value for the property via the Context API.
 *
 * @param context A Context identifier value created via `createContext`
 * @param subscribe An optional boolean which when true allows the value to be updated
 *   multiple times.
 *
 * @example
 *
 * ```ts
 * import {consume} from '@lit/context';
 * import {loggerContext, Logger} from 'community-protocols/logger';
 *
 * class MyElement {
 *   @consume({context: loggerContext})
 *   logger?: Logger;
 *
 *   doThing() {
 *     this.logger!.log('thing was done');
 *   }
 * }
 * ```
 * @category Decorator
 */
export declare function consume<ValueType>({ context, subscribe, }: {
    context: Context<unknown, ValueType>;
    subscribe?: boolean;
}): ConsumeDecorator<ValueType>;
/**
 * Generates a public interface type that removes private and protected fields.
 * This allows accepting otherwise incompatible versions of the type (e.g. from
 * multiple copies of the same package in `node_modules`).
 */
type Interface<T> = {
    [K in keyof T]: T[K];
};
type ConsumeDecorator<ValueType> = {
    <K extends PropertyKey, Proto extends Interface<Omit<ReactiveElement, 'renderRoot'>>>(protoOrDescriptor: Proto, name?: K): FieldMustMatchProvidedType<Proto, K, ValueType>;
    <C extends Interface<Omit<ReactiveElement, 'renderRoot'>>, V extends ValueType>(value: ClassAccessorDecoratorTarget<C, V>, context: ClassAccessorDecoratorContext<C, V>): void;
};
type DecoratorReturn = void | any;
type FieldMustMatchProvidedType<Obj, Key extends PropertyKey, ProvidedType> = Obj extends Record<Key, infer ConsumingType> ? [
    ProvidedType
] extends [ConsumingType] ? DecoratorReturn : {
    message: 'provided type not assignable to consuming field';
    provided: ProvidedType;
    consuming: ConsumingType;
} : Obj extends Partial<Record<Key, infer ConsumingType>> ? [
    ProvidedType
] extends [ConsumingType | undefined] ? DecoratorReturn : {
    message: 'provided type not assignable to consuming field';
    provided: ProvidedType;
    consuming: ConsumingType | undefined;
} : DecoratorReturn;
export {};
//# sourceMappingURL=consume.d.ts.map