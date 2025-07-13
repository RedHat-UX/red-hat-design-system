import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import styles from './rh-progress-step.css';

/** Available states for a progress step:
 * - inactive: The step is not active.
 * - active: The step is active.
 * - complete: The step is complete.
 * - warn: The step is in a warning state.
 * - fail: The step is in a failed state.
 * - custom: The step is using a custom icon.
 */
export type ProgressStepState = 'inactive' | 'active' | 'complete' | 'warn' | 'fail' | 'custom';

const ICONS = new Map(Object.entries({
  inactive: '',
  active: 'resources-full',
  complete: 'check-circle-fill',
  warn: 'error-fill',
  fail: 'ban-fill'
}));


/**
 * A progress step is a single step in a progress stepper.
 * 
 * @slot - The content of the progress step.
 * @slot icon - The icon to display for the progress step.
 * @slot label - The label to display for the progress step.
 * @slot description - The description to display for the progress step.
 */
@customElement('rh-progress-step')
@themable
export class RhProgressStep extends LitElement {
  static styles = [styles];

  @property({ reflect: true }) state: ProgressStepState = 'inactive';
  @property({ type: String }) label = '';
  @property({ type: String }) description = '';
  @property({ type: String }) customIcon = '';
  @property({ type: String }) customIconSet = 'ui';

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
    return html`
      <slot name="icon">
      <rh-icon
          icon="${this.#icon}"
          set="${this.state === 'custom' ? this.customIconSet : 'ui'}"
      ></rh-icon>
      </slot>
      <strong>
        <slot name="label">${this.label}</slot>
      </strong>
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
