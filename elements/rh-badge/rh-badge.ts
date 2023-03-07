import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { BaseBadge } from '@patternfly/elements/pf-badge/BaseBadge.js';

import styles from './rh-badge.css';

/**
 * A badge is used to annotate other information with numerical content.
 */

@customElement('rh-badge')
export class RhBadge extends BaseBadge {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseBadge.styles, styles];

  /**
   * Denotes the state-of-affairs this badge represents
   * Options include read and unread
   */
  @property({ reflect: true }) state?: 'info'|'success'|'moderate'|'important'|'critical';

  @property({ reflect: true, type: Number }) number?: number;

  @property({ reflect: true, type: Number }) threshold?: number;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-badge': RhBadge;
  }
}
