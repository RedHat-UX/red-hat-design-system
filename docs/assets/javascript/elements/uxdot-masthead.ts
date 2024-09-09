import { LitElement, html } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';

import styles from './uxdot-masthead.css';

@customElement('uxdot-masthead')
export class UxdotMasthead extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div id="container" part="container">
        <slot name="hamburger"></slot>
        <slot name="logo"></slot>
        <slot name="links"></slot>
      </div>
    `;
  }
}

