import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { RhIcon } from '@rhds/elements/rh-icon/rh-icon.js';
import styles from './rh-progress-stepper.css';

type ProgressStepsOrientation = 'horizontal' | 'vertical';
type ProgressStepperState = 'inactive' | 'active' | 'complete' | 'warn' | 'fail' | 'custom';


/**
 * Progress Stepper
 * The Progress Stepper is a container of progress steps, it presents
 * a horizontal or vertical display of steps and their details. The stepper
 * can also display a compact view with a single heading.
 *
 * @summary       Progress Stepper
 * @slot          - Use this slot for `<rh-progress-step>` items
 *
 */
@customElement('rh-progress-stepper')
export class RhProgressStepper extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  @property({ reflect: true }) orientation: ProgressStepsOrientation = 'horizontal';
  @property({ reflect: true }) current = '';
  @property({ reflect: true }) state: ProgressStepperState = 'inactive';

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'list';
  }

  render(): TemplateResult<1> {
    return html`
      <strong id="current-step">${this.current}</strong>
      <div id="step-list">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-progress-stepper': RhProgressStepper;
  }
}
