import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import styles from './rh-menu.css';

export class MenuToggleEvent extends Event {
  constructor(
    public open: boolean,
    public menu: HTMLElement
  ) {
    super('toggle', { bubbles: true });
  }
}

/**
 * Menu
 * @slot - menu items
 */
@customElement('rh-menu')
export class RhMenu extends LitElement {
  static readonly styles = [styles];

  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  @queryAssignedElements() private accessor _menuItems!: HTMLElement[];

  @colorContextConsumer() private accessor on: ColorTheme | undefined;

  #tabindex = RovingTabindexController.of<HTMLElement>(this, {
    getItems: () => this.getItems(this._menuItems),
  });

  /**
   * override or set to add items to the roving tab index controller
   * @param items original list of items
   */
  getItems(items: HTMLElement[]): HTMLElement[] {
    return items;
  }

  get activeItem() {
    return this.#tabindex.items.at(this.#tabindex.atFocusedItemIndex);
  }

  connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId('menu');
    this.setAttribute('role', 'menu'); // TODO: use InternalsController.role when support/polyfill is better
    this.#onSlotchange();
  }

  render() {
    const { on = 'light' } = this;
    return html`
      <slot part="menu"
            class="${classMap({ on: true, [on]: true })}"
            @slotchange="${this.#onSlotchange}"></slot>
    `;
  }

  #onSlotchange() {
    for (const item of this._menuItems ?? []) {
      item.setAttribute('role', 'menuitem');
    }
  }

  activateItem(item: HTMLElement) {
    this.#tabindex.atFocusedItemIndex = this.#tabindex.items.indexOf(item);
  }

  focus() {
    this.#tabindex.items[this.#tabindex.atFocusedItemIndex]?.focus();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-menu': RhMenu;
  }
}
