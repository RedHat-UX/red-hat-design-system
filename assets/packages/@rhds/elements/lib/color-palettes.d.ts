import { type ReactiveElement } from 'lit';
import type { Constructor } from '@lit/reactive-element/decorators/base.js';
type ColorPaletteConstructor = Constructor<ColorPaletteElement> & typeof ReactiveElement;
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
export type ColorPalette = typeof Palettes[number];
declare const Palettes: readonly ["light", "lighter", "lightest", "dark", "darker", "darkest"];
/**
 * Makes this element a [color scheme provider](https://ux.redhat.com/themeing/color-palettes)
 * Limits the element to the specified color palettes, if provided.
 *
 * @param supportedPalettes list of supported color palettes
 * @see https://ux.redhat.com/themeing/color-palettes
 */
export declare function colorPalettes(...supportedPalettes: ColorPalette[]): ClassDecorator;
export declare function colorPalettes(klass: ColorPaletteConstructor): void;
export {};
