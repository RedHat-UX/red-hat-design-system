import { LitElement, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { html, unsafeStatic } from 'lit/static-html.js';

import { ColorContextProvider } from '@rhds/elements/lib/context/color/provider.js';
import { ColorContextConsumer } from '@rhds/elements/lib/context/color/consumer.js';

class UxdotExample extends LitElement {
  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
      container-name: host;
      margin-block-end: var(--rh-space-2xl, 32px);
    }

    :host([transparent]) {
      --_context-background-color: transparent;
    }

    #container {
      padding: var(--rh-space-2xl, 32px);
      display: flex;
      flex-direction: column;
      align-items: var(--_alignment, center);
      justify-content: center;
      border-width: var(--rh-border-width-sm, 1px);
      border-style: solid;
      border-color: var(--_border-color, var(--rh-color-border-subtle-on-light, #c7c7c7));
      border-radius: var(--rh-border-radius-default, 3px);
      background-color: var(--_context-background-color, var(--rh-color-surface-lightest, #ffffff));
      color: var(--_context-text, var(--rh-color-text-on-light, #151515));
    }

    #container.dark {
      --_border-color: var(--rh-color-border-subtle-on-dark, #707070);
    }

    ::slotted(*) {
      display: flex;
      flex-direction: column;
      align-items: var(--_alignment, center);
      justify-content: center;
      max-width: 100%;
      width: var(--_width, 100%);
    }

    :host([variant="full"]) #container {
      padding: 0;
    }

    :host([danger]) #container {
      --_border-color: var(--rh-color-border-status-danger-on-light, #f0561d);
      background-image: url('/assets/best-practices-danger-icon.svg');
      background-position-x: 8px;
      background-position-y: 8px;
      background-repeat: no-repeat;
    }

    :host([no-border]:not([danger])) #container {
      border: none;
    }

    @container host (min-width: 567px) {
      #container {
        padding: var(--rh-space-3xl, 48px);
      }
    }

    @container host (min-width: 768px) {
      #container {
        padding: var(--rh-space-4xl, 64px);
      }
    }
  `;

  static properties = {
    colorPalette: { type: String, reflect: true, attribute: 'color-palette' },
    transparent: { type: Boolean },
    variant: { type: String, reflect: true },
    width: { type: String, attribute: 'width-adjustment' },
    noBorder: { type: Boolean, attribute: 'no-border' },
    danger: { type: Boolean },
    alignment: { type: String },
  };

  constructor() {
    super();
    new ColorContextProvider(this);
    new ColorContextConsumer(this);
    this.width = '100%';
    this.alignment = 'center';
    this.transparent = false;
  }

  render() {
    const { on = '' } = this;
    return html`
      <div id="container" part="container" class="${classMap({ [on]: !!on })}" style="--_width: ${this.width}; --_alignment: ${this.alignment}">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('uxdot-example', UxdotExample);
