import { type ReactiveController, type ReactiveElement } from 'lit';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import styles from '@rhds/tokens/css/color-palette.css.js';
import type { Constructor } from '@lit/reactive-element/decorators/base.js';

type ColorPaletteConstructor = Constructor<ColorPaletteElement> & typeof ReactiveElement;

type ColorPaletteDecorator =
  (target: ColorPaletteConstructor) => void;

interface ColorPaletteElement extends ReactiveElement {
  colorPalette?: ColorPalette | undefined;
}

/**
 * A `ColorPalette` is a collection of specific color values
 * Choosing a palette sets both color properties and, if the component is a
 * color palette provider, implies a background type ('dark' or 'light') for
 * descendents.
 *
 * `ColorPalette` must be associated with the `color-palette` attribute
 */
export type ColorPalette =
  // While we could do this with `typeof Palettes[keyof Palettes]`,
  // duplicating this union lets `cem` statically analyze the type
  | 'light'
  | 'lighter'
  | 'lightest'
  | 'dark'
  | 'darker'
  | 'darkest';

const Palettes = Object.freeze([
  'light',
  'lighter',
  'lightest',
  'dark',
  'darker',
  'darkest',
] as const);

class PaletteController implements ReactiveController {
  #host: ColorPaletteElement;
  #palettes: Set<ColorPalette>;
  #last?: ColorPalette;
  #logger: Logger;
  constructor(host: ColorPaletteElement, palettes: ColorPalette[]) {
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


function impl(
  klass: Constructor<ColorPaletteElement> & typeof ReactiveElement,
  supportedPalettes = Palettes,
) {
  const { attribute, reflect } = klass.properties?.colorPalette
      ?? klass.getPropertyOptions('colorPalette')
      ?? {};
  if (attribute !== 'color-palette' || !reflect) {
    throw new Error('@colorPalettes requires the `color-palette` attribute.');
  }
  klass.addInitializer(instance => new PaletteController(instance, [...supportedPalettes]));
  const elementStyles =
      Array.isArray(klass.styles) ? klass.styles
    : klass.styles ? [klass.styles]
    : [];
  klass.styles = [
    styles,
    ...elementStyles,
  ];
}

/**
 * Makes this element a [color scheme provider](https://ux.redhat.com/themeing/color-palettes)
 * Limits the element to the specified color palettes, if provided.
 *
 * @param supportedPalettes list of supported color palettes
 * @see https://ux.redhat.com/themeing/color-palettes
 */
export function colorPalettes(...supportedPalettes: ColorPalette[]): ClassDecorator;
export function colorPalettes(klass: ColorPaletteConstructor): void;
export function colorPalettes(
  ...args: ColorPalette[] | [klass: ColorPaletteConstructor]
): ColorPaletteDecorator | void {
  if (args.every(x => typeof x === 'string')) {
    return function(klass: Constructor<ColorPaletteElement> & typeof ReactiveElement) {
      return impl(klass, args as unknown as typeof Palettes);
    };
  } else {
    return impl(...args);
  }
}
