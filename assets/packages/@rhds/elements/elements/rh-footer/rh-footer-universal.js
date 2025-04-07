var _RhFooterUniversal_slots;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { css } from "lit";
const style = css `:host{color:var(--rh-color-white,#fff);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);line-height:var(--rh-line-height-body-text,1.5);font-weight:var(--_font-weight);font-size:medium;display:flex;flex-direction:column;color-scheme:only dark!important}::slotted(rh-footer-universal),:host{--_fallback-animation:nothing-doing!important;--_fallback-opacity:1!important;overflow-y:initial}.global-base,footer{--_icon-color:var(--rh-footer-icon-color,var(--rh-color-gray-40,#a3a3a3));--_icon-color-hover:var(--rh-footer-icon-color-hover,var(--rh-color-gray-30,#c7c7c7));--_border-color:var(--rh-footer-border-color,var(--rh-color-border-subtle-on-dark,#707070));--_accent-color:var(--rh-footer-accent-color,var(--rh-color-accent-brand-on-light,#e00));--_section-side-gap:var(--rh-footer-section-side-gap,var(--rh-space-lg,16px));--_accordion-background:var(--rh-color-white,#fff);--_logo-width:var(--rh-size-icon-04,40px);--_font-weight:var(--rh-font-weight-body-text-regular,400)}*{box-sizing:border-box}::slotted(:is(h1,h2,h3,h4,h5,h6)){font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif)!important;line-height:var(--rh-line-height-heading,1.3)!important}:host([debug]) :not(.spacer,.base,a,svg){min-height:var(--rh-length-xl,24px);position:relative;outline:var(--rh-length-3xs,2px) dotted red}:host([debug]) :not(.spacer,.base,a,svg):after{content:attr(part);display:block;position:absolute;color:#fff;background-color:#2f4f4f;padding:var(--rh-space-xs,4px);top:0;right:0;font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace);font-size:var(--rh-font-size-code-xs,.75rem)}.section{padding:var(--rh-space-2xl,32px) var(--_section-side-gap)}.header{background-color:var(--rh-color-surface-darker,#1f1f1f);display:flex;flex-wrap:wrap;gap:var(--rh-space-2xl,32px);align-items:center;position:relative}.header:after{display:none;content:"";background-color:var(--_border-color);height:var(--rh-length-4xs,1px);position:absolute;bottom:0;width:calc(100% - var(--_section-side-gap)*2);left:var(--_section-side-gap)}.header-primary{flex:1 1 auto}.header-secondary{flex:0 1 auto}.main{background-color:var(--rh-color-surface-darker,#1f1f1f);display:grid;gap:var(--rh-space-2xl,32px);padding-top:0}.main-secondary{display:grid;gap:var(--pf-global--spacer--xl,32px);place-items:baseline;place-content:start}.global-base{--rh-footer-link-font-size:var(--rh-font-size-body-text-xs,0.75rem);line-height:100%;background-color:var(--rh-color-surface-darkest,#151515);display:grid;grid-template-columns:1fr;grid-template-areas:"logo" "primary" "spacer" "secondary" "tertiary";gap:var(--rh-space-2xl,32px) var(--rh-space-xl,24px)}.global-logo{grid-area:logo;width:var(--_logo-width)}.global-logo-image{fill:var(--_icon-color)}.global-logo-image:is(:hover,:focus-within){fill:var(--_icon-color-hover)}.global-primary{grid-area:primary}.global-secondary{grid-area:secondary;color:var(--rh-color-text-secondary);display:flex;flex-direction:column;gap:var(--rh-space-lg,16px);justify-content:space-between}.global-tertiary{grid-area:tertiary;display:grid;justify-content:start;align-items:start}.global-links-primary,.global-links-secondary{display:flex;flex-direction:column;gap:var(--rh-space-md,8px) var(--rh-space-xl,24px)}:is(.global-primary,.global-secondary,.global-tertiary) ::slotted(*){font-size:var(--rh-font-size-body-text-xs,.75rem)!important}.logo{line-height:0px}.social-links{display:flex;margin-inline-start:0;padding-inline-start:0}.social-links rh-footer-links,.social-links slot::slotted(rh-footer-links){display:flex;flex-direction:row;gap:var(--rh-space-xl,24px)}:is(.links,.global-links-primary,.global-links-secondary) ::slotted(ul){padding:0;margin:0;display:contents}.isMobile .links{--rh-footer-link-header-font-size:var(--rh-font-size-body-text-lg,1.125rem)}.isMobile .links ::slotted(ul){--rh-footer-link-font-size:1em;display:grid;grid-template-columns:1fr;gap:calc(var(--rh-space-2xl, 32px)/2)}#global-heading,#heading{position:absolute;left:-9999999px;width:0;height:0;overflow:hidden;display:flex}[part=base]:not(.isMobile) .links{display:grid;grid-template-columns:repeat(1fr,25%);grid-template-rows:repeat(1,min-content auto);grid-auto-columns:minmax(0,1fr);gap:var(--rh-space-lg,16px) var(--rh-space-2xl,32px);grid-auto-flow:column}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):first-of-type){grid-column:1/2;grid-row:1/2}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(2)){grid-column:2/3;grid-row:1/2}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(3)){grid-column:3/4;grid-row:1/2}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(4)){grid-column:4/5;grid-row:1/2}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(5)){grid-column:1/2;grid-row:3/4}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(6)){grid-column:2/3;grid-row:3/4}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(7)){grid-column:3/4;grid-row:3/4}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(8)){grid-column:4/5;grid-row:3/4}[part=base]:not(.isMobile) .links ::slotted(:is(ul:first-of-type)){grid-column:1/2;grid-row:2/3}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(2))){grid-column:2/3;grid-row:2/3}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(3))){grid-column:3/4;grid-row:2/3}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(4))){grid-column:4/5;grid-row:2/3}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(5))){grid-column:1/2;grid-row:4/5}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(6))){grid-column:2/3;grid-row:4/5}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(7))){grid-column:3/4;grid-row:4/5}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(8))){grid-column:4/5;grid-row:4/5}[part=base]:not(.isMobile) .links ::slotted(ul){gap:var(--rh-footer-links-gap,var(--rh-space-lg,16px));display:flex;flex-direction:column}#footer-logo{width:var(--_logo-width)}:is(.links,.global-links-primary,.global-links-secondary) ::slotted(:is(h1,h2,h3,h4,h5)){font-weight:var(--rh-font-weight-heading-medium,500)!important;margin-block:0!important;margin-block-start:var(--_link-header-margin,0)!important;font-size:var(--rh-footer-link-header-font-size,var(--rh-font-size-body-text-sm,.875rem))!important;color:var(--rh-color-text-primary)!important}::slotted(rh-footer-copyright){grid-column:-1/1}@media screen and (min-width:768px){.global-base{grid-template-columns:4fr 4fr 4fr;grid-template-areas:"logo      logo      logo" "primary   primary   primary" "spacer    spacer    spacer" "secondary secondary secondary"}.global-base:is(.hasTertiary){grid-template-columns:4fr 4fr 4fr;grid-template-areas:"logo      logo      logo" "primary   primary   primary" "spacer    spacer    spacer" "secondary secondary tertiary"}}@media screen and (min-width:992px){.global-base:not(.nothing){grid-template-columns:auto 10fr 2fr;grid-template-rows:max-content max-content;grid-template-areas:"logo primary  tertiary" "logo secondary tertiary";gap:24px 32px}.global-primary{display:flex}}.spacer{grid-area:spacer;border-bottom:1px solid var(--_border-color)}@media screen and (min-width:992px){.spacer{display:none}.global-tertiary{display:grid;justify-content:flex-end;align-items:center}}@media screen and (min-width:320px){.global-links-primary,.global-links-secondary{display:grid;grid-template-columns:1fr 1fr}}@media screen and (min-width:768px){.global-links-primary,.global-links-secondary{display:grid;grid-template-columns:1fr 1fr 1fr}.hasTertiary .global-links-secondary{display:grid;grid-template-columns:1fr 1fr}}@media screen and (min-width:992px){.global-links-primary{display:flex;flex-flow:row wrap;align-items:center}:not(.hasTertiary) .global-links-secondary{display:flex;flex-flow:row wrap;gap:8px 24px}}@media screen and (max-width:992px){.global-logo{grid-area:logo}.global-primary{grid-area:primary}}@media screen and (min-width:992px){.header:after{display:block}.main{padding-top:var(--rh-space-2xl,32px);padding-bottom:var(--rh-space-4xl,64px)}}@media screen and (min-width:992px) and (max-width:1368px){.header,.main{display:grid;grid-template-columns:8fr 4fr}}@media screen and (min-width:1368px){.header,.main{display:grid;grid-template-columns:8fr 4fr}}@media screen and (min-width:768px){.isMobile .links ::slotted(ul){grid-template-columns:1fr 1fr}}`;
import './rh-footer-copyright.js';
/**
 * @csspart base
 * @csspart base
 * @slot    heading - text that describes the footer section to assistive tecchnology. Contains default text "Red Hat footer".
 * @slot    logo
 * @csspart logo
 * @slot    logo-image
 * @csspart logo-image
 * @slot    primary
 * @csspart primary
 * @slot    primary-start
 * @csspart primary-start
 * @slot    primary-end
 * @csspart primary-end
 * @slot    secondary
 * @csspart secondary
 * @slot    secondary-start
 * @csspart secondary-start
 * @slot    secondary-end
 * @csspart secondary-end
 * @slot    links-primary
 * @csspart links-primary
 * @slot    links-secondary
 * @csspart links-secondary
 * @slot    tertiary
 * @csspart tertiary
 */
let RhFooterUniversal = class RhFooterUniversal extends LitElement {
    constructor() {
        super(...arguments);
        this.colorPalette = 'darker';
        _RhFooterUniversal_slots.set(this, new SlotController(this, 'primary-start', 'primary-end', 'secondary-start', 'secondary-end', 'links-primary', 'links-secondary', 'tertiary'));
    }
    render() {
        const hasTertiary = __classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('tertiary');
        // determine if footer and h2 already exist
        let node = this.parentElement;
        let footer = node?.closest('footer');
        let h2 = null;
        while (!!node && !footer) {
            h2 = h2
                || node?.closest('h2')
                || node?.querySelector('h2')
                || node?.shadowRoot?.querySelector('h2');
            footer = node?.closest('footer')
                || node?.querySelector('footer')
                || node?.shadowRoot?.querySelector('footer');
            node = node.parentElement;
        }
        return html `
      <footer role="${ifDefined(footer ? 'none' : undefined)}">
        <h2 id="global-heading" ?hidden="${!!h2}"><slot name="heading">Red Hat footer</slot></h2>
        <div class="section global-base ${classMap({ hasTertiary })}" part="section base">
          <slot name="base">
            <div class="global-logo" part="logo">
              <slot name="logo">
                <a class="global-logo-anchor"
                    part="logo-anchor"
                    href="https://redhat.com"
                    aria-label="Visit Red Hat">
                  <svg class="global-logo-image"
                      part="logo-image"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 192 145">
                      <title>Red Hat logo</title>
                    <defs>
                      <style>
                        .band {
                          fill: transparent;
                        }
                      </style>
                    </defs>
                    <path class="band" d="M157.77,62.61a14,14,0,0,1,.31,3.42c0,14.88-18.1,17.46-30.61,17.46C78.83,83.49,42.53,53.26,42.53,44a6.43,6.43,0,0,1,.22-1.94l-3.66,9.06a18.45,18.45,0,0,0-1.51,7.33c0,18.11,41,45.48,87.74,45.48,20.69,0,36.43-7.76,36.43-21.77,0-1.08,0-1.94-1.73-10.13Z" />
                    <path class="cls-1" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78" />
                  </svg>
                </a>
              </slot>
            </div>
            <div class="global-primary" part="primary">
              <slot name="primary">
                <div class="global-primary-start" part="primary-start" ?hidden=${!__classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('primary-start')}>
                  <slot name="primary-start"></slot>
                </div>
                <div class="global-links-primary" part="links-primary" ?hidden=${!__classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('links-primary')}>
                  <slot name="links-primary"></slot>
                </div>
                <div class="global-primary-end" part="primary-end" ?hidden=${!__classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('primary-end')}>
                  <slot name="primary-end"></slot>
                </div>
              </slot>
            </div>
            <div class="spacer" part="spacer"></div>
            <div class="global-secondary" part="secondary">
              <slot name="secondary">
                <div class="global-secondary-start" part="secondary-start" ?hidden=${!__classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('secondary-start')}>
                  <slot name="secondary-start"></slot>
                </div>
                <div class="global-links-secondary" part="links-secondary" ?hidden=${!__classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('links-secondary')}>
                  <slot name="links-secondary"></slot>
                </div>
                <div class="global-secondary-end" part="secondary-end" ?hidden=${!__classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('secondary-end')}>
                  <slot name="secondary-end"></slot>
                </div>
              </slot>
            </div>
            <div class="global-tertiary" part="tertiary" ?hidden=${!__classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('tertiary')}>
              <slot name="tertiary"></slot>
            </div>
          </slot>
        </div>
      </footer>
    `;
    }
};
_RhFooterUniversal_slots = new WeakMap();
RhFooterUniversal.styles = [style];
__decorate([
    property({ reflect: true, attribute: 'color-palette' })
], RhFooterUniversal.prototype, "colorPalette", void 0);
RhFooterUniversal = __decorate([
    customElement('rh-footer-universal'),
    colorPalettes
], RhFooterUniversal);
export { RhFooterUniversal };
//# sourceMappingURL=rh-footer-universal.js.map