import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { querySelectorDeep } from '/assets/qssd.js';

import '@rhds/elements/rh-tag/rh-tag.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';

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
      rh-tooltip {
        position: absolute;
        left: 1px;
        top: 1px;
        display: block;
        z-index: 2000;
      }
    `,
  ];

  static properties = {
    tags: { state: true },
  };

  static { customElements.define(this.is, this); }

  #ro = new ResizeObserver(() => this.#onResize);

  #mo = new MutationObserver(() => this.#onResize);

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('slotchange', this.#onResize);
    this.addEventListener('scroll', this.#onResize);
    this.#ro.observe(this);
    this.#mo.observe(this, { childList: true, attributes: false });
    this.#onResize();
  }

  firstUpdated() {
    this.#onResize();
  }

  render() {
    // TODO: render legend from tags
    // TODO: allow for an external legend
    // const egLightDOm = html`
    //   <uxdot-anatomy-legend>
    //     <uxdot-anatomy-sample>
    //       <r-element slot="element"></r-element>
    //       <uxdont-anatomy-tag>...</uxdont-anatomy-tag>
    //     </uxdot-anatomy-sample>
    //     <uxdot-anatomy-sample>
    //       <r-element slot="element"></r-element>
    //       <uxdont-anatomy-tag>...</uxdont-anatomy-tag>
    //     </uxdot-anatomy-sample>
    //   </uxdot-anatomy-legend>
    // `;
    return html`
      <slot name="element"></slot>
      <slot></slot>
      <div id="tags">${this.tags?.map?.(tag => !tag ? '' : html`
        <rh-tooltip content="${tag.description}" style="${styleMap({ translate: `${tag.x}px ${tag.y}px` })}">
          <rh-tag color="purple">${tag.label}</rh-tag>
        </rh-tooltip>`)}
      </div>
    `;
  }

  async #onResize() {
    const element = this.querySelector('[slot="element"]');
    await element.updateComplete;
    const er = this.getBoundingClientRect();
    this.tags = Array.from(this.querySelectorAll('uxdot-anatomy-tag'), tag => {
      const shadowSelector = tag.getAttribute('shadow-selector');
      if (shadowSelector) {
        const target = querySelectorDeep(shadowSelector, element);
        if (target instanceof Element) {
          const tr = target.getBoundingClientRect();
          // TODO: position a la tooltip: left right top bottom, default to center
          const x = tr.left + (tr.width / 2) - 1 - er.left;
          const y = tr.top + (tr.height / 2) - 1 - er.top;
          const label = tag.getAttribute('label');
          const description = tag.getAttribute('description');
          return {
            x,
            y,
            // TODO: from attrs. thanks sspriggs for the idea
            offsetX: 0,
            offsetY: 0,
            label,
            description,
          };
        }
      }
    });
  }
}
