import type { ColorTheme } from './consumer.js';

import { isServer, ReactiveElement } from 'lit';

import { ContextProvider } from '@lit/context';

import { StyleController } from '@patternfly/pfe-core/controllers/style-controller.js';

import { context } from './context.js';

import styles from '@rhds/tokens/css/color-context-provider.css.js';

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

const controllers = new WeakMap<ReactiveElement, ColorContextProvider>();
const values = new WeakMap<ReactiveElement, ColorTheme | null>();

/**
 * `ColorContextProvider` is responsible to derive a context value from CSS and provide it to its
 * descendents.
 */
class ColorContextProvider extends ContextProvider<typeof context> {
  constructor(protected host: ReactiveElement, initialValue?: ColorTheme | null) {
    super(host, { context, initialValue });
  }

  update(palette?: ColorPalette | null) {
    // @ts-expect-error: blahy
    palette ??= this.host.colorPalette ?? null as ColorPalette | null;
    const background = paletteBackgroundMap.get(palette!) ?? null;
    this.setValue(background, isServer);
    values.set(this.host, background);
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
  return (proto: ReactiveElement, key: 'colorPalette') => {
    if (key !== 'colorPalette') {
      throw new Error('color context only supports the `colorPalette` property.');
    }
    const klass = (proto.constructor as typeof ReactiveElement);
    const propOpts = klass.getPropertyOptions(key);
    const attribute = typeof propOpts.attribute === 'boolean' ? undefined : propOpts.attribute;
    if (attribute !== 'color-palette') {
      throw new Error('color context only supports the `color-palette` attribute.');
    }
    klass.addInitializer((instance: ReactiveElement) => {
      new StyleController(instance, styles);
      const controller = new ColorContextProvider(instance);
      controllers.set(instance, controller);
      controller.update();
    });
    const orig = Object.getOwnPropertyDescriptor(proto, key);
    Object.defineProperty(proto, key, {
      get(this: ReactiveElement) {
        return values.get(this);
      },
      set(this: ReactiveElement, palette: ColorPalette) {
        controllers.get(this)!.update(palette);
        orig?.set?.call(this, palette);
      },
      enumerable: true,
      configurable: true,
    });
  };
}
