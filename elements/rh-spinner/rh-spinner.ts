import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { colorContextConsumer, ColorTheme } from '../../lib/context/color.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import styles from './rh-spinner.css';

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

  /** Sets color theme based on parent context */
   @colorContextConsumer()
   @property({ reflect: true }) on?: ColorTheme;

   render() {
     return html`
      <svg role="progressbar" viewBox="0 0 100 100" aria-live="polite">
          <circle class="track" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
          <circle class="dash" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
        </svg>
      <p><slot></slot></p>
    `;
   }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-spinner': RhSpinner;
  }
}

