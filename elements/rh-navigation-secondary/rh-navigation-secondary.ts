import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { state } from 'lit/decorators/state.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { ComposedEvent } from '@patternfly/pfe-core';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import '@rhds/elements/rh-surface/rh-surface.js';

import './rh-navigation-secondary-menu-section.js';
import './rh-navigation-secondary-overlay.js';

import {
  RhNavigationSecondaryDropdown,
  SecondaryNavDropdownExpandEvent,
} from './rh-navigation-secondary-dropdown.js';

import { DirController } from '../../lib/DirController.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

export class SecondaryNavOverlayChangeEvent extends ComposedEvent {
  constructor(
    public open: boolean,
    public toggle: HTMLElement
  ) {
    super('overlay-change');
  }
}

import styles from './rh-navigation-secondary.css';

/* TODO: Abstract this out to a shareable function, should RTI handle something similar? */
function focusableChildElements(parent: HTMLElement): NodeListOf<HTMLElement> {
  return parent.querySelectorAll(`a,
                                  button:not([disabled]),
                                  input:not([disabled]),
                                  select:not([disabled]),
                                  textarea:not([disabled]),
                                  [tabindex]:not([tabindex="-1"]):not([disabled]),
                                  details:not([disabled]),
                                  summary:not(:disabled)`);
}

/**
 * The Secondary navigation is used to connect a series of pages together. It displays wayfinding content and links relevant to the page it is placed on. It should be used in conjunction with the [primary navigation](../navigation-primary).
 * @summary Propagates related content across a series of pages
 * @slot logo           - Logo added to the main nav bar, expects `<a>Text</a> | <a><svg/></a> | <a><img/></a>` element
 * @slot nav            - Navigation list added to the main nav bar, expects `<ul>` element
 * @slot cta            - Nav bar level CTA, expects `<rh-cta>` element
 * @slot mobile-menu    - Text label for the mobile menu button, for l10n. Defaults to "Menu"
 * @csspart nav         - container, `<nav>` element
 * @csspart container   - container, `<div>` element
 * @csspart cta         - container, `<div>` element
 * @fires {SecondaryNavOverlayChangeEvent} overlay-change -
 *                                         Fires when an dropdown is opened or closed in desktop
 *                                         view or when the mobile menu button is toggled in mobile
 *                                         view.
 * @cssprop {<integer>} [--rh-navigation-secondary-z-index=102] - z-index of the navigation-secondary
 * @cssprop {<integer>} [--rh-navigation-secondary-overlay-z-index=-1] - z-index of the navigation-secondary-overlay
 */
@customElement('rh-navigation-secondary')
@colorContextProvider()
@colorContextConsumer
export class RhNavigationSecondary extends LitElement {
  static readonly styles = [styles];

  private static instances = new Set<RhNavigationSecondary>();

  static {
    globalThis.addEventListener('keyup', (event: KeyboardEvent) => {
      const { instances } = RhNavigationSecondary;
      for (const instance of instances) {
        instance.#onKeyup(event);
      }
    }, { capture: false });
  }


  #logger = new Logger(this);
  #logoCopy: HTMLElement | null = null;

  /** Is the element in an RTL context? */
  #dir = new DirController(this);

  /** Compact mode  */
  #compact = false;

  #internals = InternalsController.of(this, { role: 'navigation' });

  get #computedPalette() {
    switch (this.colorPalette) {
      case 'lighter':
      case 'dark':
        return this.colorPalette;
      case 'light':
      case 'lightest':
        return 'lighter';
      case 'darker':
      case 'darkest':
        return 'dark';
      default:
        return 'lightest';
    }
  }

  /**
   * Color palette dark | lighter (default: lighter)
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette: ColorPalette = 'lighter';


  @queryAssignedElements({ slot: 'nav' }) private _nav?: HTMLElement[];

  /**
   * Customize the default `aria-label` on the `<nav>` container.
   * Defaults to "secondary" if no attribute/property is set.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel = 'secondary';

  /**
   * `mobileMenuExpanded` property is toggled when the mobile menu button is clicked,
   * a focusout event occurs, or on an overlay click event.  It also switches state
   * when the viewport changes breakpoints depending on if a dropdown is open or not.
   */
  @state() private mobileMenuExpanded = false;

  @state() private overlayOpen = false;

  /**
   * ScreenSizeController effects callback to set #compact
   * When viewport size changes,
   *  - If viewport is mobile, open mobile menu
   *  - otherwise, close mobile menu and close overlay
   */
  #screenSize = new ScreenSizeController(this, 'md', {
    onChange: matches => {
      this.#compact = !matches;
      const dropdownsOpen = this.#allDropdowns().some(x => x.expanded);
      this.mobileMenuExpanded = this.#compact && dropdownsOpen;
      this.overlayOpen = dropdownsOpen;
    },
  });

  /**
   * Checks if passed in element is a RhNavigationSecondaryDropdown
   * @param element possibly an rh-navigation-secondary-dropdown
   */
  static isDropdown(element: Element | null): element is RhNavigationSecondaryDropdown {
    return element instanceof RhNavigationSecondaryDropdown;
  }

  async connectedCallback() {
    super.connectedCallback();
    RhNavigationSecondary.instances.add(this);
    this.#compact = !this.#screenSize.matches.has('md');
    this.addEventListener('expand-request', this.#onExpandRequest);
    this.addEventListener('overlay-change', this.#onOverlayChange);
    this.addEventListener('focusout', this.#onFocusout);
    this.addEventListener('keydown', this.#onKeydown);
    this.#upgradeAccessibility();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    RhNavigationSecondary.instances.delete(this);
  }

  render() {
    const expanded = this.mobileMenuExpanded;
    const rtl = this.#dir.dir === 'rtl';
    // CTA must always be 'lightest' on mobile screens
    const dropdownPalette = this.#compact ? 'lightest' : this.#computedPalette;
    return html`
      <div part="nav"
           class="${classMap({ compact: this.#compact, rtl })}">
        ${this.#logoCopy}
        <div id="container" part="container" class="${classMap({ expanded })}">
          <slot name="logo" id="logo"></slot>
          <button aria-controls="container"
                  aria-expanded="${String(expanded) as 'true' | 'false'}"
                  @click="${this.#toggleMobileMenu}"><slot name="mobile-menu">Menu</slot></button>
          <rh-surface color-palette="${dropdownPalette}">
            <slot name="nav"></slot>
            <div id="cta" part="cta">
              <slot name="cta"></slot>
            </div>
          </rh-surface>
        </div>
      </div>
      <rh-navigation-secondary-overlay
          .open="${this.overlayOpen}"
          @click="${this.#onOverlayClick}"
      ></rh-navigation-secondary-overlay>
    `;
  }

  /**
   * When dropdown event is triggered gets dropdown index that triggered
   * event then closes all dropdowns.
   * If the event is to open a dropdown, run #expand(index)
   * If isMobile is set dispatch an SecondaryNavOverlayChangeEvent event
   * to open the overlay
   * @param event when a dropdown tries to expand
   */
  #onExpandRequest(event: Event) {
    if (event instanceof SecondaryNavDropdownExpandEvent) {
      const index = this.#getDropdownIndex(event.target as Element);
      if (index === null || index === undefined) {
        return;
      }
      this.close();
      if (event.expanded) {
        this.#expand(index);
      }
      if (this.#screenSize.matches.has('md')) {
        this.dispatchEvent(new SecondaryNavOverlayChangeEvent(event.expanded, event.toggle));
      }
    }
  }

  /**
   * Handles when focus changes outside of the navigation
   * If _compact is set, close the mobileMenu
   * Closes all dropdowns and toggles overlay to closed
   * @param event focus
   */
  #onFocusout(event: FocusEvent) {
    const target = event.relatedTarget as HTMLElement;
    if (target?.closest('rh-navigation-secondary') === this || target === null) {
      // if the focus is still inside the rh-navigation-secondary exit
      return;
    } else {
      if (this.#screenSize.matches.has('md')) {
        this.mobileMenuExpanded = false;
      }
      this.close();
      this.overlayOpen = false;
    }
  }

  /**
   * Handles when the overlay receives a click event
   * Closes all dropdowns and toggles overlay to closed
   * If _compact then closes mobile menu to closed
   */
  #onOverlayClick() {
    this.close();
    this.overlayOpen = false;
    if (!this.#screenSize.matches.has('md')) {
      this.mobileMenuExpanded = false;
    }
  }

  /**
   * Closes dropdown menu on keydown, then places
   * focus on last button clicked
   * @param event keydown
   */
  #onKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape': {
        if (!this.#screenSize.matches.has('md')) {
          this.mobileMenuExpanded = false;
          this.shadowRoot?.querySelector('button')?.focus?.();
        }
        this.close();
        this.overlayOpen = false;
        break;
      }
      case 'Tab':
        this.#onTabKeydown(event);
        break;
      default:
        break;
    }
  }

  #onKeyup(event: KeyboardEvent) {
    switch (event.key) {
      case 'Tab':
        this.#onTabKeyup(event);
        break;
      default:
        break;
    }
  }

  #onTabKeyup(event: KeyboardEvent) {
    if (!this.mobileMenuExpanded) {
      return;
    }
    const { target } = event;
    if (!this.contains(target as HTMLElement)) {
      this.#toggleMobileMenu();
      this.overlayOpen = false;
    }
  }

  #onTabKeydown(event: KeyboardEvent) {
    // target is the element we are leaving with tab press
    const target = event.target as HTMLElement;
    // get target parent dropdown
    const dropdowns = this.#allDropdowns();
    const dropdownParent = dropdowns.find(dropdown => dropdown.contains(target));
    if (!dropdownParent) {
      return;
    }
    const focusableChildren = focusableChildElements(dropdownParent);
    if (!focusableChildren) {
      return;
    }
    if (event.shiftKey) {
      const firstFocusable = focusableChildren[0] === target;
      if (!firstFocusable) {
        return;
      } else {
        this.close();
        if (!this.mobileMenuExpanded) {
          this.overlayOpen = false;
        }
      }
    } else {
      // is the target the last focusableChildren element in the dropdown
      const lastFocusable = focusableChildren[focusableChildren.length - 1] === target;
      if (!lastFocusable) {
        return;
      }
      this.close();
      if (!this.mobileMenuExpanded) {
        this.overlayOpen = false;
      }
    }
  }

  /**
   * Gets all dropdowns and finds the element given and returns its index
   * @param element dropdown element
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
   * @param index of the dropdown
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
   * @param index to expand
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
   */
  #allDropdowns(): RhNavigationSecondaryDropdown[] {
    return Array.from(
      this.querySelectorAll('rh-navigation-secondary-dropdown')
    );
  }

  /**
   * Sets property expanded=false on dropdown given
   * @param dropdown to close
   */
  #closeDropdown(dropdown: RhNavigationSecondaryDropdown): void {
    if (dropdown.expanded === false) {
      return;
    }
    dropdown.expanded = false;
  }

  /**
   * Sets property expanded=true on dropdown given
   * @param dropdown to open
   */
  #openDropdown(dropdown: RhNavigationSecondaryDropdown): void {
    if (dropdown.expanded === true) {
      return;
    }
    dropdown.expanded = true;
  }

  /**
   * Toggles the overlay triggered by eventListener
   * @param event secondary nav overlay change event
   */
  #onOverlayChange(event: Event) {
    if (event instanceof SecondaryNavOverlayChangeEvent) {
      if (this.contains(event.toggle)) {
        this.overlayOpen = event.open;
      }
    }
  }

  /**
   * Upgrades the aria attributes on upgrade
   */
  #upgradeAccessibility(): void {
    // remove role="navigation" from host on upgrade
    this.removeAttribute('role');
    // remove aria-labelledby from slotted `<ul>` on upgrade
    this.querySelector(':is([slot="nav"]):is(ul)')?.removeAttribute('aria-labelledby');
    this.#internals.ariaLabel = this.accessibleLabel;
  }

  /**
   * Toggles the mobile menu from `@click` of the _mobileMenuButton
   */
  #toggleMobileMenu() {
    this.mobileMenuExpanded = !this.mobileMenuExpanded;
    this.dispatchEvent(new SecondaryNavOverlayChangeEvent(this.mobileMenuExpanded, this));
  }

  /**
   * Opens a specific dropdown based on index.
   * Closes all open dropdowns before opening specified.
   * Toggles overlay to open
   * @param index - index of the dropdown to open
   */
  public open(index: number): void {
    if (index != null) {
      const dropdown = this.#dropdownByIndex(index);
      if (dropdown && RhNavigationSecondary.isDropdown(dropdown)) {
        this.close();
        this.#expand(index);
        dropdown?.querySelector('a')?.focus();
        this.overlayOpen = true;
      }
    }
  }

  /**
   * Closes all open dropdowns
   */
  public close(): void {
    this.#allDropdowns()
        .forEach(dropdown =>
          this.#closeDropdown(dropdown));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-secondary': RhNavigationSecondary;
  }
}
