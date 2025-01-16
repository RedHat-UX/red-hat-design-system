import { ReactiveElement } from 'lit';

import { ContextProvider } from '@lit/context';

import { StyleController } from '@patternfly/pfe-core/controllers/style-controller.js';

import { context } from './context.js';

import styles from '@rhds/tokens/css/color-context-provider.css.js';
import type { ColorTheme } from './consumer.js';

/**
 * A `ColorPalette` is a collection of specific color values
 * Choosing a palette sets both color properties and, if the component is a context provider,
 * implies a color theme for descendents.
 *
 * `ColorPalette` is associated with the `color-palette` attribute
 */
export type ColorPalette = (
  | 'base'
  | 'accent'
  | 'complement'
  | 'light'
  | 'lighter'
  | 'lightest'
  | 'dark'
  | 'darker'
  | 'darkest'
);

/**
 * `ColorContextProvider` is responsible to derive a context value from CSS and provide it to its
 * descendents.
 */
class ColorContextProvider extends ContextProvider<typeof context> {
  constructor(protected host: ReactiveElement) {
    super(host, { context });
  }
}

const paletteBackgroundMap = new Map(Object.entries({
  darkest: 'dark' as const,
  darker: 'dark' as const,
  dark: 'dark' as const,
  light: 'light' as const,
  lighter: 'light' as const,
  lightest: 'light' as const,
}));


/**
 * Makes this element a color context provider which updates its consumers when the decorated field changes
 * @param options options
 */
export function colorContextProvider() {
  return (proto: ReactiveElement, key: string) => {
    const controllers = new WeakMap<ReactiveElement, ColorContextProvider>();
    const values = new Map<ReactiveElement, ColorTheme | null>();
    const klass = (proto.constructor as typeof ReactiveElement);
    const propOpts = klass.getPropertyOptions(key);
    const attribute = typeof propOpts.attribute === 'boolean' ? undefined : propOpts.attribute;
    if (attribute !== 'color-palette') {
      throw new Error('color context currently supports the `color-palette` attribute only.');
    }
    klass.addInitializer((instance: ReactiveElement) => {
      controllers.set(instance, new ColorContextProvider(instance));
      new StyleController(instance, styles);
    });
    Object.defineProperty(proto, key, {
      get(this: ReactiveElement) {
        return values.get(this);
      },
      set(this: ReactiveElement, value: ColorPalette) {
        const background = paletteBackgroundMap.get(value) ?? null;
        if (this.id === 'card-d' || this.outerHTML?.includes('card-d')) {
          console.log({ value, background });
        }
        controllers.get(this)!.setValue(background);
        values.set(this, background);
      },
      enumerable: true,
      configurable: true,
    });
  };
}
