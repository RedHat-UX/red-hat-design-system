import type { IconNameFor, IconSetName } from '@rhds/icons';

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { consume } from '@lit/context';
import { compactContext, currentStepContext } from './context.js';

import { themable } from '@rhds/elements/lib/themable.js';
import styles from './rh-progress-step.css';
import { observes } from '@patternfly/pfe-core/decorators.js';

/**
 * Available states for a progress step:
 * - `inactive` - The step is not active
 * - `active` - The step is currently active
 * - `complete` - The step has been completed
 * - `warn` - The step is in a warning state
 * - `fail` - The step has failed
 * - `custom` - The step uses a custom icon
 */
export type ProgressStepState = 'inactive' | 'active' | 'complete' | 'warn' | 'fail' | 'custom';

/**
 * Map of state names to their corresponding icon names
 */
const ICONS = new Map(Object.entries({
  inactive: '',
  active: 'resources-full',
  complete: 'check-circle-fill',
  warn: 'error-fill',
  fail: 'ban-fill',
}));

/**
 * Fired when a step becomes active
 */
export class RhProgressStepChangeEvent extends Event {
  constructor() {
    super('change', { bubbles: true });
  }
}

/**
 * A progress step represents a single step in a progress stepper.
 * Each step can have different states and may include an icon, label,
 * and description. Steps can also be linked to URLs.
 *
 * @summary Single step in a progress stepper
 *
 * @fires { RhProgressStepChangeEvent } fired when this step becomes active
 */
@customElement('rh-progress-step')
@themable
export class RhProgressStep extends LitElement {
  static styles = [styles];

  /**
   * Sets the state of the progress step
   * - `inactive` - The step is not active
   * - `active` - The step is currently active
   * - `complete` - The step has been completed
   * - `warn` - The step is in a warning state
   * - `fail` - The step has failed
   * - `custom` - The step uses a custom icon
   */
  @property({ reflect: true }) state: ProgressStepState = 'inactive';

  /**
   * Sets the description text for the progress step
   */
  @property({ reflect: true }) description?: string;

  /** Shorthand for the `icon` slot, the value is icon name */
  @property() icon?: IconNameFor<IconSetName>;

  /** Icon set for the `icon` property - 'ui' by default */
  @property({ attribute: 'icon-set' }) iconSet?: IconSetName;

  /**
   * Sets a URL to make the step clickable
   */
  @property({ reflect: true }) href?: string;

  @consume({ context: compactContext, subscribe: true })
  private compact?: boolean;

  @consume({ context: currentStepContext, subscribe: true })
  private currentStep: RhProgressStep | null = null;

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'listitem';
  }

  render() {
    const compact = this.compact ?? false;
    const labelSlot = html`
      <!-- The label to display for the progress step -->
      <slot></slot>
    `;
    const state = this.state?.toLowerCase() as ProgressStepState;
    let icon: string | undefined;
    let iconSet = 'ui';
    if (state === 'warn') {
      icon = 'error-fill';
    } else if (state === 'fail') {
      icon = 'ban-fill';
    } else if (this.icon) {
      ({ icon } = this);
      if (this.iconSet) {
        ({ iconSet } = this);
      }
    } else if (ICONS.has(state)) {
      icon = ICONS.get(state);
    } else {
      icon = undefined;
    }
    const ariaCurrent = this.currentStep === this ? 'step' : undefined;
    return html`
      <div id="container" class="${classMap({ compact })}">
        <slot name="icon">
          <rh-icon icon="${ifDefined(icon)}" set="${ifDefined(iconSet)}"></rh-icon>
        </slot>
        ${this.href ? html`<a id="label" href="${this.href}" aria-current="${ifDefined(ariaCurrent)}">${labelSlot}</a>`
                         : html`<strong id="label" aria-current="${ifDefined(ariaCurrent)}">${labelSlot}</strong>`}
        <slot name="description" id="description">
          ${this.description}
        </slot>
      </div>
    `;
  }

  @observes('state')
  protected stateChanged() {
    this.dispatchEvent(new RhProgressStepChangeEvent());
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-progress-step': RhProgressStep;
  }
}
