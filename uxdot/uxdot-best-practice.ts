import { LitElement, html } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './uxdot-best-practice.css';

@customElement('uxdot-best-practice')
export class UxdotBestPractice extends LitElement {
  static styles = [styles];

  @property({ reflect: true }) accessor variant: 'do' | 'dont' = 'do';

  render() {
    const { variant } = this;
    const icon = variant === 'do' ? 'check-circle' : 'close-circle';
    const title = variant === 'do' ? 'Do' : 'Don\'t';
    return html`
      <figure id="container">
        <slot name="image"></slot>
        <figcaption id="${variant}">
          <span><rh-icon set="ui" icon="${icon}" size="md"></rh-icon>${title}</span>
          <slot></slot>
        </figcaption>
      </figure>
    `;
  }
}

