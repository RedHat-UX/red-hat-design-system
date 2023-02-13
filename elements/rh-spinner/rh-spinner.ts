import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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
 * Spinner consists of an animated circle and sometimes a text label, and it indicates that a section is loading.
 *
 * @slot - Optional text label below the animated circle.
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
