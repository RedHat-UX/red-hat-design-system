import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './rh-skeleton.css';

/**
 * A skeleton loader is a placeholder for content that is loading.
 * @summary A placeholder for content that is loading.
 * @slot - Place a visually hidden description of what is being loaded for assistive technologies.
 * Defaults to `Loading...`.
 */
@customElement('rh-skeleton')
export class RhSkeleton extends LitElement {
  static readonly styles = [styles];

  /** What shape the skeleton should be */
  @property({ reflect: true }) type: 'text' | 'circle' | 'square' | 'rectangle' | null = 'text';

  /** What size the skeleton should be. Non-text skeletons are limited to small, medium, and large sizes. */
  @property({ reflect: true })
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | null = 'md';

  render() {
    return html`
      <p class="visually-hidden">
        <slot>
            Loading...
        </slot>
      </p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-skeleton': RhSkeleton;
  }
}
