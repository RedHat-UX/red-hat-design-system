import type { Constructor } from '@lit/reactive-element/decorators/base.js';
import { isServer, ReactiveElement } from 'lit';

let initialized: boolean;

async function load() {
  const { default: { cssText } } = await import('@rhds/tokens/css/default-theme.css.js');
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(cssText);
  document.adoptedStyleSheets = [...(document.adoptedStyleSheets ?? []), sheet];
  initialized = true;
}

let p: Promise<void>;

/**
 * Ensures this element is [themable](https://ux.redhat.com/theming/).
 *
 * @param klass element constructor
 * @see https://ux.redhat.com/theming/color-palettes/
 */
export function themable<T extends Constructor<ReactiveElement>>(klass: T) {
  if (isServer) {
    return klass;
  }
  initialized
    ??= (document.documentElement.computedStyleMap?.().has('--rh-color-accent-base')
    ?? !!getComputedStyle(document.documentElement).getPropertyValue('--rh-color-accent-base'));
  if (!initialized) {
    p ??= load();
    return class ThemableElement extends klass {
      protected override async scheduleUpdate() {
        if (!initialized) {
          await p;
        }
        super.scheduleUpdate();
      }
    };
  }
  return klass;
}
