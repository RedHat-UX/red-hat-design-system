import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

// import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import styles from './rh-systems-status.css';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * Systems Status
 * @slot icon - Status icon
 * @slot desc - Status description
 * @cssprop --pf-icon--size
 * 
 *      critical: 'shape-red',
 *      major: 'shape-orange',
 *      minor: 'shape-yellow',
 *      none: 'shape-dash-lime'
 */
@customElement('rh-systems-status')
export class RhSystemsStatus extends LitElement {
  static readonly version = '{{version}}';
  static readonly styles = [styles];

  /** The icon that displays the current systems status */
  @property({ reflect: true, type: String }) icon?: string;

  /** The size of the icon */
  @property({ reflect: true, type: String }) size: 'default' | 'medium' = 'default';

  @property({ reflect: true, type: String }) critical?: string;

  #slots = new SlotController(this, null, 'icon', 'desc');

  #mo = new MutationObserver(() => this.#onMutation());

  #logger = new Logger(this);

  connectedCallback() {
    super.connectedCallback();
    this.#updateIcons();
    this.#mo.observe(this, { childList: true });
    this.#onMutation();
  }

  render() {
    const hasIcon = this.#slots.hasSlotted('icon') || !!this.icon;
    const hasDesc = this.#slots.hasSlotted('desc');
    
    let hasStatus = '';

    return html`
      <a href="#" class="${classMap({ hasIcon, hasDesc, hasStatus  })}">
        <span id="icon">
          <slot name="icon" @slotchange="${this.#updateIcons}">${!this.icon ? '' : /* TODO: replace with rh-icon */html`
            <pf-icon size=${this.size === 'default' ? 'md' : 'lg'}
                     icon=${this.icon}
                     set="${ifDefined(this.getAttribute('icon-set') ?? undefined)}"></pf-icon>`}
          </slot>
        </span>
        <span id="desc"><slot name="desc"></slot></span>
      </a>
    `;
  }

  #updateIcons(): void {
    this.querySelector('pf-icon[slot="icon"]')
      ?.setAttribute?.('size', this.size === 'default' ? 'md' : 'lg');
  }

  #onMutation() {
    if (!this.#slots.hasSlotted('icon')) {
      this.#logger.warn('Must contain corresponding status icon');
    }
    if (!this.querySelectorAll(':not([slot])').length) {
      this.#logger.warn('Must contain description of systems status');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-systems-status': RhSystemsStatus;
  }
}
