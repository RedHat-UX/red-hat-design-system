import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { state } from 'lit/decorators/state.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { ComposedEvent } from '@patternfly/pfe-core';
// import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import '@rhds/elements/rh-surface/rh-surface.js';

import './rh-main-navigation-menu-section.js';
import './rh-main-navigation-overlay.js';

import {
  RhMainNavigationDropdown,
  NavigationMainDropdownExpandEvent,
} from './rh-main-navigation-dropdown.js';

import { DirController } from '../../lib/DirController.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

export class NavigationMainOverlayChangeEvent extends ComposedEvent {
  constructor(
    public open: boolean,
    public toggle: HTMLElement
  ) {
    super('overlay-change');
  }
}

export type NavPalette = Extract<ColorPalette, (
  | 'lighter'
  | 'dark'
)>;

import styles from './rh-main-navigation.css';

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
 * The Main navigation is used to connect a series of pages together. It displays wayfinding content and links relevant to the page it is placed on. It should be used in conjunction with the [primary navigation](../navigation-primary).
 *
 * @summary Propagates related content across a series of pages
 * @slot logo           - Logo added to the main nav bar, expects `<a>Text</a> | <a><svg/></a> | <a><img/></a>` element
 * @slot nav            - Navigation list added to the main nav bar, expects `<ul>` element
 * @slot cta            - Nav bar level CTA, expects `<rh-cta>` element
 * @slot mobile-menu    - Text label for the mobile menu button, for l10n. Defaults to "Menu"
 * @csspart nav         - container, `<nav>` element
 * @csspart container   - container, `<div>` element
 * @csspart cta         - container, `<div>` element
 * @fires {NavigationMainOverlayChangeEvent} overlay-change -
 *                                         Fires when an dropdown is opened or closed in desktop
 *                                         view or when the mobile menu button is toggled in mobile
 *                                         view.
 * @cssprop {<integer>} --rh-main-navigation-z-index - z-index of the main-navigation {@default `102`}
 * @cssprop {<integer>} --rh-main-navigation-overlay-z-index - z-index of the main-navigation-overlay {@default `-1`}
 */
@customElement('rh-main-navigation')
export class RhMainNavigation extends LitElement {
  static readonly styles = [styles];

  /**
   * Color palette darker | lighter (default: lighter)
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette: NavPalette = 'lighter';

  @queryAssignedElements({ slot: 'nav' }) private _nav?: HTMLElement[];

  #logger = new Logger(this);

  #logoCopy: HTMLElement | null = null;

  /**
   * The accessible label for the <nav> element
   */
  #label = 'main';

  /** Is the element in an RTL context? */
  #dir = new DirController(this);

  /** Compact mode  */
  #compact = false;

  // #tabindex = new RovingTabindexController(this, {
  //   getItems: () => this._nav?.flatMap(slotted =>
  //     Array.from(slotted.querySelectorAll<HTMLAnchorElement>(`:is(rh-main-navigation-dropdown,
  //                                                                 rh-navigation-main-dropdown) > a,
  //                                                             [slot="nav"] > li > a`))) ?? [],
  // });

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
   * Checks if passed in element is a RhMainNavigationDropdown
   * @param element possibly an rh-main-navigation-dropdown
   */
  static isDropdown(element: Element | null): element is RhMainNavigationDropdown {
    return element instanceof RhMainNavigationDropdown;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.#compact = !this.#screenSize.matches.has('md');
    this.addEventListener('expand-request', this.#onExpandRequest);
    this.addEventListener('overlay-change', this.#onOverlayChange);
    this.addEventListener('focusout', this.#onFocusout);
    this.addEventListener('keydown', this.#onKeydown);
    this.#upgradeAccessibility();
  }

  render() {
    const expanded = this.mobileMenuExpanded;
    const rtl = this.#dir.dir === 'rtl';
    // CTA must always be 'lightest' on mobile screens
    const dropdownPalette = this.#compact ? 'lightest' : this.colorPalette;
    return html`
      <nav part="nav"
           class="${classMap({ compact: this.#compact, rtl })}"
           aria-label="${this.#label}">
        ${this.#logoCopy}
        <div id="container" part="container" class="${classMap({ expanded })}">
          <slot name="logo" id="logo"></slot>
          <button aria-controls="container"
                  aria-expanded="${String(expanded) as 'true' | 'false'}"
                  @click="${this.#toggleMobileMenu}"><slot name="mobile-menu">Menu</slot></button>
          <rh-surface color-palette="${dropdownPalette}">
            <slot name="nav" @slotchange="${() => this.#tabindex.updateItems()}"></slot>
            <div id="cta" part="cta">
              <slot name="cta"></slot>
            </div>
          </rh-surface>
        </div>
      </nav>
      <rh-main-navigation-overlay
          .open="${this.overlayOpen}"
          @click="${this.#onOverlayClick}"
      ></rh-main-navigation-overlay>
    `;
  }

  /**
   * When dropdown event is triggered gets dropdown index that triggered
   * event then closes all dropdowns.
   * If the event is to open a dropdown, run #expand(index)
   * If isMobile is set dispatch an NavigationMainOverlayChangeEvent event
   * to open the overlay
   * @param event when a dropdown tries to expand
   */
  #onExpandRequest(event: Event) {
    if (event instanceof NavigationMainDropdownExpandEvent) {
      const index = this.#getDropdownIndex(event.target as Element);
      if (index === null || index === undefined) {
        return;
      }
      this.close();
      if (event.expanded) {
        this.#expand(index);
      }
      if (this.#screenSize.matches.has('md')) {
        this.dispatchEvent(new NavigationMainOverlayChangeEvent(event.expanded, event.toggle));
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
    if (target?.closest('rh-main-navigation, rh-navigation-main') === this || target === null) {
      // if the focus is still inside the rh-main-navigation exit
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
        } else {
          this.#tabindex.activeItem?.focus();
        }
        this.close();
        this.overlayOpen = false;
        break;
      }
      case 'Tab':
        this.#onTabEvent(event);
        break;
      default:
        break;
    }
  }

  #onTabEvent(event: KeyboardEvent) {
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
        this.overlayOpen = false;
      }
    } else {
      // is the target the last focusableChildren element in the dropdown
      const lastFocusable = focusableChildren[focusableChildren.length - 1] === target;
      if (!lastFocusable) {
        return;
      }
      event.preventDefault();
      this.close();
      this.overlayOpen = false;
      this.#tabindex.setActiveItem(this.#tabindex.nextItem);
      this.#tabindex.activeItem?.focus();
    }
  }

  /**
   * Gets all dropdowns and finds the element given and returns its index
   * @param element dropdown element
   */
  #getDropdownIndex(element: Element | null): void | number {
    if (!RhMainNavigation.isDropdown(element)) {
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
  #dropdownByIndex(index: number): void | RhMainNavigationDropdown {
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
    if (dropdown && RhMainNavigation.isDropdown(dropdown)) {
      const link = dropdown.querySelector('a');
      if (link) {
        this.#tabindex.setActiveItem(link);
      }
      this.#openDropdown(dropdown);
    }
  }

  /**
   * Gets all dropdowns
   */
  #allDropdowns(): RhMainNavigationDropdown[] {
    return Array.from(
      this.querySelectorAll('rh-main-navigation-dropdown, rh-navigation-main-dropdown')
    );
  }

  /**
   * Sets property expanded=false on dropdown given
   * @param dropdown to close
   */
  #closeDropdown(dropdown: RhMainNavigationDropdown): void {
    if (dropdown.expanded === false) {
      return;
    }
    dropdown.expanded = false;
  }

  /**
   * Sets property expanded=true on dropdown given
   * @param dropdown to open
   */
  #openDropdown(dropdown: RhMainNavigationDropdown): void {
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
    if (event instanceof NavigationMainOverlayChangeEvent) {
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
    // transfer the aria-label to the shadow <nav>
    if (this.hasAttribute('aria-label')) {
      this.#label = this.getAttribute('aria-label') ?? 'main';
      this.removeAttribute('aria-label');
    }
  }

  /**
   * Toggles the mobile menu from `@click` of the _mobileMenuButton
   */
  #toggleMobileMenu() {
    this.mobileMenuExpanded = !this.mobileMenuExpanded;
    this.dispatchEvent(new NavigationMainOverlayChangeEvent(this.mobileMenuExpanded, this));
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
      if (dropdown && RhMainNavigation.isDropdown(dropdown)) {
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

@customElement('rh-navigation-main')
class RhNavigationMain extends RhMainNavigation {
  #logger = new Logger(this);

  constructor() {
    super();
    this.#logger.warn('rh-navigation-main is deprecated. Use rh-main-navigation instead.');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-main-navigation': RhMainNavigation;
    'rh-navigation-main': RhNavigationMain;
  }
}
