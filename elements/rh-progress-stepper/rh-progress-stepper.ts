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

/**
 * Breakpoint mappings for responsive behavior.
 * Used to determine when to switch to vertical orientation
 * based on container width rather than viewport width.
 */
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
 * ## Usage guidelines
 * - Use 3-5 steps maximum to reduce cognitive load
 * - Designed to complement standard previous/next navigation. Avoid using as the only navigation.
 * - When process is completed, users cannot go back and must start over
 *
 * ## Accessibility
 * - Communicates list structure and step states to screen readers
 * - Supports keyboard navigation for linked step titles
 * - Maintains logical focus order (left to right, top to bottom)
 * - Provides aria-current for the active step
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
   *
   * Use when horizontal space becomes limited. The element automatically
   * changes to vertical orientation at screen sizes of <768px.
   */
  @property({ reflect: true, attribute: 'vertical-at' })
  verticalAt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = undefined;

  /**
   * Sets the orientation of the progress stepper.
   * - `horizontal` - Steps are displayed in a horizontal row (default)
   * - `vertical` - Steps are displayed in a vertical column
   *
   * ## Responsive behavior
   * - >992px: Padding between steps is set to --rh-space-5xl
   * - ≤992px: Padding reduces to --rh-space-2xl
   * - <768px: Orientation automatically changes to vertical
   *
   * Use vertical orientation when horizontal space is limited or when
   * you need to display more detailed step information.
   */
  @property({ reflect: true }) orientation: ProgressStepsOrientation = 'horizontal';

  /**
   * Makes element display as `compact`.
   *
   * ## Usage guidelines
   * - Use when there is limited space and less visual prominence is needed
   * - Maintain the compact size as designed - do not stretch spacing between steps
   * - Switch to default size or different orientation instead of stretching compact
   * - Always include step titles even in compact mode for accessibility
   */
  @provide({ context: compactContext })
  @property({ reflect: true, type: Boolean }) compact = false;

  /**
   * Defines the current step, so it can be marked as such with ARIA,
   * and so its label can be displayed in compact layouts.
   *
   * ## Accessibility
   * This property ensures only one step is marked with aria-current="step"
   * as required by ARIA specification. Screen readers announce this step
   * as the current location in the process.
   */
  @provide({ context: currentStepContext })
  @state() private currentStep: RhProgressStep | null = null;

  /**
   * Set when ResizeObserver detects width is less than the breakpoint (default: `--rh-breakpoint-sm`)
   * When true, the stepper switches to vertical orientation automatically.
   */
  @state() private mobile = true;

  /**
   * Set to match current step's `state`
   */
  @state() private currentState = '';

  #maxWidth = 768;

  /**
   * Normalized string content of the current step
   * Extracts text content from the current step's title and description
   * for screen reader accessibility and visual display.
   */
  #contentString = '';

  #resizeTimeoutId?: number;

  /**
   * ResizeObserver for responsive behavior.
   * This callback is debounced with a simple timeout to prevent excessive updates.
   *
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

  /**
   * Initializes responsive behavior on first update.
   * Sets mobile state based on element width,
   * ensuring the stepper displays correctly on initial load.
   */
  protected override firstUpdated(): void {
    // ensure we update initially on client hydration
    const isHydrated = isServer && !this.hasUpdated;
    if (!isHydrated) {
      this.mobile = this.offsetWidth < this.#maxWidth;
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    // Set ARIA role="list" to communicate list structure to screen reader
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
        <!-- "Current step" label for screen readers and compact display -->
        <!-- Visually hidden except in compact mode -->
        <strong id="current-step"
                class="visually-hidden"
                ?hidden="${!compact}">${this.#contentString}</strong>
        <!-- Use this slot for \`<rh-progress-step>\` items
             Each step should include title and optional description -->
        <slot id="step-list" @change="${this.#onChange}"></slot>
      </div>
    `;
  }

  /**
   * Handles change events from progress steps.
   * Updates the current step state for accessibility and visual feedback.
   *
   * @param event - The change event from a progress step
   */
  #onChange(event: Event) {
    if (event instanceof RhProgressStepChangeEvent) {
      this.#updateState();
    }
  }

  /**
   * Updates the current step state and content
   */
  #updateState() {
    // Identifies all steps with `[state=active]`, `fail` or `warn`
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
      // This ensures we capture all text content for accessibility
      for (const node of this.currentStep.childNodes) {
        if (node instanceof Element && !node.hasAttribute('slot')) {
          this.#contentString += node.textContent?.trim();
        } else if (node instanceof Text) {
          this.#contentString += node.data.trim();
        }
      };
    }
  }

  /**
   * Handles changes to the verticalAt property.
   * Updates the breakpoint threshold for responsive vertical orientation switching.
   */
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
