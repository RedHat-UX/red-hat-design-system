import { html } from 'lit-html';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './uxdot-demo.css';

import { LitElement } from 'lit';
import type { RhCodeBlock } from 'elements/rh-code-block/rh-code-block.js';

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
          <rh-cta slot="footer" href="${this.demoSourceUrl}">View source on GitHub</rh-cta>
          <rh-cta slot="footer" href="${this.demoUrl}" target="_blank">View In Own Tab</rh-cta>
        </rh-card>
        <slot name=knobs></slot>
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

  async setDemoElementAttribute(name: string, value: string | boolean) {
    await this.updateComplete;
    const iframe = this.shadowRoot?.querySelector('iframe');
    if (!iframe) {
      throw new Error('iframe not found');
    }
    const element: LitElement | null | undefined =
      iframe.contentWindow?.document.querySelector(this.tag);
    if (!element) {
      throw new Error(`element ${this.tag} not found`);
    }
    if (typeof value === 'boolean') {
      element.toggleAttribute(name, value);
    } else {
      element.setAttribute(name, value);
    }
    await element.updateComplete;
    const htmlSlot: HTMLSlotElement | null = this.shadowRoot!.querySelector('slot[name=html]')!;
    const [htmlBlock] = htmlSlot.assignedElements() as RhCodeBlock[];
    htmlBlock.setAttribute('highlighting', 'client');
    htmlBlock.setAttribute('language', 'html');
    htmlBlock.toggleAttribute('wrap', true);
    await htmlBlock.updateComplete;
    htmlBlock.innerHTML = `<script type="text/html">${element.outerHTML}</script>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uxdot-demo': UxdotDemo;
  }
}
