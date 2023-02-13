import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import { BaseButton } from '@patternfly/elements/pf-button/BaseButton.js';

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

  /** @deprecated The size property is not currently used */
  declare size: string;

  @property({ type: Boolean, reflect: true }) danger = false;

  @colorContextConsumer() private on?: ColorTheme;

  get #variant() { return this.variant?.toLowerCase(); }

  override willUpdate() {
    switch (this.#variant) {
      case 'close':
      case 'play':
        this.icon = this.#variant;
        break;
    }
  }

  override render() {
    const { on = 'light' } = this;
    return html`<div id="rhds-container" class="${classMap({ [on]: true })}">${super.render()}</div>`;
  }

  protected renderDefaultIcon() {
    switch (this.#variant) {
      // TODO: revisit when rh-icon is ready
      // return html`<rh-icon icon=${this.variant}></rh-icon>`;
      case 'close':
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M12.54 11.46 8.92 7.83l3.45-3.46a.63.63 0 0 0 0-.88.61.61 0 0 0-.88 0L8 6.94 4.54 3.46a.61.61 0 0 0-.88 0 .63.63 0 0 0 0 .88l3.49 3.49-3.66 3.66a.61.61 0 0 0 0 .88.63.63 0 0 0 .88 0L8 8.71l3.63 3.63a.63.63 0 0 0 .88 0 .61.61 0 0 0 .03-.88Z"/>
          </svg>
        `;
      case 'play':
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="m12.3 7.5-9-5c-.2-.1-.4-.1-.6 0-.2.1-.3.3-.3.5v10c0 .2.1.4.3.5.1.1.2.1.3.1.1 0 .2 0 .3-.1l9-5c.2-.1.3-.3.3-.5s-.1-.4-.3-.5z"/>
          </svg>
        `;
      default:
        return '' as ReturnType<this['render']>;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-button': RhButton;
  }
}
