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
 * Fired when the active color scheme changes by user interaction or
 * programmatic update. Does not fire on initial load from localStorage.
 * Bubbles and is composed, so listeners on ancestor elements will
 * receive it. Read `event.scheme` to get the newly selected value.
 */
export class SchemeChangedEvent extends Event {
  constructor(
    public scheme: Scheme,
  ) {
    super('scheme-changed', { bubbles: true, composed: true });
  }
}

/**
 * Provides a color scheme picker for switching between light, dark,
 * and system defaults. Uses a semantic `<select>` with a visually
 * hidden `<label>` for screen reader accessibility (WCAG 4.1.2).
 * Authors should set `label-text` for localization. Tab focuses
 * the select; arrow keys cycle options.
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

    // Defer until after the first Lit update cycle so @observes('scheme')
    // doesn't dispatch scheme-changed for the initial localStorage value:
    this.updateComplete.then(() => {
      this.#initialized = true;
    });
  }

  /**
   * Syncs the selected-state flags before each render so the
   * template always reflects the current `scheme` value.
   */
  protected override willUpdate(): void {
    if (isServer) {
      return;
    }

    this.#isLight = this.scheme === 'light';
    this.#isDark = this.scheme === 'dark';
    this.#isSystem = !this.#isLight && !this.#isDark;
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
   * @param e - The change event from the select element.
   */
  #onChange(e: Event) {
    if (e.target instanceof HTMLSelectElement) {
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
    } else {
      // Reset to system default
      document.body.style.removeProperty('color-scheme');
      localStorage.removeItem('rhdsColorScheme');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-scheme-dropdown': RhSchemeDropdown;
  }
}
