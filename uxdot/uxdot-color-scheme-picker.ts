import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './uxdot-color-scheme-picker.css';
import visuallyHidden from './visually-hidden.css';
import { observes } from '@patternfly/pfe-core/decorators.js';
import type { RhSurface } from 'elements/rh-surface/rh-surface.js';

@customElement('uxdot-color-scheme-picker')
export class UxdotColorSchemePicker extends LitElement {
  static styles = [styles, visuallyHidden];

  @property() mode: 'light' | 'dark' | 'auto' = 'auto';

  render() {
    return html`
      <fieldset @change="${this.#onChange}">
        <legend>Color Scheme:</legend>
        <div id="button-group">
          <label>
            <span class="visually-hidden">Light Mode</span>
            <input type="radio" name="scheme" value="light">
            <rh-icon set="ui" icon="light-mode-fill"></rh-icon>
          </label>
          <label>
            <span class="visually-hidden">Dark Mode</span>
            <input type="radio" name="scheme" value="dark">
            <rh-icon set="ui" icon="dark-mode-fill"></rh-icon>
          </label>
          <label>
            <span class="visually-hidden">Automatic</span>
            <input type="radio" name="scheme" value="auto" checked>
            <rh-icon set="ui" icon="auto-light-dark-mode"></rh-icon>
          </label>
        </div>
      </fieldset>
    `;
  }

  #onChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.mode = e.target.value as this['mode'];
    }
  }

  @observes('mode')
  private modeChanged() {
    const main = document.getElementById('main') as RhSurface;
    const side = document.querySelector('uxdot-sidenav')!;
    switch (this.mode) {
      case 'light':
        main.colorPalette = 'lightest';
        side.colorPalette = 'lightest';
        break;
      case 'dark':
        main.colorPalette = 'darker';
        side.colorPalette = 'darker';
        break;
      default:
        main.removeAttribute('color-palette');
        side.removeAttribute('color-palette');
    }
  }
}
