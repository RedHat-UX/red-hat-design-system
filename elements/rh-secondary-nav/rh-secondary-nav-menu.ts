import { html, LitElement } from 'lit';
import { customElement, property, queryAssignedNodes, state } from 'lit/decorators.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import styles from './rh-secondary-nav-menu.css';

@customElement('rh-secondary-nav-menu') @pfelement()
export class RhSecondaryNavMenu extends LitElement {
  static readonly styles = [styles];

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
      return this._fullWidthMenu();
    } else {
      return this._fixedMenu();
    }
  }

  private _fullWidthMenu() {
    return html`
      <div id="nav-menu">
        <div id="section" class="${this._sectionClass()}" >
          <slot name="section" @slotchange=${this._onSectionsSlotChange}></slot>
        </div>
        <slot name="open"></slot>
        <div id="cta" class="${this._ctaClass()}">
          <slot name="cta" @slotchange=${this._onCtaSlotChange}></slot>
        </div>
      </div>
    `;
  }

  private _fixedMenu() {
    return html`
      <div id="nav-menu">
        <slot name="links"></slot>
      </div>
    `;
  }

  private _sectionClass() {
    return !this._hasSections ? 'hidden' : '';
  }

  private _ctaClass() {
    return !this._hasCta ? 'hidden' : '';
  }

  private _onCtaSlotChange() {
    if (!this._ctaNodes) {
      return;
    }
    this._hasCta = this._ctaNodes.length > 0;
  }

  private _onSectionsSlotChange() {
    if (!this._sectionsNodes) {
      return;
    }
    this._hasSections = this._sectionsNodes.length > 0;
  }
}
