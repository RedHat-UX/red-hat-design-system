import { html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';

import { pfelement, bound } from '@patternfly/pfe-core/decorators.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { SecondaryNavDropdownChangeEvent } from './rh-secondary-nav-dropdown.js';
import { SecondaryNavOverlayEvent } from './rh-secondary-nav-overlay.js';


import styles from './rh-secondary-nav-container.css';

@customElement('rh-secondary-nav-container') @pfelement()
export class RhSecondaryNavContainer extends LitElement {
  static readonly styles = [styles];

  @query('button') _mobileMenuButton: HTMLButtonElement | undefined;

  connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId('rh-secondary-nav-container');

    this.addEventListener('change', this._changeHandler as EventListener);
  }

  render() {
    return html`
      <slot name="logo"></slot>
      <button aria-controls="${this.id}" @click="${this.#toggleMenu}">Menu</button>
      <slot name="nav"></slot>
      <div id="cta"><slot name="cta"></slot></div>
    `;
  }

  #toggleMenu() {
    if (!this._mobileMenuButton?.hasAttribute('aria-expanded')) {
      this.#open();
    } else {
      this.#close();
    }
  }

  @bound
  private _changeHandler(event: SecondaryNavDropdownChangeEvent) {
    if (event.expanded) {
      this.#open();
    }

    // only close from a event.expanded === false and the window is
    // greater thand or eq to 992 breakpoint, otherwise the mobile
    // menu full close on each dropdown click
    if (!event.expanded && window.innerWidth >= 992) {
      this.#close();
    }
  }

  #open() {
    if (this._mobileMenuButton?.getAttribute('aria-expanded') === 'true') {
      return;
    }
    this._mobileMenuButton?.setAttribute('aria-expanded', 'true');
    this.setAttribute('expanded', '');
    this.dispatchEvent(new SecondaryNavOverlayEvent(true, this));
  }

  #close() {
    if (!this._mobileMenuButton?.hasAttribute('aria-expanded')) {
      return;
    }
    this._mobileMenuButton?.removeAttribute('aria-expanded');
    this.removeAttribute('expanded');
    this.dispatchEvent(new SecondaryNavOverlayEvent(false, this));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-secondary-nav-container': RhSecondaryNavContainer;
  }
}
