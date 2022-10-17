import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { colorContextConsumer, colorContextProvider } from '../../lib/context/color.js';
import type { ColorPalette, ColorTheme } from '../../lib/context/color.js';


import styles from './rh-spinner.css';

export type SpinnerSize = (
  | 'sm'
  | 'md'
  | 'lg'
);


/**
 * Spinner class
 *
 * @slot - Loading message
 *
 */


@customElement('rh-spinner')
export class RhSpinner extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = styles;


  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   */
     @colorContextProvider()
     @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

     /**
   */
   @colorContextConsumer()
   @property({ reflect: true }) on?: ColorTheme;

   /** Preset sizes for the spinner */
  @property({ reflect: true }) size: SpinnerSize = 'lg';


  render() {
    return html`
        <svg role="progressbar" viewBox="0 0 100 100" aria-live="polite">
          <circle class="track" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
          <circle class="dash" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
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


