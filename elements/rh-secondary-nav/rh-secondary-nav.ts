import { LitElement, html } from 'lit';
import { customElement, query, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { pfelement, bound, observed } from '@patternfly/pfe-core/decorators.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import './rh-secondary-nav-dropdown.js';
import './rh-secondary-nav-menu.js';
import './rh-secondary-nav-menu-section.js';

import type { RhSecondaryNavOverlay } from './rh-secondary-nav-overlay.js';

import { SecondaryNavOverlayChangeEvent } from './rh-secondary-nav-overlay.js';
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
 * @slot logo           - Logo added to the main nav bar, expects a `<a> | <a><svg/></a> | <a><img/></a>`
 * @slot nav            - Navigation list added to the main nav bar, expects a `<ul>`
 * @slot cta            - Nav bar level CTA, expects a `<pfe-cta>
 *
 * @csspart base        - {HTMLNavElement} container, <nav> element
 * @csspart container   - {HTMLElement} css grid container, <div> element
 * @csspart cta         - {HTMLElement} container, <div> element
 *
 * @fires { SecondaryNavOverlayChangeEvent } overlay-change - Fires when an dropdown is opened or closed in desktop view or when
 *                                        the mobile menu button is toggled in mobile view.
 */
@customElement('rh-secondary-nav') @pfelement()
export class RhSecondaryNav extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  #logger = new Logger(this);

  /**
   * executes this.shadowRoot.querySelector('rh-secondary-nav-overlay')
   */
  @query('rh-secondary-nav-overlay') _overlay: RhSecondaryNavOverlay | undefined;

  /**
   * executes this.shadowRoot.querySelector('#container')
   */
  @query('#container') _container: HTMLElement | undefined;

  /**
   * executes this.shadowRoot. querySelctor('nav');
   */
  @query('nav') _nav: HTMLElement | undefined;

  /**
   * executes this.shadowRoot.querySelector('button')
   */
  @query('button') _mobileMenuButton: HTMLButtonElement | undefined;


  /**
   * `isMobile` property is true when viewport `(min-width: ${tabletLandscapeBreakpoint})`.
   * Property is observed for changes, and its value is updated using matchMediaControler
   * when viewport changes at breakpoint or first load of the component.
   */
  @observed
  @property({ reflect: false }) _isMobile = false;

  /**
   * Checks if passed in element is a RhSecondaryNavDropdown
   * @param element:
   * @returns {boolean}
   */
  static isDropdown(element: Element|null): element is RhSecondaryNavDropdown {
    return element instanceof RhSecondaryNavDropdown;
  }

  /**
   * Updates isMobile property with matchMedia when viewport changes
   */
  protected matchMedia = new MatchMediaController(this, `(min-width: ${tabletLandscapeBreakpoint})`, {
    onChange: ({ matches }) => {
      this._isMobile = !matches;
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
    this._isMobile = (window.outerWidth < parseInt(tabletLandscapeBreakpoint.toString().split('px')[0]));
  }

  render() {
    const classes = { 'is-mobile': this._isMobile };

    return html`
    <nav part="base" class="${classMap(classes)}">
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

  /**
   * Public API, opens a specific dropdown based on index.
   * Closes all open dropdowns before opening specified.
   * Toggles overlay to open
   * @param index
   * @returns {void}
   */
  public open(index: number): void {
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

  /**
   * Public API, closes all open dropdowns
   * @returns {void}
   */
  public close(): void {
    const dropdowns = this.#allDropdowns();
    dropdowns.forEach(dropdown => this.#closeDropdown(dropdown));
  }

  /**
   * When dropdown event is triggered gets dropdown index that triggered
   * event then closes all dropdowns.
   * If the event is to open a dropdown, run #expand(index)
   * If isMobile is set dispatch an SecondaryNavOverlayChangeEvent event
   * to open the overlay
   * @param event - {SecondaryNavDropdownChangeEvent}
   * @return {void}
   */
  @bound
  private _dropdownChangeHandler(event: SecondaryNavDropdownChangeEvent): void {
    const index = this.#getDropdownIndex(event.target as Element);
    if (index === null || index === undefined) {
      return;
    }
    this.close();
    if (event.expanded) {
      this.#expand(index);
    }
    if (!this._nav?.classList.contains('is-mobile')) {
      this.dispatchEvent(new SecondaryNavOverlayChangeEvent(event.expanded, event.toggle));
    }
  }

  /**
   * Handles when forcus changes outside of the navigation
   * If isMobile is set, close the mobileMenu
   * Closes all dropdowns and toggles overlay to closed
   * @param event {FocusEvent}
   */
  @bound
  private _focusOutHandler(event: FocusEvent) {
    const target = event.relatedTarget as HTMLElement;
    if (target && !target.closest('rh-secondary-nav')) {
      if (this._isMobile) {
        this.#closeMobileMenu();
      }
      this.close();
      this._overlay?.toggleNavOverlay(event.target as HTMLElement, false, this);
    }
  }

  /**
   * Handles when the overlay recieves a click event
   * Closes all dropdowns and toggles overlay to closed
   * If isMobile then closes mobile menu to closed
   * @param event {PointerEvent}
   */
  @bound
  private _overlayClickHandler(event: PointerEvent) {
    this.close();
    this._overlay?.toggleNavOverlay(event.target as HTMLElement, false, this);
    if (this._isMobile) {
      this.#closeMobileMenu();
    }
  }

  /**
   * When isMobile value is changed
   * Get all open navMenus
   * If isMobile is true, open mobile menu
   * If isMobile is false, close mobile menu and close overlay
   * @param oldVal {boolean | undefined}
   * @param newVal {boolean | undefined}
   * @returns {void}
   */
  private __isMobileChanged(oldVal?: boolean | undefined, newVal?: boolean | undefined): void {
    if (newVal === undefined || newVal === oldVal) {
      return;
    }
    // const navMenusOpen = this.querySelectorAll('rh-secondary-nav-dropdown[expanded]').length;
    const dropdownsOpen = this.#getOpenDropdowns().length;

    if (newVal === true) {
      // Switching to Mobile
      if (dropdownsOpen > 0) {
        this.#openMobileMenu();
      }
    } else {
      // Switching to Desktop
      if (dropdownsOpen === 0) {
        this.#closeMobileMenu();
        this._overlay?.toggleNavOverlay(this._overlay, false, this);
      }
    }
  }

  /**
   * Finds all open dropdowns
   * @returns {RhSecondaryNavDropdown[]}
   */
  #getOpenDropdowns(): RhSecondaryNavDropdown[] {
    const dropdowns = this.#allDropdowns();
    const openDropdowns: RhSecondaryNavDropdown[] = [];
    dropdowns.forEach(dropdown => {
      if (dropdown.expanded) {
        openDropdowns.push(dropdown);
      }
    });
    return openDropdowns;
  }

  /**
   * Gets all dropdowns and finds the element given and returns its index
   * @param element {Element}
   * @returns {void | number}
   */
  #getDropdownIndex(element: Element|null): void | number {
    if (!RhSecondaryNav.isDropdown(element)) {
      this.#logger.warn('The getDropdownIndex method expects to receive a dropdown element.');
      return;
    }
    const dropdowns = this.#allDropdowns();
    const index = dropdowns.findIndex(dropdown => dropdown.id === element.id);
    return index;
  }

  /**
   * Gets all dropdowns and returns the dropdown given an index
   * @param index {number}
   * @returns {void | RhSecondaryNavDropdown}
   */
  #dropdownByIndex(index: number): void | RhSecondaryNavDropdown {
    const dropdowns = this.#allDropdowns();
    if (dropdowns[index] === undefined) {
      this.#logger.error('This dropdown index does not exist.');
      return;
    }
    return dropdowns[index];
  }

  /**
   * Opens a dropdown given an index
   * @param index {number}
   * @returns {void}
   */
  #expand(index: number): void {
    if (index == null) {
      return;
    }
    const dropdown = this.#dropdownByIndex(index);
    if (dropdown && RhSecondaryNav.isDropdown(dropdown)) {
      this.#openDropdown(dropdown);
    }
  }

  /**
   * Gets all dropdowns
   * @returns {RhSecondaryNavDropdown[]}
   */
  #allDropdowns(): RhSecondaryNavDropdown[] {
    return Array.from(this.querySelectorAll('rh-secondary-nav-dropdown')).filter(RhSecondaryNav.isDropdown);
  }

  /**
   * Sets property expanded=false on dropdown given
   * @param dropdown {RhSecondaryNavDropdown}
   * @returns {void}
   */
  #closeDropdown(dropdown: RhSecondaryNavDropdown): void {
    if (dropdown.expanded === false) {
      return;
    }
    dropdown.expanded = false;
  }

  /**
   * Sets property expanded=true on dropdown given
   * @param dropdown {RhSecondaryNavDropdown}
   * @returns {void}
   */
  #openDropdown(dropdown: RhSecondaryNavDropdown): void {
    if (dropdown.expanded === true) {
      return;
    }
    dropdown.expanded = true;
  }

  /**
   * Toggles the overlay triggered by eventListener
   * @param event {SecondaryNavOverlayChangeEvent}
   */
  @bound
  private _toggleNavOverlay(event: SecondaryNavOverlayChangeEvent) {
    if (this.contains(event.toggle)) {
      this._overlay?.toggleNavOverlay(event.toggle, event.open, this);
    }
  }

  /**
   * Toggles the mobile menu from `@click` of the _mobileMenuButton
   */
  #toggleMobileMenu() {
    if (this._mobileMenuButton?.hasAttribute('aria-expanded') === false) {
      this.#openMobileMenu();
      this.dispatchEvent(new SecondaryNavOverlayChangeEvent(true, this));
    } else {
      this.#closeMobileMenu();
      this.dispatchEvent(new SecondaryNavOverlayChangeEvent(false, this));
    }
  }

  /**
   * Sets attributes on _mobileMenuButton and _container to open mobile menu
   * @returns {void}
   */
  #openMobileMenu(): void {
    if (this._mobileMenuButton?.getAttribute('aria-expanded') === 'true') {
      return;
    }
    this._mobileMenuButton?.setAttribute('aria-expanded', 'true');
    this._container?.classList.add('expanded');
  }

  /**
   * Removes attributes on _mobileMenuButton and _container to close mobile menu
   * @returns {void}
   */
  #closeMobileMenu(): void {
    if (!this._mobileMenuButton?.hasAttribute('aria-expanded')) {
      return;
    }
    this.close();
    this._mobileMenuButton?.removeAttribute('aria-expanded');
    this._container?.classList.remove('expanded');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-secondary-nav': RhSecondaryNav;
  }
}
