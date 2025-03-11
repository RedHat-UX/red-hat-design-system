import { isServer, type ReactiveElement } from 'lit';

import styles from '@rhds/tokens/css/color-scheme.css.js';

let initialized = false;

/**
 * Ensures this element respects themable [color schemes](https://ux.redhat.com/theming/color-palettes/#color-schemes).
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
    const elementStyles =
        Array.isArray(klass.styles) ? klass.styles
      : klass.styles ? [klass.styles]
      : [];
    klass.styles = [
      styles,
      ...elementStyles,
    ];
  }
}
