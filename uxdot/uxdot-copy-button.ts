import type { IconNameFor } from '@rhds/icons';

import { html, LitElement } from 'lit';

import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';

import { RhAlert } from '@rhds/elements/rh-alert/rh-alert.js';

import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './uxdot-copy-button.css';
import visuallyHidden from './visually-hidden.css';

@customElement('uxdot-copy-button')
export class UxdotCopyButton extends LitElement {
  static styles = [styles, visuallyHidden];

  @property() copy?: string;

  @property() icon?: IconNameFor<'ui'> = 'copy';

  #internals = this.attachInternals();

  render() {
    return html`
      <rh-tooltip position="left-start">
        <span id="caption" slot="content">${this.copy ?? 'Click to copy'}</span>
        <button @click="${this.#onClick}">
          <code><slot></slot></code>
          <slot name="extra-content"></slot>
          <span class="visually-hidden">Click to copy</span>
          <rh-icon .icon="${this.icon}" aria-hidden="true" set="ui"></rh-icon>
        </button>
      </rh-tooltip>
    `;
  }

  firstUpdated() {
    this.#internals.states.add('--rendered');
  }

  async #onClick() {
    const text = this.copy ?? this.textContent ?? '';
    const message = text.trim();
    await navigator.clipboard.writeText(message);
    RhAlert.toast({ heading: 'Copied', message });
  }
}
