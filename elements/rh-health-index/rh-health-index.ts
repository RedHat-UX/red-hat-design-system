import { LitElement, html, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import styles from './rh-health-index.css';

/**
 * Health index displays a health grade (A–F) for a particular item or package.
 * @summary     Displays a health grade for a particular item or package
 */
@customElement('rh-health-index')
export class RhHealthIndex extends LitElement {
  static readonly styles = [styles];

  private static grades = 'ABCDEF';

  /**
   * Sets the size of the health index
   * Defaults to `md`
   */
  @property({ reflect: true }) size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  /**
   * Sets the health grade
   * Defaults to `A`
   */
  @property({ reflect: true }) grade: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' = 'A';

  // TODO: use I18nController to support officially supported languages.
  #internals = InternalsController.of(this, {
    role: 'meter',
    ariaValueMin: '1',
    ariaValueMax: '6',
    ariaValueText: 'Grade A',
    ariaLabel: 'Health graded A through F',
    ariaRoleDescription: 'Level indicator',
  });

  protected override willUpdate(changed: PropertyValues<this>): void {
    this.grade = this.grade.toUpperCase() as this['grade'];
    if (changed.has('grade')) {
      const { grade } = this;
      const gradeNumeral = (RhHealthIndex.grades.indexOf(grade) + 1);
      this.#internals.ariaValueNow = gradeNumeral.toString();
      this.#internals.ariaValueText = `Grade ${grade}`;
    }
  }

  override render() {
    const { size } = this;
    const grades = [...RhHealthIndex.grades].map(x => x.toLowerCase());
    const grade = this.grade.toLowerCase();
    return html`
      <div id="container"
           aria-hidden="true"
           class="${classMap({ [size ?? '']: !!size })}">
        <div id="grade" ?hidden="${size !== 'md'}">${grade}</div>${size === 'sm' ? html`
        <div class="box active ${grade}">${grade}</div>` : grades.map(letter => html`
        <div class="box ${classMap({ [letter]: true, active: letter === grade })}">
          ${!(size === 'lg' || size === 'xl') ? '' : letter}
        </div>`)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-health-index': RhHealthIndex;
  }
}
