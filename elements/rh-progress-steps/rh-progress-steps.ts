import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import styles from './rh-progress-steps.css';

type ProgressStepsOrientation = 'horizontal' | 'vertical';

/**
 * @summary A container component for progress steps
 * @tag rh-progress-steps
 * @slot - Content for the progress steps
 */
@customElement('rh-progress-steps')
export class RhProgressSteps extends LitElement {
  static styles = styles;

  @property({ reflect: true }) orientation: ProgressStepsOrientation = 'horizontal';

  render() {
    return html`
        <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-progress-steps': RhProgressSteps;
  }
} 