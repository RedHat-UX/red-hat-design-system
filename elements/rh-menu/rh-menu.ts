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

  @colorContextConsumer() private on?: ColorTheme;

  #tabindex = new RovingTabindexController<HTMLElement>(this, {
    getItems: () => this.#menuItems ?? [],
  });

  get #menuItems() {
    const items = this._menuItems.filter((x): x is HTMLElement => x instanceof HTMLElement);
    items.forEach(item => {
      item.setAttribute('role', 'menuitem');
    });
    return items;
  }

  get activeItem() {
    return this.#tabindex.activeItem;
  }

  @queryAssignedElements() private _menuItems!: HTMLElement[];

  connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId('menu');
    this.setAttribute('role', 'menu'); // TODO: use InternalsController.role when support/polyfill is better
  }

  render() {
    const { on = '' } = this;
    return html`
      <slot part="menu" class="${classMap({ [on]: !!on })}"></slot>
    `;
  }

  activateItem(item: HTMLElement) {
    this.#tabindex.setActiveItem(item);
  }
}

/**
 * Given an element, returns self, or child that is not an rh-tooltip
 */
function getItemElement(element: Element) {
  return (
      element.localName !== 'rh-tooltip' ? element
    : element.querySelector(':not([slot=content])')
  );
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-menu': RhMenu;
  }
}
