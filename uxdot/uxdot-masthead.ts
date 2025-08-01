import { LitElement, html } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import '@rhds/elements/rh-scheme-toggle/rh-scheme-toggle.js';

import styles from './uxdot-masthead.css';

@customElement('uxdot-masthead')
export class UxdotMasthead extends LitElement {
  static styles = [styles];

  @property() version!: string;

  render() {
    const { version } = this;
    return html`
      <div id="container" part="container">
        <slot id="hamburger" name="hamburger"></slot>
        <div id="logo">
          <a href="/">
            <img alt="Red Hat Design System logo"
                 src="/assets/red-hat-design-system.svg"
                 width="188"
                 height="40">
          </a>
        </div>
        <rh-scheme-toggle id="scheme"></rh-scheme-toggle>
        <div id="links">
          <a id="github" href="https://github.com/RedHat-UX/red-hat-design-system/">
            <span class="display-xs">Contribute on Github</span>
            <rh-icon set="social" icon="github" size="lg"></rh-icon>
          </a>
          <a id="version" href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v${version}/"
             title="Version ${version}"
             aria-label="Version ${version}">v${version}</a>
        </div>
      </div>
      <slot></slot>
    `;
  }
}
