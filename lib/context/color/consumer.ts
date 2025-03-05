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
);

/**
 * Makes this element a [background type](https://ux.redhat.com/theming/color-palettes/) consumer.
 *
 * @param klass element constructor
 * @see https://ux.redhat.com/theming/color-palettes/
 */
export function colorSchemeConsumer(klass: typeof ReactiveElement) {
  klass.styles = [
    ...Array.isArray(klass.styles) ? klass.styles : klass.styles ? [klass.styles] : [],
    styles,
  ];
}
