import { LitElement, type PropertyValues } from 'lit';
import { type ColorPalette } from '../../lib/context/color/provider.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import '@patternfly/elements/pf-icon/pf-icon.js';
export declare class TileSelectEvent extends ComposedEvent {
    target: RhTile;
    constructor();
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
    private static readonly _disabledIcon;
    /**
     * whether tile interaction is disabled
     */
    disabled: boolean;
    private disabledGroup;
    /** @private @internal */
    radioGroup: boolean;
    /**
     * whether image is full-width (i.e. bleeds into the padding)
     */
    bleed: boolean;
    /**
     * whether headline link text is a desaturated color instead of blue;
     * `true` sets headline color to white on dark tiles or black on light tiles
     */
    desaturated: boolean;
    /**
     * reduces tile padding for more compact spaces
     */
    compact: boolean;
    /**
     * namespace of icon
     */
    icon: boolean;
    /**
     * whether tile can be checked like a radio or checkbox:
     * `false` (default) - tile behaves like a link;
     * `true` - tile behaves like a checkbox unless it is part of an
     * `rh-tile-group` with a `radio` type and more than one tile
     */
    checkable: boolean;
    /**
     * if tile is checkable, whether it is currently checked
     */
    checked: boolean;
    /**
     * Sets color theme based on parent context
     */
    private on?;
    /**
     * Sets color palette, which affects the element's styles as well as descendants' color theme.
     * Overrides parent color context.
     * Your theme will influence these colors so check there first if you are seeing inconsistencies.
     * See [CSS Custom Properties](#css-custom-properties) for default values
     *
     * Tile always resets its context to `base`, unless explicitly provided with a `color-palette`.
     */
    colorPalette?: ColorPalette;
    connectedCallback(): void;
    protected updated(changed: PropertyValues<this>): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    disconnectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tile': RhTile;
    }
}
