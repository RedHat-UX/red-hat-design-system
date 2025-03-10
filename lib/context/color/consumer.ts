import { isServer, type ReactiveElement } from 'lit';

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


let initialized = false;
/**
 * Ensures this element acts as a [background type](https://ux.redhat.com/theming/color-palettes/) consumer.
 *
 * @param klass element constructor
 * @see https://ux.redhat.com/theming/color-palettes/
 */
export function colorSchemeConsumer(klass: typeof ReactiveElement) {
  if (!isServer && !initialized) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(styles.cssText);
    document.adoptedStyleSheets = [...(document.adoptedStyleSheets ?? []), sheet];
    initialized = true;
  } else {
    klass.styles = [
      ...Array.isArray(klass.styles) ? klass.styles : klass.styles ? [klass.styles] : [],
      styles,
    ];
  }
}
