import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { BaseBadge } from '@patternfly/elements/pf-badge/BaseBadge.js';

import styles from './rh-badge.css';

/**
 * A badge is used to annotate other information like a label or an object name.
 *
 * - **info**: Indicates informative or low impact
 * - **success**: Indicates stability or completion
 * - **warning**: Indicates caution
 * - **error**: Indicates an error
 * - **critical**: Indicates danger or something critical
 *
 * @summary Annotates other information like a label or an object name.
 *
 * @cssprop --rh-border-radius-pill
 * @cssprop --rh-color-accent-base-on-light
 * @cssprop --rh-color-green-500
 * @cssprop --rh-color-red-600
 * @cssprop --rh-color-red-700
 * @cssprop --rh-color-surface-lighter
 * @cssprop --rh-color-text-primary-on-dark
 * @cssprop --rh-color-text-primary-on-light
 * @cssprop --rh-font-size-body-text-xs
 * @cssprop --rh-length-2xl
 * @cssprop --rh-line-height-body-text
 * @cssprop --rh-space-md
 */
@customElement('rh-badge')
export class RhBadge extends BaseBadge {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseBadge.styles, styles];

  /**
   * Denotes the state-of-affairs this badge represents
   */
  @property({ reflect: true }) state?: 'info' | 'success' | 'moderate' | 'important' | 'critical';

  @property({ reflect: true, type: Number }) number?: number;

  @property({ reflect: true, type: Number }) threshold?: number;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-badge': RhBadge;
  }
}
