import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import styles from './rh-health-index.css';

/**
 * Health index displays a health grade (A–F) for a particular item or package.
 *
 * @summary     Displays a health grade for a particular item or package
 *
 */
@customElement('rh-health-index')
export class RhHealthIndex extends LitElement {
  static readonly styles = [styles];

  /**
   * Sets the size of the health index
   * Defaults to `md`
   */
  @property({ reflect: true }) size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  /**
   * Sets the health grade
   * Defaults to `A`
   */
  @property({
    reflect: true,
    attribute: 'grade',
  })
    grade: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' = 'A';

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  render() {
    const { on, size } = this;
    const grade = this.grade.toLowerCase();
    return html`
      <div id="container"
           role="img"
           class="${classMap({ [size ?? '']: !!size, [on ?? '']: !!on })}"
           aria-label="Health: grade ${grade.toUpperCase()} out of A through F">
        <div id="grade" ?hidden="${size !== 'md'}">${grade}</div>
        ${size === 'sm' ? html`
        <div class="box active ${grade}">${grade}</div>
        ` : [...'abcdef'].map(box => html`
        <div class="box ${classMap({ [box]: true, active: box === grade })}">
          ${!(size === 'lg' || size === 'xl') ? '' : box}
        </div>
        `)}

      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-health-index': RhHealthIndex;
  }
}
