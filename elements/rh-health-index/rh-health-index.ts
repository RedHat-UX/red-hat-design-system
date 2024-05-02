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
    const classes = {
      [this.grade.toLowerCase()]: !!this.grade,
    };
    const boxes = ['A', 'B', 'C', 'D', 'E', 'F'];

    if (this.size === 'sm') {
      return html`<div id="container" class="${this.on}">
        <div class="box ${classMap(classes)}">
          <div class="grade" id="grade">${this.grade}</div>
        </div>
      </div>`;
    } else {
      return html`${
        (this.size === 'md') ? html`<div id="grade">${this.grade}</div>` : html``
      }
      <div id="container" class="${this.on}">
        ${boxes.map(box => {
          const active = box === this.grade;
          const boxLowercase = box.toLowerCase();
          const boxClasses = {
            'box': true,
            'active': active,
            [boxLowercase]: !!boxLowercase,
          };
          return html`
          <div class="${classMap(boxClasses)}">
            ${(this.size === 'lg' || this.size === 'xl') ? html`<div class="grade">${box}</div><div class="bottom"></div>` : html``}
          </div>`;
        })}
      </div>`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-health-index': RhHealthIndex;
  }
}
