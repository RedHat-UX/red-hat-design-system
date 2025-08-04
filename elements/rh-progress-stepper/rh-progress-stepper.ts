import { LitElement, html, isServer, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { classMap } from 'lit/directives/class-map.js';

import { provide } from '@lit/context';
import { compactContext, currentStepContext } from './context.js';

import { themable } from '@rhds/elements/lib/themable.js';

import {
  Breakpoint2xl,
  BreakpointLg,
  BreakpointMd,
  BreakpointSm,
  BreakpointXl,
  BreakpointXs,
} from '@rhds/tokens/media.js';

import '@rhds/elements/rh-icon/rh-icon.js';
import styles from './rh-progress-stepper.css';
import { state } from 'lit/decorators/state.js';

import { RhProgressStep, RhProgressStepChangeEvent } from './rh-progress-step.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
export * from './rh-progress-step.js';

type ProgressStepsOrientation = 'horizontal' | 'vertical';

const BREAKPOINTS = new Map(Object.entries({
  '2xs': '320px',
  'xs': BreakpointXs,
  'sm': BreakpointSm,
  'md': BreakpointMd,
  'lg': BreakpointLg,
  'xl': BreakpointXl,
  '2xl': Breakpoint2xl,
}));

/**
 * A progress stepper conveys how many steps are required to complete a process or task.
 *
 * @summary Communicate how many steps are required to complete a process
 *
 * @alias Progress stepper
 */
@customElement('rh-progress-stepper')
@themable
export class RhProgressStepper extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  #ro?: ResizeObserver;

  #maxWidth = 768;

  /**
   * Makes the element `vertical` at various container query based breakpoints.
   * Breakpoints available 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
   */
  @property({ reflect: true, attribute: 'vertical-at' })
  verticalAt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = undefined;

  /**
   * Sets the orientation of the progress stepper
   * - `horizontal` - Steps are displayed in a horizontal row
   * - `vertical` - Steps are displayed in a vertical column
   */
  @property({ reflect: true }) orientation: ProgressStepsOrientation = 'horizontal';

  /**
   * Setting `compact` will remove...
   */
  @provide({ context: compactContext })
  @property({ reflect: true, type: Boolean }) compact = false;

  /**
   * Defines the current step, so it can be marked as such with ARIA,
   * and so its label can be displayed in compact layouts.
   */
  @provide({ context: currentStepContext })
  @state() private currentStep: RhProgressStep | null = null;

  /**
   * Set when
   */
  @state() private mobile = true;

  /** normalized string content of the current step */
  #contentString = '';

  constructor() {
    super();

    if (!isServer) {
      // TODO: Perf look into debouncing the resize observer
      // or look into using style observer: https://www.bram.us/2025/02/24/solved-by-styleobserver-element-matchcontainer/?ref=dailydev
      // lea verou style observer: https://github.com/LeaVerou/style-observer/
      this.#ro = new ResizeObserver(entries => {
        if (this.compact || this.orientation === 'vertical') {
          return;
        }
        const [entry] = entries;
        const [contentBoxSize] = entry.contentBoxSize;
        const oldState = this.mobile;
        const newState = contentBoxSize.inlineSize < this.#maxWidth;
        if (oldState !== newState) {
          this.mobile = newState;
        }
      });
    }
  }

  protected firstUpdated(): void {
    // ensure we update initially on client hydration
    const _isHydrated = isServer && !this.hasUpdated;
    if (!_isHydrated) {
      this.mobile = this.offsetWidth < this.#maxWidth;
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'list';
    if (!isServer) {
      this.#ro?.observe(this);
      this.#updateState();
    }
    this.addEventListener('change', () => {
      this.#updateState();
    });
  }

  render(): TemplateResult<1> {
    const compact = this.compact ?? false;
    const vertical = this.orientation === 'vertical' || this.mobile;

    return html`
    <div id="container" class="${classMap({ compact, vertical })}">
      <strong id="current-step">${this.#contentString}</strong>
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
    // all steps with [state=active], fail or warn
    const statefulSteps =
      this.querySelectorAll(
        'rh-progress-step:is([state="active"], [state="fail"], [state="warn"])'
      );
    // always, only take the last item in the list, in order to prevent having more
    // than one aria-current step, which is not approved of in the aria spec
    // see https://w3c.github.io/aria/#aria-current
    const activeStep = Array.from(statefulSteps) .at(-1);
    this.currentStep = activeStep instanceof RhProgressStep ? activeStep : null;
    if (this.currentStep) {
      this.#contentString = '';
      for (const node of this.currentStep.children) {
        if (node instanceof Element && !node.hasAttribute('slot')) {
          this.#contentString += node.textContent?.trim();
        } else if (node instanceof Text) {
          this.#contentString += node.data.trim();
        }
      };
    }
  }

  @observes('verticalAt')
  protected verticalAtChanged() {
    const breakpoint = BREAKPOINTS.get(this.verticalAt!);
    if (breakpoint) {
      const int = parseInt(breakpoint.replace('px', ''));
      if (!Number.isNaN(breakpoint)) {
        this.#maxWidth = int;
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-progress-stepper': RhProgressStepper;
  }
}
