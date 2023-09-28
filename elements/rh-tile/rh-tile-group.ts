import { LitElement, html, type PropertyValueMap } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { RhTile, TileSelectEvent } from './rh-tile.js';

import styles from './rh-tile-group.css';

/**
 * A group of `<rh-tile>` elements which handles radio selection.
 * @slot - tiles
 */
@customElement('rh-tile-group')
export class RhTileGroup extends LitElement {
  static readonly styles = [styles];

  /**
   * whether tile interaction is disabled but retains ability to be read by screen readers;
   * preferred method of disabling instead of `disabled`
   */
  @property({ reflect: true, attribute: 'aria-disabled', type: String }) ariaDisabled = 'false';

  /**
   * if tile is checkable, whether only on tile can be checked
   */
  @property({ attribute: 'radio', type: Boolean }) radio = false;

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   *
   * Tile group always resets its context to `base`, unless explicitly provided with a `color-palette`.
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  #tiles: RhTile[] = [];
  #initTiles = false;

  #tabindex = new RovingTabindexController<HTMLElement>(this);
  #internals = new InternalsController(this, { });

  /**
   * all slotted tiles
   */
  get tiles() {
    return this.#tiles;
  }

  /**
   * all selected tiles
   */
  get selected() {
    const selected = this.#tiles?.filter(tile=> tile.checked);
    const [first] = selected;
    return this.radio ? first : selected;
  }

  protected firstUpdated(): void {
    this.#internals.role = this.radio ? 'radiogroup' : null;
    this.updateTiles();
  }

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('radio')) {
      this.#internals.role = this.radio ? 'radiogroup' : null;
      let selected: RhTile | null | undefined;
      this.#tiles.forEach(tile => {
        if (tile.radio !== this.radio) {
          tile.radio = this.radio;
        }
        if (this.radio && !selected && tile.checked) {
          selected = tile;
        }
      });
      this.selectTile(selected);
    }
    if (_changedProperties.has('ariaDisabeld')) {
      this.#internals.role = this.radio ? 'radiogroup' : null;
      this.#tiles.forEach(tile => {
        if (tile.ariaDisabled !== this.ariaDisabled) {
          tile.ariaDisabled = this.ariaDisabled;
        }
      });
    }
  }

  render() {
    const { on = '', radio } = this;
    return html`
      <slot class="${classMap({ [on]: !!on, radio })}" @slotchange=${this.#onSlotchange} @select=${this.#onSelect}></slot>
    `;
  }

  /** sets focus on active tile */
  focus() {
    (this.#tabindex?.activeItem || this.#tabindex.firstItem)?.focus();
  }

  /**
   * programatically select a tile
   * @param tile {RhTile | null | undefined} tile to select
   */
  selectTile(tile: RhTile | null | undefined) {
    if (tile) {
      tile.checked = true;
      this.#setTiles(tile);
    }
  }

  /**
   * programatically toggle a tile
   * @param tile {RhTile | null | undefined} tile to toggle
   */
  toggleTile(tile: RhTile | null | undefined) {
    if (tile?.checked) {
      tile.checked = false;
    } else {
      this.selectTile(tile);
    }
  }

  /**
   * updates slotted tiles to set properties and keyboard navigation
   */
  updateTiles() {
    this.#tiles = [...this.querySelectorAll('rh-tile')];
    this.#tiles.forEach(tile => {
      tile.checkable = true;
      tile.radio = this.radio;
      tile.ariaDisabled !== this.ariaDisabled;
      tile.id = tile.id || getRandomId('rh-tile');
    });
    if (this.#initTiles) {
      this.#tabindex.updateItems(this.#tiles);
    } else {
      this.#initTiles = true;
      this.#tabindex.initItems(this.#tiles);
    }
  }

  #setTiles(tile: RhTile | null | undefined) {
    if (tile && tile.radio || this.radio) {
      this.#tiles?.forEach(item => {
        if (tile !== item && item.checked) {
          item.checked = false;
        }
      });
    }
  }

  /**
   * handles TileSelectEvent
   * @param event {TileSelectEvent} tile click event
   */
  #onSelect(event: TileSelectEvent) {
    const tile = event.target as RhTile;
    this.#setTiles(tile);
  }

  /**
   * handles slot change by updating slotted tiles
   */
  #onSlotchange() {
    this.updateTiles();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tile-group': RhTileGroup;
  }
}
