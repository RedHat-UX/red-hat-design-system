import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';

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
    const { on = '' } = this;
    return html`
      <slot part="menu" class="${classMap({ [on]: !!on })}"></slot>
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
