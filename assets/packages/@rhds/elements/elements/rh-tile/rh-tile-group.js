var _RhTileGroup_instances, _RhTileGroup_tiles, _RhTileGroup_tabindex, _RhTileGroup_internals, _RhTileGroup_selectTile, _RhTileGroup_onSelect, _RhTileGroup_onSlotchange;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { RhTile, TileSelectEvent } from './rh-tile.js';
import { css } from "lit";
const styles = css `:host{display:grid;grid-template-columns:repeat(auto-fit,320px);gap:var(--rh-space-2xl,32px)}:host([disabled]){pointer-events:none}`;
/**
 * A group of `<rh-tile>` elements which handles radio selection.
 * @slot - Put one or more `rh-tile` elements in this slot
 */
export class RhTileGroup extends LitElement {
    /**
     * All slotted tiles
     */
    get tiles() {
        return __classPrivateFieldGet(this, _RhTileGroup_tiles, "f");
    }
    /**
     * All selected tiles
     */
    get selected() {
        const selected = __classPrivateFieldGet(this, _RhTileGroup_tiles, "f")?.filter(tile => tile.checked);
        const [first] = selected;
        return this.radio ? first : selected;
    }
    constructor() {
        super();
        _RhTileGroup_instances.add(this);
        _RhTileGroup_tiles.set(this, []);
        _RhTileGroup_tabindex.set(this, RovingTabindexController.of(this, {
            getItems: () => __classPrivateFieldGet(this, _RhTileGroup_tiles, "f"),
        }));
        _RhTileGroup_internals.set(this, InternalsController.of(this));
        this.addEventListener('slotchange', __classPrivateFieldGet(this, _RhTileGroup_instances, "m", _RhTileGroup_onSlotchange));
        this.addEventListener('select', __classPrivateFieldGet(this, _RhTileGroup_instances, "m", _RhTileGroup_onSelect));
        /**
         * Whether tile group interaction is disabled
         */
        this.disabled = false;
        /**
         * If tile is checkable, whether only one tile can be checked
         */
        this.radio = false;
    }
    firstUpdated() {
        this.updateItems();
    }
    willUpdate(changed) {
        __classPrivateFieldGet(this, _RhTileGroup_internals, "f").ariaDisabled = String(!!this.disabled);
        __classPrivateFieldGet(this, _RhTileGroup_internals, "f").role = this.radio ? 'radiogroup' : null;
        let selected;
        for (const tile of __classPrivateFieldGet(this, _RhTileGroup_tiles, "f")) {
            if (changed.has('radio')) {
                // @ts-expect-error: internal use of private prop. replace with context. see rh-tile.ts
                tile.radioGroup = this.radio;
                if (this.radio && !selected && tile.checked) {
                    selected = tile;
                }
            }
            if (changed.has('disabled')) {
                // @ts-expect-error: internal use of private prop. replace with context. see rh-tile.ts
                tile.disabledGroup = this.disabled;
            }
        }
        if (changed.has('radio')) {
            this.selectItem(selected);
        }
    }
    render() {
        const { on = '', radio } = this;
        return html `
      <slot class="${classMap({ [on]: !!on, radio })}"></slot>
    `;
    }
    /** Sets focus on active tile */
    focus() {
        __classPrivateFieldGet(this, _RhTileGroup_tabindex, "f").items[__classPrivateFieldGet(this, _RhTileGroup_tabindex, "f").atFocusedItemIndex]?.focus();
    }
    /**
     * Programatically select a tile
     * @param tile tile to select
     */
    selectItem(tile) {
        if (tile) {
            __classPrivateFieldGet(this, _RhTileGroup_instances, "m", _RhTileGroup_selectTile).call(this, tile);
        }
    }
    /**
     * Programatically toggle a tile
     * @param tile tile to toggle
     */
    toggleItem(tile) {
        if (tile?.checked) {
            tile.checked = false;
        }
        else {
            this.selectItem(tile);
        }
    }
    /**
     * Updates slotted tiles to set properties and keyboard navigation
     */
    updateItems() {
        __classPrivateFieldSet(this, _RhTileGroup_tiles, [...this.querySelectorAll('rh-tile')], "f");
        __classPrivateFieldGet(this, _RhTileGroup_tiles, "f").forEach(tile => {
            tile.checkable = true;
            // @ts-expect-error: internal use of private prop. replace with context. see rh-tile.ts
            tile.radioGroup = this.radio;
            // @ts-expect-error: internal use of private prop. replace with context. see rh-tile.ts
            tile.disabledGroup = this.disabled;
            tile.id || (tile.id = getRandomId('rh-tile'));
        });
    }
}
_RhTileGroup_tiles = new WeakMap(), _RhTileGroup_tabindex = new WeakMap(), _RhTileGroup_internals = new WeakMap(), _RhTileGroup_instances = new WeakSet(), _RhTileGroup_selectTile = function _RhTileGroup_selectTile(tileToSelect, force) {
    if (this.radio) {
        for (const tile of __classPrivateFieldGet(this, _RhTileGroup_tiles, "f")) {
            tile.checked = tile === tileToSelect;
        }
    }
    else {
        tileToSelect.checked = force ?? !tileToSelect.checked;
    }
}, _RhTileGroup_onSelect = function _RhTileGroup_onSelect(event) {
    if (event instanceof TileSelectEvent) {
        if (this.disabled) {
            event.preventDefault();
            return false;
        }
        else {
            __classPrivateFieldGet(this, _RhTileGroup_instances, "m", _RhTileGroup_selectTile).call(this, event.target, event.force);
        }
    }
}, _RhTileGroup_onSlotchange = function _RhTileGroup_onSlotchange() {
    this.updateItems();
};
RhTileGroup.properties = {
    disabled: { type: Boolean, reflect: true },
    radio: { type: Boolean, reflect: true },
    colorPalette: { reflect: true, attribute: 'color-palette' }
};
RhTileGroup.styles = [styles];
__decorate([
    colorContextConsumer()
], RhTileGroup.prototype, "on", void 0);
customElements.define("rh-tile-group", RhTileGroup);
//# sourceMappingURL=rh-tile-group.js.map