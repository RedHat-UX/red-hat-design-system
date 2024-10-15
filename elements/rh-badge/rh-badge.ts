import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { colorContextConsumer } from '@rhds/elements/lib/context/color/consumer.js';

import styles from './rh-badge.css';

/**
 * A badge is used to annotate other information like a label or an object name.
 *
 *  - `neutral` - Indicates generic information or a message with no severity.
 *  - `danger` - Indicates a danger state, like an error that is blocking a user from completing a task.
 *  - `warning` - Indicates a warning state, like a non-blocking error that might need to be fixed.
 *  - `caution` - Indicates an action or notice which should immediately draw the attention
 *  - `info` - Indicates helpful information or a message with very little to no severity.
 *  - `success` - Indicates a success state, like if a process was completed without errors.
 *
 * @summary Annotates information like a label or object
 *
 */
@customElement('rh-badge')
export class RhBadge extends LitElement {
  static readonly styles = [styles];

  /**
   * Denotes the state-of-affairs this badge represents
   */
  @property({ reflect: true })
  accessor state:
    | 'danger'
    | 'warning'
    | 'caution'
    | 'neutral'
    | 'success'
    | 'moderate' // deprecated
    | 'important' // deprecated
    | 'critical' // deprecated
    | 'info' =
      'neutral';

  /**
   * Sets a numeric value for a badge.
   *
   * You can pair it with `threshold` attribute to add a `+` sign
   * if the number exceeds the threshold value.
   */
  @property({ reflect: true, type: Number })
  accessor number: number | undefined;

  /**
   * Sets a threshold for the numeric value and adds `+` sign if
   * the numeric value exceeds the threshold value.
   */
  @property({ reflect: true, type: Number })
  accessor threshold: number | undefined;

  @colorContextConsumer()
  private accessor on: string | undefined;

  /** Ensures that state is consistent, regardless of input */
  @observes('state', { waitFor: 'updated' })
  private stateChanged() {
    const state = this.state.toLowerCase();
    switch (state) {
      // the first four are deprecated pre-DPO status names
      case 'moderate': this.state = 'warning'; break;
      case 'important': this.state = 'caution'; break;
      case 'critical': this.state = 'danger'; break;
      case 'note': this.state = 'info'; break;
      // the following are DPO-approved status names
      case 'danger':
      case 'warning':
      case 'caution':
      case 'neutral':
      case 'info':
      case 'success':
        return;
      default:
        this.state = 'neutral';
    }
  }

  override render() {
    const { threshold, number, textContent, on = 'light', state = 'neutral' } = this;
    const displayText =
        (threshold && number && (threshold < number)) ? `${threshold.toString()}+`
      : (number != null) ? number.toString()
      : textContent ?? '';

    return html`
      <span class="${classMap({
        on: true,
        [on]: true,
        [state]: true,
      })}">${displayText}</span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-badge': RhBadge;
  }
}
