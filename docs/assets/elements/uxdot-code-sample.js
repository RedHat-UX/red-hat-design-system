import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';

import { LitElement } from 'lit';

export class UxdotSample extends LitElement {
  static is = 'uxdot-code-sample';

  static properties = {
    colorPalette: { reflect: true, attribute: 'color-palette' },
    stacked: { reflect: true, type: Boolean },
    picker: { reflect: true, type: Boolean },
    columns: { reflect: true, type: Number },
    code: { reflect: true, type: Boolean },
  };

  createRenderRoot() {
    return this.shadowRoot ?? this.attachShadow({ mode: 'open' });
  }
}

await new Promise(requestIdleCallback);
customElements.define(UxdotSample.is, UxdotSample);
