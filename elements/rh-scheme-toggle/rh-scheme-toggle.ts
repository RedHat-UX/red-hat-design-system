import { html, isServer, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import '@rhds/elements/rh-icon/rh-icon.js';
import { observes } from '@patternfly/pfe-core/decorators.js';

import styles from './rh-scheme-toggle.css';

declare global {
  interface Storage {
    rhdsColorScheme: 'light' | 'dark' | 'light dark';
  }
}

type Scheme = 'light' | 'dark' | 'light dark';

/**
 * A switch toggles the state of the color scheme (between light, dark and system default).
 *
 * @summary  A switch toggles the state of the color scheme (between light, dark and system default).
 *
 * @alias Scheme toggle
 */
@customElement('rh-scheme-toggle')
export class RhSchemeToggle extends LitElement {
  static styles = [styles];

  #isLight = false;
  #isDark = false;
  #isSystem = false;

  /** Current color scheme setting */
  @property({ reflect: true }) scheme?: Scheme = globalThis.localStorage
      ?.rhdsColorScheme as Scheme;

  /** Legend text for the color scheme toggle group */
  @property({ attribute: 'legend-text' }) legendText = 'Color scheme';

  /** Label text for the light mode option */
  @property({ attribute: 'light-text' }) lightText = 'Light';

  /** Label text for the dark mode option */
  @property({ attribute: 'dark-text' }) darkText = 'Dark';

  /** Label text for the system default option */
  @property({ attribute: 'system-text' }) systemText = 'System';

  connectedCallback(): void {
    super.connectedCallback();
    this.#schemeCheck();
  }

  render() {
    return html`
      <fieldset @change="${this.#onChange}">
        <legend>${this.legendText}:</legend>
        <div id="button-group">
          <label title="${this.lightText}">
            <span class="visually-hidden">${this.lightText}</span>
            <input type="radio"
                   name="scheme"
                   value="light"
                   ?checked="${this.#isLight}">
            <rh-icon set="ui" icon="light-mode"></rh-icon>
          </label>
          <label title="${this.darkText}">
            <span class="visually-hidden">${this.darkText}</span>
            <input type="radio"
                   name="scheme"
                   value="dark"
                   ?checked="${this.#isDark}">
            <rh-icon set="ui" icon="dark-mode"></rh-icon>
          </label>
          <label title="${this.systemText}">
            <span class="visually-hidden">${this.systemText}</span>
            <input type="radio"
                   name="scheme"
                   value="light dark"
                   ?checked="${this.#isSystem}">
            <rh-icon set="ui" icon="auto-light-dark-mode"></rh-icon>
          </label>
        </div>
      </fieldset>
    `;
  }

  #onChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.scheme = e.target.value as Scheme;
    }
    this.#schemeCheck();
  }

  #schemeCheck() {
    if (!isServer) {
      this.#isLight = this.scheme === 'light';
      this.#isDark = this.scheme === 'dark';
      this.#isSystem = (this.scheme?.includes('light')
        && this.scheme?.includes('dark'))
        || (this.scheme === undefined);
      this.requestUpdate();
    }
  }

  @observes('scheme')
  private schemeChanged() {
    if (!isServer) {
      if (this.scheme) {
        document.body.style.setProperty('color-scheme', this.scheme);
        if (!isServer) {
          localStorage.rhdsColorScheme = this.scheme;
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-scheme-toggle': RhSchemeToggle;
  }
}
