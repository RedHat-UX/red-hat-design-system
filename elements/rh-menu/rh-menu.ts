import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-menu.css';
import { RhMenuItem } from './rh-menu-item.js';
import { RhMenuItemGroup } from './rh-menu-item-group.js';

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

  @queryAssignedElements() private _menuItems!: HTMLElement[];
  #items!: HTMLElement[];

  #tabindex: RovingTabindexController<HTMLElement> = RovingTabindexController.of(this, {
    getItems: () => this.getItems(this.#items ? this.#items : this._menuItems),
  });

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
  }

  render() {
    return html`
      <!-- menu items -->
      <slot @slotchange="${this.#onSlotchange}" part="menu"></slot>
    `;
  }

  #onSlotchange() {
    this.#items = this._menuItems.flatMap((element: Element) => {
      if (element instanceof HTMLSlotElement) {
        const assigned = element.assignedElements().filter(
          (el): el is HTMLElement => !(el instanceof HTMLHRElement)
        );
        return assigned;
      } else {
        if (element instanceof HTMLHRElement) {
          // Skip <hr> elements
          return [];
        }

        if (element instanceof RhMenuItem) {
          return [element];
        } else if (element instanceof RhMenuItemGroup) {
          return Array.from(element.querySelectorAll('rh-menu-item'));
        } else if (element instanceof HTMLElement && !element.hasAttribute('role')) {
          element.setAttribute('role', 'menuitem');
          return [element];
        } else {
          return [];
        }
      }
    });

    this.#tabindex.hostUpdate();
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
