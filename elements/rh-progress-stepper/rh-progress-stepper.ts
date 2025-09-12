import { LitElement, html, isServer, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
import { provide } from '@lit/context';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

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

import { compactContext, currentStepContext } from './context.js';
import { RhProgressStep, RhProgressStepChangeEvent } from './rh-progress-step.js';

export * from './rh-progress-step.js';

import styles from './rh-progress-stepper.css';

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
 * A progress stepper conveys the steps necessary to complete a process or task, and the status of
 * each step. Steps have titles and descriptions; and each step can be in one of a number of possible states:
 * - inactive (yet to be performed)
 * - active (currently being performed)
 * - warn (succeeded, but with warnings)
 * - fail (failed to occur)
 * Or a custom state, set using the `icon` attribute.
 *
 * @summary Communicate how many steps are required to complete a process
 *
 * @alias Progress stepper
 */
@customElement('rh-progress-stepper')
@themable
export class RhProgressStepper extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  /**
   * Makes the element `vertical` at various container query based breakpoints.
   * Breakpoints available 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
   */
  @property({ reflect: true, attribute: 'vertical-at' })
  verticalAt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = undefined;

  /**
   * Sets the orientation of the progress stepper
   * - `horizontal` - Steps are displayed in a horizontal row
   * - `vertical` - Steps are displayed in a vertical column.
   *    Vertical orientation can be used when horizontal space is limited.
   *    Orientation changes to vertical automatically at `--rh-breakpoint-xs-max` breakpoint.
   */
  @property({ reflect: true }) orientation: ProgressStepsOrientation = 'horizontal';

  /**
   * Makes element display as `compact`.
   * Use compact stepper when there is limited space.
   * Do not change the spacing between steps in the compact size.
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
   * Set when ResizeObserver detects width is less than the breakpoint (default: `--rh-breakpoint-sm`)
   */
  @state() private mobile = true;

  /**
   * Set to match current step's `state`
   */
  @state() private currentState = '';

  #maxWidth = 768;

  /**
   * Normalized string content of the current step
   */
  #contentString = '';

  #resizeTimeoutId?: number;

  /**
   * This callback is debounced with a simple timeout.
   * In the future, we should consider StyleObserver:
   * @see https://www.bram.us/2025/02/24/solved-by-styleobserver-element-matchcontainer/
   * @see https://github.com/LeaVerou/style-observer/
   */
  #ro = new ResizeObserver(entries => {
    if (this.compact || this.orientation === 'vertical') {
      return;
    }
    if (this.#resizeTimeoutId) {
      clearTimeout(this.#resizeTimeoutId);
    }
    this.#resizeTimeoutId = window.setTimeout(() => {
      const [{ contentBoxSize: [{ inlineSize } = {}] = [] } = {}] = entries;
      if (inlineSize != null) {
        this.mobile = inlineSize < this.#maxWidth;
      }
    }, 100);
  });

  protected override firstUpdated(): void {
    // ensure we update initially on client hydration
    const isHydrated = isServer && !this.hasUpdated;
    if (!isHydrated) {
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
    this.addEventListener('change', this.#updateState);
  }

  render(): TemplateResult<1> {
    const compact = this.compact ?? false;
    const vertical = this.orientation === 'vertical' || this.mobile;
    const currentState = this.currentState || '';

    return html`
      <div id="container" class="${classMap({ compact, vertical, [currentState]: true })}">
        <strong id="current-step"
                class="visually-hidden"
                ?hidden="${!compact}">${this.#contentString}</strong>
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
    // all steps with `[state=active]`, `fail` or `warn`
    // `[state=complete]` is not a stateful step, since `complete` is always a past step
    const statefulSteps =
      this.querySelectorAll(/* css */`
        rh-progress-step:is([state="active"], [state="fail"], [state="warn"], [icon]),
        rh-progress-step:has(> [slot=icon])
      `);
    // always, only take the last item in the list, in order to prevent having more
    // than one aria-current step, which is not approved of in the aria spec
    // see https://w3c.github.io/aria/#aria-current
    const activeStep = Array.from(statefulSteps).at(-1);
    this.currentStep = activeStep instanceof RhProgressStep ? activeStep : null;
    if (this.currentStep) {
      this.currentState = this.currentStep.state || '';
      this.#contentString = '';
      // Use childNodes instead of children to access both Element and Text nodes
      for (const node of this.currentStep.childNodes) {
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
