var _RhCard_slots;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { html, LitElement } from 'lit';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:block;container-name:card;container-type:inline-size;width:100%;height:max-content}#body.empty,#footer.empty,#header.empty,#image.empty{display:none!important}::slotted(*){line-height:inherit}::slotted(a){color:var(--rh-color-interactive-primary-default)}::slotted(a:hover){color:var(--rh-color-interactive-primary-hover)}::slotted(a:focus-within){color:var(--rh-color-interactive-primary-focus)}::slotted(a:active){color:var(--rh-color-interactive-primary-active)}::slotted(a:visited){color:var(--rh-color-interactive-primary-visited-default)}::slotted(a:visited:hover){color:var(--rh-color-interactive-primary-visited-hover)}::slotted(a:visited:focus-within){color:var(--rh-color-interactive-primary-visited-focus)}::slotted(a:visited:active){color:var(--rh-color-interactive-primary-visited-active)}#container{--_header-bg:light-dark(var(--rh-card-header-background-on-light,#0000),var(--rh-card-header-background-on-dark,#0000));align-self:stretch;display:flex;flex-direction:column;justify-items:flex-start;overflow:hidden;border-radius:var(--_border-radius,var(--rh-border-radius-default,3px));font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif)!important;line-height:var(--rh-line-height-body-text,1.5);border-style:solid;border-width:var(--rh-border-width-sm,1px);border-color:var(--rh-color-border-subtle);width:100%;height:100%;background-color:light-dark(var(--_card-background,var(--rh-color-surface-lightest,#fff)),var(--_card-background,var(--rh-color-surface-darkest,#151515)));color:var(--rh-color-text-primary)}#container.dark,#container.darker,#container.darkest,#container.light,#container.lighter,#container.lightest{--_card-background:var(--rh-color-surface)}#body,#footer,#header{margin-inline:var(--rh-space-xl,24px)}#body ::slotted(:is(h1,h2,h3,h4,h5,h6)),#header ::slotted(:is(h1,h2,h3,h4,h5,h6)){font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif)}#image ::slotted(*){display:block;max-width:100%}#header{display:flex;flex-direction:column;gap:var(--rh-space-lg,16px);box-sizing:border-box;font-family:var(--rh-card-heading-font-family,var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif))!important;font-size:var(--rh-card-heading-font-size,var(--rh-font-size-heading-sm,1.5rem));font-weight:var(--rh-card-heading-font-weight,var(--rh-font-weight-body-text-medium,500))!important;margin-block-start:var(--rh-space-xl,24px);background-color:var(--_header-bg,#0000)}#body{margin-block:var(--rh-space-2xl,32px) var(--rh-space-xl,24px)}#body:has(+.empty){margin-block-end:var(--rh-space-2xl,32px)}#footer{display:flex;gap:.5em;margin-block:auto var(--rh-space-xl,24px)}#container #body ::slotted(:is(h1,h2,h3,h4,h5,h6)),#container #header ::slotted(:is(h1,h2,h3,h4,h5,h6)){font-family:inherit!important;font-weight:inherit!important;line-height:var(--rh-line-height-heading,1.3)!important}#header ::slotted(:is(h1,h2,h3,h4,h5,h6)){font-size:inherit!important;margin:unset!important}#body ::slotted(:is(h1,h2,h3,h4,h5,h6)){font-size:var(--rh-card-heading-font-size,var(--rh-font-size-heading-sm,1.5rem))!important}#body ::slotted(:not([slot]):first-child){margin-block-start:0}#body ::slotted(:not([slot]):last-child){margin-block-end:0}@container card (max-width: 767px){#body{margin-block:var(--rh-space-xl,24px)}}@container card (min-width: 768px){#body,#footer,#header{margin-inline:var(--rh-space-2xl,32px)}#body,#header{margin-block-start:var(--rh-space-2xl,32px)}#footer{margin-block-end:var(--rh-space-2xl,32px)}}:host([variant=promo]){display:block;container-name:card promo}#container.promo{--_promo-heading-font-weight:var(--rh-card-heading-font-weight,var(--rh-font-weight-body-text-medium,500));--_promo-heading-size:var(--rh-card-heading-font-size,var(--rh-font-size-heading-xs,1.25rem));--_promo-paragraph-font-size:var(--rh-font-size-body-text-lg,1.125rem);--_promo-paragraph-margin-block-end:var(--rh-space-lg,16px);--_promo-standard-inline-padding:var(--rh-space-2xl,32px);background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));height:auto}#container.promo:not(.standard,.image){grid-template-columns:auto}.promo #body{margin:var(--rh-space-2xl,32px)}.promo.image #body{order:-5}.promo.header #header{margin:0;margin-block-end:var(--rh-space-lg,16px)}.promo.footer #footer{margin-block:var(--rh-space-xl,24px) 0;margin-inline:0}.promo #header ::slotted(*){font-family:var(--rh-card-heading-font-family,var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif))!important;font-size:var(--_promo-heading-size)!important;font-weight:var(--_promo-heading-font-weight)!important;margin-block:0 var(--_promo-heading-margin-block-end)!important}.promo:is(.image,.header) #body ::slotted(p){font-size:var(--_promo-paragraph-font-size)!important;margin-block-end:var(--_promo-paragraph-margin-block-end)!important}#container.promo.standard{background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-darker,#1f1f1f));display:flex;padding:var(--_promo-standard-inline-padding);width:auto}.promo.standard #body{display:contents}.promo.standard #body ::slotted(:not([slot])){font-family:var(--rh-card-heading-font-family,var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif))!important;font-size:var(--rh-font-size-body-text-xl,1.25rem)!important;font-weight:var(--rh-font-weight-body-text-medium,500);line-height:var(--rh-line-height-heading,1.3)!important}:host([variant=promo][full-width]) #container{border-color:#0000;padding-block:var(--rh-space-4xl,64px);padding-inline:var(--rh-space-lg,16px);width:auto}:host([variant=promo][full-width]) #body{margin:0}:host([variant=promo][full-width]) #body ::slotted(p){--_promo-paragraph-font-size:var(--rh-font-size-body-text-md,1rem)}:host([variant=promo][full-width]) #header ::slotted(*){--_promo-heading-size:var(--rh-card-heading-font-size,var(--rh-font-size-body-text-2xl,1.5rem))}:host([variant=promo][full-width]) .image #footer{margin-block-end:var(--rh-space-2xl,32px)}@container promo (min-width: 768px){#container.promo{align-items:center;display:grid;grid-template-columns:2fr 1fr;min-height:250px}.promo #image{justify-self:end}.promo #body{margin:var(--rh-space-3xl,48px);max-width:70ch}.promo #header ::slotted(*){--_promo-heading-size:var(--rh-card-heading-font-size,var(--rh-font-size-heading-sm,1.5rem))}#container.promo.standard{--_promo-standard-inline-padding:var(--rh-space-3xl,48px);column-gap:var(--rh-space-xl,24px);flex-direction:row;justify-content:space-between;min-height:auto}.promo.standard #footer{flex:0 0 auto;margin-block:0}:host([variant=promo][full-width]) #container{column-gap:var(--rh-space-2xl,32px);min-height:auto;padding-inline:var(--rh-space-4xl,64px)}:host([variant=promo][full-width]) #body ::slotted(p){--_promo-paragraph-font-size:var(--rh-font-size-body-text-lg,1.125rem)}:host([variant=promo][full-width]) #header ::slotted(*){--_promo-heading-size:var(--rh-card-heading-font-size,var(--rh-font-size-heading-md,1.75rem))}:host([variant=promo][full-width]) .image #footer{margin-block-end:0}}@container promo (min-width: 1200px){:host([variant=promo][full-width]) #container{padding-inline:var(--rh-space-7xl,128px)}}`;
const PALETTE_RE = /(er|est)+/g;
/**
 * Cards are flexible surfaces used to group information in a small layout. They give small previews of information or provide secondary content in relation to the content it's near. Several cards can be used together to group related information.
 *
 * @summary     Arranges content and interactive elements in a layout
 *
 * @alias card
 *
 */
let RhCard = class RhCard extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Change a promo with an image + body + footer to use the `full-width` style
         */
        this.fullWidth = false;
        _RhCard_slots.set(this, new SlotController(this, 'header', 'image', null, 'footer'));
    }
    render() {
        const isPromo = this.variant === 'promo';
        const isStandardPromo = isPromo
            && __classPrivateFieldGet(this, _RhCard_slots, "f").hasSlotted(null)
            && __classPrivateFieldGet(this, _RhCard_slots, "f").isEmpty('image')
            && __classPrivateFieldGet(this, _RhCard_slots, "f").isEmpty('header');
        let computedPalette;
        if (isStandardPromo) {
            computedPalette = `${`${this.colorPalette ?? 'lightest'}`.replace(PALETTE_RE, '')}er`;
        }
        else if (isPromo) {
            computedPalette = `${`${this.colorPalette ?? 'lightest'}`.replace(PALETTE_RE, '')}est`;
        }
        else {
            computedPalette = this.colorPalette;
        }
        const promo = this.variant === 'promo';
        const standard = isStandardPromo;
        const { variant = '' } = this;
        const hasHeader = __classPrivateFieldGet(this, _RhCard_slots, "f").hasSlotted('header');
        const hasFooter = __classPrivateFieldGet(this, _RhCard_slots, "f").hasSlotted('footer');
        const hasImage = __classPrivateFieldGet(this, _RhCard_slots, "f").hasSlotted('image');
        const hasBody = __classPrivateFieldGet(this, _RhCard_slots, "f").hasSlotted(null);
        const header = html `
      <!-- The header for the card. Contains the header slot. -->
      <div id="header"
           part="header"
           class="${classMap({ empty: !hasHeader })}">
        <!--
          If this slot is used, we expect a heading level tag (h1, h2, h3, h4, h5, h6).
          An icon, svg, or use of the icon component are also valid in this region.
        -->
        <slot name="header"></slot>
      </div>`;
        const footer = html `
      <!-- The footer for the card. Contains the footer slot. -->
      <div id="footer"
           part="footer"
           class="${classMap({ empty: !hasFooter })}">
        <!-- Use this slot for anything that you want to be stuck to the base of the card. -->
        <slot name="footer"></slot>
      </div>`;
        return html `
     <!-- The container for the card. Contains the image, header, body, and footer. -->
     <div id="container"
          part="container"
          class="${classMap({
            standard,
            body: hasBody,
            header: hasHeader,
            footer: hasFooter,
            image: hasImage,
            [variant]: !!variant,
            [computedPalette ?? '']: !!computedPalette,
        })}">${promo ? '' : header}
        <!-- The image for the promo variant for the card. Contains the image slot. -->
        <div id="image"
             part="image"
             class="${classMap({ empty: !hasImage })}">
          <!-- Use this slot for the promo variant of the card. Images & CTA's are most often slotted here. -->
          <slot name="image"></slot>
        </div>
        <!-- The body for the card. Contains the default slot. -->
        <div id="body"
             part="body"
             class="${classMap({ empty: !hasBody })}">
          ${!promo ? '' : header}
          <!-- Any content that is not designated for the header or footer slot, will go to this slot. -->
          <slot></slot>
          ${!promo ? '' : footer}
        </div>
        ${promo ? '' : footer}
      </div>
    `;
    }
};
_RhCard_slots = new WeakMap();
RhCard.styles = [styles];
__decorate([
    property({ reflect: true, attribute: 'color-palette' })
], RhCard.prototype, "colorPalette", void 0);
__decorate([
    property({ reflect: true })
], RhCard.prototype, "variant", void 0);
__decorate([
    property({ reflect: true, attribute: 'full-width', type: Boolean })
], RhCard.prototype, "fullWidth", void 0);
RhCard = __decorate([
    customElement('rh-card'),
    colorPalettes,
    themable
], RhCard);
export { RhCard };
//# sourceMappingURL=rh-card.js.map