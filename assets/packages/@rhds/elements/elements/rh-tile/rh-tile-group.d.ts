import { LitElement, type PropertyValues } from 'lit';
import { type ColorPalette } from '../../lib/context/color/provider.js';
import { RhTile } from './rh-tile.js';
/**
 * A group of `<rh-tile>` elements which handles radio selection.
 * @slot - tiles
 */
export declare class RhTileGroup extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    /**
     * whether tile group interaction is disabled
     */
    disabled: boolean;
    /**
     * if tile is checkable, whether only one tile can be checked
     */
    radio: boolean;
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
     * Tile group always resets its context to `base`, unless explicitly provided with a `color-palette`.
     */
    colorPalette?: ColorPalette;
    /**
     * all slotted tiles
     */
    get tiles(): RhTile[];
    /**
     * all selected tiles
     */
    get selected(): RhTile | RhTile[];
    protected firstUpdated(): void;
    protected updated(changed: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
    /** sets focus on active tile */
    focus(): void;
    /**
     * programatically select a tile
     * @param tile {RhTile | null | undefined} tile to select
     */
    selectItem(tile: RhTile | null | undefined): void;
    /**
     * programatically toggle a tile
     * @param tile {RhTile | null | undefined} tile to toggle
     */
    toggleItem(tile: RhTile | null | undefined): void;
    /**
     * updates slotted tiles to set properties and keyboard navigation
     */
    updateItems(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tile-group': RhTileGroup;
    }
}
