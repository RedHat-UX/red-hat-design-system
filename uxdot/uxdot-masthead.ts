import { LitElement, html } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import './uxdot-color-scheme-picker.js';

import styles from './uxdot-masthead.css';

@customElement('uxdot-masthead')
export class UxdotMasthead extends LitElement {
  static styles = [styles];

  @property() version!: string;

  render() {
    const { version } = this;
    return html`
      <div id="container" part="container">
        <slot name="hamburger"></slot>
        <div id="logo">
          <a href="/">
            <img alt="Red Hat Design System logo"
                 src="/assets/red-hat-design-system.svg"
                 width="188"
                 height="40">
          </a>
        </div>
        <uxdot-color-scheme-picker></uxdot-color-scheme-picker>
        <div id="links">
          <a href="https://github.com/RedHat-UX/red-hat-design-system/">
            <span class="display-xs">Contribute on Github</span>
            <rh-icon set="social" icon="github" size="lg"></rh-icon>
          </a>
          <a href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v${version}/"
             title="Version ${version}"
             aria-label="Version ${version}">v${version}</a>
        </div>
      </div>
    `;
  }
}
