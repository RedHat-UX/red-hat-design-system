import { type ReactiveController, type ReactiveElement } from 'lit';

import styles from '@rhds/tokens/css/color-context-provider.css.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

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

class PaletteController implements ReactiveController {
  #host: ReactiveElement & { colorPalette?: ColorPalette };
  #palettes: Set<ColorPalette>;
  #last?: ColorPalette;
  #logger: Logger;
  constructor(host: ReactiveElement, palettes: ColorPalette[]) {
    this.#host = host;
    this.#palettes = new Set(palettes);
    this.#last = this.#host.colorPalette;
    this.#host.addController(this);
    this.#logger = new Logger(host);
  }

  hostUpdate(): void {
    const { colorPalette } = this.#host;
    if (colorPalette && !this.#palettes.has(colorPalette)) {
      this.#logger.warn(`color-palette="${colorPalette}" is not allowed`);
      this.#host.colorPalette = this.#last;
    } else {
      this.#last = colorPalette;
    }
  }
}

/**
 * Makes this element a [color scheme provider](https://ux.redhat.com/themeing/color-palettes)
 * Limits the element to the specified color palettes, if provided.
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
    klass.addInitializer(instance => new PaletteController(instance, supportedPalettes));
    const elementStyles =
        Array.isArray(klass.styles) ? klass.styles
      : klass.styles ? [klass.styles]
      : [];
    klass.styles = [
      ...elementStyles,
      styles,
    ];
  };
}
