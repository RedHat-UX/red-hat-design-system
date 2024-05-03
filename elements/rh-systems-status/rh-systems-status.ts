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
    
    // @todo: KS figure out how to set icon based on status
    // let hasStatus = 'critical' || 'major'|| 'minor' || 'none';

    // if (hasStatus === 'critical') {
    //   hasStatus = 'critical';
    // } else {
    //   hasStatus = 'none'
    // }

    const criticalSvg = `
    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17" fill="none">
      <g clip-path="url(#clip0_16_108)">
        <path d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z" fill="white"/>
        <path d="M16 8.5C16 12.9 12.4 16.5 8 16.5C3.6 16.5 0 12.9 0 8.5C0 4.1 3.6 0.5 8 0.5C12.4 0.5 16 4.1 16 8.5ZM7.1 12.7L13 6.8C13.2 6.6 13.2 6.3 13 6.1L12.3 5.4C12.1 5.2 11.8 5.2 11.6 5.4L6.7 10.2L4.4 7.9C4.2 7.7 3.9 7.7 3.7 7.9L3 8.7C2.8 8.9 2.8 9.2 3 9.4L6.4 12.8C6.5 12.9 6.9 12.9 7.1 12.7Z" fill="#3E8635"/>
      </g>
      <defs>
        <clipPath id="clip0_16_108">
          <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
        </clipPath>
      </defs>
    </svg>
    `

    const majorSvg = `
    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
      <g clip-path="url(#clip0_2_3309)">
        <path d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z" fill="white"/>
        <path d="M16 8.5C16 12.9 12.4 16.5 8 16.5C3.6 16.5 0 12.9 0 8.5C0 4.1 3.6 0.5 8 0.5C12.4 0.5 16 4.1 16 8.5ZM8 10.1C7.2 10.1 6.5 10.8 6.5 11.6C6.5 12.4 7.2 13.1 8 13.1C8.8 13.1 9.5 12.4 9.5 11.6C9.5 10.8 8.8 10.1 8 10.1ZM6.6 4.8L6.8 9.2C6.8 9.4 7 9.5 7.2 9.5H8.8C9 9.5 9.2 9.4 9.2 9.2L9.4 4.8C9.4 4.6 9.2 4.4 9 4.4H7C6.8 4.4 6.6 4.6 6.6 4.8Z" fill="#C9190B"/>
      </g>
      <defs>
        <clipPath id="clip0_2_3309">
          <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
        </clipPath>
      </defs>
    </svg>
    `

    const minorSvg = `
    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17" fill="none">
      <g clip-path="url(#clip0_2_3324)">
        <path d="M8 2.5L14.9282 14.5H1.0718L8 2.5Z" fill="white"/>
        <path d="M0.177762 13.4964C-0.320874 14.398 0.277489 15.5 1.37449 15.5H14.6382C15.6355 15.5 16.3336 14.398 15.8349 13.4964L9.15321 2.17621C8.65457 1.2746 7.35812 1.2746 6.85948 2.17621C6.75976 2.17621 0.177762 13.4964 0.177762 13.4964ZM7.95648 11.1923C8.65457 11.1923 9.25294 11.7934 9.25294 12.4946C9.25294 13.1959 8.65457 13.6968 7.95648 13.6968C7.25839 13.6968 6.66003 13.0957 6.66003 12.3945C6.66003 11.6932 7.25839 11.1923 7.95648 11.1923ZM9.15321 6.68426L8.95375 10.3909C8.95375 10.5912 8.7543 10.6914 8.65457 10.6914H7.25839C7.05894 10.6914 6.95921 10.5912 6.95921 10.3909L6.75976 6.68426C6.75976 6.4839 6.85948 6.38372 7.05894 6.38372H8.85403C9.05348 6.28354 9.15321 6.4839 9.15321 6.68426Z" fill="#F0AB00"/>
      </g>
      <defs>
        <clipPath id="clip0_2_3324">
          <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
        </clipPath>
      </defs>
    </svg>
    `

    const noneSvg = `
    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17" fill="none">
      <g clip-path="url(#clip0_16_82)">
        <path d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z" fill="white"/>
        <path d="M16 8.5C16 12.9 12.4 16.5 8 16.5C3.6 16.5 0 12.9 0 8.5C0 4.1 3.6 0.5 8 0.5C12.4 0.5 16 4.1 16 8.5ZM7.1 12.7L13 6.8C13.2 6.6 13.2 6.3 13 6.1L12.3 5.4C12.1 5.2 11.8 5.2 11.6 5.4L6.7 10.2L4.4 7.9C4.2 7.7 3.9 7.7 3.7 7.9L3 8.7C2.8 8.9 2.8 9.2 3 9.4L6.4 12.8C6.5 12.9 6.9 12.9 7.1 12.7Z" fill="#3E8635"/>
      </g>
      <defs>
        <clipPath id="clip0_16_82">
          <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
        </clipPath>
      </defs>
    </svg>
    `

    return html`
      <a href="#" class="${classMap({ hasIcon, hasDesc })}">
        <span id="icon">
          <slot name="icon" @slotchange="${this.#updateIcons}">${!this.icon ? '' : /* TODO: replace with rh-icon */html`
            <span icon=${this.icon}>
            </span>
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
