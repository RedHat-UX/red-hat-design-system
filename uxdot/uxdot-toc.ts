/* eslint-disable no-unused-private-class-members */
import { LitElement, html } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './uxdot-toc.css';
import listStyles from './uxdot-toc-list.css';
import itemStyles from './uxdot-toc-item.css';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

@customElement('uxdot-toc')
export class UxdotToc extends LitElement {
  static styles = [styles];

  @property() summary?: string;

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

@customElement('uxdot-toc-list')
export class UxdotTocList extends LitElement {
  static styles = [listStyles];

  #internals = InternalsController.of(this, { role: 'list' });

  render() {
    return html`<slot></slot>`;
  }
}


@customElement('uxdot-toc-item')
export class UxdotTocItem extends LitElement {
  static styles = [itemStyles];
  @property() href?: string;

  #internals = InternalsController.of(this, { role: 'listitem' });

  render() {
    return html`
      <a href="${this.href}">
        <svg aria-hidden="true"
             fill="currentColor"
             focusable="false"
             role="presentation"
             viewBox="0 0 31.56 31.56"
             width="16px"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M15.78 0l-3.1 3.1 10.5 10.49H0v4.38h23.18l-10.5 10.49 3.1 3.1 15.78-15.78L15.78 0z"></path>
        </svg>
        <slot></slot>
      </a>
    `;
  }
}
