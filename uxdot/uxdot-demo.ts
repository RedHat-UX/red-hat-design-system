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
        <iframe loading="lazy" title="${this.demoTitle}" src="${this.demoUrl}"></iframe>
        <rh-card ssr-hint-has-slotted-default
                 ssr-hint-has-slotted="footer">
          <rh-tabs class="code-tabs" active-index="0">
            <rh-tab slot="tab" active>HTML</rh-tab>
            <rh-tab-panel>
              <rh-code-block dedent
                             actions="copy wrap"
                             highlighting="prerendered"><slot name="html"></slot></rh-code-block>
            </rh-tab-panel>
            <rh-tab slot="tab">CSS</rh-tab>
            <rh-tab-panel>
              <rh-code-block dedent
                             actions="copy wrap"
                             highlighting="prerendered"><slot name="css"></slot></rh-code-block>
            </rh-tab-panel>
            <rh-tab slot="tab">JS</rh-tab>
            <rh-tab-panel>
              <rh-code-block dedent
                             actions="copy wrap"
                             highlighting="prerendered"><slot name="js"></slot></rh-code-block>
            </rh-tab-panel>
          </rh-tabs>
          <rh-button slot="footer"
                     variant="tertiary"
                     icon="expand"
                     icon-set="ui"
                     @click="${this.#toggleFullscreen}">FullScreen</rh-button>
          <rh-cta slot="footer" href="${this.demoSourceUrl}">View source on GitHub</rh-cta>
          <rh-cta slot="footer" href="${this.demoUrl}">View In Own Tab</rh-cta>
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
}
