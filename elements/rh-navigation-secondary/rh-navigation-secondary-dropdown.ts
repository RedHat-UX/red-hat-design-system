import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators/property.js';

import { ComposedEvent } from '@patternfly/pfe-core';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { bound, observes } from '@patternfly/pfe-core/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { RhNavigationSecondaryMenu } from './rh-navigation-secondary-menu.js';

import styles from './rh-navigation-secondary-dropdown.css';

export class SecondaryNavDropdownExpandEvent extends ComposedEvent {
  constructor(
    public expanded: boolean,
    public toggle: RhNavigationSecondaryDropdown,
  ) {
    super('expand-request');
  }
}

/**
 * Upgrades a top level nav link to include dropdown functionality
 * @summary Upgrades a top level nav link to include dropdown functionality
 * @slot link   - Link for dropdown, expects `<a>` element
 * @slot menu   - Menu for dropdown, expects `<rh-navigation-secondary-menu>` element
 * @fires { SecondaryNavDropdownExpandEvent } change - Fires when a dropdown is clicked
 */
@customElement('rh-navigation-secondary-dropdown')
export class RhNavigationSecondaryDropdown extends LitElement {
  static readonly styles = [styles];

  #slots = new SlotController(this, { slots: ['link', 'menu'] });

  #logger = new Logger(this);

  #highlight = false;

  #mo = new MutationObserver(this.#mutationsCallback.bind(this));

  @property({ type: Boolean })
  accessor expanded = false;

  connectedCallback(): void {
    super.connectedCallback();

    this.id ||= getRandomId('rh-navigation-secondary-dropdown');

    const [link] = this.#slots.getSlotted<HTMLElement>('link');
    const [menu] = this.#slots.getSlotted<HTMLElement>('menu');
    if (link === undefined) {
      this.#logger.warn(
        '[rh-navigation-secondary-dropdown][slot="link"] expects a slotted <a> tag'
      );
      return;
    }
    if (menu === undefined) {
      this.#logger.warn(`[rh-navigation-secondary-dropdown][slot="menu"] expects a slotted <rh-navigation-secondary-menu> tag`);
      return;
    }

    link.setAttribute('role', 'button');
    link.setAttribute('aria-expanded', 'false');
    link.setAttribute('aria-controls', menu.id);
    link.addEventListener('click', this._clickHandler);

    this.#mo.observe(this, { attributeFilter: ['aria-current'], childList: true, subtree: true });
    this.#mutationsCallback();
  }

  render() {
    const classes = { 'expanded': this.expanded, 'highlight': this.#highlight };

    return html`
      <div id="container" part="container" class="${classMap(classes)}">
        <slot name="link"></slot>
        <slot name="menu"></slot>
      </div>
    `;
  }

  /**
   * When expanded property changes, check the new value, if true
   * run the `#open()` method, if false run the `#close()` method.
   * @param oldVal {string} - Boolean value in string form
   * @param newVal {string} - Boolean value in string form
   */
  @observes('expanded')
  protected _expandedChanged(oldVal?: 'false' | 'true', newVal?: 'false' | 'true'): void {
    if (newVal === oldVal) {
      return;
    }
    return newVal ? this.#open() : this.#close();
  }

  /**
   * When a dropdown is clicked set expanded to the opposite of the expanded property
   * and then dispatch that value in a SecondaryNavDropdownExpandEvent
   * @param event {MouseEvent}
   */
  @bound
  private _clickHandler(event: MouseEvent) {
    event.preventDefault();
    this.expanded = !this.expanded;
    // trigger change event which evokes the mutation on this.expanded
    this.dispatchEvent(new SecondaryNavDropdownExpandEvent(this.expanded, this));
  }

  /**
   * Sets or removes attributes needed to open a dropdown menu
   */
  #open(): void {
    const link = this.#slots.getSlotted('link').find(child => child instanceof HTMLAnchorElement);
    link?.setAttribute('aria-expanded', 'true');
    // menu as a RhNavigationSecondaryMenu in the slotted child is specific to rh-navigation-secondary.
    // If this component is abstracted to a standalone component. The RhNavigationSecondaryMenu
    // could possibly become a sub component of the abstraction instead.
    const menu = this.#slots.getSlotted('menu').find(child =>
      child instanceof RhNavigationSecondaryMenu
    ) as RhNavigationSecondaryMenu;
    menu.visible = true;
  }

  /** Sets or removes attributes needed to close a dropdown menu */
  #close() {
    const link = this.#slots.getSlotted('link').find(child => child instanceof HTMLAnchorElement);
    link?.setAttribute('aria-expanded', 'false');
    // Same as comment in #open()
    // The RhNavigationSecondaryMenu could possibly become a sub component of the abstraction instead.
    const menu = this.#slots.getSlotted('menu').find(
      (child: Node): child is RhNavigationSecondaryMenu =>
        child instanceof RhNavigationSecondaryMenu);
    if (menu) {
      menu.visible = false;
    }
  }

  async #mutationsCallback(): Promise<void> {
    const [menu] = this.#slots.getSlotted<HTMLElement>('menu');
    this.#highlight = menu.querySelector('[aria-current="page"]') ? true : false;
    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-secondary-dropdown': RhNavigationSecondaryDropdown;
  }
}
