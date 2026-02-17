import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './rh-skeleton.css' with { type: 'css' };

/**
 * A skeleton displays an animated placeholder that mimics the structure and layout of actual content while it loads.
 * It gives users a preview of what's coming and reduces perceived loading time.
 *
 * @summary A placeholder for content that is loading.
 *
 * @alias skeleton
 */
@customElement('rh-skeleton')
export class RhSkeleton extends LitElement {
  static readonly styles = [styles];

  /** What shape the skeleton should be. Defaults to `body-copy`. */
  @property({ reflect: true }) type?: 'body-copy' | 'heading' | 'circle' | 'square' | 'rectangle';

  /** What size the skeleton should be. Defaults to `md`.
   * The `size` attribute is not valid on circle, square, or rectangle skeletons.
  */
  @property({ reflect: true }) size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  render() {
    return html`
      <span class="visually-hidden">
        <!-- Place a visually hidden description of what is being loaded for assistive technologies. -->
        <slot>Loading...</slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-skeleton': RhSkeleton;
  }
}
