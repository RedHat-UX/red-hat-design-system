import { LitElement, html, isServer, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { classMap } from 'lit/directives/class-map.js';

import { provide } from '@lit/context';
import { context } from './context.js';

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

import { RhProgressStepChangeEvent } from './rh-progress-step.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
export * from './rh-progress-step.js';

type ProgressStepsOrientation = 'horizontal' | 'vertical';
type ProgressStepperState = 'inactive' | 'active' | 'complete' | 'warn' | 'fail' | 'custom';

const BREAKPOINTS = new Map();

BREAKPOINTS.set('2xs', '320px');
BREAKPOINTS.set('xs', BreakpointXs);
BREAKPOINTS.set('sm', BreakpointSm);
BREAKPOINTS.set('md', BreakpointMd);
BREAKPOINTS.set('lg', BreakpointLg);
BREAKPOINTS.set('xl', BreakpointXl);
BREAKPOINTS.set('2xl', Breakpoint2xl);

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

  #hydrated = false;

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

  /**
   * Set when
   */
  @state() private mobile = true;

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
      this.#hydrated = true;
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
      const defaultSlotEl = activeStep.shadowRoot?.querySelector<HTMLSlotElement>('#label slot');
      const slotNodes = defaultSlotEl?.assignedNodes();
      let contentString = '';
      slotNodes?.forEach(node => {
        contentString = contentString + node.textContent?.trim();
      });
      this.current = contentString;
      this.state = activeStep.getAttribute('state') as ProgressStepperState;
    }
  }

  @observes('verticalAt')
  protected verticalAtChanged() {
    if (this.verticalAt === undefined) {
      return;
    }

    const breakpoint = this.verticalAt;
    this.#maxWidth = BREAKPOINTS.get(breakpoint).replace('px', '');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-progress-stepper': RhProgressStepper;
  }
}
