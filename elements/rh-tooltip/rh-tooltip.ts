import type { ColorTheme } from '@patternfly/pfe-core';
import { customElement, property } from 'lit/decorators.js';

import { pfelement, colorContextConsumer } from '@patternfly/pfe-core/decorators.js';
import { BaseTooltip } from '@patternfly/pfe-tooltip/BaseTooltip.js';

import styles from './rh-tooltip.css';

/**
 * Tooltip
 * @slot - Place element content here
 */
@customElement('rh-tooltip') @pfelement()
export class RhTooltip extends BaseTooltip {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseTooltip.styles, styles];

  @colorContextConsumer()
  @property({ reflect: true }) on: ColorTheme = 'light';
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tooltip': RhTooltip;
  }
}
