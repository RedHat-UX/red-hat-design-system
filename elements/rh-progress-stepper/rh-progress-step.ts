import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import styles from './rh-progress-step.css';

export type ProgressStepState = 'inactive' | 'active' | 'complete' | 'warn' | 'fail' | 'custom';

@customElement('rh-progress-step')
export class RhProgressStep extends LitElement {
  static styles = styles;

  @property({ reflect: true }) state: ProgressStepState = 'inactive';
  @property({ type: String }) label = '';
  @property({ type: String }) description = '';
  @property({ type: String }) customIcon = '';
  @property({ type: String }) customIconSet = 'ui';

  private getIconName(): string {
    switch (this.state) {
      case 'inactive':
        return '';
      case 'active':
        return 'resources-full';
      case 'complete':
        return 'check-circle-fill';
      case 'warn':
        return 'error-fill';
      case 'fail':
        return 'ban-fill';
      case 'custom':
        return this.customIcon;
      default:
        return 'harvey-ball-0';
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'listitem';
  }

  render() {
    return html`
      <rh-icon
        icon="${this.getIconName()}"
        set="${this.state === 'custom' ? this.customIconSet : 'ui'}"
      ></rh-icon>
      <strong>${this.label}</strong>
      ${this.description ? html`<p>${this.description}</p>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-progress-step': RhProgressStep;
  }
}
