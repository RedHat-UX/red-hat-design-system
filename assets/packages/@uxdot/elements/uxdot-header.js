import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import { css } from "lit";
const styles = css `:host{--_uxdot-header-padding:var(--rh-space-2xl);display:block;container-type:inline-size;container-name:header;background-color:var(--rh-color-surface)}@container (min-width: 768px){:host{--_uxdot-header-padding:var(--rh-space-3xl)}}@container (min-width: 992px){:host{--_uxdot-header-padding:var(--rh-space-6xl)}}#container{display:block;max-width:1140px;padding-block-start:var(--_uxdot-header-padding,);padding-inline:var(--_uxdot-header-padding)}#container.hasSearch{display:grid;grid-template-columns:1fr;grid-template-areas:"heading" "search";gap:var(--rh-space-2xl)}#container:not(.hasSubnav){padding-block-end:var(--_uxdot-header-padding)}@container header (min-width: 992px){#container.hasSearch{grid-template-columns:1fr 1fr;grid-template-areas:"heading search"}}[part=heading]{grid-area:heading}::slotted([slot=search]){grid-area:search;display:flex;flex-direction:column;justify-content:space-around}::slotted(h1){font-family:var(--uxdot-heading-font-family,var(--rh-font-family-heading))!important;font-size:var(--uxdot-heading-heading-size,var(--rh-font-size-heading-2xl))!important;font-weight:var(--uxdot-heading-font-weight,var(--rh-font-weight-heading-regular))!important;line-height:var(--uxdot-heading-line-height,var(--rh-line-height-heading))!important;margin:0!important}::slotted([slot=subnav]){margin-block-start:var(--rh-space-2xl);padding-inline:calc(var(--_uxdot-header-padding) - var(--rh-space-2xl))}`;
import { colorContextProvider } from '@rhds/elements/lib/context/color/provider.js';
import colorContextProviderCss from '@rhds/tokens/css/color-context-provider.css.js';
export class UxdotHeader extends LitElement {
    constructor() {
        super(...arguments);
        this.colorPalette = 'lighter';
        this.hasSubnav = false;
        this.hasSearch = false;
    }
    render() {
        const { hasSubnav, hasSearch } = this;
        return html `
      <div id="container"
           part="container"
           class=${classMap({ hasSubnav, hasSearch })}>
        <slot part="heading"></slot>
        <slot name="search" part="search"></slot>
      </div>
      <slot name="subnav" part="subnav"></slot>
    `;
    }
}
UxdotHeader.properties = {
    colorPalette: { reflect: true, attribute: 'color-palette' },
    hasSubnav: { type: Boolean, attribute: 'has-subnav' },
    hasSearch: { type: Boolean, attribute: 'has-search' }
};
UxdotHeader.styles = [styles, colorContextProviderCss];
customElements.define("uxdot-header", UxdotHeader);
//# sourceMappingURL=uxdot-header.js.map