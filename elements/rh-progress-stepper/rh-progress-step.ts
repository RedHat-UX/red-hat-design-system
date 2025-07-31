import type { IconNameFor, IconSetName } from '@rhds/icons';

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { consume } from '@lit/context';
import { context } from './context.js';

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
 */
@customElement('rh-progress-step')
@themable
export class RhProgressStep extends LitElement {
  static styles = [styles];

  #iconSet = 'ui';

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
  @property({ reflect: true }) label?: string;

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

  @consume({ context, subscribe: true })
  private compact?: boolean;

  /**
   * Gets the appropriate icon based on the current state
   * @returns The icon name for the current state
   */
  get #icon() {
    const state = this.state.toLowerCase() as ProgressStepState;
    switch (state) {
      case 'active': return ICONS.get('active');
      case 'complete': return ICONS.get('complete');
      case 'warn': return ICONS.get('warn');
      case 'fail': return ICONS.get('fail');
      case 'custom': {
        this.#iconSet = this.iconSet ?? 'ui';
        return this.icon;
      }
      default: return undefined;
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'listitem';
  }

  render() {
    const compact = this.compact ?? false;
    const labelSlot = html`
      <!-- The label to display for the progress step -->
      <slot>${this.label}</slot>
    `;
    return html`
      <div id="container" class="${classMap({ compact })}">
        <slot name="icon">${!this.#icon ? html`<span class="no-icon"></span>` : html`
          <rh-icon icon="${ifDefined(this.#icon)}" set="${ifDefined(this.#iconSet)}"></rh-icon>`}
        </slot>
        ${this.href ? html`<a id="label" href="${this.href}">${labelSlot}</a>`
                         : html`<strong id="label">${labelSlot}</strong>`}
        <slot name="description" id="description">
          ${this.description}
        </slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-progress-step': RhProgressStep;
  }
}
