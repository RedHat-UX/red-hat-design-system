import { LitElement, html, svg } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { type ColorTheme, colorContextConsumer } from '../../lib/context/color/consumer.js';

import '@rhds/elements/rh-tooltip/rh-tooltip.js';

import style from './rh-code-action.css';
import { classMap } from 'lit/directives/class-map.js';

export class RhCodeActionEvent extends Event {
  action: 'copy' | 'wrap';
  constructor(el: RhCodeAction) {
    super('code-action', { bubbles: true, cancelable: true });
    this.action = el.action!;
  }
}

/**
 */
@customElement('rh-code-action')
export class RhCodeAction extends LitElement {
  static styles = [style];

  @property() action?: 'copy' | 'wrap';

  @colorContextConsumer() private on?: ColorTheme;

  render() {
    const { on = '' } = this;
    switch (this.action) {
      case 'copy':
      case 'wrap':
        return html`
          <rh-tooltip>
            <slot id="content" slot="content"></slot>
            <button class="${classMap({ [on]: !!on })}"
              aria-labelledby="content"
              @click="${this.#onClick}">
              <svg>
                ${this.#getIcon()}
              </svg>
            </button>
          </rh-tooltip>
          `;
      default:
        return '';
    }
  }

  #getIcon() {
    switch (this.action) {
      case 'copy':
        return svg`<text y="20" font-size="40px">c</text>`;
      case 'wrap':
        return svg`<text y="20" font-size="40px">w</text>`;
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
