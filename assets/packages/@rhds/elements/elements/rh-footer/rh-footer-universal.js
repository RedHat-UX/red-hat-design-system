var _RhFooterUniversal_instances, _RhFooterUniversal_internals, _RhFooterUniversal_slots, _RhFooterUniversal_hasAncestorH2, _RhFooterUniversal_detectAncestorH2, _RhFooterUniversal_updateRole;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { css } from "lit";
const style = css `:host{color:var(--rh-color-white,#fff);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);line-height:var(--rh-line-height-body-text,1.5);font-weight:var(--_font-weight);font-size:medium;display:flex;flex-direction:column;color-scheme:only dark!important}@media (scripting:none){:host{min-height:var(--rh-footer-nojs-min-height)}}::slotted(rh-footer-universal),:host{--_fallback-animation:nothing-doing!important;--_fallback-opacity:1!important;overflow-y:initial}.footer,.global-base{--_icon-color:var(
        --rh-footer-icon-color,var(--rh-color-gray-40,#a3a3a3)
      );--_icon-color-hover:var(
        --rh-footer-icon-color-hover,var(--rh-color-gray-30,#c7c7c7)
      );--_border-color:var(
        --rh-footer-border-color,var(--rh-color-border-subtle-on-dark,#707070)
      );--_accent-color:var(
        --rh-footer-accent-color,var(--rh-color-accent-brand-on-light,#e00)
      );--_section-side-gap:var(
        --rh-footer-section-side-gap,var(--rh-space-lg,16px)
      );--_accordion-background:var(--rh-color-white,#fff);--_logo-width:var(--rh-size-icon-04,40px);--_font-weight:var(--rh-font-weight-body-text-regular,400)}*{box-sizing:border-box}::slotted(:is(h1,h2,h3,h4,h5,h6)){font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif)!important;line-height:var(--rh-line-height-heading,1.3)!important}:host([debug]) :not(.spacer,.base,a,svg){min-height:var(--rh-length-xl,24px);position:relative;outline:var(--rh-length-3xs,2px) dotted red}:host([debug]) :not(.spacer,.base,a,svg):after{content:attr(part);display:block;position:absolute;color:#fff;background-color:#2f4f4f;padding:var(--rh-space-xs,4px);top:0;right:0;font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace);font-size:var(--rh-font-size-code-xs,.75rem)}.section{padding:var(--rh-space-2xl,32px) var(--_section-side-gap)}.header{background-color:var(--rh-color-surface-darker,#1f1f1f);display:flex;flex-wrap:wrap;gap:var(--rh-space-2xl,32px);align-items:center;position:relative}.header:after{display:none;content:"";background-color:var(--_border-color);height:var(--rh-length-4xs,1px);position:absolute;bottom:0;width:calc(100% - var(--_section-side-gap)*2);left:var(--_section-side-gap)}.header-primary{flex:1 1 auto}.header-secondary{flex:0 1 auto}.main{background-color:var(--rh-color-surface-darker,#1f1f1f);display:grid;gap:var(--rh-space-2xl,32px);padding-top:0}.main-secondary{display:grid;gap:var(--pf-global--spacer--xl,32px);place-items:baseline;place-content:start}.global-base{--rh-footer-link-font-size:var(--rh-font-size-body-text-xs,0.75rem);line-height:100%;background-color:var(--rh-color-surface-darkest,#151515);display:grid;grid-template-columns:1fr;grid-template-areas:"logo" "primary" "spacer" "secondary" "tertiary";gap:var(--rh-space-2xl,32px) var(--rh-space-xl,24px)}.global-logo{grid-area:logo;width:var(--_logo-width)}.global-logo-image{fill:var(--_icon-color)}.global-logo-image:is(:hover,:focus-within){fill:var(--_icon-color-hover)}.global-primary{grid-area:primary}.global-secondary{grid-area:secondary;color:var(--rh-color-text-secondary);display:flex;flex-direction:column;gap:var(--rh-space-lg,16px);justify-content:space-between}.global-tertiary{grid-area:tertiary;display:grid;justify-content:start;align-items:start}.global-links-primary,.global-links-secondary{display:flex;flex-direction:column;gap:var(--rh-space-md,8px) var(--rh-space-xl,24px)}:is(.global-primary,.global-secondary,.global-tertiary) ::slotted(*){font-size:var(--rh-font-size-body-text-xs,.75rem)!important}.logo{line-height:0px}.social-links{display:flex;margin-inline-start:0;padding-inline-start:0}.social-links rh-footer-links,.social-links slot::slotted(rh-footer-links){display:flex;flex-direction:row;gap:var(--rh-space-xl,24px)}:is(.links,.global-links-primary,.global-links-secondary) ::slotted(ul){padding:0;margin:0;display:contents}.isMobile .links{--rh-footer-link-header-font-size:var(--rh-font-size-body-text-lg,1.125rem)}.isMobile .links ::slotted(ul){--rh-footer-link-font-size:1em;display:grid;grid-template-columns:1fr;gap:calc(var(--rh-space-2xl, 32px)/2)}#global-heading,#heading{position:absolute;left:-9999999px;width:0;height:0;overflow:hidden;display:flex}[part=base]:not(.isMobile) .links{display:grid;grid-template-columns:repeat(1fr,25%);grid-template-rows:repeat(1,min-content auto);grid-auto-columns:minmax(0,1fr);gap:var(--rh-space-lg,16px) var(--rh-space-2xl,32px);grid-auto-flow:column}:is([part=base]:not(.isMobile) .links) ::slotted(:is(h2,h3,h4,h5,h6):first-of-type){grid-column:1/2;grid-row:1/2}:is([part=base]:not(.isMobile) .links) ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(2)){grid-column:2/3;grid-row:1/2}:is([part=base]:not(.isMobile) .links) ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(3)){grid-column:3/4;grid-row:1/2}:is([part=base]:not(.isMobile) .links) ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(4)){grid-column:4/5;grid-row:1/2}:is([part=base]:not(.isMobile) .links) ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(5)){grid-column:1/2;grid-row:3/4}:is([part=base]:not(.isMobile) .links) ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(6)){grid-column:2/3;grid-row:3/4}:is([part=base]:not(.isMobile) .links) ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(7)){grid-column:3/4;grid-row:3/4}:is([part=base]:not(.isMobile) .links) ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(8)){grid-column:4/5;grid-row:3/4}:is([part=base]:not(.isMobile) .links) ::slotted(:is(ul:first-of-type)){grid-column:1/2;grid-row:2/3}:is([part=base]:not(.isMobile) .links) ::slotted(:is(ul:nth-of-type(2))){grid-column:2/3;grid-row:2/3}:is([part=base]:not(.isMobile) .links) ::slotted(:is(ul:nth-of-type(3))){grid-column:3/4;grid-row:2/3}:is([part=base]:not(.isMobile) .links) ::slotted(:is(ul:nth-of-type(4))){grid-column:4/5;grid-row:2/3}:is([part=base]:not(.isMobile) .links) ::slotted(:is(ul:nth-of-type(5))){grid-column:1/2;grid-row:4/5}:is([part=base]:not(.isMobile) .links) ::slotted(:is(ul:nth-of-type(6))){grid-column:2/3;grid-row:4/5}:is([part=base]:not(.isMobile) .links) ::slotted(:is(ul:nth-of-type(7))){grid-column:3/4;grid-row:4/5}:is([part=base]:not(.isMobile) .links) ::slotted(:is(ul:nth-of-type(8))){grid-column:4/5;grid-row:4/5}:is([part=base]:not(.isMobile) .links) ::slotted(ul){gap:var(--rh-footer-links-gap,var(--rh-space-lg,16px));display:flex;flex-direction:column}#footer-logo{width:var(--_logo-width)}:is(.links,.global-links-primary,.global-links-secondary) ::slotted(:is(h1,h2,h3,h4,h5)){font-weight:var(--rh-font-weight-heading-medium,500)!important;margin-block:0!important;margin-block-start:var(--_link-header-margin,0)!important;font-size:var(
        --rh-footer-link-header-font-size,var(--rh-font-size-body-text-sm,.875rem)
      )!important;color:var(--rh-color-text-primary)!important}::slotted(rh-footer-copyright){grid-column:-1/1}@media screen and (min-width:768px){.global-base{grid-template-columns:4fr 4fr 4fr;grid-template-areas:"logo      logo      logo" "primary   primary   primary" "spacer    spacer    spacer" "secondary secondary secondary"}.global-base:is(.hasTertiary){grid-template-columns:4fr 4fr 4fr;grid-template-areas:"logo      logo      logo" "primary   primary   primary" "spacer    spacer    spacer" "secondary secondary tertiary"}}@media screen and (min-width:992px){.global-base:not(.nothing){grid-template-columns:auto 10fr 2fr;grid-template-rows:max-content max-content;grid-template-areas:"logo primary  tertiary" "logo secondary tertiary";gap:24px 32px}.global-primary{display:flex}}.spacer{grid-area:spacer;border-bottom:1px solid var(--_border-color)}@media screen and (min-width:992px){.spacer{display:none}.global-tertiary{display:grid;justify-content:flex-end;align-items:center}}@media screen and (min-width:320px){.global-links-primary,.global-links-secondary{display:grid;grid-template-columns:1fr 1fr}}@media screen and (min-width:768px){.global-links-primary,.global-links-secondary{display:grid;grid-template-columns:1fr 1fr 1fr}.hasTertiary .global-links-secondary{display:grid;grid-template-columns:1fr 1fr}}@media screen and (min-width:992px){.global-links-primary{display:flex;flex-flow:row wrap;align-items:center}:not(.hasTertiary) .global-links-secondary{display:flex;flex-flow:row wrap;gap:8px 24px}}@media screen and (max-width:992px){.global-logo{grid-area:logo}.global-primary{grid-area:primary}}@media screen and (min-width:992px){.header:after{display:block}.main{padding-top:var(--rh-space-2xl,32px);padding-bottom:var(--rh-space-4xl,64px)}}@media screen and (min-width:992px) and (max-width:1368px){.header,.main{display:grid;grid-template-columns:8fr 4fr}}@media screen and (min-width:1368px){.header,.main{display:grid;grid-template-columns:8fr 4fr}}@media screen and (min-width:768px){.isMobile .links ::slotted(ul){grid-template-columns:1fr 1fr}}`;
import './rh-footer-copyright.js';
/**
 * Global Red Hat footer bar for consistent branding across all
 * properties. Authors must not customize content per-site. The
 * `secondary-start` slot should contain `<rh-footer-copyright>`.
 * Renders a `<footer>` with ARIA landmark semantics and a
 * visually-hidden `<h2>` so screen readers can identify the region.
 * Tab navigates link groups.
 *
 * @summary Global Red Hat universal footer with logo, links, and copyright
 */
let RhFooterUniversal = class RhFooterUniversal extends LitElement {
    constructor() {
        super(...arguments);
        _RhFooterUniversal_instances.add(this);
        /**
         * Color palette for the universal footer. Defaults to `'darker'`.
         * Valid values: `'lighter'`, `'light'`, `'dark'`, `'darker'`, `'darkest'`.
         * The universal footer typically renders on the darkest surface.
         */
        this.colorPalette = 'darker';
        _RhFooterUniversal_internals.set(this, InternalsController.of(this));
        _RhFooterUniversal_slots.set(this, new SlotController(this, 'primary-start', 'primary-end', 'secondary-start', 'secondary-end', 'links-primary', 'links-secondary', 'tertiary'));
        _RhFooterUniversal_hasAncestorH2.set(this, false);
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _RhFooterUniversal_instances, "m", _RhFooterUniversal_updateRole).call(this);
        __classPrivateFieldSet(this, _RhFooterUniversal_hasAncestorH2, __classPrivateFieldGet(this, _RhFooterUniversal_instances, "m", _RhFooterUniversal_detectAncestorH2).call(this), "f");
    }
    render() {
        const hasTertiary = __classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('tertiary');
        return html `
      <div class="footer">
        <h2 id="global-heading" ?hidden="${__classPrivateFieldGet(this, _RhFooterUniversal_hasAncestorH2, "f")}">
          <!-- summary: visually-hidden heading for assistive technology
               description: |
                 Expects inline text. Screen readers use this heading to identify the
                 universal footer region. Defaults to "Red Hat footer". Hidden if a
                 parent \`<h2>\` already exists. -->
          <slot name="heading">Red Hat footer</slot>
        </h2>
        <!-- Wrapper for the universal footer content (logo, primary, secondary, tertiary). -->
        <div class="section global-base ${classMap({ hasTertiary })}" part="section base">
          <!-- summary: overrides all universal footer content (base slot)
               description: |
                 Expects block elements. Replaces the entire universal footer structure.
                 Avoid using; bypasses all built-in layout, grid regions, responsive
                 behavior, and ARIA landmark wiring. -->
          <slot name="base">
            <!-- Container for the logo slot. -->
            <div class="global-logo" part="logo">
              <!-- summary: Red Hat logo (logo slot)
                   description: |
                     Expects block elements: an \`<a>\` wrapping an \`<img>\` or \`<svg>\`.
                     Defaults to the Red Hat logo SVG linking to redhat.com. Screen
                     readers rely on the anchor \`aria-label\` for identification. -->
              <slot name="logo">
                <!--
                  part:
                    description: Link wrapping the logo; defaults to redhat.com.
                -->
                <a class="global-logo-anchor"
                    part="logo-anchor"
                    href="https://redhat.com"
                    aria-label="Visit Red Hat">
                  <!--
                    part:
                      description: Logo image or SVG element.
                  -->
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
                    <path class="band" d="M157.77,62.61a14,14,0,0,1,.31,3.42c0,14.88-18.1,17.46-30.61,17.46C78.83,83.49,42.53,53.26,42.53,44a6.43,6.43,0,0,1,.22-1.94l-3.66,9.06a18.45,18.45,0,0,0-1.51,7.33c0,18.11,41,45.48,87.74,45.48,20.69,0,36.43-7.76,36.43-21.77,0-1.08,0-1.94-1.73-10.13Z"/>
                    <path class="cls-1" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78"/>
                  </svg>
                </a>
              </slot>
            </div>
            <!-- Primary row (start, links, end). -->
            <div class="global-primary" part="primary">
              <!-- summary: overrides primary-start, links-primary, and primary-end (primary slot)
                   description: |
                     Expects block elements. Replaces the entire primary link region.
                     Override only when the three sub-slots are insufficient.
                     Screen readers navigate child links as a group. -->
              <slot name="primary">
                <!-- Left area of the primary row. -->
                <div class="global-primary-start" part="primary-start" ?hidden=${!__classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('primary-start')}>
                  <!-- summary: content before primary links (primary-start slot)
                       description: |
                         Expects inline or block elements placed before the primary
                         global navigation links. Screen readers encounter this
                         content before the link list. -->
                  <slot name="primary-start"></slot>
                </div>
                <!-- Main link list area in the primary row. -->
                <div class="global-links-primary" part="links-primary" ?hidden=${!__classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('links-primary')}>
                  <!-- summary: primary global navigation links (links-primary slot)
                       description: |
                         Expects block elements: a \`<ul>\` of \`<li>\` anchor links for
                         primary global Red Hat navigation. Screen readers announce
                         the list group; Tab moves through each link. -->
                  <slot name="links-primary"></slot>
                </div>
                <!-- Right area of the primary row. -->
                <div class="global-primary-end" part="primary-end" ?hidden=${!__classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('primary-end')}>
                  <!-- summary: content after primary links (primary-end slot)
                       description: |
                         Expects inline or block elements placed after the primary
                         global navigation links. Screen readers encounter this
                         content after the link list. -->
                  <slot name="primary-end"></slot>
                </div>
              </slot>
            </div>
            <!-- Spacer between primary and secondary rows. -->
            <div class="spacer" part="spacer"></div>
            <!-- Secondary row (start, links, end). -->
            <div class="global-secondary" part="secondary">
              <!-- summary: overrides secondary-start, links-secondary, and secondary-end (secondary slot)
                   description: |
                     Expects block elements. Replaces the entire secondary link region.
                     Override only when the three sub-slots are insufficient.
                     Screen readers navigate child links as a group. -->
              <slot name="secondary">
                <!-- Left area of the secondary row. -->
                <div class="global-secondary-start" part="secondary-start" ?hidden=${!__classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('secondary-start')}>
                  <!-- summary: content before secondary links, e.g. copyright (secondary-start slot)
                       description: |
                         Expects block elements such as \`<rh-footer-copyright>\`, placed
                         before the secondary links. Screen readers announce this
                         content in DOM order within the footer landmark. -->
                  <slot name="secondary-start"></slot>
                </div>
                <!-- Main link list area in the secondary row. -->
                <div class="global-links-secondary" part="links-secondary" ?hidden=${!__classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('links-secondary')}>
                  <!-- summary: secondary global navigation links (links-secondary slot)
                       description: |
                         Expects block elements: a \`<ul>\` of \`<li>\` anchor links for
                         secondary global Red Hat navigation. Screen readers announce
                         the list group; Tab moves through each link. -->
                  <slot name="links-secondary"></slot>
                </div>
                <!-- Right area of the secondary row. -->
                <div class="global-secondary-end" part="secondary-end" ?hidden=${!__classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('secondary-end')}>
                  <!-- summary: content after secondary links (secondary-end slot)
                       description: |
                         Expects inline or block elements placed after the secondary
                         global navigation links. Screen readers encounter this
                         content after the secondary link list. -->
                  <slot name="secondary-end"></slot>
                </div>
              </slot>
            </div>
            <!-- Optional bottom section (e.g. copyright, extra text). -->
            <div class="global-tertiary" part="tertiary" ?hidden=${!__classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('tertiary')}>
              <!-- summary: optional third content region (tertiary slot)
                   description: |
                     Expects block elements such as a language selector or custom
                     widget. Hidden when nothing is slotted. Screen readers
                     encounter this region after the secondary links. -->
              <slot name="tertiary"></slot>
            </div>
          </slot>
        </div>
      </div>
    `;
    }
};
_RhFooterUniversal_internals = new WeakMap();
_RhFooterUniversal_slots = new WeakMap();
_RhFooterUniversal_hasAncestorH2 = new WeakMap();
_RhFooterUniversal_instances = new WeakSet();
_RhFooterUniversal_detectAncestorH2 = function _RhFooterUniversal_detectAncestorH2() {
    let node = this.parentElement;
    while (node) {
        if (node?.closest('h2')
            || node?.querySelector('h2')
            || node?.shadowRoot?.querySelector('h2')) {
            return true;
        }
        node = node.parentElement;
    }
    return false;
};
_RhFooterUniversal_updateRole = function _RhFooterUniversal_updateRole() {
    let node = this.parentElement;
    let hasFooterAncestor = false;
    while (node) {
        if (node.tagName === 'FOOTER') {
            hasFooterAncestor = true;
            break;
        }
        if (node.tagName === 'RH-FOOTER') {
            hasFooterAncestor = true;
            break;
        }
        if (node.shadowRoot?.querySelector('footer')) {
            hasFooterAncestor = true;
            break;
        }
        node = node.parentElement;
    }
    if (!hasFooterAncestor) {
        __classPrivateFieldGet(this, _RhFooterUniversal_internals, "f").role = 'contentinfo';
    }
};
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