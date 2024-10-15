import { LitElement, html } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './uxdot-toc.css';

@customElement('uxdot-toc')
export class UxdotToc extends LitElement {
  static styles = [styles];

  @property() accessor summary: string | undefined;

  render() {
    return html`
      <div id="container" part="container">
        <details>
          <summary id="summary-sm" class="summary">${this.summary}</summary>
          <nav aria-labelledby="summary-sm">
            <slot name="details"></slot>
          </nav>
        </details>
        <div id="expanded">
          <div id="summary-expanded" class="summary">${this.summary}</div>
          <nav aria-labelledby="summary-expanded">
            <slot name="expanded"></slot>
          </nav>
        </div>
      </div>
    `;
  }
}
