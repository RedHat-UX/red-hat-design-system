import { LitElement, html } from 'lit';
import { customElement, query, property } from 'lit/decorators.js';

import { pfelement, bound, observed } from '@patternfly/pfe-core/decorators.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import './rh-secondary-nav-container.js';
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
 * Secondary Nav
 * @slot - Place element content here
 */
@customElement('rh-secondary-nav') @pfelement()
export class RhSecondaryNav extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  #logger = new Logger(this);

  @query('rh-secondary-nav-overlay') _overlay: RhSecondaryNavOverlay | null;

  @observed
  @property({ type: Boolean, reflect: true, attribute: 'is-mobile' }) isMobile = false;

  static isDropdown(element: Element|null): element is RhSecondaryNavDropdown {
    return element instanceof RhSecondaryNavDropdown;
  }

  protected matchMedia = new MatchMediaController(this, `(max-width: ${tabletLandscapeBreakpoint})`, {
    onChange: ({ matches }) => {
      this.isMobile = matches;
    }
  });

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('change', this._changeHandler as EventListener);
    this.addEventListener('overlay-change', this._toggleNavOverlay as EventListener);
  }

  firstUpdated() {
    // after update the overlay should be available to attach an event listener to
    this._overlay?.addEventListener('click', this._overlayClickHandler as EventListener);
    this.isMobile = (this.offsetWidth <= parseInt(tabletLandscapeBreakpoint.toString().split('px')[0]));
  }

  render() {
    return html`
      <slot name="nav"></slot>
      <rh-secondary-nav-overlay hidden></rh-secondary-nav-overlay>
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

  public close() {
    const dropdowns = this.#allDropdowns();
    dropdowns.forEach(dropdown => this.#collapseDropdown(dropdown));
  }

  @bound
  private _changeHandler(event: SecondaryNavDropdownChangeEvent) {
    const index = this.#getIndex(event.target as Element);
    this.close();
    if (event.expanded) {
      this.expand(index);
    }
  }

  @bound
  private _overlayClickHandler(event: Event) {
    if (event.target) {
      this.close();
      this._overlay?.toggleNavOverlay(event.target as HTMLElement, false, this);
    }
  }

  private _isMobileChanged(oldVal?: boolean | undefined, newVal?: boolean | undefined) {
    if (newVal === undefined) {
      return;
    }
    if (newVal !== oldVal) {
      const navContainerExpanded = this.querySelector('rh-secondary-nav-container')?.hasAttribute('expanded');
      const navMenusOpen = this.querySelectorAll('rh-secondary-nav-dropdown[expanded]').length;
      if (this._overlay?.open && navContainerExpanded) {
        if (newVal === false || newVal === undefined) {
          // switch to desktop from mobile with menu open
          if (navMenusOpen === 0) {
            // if there are no navMenusOpen close the overlay
            this._overlay?.toggleNavOverlay(this._overlay, false, this);
          }
        }
      } else if (!this._overlay?.open && navContainerExpanded) {
        // if the overlay is not open and the container is expanded open overlay
        this._overlay?.toggleNavOverlay(this._overlay, true, this);
      }
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

  @bound
  private _toggleNavOverlay(event: SecondaryNavOverlayEvent) {
    if (this.contains(event.toggle)) {
      this._overlay?.toggleNavOverlay(event.toggle, event.open, this);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-secondary-nav': RhSecondaryNav;
  }
}
