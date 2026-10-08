var _RhFooterUniversal_instances, _RhFooterUniversal_internals, _RhFooterUniversal_slots, _RhFooterUniversal_isNestedInRhFooter, _RhFooterUniversal_updateRole;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { LitElement, html, nothing, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const shared = css `:host{color:var(--rh-color-text-primary);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);line-height:var(--rh-line-height-body-text,1.5);font-weight:var(--_font-weight);font-size:medium;display:flex;flex-direction:column}.footer,.global-base{--_icon-color:var(
        --rh-footer-icon-color,var(--rh-color-icon-subtle,#707070)
      );--_icon-color-hover:var(
        --rh-footer-icon-color-hover,var(--rh-color-icon-subtle-hover,#a3a3a3)
      );--_border-color:var(
        --rh-footer-border-color,var(--rh-color-border-subtle)
      );--_accent-color:var(
        --rh-footer-accent-color,var(--rh-color-accent-brand-on-light,#e00)
      );--_section-side-gap:var(
        --rh-footer-section-side-gap,var(--rh-space-lg,16px)
      );--_accordion-background:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));--_logo-width:var(--rh-size-icon-04,40px);--_font-weight:var(--rh-font-weight-body-text-regular,400)}*{box-sizing:border-box}::slotted(:is(h1,h2,h3,h4,h5,h6)){font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif)!important;line-height:var(--rh-line-height-heading,1.3)!important}.section{padding:var(--rh-space-2xl,32px) var(--_section-side-gap)}`;
const style = css `.global-base{--rh-footer-link-font-size:var(--rh-font-size-body-text-xs,0.75rem);line-height:100%;background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));display:grid;grid-template-columns:1fr;grid-template-areas:"logo" "primary" "spacer" "secondary" "tertiary";gap:var(--rh-space-2xl,32px) var(--rh-space-xl,24px)}.global-logo{grid-area:logo;width:auto;height:var(--rh-size-icon-02,24px)}.global-logo a{display:inline-block;height:100%}.global-logo-image{fill:var(--rh-color-brand-red)}.global-logo ::slotted(:is(img,svg,picture)),.global-logo svg{display:block;height:100%;width:auto}.global-primary{grid-area:primary}.global-secondary{grid-area:secondary;color:var(--rh-color-text-secondary);display:flex;flex-direction:column;gap:var(--rh-space-lg,16px);justify-content:space-between}.global-secondary-end{display:flex;gap:var(--rh-space-xl,24px);align-items:center}.global-tertiary{grid-area:tertiary;display:flex;flex-wrap:wrap;justify-content:start;align-items:center;gap:var(--rh-space-lg,16px)}::slotted(rh-footer-copyright){grid-column:-1/1}.global-tertiary ::slotted(rh-footer-copyright){flex-basis:100%}.global-tertiary ::slotted(rh-footer-links){display:contents}.global-links-primary,.global-links-secondary{display:flex;flex-direction:column;gap:var(--rh-space-md,8px) var(--rh-space-xl,24px)}:is(.global-primary,.global-secondary,.global-tertiary) ::slotted(*){font-size:var(--rh-font-size-body-text-xs,.75rem)!important}:is(.global-links-primary,.global-links-secondary) ::slotted(ul){padding:0;margin:0;display:contents}#global-heading{border:0;clip:rect(0,0,0,0);block-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;inline-size:1px}:is(.global-links-primary,.global-links-secondary) ::slotted(:is(h1,h2,h3,h4,h5)){font-weight:var(--rh-font-weight-heading-medium,500)!important;margin-block:0!important;margin-block-start:var(--_link-header-margin,0)!important;font-size:var(
        --rh-footer-link-header-font-size,var(--rh-font-size-body-text-md,1rem)
      )!important;color:var(--rh-color-text-primary)!important}@media screen and (min-width:576px){.global-logo{height:var(--rh-size-icon-03,32px)}}@media screen and (min-width:768px){:is(.global-links-primary,.global-links-secondary) ::slotted(:is(h1,h2,h3,h4,h5)){font-size:var(
          --rh-footer-link-header-font-size,var(--rh-font-size-body-text-lg,1.125rem)
        )!important}}@media screen and (min-width:768px){.global-base{grid-template-columns:4fr 4fr 4fr;grid-template-areas:"logo      logo      logo" "primary   primary   primary" "spacer    spacer    spacer" "secondary secondary secondary" "tertiary  tertiary  tertiary"}}@media screen and (min-width:992px){.global-base:not(.nothing){grid-template-columns:auto 1fr;grid-template-rows:max-content max-content auto;grid-template-areas:"logo    primary" "logo    secondary" ".       tertiary";gap:var(--rh-space-xl,24px) var(--rh-space-2xl,32px)}.global-primary{display:flex}}@media screen and (min-width:1200px){.global-base:not(.nothing){grid-template-columns:auto 1fr auto;grid-template-rows:max-content max-content;grid-template-areas:"logo primary  tertiary" "logo secondary tertiary"}.global-tertiary{place-content:center flex-end}.global-tertiary ::slotted(rh-footer-copyright){text-align:end}}.spacer{grid-area:spacer;border-bottom:1px solid var(--_border-color)}@media screen and (min-width:992px){.spacer{display:none}.global-secondary{flex-flow:row wrap;align-items:center}.global-links-secondary{flex:0 1 auto}.global-secondary-end{margin-inline-start:auto}}@media screen and (min-width:320px){.global-links-primary,.global-links-secondary{display:grid;grid-template-columns:1fr 1fr}}@media screen and (min-width:768px){.global-links-primary,.global-links-secondary{display:grid;grid-template-columns:1fr 1fr 1fr}}@media screen and (min-width:992px){.global-links-primary{display:flex;flex-flow:row wrap;align-items:center}.global-links-secondary{display:flex;flex-flow:row wrap;gap:8px 24px}}@media screen and (max-width:992px){.global-logo{grid-area:logo}.global-primary{grid-area:primary}}`;
import './rh-footer-copyright.js';
import '@rhds/elements/rh-icon/rh-icon.js';
/** Default Red Hat homepage URL for the logo link and empty `logo-href` fallback. */
export const DEFAULT_LOGO_HREF = 'https://www.redhat.com/en';
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
         * Sets the `href` for the logo link. Applies whether or not the `logo` slot
         * is overridden. Avoid changing this value except for a locale-specific
         * redhat.com homepage (e.g. `https://www.redhat.com/ja`). Defaults to
         * `'https://www.redhat.com/en'`.
         */
        this.logoHref = DEFAULT_LOGO_HREF;
        /**
         * Optional accessible name for the logo link. When set, applied as
         * `aria-label` on the wrapping `<a>` and overrides slotted text, SVG
         * `<title>`, or `img` `alt`. Leave unset so the slotted mark or the
         * default SVG title names the link. Defaults to `''`.
         */
        this.logoLabel = '';
        _RhFooterUniversal_internals.set(this, InternalsController.of(this));
        _RhFooterUniversal_slots.set(this, new SlotController(this, 'primary-start', 'primary-end', 'secondary-start', 'secondary-end', 'links-primary', 'links-secondary', 'tertiary'));
        _RhFooterUniversal_isNestedInRhFooter.set(this, false);
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _RhFooterUniversal_instances, "m", _RhFooterUniversal_updateRole).call(this);
        // On the client, `.closest()` walks light-DOM ancestors only, so a page
        // `<h2>` elsewhere does not hide this heading.
        if (!isServer) {
            __classPrivateFieldSet(this, _RhFooterUniversal_isNestedInRhFooter, !!this.closest('rh-footer'), "f");
        }
        // Reconnect (SPA move, late slotting) must refresh `?hidden` on the heading.
        this.requestUpdate();
    }
    render() {
        const hasTertiary = __classPrivateFieldGet(this, _RhFooterUniversal_slots, "f").hasSlotted('tertiary');
        return html `
      <div class="footer">
        <h2 id="global-heading" ?hidden="${__classPrivateFieldGet(this, _RhFooterUniversal_isNestedInRhFooter, "f")}">
          <!-- summary: visually-hidden heading for assistive technology
               description: |
                 Expects inline text. Screen readers use this heading to identify the
                 universal footer region. Defaults to "Red Hat footer". Hidden when
                 nested in \`<rh-footer>\`, which already provides the region heading. -->
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
              <!--
                part:
                  description: Link wrapping the logo; href comes from logo-href.
              -->
              <a class="global-logo-anchor"
                 part="logo-anchor"
                 href="${this.logoHref?.trim() || DEFAULT_LOGO_HREF}"
                 aria-label="${this.logoLabel?.trim() || nothing}">
                <!-- summary: Red Hat fedora logo (logo slot)
                     description: |
                       Expects an inline SVG, \`<img>\`, or \`<picture>\`. Defaults to the
                       Red Hat fedora SVG. Slotted SVGs should include a \`<title>\`;
                       slotted images should include \`alt\`, unless \`logo-label\` is set.
                       \`logo-href\` still applies when this slot is overridden. -->
                <slot name="logo">
                  <!--
                    part:
                      description: Logo image or SVG element.
                  -->
                  <svg class="global-logo-image"
                       part="logo-image"
                       role="img"
                       aria-labelledby="global-logo-title"
                       data-name="Layer 1"
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 192 145">
                    <title id="global-logo-title">Red Hat</title>
                    <defs>
                      <style>
                        .band {
                          /** Fedora band background fill */
                          fill: var(--rh-color-black, #000000);
                        }
                      </style>
                    </defs>
                    <path class="band" d="M157.77,62.61a14,14,0,0,1,.31,3.42c0,14.88-18.1,17.46-30.61,17.46C78.83,83.49,42.53,53.26,42.53,44a6.43,6.43,0,0,1,.22-1.94l-3.66,9.06a18.45,18.45,0,0,0-1.51,7.33c0,18.11,41,45.48,87.74,45.48,20.69,0,36.43-7.76,36.43-21.77,0-1.08,0-1.94-1.73-10.13Z"/>
                    <path class="cls-1" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78"/>
                  </svg>
                </slot>
              </a>
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
_RhFooterUniversal_isNestedInRhFooter = new WeakMap();
_RhFooterUniversal_instances = new WeakSet();
_RhFooterUniversal_updateRole = function _RhFooterUniversal_updateRole() {
    if (isServer) {
        __classPrivateFieldGet(this, _RhFooterUniversal_internals, "f").role = 'contentinfo';
        return;
    }
    const hasFooterAncestor = !!this.closest('footer, rh-footer');
    __classPrivateFieldGet(this, _RhFooterUniversal_internals, "f").role = hasFooterAncestor ? null : 'contentinfo';
};
RhFooterUniversal.styles = [shared, style];
__decorate([
    property({ reflect: true, attribute: 'color-palette' })
], RhFooterUniversal.prototype, "colorPalette", void 0);
__decorate([
    property({ attribute: 'logo-href' })
], RhFooterUniversal.prototype, "logoHref", void 0);
__decorate([
    property({ attribute: 'logo-label' })
], RhFooterUniversal.prototype, "logoLabel", void 0);
RhFooterUniversal = __decorate([
    customElement('rh-footer-universal'),
    colorPalettes,
    themable
], RhFooterUniversal);
export { RhFooterUniversal };
//# sourceMappingURL=rh-footer-universal.js.map