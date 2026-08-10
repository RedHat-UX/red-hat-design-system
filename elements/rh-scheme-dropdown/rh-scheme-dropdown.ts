import { isServer, LitElement } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
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
 * and system defaults. Accessible by default with a screen-reader
 * label (WCAG 4.1.2), keyboard navigation, and focus management.
 * Authors should set `accessible-label` for localization.
 *
 * @summary Displays a variety of color schemes in a menu dropdown
 *
 * @fires {SchemeChangedEvent} scheme-changed - Fired when the color scheme changes
 */
@customElement('rh-scheme-dropdown')
export class RhSchemeDropdown extends LitElement {
  static styles = [styles];

  static override readonly shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

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
  @property({ attribute: 'accessible-label' }) accessibleLabel = 'Color scheme';

  /**
   * Accessible label for the light mode option.
   */
  @property({ attribute: 'accessible-label-light' }) accessibleLabelLight = 'Light';

  /**
   * Accessible label for the dark mode option.
   */
  @property({ attribute: 'accessible-label-dark' }) accessibleLabelDark = 'Dark';

  /**
   * Accessible label for the system default option.
   */
  @property({ attribute: 'accessible-label-system' }) accessibleLabelSystem = 'System';

  render() {
    // IMPORTANT: do not put Lit child bindings (${...}) inside <option>.
    // In Custom Select browsers, <selectedcontent> cloneNode()'s the selected
    // option — including Lit's <!--?lit--> markers — which desyncs template
    // parts and renders boolean values as labels ("false"). See lit#5349.
    // unsafeStatic inlines escaped label text with no ChildPart markers.
    // Author-facing strings must be HTML-escaped before unsafeStatic.
    const labelSystem = unsafeStatic(this.#escapeHtml(this.accessibleLabelSystem));
    const labelLight = unsafeStatic(this.#escapeHtml(this.accessibleLabelLight));
    const labelDark = unsafeStatic(this.#escapeHtml(this.accessibleLabelDark));

    return html`
      <label for="scheme-dropdown" class="visually-hidden">${this.accessibleLabel}:</label>
      <select id="scheme-dropdown" @change="${this.#onChange}">
        <button type="button">
          <selectedcontent></selectedcontent>
          <rh-icon set="microns" icon="caret-down-fill"></rh-icon>
        </button>
        <option value="light dark"
                ?selected="${this.scheme !== 'light' && this.scheme !== 'dark'}">
          <rh-icon set="ui" icon="auto-light-dark-mode"></rh-icon>
          <span class="option-text">${labelSystem}</span>
          <rh-icon set="ui" icon="check" class="checkmark"></rh-icon>
        </option>
        <option value="light" ?selected="${this.scheme === 'light'}">
          <rh-icon set="ui" icon="light-mode"></rh-icon>
          <span class="option-text">${labelLight}</span>
          <rh-icon set="ui" icon="check" class="checkmark"></rh-icon>
        </option>
        <option value="dark" ?selected="${this.scheme === 'dark'}">
          <rh-icon set="ui" icon="dark-mode"></rh-icon>
          <span class="option-text">${labelDark}</span>
          <rh-icon set="ui" icon="check" class="checkmark"></rh-icon>
        </option>
      </select>
    `;
  }

  /**
   * Syncs `select.value` and option `selected` attrs to `scheme` after SSR
   * hydration. Lit's `?selected` on `<option>` can stay stale otherwise.
   * @param changed - Reactive properties that changed this update cycle
   */
  protected override updated(changed: Map<PropertyKey, unknown>): void {
    super.updated(changed);
    if (isServer) {
      return;
    }

    const select = this.shadowRoot?.querySelector('select');
    if (select) {
      const value = this.scheme ?? 'light dark';
      if (select.value !== value) {
        select.value = value;
      }

      // Realign `selected` attribute even when select.value already matches.
      for (const option of select.options) {
        if (option.value === value) {
          option.setAttribute('selected', '');
        } else {
          option.removeAttribute('selected');
        }
      }
    }
  }

  /**
   * Escapes author-facing localization strings before inlining them
   * with unsafeStatic. Required because unsafeStatic inserts raw
   * HTML into the template.
   * @param text - Plain text to escape for safe HTML inlining.
   */
  #escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
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
      if (this.hasUpdated) {
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
