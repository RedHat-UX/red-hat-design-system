import { LitElement, html, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-health-index.css' with { type: 'css' };

/**
 * Health index provides a visual grade (A through F) for communicating the
 * health or security level of an item. Authors must set the `grade`
 * attribute and should place it in context that makes its purpose clear.
 * It uses ARIA `meter` role so screen reader users can read the grade.
 * This element should not receive keyboard focus, as it is non-interactive.
 *
 * @summary     Displays a health grade for a particular item or package
 *
 * @alias health-index
 */
@customElement('rh-health-index')
@themable
export class RhHealthIndex extends LitElement {
  static readonly styles = [styles];

  private static grades = 'ABCDEF';

  /**
   * Sets the visual size of the health index. The `sm` size renders only the
   * active grade letter. The default `md` size renders all grade boxes without
   * labels. The `lg` and `xl` sizes render all grade letters with the active
   * grade highlighted and bordered.
   */
  @property({ reflect: true }) size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  /**
   * Sets the health grade from A (best) to F (worst). Grades A and B use
   * success status colors, C uses warning, D uses caution, and E and F use
   * danger. The value is case-insensitive; lowercase input is normalized to
   * uppercase.
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
    const { size = 'md' } = this;
    const grades = [...RhHealthIndex.grades].map(x => x.toLowerCase());
    const grade = this.grade.toLowerCase();
    return html`
      <div id="container"
           aria-hidden="true"
           class="${classMap({ [size]: true })}">
        <div id="grade" ?hidden="${size !== 'md'}">${grade}</div>${size === 'sm' ? html`
        <div class="box ${classMap({ [grade]: true, [size]: true })}">${grade}</div>` : grades.map(letter => html`
        <div class="box ${classMap({ [letter]: true, [size]: true, active: letter === grade })}">
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
