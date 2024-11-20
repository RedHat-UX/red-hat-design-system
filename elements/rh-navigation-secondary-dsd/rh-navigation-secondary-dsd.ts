import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { ComposedEvent } from '@patternfly/pfe-core/core.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { DirController } from '../../lib/DirController.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import '@rhds/elements/rh-surface/rh-surface.js';

import {
  RhNavigationSecondaryDsdDropdown,
  NavigationSecondaryDsdDropdownEvent,
} from './rh-navigation-secondary-dsd-dropdown.js';
import './rh-navigation-secondary-dsd-menu.js';
import './rh-navigation-secondary-dsd-menu-section.js';
import './rh-navigation-secondary-dsd-overlay.js';

import styles from './rh-navigation-secondary-dsd.css';

export class SecondaryNavDsdOverlayChangeEvent extends ComposedEvent {
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

/**
 * Navigation Secondary Dsd
 * @slot - Place element content here
 */
@customElement('rh-navigation-secondary-dsd')
export class RhNavigationSecondaryDsd extends LitElement {
  static readonly styles = [styles];

  private static instances = new Set<RhNavigationSecondaryDsd>();

  static {
    if (!isServer) {
      globalThis.addEventListener('keyup', (event: KeyboardEvent) => {
        const { instances } = RhNavigationSecondaryDsd;
        for (const instance of instances) {
          instance._onKeyup(event);
        }
      }, { capture: false });
    }
  }

  static isDropdown(element: Element | null): element is RhNavigationSecondaryDsdDropdown {
    return element instanceof RhNavigationSecondaryDsdDropdown;
  }

  @state()
  private _compact = true;

  @state()
  private _overlayState = false;

  @state()
  private _hamburgerState = false;

  @query('#hamburger')
  private _hamburger!: HTMLDetailsElement;

  private ro?: ResizeObserver;

  private _internals = InternalsController.of(this, { role: 'navigation' });

  private _dir = new DirController(this);

  /**
   * Color palette darker | lighter (default: lighter)
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette: NavPalette = 'lighter';

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  private _openDropdowns = new Set<RhNavigationSecondaryDsdDropdown>();

  /**
   * Customize the default `aria-label` on the `<nav>` container.
   * Defaults to "secondary" if no attribute/property is set.
  */
  @property({ attribute: 'accessible-label' }) accessibleLabel = 'secondary';

  constructor() {
    super();
    if (!isServer) {
      // TODO: Perf look into debouncing the resize observer
      this.ro = new ResizeObserver(entries => {
        for (const entry of entries) {
          const old = this._compact;
          const cs = globalThis.getComputedStyle(entry.target);
          const [integerWidth] = cs.width.split('px');
          const newState = parseInt(integerWidth) <= 992;
          this._compact = newState;
          // only run if state changes
          if (old !== newState) {
            if (this._compact && this._openDropdowns.size === 0) {
              this._closeHamburger();
            } else {
              this._openHamburger();
            }
            this._toggleOverlay();
          }
        }
      });
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (!isServer) {
      this.ro?.observe(this);
      this.addEventListener('expand-request', this._onExpandRequest);
      this._upgradeAccessibility();
      this._internals.ariaLabel = this.accessibleLabel;
    }
  }

  disconnectedCallback(): void {
    if (!isServer) {
      this.ro?.disconnect();
    }
  }

  render() {
    const { on = '' } = this;
    const rtl = this._dir.dir === 'rtl';
    const classes = { [on]: !!on, on: true, compact: this._compact, rtl };
    return html`
      <nav id="container" class="${classMap(classes)}">
        <div id="bar">
          <div id="logo"><slot name="logo"></slot></div>
          <details id="hamburger" @toggle="${this._hamburgerToggle}">
            <summary>
              <slot name="mobile-nav">Menu</slot>
              <rh-icon icon="caret-down" set="ui"></rh-icon>
            </summary>
            <div id="nav-container" color-palette="lightest">
              <slot name="nav"></slot>
              <div id="cta">
                <slot name="cta"></slot>
              </div>
            </div>
          </details>
        </div>
      </nav>
      <rh-navigation-secondary-dsd-overlay
          ?open="${this._overlayState}"
          @click="${this._onOverlayClick}"
      ></rh-navigation-secondary-dsd-overlay> 
    `;
  }

  private _onKeyup(event: KeyboardEvent) {
    switch (event.key) {
      case 'Tab':
        this._onTabKeyup(event);
        break;
      default:
        break;
    }
  }

  private _onTabKeyup(event: KeyboardEvent) {
    // mobile menu is not open so do nothing
    if (!this._hamburgerState) {
      return;
    }
    const { target } = event;
    if (!this.contains(target as HTMLElement)) {
      // close hamburger
      this._closeHamburger();
      this._toggleOverlay();
    }
  }

  private _onExpandRequest(event: Event) {
    if (event instanceof NavigationSecondaryDsdDropdownEvent) {
      if (event.open) {
        this.close();
        this._openDropdowns.add(event.toggle);
      } else {
        this._openDropdowns.delete(event.toggle);
      }
      this._toggleOverlay();
    }
  }

  private async _openHamburger() {
    this._hamburgerState = true;
    await this.updateComplete;
    this._hamburger.open = true;
  }

  private async _closeHamburger() {
    this._hamburgerState = false;
    await this.updateComplete;
    this._hamburger.open = false;
  }

  private _hamburgerToggle() {
    this._hamburgerState = this._hamburger.open;
    this._toggleOverlay();
  }

  private _onOverlayClick() {
    this.close();
    if (this._hamburgerState && this._compact) {
      this._closeHamburger();
    }
    this._toggleOverlay();
  }

  private _upgradeAccessibility() {
    // remove role="navigation" from host on upgrade
    this.removeAttribute('role');
    // remove aria-labelledby from slotted `<ul>` on upgrade
    this.querySelector(':is([slot="nav"]):is(ul)')?.removeAttribute('aria-labelledby');
    this._internals.ariaLabel = this.accessibleLabel;
  }

  private _toggleOverlay() {
    const old = this._overlayState;

    // compact overlay is based on hamburger menu state
    if (this._compact) {
      this._overlayState = this._hamburgerState;
    } else {
      // wide overlay is based on open dropdown set size
      this._overlayState = this._openDropdowns.size > 0 ? true : false;
    }

    if (old !== this._overlayState) {
      this.dispatchEvent(
        new SecondaryNavDsdOverlayChangeEvent(this._overlayState, this._hamburger)
      );
    }
  }

  public open(index: number): void {
    const slot = this.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="nav"]');
    if (slot) {
      const [slotted] = slot.assignedElements({ flatten: true });
      const dropdowns = slotted?.querySelectorAll('rh-navigation-secondary-dsd-dropdown');
      if (dropdowns.length === 0) {
        return;
      }
      if (this._compact) {
        this._openHamburger();
      }
      const dropdown = dropdowns[index];
      dropdown.open();
    }
  }

  public close(): void {
    for (const dropdown of this._openDropdowns) {
      // close all dropdowns in set
      dropdown.close();
      this._openDropdowns.delete(dropdown);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-secondary-dsd': RhNavigationSecondaryDsd;
  }
}
