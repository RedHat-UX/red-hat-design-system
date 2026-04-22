import { LitElement, type PropertyValues } from 'lit';
import type { IconNameFor, IconSetName } from '@rhds/icons';
import '@rhds/elements/rh-icon/rh-icon.js';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
/**
 * Fired when a checkable tile is selected or deselected.
 * The `force` property, when true, indicates the tile must be selected
 * (used in radio group mode). When absent, the tile toggles its state.
 */
export declare class TileSelectEvent extends Event {
    /** When true, the tile must be selected rather than toggled */
    force?: boolean | undefined;
    target: RhTile;
    constructor(
    /** When true, the tile must be selected rather than toggled */
    force?: boolean | undefined);
}
/**
 * A tile provides a clickable surface for presenting content with
 * optional images, icons, and links. Checkable tiles expose ARIA
 * `role="checkbox"` or `role="radio"` to screen readers. Users
 * should set `accessible-label` when tiles lack text content.
 * Keyboard users activate checkable tiles with Enter or Space.
 *
 * @summary Clickable surface for content like images, icons, and links
 *
 * @alias tile
 *
 * @fires {TileSelectEvent} select - Fired when a checkable tile is
 *        clicked. The event's `force` property is `true` when the
 *        tile is in a radio group, indicating it must be selected.
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
