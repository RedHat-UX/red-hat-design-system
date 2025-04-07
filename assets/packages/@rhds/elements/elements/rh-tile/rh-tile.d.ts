import { LitElement, type PropertyValues } from 'lit';
import type { IconNameFor, IconSetName } from '@rhds/icons';
import '@rhds/elements/rh-icon/rh-icon.js';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
export declare class TileSelectEvent extends Event {
    force?: boolean | undefined;
    target: RhTile;
    constructor(force?: boolean | undefined);
}
/**
 * A tile is a flexible layout with a clickable and contained surface.
 * @summary Creates a clickable, contained surface
 * @fires {TileSelectEvent} select - when tile is clicked
 * @slot image - optional image on top of tile
 * @slot icon - optional icon
 * @slot title - A title provides secondary descriptive context. Selectable and compact tiles do not have title slots
 * @slot headline - In a link tile, the heading should indicate what clicking on the tile will do. In a selectable tile, the heading labels the radio button or checkbox.
 * @slot - The body text expands on heading content and gives the user more information.
 * @slot footer - Footer text should be brief and be used for supplementary information only.
 * @cssprop [--rh-tile-text-color=var(--rh-color-text-primary-on-light, #151515)] - Color of text.<br>Could cause accessibility issues; prefer to use `--rh-color-text-primary-on-light` and `--rh-color-text-primary-on-dark` for theming.
 * @cssprop [--rh-tile-text-color-secondary=var(--rh-color-text-secondary-on-light, #4d4d4d)] - Disabled text and icons.<br>Could cause accessibility issues; prefer to use `--rh-color-text-secondary-on-light` and `--rh-color-text-secondary-on-dark` for theming.
 * @cssprop [--rh-tile-interactive-color=var(--rh-color-border-interactive-on-light, #0066cc)] - Color of interactive elements.<br>Could cause accessibility issues; prefer to use `--rh-color-border-interactive-on-light` and `--rh-color-border-interactive-on-dark` for theming.
 * @cssprop [--rh-tile-link-color=var(--rh-tile-interactive-color)] - Color of tile link.
 * @cssprop [--rh-tile-link-texColorPaletteConstructort-decoration=none] - Tile link text decoration
 * @cssprop [--rh-tile-background-color=var(--rh-color-surface-lightest, #ffffff)] - Color tile surface.<br>Could cause accessibility issues; prefer to use `--rh-color-surface-lightest` and `--rh-color-surface-darkest` for theming.
 * @cssprop [--rh-tile-focus-background-color=var(--rh-color-surface-lighter, #f2f2f2)] - Color tile surface on focus/hover.<br>Could cause accessibility issues; prefer to use `--rh-color-surface-lighter` and `--rh-color-surface-darker` for theming.
 * @cssprop [--rh-tile-disabled-background-color=var(--rh-color-surface-light, #e0e0e0)] - Color tile surface when disabled.<br>Could cause accessibility issues; prefer to use `--rh-color-surface-light` and `--rh-color-surface-dark` for theming.
 * @cssprop [--rh-tile-border-color=var(--rh-color-border-subtle-on-light, #c7c7c7)] - Color of tile border.<br>Could cause accessibility issues; prefer to use `--rh-color-border-subtle-on-light` and `--rh-color-border-subtle-on-dark` for theming.
 */
export declare class RhTile extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly formAssociated = true;
    shadowRoot: ShadowRoot;
    /**
     * Whether image is full-width (i.e. bleeds into the padding)
     */
    bleed: boolean;
    /**
     * Whether headline link text is a desaturated color instead of blue;
     * `true` sets headline color to white on dark tiles or black on light tiles
     */
    desaturated: boolean;
    /**
     * Reduces tile padding for more compact spaces
     */
    compact: boolean;
    /**
     * The icon to display in the tile
     */
    icon?: IconNameFor<IconSetName>;
    /**
     * Icon set to display in the tile
     */
    iconSet: IconSetName;
    /**
     * When checkable, the accessible (visually hidden) label for the form control
     * If not set, the text content of the tile element will be used instead.
     * @example Setting an accessible label when there is no text content
     *          ```html
     *          <form>
     *            <rh-tile-group radio>
     *              <rh-tile name="radio" value="1">Tile 1</rh-tile>
     *              <rh-tile name="radio" value="2">Tile 2</rh-tile>
     *              <rh-tile name="radio"
     *                       value="3"
     *                       accessible-label="Tile 3">
     *                <img slot="image"
     *                     role="presentation"
     *                     src="tile-3.webp">
     *              </rh-tile>
     *            </rh-tile-group>
     *          </form>
     *          ```
     */
    accessibleLabel?: string;
    /** Form name */
    name?: string;
    /** Form value */
    value?: string;
    /**
     * When true, tile behaves like a checkbox unless it is part of an
     * `<rh-tile-group radio>`, in which case it behaves like a radio button
     */
    checkable: boolean;
    /**
     * If tile is checkable, whether it is currently checked
     */
    checked: boolean;
    /**
     * Whether tile interaction is disabled
     */
    disabled: boolean;
    /**
     * Sets color palette, which affects the element's styles as well as descendants' color theme.
     * Overrides parent color context.
     * Your theme will influence these colors so check there first if you are seeing inconsistencies.
     * See [CSS Custom Properties](#css-custom-properties) for default values
     *
     * Tile always resets its context to `base`, unless explicitly provided with a `color-palette`.
     */
    colorPalette?: ColorPalette;
    /** When set to "private", the icon representing the link changes from an arrow to a padlock */
    link?: 'private' | 'public' | 'external';
    private disabledGroup;
    private radioGroup;
    constructor();
    /**
     * Update the internal accessible representation of the element's state
     * @param changed - the reactive properties which changed this cycle, and their old values
     */
    willUpdate(changed: PropertyValues<this>): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    formDisabledCallback(): Promise<void>;
    formStateRestoreCallback(state: string, mode: string): Promise<void>;
    setCustomValidity(message: string): void;
    checkValidity(): boolean;
    reportValidity(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tile': RhTile;
    }
}
