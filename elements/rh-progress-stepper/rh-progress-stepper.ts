import { LitElement, html, isServer, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { classMap } from 'lit/directives/class-map.js';

import { provide } from '@lit/context';
import { context } from './context.js';

import { themable } from '@rhds/elements/lib/themable.js';

import '@rhds/elements/rh-icon/rh-icon.js';
import styles from './rh-progress-stepper.css';
import { state } from 'lit/decorators/state.js';
import { RhProgressStepChangeEvent } from './rh-progress-step.js';

type ProgressStepsOrientation = 'horizontal' | 'vertical';
type ProgressStepperState = 'inactive' | 'active' | 'complete' | 'warn' | 'fail' | 'custom';

/**
 * A progress stepper is a container of progress steps that presents
 * a horizontal or vertical display of steps and their details. The stepper
 * can also display a compact view with a single heading.
 *
 * @summary Container for progress steps with horizontal or vertical layout
 *
 * @alias Progress stepper
 */
@customElement('rh-progress-stepper')
@themable
export class RhProgressStepper extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  /**
   * Sets the orientation of the progress stepper
   * - `horizontal` - Steps are displayed in a horizontal row
   * - `vertical` - Steps are displayed in a vertical column
   */
  @property({ reflect: true }) orientation: ProgressStepsOrientation = 'horizontal';

  /**
   * Setting `compact` will remove...
   */
  @provide({ context })
  @property({ reflect: true, type: Boolean }) compact = false;

  /**
   * Sets the current step label that is displayed prominently
   */
  @state() private current = '';

  /**
   * Sets the state of the progress stepper
   * - `inactive` - The stepper is not active
   * - `active` - The stepper is currently active
   * - `complete` - The stepper has completed all steps
   * - `warn` - The stepper is in a warning state
   * - `fail` - The stepper has failed
   * - `custom` - The stepper uses a custom state
   */
  @state() private state: ProgressStepperState = 'inactive';

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'list';
    if (!isServer) {
      this.#updateState();
    }
    this.addEventListener('change', () => {
      this.#updateState();
    });
  }

  render(): TemplateResult<1> {
    const compact = this.compact ?? false;
    const vertical = this.orientation === 'vertical';

    return html`
    <div id="container" class="${classMap({ compact, vertical })}">
      <strong id="current-step">${this.current}</strong>
      <!-- Use this slot for \`<rh-progress-step>\` items -->
      <slot id="step-list" @change="${this.#onChange}"></slot>
    </div>
    `;
  }

  #onChange(event: Event) {
    if (event instanceof RhProgressStepChangeEvent) {
      this.#updateState();
    }
  }

  #updateState() {
    const statefulSteps =
      this.querySelectorAll(
        'rh-progress-step:is([state="active"], [state="fail"], [state="warn"])'
      );
    const activeStep = Array.from(statefulSteps).at(-1);
    if (activeStep) {
      this.current = activeStep.textContent?.trim() ?? '';
      this.state = activeStep.getAttribute('state') as ProgressStepperState;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-progress-stepper': RhProgressStepper;
  }
}
