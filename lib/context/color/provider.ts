import { type ReactiveElement } from 'lit';

import styles from '@rhds/tokens/css/color-context-provider.css.js';

const Palettes = Object.freeze([
  'light',
  'lighter',
  'lightest',
  'dark',
  'darker',
  'darkest',
] as const);

/**
 * A `ColorPalette` is a collection of specific color values
 * Choosing a palette sets both color properties and, if the component is a
 * color palette provider, implies a background type ('dark' or 'light') for
 * descendents.
 *
 * `ColorPalette` must be associated with the `color-palette` attribute
 */
export type ColorPalette = typeof Palettes[number];

interface ColorPaletteElement extends ReactiveElement {
  colorPalette?: ColorPalette | undefined;
}

type Constructor<T> = new(...args: any[]) => T;

/**
 * Makes this element a [color scheme provider](https://ux.redhat.com/themeing/color-palettes)
 *
 * @param supportedPalettes list of supported color palettes
 * @see https://ux.redhat.com/themeing/color-palettes
 */
export function colorSchemeProvider(...supportedPalettes: ColorPalette[]) {
  if (!supportedPalettes.length) {
    supportedPalettes = [...Palettes];
  }
  return function(klass: Constructor<ColorPaletteElement> & typeof ReactiveElement) {
    const { attribute, reflect } = klass.properties?.colorPalette
        ?? klass.getPropertyOptions('colorPalette')
        ?? {};
    if (attribute !== 'color-palette' || !reflect) {
      throw new Error('@colorSchemeProvider requires the `color-palette` attribute.');
    }
    klass.styles = [
      ...Array.isArray(klass.styles) ? klass.styles : klass.styles ? [klass.styles] : [],
      styles,
    ];
  };
}
