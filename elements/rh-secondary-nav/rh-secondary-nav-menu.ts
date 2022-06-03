import { html, LitElement } from 'lit';
import { customElement, property, queryAssignedNodes, state } from 'lit/decorators.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

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
@customElement('rh-secondary-nav-menu') @pfelement()
export class RhSecondaryNavMenu extends LitElement {
  static readonly styles = [styles];

  // TODO: change to variant instead of type which is used by html element properties such as input.
  @property({ reflect: true }) type: 'fixed-width' | 'full-width' = 'full-width';

  @queryAssignedNodes('cta', true)
  private _ctaNodes: NodeListOf<HTMLElement> | undefined;

  @queryAssignedNodes('section', true)
  private _sectionsNodes: NodeListOf<HTMLElement> | undefined;

  @state()
  private _hasCta = false;

  @state()
  private _hasSections = false;

  connectedCallback() {
    super.connectedCallback();

    this.id ||= getRandomId('rh-secondary-nav-menu');
  }

  render() {
    if (this.type === 'full-width') {
      return this.#fullWidthMenu();
    } else {
      return this.#fixedWidthMenu();
    }
  }

  #fullWidthMenu() {
    return html`
      <div id="full-width" part="full-width">
        <slot name="base">
          <div id="sections" part="sections" class="${this.#sectionClass()}" >
            <slot name="section" @slotchange=${this.#onSectionsSlotChange}></slot>
          </div>
          <div id="cta" class="${this.#ctaClass()}" part="cta">
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

  #sectionClass() {
    return !this._hasSections ? 'hidden' : '';
  }

  #ctaClass() {
    return !this._hasCta ? 'hidden' : '';
  }

  #onCtaSlotChange() {
    if (!this._ctaNodes) {
      return;
    }
    this._hasCta = this._ctaNodes.length > 0;
  }

  #onSectionsSlotChange() {
    if (!this._sectionsNodes) {
      return;
    }
    this._hasSections = this._sectionsNodes.length > 0;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-secondary-nav-menu': RhSecondaryNavMenu;
  }
}
