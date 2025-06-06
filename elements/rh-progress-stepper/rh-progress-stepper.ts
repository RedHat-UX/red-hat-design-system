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

  render(): TemplateResult<1> {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-progress-stepper': RhProgressStepper;
  }
}
