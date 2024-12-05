import type { RhSurface } from 'elements/rh-surface/rh-surface.js';

import { LitElement, html, isServer } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';

import '@rhds/elements/rh-switch/rh-switch.js';
import '@rhds/elements/rh-surface/rh-surface.js';

import styles from './uxdot-masthead.css';

@customElement('uxdot-masthead')
export class UxdotMasthead extends LitElement {
  static styles = [styles];

  declare shadowRoot: ShadowRoot;

  get #switch() {
    return this.shadowRoot.querySelector('rh-switch')!;
  }

  get #main() {
    return document.getElementById('main') as RhSurface;
  }

  get isDarkMode() {
    return this.#switch.checked;
  }

  set isDarkMode(dark: boolean) {
    this.#switch.checked = dark;
    this.#onChangeTheme();
  }

  render() {
    return html`
      <rh-surface id="container"
                  color-palette="darkest"
                  part="container">
        <slot id="hamburger" name="hamburger"></slot>
        <slot id="logo" name="logo"></slot>
        <div id="color">
          <rh-switch id="uxdot-theme-switch"
                     accessible-label="Color scheme"
                     @change="${this.#onChangeTheme}">
            <rh-icon slot="message-on" set="standard" icon="star"></rh-icon>
            <rh-icon slot="message-off" set="standard" icon="sun"></rh-icon>
          </rh-switch>
        </div>
        <slot id="links" name="links"></slot>
      </rh-surface>
    `;
  }

  firstUpdated() {
    if (!isServer) {
      this.#onChangeTheme();
    }
  }

  async #onChangeTheme() {
    await this.#main.updateComplete;
    this.#main.colorPalette = this.isDarkMode ? 'darkest' : 'lightest';
  }
}

