var _RhFooter_instances, _RhFooter_logger, _RhFooter_compact, _RhFooter_renderLinksTemplate;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import '@rhds/elements/rh-accordion/rh-accordion.js';
export { RhFooterUniversal } from './rh-footer-universal.js';
import './rh-global-footer.js';
import './rh-footer-social-link.js';
import './rh-footer-links.js';
import './rh-footer-block.js';
import { css } from "lit";
const style = css `:host{color:var(--rh-color-white,#fff);font-family:var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);line-height:var(--rh-line-height-body-text, 1.5);font-weight:var(--_font-weight);font-size:initial;display:flex;flex-direction:column}.global-base,footer{--_icon-color:var(--rh-footer-icon-color, var(--rh-color-black-500, #8a8d90));--_icon-color-hover:var(--rh-footer-icon-color-hover, var(--rh-color-black-400, #b8bbbe));--_border-color:var(--rh-footer-border-color, var(--rh-color-black-600, #6a6e73));--_accent-color:var(--rh-footer-accent-color, var(--rh-color-brand-red-on-light, #ee0000));--_section-side-gap:var(--rh-footer-section-side-gap, var(--rh-space-lg, 16px));--_accordion-background:var(--rh-color-white, #ffffff);--_logo-width:var(--rh-size-icon-04, 40px);--_font-weight:var(--rh-font-weight-body-text-regular, 400)}*{box-sizing:border-box}::slotted(:is(h1,h2,h3,h4,h5,h6)){font-family:var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif)!important;line-height:var(--rh-line-height-heading, 1.3)!important}:host([debug]) :not(.spacer,.base,a,svg){min-height:var(--rh-length-xl,24px);position:relative;outline:var(--rh-length-3xs,2px) dotted red}:host([debug]) :not(.spacer,.base,a,svg):after{content:attr(part);display:block;position:absolute;color:#fff;background-color:#2f4f4f;padding:var(--rh-space-xs,4px);top:0;right:0;font-family:var(--rh-font-family-code, RedHatMono, "Red Hat Mono", "Courier New", Courier, monospace);font-size:var(--rh-font-size-code-xs, .75rem)}.section{padding:var(--rh-space-2xl,32px) var(--_section-side-gap)}.header{background-color:var(--rh-color-surface-darker,#212427);display:flex;flex-wrap:wrap;gap:var(--rh-space-2xl,32px);align-items:center;position:relative}.header:after{display:none;content:"";background-color:var(--_border-color);height:var(--rh-length-4xs,1px);position:absolute;bottom:0;width:calc(100% - var(--_section-side-gap) * 2);left:var(--_section-side-gap)}.header-primary{flex:1 1 auto}.header-secondary{flex:0 1 auto}.main{background-color:var(--rh-color-surface-darker,#212427);display:grid;gap:var(--rh-space-2xl,32px);padding-top:0}.main-secondary{display:grid;gap:var(--pf-global--spacer--xl,32px);place-items:baseline;place-content:start}.global-base{--rh-footer-link-font-size:var(--rh-font-size-body-text-xs, 0.75rem);line-height:100%;background-color:var(--rh-color-surface-darkest,#151515);display:grid;grid-template-columns:1fr;grid-template-areas:"logo" "primary" "spacer" "secondary" "tertiary";gap:var(--rh-space-2xl,32px) var(--rh-space-xl,24px)}.global-logo{grid-area:logo;width:var(--_logo-width)}.global-logo-image{fill:var(--_icon-color)}.global-logo-image:is(:hover,:focus-within){fill:var(--_icon-color-hover)}.global-primary{grid-area:primary}.global-secondary{grid-area:secondary;color:var(--rh-color-text-secondary-on-dark,#d2d2d2);display:flex;flex-direction:column;gap:var(--rh-space-lg,16px);justify-content:space-between}.global-tertiary{grid-area:tertiary;display:grid;justify-content:start;align-items:start}.global-links-primary{display:flex;flex-direction:column;gap:var(--rh-space-md,8px) var(--rh-space-xl,24px)}.global-links-secondary{display:flex;flex-direction:column;gap:var(--rh-space-md,8px) var(--rh-space-xl,24px)}:is(.global-primary,.global-secondary,.global-tertiary) ::slotted(*){font-size:var(--rh-font-size-body-text-xs, .75rem)!important}.logo{line-height:0}.social-links{display:flex;margin-inline-start:0;padding-inline-start:0}.social-links rh-footer-links,.social-links slot::slotted(rh-footer-links){display:flex;flex-direction:row;gap:var(--rh-space-xl,24px)}:is(.links,.global-links-primary,.global-links-secondary) ::slotted(ul){padding:0;margin:0;display:contents}.isMobile .links{--rh-footer-link-header-font-size:var(--rh-font-size-body-text-lg, 1.125rem)}.isMobile .links ::slotted(ul){--rh-footer-link-font-size:1em;display:grid;grid-template-columns:1fr;gap:calc(var(--rh-space-2xl,32px)/ 2)}[part=base]:not(.isMobile) .links{display:grid;grid-template-columns:repeat(1fr,25%);grid-template-rows:repeat(1,min-content auto);grid-auto-columns:minmax(0,1fr);row-gap:var(--rh-space-lg,16px);column-gap:var(--rh-space-2xl,32px);grid-auto-flow:column}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):first-of-type){grid-column:1/2;grid-row:1/2}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(2)){grid-column:2/3;grid-row:1/2}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(3)){grid-column:3/4;grid-row:1/2}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(4)){grid-column:4/5;grid-row:1/2}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(5)){grid-column:1/2;grid-row:3/4}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(6)){grid-column:2/3;grid-row:3/4}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(7)){grid-column:3/4;grid-row:3/4}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(8)){grid-column:4/5;grid-row:3/4}[part=base]:not(.isMobile) .links ::slotted(:is(ul:first-of-type)){grid-column:1/2;grid-row:2/3}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(2))){grid-column:2/3;grid-row:2/3}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(3))){grid-column:3/4;grid-row:2/3}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(4))){grid-column:4/5;grid-row:2/3}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(5))){grid-column:1/2;grid-row:4/5}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(6))){grid-column:2/3;grid-row:4/5}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(7))){grid-column:3/4;grid-row:4/5}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(8))){grid-column:4/5;grid-row:4/5}[part=base]:not(.isMobile) .links ::slotted(ul){gap:var(--rh-footer-links-gap,var(--rh-space-lg,16px));display:flex;flex-direction:column}#footer-logo{width:var(--_logo-width)}:is(.links,.global-links-primary,.global-links-secondary) ::slotted(:is(h1,h2,h3,h4,h5)){font-weight:var(--rh-font-weight-heading-medium,500)!important;margin-block:0!important;margin-block-start:var(--_link-header-margin,0)!important;font-size:var(\n      --rh-footer-link-header-font-size,\n      var(--rh-font-size-body-text-sm, .875rem)\n    )!important;color:var(--rh-color-white,#fff)!important}rh-accordion-header[expanded]{--_border-inline-end-color:var(--_border-color)}rh-accordion-header:not([expanded])::part(container){--_background-color:var(--rh-color-surface-darker, #212427);--_active-background-color:var(--rh-color-surface-darker, #212427)}rh-accordion-header:hover{--_after-background-color:var(--_accent-color)}::slotted(rh-footer-copyright){grid-column:-1/1}`;
import { responsiveStyles } from './rh-footer-responsive.css.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
function isHeaderTagName(tagName) {
    return !!tagName.match(/^H[1-6]$/i);
}
/**
 * @element rh-footer
 * @csspart base - main footer element, containing all footer content
 * @slot    base - Overrides everything. Do not use.
 * @slot    header - Overrides `header-*`, `logo`, `social-links`
 * @csspart header - footer header, typically containing main logo and social links
 * @slot    header-primary - primary footer header content, e.g. main logo. Overrides `logo`
 * @csspart header-primary - primary footer header content, e.g. main logo
 * @slot    header-secondary - secondary footer header content, e.g. social links. Overrides `social-links`
 * @csspart header-secondary - secondary footer header content, e.g. social links
 * @slot    logo - main page or product logo. Defaults to Red Hat corporate logo
 * @csspart logo - main page or product logo container
 * @slot    social-links - social media links (icons). Contains a default set of links
 * @csspart social-links - social links container `<rh-footer-links>`
 * @slot    main - main footer content. Overrides `main-*`
 * @csspart main - main content container.
 * @slot    main-primary - main footer region. typically a columnar grid
 * @csspart main-primary - container for main footer links
 * @slot    links - main footer links
 * @csspart links - container for main footer links
 * @csspart links-accordion-header - mobile links accordion header element
 * @csspart links-accordion-panel - mobile links panel container element
 * @slot    main-secondary - typically contains prose or promotional content
 * @csspart main-secondary - container fro prose or promotional content
 * @slot    global - must contain `<rh-footer-universal>` {@deprecated - use `universal`}
 * @slot    universal - must contain `<rh-footer-universal>`
 *
 * @cssprop --rh-footer-icon-color - {@default #8a8d90}
 * @cssprop --rh-footer-icon-color-hover - {@default #b8bbbe}
 * @cssprop --rh-footer-border-color - {@default #6a6e73}
 * @cssprop --rh-footer-accent-color - {@default #e00}
 * @cssprop --rh-footer-section-side-gap - {@default 16px}
 * @cssprop --rh-footer-links-gap - {@default 8px}
 * @cssprop --rh-footer-link-header-font-size - {@default 0.875em}
 * @cssprop --rh-footer-nojs-min-height - {@default 750px}
 */
let RhFooter = class RhFooter extends LitElement {
    constructor() {
        super(...arguments);
        _RhFooter_instances.add(this);
        _RhFooter_logger.set(this, new Logger(this));
        _RhFooter_compact.set(this, false);
        this.colorPalette = 'darker';
        /**
         * ScreenSizeController effects callback to set #compact is true when viewport
         * `(min-width: ${tabletLandscapeBreakpoint})`.
         */
        this.screenSize = new ScreenSizeController(this, 'tabletLandscape', {
            onChange: matches => {
                __classPrivateFieldSet(this, _RhFooter_compact, !matches, "f");
            }
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
        // wire up accessibility aria-labels with unordered lists
        this.updateAccessibility();
    }
    render() {
        return html `
      <footer class="base ${classMap({ isMobile: __classPrivateFieldGet(this, _RhFooter_compact, "f") })}" part="base">
        <slot name="base">
          <div class="section header" part="section header">
            <slot name="header">
              <div class="header-primary" part="header-primary">
                <slot name="header-primary">
                  <div class="logo" part="logo">
                    <slot name="logo">
                      <a href="/">
                        <img alt="Red Hat" src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg"/>
                      </a>
                    </slot>
                  </div>
                </slot>
              </div>
              <div class="header-secondary" part="header-secondary">
                <slot name="header-secondary">
                  <div class="social-links">
                    <rh-footer-links class="social-links-item"
                      part="social-links"
                      aria-label="Red Hat social media links"
                      role="list">
                      <slot name="social-links"></slot>
                    </rh-footer-links>
                  </div>
                </slot>
              </div>
            </slot>
          </div>
          <div class="section main" part="section main">
            <slot name="main">
              <div class="main-primary" part="main-primary">
                <slot name="main-primary">
                  <div class="links" part="links">
                    ${__classPrivateFieldGet(this, _RhFooter_instances, "m", _RhFooter_renderLinksTemplate).call(this, __classPrivateFieldGet(this, _RhFooter_compact, "f"))}
                  </div>
                </slot>
              </div>
              <div class="main-secondary" part="main-secondary">
                <slot name="main-secondary"></slot>
              </div>
            </slot>
          </div>
          <slot name="universal"><slot name="global"></slot></slot>
        </slot>
      </footer>
    `;
    }
    /**
     * Get any `<ul>`s that are in the designated link slots
     * and synchronously update each list and header if we need to.
     */
    updateAccessibility() {
        const listsSelector = ':is([slot^=links],[slot=footer-links-primary],[slot=footer-links-secondary]):is(ul)';
        for (const list of this.querySelectorAll(listsSelector)) {
            // if we already have a label then we assume that the user
            // has wired this up themselves.
            if (!list.hasAttribute('aria-labelledby')) {
                // get the corresponding header that should be the previous sibling
                const header = isHeaderTagName(list.previousElementSibling?.tagName ?? '') ? list.previousElementSibling : null;
                if (!header) {
                    return __classPrivateFieldGet(this, _RhFooter_logger, "f").warn('This links set doesn\'t have a valid header associated with it.');
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
_RhFooter_logger = new WeakMap(), _RhFooter_compact = new WeakMap(), _RhFooter_instances = new WeakSet(), _RhFooter_renderLinksTemplate = function _RhFooter_renderLinksTemplate(isMobile = false) {
    // gather all of the links that need to be wrapped into the accordion
    // give them a designation of either 'header' or 'panel'
    const children = Array.from(this.querySelectorAll(':scope > [slot^=links]'));
    // Update the dynamic slot names if on mobile
    children.forEach((child, i) => child.setAttribute('slot', isMobile ? `links-${i}` : 'links'));
    return !(isMobile && children) ? html `
      <slot name="links"></slot>
      ` : html `

      <rh-accordion on="dark" color-palette="darkest">${children.map((child, i) => {
        const type = isHeaderTagName(child.tagName) ? 'header' : 'panel';
        // SEE https://github.com/asyncLiz/minify-html-literals/issues/37
        switch (type) {
            case 'header': return html `
              <rh-accordion-header part="links-accordion-header">
                <slot name="links-${i}"></slot>
              </rh-accordion-header>`;
            case 'panel': return html `
              <rh-accordion-panel part="links-accordion-panel">
                <slot name="links-${i}"></slot>
              </rh-accordion-panel>`;
        }
    })}
      </rh-accordion>
    `;
};
RhFooter.version = '{{version}}';
RhFooter.styles = [style, responsiveStyles];
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhFooter.prototype, "colorPalette", void 0);
RhFooter = __decorate([
    customElement('rh-footer')
], RhFooter);
export { RhFooter };
//# sourceMappingURL=rh-footer.js.map