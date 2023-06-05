import { __decorate } from "tslib";
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { html, LitElement } from 'lit';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { css } from "lit";
const styles = css `:root{display:flex;flex-direction:column}article{position:relative;height:100%;display:flex;flex-direction:column}[part=header]{display:flex;flex-direction:row;align-items:center}[part=body] ::slotted(:not([slot]):first-of-type){margin-block-start:0}[part=body] ::slotted(:not([slot]):last-of-type){margin-block-end:0}[part=footer]{display:flex;gap:.5em;inset-block-end:0}.empty{display:none}::slotted(*){font-family:inherit!important;line-height:inherit!important}::slotted(:is(h1,h2,h3,h4,h5,h6)){font-size:inherit!important}#container{align-self:stretch;display:flex;flex-direction:column;justify-items:flex-start;overflow:hidden;border:var(--_border,var(--_border-width,1px) var(--_border-style,solid) var(--_border-color,var(--rh-color-border-subtle-on-light,#c7c7c7)));background-color:var(--_background-color,var(--rh-color-surface-lightest,#fff));border-radius:var(--_border-radius,var(--rh-border-width-lg,3px));color:var(--_color,var(--rh-color-text-primary-on-light,#151515));font-family:var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);line-height:var(--rh-line-height-body-text, 1.5)}#container.dark{--_background-color:var(--rh-color-surface-darkest, #151515);--_color:var(--rh-color-text-primary-on-dark, #ffffff);--_border-color:var(--rh-color-border-subtle-on-dark, #707070)}#header{box-sizing:border-box;max-height:200px;overflow:hidden;font-size:var(--rh-card-header-font-size, var(--rh-font-size-heading-sm, 1.5rem));padding-block:var(--rh-space-lg,16px);padding-inline:var(--rh-space-xl,24px)}#body{padding:var(--rh-space-xl,24px)}#footer{padding:var(--rh-space-xl,24px)}@media screen and (min-width:768px){#body{padding:var(--rh-space-2xl,32px)}#footer{padding:var(--rh-space-2xl,32px)}}#header ::slotted(:is(h1,h2,h3,h4,h5,h6)){margin:unset;font-weight:var(--rh-font-weight-body-text-medium,500)}`;
/**
 * Cards are flexible surfaces used to group information in a small layout. They give small previews of information or provide secondary content in relation to the content it's near. Several cards can be used together to group related information.
 * @summary     Arranges content and interactive elements in a layout
 * @slot        header
 *              If this slot is used, we expect a heading level tag (h1, h2, h3, h4, h5, h6).
 *              An icon, svg, or use of the icon component are also valid in this region.
 * @slot        Any content that is not designated for the header or footer slot, will go to this slot.
 * @slot        footer
 *              Use this slot for anything that you want to be stuck to the base of the card.
 * @csspart     container
 *              The container for the card. Contains the header, body, and footer.
 * @csspart     header
 *              The header for the card. Contains the header slot.
 * @csspart     body
 *              The body for the card. Contains the default slot.
 * @csspart     footer
 *              The footer for the card. Contains the footer slot.
 * @cssprop     {<length>} --rh-card-header-font-size
 *              Font size for header on card
 *              {@default `1.5rem`}
 * @cssprop     --rh-border-width-lg
 * @cssprop     --rh-color-border-subtle-on-dark
 * @cssprop     --rh-color-border-subtle-on-light
 * @cssprop     --rh-color-surface-darkest
 * @cssprop     --rh-color-surface-lightest
 * @cssprop     --rh-color-text-primary-on-dark
 * @cssprop     --rh-color-text-primary-on-light
 * @cssprop     --rh-font-family-body-text
 * @cssprop     --rh-font-size-heading-sm
 * @cssprop     --rh-font-weight-body-text-medium
 * @cssprop     --rh-line-height-body-text
 * @cssprop     --rh-space-lg
 * @cssprop     --rh-space-xl
 * @cssprop     --rh-space-2xl
 *
 */
let RhCard = class RhCard extends LitElement {
    constructor() {
        super(...arguments);
        this.slots = new SlotController(this, 'header', null, 'footer');
    }
    render() {
        const { on = '' } = this;
        return html `
     <article part="container" id="container" class="${classMap({ [on]: !!on })}">
        <header id="header"
                part="header"
                class="${classMap({ empty: !this.slots.hasSlotted('header') })}">
          <slot name="header"></slot>
        </header>
        <div id="body"
             part="body"
             class="${classMap({ empty: !this.querySelector(':not([slot])') })}">
          <slot></slot>
        </div>
        <footer id="footer"
                part="footer"
                class="${classMap({ empty: !this.slots.hasSlotted('footer') })}">
          <slot name="footer"></slot>
        </footer>
      </article>
    `;
    }
};
RhCard.version = '{{version}}';
RhCard.styles = [styles];
__decorate([
    colorContextConsumer()
], RhCard.prototype, "on", void 0);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhCard.prototype, "colorPalette", void 0);
RhCard = __decorate([
    customElement('rh-card')
], RhCard);
export { RhCard };
//# sourceMappingURL=rh-card.js.map