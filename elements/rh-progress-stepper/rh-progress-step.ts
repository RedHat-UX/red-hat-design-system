import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
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
  inactive: '',
  active: 'resources-full',
  complete: 'check-circle-fill',
  warn: 'error-fill',
  fail: 'ban-fill',
}));

/**
 * A progress step represents a single step in a progress stepper.
 * Each step can have different states and may include an icon, label,
 * and description. Steps can also be linked to URLs.
 *
 * @summary Single step in a progress stepper
 *
 * @alias progress-step
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
   * Sets the label text for the progress step
   */
  @property({ reflect: true }) label = '';

  /**
   * Sets the description text for the progress step
   */
  @property({ reflect: true }) description = '';

  /**
   * Sets a custom icon name when the state is 'custom'
   */
  @property({ reflect: true, attribute: 'custom-icon' }) customIcon = '';

  /**
   * Sets the icon set for custom icons (default: 'ui')
   */
  @property({ reflect: true, attribute: 'custom-icon-set' }) customIconSet = 'ui';

  /**
   * Sets a URL to make the step clickable
   */
  @property({ reflect: true }) href = '';

  /**
   * Gets the appropriate icon based on the current state
   * @returns The icon name for the current state
   */
  get #icon() {
    const state = this.state.toLowerCase() as ProgressStepState;
    switch (state) {
      case 'inactive': return ICONS.get('inactive');
      case 'active': return ICONS.get('active');
      case 'complete': return ICONS.get('complete');
      case 'warn': return ICONS.get('warn');
      case 'fail': return ICONS.get('fail');
      case 'custom': return this.customIcon;
      default: return ICONS.get('inactive');
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'listitem';
  }

  render() {
    const labelSlot = html`
      <!-- The label to display for the progress step -->
      <slot>${this.label}</slot>
    `;
    return html`
      <!-- The icon to display for the progress step -->
      <slot name="icon">
        <rh-icon
            icon="${this.#icon}"
            set="${this.state === 'custom' ? this.customIconSet : 'ui'}"
        ></rh-icon>
      </slot>${this.href ? html`<a href="${this.href}">${labelSlot}</a>`
                         : html`<strong>${labelSlot}</strong>`}
      <!-- The description to display for the progress step -->
      <slot name="description">
        ${this.description ? html`${this.description}` : ''}
      </slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-progress-step': RhProgressStep;
  }
}
