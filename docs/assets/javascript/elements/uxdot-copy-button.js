import { html, css, LitElement, isServer } from 'lit';

import { toast } from '@rhds/elements/lib/toast.js';

if (!isServer) {
  import('@rhds/elements/rh-tooltip/rh-tooltip.js');
}


export class UxdotCopyButton extends LitElement {
  static is = 'uxdot-copy-button';
  static properties = { copy: {} };
  static styles = css`
    button {
      display: inline-flex;
      align-items: center;
      color: inherit;
      border-radius: var(--rh-border-radius-default);
      border-width: 0;
      padding: var(--rh-space-xs);
      background: none;
      cursor: pointer;
      &:is(:focus, :active, :hover) {
        background: var(--rh-color-interactive-blue-lightest);
        opacity: 1;
      }
    }
    svg,
    ::slotted(svg) {
      width: 24px;
      fill: currentcolor;
    }
  `;

  render() {
    return html`
      <rh-tooltip position="left-start">
        <code slot="content">${this.copy ?? 'Click to copy'}</code>
        <button @click="${this.#onClick}">
          <slot>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M30.286 6.857q.714 0 1.214.5t.5 1.214v21.714q0 .714-.5 1.214t-1.214.5H13.143q-.714 0-1.214-.5t-.5-1.214v-5.143H1.715q-.714 0-1.214-.5t-.5-1.214v-12q0-.714.357-1.571T1.215 8.5l7.286-7.286q.5-.5 1.357-.857T11.429 0h7.429q.714 0 1.214.5t.5 1.214v5.857q1.214-.714 2.286-.714h7.429zm-9.715 3.804L15.232 16h5.339v-5.339zM9.143 3.804 3.804 9.143h5.339V3.804zm3.5 11.553 5.643-5.643V2.285h-6.857v7.429q0 .714-.5 1.214t-1.214.5H2.286v11.429h9.143v-4.571q0-.714.357-1.571t.857-1.357zm17.071 14.357V9.143h-6.857v7.429q0 .714-.5 1.214t-1.214.5h-7.429v11.429h16z"/>
            </svg>
          </slot>
        </button>
      </rh-tooltip>
    `;
  }

  async #onClick() {
    const text = this.copy ?? this.textContent;
    const message = text.trim();
    await navigator.clipboard.writeText(message);
    toast({ heading: 'Copied', message });
  }

  static {
    customElements.define(this.is, this);
  }
}
