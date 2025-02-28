import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { provide } from '@lit/context';
import { context,
  type RhNavigationItemContext,
} from '@rhds/elements/rh-navigation-item/context.js';

import { DirController } from '../../lib/DirController.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';


import { ComposedEvent } from '@patternfly/pfe-core/core.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import {
  RhNavigationItem,
  RhNavigationItemExpandEvent,
} from '@rhds/elements/rh-navigation-item/rh-navigation-item.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-surface/rh-surface.js';

import styles from './rh-navigation-primary.css';

export class NavigationPrimaryChangeEvent extends ComposedEvent {
  constructor(
    public open: boolean,
    public toggle: HTMLElement
  ) {
    super('overlay-change');
  }
}

/**
 * Navigation Primary
 * @slot - Place element content here
 */
@customElement('rh-navigation-primary')
export class RhNavigationPrimary extends LitElement {
  static readonly styles = [styles];

  #internals = InternalsController.of(this, { role: 'navigation' });

  #dir = new DirController(this);

  #openPrimaryDropdowns = new Set<RhNavigationItem>();
  #openSecondaryDropdowns = new Set<RhNavigationItem>();

  #overlayOpen = false;

  #ro?: ResizeObserver;

  #slots = new SlotController(
    this, 'logo', 'summary', 'links', 'dropdowns', null);

  @provide({ context }) private ctx = this.#makeContext();

  @state() compact = true; // we should start in compact mode (mobile first)

  @state()
  private _overlayState = false;

  @query('#hamburger')
  private _hamburger!: HTMLDetailsElement;

  /**
   * Color palette darker | lightest (default: darkest)
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette: ColorPalette = 'darkest';

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  /**
   * Customize the default `aria-label` on the `<nav>` container.
   * Defaults to "main" if no attribute/property is set.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel = 'main';

  constructor() {
    super();
    if (!isServer) {
      // TODO: Perf look into debouncing the resize observer
      // or look into using style observer: https://www.bram.us/2025/02/24/solved-by-styleobserver-element-matchcontainer/?ref=dailydev
      this.#ro = new ResizeObserver(entries => {
        for (const entry of entries) {
          const [contentBoxSize] = entry.contentBoxSize;
          const oldState = this.compact;
          const newState = contentBoxSize.inlineSize < 1200;
          if (oldState !== newState) {
            this.compact = newState;
          }
        }
      });
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    if (!isServer) {
      this.#ro?.observe(this);
      this.addEventListener('expand', this.#onExpand);
      this.#upgradeAccessibility();
      this.#internals.ariaLabel = this.accessibleLabel;
    }
  }

  render() {
    const rtl = this.#dir.dir === 'rtl';
    const { on = '' } = this;
    const classes = { compact: this.compact, rtl, on: true, [on]: !!on };
    return html`
      <nav id="container" class="${classMap(classes)}">
        <div id="bar">
          <div id="logo">
            <slot name="logo">
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 613 145" height="30" width="125">
                  <defs>
                    <style>
                      .cls-1{fill:var(--rh-color-brand-red);}
                      .cls-2{fill:var(--rh-color-text-primary);}
                    </style>
                  </defs>
                  <title>RedHat-Logo</title>
                  <path class="cls-1" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78"/>
                  <path d="M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33l3.66-9.06A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45,12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42Z"/>
                  <path class="cls-2" d="M579.74,92.8c0,11.89,7.15,17.67,20.19,17.67a52.11,52.11,0,0,0,11.89-1.68V95a24.84,24.84,0,0,1-7.68,1.16c-5.37,0-7.36-1.68-7.36-6.73V68.3h15.56V54.1H596.78v-18l-17,3.68V54.1H568.49V68.3h11.25Zm-53,.32c0-3.68,3.69-5.47,9.26-5.47a43.12,43.12,0,0,1,10.1,1.26v7.15a21.51,21.51,0,0,1-10.63,2.63c-5.46,0-8.73-2.1-8.73-5.57m5.2,17.56c6,0,10.84-1.26,15.36-4.31v3.37h16.82V74.08c0-13.56-9.14-21-24.39-21-8.52,0-16.94,2-26,6.1l6.1,12.52c6.52-2.74,12-4.42,16.83-4.42,7,0,10.62,2.73,10.62,8.31v2.73a49.53,49.53,0,0,0-12.62-1.58c-14.31,0-22.93,6-22.93,16.73,0,9.78,7.78,17.24,20.19,17.24m-92.44-.94h18.09V80.92h30.29v28.82H506V36.12H487.93V64.41H457.64V36.12H439.55ZM370.62,81.87c0-8,6.31-14.1,14.62-14.1A17.22,17.22,0,0,1,397,72.09V91.54A16.36,16.36,0,0,1,385.24,96c-8.2,0-14.62-6.1-14.62-14.09m26.61,27.87h16.83V32.44l-17,3.68V57.05a28.3,28.3,0,0,0-14.2-3.68c-16.19,0-28.92,12.51-28.92,28.5a28.25,28.25,0,0,0,28.4,28.6,25.12,25.12,0,0,0,14.93-4.83ZM320,67c5.36,0,9.88,3.47,11.67,8.83H308.47C310.15,70.3,314.36,67,320,67M291.33,82c0,16.2,13.25,28.82,30.28,28.82,9.36,0,16.2-2.53,23.25-8.42l-11.26-10c-2.63,2.74-6.52,4.21-11.14,4.21a14.39,14.39,0,0,1-13.68-8.83h39.65V83.55c0-17.67-11.88-30.39-28.08-30.39a28.57,28.57,0,0,0-29,28.81M262,51.58c6,0,9.36,3.78,9.36,8.31S268,68.2,262,68.2H244.11V51.58Zm-36,58.16h18.09V82.92h13.77l13.89,26.82H292l-16.2-29.45a22.27,22.27,0,0,0,13.88-20.72c0-13.25-10.41-23.45-26-23.45H226Z"/>
                </svg>
              </a>
            </slot>
          </div>
          <details id="hamburger" @toggle="${this.#hamburgerToggle}">
            <summary>
              <rh-icon icon="menu-bars" set="ui"></rh-icon>
              <slot name="summary" id="summary">Menu</slot>
              <rh-icon icon="caret-down" set="microns" aria-labelledby="summary"></rh-icon>
            </summary>
            <div id="details-content" role="list">
              <slot></slot>
            </div>
          </details>
          <div id="secondary" role="list">
            <div id="event"><slot name="event"></slot></div>
            <div id="links"><slot name="links"></slot></div>
            <div id="dropdowns"><slot name="dropdowns"></slot></div>
          </div>
        </div>
      </nav>
      <rh-overlay
        .open="${this.#overlayOpen}"
        @click="${this.#onOverlayClick}">
      </rh-overlay>
    `;
  }

  @observes('compact')
  private contextChanged() {
    this.ctx = this.#makeContext();
  }

  #makeContext(): RhNavigationItemContext {
    const { compact } = this;
    return { compact };
  }

  /**
   * Upgrades the aria attributes on upgrade
   */
  #upgradeAccessibility(): void {
    // remove role="navigation" from host on upgrade
    this.removeAttribute('role');
    this.#internals.ariaLabel = this.accessibleLabel;
  }

  #onOverlayClick() {
    //
  }

  async #onExpand(event: Event) {
    if (event instanceof RhNavigationItemExpandEvent) {
      // if the event came from a secondary link in a compact mode we'll want to close the hamburger first if it is open
      const slottedSecondary = this.#slots.getSlotted('links', 'dropdowns');
      const secondaryEventToggle = slottedSecondary.find(node => node.isEqualNode(event.toggle));

      if (event.open) {
        this.#closePrimaryDropdowns();
        this.#closeSecondaryDropdowns();

        if (secondaryEventToggle) {
          if (this.compact) {
            this.#closeHamburger();
          }
          this.#openSecondaryDropdowns.add(event.toggle);
        } else {
          this.#openPrimaryDropdowns.add(event.toggle);
        }
      } else {
        if (secondaryEventToggle) {
          this.#openSecondaryDropdowns.delete(event.toggle);
        } else {
          this.#openPrimaryDropdowns.delete(event.toggle);
        }
      }
    }
  }

  #closePrimaryDropdowns() {
    // close all open dropdowns in primary slot
    this.#openPrimaryDropdowns.forEach((dropdown: RhNavigationItem) => {
      dropdown.close();
    });
  }

  #closeSecondaryDropdowns() {
    // close all open dropdowns in secondary slot
    this.#openSecondaryDropdowns.forEach((dropdown: RhNavigationItem) => {
      dropdown.close();
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

  #hamburgerToggle(event: ToggleEvent) {
    if (event.newState === 'open') {
      // if we are compact mode and any secondary link dropdowns are open, close them
      if (this.compact && this.#openSecondaryDropdowns.size > 0) {
        this.#closeSecondaryDropdowns();
      }
    } else {
      if (this.#openPrimaryDropdowns.size > 0) {
        this.#closePrimaryDropdowns();
      }
    }
  }

  @observes('compact')
  private compactChanged(oldVal: boolean, newVal: boolean) {
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

  open(index: number): void {
    // const hamburgerSlot = this.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="nav"]');
    // if (hamburgerSlot) {
    //   const [slotted] = hamburgerSlot.assignedElements({ flatten: true });
    //   const dropdowns = slotted?.querySelectorAll<RhNavigationItem>(
    //     'rh-navigation-item[variant="dropdown"]');
    //   if (dropdowns.length === 0) {
    //     return;
    //   }
    //   if (this.compact) {
    //     this.#openHamburger();
    //   }
    //   const dropdown = dropdowns[index];
    //   dropdown.open();
    // }
  }

  close(): void {
    for (const dropdown of this.#openPrimaryDropdowns) {
      // close all dropdowns in set
      dropdown.close();
      this.#openPrimaryDropdowns.delete(dropdown);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-primary': RhNavigationPrimary;
  }
}
