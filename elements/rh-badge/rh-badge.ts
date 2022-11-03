import { customElement } from 'lit/decorators.js';

import { BaseBadge } from '@patternfly/pfe-badge/BaseBadge';

import styles from './rh-badge.css';

export type state = (
  | 'info'
  | 'success'
  | 'moderate'
  | 'important'
  | 'critical'
);

/**
 * A badge is used to annotate other information with numerical content.
 */

@customElement('rh-badge')
export class RhBadge extends BaseBadge {
  static readonly styles = [...BaseBadge.styles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-badge': RhBadge;
  }
}
