import { LitElement, html } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { RhAlert } from '@rhds/elements/rh-alert/rh-alert.js';
import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './uxdot-copy-permalink.css';

@customElement('uxdot-copy-permalink')
export class UxdotCopyPermalink extends LitElement {
  static styles = [styles];

  @property({ attribute: 'copy-button-label' }) copyButtonLabel = 'Copy link to clipboard';

  @property({ attribute: 'copied-text' }) copiedText = 'Link copied';

  #internals = this.attachInternals();

  render() {
    return html`
      <slot></slot>
      <span id="signifier">(permalink)</span>
      <button id="button"
              @click="${this.#copyLink}"
              aria-label="${this.copyButtonLabel}">
        <rh-icon icon="link" set="ui"></rh-icon>
      </button>
    `;
  }

  firstUpdated() {
    this.#internals.states.add('--rendered');
  }

  async #copyLink() {
    const [link] = this.shadowRoot
        ?.querySelector('slot')
        ?.assignedElements({ flatten: true })
        ?.map(child => child.querySelector('a'))
        ?.filter(x => !!x) ?? [];
    if (link) {
      await navigator.clipboard.writeText(link.href);
      RhAlert.toast({ message: this.copiedText });
    }
  }
}
