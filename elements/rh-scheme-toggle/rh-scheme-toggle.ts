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
 * Fired when the active color scheme changes, whether by user interaction
 * or programmatic update. This event allows consumers to coordinate UI
 * updates or analytics when the scheme changes. Listeners should read
 * `event.scheme` for the new value. Consumers must not rely on this
 * event firing during initial load from localStorage.
 *
 * @summary Fires when the color scheme changes for coordination and analytics.
 */
export class SchemeChangedEvent extends Event {
  constructor(
    public scheme: Scheme,
  ) {
    super('scheme-changed', { bubbles: true, composed: true });
  }
}

/**
 * A scheme toggle provides users with the ability to switch between
 * light, dark, and system default color schemes. It should be placed
 * in a visible location for easy access. For WCAG compliance, screen
 * reader users must be able to identify each option; the component
 * uses a native fieldset with ARIA-compatible radio buttons. Tab
 * focuses the group; arrow keys allow selection between schemes.
 *
 * @summary Switches between light, dark, and system default color schemes
 *
 * @fires {SchemeChangedEvent} scheme-changed - Fired when the color scheme
 *        changes. Has no `detail` payload; read the new value from
 *        `event.scheme` (`'light'`, `'dark'`, or `'light dark'`).
 */
@customElement('rh-scheme-toggle')
export class RhSchemeToggle extends LitElement {
  static styles = [styles];

  /** Guards against dispatching scheme-changed on initial boot. */
  #initialized = false;

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
   * Authors should keep this text short (under 20 characters).
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
    // Defer until after the first Lit update cycle so @observes('scheme')
    // doesn't dispatch scheme-changed for the initial localStorage value.
    this.updateComplete.then(() => {
      this.#initialized = true;
    });
  }

  /**
   * Syncs the radio checked-state flags before each render so the
   * template always reflects the current `scheme` value.
   */
  protected override willUpdate(): void {
    if (isServer) {
      return;
    }

    this.#isLight = this.scheme === 'light';
    this.#isDark = this.scheme === 'dark';
    this.#isSystem = (this.scheme?.includes('light')
      && this.scheme?.includes('dark'))
      || (this.scheme === undefined);
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
                   .checked="${this.#isLight}">
            <rh-icon set="ui" icon="light-mode"></rh-icon>
          </label>
          <label title="${this.darkText}">
            <span class="visually-hidden">${this.darkText}</span>
            <input type="radio"
                   name="scheme"
                   value="dark"
                   .checked="${this.#isDark}">
            <rh-icon set="ui" icon="dark-mode"></rh-icon>
          </label>
          <label title="${this.systemText}">
            <span class="visually-hidden">${this.systemText}</span>
            <input type="radio"
                   name="scheme"
                   value="light dark"
                   .checked="${this.#isSystem}">
            <rh-icon set="ui" icon="auto-light-dark-mode"></rh-icon>
          </label>
        </div>
      </fieldset>
    `;
  }

  /**
   * Handles radio button changes and updates the selected scheme.
   * @param e - The change event from the radio input.
   */
  #onChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.scheme = e.target.value as Scheme;
    }
  }

  /**
   * Observes changes to the `scheme` property. Applies the selected
   * color scheme to `document.body` and persists it to `localStorage`
   * so the preference survives page reloads.
   */
  @observes('scheme')
  private schemeChanged() {
    if (isServer) {
      return;
    }

    if (this.scheme) {
      document.body.style.setProperty('color-scheme', this.scheme);
      localStorage.rhdsColorScheme = this.scheme;
      if (this.#initialized) {
        this.dispatchEvent(new SchemeChangedEvent(this.scheme));
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-scheme-toggle': RhSchemeToggle;
  }
}
