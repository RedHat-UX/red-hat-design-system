import { html, LitElement } from 'lit';
import { customElement, property, queryAssignedNodes, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { observed } from '@patternfly/pfe-core/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { tabletLandscapeBreakpoint } from '../../lib/tokens.js';
import { MatchMediaController } from '../../lib/MatchMediaController.js';

import { RhSecondaryNavDropdown } from './rh-secondary-nav-dropdown';

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

  // TODO: change to variant instead of type which is used by html element properties such as input.
  @property({ reflect: true }) type: 'fixed-width' | 'full-width' = 'full-width';

  @queryAssignedNodes('cta', true)
  private _ctaNodes!: NodeListOf<HTMLElement>;

  @query('#cta') _cta?: HTMLElement;

  @query('#container') _container?: HTMLElement;

  connectedCallback() {
    super.connectedCallback();

    this.id ||= getRandomId('rh-secondary-nav-menu');
  }

  /**
   * `isMobile` property is true when viewport `(min-width: ${tabletLandscapeBreakpoint})`.
   * Property is observed for changes, and its value is updated using matchMediaControler
   * when viewport changes at breakpoint or first load of the component.
   */
  @observed
  @state() private _isMobile = false;

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

  firstUpdated() {
    this._isMobile = (window.outerWidth < parseInt(tabletLandscapeBreakpoint.toString().split('px')[0]));
  }

  render() {
    const classes = { 'is-mobile': this._isMobile };

    return html`
      <div id="container" class="${classMap(classes)}">${this.type === 'full-width' ? html`
        <div id="full-width" part="full-width">
          <div id="sections" part="sections">
            <slot name="section"></slot>
          </div>
          <div id="cta" part="cta" hidden>
            <slot name="cta" @slotchange="${this.#onCtaSlotChange}"></slot>
          </div>
        </div>` : html`
        <div id="fixed-width" part="fixed-width">
          <div id="sections" part="sections">
            <slot name="section"></slot>
          </div>
        </div>`}
      </div>
    `;
  }

  /**
   * Toggles visibility of menu by added or removing a `visible` attribute to the host
   * @param visible {boolean}
   */
  toggleVisibility(visible: boolean) {
    if (visible) {
      this._container?.classList.add('visible');
    } else {
      this._container?.classList.remove('visible');
    }
  }

  /**
   * When CTA slot is changed, check to see if it has children
   * if it does then remove hidden attributes
   * @returns {void}
   */
  #onCtaSlotChange(): void {
    this._cta?.toggleAttribute('hidden', this._ctaNodes.length === 0);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-secondary-nav-menu': RhSecondaryNavMenu;
  }
}
