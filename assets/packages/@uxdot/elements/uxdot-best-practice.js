import { LitElement, html } from 'lit';
import { css } from "lit";
const styles = css `:host{display:block;margin-block:var(--rh-space-2xl)}#container{display:flex;flex-direction:column;gap:var(--rh-space-2xl);margin-block:var(--rh-space-2xl)}span{font-family:var(--rh-font-family-heading);font-size:var(--rh-font-size-heading-xs);font-weight:var(--rh-font-weight-heading-medium);display:flex;flex-direction:row;align-items:center;gap:var(--rh-space-md)}#do span{color:var(--rh-color-status-success)}#dont span{color:var(--rh-color-status-danger)}::slotted(uxdot-example){margin:0!important}figure{margin:0!important}`;
export class UxdotBestPractice extends LitElement {
    constructor() {
        super(...arguments);
        this.variant = 'do';
    }
    render() {
        const { variant } = this;
        const icon = variant === 'do' ? 'check-circle-fill' : 'close-circle-fill';
        const title = variant === 'do' ? 'Do' : 'Don\'t';
        return html `
      <figure id="container">
        <slot name="image"></slot>
        <figcaption id="${variant}">
          <span><rh-icon set="ui" icon="${icon}" size="md"></rh-icon>${title}</span>
          <slot></slot>
        </figcaption>
      </figure>
    `;
    }
}
UxdotBestPractice.properties = {
    variant: { reflect: true }
};
UxdotBestPractice.styles = [styles];
customElements.define("uxdot-best-practice", UxdotBestPractice);
//# sourceMappingURL=uxdot-best-practice.js.map