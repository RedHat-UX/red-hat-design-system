import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { ComposedEvent } from '@patternfly/pfe-core';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { bound, observed } from '@patternfly/pfe-core/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import { RhNavigationSecondaryMenu } from './rh-navigation-secondary-menu.js';

export class SecondaryNavDropdownExpandEvent extends ComposedEvent {
  constructor(
    public expanded: boolean,
    public toggle: RhNavigationSecondaryDropdown,
  ) {
    super('expand-request');
  }
}

// There is possibility of abstracting this component to a more 'generic' standalone component
// in the future. Styles or functionality that are specific to rh-navigation-secondary are commented
// on as such for any future abstraction.

import styles from './rh-navigation-secondary-dropdown.css';

/**
 * @summary A wrapper component to upgrade a top level nav link to include dropdown functionality
 *
 * @slot link   - Link for dropdown, expects `<a>`
 * @slot menu   - Menu for dropdown, expects `<rh-navigation-secondary-menu>`
 *
 * @fires { SecondaryNavDropdownExpandEvent } change - Fires when a dropdown is clicked
**/
@customElement('rh-navigation-secondary-dropdown')
export class RhNavigationSecondaryDropdown extends LitElement {
  static readonly styles = [styles];

  #slots = new SlotController(this, { slots: ['link', 'menu'] });

  #logger = new Logger(this);

  @query('#container') _container?: HTMLElement;

  @observed
  @state() expanded = false;

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette: ColorPalette = 'light';

  connectedCallback(): void {
    super.connectedCallback();

    this.id ||= getRandomId('rh-navigation-secondary-dropdown');

    const [link] = this.#slots.getSlotted<HTMLElement>('link');
    const [menu] = this.#slots.getSlotted<HTMLElement>('menu');
    if (link === undefined) {
      this.#logger.warn('[rh-navigation-secondary-dropdown][slot="link"] expects a slotted <a> tag');
      return;
    }
    if (menu === undefined) {
      this.#logger.warn('[rh-navigation-secondary-dropdown][slot="menu"] expects a slotted <rh-navigation-secondary-menu> tag');
      return;
    }

    link.setAttribute('role', 'button');
    link.setAttribute('aria-expanded', 'false');
    link.setAttribute('aria-controls', menu.id);
    link.addEventListener('click', this._clickHandler);
  }

  render() {
    const classes = { 'expanded': this.expanded };

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
   * @returns {void}
   */
  protected _expandedChanged(oldVal?: 'false' | 'true', newVal?: 'false' | 'true'): void {
    if (newVal === oldVal) {
      return;
    }
    newVal ? this.#open() : this.#close();
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
   * @returns {void}
   */
  #open(): void {
    const link = this.#slots.getSlotted('link').find(child => child instanceof HTMLAnchorElement);
    link?.setAttribute('aria-expanded', 'true');
    // menu as a RhNavigationSecondaryMenu in the slotted child is specific to rh-navigation-secondary.
    // If this component is abstracted to a standalone component. The RhNavigationSecondaryMenu
    // could possibly become a sub component of the abstraction instead.
    const menu = this.#slots.getSlotted('menu').find(child => child instanceof RhNavigationSecondaryMenu) as RhNavigationSecondaryMenu;
    menu.visible = true;
  }

  /**
   * Sets or removes attributes needed to close a dropdown menu
   * @returns {void}
   */
  #close(): void {
    const link = this.#slots.getSlotted('link').find(child => child instanceof HTMLAnchorElement);
    link?.setAttribute('aria-expanded', 'false');
    // Same as comment in #open()
    // The RhNavigationSecondaryMenu could possibly become a sub component of the abstraction instead.
    const menu = this.#slots.getSlotted('menu').find(child => child instanceof RhNavigationSecondaryMenu) as RhNavigationSecondaryMenu;
    menu.visible = false;
  }
}

@customElement('rh-secondary-nav-dropdown')
class RhSecondaryNavDropdown extends RhNavigationSecondaryDropdown {
  #logger = new Logger(this);

  constructor() {
    super();
    this.#logger.warn('rh-secondary-nav-dropdown is deprecated. Use rh-navigation-secondary-dropdown instead.');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-secondary-dropdown': RhNavigationSecondaryDropdown,
    'rh-secondary-nav-dropdown': RhSecondaryNavDropdown
  }
}
