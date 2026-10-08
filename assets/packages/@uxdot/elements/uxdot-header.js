import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import { css } from "lit";
const styles = css `:host{--_uxdot-header-padding:var(--rh-space-2xl,32px);display:block;container-type:inline-size;container-name:header;background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),oklch(from var(--rh-color-surface-dark,#383838) calc(l * .82) c h))}@container (min-width: 768px){:host{--_uxdot-header-padding:var(--rh-space-3xl,48px)}}@container (min-width: 992px){:host{--_uxdot-header-padding:var(--rh-space-6xl,96px)}}#container{display:block;max-width:1140px;padding-block-start:var(--_uxdot-header-padding,);padding-inline:var(--_uxdot-header-padding)}#container:not(.hasSubnav){padding-block-end:var(--_uxdot-header-padding)}[part=heading]{grid-area:heading}::slotted(h1){font-family:var(--uxdot-heading-font-family,var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif))!important;font-size:var(--uxdot-heading-heading-size,var(--rh-font-size-heading-2xl,3rem))!important;font-weight:var(--uxdot-heading-font-weight,var(--rh-font-weight-heading-regular,400))!important;line-height:var(--uxdot-heading-line-height,var(--rh-line-height-heading,1.3))!important;margin:0!important}::slotted([slot=subnav]){margin-block-start:var(--rh-space-2xl,32px);padding-inline:calc(var(--_uxdot-header-padding) - var(--rh-space-2xl, 32px))}`;
import { themable } from '@rhds/elements/lib/themable.js';
let UxdotHeader = class UxdotHeader extends LitElement {
    constructor() {
        super(...arguments);
        this.hasSubnav = false;
    }
    render() {
        const { hasSubnav } = this;
        return html `
      <div id="container"
           part="container"
           class=${classMap({ hasSubnav })}>
        <slot part="heading"></slot>
      </div>
      <slot name="subnav" part="subnav"></slot>
    `;
    }
};
UxdotHeader.styles = [styles];
__decorate([
    property({ type: Boolean, attribute: 'has-subnav' })
], UxdotHeader.prototype, "hasSubnav", void 0);
UxdotHeader = __decorate([
    customElement('uxdot-header'),
    themable
], UxdotHeader);
export { UxdotHeader };
//# sourceMappingURL=uxdot-header.js.map