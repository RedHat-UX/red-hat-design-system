import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { observes } from '@patternfly/pfe-core/decorators.js';

import styles from './uxdot-color-scheme-picker.css';
import visuallyHidden from './visually-hidden.css';

@customElement('uxdot-color-scheme-picker')
export class UxdotColorSchemePicker extends LitElement {
  static styles = [styles, visuallyHidden];

  @property({ reflect: true }) scheme: 'light' | 'dark' | 'light dark' = 'light dark';

  render() {
    return html`
      <fieldset @change="${this.#onChange}">
        <legend>Color scheme:</legend>
        <div id="button-group">
          <label title="Light">
            <span class="visually-hidden">Light</span>
            <input type="radio" name="scheme" value="light">
            <rh-icon set="ui" icon="light-mode-fill"></rh-icon>
          </label>
          <label title="Dark">
            <span class="visually-hidden">Dark</span>
            <input type="radio" name="scheme" value="dark">
            <rh-icon set="ui" icon="dark-mode-fill"></rh-icon>
          </label>
          <label title="Device default">
            <span class="visually-hidden">Device default</span>
            <input type="radio" name="scheme" value="light dark" checked>
            <rh-icon set="ui" icon="auto-light-dark-mode"></rh-icon>
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
  private modeChanged() {
    document.body.style.setProperty('color-scheme', this.scheme);
  }
}
