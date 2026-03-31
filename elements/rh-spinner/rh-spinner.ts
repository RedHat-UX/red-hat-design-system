import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-spinner.css' with { type: 'css' };

export type SpinnerSize = RhSpinner['size'];

/**
 * Provides an animated loading indicator for when content is being
 * processed or fetched. A spinner should be used when loading takes
 * fewer than ten seconds and the content structure is unknown.
 * Authors must not use a spinner for indeterminate loading over ten
 * seconds; use a progress bar instead. Authors should avoid omitting
 * a text label, as screen readers rely on `role="status"` to announce
 * the ARIA live region. The element is not keyboard-focusable.
 *
 * @summary Notifies users their action is being processed or loaded
 *
 * @alias spinner
 */
@customElement('rh-spinner')
@themable
export class RhSpinner extends LitElement {
  static readonly styles = [styles];

  /**
   * Preset sizes for the spinner
   */
  @property({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'lg';

  render() {
    return html`
      <svg role="status" viewBox="0 0 100 100" aria-live="polite">
        <circle class="track" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
        <circle class="dash" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
      </svg>
      <!-- Optional text label displayed below the animated circle.
           Use a \`<p>\` element with a brief loading message (e.g. "Loading..."). -->
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-spinner': RhSpinner;
  }
}
