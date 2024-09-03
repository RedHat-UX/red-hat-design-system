import { LitElement, html } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './uxdot-toc.css';

@customElement('uxdot-toc')
export class UxdotToc extends LitElement {
  static styles = [styles];

  @property() summary?: string;

  render() {
    return html`
      <div id="container" part="container">
        <details>
          <summary id="summary">${this.summary}</summary>
          <nav aria-labelledby="summary">
            <slot name="details"></slot>
          </nav>
        </details>
        <div id="expanded">
          <div id="summary">${this.summary}</div>
          <nav aria-labelledby="summary">
            <slot name="expanded"></slot>
          </nav>
        </div>
      </div>
    `;
  }
}
