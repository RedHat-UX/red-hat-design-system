var _RhTileGroup_instances, _RhTileGroup_tiles, _RhTileGroup_initTiles, _RhTileGroup_tabindex, _RhTileGroup_internals, _RhTileGroup_setTiles, _RhTileGroup_onSelect, _RhTileGroup_onSlotchange;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { RhTile, TileSelectEvent } from './rh-tile.js';
import { css } from "lit";
const styles = css `:host([disabled]){pointer-events:none}`;
/**
 * A group of `<rh-tile>` elements which handles radio selection.
 * @slot - tiles
 */
let RhTileGroup = class RhTileGroup extends LitElement {
    constructor() {
        super(...arguments);
        _RhTileGroup_instances.add(this);
        /**
         * whether tile group interaction is disabled
         */
        this.disabled = false;
        /**
         * if tile is checkable, whether only one tile can be checked
         */
        this.radio = false;
        _RhTileGroup_tiles.set(this, []);
        _RhTileGroup_initTiles.set(this, false);
        _RhTileGroup_tabindex.set(this, new RovingTabindexController(this));
        _RhTileGroup_internals.set(this, new InternalsController(this, {}));
    }
    /**
     * all slotted tiles
     */
    get tiles() {
        return __classPrivateFieldGet(this, _RhTileGroup_tiles, "f");
    }
    /**
     * all selected tiles
     */
    get selected() {
        const selected = __classPrivateFieldGet(this, _RhTileGroup_tiles, "f")?.filter(tile => tile.checked);
        const [first] = selected;
        return this.radio ? first : selected;
    }
    firstUpdated() {
        __classPrivateFieldGet(this, _RhTileGroup_internals, "f").role = this.radio ? 'radiogroup' : null;
        this.updateItems();
    }
    updated(_changedProperties) {
        if (_changedProperties.has('radio')) {
            __classPrivateFieldGet(this, _RhTileGroup_internals, "f").role = this.radio ? 'radiogroup' : null;
            let selected;
            __classPrivateFieldGet(this, _RhTileGroup_tiles, "f").forEach(tile => {
                // @ts-expect-error: internal use of private prop. replace with context. see rh-tile.ts
                tile.radioGroup = this.radio;
                if (this.radio && !selected && tile.checked) {
                    selected = tile;
                }
            });
            this.selectItem(selected);
        }
        if (_changedProperties.has('disabled')) {
            __classPrivateFieldGet(this, _RhTileGroup_internals, "f").ariaDisabled = this.disabled ? 'true' : 'false';
            __classPrivateFieldGet(this, _RhTileGroup_tiles, "f").forEach(tile => {
                // @ts-expect-error: internal use of private prop. replace with context. see rh-tile.ts
                tile.disabledGroup = this.disabled;
            });
        }
    }
    render() {
        const { on = '', radio } = this;
        return html `
      <slot class="${classMap({ [on]: !!on, radio })}" @slotchange=${__classPrivateFieldGet(this, _RhTileGroup_instances, "m", _RhTileGroup_onSlotchange)} @select=${__classPrivateFieldGet(this, _RhTileGroup_instances, "m", _RhTileGroup_onSelect)}></slot>
    `;
    }
    /** sets focus on active tile */
    focus() {
        (__classPrivateFieldGet(this, _RhTileGroup_tabindex, "f")?.activeItem || __classPrivateFieldGet(this, _RhTileGroup_tabindex, "f").firstItem)?.focus();
    }
    /**
     * programatically select a tile
     * @param tile {RhTile | null | undefined} tile to select
     */
    selectItem(tile) {
        if (tile) {
            tile.checked = true;
            __classPrivateFieldGet(this, _RhTileGroup_instances, "m", _RhTileGroup_setTiles).call(this, tile);
        }
    }
    /**
     * programatically toggle a tile
     * @param tile {RhTile | null | undefined} tile to toggle
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
     * updates slotted tiles to set properties and keyboard navigation
     */
    updateItems() {
        __classPrivateFieldSet(this, _RhTileGroup_tiles, [...this.querySelectorAll('rh-tile')], "f");
        __classPrivateFieldGet(this, _RhTileGroup_tiles, "f").forEach(tile => {
            tile.checkable = true;
            // @ts-expect-error: internal use of private prop. replace with context. see rh-tile.ts
            tile.radioGroup = this.radio;
            // @ts-expect-error: internal use of private prop. replace with context. see rh-tile.ts
            tile.disabledGroup !== this.disabled;
            tile.id = tile.id || getRandomId('rh-tile');
        });
        if (__classPrivateFieldGet(this, _RhTileGroup_initTiles, "f")) {
            __classPrivateFieldGet(this, _RhTileGroup_tabindex, "f").updateItems(__classPrivateFieldGet(this, _RhTileGroup_tiles, "f"));
        }
        else {
            __classPrivateFieldSet(this, _RhTileGroup_initTiles, true, "f");
            __classPrivateFieldGet(this, _RhTileGroup_tabindex, "f").initItems(__classPrivateFieldGet(this, _RhTileGroup_tiles, "f"));
        }
    }
};
_RhTileGroup_tiles = new WeakMap(), _RhTileGroup_initTiles = new WeakMap(), _RhTileGroup_tabindex = new WeakMap(), _RhTileGroup_internals = new WeakMap(), _RhTileGroup_instances = new WeakSet(), _RhTileGroup_setTiles = function _RhTileGroup_setTiles(tile) {
    // @ts-expect-error: internal use of private prop. replace with context. see rh-tile.ts
    if (!this.disabled && (tile && tile.radioGroup || this.radio) && tile?.checked) {
        __classPrivateFieldGet(this, _RhTileGroup_tiles, "f")?.forEach(item => {
            if (tile !== item && item.checked) {
                item.checked = false;
            }
        });
    }
}, _RhTileGroup_onSelect = function _RhTileGroup_onSelect(event) {
    const tile = event.target;
    __classPrivateFieldGet(this, _RhTileGroup_instances, "m", _RhTileGroup_setTiles).call(this, tile);
}, _RhTileGroup_onSlotchange = function _RhTileGroup_onSlotchange() {
    this.updateItems();
};
RhTileGroup.styles = [styles];
__decorate([
    property({ reflect: true, attribute: 'disabled', type: Boolean })
], RhTileGroup.prototype, "disabled", void 0);
__decorate([
    property({ attribute: 'radio', type: Boolean })
], RhTileGroup.prototype, "radio", void 0);
__decorate([
    colorContextConsumer()
], RhTileGroup.prototype, "on", void 0);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhTileGroup.prototype, "colorPalette", void 0);
RhTileGroup = __decorate([
    customElement('rh-tile-group')
], RhTileGroup);
export { RhTileGroup };
//# sourceMappingURL=rh-tile-group.js.map