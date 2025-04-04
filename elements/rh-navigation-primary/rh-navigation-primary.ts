import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { provide } from '@lit/context';
import { context } from './context.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';

import { RhNavigationPrimaryItem } from './rh-navigation-primary-item.js';
import './rh-navigation-primary-overlay.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-navigation-primary.css';

export type NavigationPrimaryPalette = Extract<ColorPalette, (
  | 'lightest'
  | 'darkest'
)>;

/**
 * The Primary navigation allows users to orient themselves and successfully move through web experiences. It is
 * persistent on every page to ensure a consistent user experience across our systems of websites.
 * @summary       Primary navigation
 * @slot          - Place hamburger menu links and dropdowns
 * @slot          event -
 *                Use this slot for event promotion.  Images such as SVGs and links are most often slotted here.
 *                Slot these items using the `<rh-navigation-primary-item slot="event">` element.
 * @slot          links -
 *                Use this slot for quick links to other sites not directly associated with the page the
 *                navigation is on.  Common use cases are developers docs and support. Slot these items using
 *                the `<rh-navigation-primary-item slot="links">` element.
 * @slot          dropdowns -
 *                Use this slot for search, for you, and account dropdowns. Slot these items using the
 *                `<rh-navigation-primary-item slot="dropdown" variant="dropdown">` element.
 * @cssprop       [--rh-navigation-primary-z-index, 102]
 *                The initial z-index for the primary navigation element, default is 102.
 */
@customElement('rh-navigation-primary')
@colorPalettes
@themable
export class RhNavigationPrimary extends LitElement {
  static readonly styles = [styles];

  #internals = InternalsController.of(this, { role: 'navigation' });

  #openPrimaryDropdowns = new Set<RhNavigationPrimaryItem>();

  #openSecondaryDropdowns = new Set<RhNavigationPrimaryItem>();

  #ro?: ResizeObserver;

  #hydrated = false;

  #slots = new SlotController(this,
                              'logo',
                              'summary',
                              'links',
                              'dropdowns',
                              null,
  );

  @provide({ context })
  @state() compact = true; // we should start in compact mode (mobile first)

  @state()
  private _overlayOpen = false;

  @query('#hamburger')
  private _hamburger!: HTMLDetailsElement;

  /**
   * Sets the mobile toggle (hamburger) text, used for translations, defaults to 'Menu'
   */
  @property({ attribute: 'mobile-toggle-label' }) mobileToggleLabel = 'Menu';

  /** Sets color context for child components, overrides parent context */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: NavigationPrimaryPalette;

  /**
   * Customize the default `aria-label` on the `<nav>` container.
   * Defaults to "main" if no attribute/property is set.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel = 'main';

  static focusableChildElements(parent: HTMLElement): NodeListOf<HTMLElement> {
    return parent.querySelectorAll(`a,
                                    button:not([disabled]),
                                    input:not([disabled]),
                                    select:not([disabled]),
                                    textarea:not([disabled]),
                                    [tabindex]:not([tabindex="-1"]):not([disabled]),
                                    details:not([disabled]),
                                    summary:not(:disabled)`);
  }

  constructor() {
    super();
    if (!isServer) {
      // TODO: Perf look into debouncing the resize observer
      // or look into using style observer: https://www.bram.us/2025/02/24/solved-by-styleobserver-element-matchcontainer/?ref=dailydev
      // lea verou style observer: https://github.com/LeaVerou/style-observer/
      this.#ro = new ResizeObserver(entries => {
        for (const entry of entries) {
          const [contentBoxSize] = entry.contentBoxSize;
          const oldState = this.compact;
          const newState = contentBoxSize.inlineSize < 1200;
          if (oldState !== newState) {
            this.compact = newState;
            if (this.#openPrimaryDropdowns.size === 0
              && this.#openSecondaryDropdowns.size === 0 && !this.compact) {
              this.#closeOverlay();
            }
          }
        }
      });
    }
  }

  protected firstUpdated(): void {
    // ensure we update initially on client hydration
    const _isHydrated = isServer && !this.hasUpdated;
    if (!_isHydrated) {
      this.#hydrated = true;
      this.compact = this.offsetWidth < 1200;
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    if (!isServer) {
      this.#ro?.observe(this);
      this.addEventListener('toggle', this.#onDropdownToggle);
      this.addEventListener('focusout', this.#onFocusout);
      this.addEventListener('keydown', this.#onKeydown);
      this.addEventListener('keyup', this.#onKeyup);
      this.#upgradeAccessibility();
      this.#internals.ariaLabel = this.accessibleLabel;
    }
  }

  render() {
    const { compact } = this;
    return html`
      <div id="container" class="${classMap({ compact, dehydrated: !this.#hydrated })}">
        <div id="bar">
          <div id="logo">
            <slot name="logo">
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 613 145" height="30" width="125">
                  <title>Red Hat</title>
                  <path fill="var(--rh-color-brand-red, #ee0000)" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78"/>
                  <path d="M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33l3.66-9.06A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45,12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42Z"/>
                  <path fill="var(--rh-color-text-primary, #151515)" d="M579.74,92.8c0,11.89,7.15,17.67,20.19,17.67a52.11,52.11,0,0,0,11.89-1.68V95a24.84,24.84,0,0,1-7.68,1.16c-5.37,0-7.36-1.68-7.36-6.73V68.3h15.56V54.1H596.78v-18l-17,3.68V54.1H568.49V68.3h11.25Zm-53,.32c0-3.68,3.69-5.47,9.26-5.47a43.12,43.12,0,0,1,10.1,1.26v7.15a21.51,21.51,0,0,1-10.63,2.63c-5.46,0-8.73-2.1-8.73-5.57m5.2,17.56c6,0,10.84-1.26,15.36-4.31v3.37h16.82V74.08c0-13.56-9.14-21-24.39-21-8.52,0-16.94,2-26,6.1l6.1,12.52c6.52-2.74,12-4.42,16.83-4.42,7,0,10.62,2.73,10.62,8.31v2.73a49.53,49.53,0,0,0-12.62-1.58c-14.31,0-22.93,6-22.93,16.73,0,9.78,7.78,17.24,20.19,17.24m-92.44-.94h18.09V80.92h30.29v28.82H506V36.12H487.93V64.41H457.64V36.12H439.55ZM370.62,81.87c0-8,6.31-14.1,14.62-14.1A17.22,17.22,0,0,1,397,72.09V91.54A16.36,16.36,0,0,1,385.24,96c-8.2,0-14.62-6.1-14.62-14.09m26.61,27.87h16.83V32.44l-17,3.68V57.05a28.3,28.3,0,0,0-14.2-3.68c-16.19,0-28.92,12.51-28.92,28.5a28.25,28.25,0,0,0,28.4,28.6,25.12,25.12,0,0,0,14.93-4.83ZM320,67c5.36,0,9.88,3.47,11.67,8.83H308.47C310.15,70.3,314.36,67,320,67M291.33,82c0,16.2,13.25,28.82,30.28,28.82,9.36,0,16.2-2.53,23.25-8.42l-11.26-10c-2.63,2.74-6.52,4.21-11.14,4.21a14.39,14.39,0,0,1-13.68-8.83h39.65V83.55c0-17.67-11.88-30.39-28.08-30.39a28.57,28.57,0,0,0-29,28.81M262,51.58c6,0,9.36,3.78,9.36,8.31S268,68.2,262,68.2H244.11V51.58Zm-36,58.16h18.09V82.92h13.77l13.89,26.82H292l-16.2-29.45a22.27,22.27,0,0,0,13.88-20.72c0-13.25-10.41-23.45-26-23.45H226Z"/>
                </svg>
              </a>
            </slot>
          </div>
          <details id="hamburger" @toggle="${this.#hamburgerToggle}">
            <summary>
              <rh-icon icon="menu-bars" set="ui"></rh-icon>
              <div id="summary">${this.mobileToggleLabel}</div>
              <rh-icon icon="caret-down" set="microns"></rh-icon>
            </summary>
            <div id="details-content" role="list">
              <slot></slot>
            </div>
          </details>
          <div id="secondary">
            <div id="event" role="list"><slot name="event"></slot></div>
            <div id="links" role="list"><slot name="links"></slot></div>
            <div id="dropdowns" role="list"><slot name="dropdowns"></slot></div>
          </div>
        </div>
      </div>
      <rh-navigation-primary-overlay
          .open="${this._overlayOpen}"
          @click="${this.#onOverlayClick}">
      </rh-navigation-primary-overlay>
    `;
  }

  /**
   * Upgrades the aria attributes on upgrade
   */
  #upgradeAccessibility(): void {
    // remove role="navigation" from host on upgrade
    this.removeAttribute('role');
    this.#internals.ariaLabel = this.accessibleLabel;
  }

  #openOverlay() {
    this._overlayOpen = true;
  }

  #closeOverlay() {
    this._overlayOpen = false;
  }

  #onOverlayClick() {
    this.#closePrimaryDropdowns();
    this.#closeSecondaryDropdowns();

    if (this.compact) {
      this.#closeHamburger();
    }

    this.#closeOverlay();
  }

  #primaryDropdowns(): RhNavigationPrimaryItem[] {
    return Array.from(
      this.querySelectorAll(
        'rh-navigation-primary-item[variant="dropdown"]:not([slot="dropdowns"])',
      )
    );
  }

  #secondaryDropdowns(): RhNavigationPrimaryItem[] {
    return Array.from(
      this.querySelectorAll(
        'rh-navigation-primary-item[variant="dropdown"][slot="dropdowns"]',
      )
    );
  }

  async #onDropdownToggle(event: Event) {
    const item = event.target as RhNavigationPrimaryItem;
    // if the event came from a secondary link in a compact mode we'll want to close the hamburger first if it is open
    const slottedSecondary = this.#slots.getSlotted('links', 'dropdowns');
    const secondaryEventToggle = slottedSecondary.find(node =>
      node.isEqualNode(item));

    if (item.open) {
      this.#closePrimaryDropdowns(item);
      this.#closeSecondaryDropdowns();

      if (secondaryEventToggle) {
        if (this.compact) {
          this.#closeHamburger();
        }
        this.#openSecondaryDropdowns.add(item);
      } else {
        this.#openPrimaryDropdowns.add(item);
      }
      this.#openOverlay();
    } else {
      if (secondaryEventToggle) {
        this.#openSecondaryDropdowns.delete(item);
        if (this.#openSecondaryDropdowns.size === 0 && (this.compact && !this._hamburger.open)) {
          this.#closeOverlay();
        }
      } else {
        this.#openPrimaryDropdowns.delete(item);
      }

      if (!this.compact
        && this.#openPrimaryDropdowns.size === 0
        && this.#openSecondaryDropdowns.size === 0) {
        this.#closeOverlay();
      }
    }
  }

  #onKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape': {
        if (this.#openPrimaryDropdowns.size > 0) {
          const [dropdown] = this.#openPrimaryDropdowns;
          dropdown.hide();
          dropdown.shadowRoot?.querySelector('summary')?.focus();
        } else if (this.#openSecondaryDropdowns.size > 0) {
          const [dropdown] = this.#openSecondaryDropdowns;
          dropdown.hide();
          dropdown.shadowRoot?.querySelector('summary')?.focus();
        } else if (this._hamburger.open) {
          this.#closeHamburger();
          this._hamburger.querySelector('summary')?.focus();
        }
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


  async #onFocusout(event: FocusEvent) {
    const target = event.relatedTarget as HTMLElement;
    if (target?.closest('rh-navigation-primary') === this || target === null) {
      // if the focus is still inside the rh-navigation-secondary exit
      return;
    } else {
      this.close();
    }
  }

  #onTabKeydown(event: KeyboardEvent) {
    // target is the element we are leaving with tab press
    const target = event.target as HTMLElement;
    // get target parent dropdown
    const primaryDropdowns = this.#primaryDropdowns();
    const secondaryDropdowns = this.#secondaryDropdowns();
    // target can be in one of the two dropdown collections, but only 1.
    const dropdownContainsTarget =
      primaryDropdowns.find(dropdown => dropdown.contains(target))
      ?? secondaryDropdowns.find(dropdown => dropdown.contains(target));
    if (dropdownContainsTarget) {
      const focusableChildElements =
        Array.from(RhNavigationPrimary.focusableChildElements(dropdownContainsTarget));

      if (focusableChildElements.length > 0) {
        const {
          0: firstChild,
          [focusableChildElements.length - 1]: lastChild,
        } = focusableChildElements;

        if (event.shiftKey) {
          if (event.shiftKey && firstChild === target) {
            return;
          }
          // if target is self, close self
          if (event.shiftKey && target === dropdownContainsTarget) {
            dropdownContainsTarget.hide();
            return;
          }
        } else {
          if (!firstChild) {
            return;
          }
          if (!lastChild) {
            return;
          } else {
            if (lastChild === target) {
              dropdownContainsTarget.hide();
              return;
            }
          }
        }
      } else {
        this.#closePrimaryDropdowns();
        this.#closeSecondaryDropdowns();
      }
    }
  }

  #onTabKeyup(event: KeyboardEvent) {
    if (this.compact && this._hamburger.open) {
      const secondaryDropdowns = this.#secondaryDropdowns();
      const target = event.target as HTMLElement;
      if (event.shiftKey && target === this) {
        this.#closeHamburger();
      } else {
        if (secondaryDropdowns.some(dropdown => dropdown.contains(target))) {
          this.#closeHamburger();
        }
      }
    }
  }

  /** close all open dropdowns in primary slot */
  #closePrimaryDropdowns(except?: RhNavigationPrimaryItem) {
    this.#openPrimaryDropdowns.forEach((dropdown: RhNavigationPrimaryItem) => {
      if (dropdown !== except) {
        dropdown.hide();
      }
    });
  }

  /** close all open dropdowns in secondary slot */
  #closeSecondaryDropdowns() {
    this.#openSecondaryDropdowns.forEach((dropdown: RhNavigationPrimaryItem) => {
      dropdown.hide();
    });
  }

  async #openHamburger() {
    this._hamburger.open = true;
    await this.updateComplete;
  }

  async #closeHamburger() {
    this._hamburger.open = false;
    await this.updateComplete;
  }

  #hamburgerToggle(event: Event) {
    if (event instanceof ToggleEvent) {
      if (event.newState === 'open') {
      // if we are compact mode and any secondary link dropdowns are open, close them
        if (this.compact && this.#openSecondaryDropdowns.size > 0) {
          this.#closeSecondaryDropdowns();
        }
        if (this.compact) {
          this.#openOverlay();
        }
      } else {
        if (this.#openPrimaryDropdowns.size > 0) {
          this.#closePrimaryDropdowns();
        }
        if (this.compact && this.#openSecondaryDropdowns.size === 0) {
          this.#closeOverlay();
        }
      }
    }
  }

  @observes('compact')
  protected compactChanged(oldVal: boolean, newVal: boolean) {
    // transition into desktop
    if (oldVal && !newVal) {
      this.#openHamburger();
    }
    // transition into compact
    if (!oldVal && newVal) {
      if (this.#openPrimaryDropdowns.size === 0) {
        this.#closeHamburger();
      }
    }
  }

  /**
   * Close Menus
   * @param skip Boolean - closes hamburger menu if true and in a small viewport, default false;
   */
  close(skip = false): void {
    if (this.#openPrimaryDropdowns.size > 0) {
      this.#closePrimaryDropdowns();
    } else if (this.#openSecondaryDropdowns.size > 0) {
      this.#closeSecondaryDropdowns();
    }
    if (this.compact && !skip) {
      this.#closeHamburger();
    }
    this.#closeOverlay();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-primary': RhNavigationPrimary;
  }
}
