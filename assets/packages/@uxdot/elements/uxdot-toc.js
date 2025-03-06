import { LitElement, html } from 'lit';
import { css } from "lit";
const styles = css `:host{display:block;container-type:inline-size;container-name:host;position:relative}details{display:flex;padding-inline:var(--rh-space-xl);border-inline-start:var(--rh-border-width-lg) solid #0000;border:var(--rh-border-width-sm) solid var(--rh-color-border-subtle-on-light)}details[open]:after{content:"";position:absolute;inset-block:0;inset-inline-start:0;inset-block-start:-1px;width:var(--rh-border-width-lg);background-color:var(--rh-color-brand-red-on-light)}summary{list-style:none;display:inline-flex;gap:var(--rh-space-sm);align-items:center;padding-block:var(--rh-space-lg)}.summary,summary{font-family:var(--rh-font-family-body-text);font-size:var(--rh-font-size-body-text-xl)!important;font-weight:var(--rh-font-weight-body-text-medium)}summary:before{content:"";width:1rem;height:1rem;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 10 15' fill='none'%3E%3Cg clip-path='url(%23clip0_232_19576)'%3E%3Cpath d='M2.5 14.5L0.5 12.5L5.5 7.5L0.5 2.5L2.5 0.5L9.5 7.5L2.5 14.5Z' fill='%23707070'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_232_19576'%3E%3Crect width='10' height='14' fill='white' transform='matrix(-1 0 0 1 10 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");background-repeat:no-repeat;background-size:contain;transition:.2s}summary::-webkit-details-marker,summary::marker{display:none}details[open]>summary:before{transform:rotate(90deg)}nav{margin-block-end:var(--rh-space-lg)}#expanded{display:none}@media (min-width:568px){details{display:none}#expanded{display:block}}`;
export class UxdotToc extends LitElement {
    render() {
        return html `
      <div id="container" part="container">
        <details>
          <summary id="summary-sm" class="summary">${this.summary}</summary>
          <nav aria-labelledby="summary-sm">
            <slot name="details"></slot>
          </nav>
        </details>
        <div id="expanded">
          <div id="summary-expanded" class="summary">${this.summary}</div>
          <nav aria-labelledby="summary-expanded">
            <slot name="expanded"></slot>
          </nav>
        </div>
      </div>
    `;
    }
}
UxdotToc.properties = {
    summary: {}
};
UxdotToc.styles = [styles];
customElements.define("uxdot-toc", UxdotToc);
//# sourceMappingURL=uxdot-toc.js.map