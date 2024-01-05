import { LitElement, type PropertyValues } from 'lit';
import '@patternfly/elements/pf-icon/pf-icon.js';
import { type ColorPalette } from '../../lib/context/color/provider.js';
export declare class TileSelectEvent extends Event {
    force?: boolean | undefined;
    target: RhTile;
    constructor(force?: boolean | undefined);
}
/**
 * A tile is a flexible layout with a clickable and contained surface.
 *
 * @summary Creates a clickable, contained surface
 *
 * @fires {TileSelectEvent} select - when tile is clicked
 * @slot image - optional image on top of tile
 * @slot icon - optional icon
 * @slot title - optional title
 * @slot headline - optional headline / link title
 * @slot - optional body content
 * @slot footer - optional footer
 * @cssprop --rh-tile-text-color - color of text - {@default var(--rh-color-text-primary-on-light, #151515)}
 * @cssprop --rh-tile-text-color-secondary - disabled text and icons - {@default var(--rh-color-text-secondary-on-light, #4d4d4d)}
 * @cssprop --rh-tile-interactive-color - color of interactive elements - {@default var(--rh-color-border-interactive-on-light, #0066cc)}
 * @cssprop --rh-tile-link-color - color of tile link - {@default var(--rh-tile-interactive-color)}
 * @cssprop --rh-tile-link-text-decoration - tile link text decoration - {@default none}
 * @cssprop --rh-tile-background-color - color tile surface - {@default var(--rh-color-surface-lightest, #ffffff)}
 * @cssprop --rh-tile-focus-background-color - color tile surface on focus/hover - {@default var(--rh-color-surface-lighter, #f2f2f2)}
 * @cssprop --rh-tile-disabled-background-color - color tile surface when disabled - {@default var(--rh-color-surface-light, #e0e0e0)}
 * @cssprop --rh-tile-border-color - color of tile border - {@default var(--rh-color-border-subtle-on-light, #c7c7c7)}
 */
export declare class RhTile extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
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
     * Icon (must be a member of the fontawesome "far" icon set)
     */
    icon?: string;
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
    /**
     * Sets color theme based on parent context
     */
    private on?;
    private disabledGroup;
    private radioGroup;
    constructor();
    /** Update the internal accessible representation of the element's state */
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
