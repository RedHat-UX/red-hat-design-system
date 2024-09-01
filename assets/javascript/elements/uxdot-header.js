import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `:host{display:block;background-color:var(--rh-color-surface-lighter,#f2f2f2);color:var(--rh-color-text-primary-on-light);container-type:inline-size;container-name:header}#container{display:block;z-index:2;max-width:1140px;padding-block-start:var(--_uxdot-header-padding,var(--rh-space-2xl));padding-inline:var(--_uxdot-header-padding,var(--rh-space-2xl))}#container:not(.hasSubnav){padding-block-end:var(--_uxdot-header-padding,var(--rh-space-2xl))}#container.hasSearch{display:grid;grid-template-columns:1fr;grid-template-areas:"heading" "search";gap:var(--rh-space-2xl)}[part=heading]{grid-area:heading}::slotted([slot=search]){grid-area:search;display:flex;flex-direction:column;justify-content:space-around}::slotted(h1){font-family:var(--uxdot-heading-font-family, var(--rh-font-family-heading))!important;font-size:var(--uxdot-heading-heading-size, var(--rh-font-size-heading-2xl))!important;font-weight:var(--uxdot-heading-font-weight,var(--rh-font-weight-heading-regular))!important;line-height:var(--uxdot-heading-line-height, var(--rh-line-height-heading))!important}::slotted([slot=subnav]){margin-block-start:var(--rh-space-2xl);inset-inline-start:calc(-1 * var(--rh-space-2xl));position:relative;width:calc(100% + var(--_uxdot-header-padding,var(--rh-space-2xl)) * 2)}@container header (min-width:768px){#container{--_uxdot-header-padding:var(--rh-space-3xl)}}@container header (min-width:992px){:host{margin-block-end:var(--rh-space-6xl)}#container{top:100px;--_uxdot-header-padding:var(--rh-space-6xl)}#container.hasSearch{grid-template-columns:1fr 1fr;grid-template-areas:"heading search"}}`;
let UxdotHeader = class UxdotHeader extends LitElement {
    constructor() {
        super(...arguments);
        this.hasSubnav = false;
        this.hasSearch = false;
    }
    render() {
        const { hasSubnav, hasSearch } = this;
        return html `
      <div id="container" class=${classMap({ hasSubnav, hasSearch })} part="container">
        <slot part="heading"></slot>
        <slot name="search" part="search"></slot>
        <slot name="subnav" part="subnav"></slot>
      </div>
    `;
    }
};
UxdotHeader.styles = [styles];
__decorate([
    property({ type: Boolean, attribute: 'has-subnav' })
], UxdotHeader.prototype, "hasSubnav", void 0);
__decorate([
    property({ type: Boolean, attribute: 'has-search' })
], UxdotHeader.prototype, "hasSearch", void 0);
UxdotHeader = __decorate([
    customElement('uxdot-header')
], UxdotHeader);
export { UxdotHeader };
//# sourceMappingURL=uxdot-header.js.map