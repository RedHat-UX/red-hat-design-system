import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

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
 *
 * @alias menu
 */
@customElement('rh-menu')
@themable
export class RhMenu extends LitElement {
  static readonly styles = [styles];

  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  @queryAssignedElements() private _menuItems!: Element[];

  #tabindex: RovingTabindexController<HTMLElement> = RovingTabindexController.of(this, {
    getItems: (): HTMLElement[] =>
      this._menuItems.flatMap((element: Element) =>
        element instanceof HTMLSlotElement ? element.assignedElements() : [element]
      ) as HTMLElement[],
  });

  get activeItem() {
    return this.#tabindex.items.at(this.#tabindex.atFocusedItemIndex);
  }

  connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId('menu');
    this.setAttribute('role', 'menu'); // TODO: use InternalsController.role when support/polyfill is better
    if (!isServer) {
      this.#onSlotchange();
    }
  }

  render() {
    return html`
      <!-- menu items -->
      <slot part="menu"
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
