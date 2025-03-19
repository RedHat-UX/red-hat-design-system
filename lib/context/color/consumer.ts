import { isServer } from 'lit';

let initialized: boolean;

async function load() {
  const { default: { cssText } } = await import('@rhds/tokens/css/color-scheme.css.js');
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(cssText);
  document.adoptedStyleSheets = [...(document.adoptedStyleSheets ?? []), sheet];
}

/**
 * Ensures this element is [themable](https://ux.redhat.com/theming/).
 *
 * @param _ element constructor
 * @see https://ux.redhat.com/theming/color-palettes/
 */
export function themable(_: unknown) {
  if (isServer) {
    return;
  }
  initialized
    ??= (document.documentElement.computedStyleMap?.().has('--rh-color-accent-base')
    ?? !!getComputedStyle(document.documentElement).getPropertyValue('--rh-color-accent-base'));
  if (!initialized) {
    load();
  }
}
