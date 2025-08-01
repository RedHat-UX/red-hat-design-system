import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { themable } from '@rhds/elements/lib/themable.js';

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
 * @alias badge
 *
 */
@customElement('rh-badge')
@themable
export class RhBadge extends LitElement {
  static readonly styles = [styles];

  /**
   * Denotes the state-of-affairs this badge represents
   * Note: 'moderate','important', and 'critical' will also work, but are deprecated
   */
  @property({ reflect: true }) state:
    | 'danger'
    | 'warning'
    | 'caution'
    | 'neutral'
    | 'success'
    | 'info' =
      'neutral';

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
    const { state, threshold, number } = this;
    const isLarge = !!threshold && number != null && (threshold < number);
    const computedContent = isLarge ? `${threshold}+` : number?.toString() ?? null;
    return html`
      <span class="${classMap({ [state]: true })}">${computedContent}</span>
      <slot class="${classMap({ [state]: true })}"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-badge': RhBadge;
  }
}
