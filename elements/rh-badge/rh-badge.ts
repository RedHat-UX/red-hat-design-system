import { customElement, property } from 'lit/decorators.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';
import { BaseBadge } from '@patternfly/pfe-badge/BaseBadge.js';

import styles from './rh-badge.css';

export type state = (
  | 'info'
  | 'success'
  | 'moderate'
  | 'important'
  | 'critical'
);

/**
 * Badge
 * @slot - Place element content here
 */

@customElement('rh-badge')
export class RhBadge extends BaseBadge {
  static readonly version = '{{version}}';
  static readonly styles = [...BaseBadge.styles, styles];

  @property({ reflect: true }) state?: 'info'|'success' | 'moderate' | 'important' | 'critical';
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-badge': RhBadge;
  }
}
