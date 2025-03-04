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
 * Choosing a palette sets both color properties and, if the component is a context provider,
 * implies a color theme for descendents.
 *
 * `ColorPalette` is associated with the `color-palette` attribute
 */
export type ColorPalette = typeof Palettes[number];

interface ColorPaletteElement extends ReactiveElement {
  colorPalette?: ColorPalette | undefined;
}

type Constructor<T> = new(...args: any[]) => T;

/**
 * Makes this element a color context provider which updates its consumers when the decorated field changes
 * @param supportedPalettes list of supported color palettes
 */
export function colorContextProvider<T extends ColorPaletteElement>(
  ...supportedPalettes: ColorPalette[]
) {
  if (!supportedPalettes.length) {
    supportedPalettes = [...Palettes];
  }
  return function(klass: Constructor<T> & typeof ReactiveElement) {
    const { attribute, reflect } = klass.properties.colorPalette ?? {};
    if (attribute !== 'color-palette' || !reflect) {
      throw new Error('@colorContextProvider requires the `color-palette` attribute.');
    }
    klass.styles = [
      ...Array.isArray(klass.styles) ? klass.styles : klass.styles ? [klass.styles] : [],
      styles,
    ];
  };
}
