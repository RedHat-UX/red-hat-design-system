import type { ReactiveElement } from 'lit';

import { ColorContextProvider } from './provider.js';
import { ColorContextConsumer } from './consumer.js';

export interface ColorContextOptions<T extends ReactiveElement> {
  prefix?: string;
  propertyName?: keyof T;
}

export interface ColorContextProviderOptions<T extends ReactiveElement> extends ColorContextOptions<T> {
  /** Attribute to set context. Providers only */
  attribute?: string;
}

export function colorContextProvider<T extends ReactiveElement>(options?: ColorContextOptions<T>) {
  return function(proto: T, _propertyName: string) {
    const propertyName = _propertyName as keyof T;
    const klass = (proto.constructor as typeof ReactiveElement);
    const propOpts = klass.getPropertyOptions(_propertyName);
    const attribute = typeof propOpts.attribute === 'boolean' ? undefined : propOpts.attribute;
    klass.addInitializer(instance => {
      const controller = new ColorContextProvider(instance as T, { propertyName, attribute, ...options });
      // @ts-expect-error: this assignment is strictly for debugging purposes
      instance.__DEBUG_colorContextProvider = controller;
    });
  };
}

export function colorContextConsumer<T extends ReactiveElement>(options?: ColorContextOptions<T>) {
  return function(proto: T, _propertyName: string|keyof T) {
    const propertyName = _propertyName as keyof T;
    (proto.constructor as typeof ReactiveElement).addInitializer(instance => {
      const controller = new ColorContextConsumer(instance as T, { propertyName, ...options });
      // @ts-expect-error: this assignment is strictly for debugging purposes
      instance.__DEBUG_colorContextConsumer = controller;
    });
  };
}
