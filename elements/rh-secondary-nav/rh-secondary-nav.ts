import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { pfelement, bound } from '@patternfly/pfe-core/decorators.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import './rh-secondary-nav-container.js';
import './rh-secondary-nav-dropdown.js';
import './rh-secondary-nav-menu.js';
import './rh-secondary-nav-menu-section.js';

import { RhSecondaryNavDropdown, SecondaryNavDropdownChangeEvent } from './rh-secondary-nav-dropdown.js';

import styles from './rh-secondary-nav.css';

/**
 * Secondary Nav
 * @slot - Place element content here
 */
@customElement('rh-secondary-nav') @pfelement()
export class RhSecondaryNav extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  static isDropdown(element: Element|null): element is RhSecondaryNavDropdown {
    return element instanceof RhSecondaryNavDropdown;
  }

  #logger = new Logger(this);

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('change', this._changeHandler as EventListener);
    document.addEventListener('click', this._clickHandler as EventListener);
  }

  render() {
    return html`
      <slot name="nav"></slot>
    `;
  }

  public expand(index: number) {
    if (index == null) {
      return;
    }
    const dropdowns = this.#allDropdowns();
    const dropdown = dropdowns[index];
    this.#expandDropdown(dropdown);
  }

  public collapse() {
    const dropdowns = this.#allDropdowns();
    dropdowns.forEach(dropdown => this.#collapseDropdown(dropdown));
  }

  @bound
  private _changeHandler(event: SecondaryNavDropdownChangeEvent) {
    const index = this.#getIndex(event.target as Element);
    this.collapse();
    if (event.expanded) {
      this.expand(index);
    }
  }

  @bound
  private _clickHandler(event: Event) {
    // https://css-tricks.com/click-outside-detector/
    if (this.contains(event.target as Node)) {
      this.collapse();
    }
  }

  #getIndex(_el: Element|null) {
    if (RhSecondaryNav.isDropdown(_el)) {
      const dropdowns = this.#allDropdowns();
      return dropdowns.findIndex(dropdown => dropdown.id === _el.id);
    }
    this.#logger.warn('The getIndex method expects to receive a dropdown element.');
    return -1;
  }

  #allDropdowns(): RhSecondaryNavDropdown[] {
    return Array.from(this.querySelectorAll('rh-secondary-nav-dropdown')).filter(RhSecondaryNav.isDropdown);
  }

  #collapseDropdown(dropdown: RhSecondaryNavDropdown) {
    if (dropdown.expanded === false) {
      return;
    }
    dropdown.expanded = false;
  }

  #expandDropdown(dropdown: RhSecondaryNavDropdown) {
    if (dropdown.expanded === true) {
      return;
    }
    dropdown.expanded = true;
  }
}
