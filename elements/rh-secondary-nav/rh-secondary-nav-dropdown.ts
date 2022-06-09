import { html, LitElement } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { ComposedEvent } from '@patternfly/pfe-core';
import { bound, observed } from '@patternfly/pfe-core/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { RhSecondaryNavMenu } from './rh-secondary-nav-menu';

export class SecondaryNavDropdownChangeEvent extends ComposedEvent {
  constructor(
    public expanded: boolean,
    public toggle: RhSecondaryNavDropdown,
  ) {
    super('change');
  }
}

import styles from './rh-secondary-nav-dropdown.css';

/**
 * @summary A wrapper component to upgrade a top level nav link to include dropdown functionality
 *
 * @slot link   - Link for dropdown, expects `<a>`
 * @slot menu   - Menu for dropdown, expects `<rh-secondary-nav-menu>`
 *
 * @fires { SecondaryNavDropdownChangeEvent } change - Fires when a dropdown is clicked
**/
@customElement('rh-secondary-nav-dropdown')
export class RhSecondaryNavDropdown extends LitElement {
  static readonly styles = [styles];

  #slots = new SlotController(this, { slots: ['link', 'menu'] });

  @query('#container') _container: HTMLElement | undefined;

  @observed
  @state() expanded = false;

  connectedCallback(): void {
    super.connectedCallback();

    this.id ||= getRandomId('rh-secondary-nav-dropdown');

    const [link] = this.#slots.getSlotted<HTMLElement>('link');
    link.setAttribute('role', 'button');
    link.setAttribute('aria-expanded', 'false');
    const [menu] = this.#slots.getSlotted<HTMLElement>('menu');
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
   * and then dispatch that value in a SecondaryNavDropdownChangeEvent
   * @param event {MouseEvent}
   */
  @bound
  private _clickHandler(event: MouseEvent) {
    event.preventDefault();
    this.expanded = !this.expanded;
    // trigger change event which evokes the mutation on this.expanded
    this.dispatchEvent(new SecondaryNavDropdownChangeEvent(this.expanded, this));
  }

  /**
   * Sets or removes attributes needed to open a dropdown menu
   * @returns {void}
   */
  #open(): void {
    const link = this.#slots.getSlotted('link').find(child => child instanceof HTMLAnchorElement);
    link?.setAttribute('aria-expanded', 'true');
    const menu = this.#slots.getSlotted('menu').find(child => child instanceof RhSecondaryNavMenu) as RhSecondaryNavMenu;
    menu?.toggleVisibility(true);
  }

  /**
   * Sets or removes attributes needed to close a dropdown menu
   * @returns {void}
   */
  #close(): void {
    const link = this.#slots.getSlotted('link').find(child => child instanceof HTMLAnchorElement);
    link?.setAttribute('aria-expanded', 'false');
    const menu = this.#slots.getSlotted('menu').find(child => child instanceof RhSecondaryNavMenu) as RhSecondaryNavMenu;
    menu?.toggleVisibility(false);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-secondary-nav-dropdown': RhSecondaryNavDropdown;
  }
}
