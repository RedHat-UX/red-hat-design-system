import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './rh-button.css';

/**
 */
@customElement('rh-button')
export class RhButton extends BaseButton {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  /**
   * Changes the style of the button.
   * - Primary: Used for the most important call to action on a page. Try to
   *   limit primary buttons to one per page.
   * - Secondary: Use secondary buttons for general actions on a page, that
   *   don’t require as much emphasis as primary button actions. For example,
   *   you can use secondary buttons where there are multiple actions, like in
   *   toolbars or data lists.
   * - Tertiary: Tertiary buttons are flexible and can be used as needed.
   */
  @property({ reflect: true }) variant: 'primary'|'secondary'|'tertiary'|'close'|'play' = 'primary';

  protected renderDefaultIcon() {
    switch (this.variant) {
      case 'close':
      case 'play':
        return html`<rh-icon icon=${this.variant}></rh-icon>`;
      default:
        return html``;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-button': RhButton;
  }
}

