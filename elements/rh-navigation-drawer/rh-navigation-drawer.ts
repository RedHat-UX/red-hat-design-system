import { LitElement, html, type PropertyValues, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

import {
  BreakpointXs,
  BreakpointSm,
  BreakpointMd,
  BreakpointLg,
  BreakpointXl,
  Breakpoint2xl,
} from '@rhds/tokens/media.js';


import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-navigation-drawer.css';


/**
 * Navigation Drawer is a component that displays a navigation menu in a vertical drawer in wide viewports and a disclosure in narrow viewports.
 * @slot - Place navigation content here
 * @slot header - Place header content here
 * @slot footer - Place footer content here
 */

@customElement('rh-navigation-drawer')
@themable
export class RhNavigationDrawer extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  static override readonly shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /**
   * Get breakpoint pixel value from breakpoint name
   * @param breakpoint - The breakpoint name ('xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl')
   * @returns The pixel value as an integer
   */
  static getBreakpointValue(breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'): number {
    const breakpointMap = {
      'xs': parseInt(BreakpointXs.replace('px', ''), 10),
      'sm': parseInt(BreakpointSm.replace('px', ''), 10),
      'md': parseInt(BreakpointMd.replace('px', ''), 10),
      'lg': parseInt(BreakpointLg.replace('px', ''), 10),
      'xl': parseInt(BreakpointXl.replace('px', ''), 10),
      '2xl': parseInt(Breakpoint2xl.replace('px', ''), 10),
    };

    return breakpointMap[breakpoint];
  }

  #ro = new ResizeObserver(entries => {
    for (const entry of entries) {
      const [contextBoxSize] = entry.contentBoxSize;
      const breakpoint = RhNavigationDrawer.getBreakpointValue(this.expandAt);
      const oldState = this._compact;
      const newState = contextBoxSize.inlineSize < breakpoint;
      if (oldState !== newState) {
        this._compact = newState;
        this.#initial = true;
        this.requestUpdate();
      }
    }
  });

  #slots = new SlotController(this, 'header', 'footer');

  #initial = true;

  /**
   * Whether the drawer is collapsed
   */
  @state()
  private _collapsed = false;

  /**
   * Whether the drawer is compact
   */
  @state()
  private _compact = true;

  /**
   * The selector for the container element to observe
   */
  @property({ reflect: true }) container?: string;

  /**
   * Whether the drawer can be collapsed (shows toggle button)
   */
  @property({ type: Boolean, reflect: true }) collapsible = false;

  /**
   * The accessible label for the collapsed state
   */
  @property({ attribute: 'accessible-label-collapsed' })
  accessibleLabelCollapsed = 'Expand navigation';

  /**
   * The accessible label for the expanded state
   */
  @property({ attribute: 'accessible-label-expanded' })
  accessibleLabelExpanded = 'Collapse navigation';

  /**
   * Breakpoint at which the drawer switches to mobile disclosure pattern
   * Available breakpoints: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
   */
  @property({ attribute: 'expand-at' })
  expandAt: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md';

  /**
   * The label for the menu
   */
  @property({ attribute: 'menu-label' }) menuLabel = 'Menu';

  connectedCallback(): void {
    super.connectedCallback();
    /* if container is set, observe the container, otherwise observe the parent element */
    const observable =
        (this.container ?
        document.querySelector(this.container)
        : this.parentElement) ?? document.body;
    this.#ro?.observe(observable);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#ro?.disconnect();
  }

  render(): TemplateResult {
    const { _compact, _collapsed, collapsible } = this;
    const emptyHeader = this.#slots.isEmpty('header');
    const emptyFooter = this.#slots.isEmpty('footer');

    return html`
      <details id="hamburger"
            class="${classMap({
              collapsible: collapsible,
              collapsed: _collapsed,
              expanded: !_collapsed,
              compact: _compact,
              initial: this.#initial,
            })}" 
            .open=${!_compact}>
        <summary>
          <rh-icon icon="caret-up" set="ui"></rh-icon><span slot="summary">${this.menuLabel}</span>
        </summary>
        <div id="details-content">
          <div id="header" class="${classMap({ empty: emptyHeader })}">
            <slot name="header"></slot>
          </div>
          ${!_compact && collapsible ? html`
            <button id="toggle"
                    @click=${this.toggle}
                    aria-label="${_collapsed ? this.accessibleLabelCollapsed : this.accessibleLabelExpanded}"
                    aria-expanded="${!_collapsed}"
                    aria-controls="#hamburger">
              <rh-icon icon="caret-left" set="ui"></rh-icon>
            </button>
          ` : ''}
          <div id="body"><slot></slot></div>
          <div id="footer" class="${classMap({ empty: emptyFooter })}">
            <slot name="footer"></slot>
          </div>
        </div>
      </details>
    `;
  }

  async toggle() {
    if (!this.collapsible) {
      return;
    }
    this._collapsed = !this._collapsed;
    this.#initial = false;
    this.dispatchEvent(new Event('toggle', { bubbles: true }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-drawer': RhNavigationDrawer;
  }
}
