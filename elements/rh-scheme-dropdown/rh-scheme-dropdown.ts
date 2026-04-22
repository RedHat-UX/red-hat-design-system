import { html, isServer, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import '@rhds/elements/rh-icon/rh-icon.js';
import { observes } from '@patternfly/pfe-core/decorators.js';

import styles from './rh-scheme-dropdown.css' with { type: 'css' };

declare global {
  interface Storage {
    rhdsColorScheme: 'light' | 'dark' | 'light dark';
  }
}

/** Represents the available color scheme values. */
type Scheme = 'light' | 'dark' | 'light dark';

/**
 * Fired when the active color scheme changes, whether by user interaction
 * or programmatic update. Does not fire on initial load from localStorage.
 * Listeners can read `event.scheme` to get the new value.
 */
export class SchemeChangedEvent extends Event {
  constructor(
    public scheme: Scheme,
  ) {
    super('scheme-changed', { bubbles: true, composed: true });
  }
}

/**
 * A scheme dropdown provides users with the ability to switch between
 * light, dark, and system default color schemes. It should be placed
 * in a visible location for easy access. The component uses a native
 * custom select menu with option elements. Be sure to customize the
 * `label-text` attribute if your property is offered in multiple
 * languages. Tab focuses the select; arrow keys allow selection between
 * schemes. Users may also select a scheme via the select's typeahead
 * features.
 *
 * @summary Displays a variety of color schemes in a menu dropdown
 *
 * @fires {SchemeChangedEvent} scheme-changed - Fired when the color scheme changes
 *
 * @alias Scheme dropdown
 */
@customElement('rh-scheme-dropdown')
export class RhSchemeDropdown extends LitElement {
  static styles = [styles];

  /** Guards against dispatching scheme-changed on initial boot. */
  #initialized = false;

  /** Whether the light option is currently selected. */
  #isLight = false;

  /** Whether the dark option is currently selected. */
  #isDark = false;

  /** Whether the system default option is currently selected. */
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
   * Visually hidden accessible label for the scheme dropdown.
   * Authors should keep this text short (under 20 characters).
   */
  @property({ attribute: 'label-text' }) labelText = 'Color scheme';

  /**
   * Accessible label for the light mode option.
   */
  @property({ attribute: 'light-text' }) lightText = 'Light';

  /**
   * Accessible label for the dark mode option.
   */
  @property({ attribute: 'dark-text' }) darkText = 'Dark';

  /**
   * Accessible label for the system default option.
   */
  @property({ attribute: 'system-text' }) systemText = 'System';

  /**
   * Controls where the trigger and picker align within the host.
   * When set to `inline-end`, both shift to the inline-end edge
   * (right in LTR, left in RTL).
   */
  @property({ attribute: 'dropdown-placement', reflect: true })
  dropdownPlacement?: 'inline-end';

  connectedCallback(): void {
    super.connectedCallback();
    this.#schemeCheck();

    // Defer until after the first Lit update cycle so @observes('scheme')
    // doesn't dispatch scheme-changed for the initial localStorage value:
    this.updateComplete.then(() => {
      this.#initialized = true;
    });
  }

  render() {
    return html`
      <label for="scheme-dropdown" class="visually-hidden">${this.labelText}:</label>
      <select id="scheme-dropdown" @change="${this.#onChange}">
        <button type="button">
          <selectedcontent></selectedcontent>
          <rh-icon set="microns" icon="caret-down-fill"></rh-icon>
        </button>
        <option value="light dark" ?selected="${this.#isSystem}">
          <rh-icon set="ui" icon="auto-light-dark-mode"></rh-icon>
          <span class="option-text">${this.systemText}</span>
          <rh-icon set="ui" icon="check" class="checkmark"></rh-icon>
        </option>
        <option value="light" ?selected="${this.#isLight}">
          <rh-icon set="ui" icon="light-mode"></rh-icon>
          <span class="option-text">${this.lightText}</span>
          <rh-icon set="ui" icon="check" class="checkmark"></rh-icon>
        </option>
        <option value="dark" ?selected="${this.#isDark}">
          <rh-icon set="ui" icon="dark-mode"></rh-icon>
          <span class="option-text">${this.darkText}</span>
          <rh-icon set="ui" icon="check" class="checkmark"></rh-icon>
        </option>
      </select>
    `;
  }

  /**
   * Handles option changes and updates the selected scheme.
   * @param {Event} e - The change event from the select element.
   */
  #onChange(e: Event) {
    if (e.target instanceof HTMLSelectElement) {
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
    if (isServer) {
      return;
    }

    this.#isLight = this.scheme === 'light';
    this.#isDark = this.scheme === 'dark';
    this.#isSystem = (this.scheme?.includes('light')
      && this.scheme?.includes('dark'))
      || (this.scheme === undefined);
    this.requestUpdate();
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
    'rh-scheme-dropdown': RhSchemeDropdown;
  }
}
