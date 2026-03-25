import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';
import { RhMenuItem } from './rh-menu-item.js';
import { RhMenuItemGroup } from './rh-menu-item-group.js';

import styles from './rh-menu.css' with { type: 'css' };

export class MenuToggleEvent extends Event {
  constructor(
    public open: boolean,
    public menu: HTMLElement
  ) {
    super('toggle', { bubbles: true });
  }
}

/**
 * A menu provides a list of actions or links in a vertical layout.
 * It is typically used as a subcomponent within `rh-menu-dropdown`, which
 * allows users to select from available options. Authors MUST ensure that
 * slotted content consists of `rh-menu-item`, `rh-menu-item-group`, or
 * anchor elements. The element assigns the ARIA `menubar` role and manages
 * keyboard focus with a roving tabindex, so users can navigate items using
 * Arrow keys and Tab.
 *
 * @summary Vertically stacked list of menu actions or links
 *
 * @slot - Accepts `rh-menu-item`, `rh-menu-item-group`, `<a>`, or `<hr>`
 *         elements. Screen reader users will perceive these as menubar items.
 *         Authors SHOULD NOT place non-interactive content in this slot.
 *
 * @fires {MenuToggleEvent} toggle - Fired when the menu opens or closes.
 *        The event detail includes the `open` boolean state and a reference
 *        to the menu element.
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

  // eslint-disable-next-line no-unused-private-class-members
  #internals = InternalsController.of(this, { role: 'menubar' });

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
    this.#onSlotchange();
  }

  render() {
    return html`
      <!-- summary: Menu items
           description: |
             Accepts \`rh-menu-item\`, \`rh-menu-item-group\`, anchor, or
             \`<hr>\` elements. Screen reader users perceive these as
             menubar items. Authors SHOULD NOT place non-interactive
             content in this slot. -->
      <slot @slotchange="${this.#onSlotchange}" part="menu"></slot>
    `;
  }

  #onSlotchange() {
    if (!isServer) {
      this.#items = this._menuItems.flatMap((element: Element) => {
        if (element instanceof HTMLSlotElement) {
          const assigned = element.assignedElements().filter(
            (el): el is HTMLElement => !(el instanceof HTMLHRElement)
          );

          const items = assigned.flatMap(el => {
            if (el instanceof RhMenuItemGroup) {
              return Array.from(el.querySelectorAll('rh-menu-item'));
            }
            return [el];
          });

          return items;
        } else {
          if (element instanceof HTMLHRElement) {
            // Skip <hr> elements
            return [];
          }

          if (element instanceof RhMenuItem) {
            return [element];
          } else if (element instanceof RhMenuItemGroup) {
            return Array.from(element.querySelectorAll('rh-menu-item'));
          } else if (element instanceof HTMLElement) {
            if (!element.hasAttribute('role')) {
              element.setAttribute('role', 'menuitem');
            }
            return [element];
          } else {
            return [];
          }
        }
      });

      this.#tabindex.hostUpdate();
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
