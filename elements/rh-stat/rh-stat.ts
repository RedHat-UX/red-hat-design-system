import type { ColorPalette } from '@patternfly/pfe-core';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { colorContextProvider } from '@patternfly/pfe-core/decorators.js';

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

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette: ColorPalette = 'lightest';

  render() {
    return html`
      <div class="icon">
        <slot name="icon"></slot>
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="statistic">
        <slot name="statistic">Stat Placeholder</slot>
      </div>
      <div class="description">
        <slot name="description">Description Placeholder</slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-stat': RhStat;
  }
}
