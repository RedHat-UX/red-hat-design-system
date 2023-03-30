import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
import { bound, observed } from '@patternfly/pfe-core/decorators.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import '../rh-context-provider/rh-context-provider.js';

import './rh-navigation-secondary-menu-section.js';

import type { RhNavigationSecondaryOverlay } from './rh-navigation-secondary-overlay.js';

import { SecondaryNavOverlayChangeEvent } from './rh-navigation-secondary-overlay.js';
import { RhNavigationSecondaryDropdown, SecondaryNavDropdownExpandEvent } from './rh-navigation-secondary-dropdown.js';

import { DirController } from '../../lib/DirController.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

export type NavPalette = Extract<ColorPalette, (
  | 'lighter'
  | 'dark'
)>;

import styles from './rh-navigation-secondary.css';

/**
 * Red Hat Secondary Nav
 *
 * @summary  Connects a series of pages across web properties
 *
 * @slot logo           - Logo added to the main nav bar, expects a `<a> | <a><svg/></a> | <a><img/></a>`
 * @slot nav            - Navigation list added to the main nav bar, expects a `<ul>`
 * @slot cta            - Nav bar level CTA, expects a `<rh-cta>
 * @slot mobile-menu    - Text label for the mobile menu button, for l10n. Defaults to "Menu"
 *
 * @csspart nav         - container, <nav> element
 * @csspart container   - container, <div> element
 * @csspart cta         - container, <div> element
 *
 * @fires { SecondaryNavOverlayChangeEvent } overlay-change - Fires when an dropdown is opened or closed in desktop view or when
 *                                        the mobile menu button is toggled in mobile view.
 */
@customElement('rh-navigation-secondary')
export class RhNavigationSecondary extends LitElement {
  static readonly styles = [styles];

  #logger = new Logger(this);

  #logoCopy: HTMLElement | null = null;

  /** Is the element in an RTL context? */
  #dir = new DirController(this);

  /**
   * executes this.shadowRoot.querySelector('rh-navigation-secondary-overlay')
   */
  @query('rh-navigation-secondary-overlay') _overlay!: RhNavigationSecondaryOverlay;

  /**
   * executes this.shadowRoot.querySelector('#container')
   */
  @query('#container') _container?: HTMLElement;

  /**
   * executes this.shadowRoot.querySelector('nav');
   */
  @query('nav') _nav?: HTMLElement;

  /**
   * executes this.shadowRoot.querySelector('button')
   */
  @query('button') _mobileMenuButton?: HTMLButtonElement;

  /**
   * `_compact` property is true when viewport `(min-width: ${tabletLandscapeBreakpoint})`.
   * Property is observed for changes, and its value is updated using matchMediaController
   * when viewport changes at breakpoint or first load of the component.
   */
  @observed
  @state() private _compact = false;

  /**
   * ScreenSizeController effects callback to set _compact
   */
  protected screenSize = new ScreenSizeController(this, 'tabletLandscape', {
    onChange: matches => {
      this._compact = !matches;
    }
  });

  /**
   * `_mobileMenuExpanded` property is toggled when the mobile menu button is clicked,
   * a focusout event occurs, or on an overlay click event.  It also switches state
   * when the viewport changes breakpoints depending on if a dropdown is open or not.
   */
  @state() private _mobileMenuExpanded = false;

  /**
   * Define custom attribute 'main' and watch for DOM changes of the attribute
   */
  @property({ reflect: true, attribute: 'main', type: Boolean }) mainNav = false;


  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette: NavPalette = 'lighter';

  /**
   * If the host color-palette="light", the cta color context should be on="light"
   * by default.  However when the host color-palette="dark", the cta context should be
   * dark when in desktop mode, but light when in mobile compact mode because the cta shifts
   * to a white background in the mobile compact nav. This state property is set on firstUpdated()
   * and __compactChanged() and is used on a wrapping `<rh-context-provider>` around the cta allowing
   * it to dynamically change with viewport changes.
   */
  @state() private _ctaColorPalette: NavPalette | 'lightest' = this.colorPalette;

  /**
   * Checks if passed in element is a RhNavigationSecondaryDropdown
   * @param element:
   * @returns {boolean}
   */
  static isDropdown(element: Element | null): element is RhNavigationSecondaryDropdown {
    return element instanceof RhNavigationSecondaryDropdown;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.addEventListener('expand-request', this._dropdownChangeHandler);
    this.addEventListener('overlay-change', this._toggleNavOverlay);
    this.addEventListener('focusout', this._focusOutHandler);
    this.addEventListener('keydown', this._keyboardControls);
    this.#updateAccessibility();
  }

  firstUpdated() {
    // after update the overlay should be available to attach an event listener to
    this._overlay.addEventListener('click', this._overlayClickHandler);
    // if compact menu set cta color to lightest otherwise match navbar
    if (this._compact) {
      this._ctaColorPalette = 'lightest';
    } else {
      this._ctaColorPalette = this.colorPalette;
    }
  }

  render() {
    const navClasses = { compact: this._compact, rtl: this.#dir.dir === 'rtl' };
    const containerClasses = { 'expanded': this._mobileMenuExpanded };
    return html`
      <nav part="nav" class="${classMap(navClasses)}" aria-label="${this.#setNavOrder()}">
        ${this.#logoCopy}
        <div id="container" part="container" class="${classMap(containerClasses)}">
          <slot name="logo" id="logo"></slot>
          <button aria-controls="container" aria-expanded="${this._mobileMenuExpanded}" @click="${this.#toggleMobileMenu}"><slot name="mobile-menu">Menu</slot></button>
          <slot name="nav"></slot>
          <div id="cta" part="cta">
            <rh-context-provider color-palette="${this._ctaColorPalette}">
              <slot name="cta"><slot>
            </rh-context-provider>
          </div>
        </div>
      </nav>
      <rh-navigation-secondary-overlay></rh-navigation-secondary-overlay>
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
    if (dropdown && RhNavigationSecondary.isDropdown(dropdown)) {
      this.close();
      this.#expand(index);
      dropdown?.querySelector('a')?.focus();
      this._overlay.open = true;
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
   * @param event - {SecondaryNavDropdownExpandEvent}
   * @return {void}
   */
  @bound
  private _dropdownChangeHandler(event: Event): void {
    if (event instanceof SecondaryNavDropdownExpandEvent) {
      const index = this.#getDropdownIndex(event.target as Element);
      if (index === null || index === undefined) {
        return;
      }
      this.close();
      if (event.expanded) {
        this.#expand(index);
      }
      if (!this._nav?.classList.contains('compact')) {
        this.dispatchEvent(new SecondaryNavOverlayChangeEvent(event.expanded, event.toggle));
      }
    }
  }

  /**
   * Handles when focus changes outside of the navigation
   * If _compact is set, close the mobileMenu
   * Closes all dropdowns and toggles overlay to closed
   * @param event {FocusEvent}
   */
  @bound
  private _focusOutHandler(event: FocusEvent) {
    const target = event.relatedTarget as HTMLElement;
    if (target?.closest('rh-navigation-secondary, rh-secondary-nav') === this || target === null) {
      // if the focus is still inside the rh-navigation-secondary exit
      return;
    } else {
      if (this._compact) {
        this._mobileMenuExpanded = false;
      }
      this.close();
      this._overlay.open = false;
    }
  }

  /**
   * Handles when the overlay receives a click event
   * Closes all dropdowns and toggles overlay to closed
   * If _compact then closes mobile menu to closed
   * @param event {PointerEvent}
   */
  @bound
  private _overlayClickHandler() {
    this.close();
    this._overlay.open = false;
    if (this._compact) {
      this._mobileMenuExpanded = false;
    }
  }

  /**
   * When _compact value is changed
   * Get all open navMenus
   * If _compact is true, open mobile menu
   * If _compact is false, close mobile menu and close overlay
   * @param oldVal {boolean | undefined}
   * @param newVal {boolean | undefined}
   * @returns {void}
   */
  private __compactChanged(oldVal?: boolean | undefined, newVal?: boolean | undefined): void {
    if (newVal === undefined || newVal === oldVal) {
      return;
    }
    const dropdownsOpen = this.#getOpenDropdowns().length;

    if (newVal === true) {
      // Switching to Mobile
      if (dropdownsOpen > 0) {
        this._mobileMenuExpanded = true;
      }
      // CTA will be on lightest background in dropdown
      this._ctaColorPalette = 'lightest';
    } else {
      this._mobileMenuExpanded = false;
      // Switching to Desktop
      if (dropdownsOpen === 0) {
        if (this._overlay) {
          this._overlay.open = false;
        }
      }
      // Match nav bar color scheme
      this._ctaColorPalette = this.colorPalette;
    }
  }

  /**
   * Closes dropdown menu on keydown, then places
   * focus on last button clicked
   * @param event {KeyboardEvent}
   */
  @bound
  private _keyboardControls(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape':
        if (this._compact) {
          this._mobileMenuExpanded = false;
          this._mobileMenuButton?.focus();
        } else {
          const open = this.#getOpenDropdowns();
          open[0].querySelector('a')?.focus();
        }
        this.close();
        this._overlay.open = false;
        break;
      default:
        break;
    }
  }

  /**
   * Finds all open dropdowns
   * @returns {RhNavigationSecondaryDropdown[]}
   */
  #getOpenDropdowns(): RhNavigationSecondaryDropdown[] {
    const dropdowns = this.#allDropdowns();
    const openDropdowns: RhNavigationSecondaryDropdown[] = [];
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
  #getDropdownIndex(element: Element | null): void | number {
    if (!RhNavigationSecondary.isDropdown(element)) {
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
   * @returns {void | RhNavigationSecondaryDropdown}
   */
  #dropdownByIndex(index: number): void | RhNavigationSecondaryDropdown {
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
    if (dropdown && RhNavigationSecondary.isDropdown(dropdown)) {
      this.#openDropdown(dropdown);
    }
  }

  /**
   * Gets all dropdowns
   * @returns {RhNavigationSecondaryDropdown[]}
   */
  #allDropdowns(): RhNavigationSecondaryDropdown[] {
    return Array.from(this.querySelectorAll('rh-navigation-secondary-dropdown, rh-secondary-nav-dropdown')).filter(RhNavigationSecondary.isDropdown);
  }

  /**
   * Sets property expanded=false on dropdown given
   * @param dropdown {RhNavigationSecondaryDropdown}
   * @returns {void}
   */
  #closeDropdown(dropdown: RhNavigationSecondaryDropdown): void {
    if (dropdown.expanded === false) {
      return;
    }
    dropdown.expanded = false;
  }

  /**
   * Sets property expanded=true on dropdown given
   * @param dropdown {RhNavigationSecondaryDropdown}
   * @returns {void}
   */
  #openDropdown(dropdown: RhNavigationSecondaryDropdown): void {
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
  private _toggleNavOverlay(event: Event) {
    if (event instanceof SecondaryNavOverlayChangeEvent) {
      if (this.contains(event.toggle)) {
        this._overlay.open = event.open;
      }
    }
  }

  /**
   * Upgrades the aria attributes on upgrade
   * @returns {void}
  */
  #updateAccessibility(): void {
    // remove role="navigation" from host on upgrade
    this.removeAttribute('role');
    // remove aria-labelledby from slotted `<ul>` on upgrade
    const nav = this.querySelector(':is([slot="nav"]):is(ul)');
    nav?.removeAttribute('aria-labelledby');
  }

  /**
   * Toggles the mobile menu from `@click` of the _mobileMenuButton
   */
  #toggleMobileMenu() {
    if (this._mobileMenuExpanded) {
      this._mobileMenuExpanded = false;
    } else {
      this._mobileMenuExpanded = true;
    }
    this.dispatchEvent(new SecondaryNavOverlayChangeEvent(this._mobileMenuExpanded, this));
  }

  /**
   * Set the aria label on the custom tag to designate the nav as main or secondary based on attributes set by the content author
   * @returns 'main' || 'secondary'
   */
  #setNavOrder() {
    return this.mainNav ? 'main' : 'secondary';
  }
}

@customElement('rh-secondary-nav')
class RhSecondaryNav extends RhNavigationSecondary {
  #logger = new Logger(this);

  constructor() {
    super();
    this.#logger.warn('rh-secondary-nav is deprecated. Use rh-navigation-secondary instead.');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-secondary': RhNavigationSecondary;
    'rh-secondary-nav': RhSecondaryNav;
  }
}
