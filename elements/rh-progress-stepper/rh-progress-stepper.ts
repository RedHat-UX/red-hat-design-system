import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { RhIcon } from '@rhds/elements/rh-icon/rh-icon.js';
import styles from './rh-progress-stepper.css';

type ProgressStepsOrientation = 'horizontal' | 'vertical';
type ProgressStepperState = 'inactive' | 'active' | 'complete' | 'warn' | 'fail' | 'custom';

/**
 * A progress stepper is a container of progress steps that presents
 * a horizontal or vertical display of steps and their details. The stepper
 * can also display a compact view with a single heading.
 *
 * @summary Container for progress steps with horizontal or vertical layout
 *
 * @alias progress-stepper
 *
 * @slot - Use this slot for `<rh-progress-step>` items
 * @attr {string} orientation - Sets the orientation of the stepper ('horizontal' | 'vertical')
 * @attr {string} current - Sets the current step label
 * @attr {string} state - Sets the state of the stepper ('inactive' | 'active' | 'complete' | 'warn' | 'fail' | 'custom')
 */
@customElement('rh-progress-stepper')
export class RhProgressStepper extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  /**
   * Sets the orientation of the progress stepper
   * - `horizontal` - Steps are displayed in a horizontal row
   * - `vertical` - Steps are displayed in a vertical column
   */
  @property({ reflect: true }) orientation: ProgressStepsOrientation = 'horizontal';

  /**
   * Sets the current step label that is displayed prominently
   */
  @property({ reflect: true }) current = '';

  /**
   * Sets the state of the progress stepper
   * - `inactive` - The stepper is not active
   * - `active` - The stepper is currently active
   * - `complete` - The stepper has completed all steps
   * - `warn` - The stepper is in a warning state
   * - `fail` - The stepper has failed
   * - `custom` - The stepper uses a custom state
   */
  @property({ reflect: true }) state: ProgressStepperState = 'inactive';

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'list';
  }

  render(): TemplateResult<1> {
    return html`
      <strong id="current-step">${this.current}</strong>
      <slot id="step-list"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-progress-stepper': RhProgressStepper;
  }
}
