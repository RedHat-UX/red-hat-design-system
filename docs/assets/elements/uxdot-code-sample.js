import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
import '@rhds/elements/rh-surface/rh-surface.js';

import { LitElement } from 'lit';

export class UxdotSample extends LitElement {
  static is = 'uxdot-code-sample';

  static properties = {
    colorPalette: { reflect: true, attribute: 'color-palette' },
    stacked: { reflect: true, type: Boolean },
    picker: { reflect: true, type: Boolean },
    target: { },
    columns: { reflect: true, type: Number },
    code: { reflect: true, type: Boolean },
  };

  createRenderRoot() {
    const template = this.querySelector('template[shadowrootmode]');
    if (!template) {
      return this.shadowRoot ?? super.createRenderRoot();
    } else {
      const mode = template.getAttribute('shadowrootmode');
      (this.shadowRoot ?? this.attachShadow({ mode })).appendChild(template.content);
      template.remove();
      return this.shadowRoot;
    }
  }

  updated(changed) {
    if (changed.has('target')) {
      const picker = this.shadowRoot.querySelector('rh-context-picker');
      if (picker) {
        picker.target = this.querySelector(this.target);
      }
    }
  }

  static { customElements.define(this.is, this); }
}
