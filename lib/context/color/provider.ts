import { type ReactiveElement } from 'lit';

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

/**
 * Makes this element a color context provider which updates its consumers when the decorated field changes
 * @param options options
 */
export function colorContextProvider<T extends ReactiveElement>() {
  return function(proto: T, _propertyName: string) {
    const klass = (proto.constructor as typeof ReactiveElement);
    const propOpts = klass.getPropertyOptions(_propertyName);
    const attribute = typeof propOpts.attribute === 'boolean' ? undefined : propOpts.attribute;
    if (attribute !== 'color-palette') {
      throw new Error('color context currently supports the `color-palette` attribute only.');
    }
    klass.styles = [
      ...Array.isArray(klass.styles) ? klass.styles : klass.styles ? [klass.styles] : [],
      styles,
    ];
  };
}
