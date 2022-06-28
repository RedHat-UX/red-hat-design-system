import { html, LitElement } from 'lit';
import { customElement, property, queryAssignedNodes, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { observed } from '@patternfly/pfe-core/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { RhSecondaryNavDropdown } from './rh-secondary-nav-dropdown';

import { RHDSScreenSizeController } from '../../lib/RHDSScreenSizeController.js';

import styles from './rh-secondary-nav-menu.css';

/**
 * @summary 'A pop up menu for secondary nav, available in full-width and fixed-with sizes'
 *
 * @slot section          - Section, expects `<ul>, <ol>, <rh-secondary-nav-section>` elements, applies auto grid styles on full-width
 * @slot cta              - Menu level CTA, expects a `<pfe-cta>`
 *
 * @csspart container     - container - <div> element, wrapper for menus
 * @csspart full-width    - container - <div> element, wrapper for full-width menus
 * @csspart fixed-width   - container - <div> element, wrapper for fixed-width menus
 * @csspart sections      - container - <div> element, wrapper for menu sections
 * @csspart cta           - container - <div> element, wrapper for cta
 */
@customElement('rh-secondary-nav-menu')
export class RhSecondaryNavMenu extends LitElement {
  static readonly styles = [styles];

  @property({ reflect: true }) layout: 'fixed-width' | 'full-width' = 'full-width';

  @queryAssignedNodes('cta', true)
  private _ctaNodes!: NodeListOf<HTMLElement>;

  @query('#cta') _cta?: HTMLElement;

  @query('#container') _container?: HTMLElement;

  #screenSize = new RHDSScreenSizeController(this);

  /**
   * `isMobile` property is true when viewport `(min-width: ${tabletLandscapeBreakpoint})`.
   * Property is observed for changes, and its value is updated using matchMediaControler
   * when viewport changes at breakpoint or first load of the component.
   */
  @observed
  @state() private _isMobile = false;

  /**
   * `_hasCtaNodes` property is true when the cta slot has children. If true
   * the class of `visible` is added via a class map on render
   */
  @state() private _hasCtaNodes = false;

  /**
   * `visible` property is false initially then when a dropdown is clicked is toggled
   */
  @state() visible = false;

  /**
   * Checks if passed in element is a RhSecondaryNavDropdown
   * @param element:
   * @returns {boolean}
   */
  static isDropdown(element: Element|null): element is RhSecondaryNavDropdown {
    return element instanceof RhSecondaryNavDropdown;
  }

  connectedCallback() {
    super.connectedCallback();

    this.id ||= getRandomId('rh-secondary-nav-menu');
  }

  render() {
    const classes = { 'compact': !this.#screenSize.matches.has('tabletLandscape'), 'visible': this.visible };
    const ctaClasses = { 'visible': this._hasCtaNodes };

    return html`
      <div id="container" class="${classMap(classes)}">${this.layout === 'full-width' ? html`
        <div id="full-width" part="full-width">
          <div id="sections" part="sections">
            <slot></slot>
          </div>
          <div id="cta" part="cta" class="${classMap(ctaClasses)}">
            <slot name="cta" @slotchange="${this.#onCtaSlotChange}"></slot>
          </div>
        </div>` : html`
        <div id="fixed-width" part="fixed-width">
          <div id="sections" part="sections">
            <slot></slot>
          </div>
        </div>`}
      </div>
    `;
  }

  /**
   * When CTA slot is changed, check to see if it has children
   * if it does then remove hidden attributes
   * @returns {void}
   */
  #onCtaSlotChange(): void {
    this._hasCtaNodes = this._ctaNodes.length !== 0;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-secondary-nav-menu': RhSecondaryNavMenu;
  }
}
