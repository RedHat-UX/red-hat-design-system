import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './rh-code-block-toolbar.css';

/**
 *
 *
 * @summary  A toolbar used in a panel
 *
 * @slot          - Toolbar items
 * @slot toolbar  - Toolbar actions
 *
 */
@customElement('rh-code-block-toolbar')
export class RhCodeBlockToolbar extends LitElement {
  static readonly styles = styles;

  @property() title = '';

  render() {
    return html`
      <div id="content">
        <slot name="title">${this.title}</slot>
        <slot></slot>
        <slot name="actions"></slot>
      </div>
    `;
  }
}
