import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { colorContextProvider, } from '@rhds/elements/lib/context/color/provider.js';
import { colorContextConsumer, } from '@rhds/elements/lib/context/color/consumer.js';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { css } from "lit";
const styles = css `:host{display:block;container-type:inline-size;container-name:host;margin-block-end:var(--rh-space-2xl,32px)}:host([transparent]){--_context-background-color:transparent}#container{padding:var(--rh-space-2xl,32px);display:flex;flex-direction:column;align-items:var(--_alignment,center);justify-content:center;border-width:var(--rh-border-width-sm,1px);border-style:solid;border-color:var(--_border-color,var(--rh-color-border-subtle-on-light,#c7c7c7));border-radius:var(--rh-border-radius-default,3px);background-color:var(--_context-background-color,var(--rh-color-surface-lightest,#fff));color:var(--_context-text,var(--rh-color-text-primary-on-light,#151515))}#container.dark{--_border-color:var(--rh-color-border-subtle-on-dark, #707070);color:var(--_context-text,var(--rh-color-text-primary-on-dark,#fff))}::slotted(*){display:flex;flex-direction:column;align-items:var(--_alignment,center);justify-content:center;max-width:100%;width:var(--_width,100%)}:host([variant=full]) #container{padding:0}:host([danger]) #container{--_border-color:var(--rh-color-border-status-danger-on-light, #f0561d);background-image:url("/assets/best-practices-danger-icon.svg");background-position-x:8px;background-position-y:8px;background-repeat:no-repeat}:host([no-border]:not([danger])) #container{border:none}@container host (min-width:576px){#container{padding:var(--rh-space-3xl,48px)}}@container host (min-width:768px){#container{padding:var(--rh-space-4xl,64px)}}`;
let UxdotExample = class UxdotExample extends LitElement {
    constructor() {
        super(...arguments);
        /* force a transparent background */
        this.transparent = false;
        /* width in pixels, defaults to 100% */
        this.widthAdjustment = '100%';
        /* display a border around the example content */
        this.noBorder = false;
        /* danger status */
        this.danger = false;
        /* set alignment: left, right, defaults to center */
        this.alignment = 'center';
    }
    render() {
        const { on = '', widthAdjustment, alignment } = this;
        return html `
      <div id="container" 
          part="container" 
          class="${classMap({ [on]: !!on })}" 
          style="--_width: ${widthAdjustment}; --_alignment: ${alignment};">
        <slot></slot>
      </div>
    `;
    }
};
UxdotExample.styles = [styles];
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], UxdotExample.prototype, "colorPalette", void 0);
__decorate([
    colorContextConsumer()
], UxdotExample.prototype, "on", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], UxdotExample.prototype, "transparent", void 0);
__decorate([
    property({ reflect: true })
], UxdotExample.prototype, "variant", void 0);
__decorate([
    property({ reflect: true, attribute: 'width-adjustment' })
], UxdotExample.prototype, "widthAdjustment", void 0);
__decorate([
    property({ reflect: true, attribute: 'no-border', type: Boolean })
], UxdotExample.prototype, "noBorder", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], UxdotExample.prototype, "danger", void 0);
__decorate([
    property({ reflect: true })
], UxdotExample.prototype, "alignment", void 0);
UxdotExample = __decorate([
    customElement('uxdot-example')
], UxdotExample);
//# sourceMappingURL=uxdot-example.js.map