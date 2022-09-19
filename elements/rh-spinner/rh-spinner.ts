import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';

import styles from './rh-spinner.css';


/**
 * A spinner to indicate that something is loading
 *
 * @slot - Provide text label to show below spinner
 */
@customElement('rh-spinner')
export class RhSpinner extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = styles;


  render() {
    return html`
    <div id="container">
      <div id="spinner">
        <slot></slot>
      </div>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-spinner': RhSpinner;
}
}
