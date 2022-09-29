import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';

import styles from './rh-spinner.css';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

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

  /** Size variant of spinner */
  /*
  @property({ reflect: true }) size: 'sm' | 'md' | 'lg';
  */


  /** Custom diameter of spinner set as CSS variable */
  @property({ reflect: true }) diameter?: `${string}${'px'|'%'|'rem'|'em'|'fr'|'pt'}`;

  render() {
    return html`
      <div>
      <svg role="progressbar" viewBox="0 0 100 100" aria-live="polite" style=${styleMap({ '--pf-c-spinner--diameter': this.diameter })}>
          <circle class="track" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
          <circle class="dash" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
        </svg>
      <p><slot></slot></p>
      </div>
    `;
  }


  /*
  protected _diameterChanged() {
    if (!this.diameter) {
      return;
    }

    this.style.setProperty('--pf-c-spinner--diameter', this.diameter);
  }
  */
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-spinner': RhSpinner;
  }
}
