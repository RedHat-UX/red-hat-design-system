import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import { BaseSpinner } from '@patternfly/elements/pf-spinner/BaseSpinner.js';

import styles from './rh-spinner.css';

export type SpinnerSize = (
  | 'sm'
  | 'md'
  | 'lg'
);

/**
 * A spinner indicates that an action is in progress.
 * It appears as an animated circle over the section that is loading,
 * and it may include a text label
 *
 * @slot - Optional text label below the animated circle.
 *
 * @cssprop --rh-color-accent-base-on-dark
 * @cssprop --rh-color-accent-base-on-light
 * @cssprop --rh-color-gray-05
 * @cssprop --rh-color-gray-60
 * @cssprop --rh-font-family-body-text
 * @cssprop --rh-font-size-body-text-lg
 * @cssprop --rh-font-size-body-text-md
 * @cssprop --rh-font-size-body-text-sm
 * @cssprop --rh-font-weight-body-text-regular
 * @cssprop --rh-length-2xs
 * @cssprop --rh-length-4xl
 * @cssprop --rh-length-sm
 * @cssprop --rh-length-xs
 * @cssprop --rh-line-height-body-text
 * @cssprop --rh-size-icon-01
 * @cssprop --rh-size-icon-04
 * @cssprop --rh-size-icon-06
 * @cssprop --rh-space-lg
 *
 */
@customElement('rh-spinner')
export class RhSpinner extends BaseSpinner {
  static readonly styles = [styles];

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  /**
   * Preset sizes for the spinner
   */
  @property({ reflect: true }) size: SpinnerSize = 'lg';

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
