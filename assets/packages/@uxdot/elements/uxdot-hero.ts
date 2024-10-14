import { LitElement, html } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';

import styles from './uxdot-hero.css';

@customElement('uxdot-hero')
export class UxdotHero extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div id="container" part="container">
        <slot name="header"></slot>
        <slot name="tagline"></slot>
        <slot></slot>
        <slot name="image"></slot>
      </div>
    `;
  }
}

