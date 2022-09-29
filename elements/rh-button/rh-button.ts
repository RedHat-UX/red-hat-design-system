import { BaseButton } from '@patternfly/pfe-button/BaseButton.js';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './rh-button.css';

/**
 */
@customElement('rh-button')
export class RhButton extends BaseButton {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  override render() {
    return super.render();
  }

  protected override renderDefaultIcon() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-button': RhButton;
  }
}

