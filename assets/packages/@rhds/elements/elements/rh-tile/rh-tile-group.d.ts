import { LitElement, type PropertyValues } from 'lit';
import { type ColorPalette } from '../../lib/context/color/provider.js';
import { RhTile } from './rh-tile.js';
/**
 * A group of `<rh-tile>` elements which handles radio selection.
 * @slot - tiles
 */
export declare class RhTileGroup extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Whether tile group interaction is disabled
     */
    disabled: boolean;
    /**
     * If tile is checkable, whether only one tile can be checked
     */
    radio: boolean;
    /**
     * Sets color palette, which affects the element's styles as well as descendants' color theme.
     * Overrides parent color context.
     * Your theme will influence these colors so check there first if you are seeing inconsistencies.
     * See [CSS Custom Properties](#css-custom-properties) for default values
     *
     * Tile group always resets its context to `base`, unless explicitly provided with a `color-palette`.
     */
    colorPalette?: ColorPalette;
    /**
     * Sets color theme based on parent context
     */
    private on?;
    /**
     * All slotted tiles
     */
    get tiles(): RhTile[];
    /**
     * All selected tiles
     */
    get selected(): RhTile | RhTile[];
    constructor();
    firstUpdated(): void;
    willUpdate(changed: PropertyValues<this>): void;
    render(): import("lit").TemplateResult<1>;
    /** Sets focus on active tile */
    focus(): void;
    /**
     * Programatically select a tile
     * @param tile tile to select
     */
    selectItem(tile?: RhTile): void;
    /**
     * Programatically toggle a tile
     * @param tile tile to toggle
     */
    toggleItem(tile?: RhTile): void;
    /**
     * Updates slotted tiles to set properties and keyboard navigation
     */
    updateItems(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tile-group': RhTileGroup;
    }
}