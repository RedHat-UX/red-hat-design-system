import type { ReactiveElement } from 'lit';

import { ContextConsumer } from '@lit/context';
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
export class ColorContextConsumer<
  T extends ReactiveElement
> extends ContextConsumer<typeof context, T> {
  constructor(
    host: T,
    key: keyof T
  ) {
    new StyleController(host, styles);
    super(host, { callback: v => this.update(v, key), context, subscribe: true });
  }

  update(value: ColorTheme | null, key: keyof T) {
    this.host[key as 'ariaLabel'] = value;
  }
}

/**
 * Makes this element a color context consumer
 * @param options options
 */
export function colorContextConsumer<T extends ReactiveElement>() {
  return function(proto: T, key: string | keyof T) {
    (proto.constructor as typeof ReactiveElement).addInitializer((instance: ReactiveElement) => {
      new ColorContextConsumer(instance as T, key as keyof T);
    });
  };
}
