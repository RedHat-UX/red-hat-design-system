import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
import { LitElement, css } from 'lit';

export class UxdotSample extends LitElement {
  static is = 'uxdot-code-sample';

  static properties = {
    colorPalette: { reflect: true, attribute: 'color-palette' },
    stacked: { reflect: true, type: Boolean },
    picker: { reflect: true, type: Boolean },
    columns: { reflect: true, type: Number },
    code: { reflect: true, type: Boolean },
  };

  static styles = css`
    :host {
      position: relative;
    }

    rh-surface {
      display: grid;
      padding: var(--rh-space-4xl);
      border-radius: var(--rh-border-radius-default);
      border: var(--rh-border-width-sm) solid var(--rh-color-border-subtle-on-light);
      gap: var(--rh-space-md);

      :host(.dont) & {
        border-color: var(--rh-color-red-500);
      }

      :host(.column-2) &,

      :host(.show-code) & {
        grid-template-columns: 1fr 1fr;
      }

      :host(.stacked) & {
        grid-template: repeat(auto-fill, minmax(1px, 1fr)) / 1fr;
      }

      @media (min-width: 992px) { /* --rh-media-md */
        padding: var(--rh-space-7xl);
        gap: var(--rh-space-lg);
      }
    }

    pf-icon.dont {
      color: var(--rh-color-red-500);
      position: absolute;
      inset-block-start: var(--rh-space-xl);
      inset-inline-start: var(--rh-space-sm);
    }
  `;

  static { customElements.define(this.is, this); }
}
