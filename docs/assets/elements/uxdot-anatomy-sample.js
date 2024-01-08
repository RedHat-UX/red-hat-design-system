import { LitElement, html, css } from 'lit';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import '@rhds/elements/rh-badge/rh-badge.js';

/**
 * @slot element - place demo element here
 * @slot - place rh-badge elements here
 *
 */
export class UxdotAnatomySample extends LitElement {
  static is = 'uxdot-anatomy-sample';

  static styles = [
    css`
      :host {
        display: block;
        position: relative;
      }
      ::slotted(rh-badge) {
        position: fixed;
        display: block;
      }
    `,
  ];

  static properties = { };

  static instances = new Set();

  static {
    customElements.define(this.is, this);
    document.addEventListener('scroll', function() {
      for (const i of UxdotAnatomySample.instances) {
        i.#onResize();
      }
    });
  }

  #ro = new ResizeObserver(() => this.#onResize);

  #mo = new MutationObserver(() => this.#onResize);

  #log = new Logger(this);

  connectedCallback() {
    super.connectedCallback();
    UxdotAnatomySample.instances.add(this);
    this.addEventListener('slotchange', this.#onResize);
    this.addEventListener('scroll', this.#onResize);
    this.#ro.observe(this);
    this.#mo.observe(this, { childList: true, attributes: false });
    this.#onResize();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    UxdotAnatomySample.instances.delete(this);
  }

  render() {
    return html`
      <slot name="element"></slot>
      <slot></slot>
    `;
  }

  async #onResize() {
    const element = this.querySelector('[slot="element"]');
    await element.updateComplete;
    // const er = element.getBoundingClientRect();
    for (const badge of this.querySelectorAll('rh-badge')) {
      const { shadowSelector } = badge.dataset;
      if (shadowSelector) {
        const target = element.shadowRoot.querySelector(shadowSelector);
        if (target instanceof Element) {
          const tr = target.getBoundingClientRect();
          const x = tr.left + window.scrollX;
          const y = tr.top + window.scrollY;
          badge.style.setProperty('translate', `${x + (tr.width / 2)}px ${y + (tr.height / 2)}px`);
        } else {
          this.#log.warn(`Could not find shadow element ${shadowSelector} in ${element.localName}${element.id ? `#${element.id}` : ''}`);
        }
      }
    }
  }
}
