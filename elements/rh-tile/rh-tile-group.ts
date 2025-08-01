import { LitElement, html, type PropertyValues } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';

import { RhTile, TileSelectEvent } from './rh-tile.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-tile-group.css';

/**
 * A group of `<rh-tile>` elements which handles radio selection.
 */
@customElement('rh-tile-group')
@colorPalettes
@themable
export class RhTileGroup extends LitElement {
  static readonly styles = [styles];

  /**
   * Whether tile group interaction is disabled
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * If tile is checkable, whether only one tile can be checked
   */
  @property({ type: Boolean, reflect: true }) radio = false;

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   *
   * Tile group always resets its context to `base`, unless explicitly provided with a `color-palette`.
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  #tiles: RhTile[] = [];

  #tabindex = RovingTabindexController.of(this, {
    getItems: () => this.#tiles,
  });

  #internals = InternalsController.of(this);

  /**
   * All slotted tiles
   */
  get tiles() {
    return this.#tiles;
  }

  /**
   * All selected tiles
   */
  get selected() {
    const selected = this.#tiles?.filter(tile=> tile.checked);
    const [first] = selected;
    return this.radio ? first : selected;
  }

  constructor() {
    super();
    this.addEventListener('slotchange', this.#onSlotchange);
    this.addEventListener('select', this.#onSelect);
  }

  override firstUpdated(): void {
    this.updateItems();
  }

  override willUpdate(changed: PropertyValues<this>) {
    this.#internals.ariaDisabled = String(!!this.disabled);
    this.#internals.role = this.radio ? 'radiogroup' : null;
    let selected: RhTile | undefined;
    for (const tile of this.#tiles) {
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
    const { radio } = this;
    return html`
      <!-- Put one or more \`rh-tile\` elements in this slot -->
      <slot class="${classMap({ radio })}"></slot>
    `;
  }

  #selectTile(tileToSelect: RhTile, force?: boolean) {
    if (this.radio) {
      for (const tile of this.#tiles) {
        tile.checked = tile === tileToSelect;
      }
    } else {
      tileToSelect.checked = force ?? !tileToSelect.checked;
    }
  }

  #onSelect(event: Event) {
    if (event instanceof TileSelectEvent) {
      if (this.disabled) {
        event.preventDefault();
        return false;
      } else {
        this.#selectTile(event.target, event.force);
      }
    }
  }

  /**
   * handles slot change by updating slotted tiles
   */
  #onSlotchange() {
    this.updateItems();
  }

  /** Sets focus on active tile */
  focus() {
    this.#tabindex.items[this.#tabindex.atFocusedItemIndex]?.focus();
  }

  /**
   * Programatically select a tile
   * @param tile tile to select
   */
  selectItem(tile?: RhTile) {
    if (tile) {
      this.#selectTile(tile);
    }
  }

  /**
   * Programatically toggle a tile
   * @param tile tile to toggle
   */
  toggleItem(tile?: RhTile) {
    if (tile?.checked) {
      tile.checked = false;
    } else {
      this.selectItem(tile);
    }
  }

  /**
   * Updates slotted tiles to set properties and keyboard navigation
   */
  updateItems() {
    this.#tiles = [...this.querySelectorAll('rh-tile')];
    this.#tiles.forEach(tile => {
      tile.checkable = true;
      // @ts-expect-error: internal use of private prop. replace with context. see rh-tile.ts
      tile.radioGroup = this.radio;
      // @ts-expect-error: internal use of private prop. replace with context. see rh-tile.ts
      tile.disabledGroup = this.disabled;
      tile.id ||= getRandomId('rh-tile');
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tile-group': RhTileGroup;
  }
}
