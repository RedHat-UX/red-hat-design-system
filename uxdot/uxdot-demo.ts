import { html } from 'lit-html';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './uxdot-demo.css';

import { UxdotDemoSSRController } from './uxdot-demo-ssr-controller.js';
import { SSRFailureRecoverableElement } from './ssr-failure-recoverable.js';

@customElement('uxdot-demo')
export class UxdotDemo extends SSRFailureRecoverableElement {
  static styles = [styles];

  @property() tag!: string;

  @property() demo!: string;

  @property({ attribute: 'demo-title' }) demoTitle!: string;

  @property({ attribute: 'demo-url' }) demoUrl!: string;

  @property({ attribute: 'demo-source-url' }) demoSourceUrl!: string;

  @property({ attribute: 'demo-file-path' }) demoFilePath!: string;

  ssr = new UxdotDemoSSRController(this);

  render() {
    return html`
      <div id="container">
        <iframe loading="lazy" title="${this.demoTitle}" src="${this.demoUrl}"></iframe>
        <rh-card>
          <rh-tabs class="code-tabs">
            <rh-tab slot="tab">HTML</rh-tab>
            <rh-tab-panel>
              <rh-code-block highlighting="prerendered">${this.ssr.htmlContent}</rh-code-block
            </rh-tab-panel>
            <rh-tab slot="tab">CSS</rh-tab>
            <rh-tab-panel>
              <rh-code-block highlighting="prerendered">${this.ssr.cssContent}</rh-code-block
            </rh-tab-panel>
            <rh-tab slot="tab">JS</rh-tab>
            <rh-tab-panel>
              <rh-code-block highlighting="prerendered">${this.ssr.jsContent}</rh-code-block
            </rh-tab-panel>
          </rh-tabs>
          <rh-button slot="footer" variant="tertiary" data-action="fullscreen" icon="expand">FullScreen</rh-button>
          <rh-cta slot="footer" href="${this.demoSourceUrl}">View source on GitHub</rh-cta>
          <rh-cta slot="footer" href="${this.demoUrl}">View In Own Tab</rh-cta>
        </rh-card>
      </div>
    `;
  }
}
