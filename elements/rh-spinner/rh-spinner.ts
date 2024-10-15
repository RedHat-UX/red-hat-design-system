import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import styles from './rh-spinner.css';

export type SpinnerSize = RhSpinner['size'];

/**
 * A spinner indicates that an action is in progress.
 * It appears as an animated circle over the section that is loading,
 * and it may include a text label
 * @summary Notifies users their action is being processed or loaded
 * @slot - Optional text label below the animated circle.
 */
@customElement('rh-spinner')
export class RhSpinner extends LitElement {
  static readonly styles = [styles];

  /**
   * Preset sizes for the spinner
   */
  @property({ reflect: true })
  accessor size: 'sm' | 'md' | 'lg' = 'lg';

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer()
  private accessor on: ColorTheme | undefined;

  render() {
    const { on = '' } = this;
    return html`
      <svg role="status" viewBox="0 0 100 100" aria-live="polite">
        <circle class="track ${classMap({ [on]: !!on })}" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
        <circle class="dash ${classMap({ [on]: !!on })}" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
      </svg>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-spinner': RhSpinner;
  }
}
