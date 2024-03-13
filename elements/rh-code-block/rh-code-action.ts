import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { type ColorTheme, colorContextConsumer } from '../../lib/context/color/consumer.js';

import '@rhds/elements/rh-tooltip/rh-tooltip.js';

import style from './rh-code-action.css';

export class RhCodeActionEvent extends Event {
  action: 'copy' | 'wrap';
  constructor(el: RhCodeAction) {
    super('code-action', { bubbles: true, cancelable: true });
    this.action = el.action!;
  }
}

/**
 * Action buttons for code-block elements. Users can copy the text of the code
 * snippet or toggle line-wrap.
 */
@customElement('rh-code-action')
export class RhCodeAction extends LitElement {
  static styles = [style];

  /** The action to perform on the code block. */
  @property() action?: 'copy' | 'wrap';

  /** Whether the action is currently active; e.g. if line-wrap is enabled. */
  @property({ type: Boolean }) active = false;

  @colorContextConsumer() private on?: ColorTheme;

  override render() {
    const { on = '' } = this;
    switch (this.action) {
      case 'copy':
        return html`
          <rh-tooltip>
            <slot id="content" slot="content"></slot>
            <button class="${classMap({ [on]: !!on })}"
                    aria-labelledby="content"
                    @click="${this.#onClick}">${this.#getIcon()}</button>
          </rh-tooltip>
          `;
      case 'wrap':
        return html`
          <rh-tooltip>
            <slot id="content" slot="content"></slot>
            <slot name="active" ?hidden="${!this.active}" slot="content"></slot>
            <slot name="inactive" ?hidden="${this.active}" slot="content"></slot>
            <button class="${classMap({ [on]: !!on })}"
                    aria-labelledby="content"
                    @click="${this.#onClick}">${this.#getIcon()}</button>
          </rh-tooltip>
          `;
      default:
        return '';
    }
  }

  #getIcon() {
    switch (this.action) {
      case 'copy':
        return html`
          <svg xmlns="http://www.w3.org/2000/svg"
               version="1.1"
               viewBox="0 0 20 20"
               fill="currentColor">
            <path d="M12 0H2C.9 0 0 .9 0 2v10h1V2c0-.6.4-1 1-1h10V0z"/>
            <path d="M18 20H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2zM8 7c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1H8z"/>
          </svg>
        `;
      case 'wrap':
        return this.active ? html`
          <svg xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 21 20">
            <path fill="currentColor" d="M12 13h1v7h-1zM12 0h1v7h-1z"/>
            <path stroke="currentColor" d="M16.465 6.464 20 10l-3.535 3.536"/>
            <path fill="currentColor" d="M3 9.5h17v1H3zM0 0h1v20H0z"/>
          </svg>
        ` : html`
          <svg xmlns="http://www.w3.org/2000/svg"
               version="1.1"
               viewBox="0 0 20 20"
               fill="currentColor">
            <path d="M19 0h1v20h-1zM11 5H4v1h7c2.2 0 4 1.8 4 4s-1.8 4-4 4H5.2l2.7-2.7-.7-.7-3.9 3.9 3.9 3.9.7-.7L5.2 15H11c2.8 0 5-2.2 5-5s-2.2-5-5-5zM0 0h1v20H0z" class="st0"/>
          </svg>
        `;
      default: return '';
    }
  }

  #onClick() {
    this.dispatchEvent(new RhCodeActionEvent(this));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-code-action': RhCodeAction;
  }
}
