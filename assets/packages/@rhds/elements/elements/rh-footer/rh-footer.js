var _RhFooter_instances, _RhFooter_compact, _RhFooter_internals, _RhFooter_updateRole, _RhFooter_renderLinksTemplate;
var RhFooter_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
export { RhFooterUniversal } from './rh-footer-universal.js';
import '@rhds/elements/rh-accordion/rh-accordion.js';
import './rh-footer-links.js';
import './rh-footer-social-link.js';
import './rh-footer-block.js';
import { css } from "lit";
const style = css `:host{color:var(--rh-color-white,#fff);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);line-height:var(--rh-line-height-body-text,1.5);font-weight:var(--_font-weight);font-size:medium;display:flex;flex-direction:column;color-scheme:only dark!important}@media (scripting:none){:host{min-height:var(--rh-footer-nojs-min-height)}}::slotted(rh-footer-universal),:host{--_fallback-animation:nothing-doing!important;--_fallback-opacity:1!important;overflow-y:initial}.base{border-block-start:var(--rh-border-width-sm,1px) solid var(--_border-color)}.footer,.global-base{--_icon-color:var(
        --rh-footer-icon-color,var(--rh-color-gray-40,#a3a3a3)
      );--_icon-color-hover:var(
        --rh-footer-icon-color-hover,var(--rh-color-gray-30,#c7c7c7)
      );--_border-color:var(
        --rh-footer-border-color,var(--rh-color-border-subtle-on-dark,#707070)
      );--_accent-color:var(
        --rh-footer-accent-color,var(--rh-color-accent-brand-on-light,#e00)
      );--_section-side-gap:var(
        --rh-footer-section-side-gap,var(--rh-space-lg,16px)
      );--_accordion-background:var(--rh-color-white,#fff);--_logo-width:var(--rh-size-icon-04,40px);--_font-weight:var(--rh-font-weight-body-text-regular,400)}*{box-sizing:border-box}::slotted(:is(h1,h2,h3,h4,h5,h6)){font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif)!important;line-height:var(--rh-line-height-heading,1.3)!important}:host([debug]) :not(.spacer,.base,a,svg){min-height:var(--rh-length-xl,24px);position:relative;outline:var(--rh-length-3xs,2px) dotted red}:host([debug]) :not(.spacer,.base,a,svg):after{content:attr(part);display:block;position:absolute;color:#fff;background-color:#2f4f4f;padding:var(--rh-space-xs,4px);top:0;right:0;font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace);font-size:var(--rh-font-size-code-xs,.75rem)}.section{padding:var(--rh-space-2xl,32px) var(--_section-side-gap)}.header{background-color:var(--rh-color-surface-darker,#1f1f1f);display:flex;flex-wrap:wrap;gap:var(--rh-space-2xl,32px);align-items:center;position:relative}.header:after{display:none;content:"";background-color:var(--_border-color);height:var(--rh-length-4xs,1px);position:absolute;bottom:0;width:calc(100% - var(--_section-side-gap)*2);left:var(--_section-side-gap)}.header-primary{flex:1 1 auto}.header-primary ::slotted(:not(a,img,svg,picture)){font-size:var(--rh-font-size-heading-xs,1.25rem);font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-heading-medium,500)}.header-secondary{flex:0 1 auto}.main{background-color:var(--rh-color-surface-darker,#1f1f1f);display:grid;gap:var(--rh-space-2xl,32px);padding-top:0}.main-secondary{display:grid;gap:var(--pf-global--spacer--xl,32px);place-items:baseline;place-content:start}.global-base{--rh-footer-link-font-size:var(--rh-font-size-body-text-xs,0.75rem);line-height:100%;background-color:var(--rh-color-surface-darkest,#151515);display:grid;grid-template-columns:1fr;grid-template-areas:"logo" "primary" "spacer" "secondary" "tertiary";gap:var(--rh-space-2xl,32px) var(--rh-space-xl,24px)}.global-logo{grid-area:logo;width:auto;height:var(--rh-size-icon-02,24px)}.global-logo-image{fill:var(--rh-color-brand-red,#e00);height:100%;width:auto}.global-primary{grid-area:primary}.global-secondary{grid-area:secondary;color:var(--rh-color-text-secondary);display:flex;flex-direction:column;gap:var(--rh-space-lg,16px);justify-content:space-between}.global-secondary-end{display:flex;gap:var(--rh-space-xl,24px);align-items:center}.global-tertiary{grid-area:tertiary;display:flex;flex-wrap:wrap;justify-content:start;align-items:center;gap:var(--rh-space-lg,16px)}::slotted(rh-footer-copyright){grid-column:-1/1}.global-tertiary ::slotted(rh-footer-copyright){flex-basis:100%}.global-tertiary ::slotted(rh-footer-links){display:contents}.global-links-primary,.global-links-secondary{display:flex;flex-direction:column;gap:var(--rh-space-md,8px) var(--rh-space-xl,24px)}:is(.global-primary,.global-secondary,.global-tertiary) ::slotted(*){font-size:var(--rh-font-size-body-text-xs,.75rem)!important}.logo{line-height:0}.logo ::slotted(a){color:var(--rh-color-text-primary);font-size:var(--rh-font-size-heading-xs,1.25rem);font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-weight:800;line-height:var(--rh-line-height-heading,1.3);text-decoration:underline;text-decoration-style:dotted;text-decoration-thickness:var(--rh-border-width-sm,1px);text-underline-offset:max(5px,.28em)}.logo ::slotted(a:has(img,svg,picture)){text-decoration:none;line-height:0px;font-size:medium}.logo a{display:inline-block;text-decoration:none}.logo a>:is(img,svg){display:block;width:auto;height:var(--rh-size-icon-02,24px)}.social-links{display:flex;margin-inline-start:0;padding-inline-start:0}.social-links rh-footer-links,.social-links slot::slotted(rh-footer-links){display:flex;flex-direction:row;gap:var(--rh-space-xl,24px)}:is(.links,.global-links-primary,.global-links-secondary) ::slotted(ul){padding:0;margin:0;display:contents}.isMobile .links ::slotted(ul){--rh-footer-link-font-size:1em;display:grid;grid-template-columns:1fr;gap:calc(var(--rh-space-2xl, 32px)/2)}#global-heading,#heading{position:absolute;left:-9999999px;width:0;height:0;overflow:hidden;display:flex}[part=base]:not(.isMobile) .links{display:grid;grid-template-columns:repeat(1fr,25%);grid-template-rows:repeat(1,min-content auto);grid-auto-columns:minmax(0,1fr);gap:var(--rh-space-lg,16px) var(--rh-space-2xl,32px);grid-auto-flow:column}:is([part=base]:not(.isMobile) .links) ::slotted(:is(h2,h3,h4,h5,h6):first-of-type){grid-column:1/2;grid-row:1/2}:is([part=base]:not(.isMobile) .links) ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(2)){grid-column:2/3;grid-row:1/2}:is([part=base]:not(.isMobile) .links) ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(3)){grid-column:3/4;grid-row:1/2}:is([part=base]:not(.isMobile) .links) ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(4)){grid-column:4/5;grid-row:1/2}:is([part=base]:not(.isMobile) .links) ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(5)){grid-column:1/2;grid-row:3/4}:is([part=base]:not(.isMobile) .links) ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(6)){grid-column:2/3;grid-row:3/4}:is([part=base]:not(.isMobile) .links) ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(7)){grid-column:3/4;grid-row:3/4}:is([part=base]:not(.isMobile) .links) ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(8)){grid-column:4/5;grid-row:3/4}:is([part=base]:not(.isMobile) .links) ::slotted(:is(ul:first-of-type)){grid-column:1/2;grid-row:2/3}:is([part=base]:not(.isMobile) .links) ::slotted(:is(ul:nth-of-type(2))){grid-column:2/3;grid-row:2/3}:is([part=base]:not(.isMobile) .links) ::slotted(:is(ul:nth-of-type(3))){grid-column:3/4;grid-row:2/3}:is([part=base]:not(.isMobile) .links) ::slotted(:is(ul:nth-of-type(4))){grid-column:4/5;grid-row:2/3}:is([part=base]:not(.isMobile) .links) ::slotted(:is(ul:nth-of-type(5))){grid-column:1/2;grid-row:4/5}:is([part=base]:not(.isMobile) .links) ::slotted(:is(ul:nth-of-type(6))){grid-column:2/3;grid-row:4/5}:is([part=base]:not(.isMobile) .links) ::slotted(:is(ul:nth-of-type(7))){grid-column:3/4;grid-row:4/5}:is([part=base]:not(.isMobile) .links) ::slotted(:is(ul:nth-of-type(8))){grid-column:4/5;grid-row:4/5}:is([part=base]:not(.isMobile) .links) ::slotted(ul){gap:var(--rh-footer-links-gap,var(--rh-space-lg,16px));display:flex;flex-direction:column}#footer-logo{width:var(--_logo-width)}:is(.links,.global-links-primary,.global-links-secondary) ::slotted(:is(h1,h2,h3,h4,h5)){font-weight:var(--rh-font-weight-heading-medium,500)!important;margin-block:0!important;margin-block-start:var(--_link-header-margin,0)!important;font-size:var(
        --rh-footer-link-header-font-size,var(--rh-font-size-body-text-md,1rem)
      )!important;color:var(--rh-color-text-primary)!important}@media screen and (min-width:576px){.logo a>:is(img,svg){height:var(--rh-size-icon-03,32px)}.global-logo{height:var(--rh-size-icon-03,32px)}.header-primary ::slotted(:not(a,img,svg,picture)){font-size:var(--rh-font-size-heading-sm,1.5rem)}}@media screen and (min-width:768px){:is(.links,.global-links-primary,.global-links-secondary) ::slotted(:is(h1,h2,h3,h4,h5)){font-size:var(
          --rh-footer-link-header-font-size,var(--rh-font-size-body-text-lg,1.125rem)
        )!important}}@media screen and (min-width:768px){.global-base{grid-template-columns:4fr 4fr 4fr;grid-template-areas:"logo      logo      logo" "primary   primary   primary" "spacer    spacer    spacer" "secondary secondary secondary" "tertiary  tertiary  tertiary"}}@media screen and (min-width:992px){.global-base:not(.nothing){grid-template-columns:auto 1fr;grid-template-rows:max-content max-content auto;grid-template-areas:"logo    primary" "logo    secondary" ".       tertiary";gap:var(--rh-space-xl,24px) var(--rh-space-2xl,32px)}.global-primary{display:flex}}@media screen and (min-width:1200px){.global-base:not(.nothing){grid-template-columns:auto 1fr auto;grid-template-rows:max-content max-content;grid-template-areas:"logo primary  tertiary" "logo secondary tertiary"}.global-tertiary{place-content:center flex-end}.global-tertiary ::slotted(rh-footer-copyright){text-align:end}}.spacer{grid-area:spacer;border-bottom:1px solid var(--_border-color)}@media screen and (min-width:992px){.spacer{display:none}.global-secondary{flex-flow:row wrap;align-items:center}.global-links-secondary{flex:0 1 auto}.global-secondary-end{margin-inline-start:auto}}@media screen and (min-width:320px){.global-links-primary,.global-links-secondary{display:grid;grid-template-columns:1fr 1fr}}@media screen and (min-width:768px){.global-links-primary,.global-links-secondary{display:grid;grid-template-columns:1fr 1fr 1fr}}@media screen and (min-width:992px){.global-links-primary{display:flex;flex-flow:row wrap;align-items:center}.global-links-secondary{display:flex;flex-flow:row wrap;gap:8px 24px}}@media screen and (max-width:992px){.global-logo{grid-area:logo}.global-primary{grid-area:primary}}@media screen and (min-width:992px){.header:after{display:block}.main{padding-top:var(--rh-space-2xl,32px);padding-bottom:var(--rh-space-4xl,64px)}}@media screen and (min-width:992px) and (max-width:1368px){.header,.main{display:grid;grid-template-columns:8fr 4fr}}@media screen and (min-width:1368px){.header,.main{display:grid;grid-template-columns:8fr 4fr}}@media screen and (min-width:768px){.isMobile .links ::slotted(ul){grid-template-columns:1fr 1fr}}`;
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
function isHeaderTagName(tagName) {
    return !!tagName.match(/^H[1-6]$/i);
}
/**
 * Site footer for navigation links, social icons, and legal content.
 * Use when a page needs branded footer navigation. Must slot an
 * `rh-footer-universal` in the `universal` slot and should contain
 * `rh-footer-links` groups and `rh-footer-block` sections. Uses a
 * `<footer>` landmark with `aria-labelledby` auto-wired to headers.
 * Tab navigates links. On mobile, collapses to accordion.
 *
 * @summary Site footer with navigation links, social icons, and legal content
 *
 * @cssprop --rh-footer-nojs-min-height - Minimum height when JavaScript is disabled. @deprecated target `rh-footer:not(:defined)` directly
 * @cssprop --rh-footer-icon-color - Default icon color. Uses --rh-color-gray-40 design token
 * @cssprop --rh-footer-icon-color-hover - Icon color on hover/focus. Uses --rh-color-gray-30 design token
 * @cssprop --rh-footer-border-color - Border color for section dividers. Uses --rh-color-border-subtle-on-dark design token
 * @cssprop --rh-footer-accent-color - Accent color for emphasis. Uses --rh-color-accent-brand-on-light design token
 * @cssprop --rh-footer-section-side-gap - Horizontal padding for footer sections. Responsive: 16px / 32px / 64px
 * @cssprop --rh-footer-links-gap - Vertical spacing between footer link items. Defaults to --rh-space-lg
 * @cssprop --rh-footer-link-header-font-size - Font size for link column headers. Defaults to --rh-font-size-body-text-sm
 */
let RhFooter = RhFooter_1 = class RhFooter extends LitElement {
    constructor() {
        super(...arguments);
        _RhFooter_instances.add(this);
        _RhFooter_compact.set(this, false);
        _RhFooter_internals.set(this, InternalsController.of(this));
        /**
         * ScreenSizeController effects callback to set #compact is true when viewport
         * `(min-width: ${tabletLandscapeBreakpoint})`.
         */
        this.screenSize = new ScreenSizeController(this, 'md', {
            onChange: matches => {
                __classPrivateFieldSet(this, _RhFooter_compact, !matches, "f");
            },
        });
    }
    /**
     * Isomorphic import.meta.url function
     * Requires a node.js dom shim that sets window.location
     */
    static getImportURL(relativeLocation) {
        const url = new URL(relativeLocation, import.meta.url);
        if (url.protocol === 'file:') {
            return new URL(relativeLocation, window.location.href);
        }
        return url;
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _RhFooter_instances, "m", _RhFooter_updateRole).call(this);
        __classPrivateFieldSet(this, _RhFooter_compact, !this.screenSize.matches.has('md'), "f");
        // wire up accessibility aria-labels with unordered lists
        this.updateAccessibility();
    }
    render() {
        return html `
      <!-- main footer container, containing all footer content. -->
      <div class="footer base ${classMap({ isMobile: __classPrivateFieldGet(this, _RhFooter_compact, "f") })}" part="base">
        <h2 id="heading"><!--
            summary: visually-hidden footer heading for assistive technology
            description: |
                Expects inline text. Screen readers announce this heading to identify the
                footer landmark region. Defaults to "Red Hat footer". --><slot name="heading">Red Hat footer</slot></h2>
        <!-- summary: overrides all footer content
             description: |
               Expects block elements. Replaces the entire footer inner structure.
               Avoid using; bypasses all built-in layout, ARIA wiring, and responsive behavior. -->
        <slot name="base">
          <!-- summary: footer header with logo and social links
               description: |
                 Contains the site logo and social media links. Screen readers navigate
                 these as link groups. Tab moves through logo link and social links. -->
          <div class="section header" part="section header">
            <!-- Expects block elements. Overrides header-primary, logo, and
                 social-links slots. Screen readers navigate child links
                 as a group. -->
            <slot name="header">
              <!-- primary footer header content, e.g. main logo -->
              <div class="header-primary" part="header-primary">
                <!-- Expects block elements. Primary header area, typically the
                     site logo. Should contain an accessible \`<a>\` linking
                     to the homepage. Screen readers use the link text. -->
                <slot name="header-primary">
                  <!-- main page or product logo container -->
                  <div class="logo" part="logo">
                    <!-- summary: main page or product logo
                         description: |
                           Expects block elements: an \`<a>\` wrapping an image. Defaults to the
                           Red Hat corporate logo. Screen readers rely on the img \`alt\` attribute
                           or link text for identification. -->
                    <slot name="logo">
                      <a href="https://redhat.com" aria-label="Red Hat">
                        <svg preserveAspectRatio="xMinYMid slice" viewBox="0 0 613 145" role="img" aria-hidden="true">
                          <path fill="var(--rh-color-brand-red, #ee0000)" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78"/>
                          <path d="M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33l3.66-9.06A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45,12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42Z"/>
                          <path fill="var(--rh-color-white, #ffffff)" d="M579.74,92.8c0,11.89,7.15,17.67,20.19,17.67a52.11,52.11,0,0,0,11.89-1.68V95a24.84,24.84,0,0,1-7.68,1.16c-5.37,0-7.36-1.68-7.36-6.73V68.3h15.56V54.1H596.78v-18l-17,3.68V54.1H568.49V68.3h11.25Zm-53,.32c0-3.68,3.69-5.47,9.26-5.47a43.12,43.12,0,0,1,10.1,1.26v7.15a21.51,21.51,0,0,1-10.63,2.63c-5.46,0-8.73-2.1-8.73-5.57m5.2,17.56c6,0,10.84-1.26,15.36-4.31v3.37h16.82V74.08c0-13.56-9.14-21-24.39-21-8.52,0-16.94,2-26,6.1l6.1,12.52c6.52-2.74,12-4.42,16.83-4.42,7,0,10.62,2.73,10.62,8.31v2.73a49.53,49.53,0,0,0-12.62-1.58c-14.31,0-22.93,6-22.93,16.73,0,9.78,7.78,17.24,20.19,17.24m-92.44-.94h18.09V80.92h30.29v28.82H506V36.12H487.93V64.41H457.64V36.12H439.55ZM370.62,81.87c0-8,6.31-14.1,14.62-14.1A17.22,17.22,0,0,1,397,72.09V91.54A16.36,16.36,0,0,1,385.24,96c-8.2,0-14.62-6.1-14.62-14.09m26.61,27.87h16.83V32.44l-17,3.68V57.05a28.3,28.3,0,0,0-14.2-3.68c-16.19,0-28.92,12.51-28.92,28.5a28.25,28.25,0,0,0,28.4,28.6,25.12,25.12,0,0,0,14.93-4.83ZM320,67c5.36,0,9.88,3.47,11.67,8.83H308.47C310.15,70.3,314.36,67,320,67M291.33,82c0,16.2,13.25,28.82,30.28,28.82,9.36,0,16.2-2.53,23.25-8.42l-11.26-10c-2.63,2.74-6.52,4.21-11.14,4.21a14.39,14.39,0,0,1-13.68-8.83h39.65V83.55c0-17.67-11.88-30.39-28.08-30.39a28.57,28.57,0,0,0-29,28.81M262,51.58c6,0,9.36,3.78,9.36,8.31S268,68.2,262,68.2H244.11V51.58Zm-36,58.16h18.09V82.92h13.77l13.89,26.82H292l-16.2-29.45a22.27,22.27,0,0,0,13.88-20.72c0-13.25-10.41-23.45-26-23.45H226Z"/>
                        </svg>
                      </a>
                    </slot>
                  </div>
                </slot>
              </div>
              <!-- secondary footer header content, e.g. social links -->
              <div class="header-secondary" part="header-secondary">
                <!-- Expects block elements. Overrides social-links slot. Should
                     contain \`<rh-footer-social-link>\` elements with
                     accessible labels for screen readers. -->
                <slot name="header-secondary">
                  <div class="social-links">
                    <!-- social links container \`<rh-footer-links>\` -->
                    <rh-footer-links class="social-links-item"
                                     part="social-links"
                                     role="list"
                                     aria-label="Red Hat social media links">
                      <!-- summary: social media icon links
                         description: |
                           Expects block elements: \`<rh-footer-social-link>\` elements. Each link
                           must have an \`accessible-label\` for screen reader announcement.
                           Rendered as a list with \`role="list"\`. -->
                      <slot name="social-links"></slot>
                    </rh-footer-links>
                  </div>
                </slot>
              </div>
            </slot>
          </div>
          <!-- main content container. -->
          <div class="section main" part="section main">
            <!-- Expects block elements. Overrides main-primary and
                 main-secondary slots. Should contain \`<rh-footer-links>\`
                 groups. Screen readers use aria-labelledby on each group. -->
            <slot name="main">
              <!-- container for main footer links -->
              <div class="main-primary" part="main-primary">
                <!-- Expects block elements: \`<rh-footer-links>\` with heading
                     elements. On mobile, collapses to accordion. Screen
                     readers use \`aria-labelledby\` on each link group. -->
                <slot name="main-primary">
                  <!-- container for main footer links -->
                  <div class="links" part="links">
                    ${__classPrivateFieldGet(this, _RhFooter_instances, "m", _RhFooter_renderLinksTemplate).call(this, __classPrivateFieldGet(this, _RhFooter_compact, "f"))}
                  </div>
                </slot>
              </div>
              <!-- container for prose or promotional content -->
              <div class="main-secondary" part="main-secondary">
                <!-- Expects block elements: prose, promotional content, or
                     \`<rh-footer-block>\` elements. Screen readers announce
                     content in DOM order. -->
                <slot name="main-secondary"></slot>
              </div>
            </slot>
          </div>
          <!-- summary: universal footer slot
               description: |
                 Expects block elements: an \`<rh-footer-universal>\` element providing
                 global Red Hat links, logo, and copyright. Screen readers navigate
                 this as a separate footer landmark region. Must not be omitted. -->
          <slot name="universal"></slot>
        </slot>
      </div>
    `;
    }
    /**
     * Get any `<ul>`s that are in the designated link slots
     * and synchronously update each list and header if we need to.
     */
    updateAccessibility() {
        for (const list of this.querySelectorAll?.(RhFooter_1.LISTS_SELECTOR) ?? []) {
            // if we already have a label then we assume that the user
            // has wired this up themselves.
            if (!list.hasAttribute('aria-labelledby')) {
                // get the corresponding header that should be the previous sibling
                const header = isHeaderTagName(list.previousElementSibling?.tagName ?? '') ?
                    list.previousElementSibling
                    : null;
                if (!header) {
                    return;
                }
                else {
                    // add an ID to the header if we need it
                    header.id || (header.id = getRandomId('rh-footer'));
                    // add that header id to the aria-labelledby attribute
                    list.setAttribute('aria-labelledby', header.id);
                }
            }
        }
    }
};
_RhFooter_compact = new WeakMap();
_RhFooter_internals = new WeakMap();
_RhFooter_instances = new WeakSet();
_RhFooter_updateRole = function _RhFooter_updateRole() {
    let node = this.parentElement;
    let hasFooterAncestor = false;
    while (node) {
        if (node.tagName === 'FOOTER') {
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
        __classPrivateFieldGet(this, _RhFooter_internals, "f").role = 'contentinfo';
    }
};
_RhFooter_renderLinksTemplate = function _RhFooter_renderLinksTemplate(isMobile = false) {
    // gather all of the links that need to be wrapped into the accordion
    // give them a designation of either 'header' or 'panel'
    const children = Array.from(this.querySelectorAll?.(':scope > [slot^=links]') ?? []);
    // Update the dynamic slot names if on mobile
    children.forEach((child, i) => child.setAttribute('slot', isMobile ? `links-${i}` : 'links'));
    return !(isMobile && children) ? html `
      <!-- Main footer link columns. Expects alternating headings (e.g. \`<h3>\`) and \`<ul>\` lists. Each heading MUST have a unique id so screen readers announce groups via \`aria-labelledby\`. -->
      <slot name="links"></slot>
      ` : html `

      <rh-accordion on="dark" color-palette="darkest">${children.map((child, i) => {
        const type = isHeaderTagName(child.tagName) ? 'header' : 'panel';
        // SEE https://github.com/asyncLiz/minify-html-literals/issues/37
        switch (type) {
            case 'header': return html `
              <!-- mobile links accordion header element -->
              <rh-accordion-header part="links-accordion-header">
                <slot name="links-${i}"></slot>
              </rh-accordion-header>`;
            case 'panel': return html `
              <!-- mobile links panel container element -->
              <rh-accordion-panel part="links-accordion-panel">
                <slot name="links-${i}"></slot>
              </rh-accordion-panel>`;
        }
    })}
      </rh-accordion>
    `;
};
RhFooter.version = '{{version}}';
RhFooter.styles = [style];
RhFooter.LISTS_SELECTOR = ':is([slot^=links],[slot=footer-links-primary],[slot=footer-links-secondary]):is(ul)';
RhFooter = RhFooter_1 = __decorate([
    customElement('rh-footer')
], RhFooter);
export { RhFooter };
//# sourceMappingURL=rh-footer.js.map