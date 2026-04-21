import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './rh-skeleton.css' with { type: 'css' };

/**
 * A skeleton provides an animated placeholder for content that is loading
 * progressively. Must not receive focus or keyboard input.
 *
 * @summary A placeholder for content that is loading
 *
 * @alias skeleton
 */
@customElement('rh-skeleton')
export class RhSkeleton extends LitElement {
  static readonly styles = [styles];

  /** What shape the skeleton should be. Defaults to `body-copy`. */
  @property({ reflect: true }) type?: 'body-copy' | 'heading' | 'circle' | 'square' | 'rectangle';

  /**
   * What size the skeleton should be. Defaults to `md`.
   * The `size` attribute is not valid on circle, square, or rectangle skeletons.
   */
  @property({ reflect: true }) size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  render() {
    return html`
      <span class="visually-hidden">
        <!-- Visually hidden text for screen readers.
             Customize by slotting in text that describes the loading content.
             Accepts inline text content. Defaults to "Loading...".
             Should be customized when multiple skeletons appear on the same page
             to help users of assistive technologies distinguish between them. -->
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
