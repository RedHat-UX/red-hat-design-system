import type { ColorTheme } from '@patternfly/pfe-core';
import { customElement, property } from 'lit/decorators.js';

import { colorContextConsumer } from '@patternfly/pfe-core/decorators.js';
import { BaseTooltip } from '@patternfly/pfe-tooltip/BaseTooltip.js';

import styles from './rh-tooltip.css';

/**
 * Tooltip
 * @slot - Place element content here
 */
@customElement('rh-tooltip')
export class RhTooltip extends BaseTooltip {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseTooltip.styles, styles];

  @colorContextConsumer()
  @property({ reflect: true }) on: ColorTheme = 'light';

  constructor() {
    super();
    if (['top', 'bottom'].includes(this.position)) {
      this.offset = [-4, 16];
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tooltip': RhTooltip;
  }
}
