import { html, isServer, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import '@rhds/elements/rh-icon/rh-icon.js';
import { observes } from '@patternfly/pfe-core/decorators.js';

import styles from './rh-scheme-toggle.css';
// import visuallyHidden from './visually-hidden.css';

declare global {
  interface Storage {
    rhdsColorScheme: 'light' | 'dark' | 'light dark';
  }
}

type Scheme = 'light' | 'dark' | 'light dark';

/**
 * Scheme Toggle
 */
@customElement('rh-scheme-toggle')
export class RhSchemeToggle extends LitElement {
  static styles = [styles];

  @property({ reflect: true }) scheme?: Scheme = globalThis.localStorage
    ?.rhdsColorScheme as Scheme;

  connectedCallback(): void {
    super.connectedCallback();
    if (!isServer) {
      this.scheme = localStorage.rhdsColorScheme;
    }
  }

  firstUpdated() {
    // workaround for ssr mismatch
    if (!isServer) {
      this.shadowRoot
        ?.querySelector(`[value="${this.scheme}"]`)
        ?.toggleAttribute('checked', true);
    }
  }

  render() {
    return html`
      <fieldset @change="${this.#onChange}">
        <legend>Color scheme:</legend>
        <div id="button-group">
          <label title="Light">
            <span class="visually-hidden">Light</span>
            <input
              type="radio"
              name="scheme"
              value="light"
              ?checked="${!isServer && this.scheme === 'light'}"
            />
            <rh-icon set="ui" icon="light-mode"></rh-icon>
          </label>
          <label title="Dark">
            <span class="visually-hidden">Dark</span>
            <input
              type="radio"
              name="scheme"
              value="dark"
              ?checked="${!isServer && this.scheme === 'dark'}"
            />
            <rh-icon set="ui" icon="dark-mode"></rh-icon>
          </label>
          <label title="Device default">
            <span class="visually-hidden">Device default</span>
            <input
              type="radio"
              name="scheme"
              value="light dark"
              ?checked="${isServer ||
              this.scheme === 'light dark' ||
              undefined}"
            />
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
  }

  @observes('scheme')
  private schemeChanged() {
    if (this.scheme) {
      document.body.style.setProperty('color-scheme', this.scheme);
      if (!isServer) {
        localStorage.rhdsColorScheme = this.scheme;
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-scheme-toggle': RhSchemeToggle;
  }
}
