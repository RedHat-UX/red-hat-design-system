var _RhAccordionHeader_dir;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { DirController } from '../../lib/DirController.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { BaseAccordionHeader } from '@patternfly/elements/pf-accordion/BaseAccordionHeader.js';
import { css } from "lit";
const styles = css `:host{--_padding-block-start:var(--rh-space-lg, 16px);--_padding-inline-end:var(--rh-space-xl, 24px);--_padding-block-end:var(--rh-space-lg, 16px);--_padding-inline-start:var(--rh-space-xl, 24px);--_text-color:var(--rh-color-text-primary-on-light, #151515);--_active-text-color:var(--rh-color-text-primary-on-light, #151515);--_background-color:var(--rh-color-surface-lightest, #ffffff);--_active-background-color:var(--_rhds-background-color, #f2f2f2);--_font-size:var(--rh-font-size-body-text-md, 1rem);--_after-background-color:transparent;--_expanded-background-color:var(--rh-color-text-brand-on-light, #ee0000);--_isRTL:-1}#heading{color:var(--rh-color-text-primary-on-light,#151515);background-color:var(--_rhds-background-color,var(--rh-color-surface-lightest,#fff));font-weight:var(--rh-font-weight-heading-medium,500)}.dark{--_text-color:var(--rh-color-text-primary-on-dark, #ffffff);--_background-color:var(--rh-color-surface-darkest, #151515);--_active-background-color:var(--rh-color-surface-darkest, #151515);--_active-text-color:var(--rh-color-text-primary-on-dark, #ffffff);--_expanded-background-color:var(--rh-color-brand-red-on-dark, #ff442b);--_border-inline-end-color:var(--rh-color-border-subtle-on-dark, #707070)}.rtl{--_isRTL:1}:host([large]){--_font-size:var(--rh-font-size-body-text-lg, 1.125rem);--_padding-block-start:var(--rh-space-lg, 16px);--_padding-inline-end:var(--rh-space-xl, 24px);--_padding-block-end:var(--rh-space-lg, 16px);--_padding-inline-start:var(--rh-space-xl, 24px)}:host([expanded]){border-inline-end:var(--rh-border-width-sm,1px) solid var(--_border-inline-end-color,#c7c7c7)}:host(.animating) #button,:host([expanded]) #button{border-inline-end-color:var(--rh-color-border-subtle-on-light,#c7c7c7);border-inline-start-color:var(--rh-color-border-subtle-on-light,#c7c7c7)}#button,#button:after,#button:before{background-color:var(--_background-color,transparent)}#icon{width:16px;height:16px;will-change:rotate;transition:rotate .2s ease-in 0s}#button{padding:var(--_padding-block-start) var(--_padding-inline-end) var(--_padding-block-end) var(--_padding-inline-start);font-family:var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);font-size:var(--_font-size, var(--rh-font-size-body-text-md, 1rem));font-weight:var(--rh-font-weight-heading-medium,500);color:var(--_text-color)}#button #icon{fill:var(--_text-color)}#button[aria-expanded=true]{--_after-background-color:var(--_expanded-background-color)}#button:after{inset-block-start:-1px;width:var(--rh-border-width-lg,3px);background-color:var(--_after-background-color)}span{max-width:calc(100% - var(--rh-space-xl,24px));text-overflow:unset;white-space:normal;text-align:start}#button[aria-expanded=true] #icon{rotate:calc(var(--_isRTL,-1) * 180deg)}#button:active,#button:focus,#button:hover{background-color:var(--_active-background-color)}#button:active span,#button:focus span,#button:hover span{color:var(--_active-text-color)}#button:active span,#button:focus span{font-weight:var(--rh-font-weight-heading-bold,700)}.toggle:after{inset-block:0;inset-inline-start:0}`;
/**
 * Accordion Header
 *
 * @csspart text - inline element containing the heading text or slotted heading content
 * @csspart accents - container for accents within the header
 * @csspart icon - caret icon
 *
 * @slot
 *       We expect the light DOM of the rh-accordion-header to be a heading level tag (h1, h2, h3, h4, h5, h6)
 * @slot accents
 *       These elements will appear inline with the accordion header, between the header and the chevron
 *       (or after the chevron and header in disclosure mode).
 *
 * @fires {AccordionHeaderChangeEvent} change - when the open panels change
 *
 */
let RhAccordionHeader = class RhAccordionHeader extends BaseAccordionHeader {
    constructor() {
        super(...arguments);
        this.icon = 'angle-down';
        this.expanded = false;
        _RhAccordionHeader_dir.set(this, new DirController(this));
    }
    render() {
        const { on = '' } = this;
        const rtl = __classPrivateFieldGet(this, _RhAccordionHeader_dir, "f").dir === 'rtl';
        return html `
      <div id="container" class="${classMap({ [on]: !!on, rtl })}" part="container">${super.render()}</div>
    `;
    }
    renderAfterButton() {
        // Font-Awesome free angle-down
        // TODO: use rh-icon when it's ready
        return html `
      <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
      </svg>
    `;
    }
};
_RhAccordionHeader_dir = new WeakMap();
RhAccordionHeader.version = '{{version}}';
RhAccordionHeader.styles = [...BaseAccordionHeader.styles, styles];
__decorate([
    property({ reflect: true })
], RhAccordionHeader.prototype, "icon", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhAccordionHeader.prototype, "expanded", void 0);
__decorate([
    colorContextConsumer()
], RhAccordionHeader.prototype, "on", void 0);
RhAccordionHeader = __decorate([
    customElement('rh-accordion-header')
], RhAccordionHeader);
export { RhAccordionHeader };
//# sourceMappingURL=rh-accordion-header.js.map