import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import styles from './rh-progress-step.css';

export type ProgressStepState = 'inactive' | 'active' | 'complete' | 'warn' | 'fail' | 'custom';

@customElement('rh-progress-step')
export class RhProgressStep extends LitElement {
  static styles = styles;

  #internals = InternalsController.of(this, { role: 'listitem' });

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

  private getIconColor(): string {
    switch (this.state) {
      case 'inactive':
        return 'var(--rh-color-gray-30)';
      case 'active':
        return 'var(--rh-color-status-note)';
      case 'complete':
        return 'var(--rh-color-status-success)';
      case 'warn':
        return 'light-dark(var(--rh-color-yellow-50),var(--rh-color-yellow-30)';
      case 'fail':
        return 'var(--rh-color-status-danger)';
      case 'custom':
        return 'var(--rh-color-gray-30)';
      default:
        return 'var(--rh-color-gray-30)';
    }
  }

  render() {
    return html`
      <rh-icon
        icon="${this.getIconName()}"
        set="${this.state === 'custom' ? this.customIconSet : 'ui'}"
        style="color: ${this.getIconColor()}"
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