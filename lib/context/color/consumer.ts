import { isServer } from 'lit';

import styles from '@rhds/tokens/css/color-scheme.css.js';

let initialized: boolean;

/**
 * Ensures this element respects themable [color schemes](https://ux.redhat.com/theming/color-palettes/#color-schemes).
 *
 * @param klass element constructor
 * @see https://ux.redhat.com/theming/color-palettes/
 */
export function colorSchemeConsumer() {
  if (isServer) {
    return;
  }
  initialized
    ??= (document.documentElement.computedStyleMap?.().has('--rh-color-accent-base')
    ?? !!getComputedStyle(document.documentElement).getPropertyValue('--rh-color-accent-base'));
  if (!initialized) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(styles.cssText);
    document.adoptedStyleSheets = [...(document.adoptedStyleSheets ?? []), sheet];
  }
}
