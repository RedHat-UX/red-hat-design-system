import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit-html/directives/class-map.js';

import { colorContextConsumer } from '@rhds/elements/lib/context/color/consumer.js';

import styles from './rh-badge.css';

/**
 * A badge is used to annotate other information like a label or an object name.
 *
 * - **info**: Indicates informative or low impact
 * - **success**: Indicates stability or completion
 * - **moderate**: Indicates caution
 * - **important**: Indicates an error
 * - **critical**: Indicates danger or something critical
 *
 * @summary Annotates information like a label or object
 *
 */
@customElement('rh-badge')
export class RhBadge extends LitElement {
  static readonly styles = [styles];

  @colorContextConsumer() private on?: string;

  /**
   * Denotes the state-of-affairs this badge represents
   */
  @property({ reflect: true }) state?:
    | 'info'
    | 'success'
    | 'moderate'
    | 'important'
    | 'critical';

  /**
   * Sets a numeric value for a badge.
   *
   * You can pair it with `threshold` attribute to add a `+` sign
   * if the number exceeds the threshold value.
   */
  @property({ reflect: true, type: Number }) number?: number;

  /**
   * Sets a threshold for the numeric value and adds `+` sign if
   * the numeric value exceeds the threshold value.
   */
  @property({ reflect: true, type: Number }) threshold?: number;

  override render() {
    const { threshold, number, textContent, on = '', state = '' } = this;
    const displayText =
        (threshold && number && (threshold < number)) ? `${threshold.toString()}+`
      : (number != null) ? number.toString()
      : textContent ?? '';

    return html`
      <span class="${classMap({
        on: true,
        [on]: !!on,
        [state]: !!state,
      })}">${displayText}</span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-badge': RhBadge;
  }
}
