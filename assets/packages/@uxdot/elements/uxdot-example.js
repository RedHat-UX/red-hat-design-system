import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { colorContextProvider, } from '@rhds/elements/lib/context/color/provider.js';
import { colorContextConsumer, } from '@rhds/elements/lib/context/color/consumer.js';
import { css } from "lit";
const styles = css `:host{display:block;container-type:inline-size;container-name:host;margin-block-end:var(--rh-space-2xl)}:host([transparent]){--rh-color-surface:#0000}#container{padding:var(--rh-space-2xl);display:flex;flex-direction:column;align-items:var(--_alignment,center);justify-content:center;border-width:var(--rh-border-width-sm);border-style:solid;border-color:var(--rh-color-border-subtle);border-radius:var(--rh-border-radius-default);background-color:var(--rh-color-surface);color:var(--rh-color-text-primary)}::slotted(*){display:flex;flex-direction:column;align-items:var(--_alignment,center);justify-content:center;max-width:100%;height:auto}.widthAdjustment ::slotted(*){width:var(--_width)}:host([variant=full]) #container{padding:0}:host([danger]) #container{--rh-color-border-subtle:var(--rh-color-border-destructive);background-image:url(/assets/best-practices-danger-icon.svg);background-position-x:8px;background-position-y:8px;background-repeat:no-repeat}:host([no-border]:not([danger])) #container{border:none}@container host (min-width: 576px){#container{padding:var(--rh-space-3xl)}}@container host (min-width: 768px){#container{padding:var(--rh-space-4xl)}}`;
export class UxdotExample extends LitElement {
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
        this.alignment = 'center';
    }
    render() {
        const { on = '', widthAdjustment, alignment } = this;
        return html `
      <div id="container"
           part="container"
           class="on ${classMap({ [on]: !!on, widthAdjustment: widthAdjustment !== '100%' })}"
           style="--_width: ${widthAdjustment}; --_alignment: ${alignment}">
        <slot></slot>
      </div>
    `;
    }
}
UxdotExample.properties = {
    colorPalette: { reflect: true, attribute: 'color-palette' },
    transparent: { type: Boolean },
    variant: { type: String, reflect: true },
    widthAdjustment: { type: String, attribute: 'width-adjustment' },
    noBorder: { type: Boolean, attribute: 'no-border' },
    danger: { type: Boolean, reflect: true },
    alignment: { type: String }
};
UxdotExample.styles = [styles];
__decorate([
    colorContextConsumer()
], UxdotExample.prototype, "on", void 0);
customElements.define("uxdot-example", UxdotExample);
//# sourceMappingURL=uxdot-example.js.map