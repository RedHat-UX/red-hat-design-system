import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { type ColorPalette } from '@rhds/elements/lib/context/color/provider.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';

import styles from './rh-spinner.css';

export type SpinnerSize = RhSpinner['size'];

/**
 * A spinner indicates that an action is in progress.
 * It appears as an animated circle over the section that is loading,
 * and it may include a text label
 *
 * @summary Notifies users their action is being processed or loaded
 *
 * @slot - Optional text label below the animated circle.
 *
 */
@customElement('rh-spinner')
export class RhSpinner extends LitElement {
  static readonly styles = [styles];

  /**
   * Preset sizes for the spinner
   */
  @property({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'lg';

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorPalette;

  render() {
    const { on = '' } = this;
    return html`
      <svg role="status" viewBox="0 0 100 100" aria-live="polite" class="${classMap({ [on]: !!on })}">
        <circle class="track" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
        <circle class="dash" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
      </svg>
      <slot></slot>
    `;
  }

  // START hack for removal of contextProvider. delete for version 2.0
  /**
   * @deprecated Use Color context instead. See https://ux.redhat.com/foundations/color/context/
   */
  @property({ attribute: 'color-palette' }) colorPalette?: string;

  willUpdate() {
    const [cp] = this.getAttribute('color-palette')?.match(/^dark|^light/) ?? [];
    if (cp) {
      this.on = cp as 'dark' | 'light';
      // eslint-disable-next-line no-console
      console.warn(`[rh-spinner]: do not use color-palette, it is deprecated`);
    }
  }
  // END hack
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-spinner': RhSpinner;
  }
}
