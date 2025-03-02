import type { ReactiveElement } from 'lit';

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
 * Makes this element a color context consumer
 * @param klass element constructor. call before registering
 */
export function colorContextConsumer(klass: typeof ReactiveElement) {
  klass.styles = [
    ...Array.isArray(klass.styles) ? klass.styles : klass.styles ? [klass.styles] : [],
    styles,
  ];
}
