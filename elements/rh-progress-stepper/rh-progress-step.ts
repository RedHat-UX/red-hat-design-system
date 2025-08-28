import type { IconNameFor, IconSetName } from '@rhds/icons';

import { html, LitElement } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { consume } from '@lit/context';

import { compactContext, currentStepContext } from './context.js';

import { observes } from '@patternfly/pfe-core/decorators.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-progress-step.css';

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
  active: 'resources-full',
  complete: 'check-circle-fill',
  warn: 'error-fill',
  fail: 'ban-fill',
} as const));

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
  @property({ reflect: true }) state?: ProgressStepState;

  /**
   * Sets the description text for the progress step if more context is needed.
   * Descriptions are secondary to titles.
   * Overridden by the `description` slot.
   */
  @property({ reflect: true }) description?: string;

  /**
   * Custom icon for the step. Overridden by the `icon` slot.
   * When the step is in the `warn` or `fail` state, it should not have a custom
   * icon.
   */
  @property() icon?: IconNameFor<IconSetName>;

  /** Icon set for the `icon` property - 'ui' by default */
  @property({ attribute: 'icon-set' }) iconSet: IconSetName = 'ui';

  /**
   * Sets a URL to make the step clickable
   */
  @property({ reflect: true }) href?: string;

  @consume({ context: compactContext, subscribe: true })
  private compact?: boolean;

  @consume({ context: currentStepContext, subscribe: true })
  private currentStep: RhProgressStep | null = null;

  #icon: IconNameFor<IconSetName> | undefined = this.icon;
  #iconSet: IconSetName = this.iconSet;

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'listitem';
  }

  render() {
    const compact = this.compact ?? false;
    const ariaCurrent = this.currentStep === this ? 'step' : undefined;
    const labelSlot = html`
      <!-- A short title for the step, which also serves as the step's accessible name.
          A title can also be 
       -->
      <slot></slot>
    `;
    return html`
      <div id="container" class="${classMap({ compact })}">
        <!-- summary: custom icon for the step
             description: |
               Overrides the \`icon\` and \`icon-set\` attributes.
               Prefer using the \`icon\` attribute and the (default) UI Icon set.
               Avoid slotting content here if the step is in the \`warn\` or \`fail\` state,
               Since those states should always show their prescribed icons. -->
        <slot name="icon">
          <rh-icon icon="${ifDefined(this.#icon)}" set="${ifDefined(this.#iconSet)}"></rh-icon>
        </slot>${this.href ? html`
          <a id="label"
             href="${this.href}"
             aria-current="${ifDefined(ariaCurrent)}">${labelSlot}</a>` : html`
          <strong id="label"
                  aria-current="${ifDefined(ariaCurrent)}">${labelSlot}</strong>`}
        <!-- summary: Elaborative description for the step
             description: |
               Rich HTML content can be slotted here , to override the (plain text) \`description\` attribute.
               Avoid slotting links, images, block-level content, etc.: descriptions should be prose only. -->
        <slot name="description" id="description">${this.description}</slot>
      </div>
    `;
  }

  /**
   * Icons for each step indicates the status of a process or task.
   * Icons change as users progress.
   * Computes the icon for the step:
   * Always use the prescribed warn or fail icons.
   * Otherwise, use the custom user icon, if available,
   * or fall back to the default active/inactive icon.
   */
  @observes('icon')
  @observes('iconSet')
  @observes('state')
  protected computeIcon() {
    const state = this.state?.toLowerCase() as ProgressStepState;
    if (state === 'warn') {
      this.#icon = 'error-fill';
    } else if (state === 'fail') {
      this.#icon = 'ban-fill';
    } else if (this.icon) {
      this.#icon = this.icon;
      if (this.iconSet) {
        this.#iconSet = this.iconSet;
      } else {
        this.#iconSet = 'ui';
      }
    } else if (ICONS.has(state)) {
      this.#icon = ICONS.get(state);
    } else {
      this.#icon = undefined;
    }
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
