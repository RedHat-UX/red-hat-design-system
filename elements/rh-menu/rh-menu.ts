import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { ComposedEvent } from '@patternfly/pfe-core';

import styles from './rh-menu.css';

export class MenuToggleEvent extends ComposedEvent {
  constructor(
    public open: boolean,
    public menu: HTMLElement
  ) {
    super('toggle');
  }
}

/**
 * Menu
 * @slot - menu items
 * @cssprop --rh-menu-background-color - background-color for the menu - {@default var(--rh-color-surface-lightest, #ffffff)}
 * @cssprop --rh-menu-border-color - border color for menu on dark or saturated - {@default transparent));
 * @cssprop --rh-menu-box-shadow - box-shadow for the menu - {@default var(--rh-menu-box-shadow, var(--rh-box-shadow-md, 0 4px 6px 1px rgb(21 21 21 / 0.25)))}
 */
@customElement('rh-menu')
export class RhMenu extends LitElement {
  static readonly styles = [styles];

  #tabindex = new RovingTabindexController(this);

  get activeItem() {
    return this.#tabindex.activeItem;
  }

  connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId('menu');
    this.setAttribute('role', 'menu'); // TODO: use InternalsController.role when support/polyfill is better
    this.#initItems();
  }

  render() {
    return html`
      <slot part="menu"></slot>
    `;
  }

  /**
   * finds menu items and sets attributes accordingly
   */
  #initItems() {
    const items = Array.from(this.children)
      .map(getItemElement)
      .filter((x): x is HTMLElement => x instanceof HTMLElement);
    items.forEach(item => item?.setAttribute('role', 'menuitem'));
    this.#tabindex.initItems(items);
    this.requestUpdate();
  }

  activateItem(item: HTMLElement) {
    this.#tabindex.updateActiveItem(item);
    this.#tabindex.focusOnItem(item);
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
