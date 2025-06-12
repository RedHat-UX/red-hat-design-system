import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { RhIcon } from '@rhds/elements/rh-icon/rh-icon.js';
import styles from './rh-progress-stepper.css';

type ProgressStepsOrientation = 'horizontal' | 'vertical';

/**
 * Progress Steps
 * @slot - Place element content here
 */
@customElement('rh-progress-stepper')
export class RhProgressStepper extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  #internals = InternalsController.of(this, { role: 'list' });

  @property({ reflect: true }) orientation: ProgressStepsOrientation = 'horizontal';
<<<<<<< HEAD
  @property({ reflect: true }) current: String = "";

  render(): TemplateResult<1> {
    return html`
      <strong id="current-step">${this.current}</strong>
=======

  render(): TemplateResult<1> {
    return html`
>>>>>>> 50061e12d9d18651a6825147430c1778b71ad546
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-progress-stepper': RhProgressStepper;
  }
}
