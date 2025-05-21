import { html, isServer, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { observes } from '@patternfly/pfe-core/decorators.js';

import styles from './uxdot-color-scheme-picker.css';
import visuallyHidden from './visually-hidden.css';

declare global {
  interface Storage {
    rhdsColorScheme: 'light' | 'dark' | 'light dark';
  }
}

@customElement('uxdot-color-scheme-picker')
export class UxdotColorSchemePicker extends LitElement {
  static styles = [styles, visuallyHidden];

  @property({ reflect: true }) scheme?: 'light' | 'dark' | 'light dark' =
    globalThis.localStorage?.rhdsColorScheme as 'light' | 'dark' | 'light dark';

  connectedCallback(): void {
    super.connectedCallback();
    if (!isServer) {
      this.scheme = localStorage.rhdsColorScheme;
    }
  }

  firstUpdated() {
    // workaround for ssr mismatch
    if (!isServer) {
      this.shadowRoot?.querySelector(`[value="${this.scheme}"]`)?.toggleAttribute('checked', true);
    }
  }

  render() {
    return html`
      <fieldset @change="${this.#onChange}">
        <legend>Color scheme:</legend>
        <div id="button-group">
          <label title="Light">
            <span class="visually-hidden">Light</span>
            <input type="radio" ?checked="${!isServer && this.scheme === 'light'}" name="scheme" value="light">
            <rh-icon icon="light-mode" set="ui"></rh-icon>
          </label>
          <label title="Dark">
            <span class="visually-hidden">Dark</span>
            <input type="radio" ?checked="${!isServer && this.scheme === 'dark'}" name="scheme" value="dark">
            <rh-icon icon="dark-mode" set="ui"></rh-icon>
          </label>
          <label title="Device default">
            <span class="visually-hidden">Device default</span>
            <input type="radio" ?checked="${isServer || this.scheme === 'light dark'}" name="scheme" value="light dark">
            <rh-icon icon="auto-light-dark-mode" set="ui"></rh-icon>
          </label>
        </div>
      </fieldset>
    `;
  }

  #onChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.scheme = e.target.value as this['scheme'];
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
