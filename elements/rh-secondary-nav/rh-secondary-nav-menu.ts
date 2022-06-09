import { html, LitElement } from 'lit';
import { customElement, property, queryAssignedNodes, query } from 'lit/decorators.js';
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
 * @slot base             - Slot to override all shadow dom contents for full-width or fixed-width menus
 * @slot section          - Hidden if empty, section slot applies an auto column grid system for `<ul>` link lists
 * @slot links            - Only for type="fixed-width", expects a `<ul>`
 * @slot cta              - Menu level CTA, expects a `<pfe-cta>`
 *
 * @csspart full-width    - {HTMLElement} container - The wrapper for full-width menus
 * @csspart fixed-width   - {HTMLElement} container - The wrapper for fixed-width menus
 * @csspart sections      - {HTMLElement} container - The wrapper for menu sections
 * @csspart cta           - {HTMLElement} container - The wrapper for cta
 */
@customElement('rh-secondary-nav-menu')
export class RhSecondaryNavMenu extends LitElement {
  static readonly styles = [styles];

  // TODO: change to variant instead of type which is used by html element properties such as input.
  @property({ reflect: true }) type: 'fixed-width' | 'full-width' = 'full-width';

  @queryAssignedNodes('cta', true)
  private _ctaNodes: NodeListOf<HTMLElement> | undefined;

  @queryAssignedNodes('section', true)
  private _sectionsNodes: NodeListOf<HTMLElement> | undefined;

  @query('#sections') _sections: HTMLElement | undefined;

  @query('#cta') _cta: HTMLElement | undefined;

  @query('#container') _container: HTMLElement | undefined;

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
  @property({ reflect: false }) _isMobile = false;

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

    let menuContents;
    if (this.type === 'full-width') {
      menuContents = this.#fullWidthMenu();
    } else {
      menuContents = this.#fixedWidthMenu();
    }
    return html`<div id="container" class="${classMap(classes)}">${menuContents}</div>`;
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

  #fullWidthMenu() {
    return html`
      <div id="full-width" part="full-width">
        <slot name="base">
          <div id="sections" part="sections" hidden>
            <slot name="section" @slotchange=${this.#onSectionsSlotChange}></slot>
          </div>
          <div id="cta" part="cta" hidden>
            <slot name="cta" @slotchange=${this.#onCtaSlotChange}></slot>
          </div>
        </slot>
      </div>
    `;
  }

  #fixedWidthMenu() {
    return html`
      <div id="fixed-width" part="fixed-width">
        <slot name="base">
          <slot name="links"></slot>
        </slot>
      </div>
    `;
  }

  /**
   * When CTA slot is changed, check to see if it has children
   * if it does then remove hidden attributes
   * @returns {void}
   */
  #onCtaSlotChange(): void {
    if (!this._ctaNodes) {
      return;
    }
    const hasCta = this._ctaNodes.length > 0;
    hasCta ? this._cta?.removeAttribute('hidden') : this._cta?.setAttribute('hidden', '');
  }

  /**
   * When section slot is changed, check to see if it has children
   * if it does then remove hidden attributes
   * @returns {void}
   */
  #onSectionsSlotChange(): void {
    if (!this._sectionsNodes) {
      return;
    }
    const hasSections = this._sectionsNodes.length > 0;
    hasSections ? this._sections?.removeAttribute('hidden') : this._sections?.setAttribute('hidden', '');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-secondary-nav-menu': RhSecondaryNavMenu;
  }
}
