import { html } from 'lit-html';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './uxdot-demo.css';

import { LitElement } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';

@customElement('uxdot-demo')
export class UxdotDemo extends LitElement {
  static styles = [styles];

  @property() tag!: string;

  @property() demo!: string;

  @property({ attribute: 'demo-title' }) demoTitle!: string;

  @property({ attribute: 'demo-url' }) demoUrl!: string;

  @property({ attribute: 'demo-source-url' }) demoSourceUrl!: string;

  @property({ attribute: 'demo-file-path' }) demoFilePath!: string;

  @property({ attribute: 'codepen-data' }) codePenData?: string;

  render() {
    return html`
      <div id="container">
        <iframe loading="lazy" title="${this.demoTitle}" src="${this.demoUrl}"></iframe>
        <rh-card ssr-hint-has-slotted-default
                 ssr-hint-has-slotted="footer">
          <rh-tabs class="code-tabs" active-index="0">
            <rh-tab slot="tab" active>HTML</rh-tab>
            <rh-tab-panel><slot name="html"></slot></rh-tab-panel>
            <rh-tab slot="tab">CSS</rh-tab>
            <rh-tab-panel><slot name="css"></slot></rh-tab-panel>
            <rh-tab slot="tab">JS</rh-tab>
            <rh-tab-panel><slot name="js"></slot></rh-tab-panel>
          </rh-tabs>
          <rh-button slot="footer"
                     variant="tertiary"
                     icon="expand"
                     icon-set="ui"
                     @click="${this.#toggleFullscreen}">FullScreen</rh-button>
          <rh-button slot="footer"
                     variant="tertiary"
                     icon="refresh"
                     icon-set="ui"
                     @click="${this.#reloadIframe}">Reload</rh-button>
          
          <rh-tooltip slot="footer">
            <a href="${this.demoSourceUrl}" aria-label="View source on Github">
              <rh-icon set="social" icon="github"></rh-icon>
            </a>
            <span slot="content">View source on Github</span>
          </rh-tooltip>

          <rh-tooltip slot="footer">
            <form action="https://codepen.io/pen/define" method="post">
              <input type="hidden" name="data" value="${ifDefined(this.codePenData)}">
              <rh-button variant="link" aria-label="View In Codepen" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                  <path d="M502.3 159.7l-234-156c-8-4.9-16.5-5-24.6 0l-234 156C3.7 163.7 0 170.8 0 178v156c0 7.1 3.7 14.3 9.7 18.3l234 156c8 4.9 16.5 5 24.6 0l234-156c6-4 9.7-11.1 9.7-18.3V178c0-7.1-3.7-14.3-9.7-18.3zM278 63.1l172.3 114.9-76.9 51.4L278 165.7V63.1zm-44 0v102.6l-95.4 63.7-76.9-51.4L234 63.1zM44 219.1l55.1 36.9L44 292.8v-73.7zm190 229.7L61.7 334l76.9-51.4L234 346.3v102.6zm22-140.9l-77.7-52 77.7-52 77.7 52-77.7 52zm22 140.9V346.3l95.4-63.7 76.9 51.4L278 448.8zm190-156l-55.1-36.9L468 219.1v73.7z"/>
                </svg>
              </rh-button>
            </form>
            <span slot="content">Open in Codepen</span>
          </rh-tooltip>
          
          <rh-tooltip slot="footer">
            <a id="new-tab" href="${this.demoUrl}" aria-label="View in new tab">
              <rh-icon set="ui" icon="external-link"></rh-icon>
            </a>
            <span slot="content">View in new tab</span>
          </rh-tooltip>
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
