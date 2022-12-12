import { customElement, property } from 'lit/decorators.js';

import { BaseBadge } from '@patternfly/pfe-badge/BaseBadge.js';

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
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-badge': RhBadge;
  }
}
