import { html } from 'lit-html';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './uxdot-demo.css';

import { LitElement } from 'lit';

@customElement('uxdot-demo')
export class UxdotDemo extends LitElement {
  static styles = [styles];

  @property() tag!: string;

  @property() demo!: string;

  @property({ attribute: 'demo-title' }) demoTitle!: string;

  @property({ attribute: 'demo-url' }) demoUrl!: string;

  @property({ attribute: 'demo-source-url' }) demoSourceUrl!: string;

  @property({ attribute: 'demo-file-path' }) demoFilePath!: string;

  render() {
    return html`
      <div id="container">
        <iframe loading="lazy" src="${this.demoUrl}" title="${this.demoTitle}"></iframe>
        <rh-card ssr-hint-has-slotted="footer"
                 ssr-hint-has-slotted-default>
          <rh-tabs class="code-tabs" active-index="0">
            <rh-tab slot="tab" active>HTML</rh-tab>
            <rh-tab-panel><slot name="html"></slot></rh-tab-panel>
            <rh-tab slot="tab">CSS</rh-tab>
            <rh-tab-panel><slot name="css"></slot></rh-tab-panel>
            <rh-tab slot="tab">JS</rh-tab>
            <rh-tab-panel><slot name="js"></slot></rh-tab-panel>
          </rh-tabs>
          <rh-button slot="footer"
                     @click="${this.#toggleFullscreen}"
                     icon="expand"
                     icon-set="ui"
                     variant="tertiary">FullScreen</rh-button>
          <rh-button slot="footer"
                     @click="${this.#reloadIframe}"
                     icon="refresh"
                     icon-set="ui"
                     variant="tertiary">Reload</rh-button>
          <rh-cta slot="footer" href="${this.demoSourceUrl}">View source on GitHub</rh-cta>
          <rh-cta slot="footer" href="${this.demoUrl}" target="_blank">View In Own Tab</rh-cta>
        </rh-card>
      </div>
    `;
  }

  #toggleFullscreen() {
    if (document.fullscreenElement === this) {
      document.exitFullscreen();
    } else {
      this.requestFullscreen();
    }
  }

  #reloadIframe() {
    this.shadowRoot?.querySelector('iframe')?.contentWindow?.location.reload();
  }
}
