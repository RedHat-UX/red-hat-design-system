import { html, isServer, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import '@rhds/elements/rh-icon/rh-icon.js';
import { observes } from '@patternfly/pfe-core/decorators.js';

import styles from './rh-scheme-toggle.css' with { type: 'css' };

declare global {
  interface Storage {
    rhdsColorScheme: 'light' | 'dark' | 'light dark';
  }
}

/** Represents the available color scheme values. */
type Scheme = 'light' | 'dark' | 'light dark';

/**
 * A scheme toggle provides users with the ability to switch between
 * light, dark, and system default color schemes. It SHOULD be placed
 * in a visible location for easy access. For WCAG compliance, screen
 * reader users MUST be able to identify each option; the component
 * uses a native fieldset with ARIA-compatible radio buttons. Tab
 * focuses the group; arrow keys allow selection between schemes.
 *
 * @summary Switches between light, dark, and system default color schemes.
 *
 * @alias Scheme toggle
 */
@customElement('rh-scheme-toggle')
export class RhSchemeToggle extends LitElement {
  static styles = [styles];

  /** Whether the light radio button is currently checked. */
  #isLight = false;

  /** Whether the dark radio button is currently checked. */
  #isDark = false;

  /** Whether the system default radio button is currently checked. */
  #isSystem = false;

  /**
   * Current color scheme setting. Reflects to the `scheme` attribute and
   * initializes from `localStorage.rhdsColorScheme` when available.
   * When set, applies the value to `document.body.style.colorScheme`
   * and persists it to `localStorage`.
   */
  @property({ reflect: true }) scheme?: Scheme = globalThis.localStorage
      ?.rhdsColorScheme as Scheme;

  /**
   * Legend text displayed next to the toggle button group.
   * Authors SHOULD keep this text short (under 20 characters).
   */
  @property({ attribute: 'legend-text' }) legendText = 'Color scheme';

  /**
   * Accessible label for the light mode radio button.
   * Rendered as a visually-hidden span and a `title` tooltip.
   */
  @property({ attribute: 'light-text' }) lightText = 'Light';

  /**
   * Accessible label for the dark mode radio button.
   * Rendered as a visually-hidden span and a `title` tooltip.
   */
  @property({ attribute: 'dark-text' }) darkText = 'Dark';

  /**
   * Accessible label for the system default radio button.
   * Rendered as a visually-hidden span and a `title` tooltip.
   */
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

  /** Handles radio button changes and updates the selected scheme. */
  #onChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.scheme = e.target.value as Scheme;
    }
    this.#schemeCheck();
  }

  /**
   * Synchronizes the private checked-state flags with the current
   * `scheme` value and requests a re-render. Treats `undefined` as
   * equivalent to the system default (`'light dark'`).
   */
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

  /**
   * Observes changes to the `scheme` property. Applies the selected
   * color scheme to `document.body` and persists it to `localStorage`
   * so the preference survives page reloads.
   */
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
