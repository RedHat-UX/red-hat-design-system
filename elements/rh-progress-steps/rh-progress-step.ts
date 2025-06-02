import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
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
        return 'harvey-ball-0';
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
        return 'var(--rh-color-yellow-50)';
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
      <label class="progress-step">
        <input type="checkbox" ?checked=${this.state === 'complete'} disabled />
        <rh-icon
          name="${this.getIconName()}"
          icon-set="${this.state === 'custom' ? this.customIconSet : 'ui'}"
          style="color: ${this.getIconColor()}"
        ></rh-icon>
        <span class="label">${this.label}</span>
        ${this.description ? html`<p class="description">${this.description}</p>` : ''}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-progress-step': RhProgressStep;
  }
} 