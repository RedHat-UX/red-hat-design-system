import { html } from 'lit-html';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './uxdot-demo.css';

import { isServer, LitElement } from 'lit';
import type { RhCodeBlock } from 'elements/rh-code-block/rh-code-block.js';

@customElement('uxdot-demo')
export class UxdotDemo extends LitElement {
  static styles = [styles];

  /** For these tags, do not center the primary-demo content in the frame */
  private static tagsWithFullWidthDemos = new Set([
    'rh-accordion',
    'rh-announcement',
    'rh-back-to-top',
    'rh-breadcrumb',
    'rh-footer',
    'rh-jump-links',
    'rh-navigation-primary',
    'rh-navigation-secondary',
    'rh-subnav',
  ]);

  @property() tag!: string;

  @property() demo!: string;

  @property({
    attribute: 'attribute-knobs',
    converter: {
      fromAttribute(str) {
        return str?.split(/,|\s/) ?? [];
      },
    },
  }) attributeKnobs: string[] = [];

  @property({ attribute: 'demo-title' }) demoTitle!: string;

  @property({ attribute: 'demo-url' }) demoUrl!: string;

  @property({ attribute: 'demo-source-url' }) demoSourceUrl!: string;

  @property({ attribute: 'demo-file-path' }) demoFilePath!: string;

  get #iframe() {
    const iframe = this.shadowRoot?.querySelector('iframe');
    if (!iframe) {
      throw new Error('iframe not found');
    }
    return iframe;
  }

  render() {
    return html`
      <div id="container">
        <iframe loading="lazy"
                style="opacity: 0"
                onload="this.style.opacity=1"
                title="${this.demoTitle}"
                src="${this.demoUrl}"></iframe>
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
        <div id="knobs" role="list"><slot name=knobs></slot></div>
      </div>
    `;
  }

  firstUpdated() {
    this.#initIframe();
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
    this.#initIframe();
  }

  async #initIframe() {
    if (!this.#loadedPromises.has(this.#iframe.contentWindow!)) {
      this.#loadedPromises.set(this.#iframe.contentWindow!, new Promise(resolve =>
        this.#iframe.contentWindow?.addEventListener('DOMContentLoaded', () => resolve())));
    }
    await this.#loadedPromises.get(this.#iframe.contentWindow!);
    if (!isServer && this.demo === this.tag && !UxdotDemo.tagsWithFullWidthDemos.has(this.tag)) {
      const { contentDocument } = this.#iframe;
      if (contentDocument) {
        const style = contentDocument.createElement('style');
        style.textContent = /* css */`
          body {
            display: flex;
            align-items: center;
            justify-content: center;
            main {
              display: contents;
              > :is(
                rh-card,
              ) {
                min-width: 300px;
              }
            }
          }
        `;
        contentDocument.body.append(style);
      }
    }
  }

  #loadedPromises = new WeakMap<Window, Promise<void>>();

  async #getDemoElement() {
    const element: LitElement | null | undefined =
        this.#iframe.contentWindow?.document.querySelector(this.tag);
    if (element) {
      return element;
    } else {
      throw new Error(`element ${this.tag} not found`);
    }
  }

  async setDemoElementAttribute(name: string, value: string | boolean) {
    await this.updateComplete;
    const element = await this.#getDemoElement();
    if (value === null || value === '') {
      element.removeAttribute(name);
    } else if (typeof value === 'boolean') {
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
    for (const knob of this.querySelectorAll('uxdot-knob-attribute')) {
      knob.requestUpdate();
    }
  }

  async getDemoElementAttribute(name: string) {
    await this.updateComplete;
    const element = await this.#getDemoElement();
    return element.getAttribute(name);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uxdot-demo': UxdotDemo;
  }
}
