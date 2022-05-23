import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';

import styles from './rh-stat.css';

/**
 * Stat
 * @slot - Place element content here
 */
@customElement('rh-stat') @pfelement()
export class RhStat extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  @property({ reflect: true, attribute: 'statistic' }) statistic = '';

  @property({ type: String, reflect: true, attribute: 'title' }) title = '';

  @property({ type: String, reflect: true, attribute: 'description' }) description = '';

  @property({ type: String, reflect: true, attribute: 'icon' }) icon = '';

  render() {
    return html`
      <div id="title">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-stat': RhStat;
  }
}
