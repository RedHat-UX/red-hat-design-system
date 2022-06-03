import { LitElement, html } from 'lit';
import { customElement, query, property } from 'lit/decorators.js';

import { pfelement, bound, observed } from '@patternfly/pfe-core/decorators.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import './rh-secondary-nav-dropdown.js';
import './rh-secondary-nav-menu.js';
import './rh-secondary-nav-menu-section.js';

import type { RhSecondaryNavOverlay } from './rh-secondary-nav-overlay.js';

import { SecondaryNavOverlayEvent } from './rh-secondary-nav-overlay.js';
import { RhSecondaryNavDropdown, SecondaryNavDropdownChangeEvent } from './rh-secondary-nav-dropdown.js';

import { tabletLandscapeBreakpoint } from '../../lib/tokens.js';
import { MatchMediaController } from '../../lib/MatchMediaController.js';

import styles from './rh-secondary-nav.css';

/**
 * Red Hat Secondary Nav
 *
 * @summary A non primary navigation bar.
 *
 * @slot base           - Slot to override all shadow dom contents inside nav
 * @slot logo           - Logo added to the main nav bar, expects a `<a> | <svg> | <img>`
 * @slot nav            - Navigation list added to the main nav bar, expects a `<ul>`
 * @slot cta            - Nav bar level CTA, expects a `<pfe-cta>
 *
 * @csspart base        - {HTMLNavElement} container, <nav> element
 * @csspart container   - {HTMLElement} css grid container, <div> element
 * @csspart cta         - {HTMLElement} container, <div> element
 */
@customElement('rh-secondary-nav') @pfelement()
export class RhSecondaryNav extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  #logger = new Logger(this);

  @query('rh-secondary-nav-overlay') _overlay: RhSecondaryNavOverlay | undefined;

  @query('#container') _container: HTMLElement | undefined;

  @query('button') _mobileMenuButton: HTMLButtonElement | undefined;

  @observed
  @property({ type: Boolean, reflect: true, attribute: 'is-mobile' }) isMobile = false;

  static isDropdown(element: Element|null): element is RhSecondaryNavDropdown {
    return element instanceof RhSecondaryNavDropdown;
  }

  protected matchMedia = new MatchMediaController(this, `(min-width: ${tabletLandscapeBreakpoint})`, {
    onChange: ({ matches }) => {
      this.isMobile = !matches;
    }
  });

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('change', this._dropdownChangeHandler as EventListener);
    this.addEventListener('overlay-change', this._toggleNavOverlay as EventListener);
    this.addEventListener('focusout', this._focusOutHandler);
    this.removeAttribute('role');
  }

  firstUpdated() {
    // after update the overlay should be available to attach an event listener to
    this._overlay?.addEventListener('click', this._overlayClickHandler as EventListener);
    this.isMobile = (window.outerWidth < parseInt(tabletLandscapeBreakpoint.toString().split('px')[0]));
  }

  render() {
    return html`
    <nav part="base">
      <slot name="base">
        <div id="container" part="container">
          <slot name="logo"></slot>
          <button aria-controls="${this.id}" @click="${this.#toggleMobileMenu}">Menu</button>
          <slot name="nav"></slot>
          <div id="cta" part="cta">
            <slot name="cta"><slot>
          </div>
        </div>
      </slot>
    </nav>
    <rh-secondary-nav-overlay hidden></rh-secondary-nav-overlay>
    `;
  }

  public open(index: number) {
    if (index == null) {
      return;
    }
    const dropdown = this.#dropdownByIndex(index);
    if (dropdown && RhSecondaryNav.isDropdown(dropdown)) {
      this.close();
      this.#expand(index);
      dropdown?.querySelector('a')?.focus();
      this._overlay?.toggleNavOverlay(this._overlay, true, this);
    }
  }

  public close() {
    const dropdowns = this.#allDropdowns();
    dropdowns.forEach(dropdown => this.#closeDropdown(dropdown));
  }

  @bound
  private _dropdownChangeHandler(event: SecondaryNavDropdownChangeEvent) {
    const index = this.#getDropdownIndex(event.target as Element);
    // Close open dropdowns
    this.close();
    if (event.expanded) {
      this.#expand(index);
    }
    if (!this.hasAttribute('is-mobile')) {
      this.dispatchEvent(new SecondaryNavOverlayEvent(event.expanded, event.toggle));
    }
  }

  @bound
  private _focusOutHandler(event: FocusEvent) {
    const target = event.relatedTarget as HTMLElement;
    if (target && !target.closest('rh-secondary-nav')) {
      if (this.isMobile) {
        this.#closeMobileMenu();
      }
      this.close();
      this._overlay?.toggleNavOverlay(event.target as HTMLElement, false, this);
    }
  }

  @bound
  private _overlayClickHandler(event: PointerEvent) {
    this.close();
    this._overlay?.toggleNavOverlay(event.target as HTMLElement, false, this);
    if (this.isMobile) {
      this.#closeMobileMenu();
    }
  }

  private _isMobileChanged(oldVal?: boolean | undefined, newVal?: boolean | undefined) {
    if (newVal === undefined || newVal === oldVal) {
      return;
    }
    const navMenusOpen = this.querySelectorAll('rh-secondary-nav-dropdown[expanded]').length;
    if (newVal === true) {
      // Switching to Mobile
      if (navMenusOpen > 0) {
        this.#openMobileMenu();
      }
    } else {
      // Switching to Desktop
      if (navMenusOpen === 0) {
        this.#closeMobileMenu();
        this._overlay?.toggleNavOverlay(this._overlay, false, this);
      }
    }
  }

  #getDropdownIndex(_el: Element|null) {
    if (RhSecondaryNav.isDropdown(_el)) {
      const dropdowns = this.#allDropdowns();
      return dropdowns.findIndex(dropdown => dropdown.id === _el.id);
    }
    this.#logger.warn('The getDropdownIndex method expects to receive a dropdown element.');
    return;
  }

  #dropdownByIndex(index: number) {
    const dropdowns = this.#allDropdowns();
    if (dropdowns[index] === undefined) {
      this.#logger.error('This dropdown index does not exist.');
      return;
    }
    return dropdowns[index];
  }

  #expand(index: number) {
    if (index == null) {
      return;
    }
    const dropdown = this.#dropdownByIndex(index);
    if (dropdown && RhSecondaryNav.isDropdown(dropdown)) {
      this.#openDropdown(dropdown);
    }
  }

  #allDropdowns(): RhSecondaryNavDropdown[] {
    return Array.from(this.querySelectorAll('rh-secondary-nav-dropdown')).filter(RhSecondaryNav.isDropdown);
  }

  #closeDropdown(dropdown: RhSecondaryNavDropdown) {
    if (dropdown.expanded === false) {
      return;
    }
    dropdown.expanded = false;
  }

  #openDropdown(dropdown: RhSecondaryNavDropdown) {
    if (dropdown.expanded === true) {
      return;
    }
    dropdown.expanded = true;
  }

  @bound
  private _toggleNavOverlay(event: SecondaryNavOverlayEvent) {
    if (this.contains(event.toggle)) {
      this._overlay?.toggleNavOverlay(event.toggle, event.open, this);
    }
  }

  #toggleMobileMenu() {
    if (!this._mobileMenuButton?.hasAttribute('aria-expanded')) {
      this.#openMobileMenu();
      this.dispatchEvent(new SecondaryNavOverlayEvent(true, this));
    } else {
      this.#closeMobileMenu();
      this.dispatchEvent(new SecondaryNavOverlayEvent(false, this));
    }
  }

  #openMobileMenu() {
    if (this._mobileMenuButton?.getAttribute('aria-expanded') === 'true') {
      return;
    }
    this._mobileMenuButton?.setAttribute('aria-expanded', 'true');
    this._container?.setAttribute('expanded', '');
  }

  #closeMobileMenu() {
    if (!this._mobileMenuButton?.hasAttribute('aria-expanded')) {
      return;
    }
    this.close();
    this._mobileMenuButton?.removeAttribute('aria-expanded');
    this._container?.removeAttribute('expanded');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-secondary-nav': RhSecondaryNav;
  }
}
