import { LitElement, type TemplateResult, html, svg } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import '../rh-spinner/rh-spinner.js';

import styles from './rh-site-status.css';

const statusIconsMap: Record<string, TemplateResult> = {
  'ok': svg`    
    <path d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z" fill="#63993D"/>
    <path d="M6.89999 12.1C6.69999 12.1 6.49999 12 6.39999 11.9L3.49999 9.00001C3.19999 8.70001 3.19999 8.30001 3.49999 8.00001C3.79999 7.70001 4.19999 7.70001 4.49999 8.00001L6.89999 10.4L11.5 5.80001C11.8 5.50001 12.2 5.50001 12.5 5.80001C12.8 6.10001 12.8 6.50001 12.5 6.80001L7.39999 11.9C7.19999 12 6.99999 12.1 6.89999 12.1Z" fill="white"/>
  `,
  'warn': svg`
    <path d="M0 14.6H16L8 0.400024L0 14.6Z" fill="#F5921B"/>
    <path d="M8.00005 9.80007C7.60005 9.80007 7.30005 9.50007 7.30005 9.10007V5.90007C7.30005 5.50007 7.60005 5.20007 8.00005 5.20007C8.40005 5.20007 8.70005 5.50007 8.70005 5.90007V9.20007C8.70005 9.50007 8.40005 9.80007 8.00005 9.80007ZM8.20005 12.7001C8.30005 12.7001 8.30005 12.7001 8.40005 12.7001C8.40005 12.7001 8.50005 12.7001 8.50005 12.6001L8.60005 12.5001C8.80005 12.3001 8.80005 12.1001 8.80005 11.9001C8.80005 11.7001 8.70005 11.5001 8.60005 11.3001L8.50005 11.2001L8.40005 11.1001C8.30005 11.1001 8.30005 11.1001 8.20005 11.1001C7.90005 11.0001 7.70005 11.1001 7.50005 11.3001C7.30005 11.5001 7.30005 11.7001 7.30005 11.9001C7.30005 12.1001 7.40005 12.3001 7.50005 12.5001C7.70005 12.7001 7.90005 12.7001 8.10005 12.7001C8.10005 12.7001 8.10005 12.7001 8.20005 12.7001Z" fill="white"/>
  `,
  'danger': svg`
    <path d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z" fill="#F4784A"/>
    <path d="M8.0001 9.80005C7.6001 9.80005 7.3001 9.50005 7.3001 9.10005V4.50005C7.3001 4.10005 7.6001 3.80005 8.0001 3.80005C8.4001 3.80005 8.7001 4.10005 8.7001 4.50005V9.10005C8.7001 9.50005 8.4001 9.80005 8.0001 9.80005ZM8.2001 12.8C8.3001 12.8 8.3001 12.8 8.4001 12.7C8.5001 12.7 8.5001 12.7 8.5001 12.6C8.6001 12.6 8.6001 12.5 8.6001 12.5C8.8001 12.3 8.9001 12.1 8.9001 11.9C8.9001 11.7 8.8001 11.5 8.6001 11.3L8.5001 11.2L8.4001 11.1C8.3001 11.1 8.3001 11.1 8.2001 11.1C7.9001 11 7.6001 11.1 7.4001 11.3L7.3001 11.4L7.2001 11.5C7.2001 11.6 7.2001 11.6 7.1001 11.7C7.1001 11.8 7.1001 11.8 7.1001 11.9C7.1001 12.1 7.2001 12.3 7.4001 12.5C7.6001 12.7 7.8001 12.8 8.0001 12.8C8.1001 12.8 8.1001 12.8 8.2001 12.8Z" fill="white"/>
  `
};

// map statuspage.io's text to our text; at least one of their status
// strings is too long for the space we have
const textMap: Record<string, string> = {
  'Partially Degraded Service': 'Partial service',
};

// map statuspage.io's statuses to icon map keys
const statusMap: Record<string, string> = {
  'maintenance': 'warn',
  'critical': 'danger',
  'major': 'warn',
  'minor': 'warn',
  'none': 'ok',
};

interface Summary {
  status: {
    description: string;
    indicator: string;
  };
  indicator: string;
  statusIconClassName: string;
}

/**
 * Site Status
 * @slot - Place element content here
 */
@customElement('rh-site-status')
export class RhSiteStatus extends LitElement {
  static readonly styles = [styles];

  /**
   * Sets color context for child components, overrides parent context
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette = 'dark';

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  #logger = new Logger(this);

  #text = 'Loading';

  #icon: TemplateResult = html``;

  #isLoading = true;

  async connectedCallback() {
    super.connectedCallback();
    await this.#getStatus();
  }

  render() {
    const { on = '' } = this;
    return html`
      <div id="container" part="container" class="${classMap({ [on]: !!on })}">
        ${this.#isLoading ? html`<rh-spinner size="sm"></rh-spinner>` : html`
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            ${this.#icon}
          </svg>
        `}
        ${this.#text}
      </div>
    `;
  }

  async #getStatus() {
    await fetch('https://status.redhat.com/index.json', {
      mode: 'cors',
      cache: 'no-cache',
    })
      .then(response => response.json())
      .then((data: Summary) => {
        const statusText = data.status.description;
        this.#text = textMap[statusText] || statusText.charAt(0).toUpperCase() + statusText.substring(1).toLowerCase();
        this.#icon = statusIconsMap[statusMap[data.status.indicator]];
        this.#isLoading = false;
        this.requestUpdate();
      })
      .catch( error => {
        this.#logger.warn('Error loading site status:', error);
        this.#text = 'Error loading status';
        this.#icon = statusIconsMap['danger'];
        this.#isLoading = false;
        this.requestUpdate();
      });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-site-status': RhSiteStatus;
  }
}
