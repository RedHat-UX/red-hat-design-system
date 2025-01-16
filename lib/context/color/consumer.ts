import type { ReactiveElement } from 'lit';

import { ContextConsumer, type ContextType } from '@lit/context';
import { StyleController } from '@patternfly/pfe-core/controllers/style-controller.js';

import { context } from './context.js';

import styles from '@rhds/tokens/css/color-context-consumer.css.js';

/**
   * A Color theme is a context-specific restriction on the available color palettes
   *
   * `ColorTheme` is associated with the `on` attribute and the `--context` css property
   */
export type ColorTheme = (
  | 'dark'
  | 'light'
  | 'saturated'
);

/**
 * A color context consumer receives sets it's context property based on the context provided
 * by the closest color context provider.
 * The consumer has no direct access to the context, it must receive it from the provider.
 */
export class ColorContextConsumer extends ContextConsumer<typeof context, ReactiveElement> {
  constructor(
    host: ReactiveElement,
    callback: (value: ContextType<typeof context>, dispose?: () => void) => void,
  ) {
    super(host, {
      callback,
      context,
      subscribe: true,
    });
    new StyleController(host, styles);
  }
}

/**
 * Makes this element a color context consumer
 * @param options options
 */
export function colorContextConsumer<T extends ReactiveElement>() {
  return function(proto: T, key: string | keyof T) {
    (proto.constructor as typeof ReactiveElement).addInitializer((instance: ReactiveElement) => {
      new ColorContextConsumer(instance, (value: ColorTheme | null) => {
        console.log(`${instance.id ?? instance.localName} receiving`, { key, value });
        (instance as T)[key as keyof T] = value as T[keyof T];
      });
    });
  };
}
