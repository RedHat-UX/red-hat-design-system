import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-spinner.css';

export type SpinnerSize = RhSpinner['size'];

/**
 * A spinner indicates that an action is in progress.
 * It appears as an animated circle over the section that is loading,
 * and it may include a text label
 *
 * @summary Notifies users their action is being processed or loaded
 *
 * @alias spinner
 */
@customElement('rh-spinner')
@themable
export class RhSpinner extends LitElement {
  static readonly styles = [styles];

  /**
   * Preset sizes for the spinner
   */
  @property({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'lg';

  render() {
    return html`
      <svg role="status" viewBox="0 0 100 100" aria-live="polite">
        <circle class="track" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
        <circle class="dash" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
      </svg>
      <!-- Optional text label below the animated circle. -->
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-spinner': RhSpinner;
  }
}
