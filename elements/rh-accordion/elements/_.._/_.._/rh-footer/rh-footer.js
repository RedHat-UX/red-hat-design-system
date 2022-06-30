"use strict";

// ../rh-footer/rh-footer.js
import { LitElement as LitElement5, html as html5 } from "lit";
import { html as staticHtml, unsafeStatic } from "lit/static-html.js";
import { property as property3 } from "lit/decorators.js";
import { colorContextProvider } from "@patternfly/pfe-core/decorators.js";
import { pfelement } from "@patternfly/pfe-core/decorators.js";
import { getRandomId as getRandomId2 } from "@patternfly/pfe-core/functions/random.js";
import { Logger as Logger3 } from "@patternfly/pfe-core/controllers/logger.js";
import { css } from "lit";
import { css as css2 } from "lit";
import { unsafeCSS } from "lit";
import { bound } from "@patternfly/pfe-core/decorators/bound.js";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Logger } from "@patternfly/pfe-core/controllers/logger.js";
import { css as css3 } from "lit";
import { LitElement as LitElement2, html as html2 } from "lit";
import { customElement as customElement2, property as property2 } from "lit/decorators.js";
import { SlotController } from "@patternfly/pfe-core/controllers/slot-controller.js";
import { initializer } from "@patternfly/pfe-core/decorators.js";
import { Logger as Logger2 } from "@patternfly/pfe-core/controllers/logger.js";
import { getRandomId } from "@patternfly/pfe-core/functions/random.js";
import { css as css4 } from "lit";
import { LitElement as LitElement3, html as html3 } from "lit";
import { customElement as customElement3 } from "lit/decorators.js";
import { css as css5 } from "lit";
import { LitElement as LitElement4, html as html4 } from "lit";
import { customElement as customElement4 } from "lit/decorators.js";
import { css as css6 } from "lit";
import "@patternfly/pfe-icon";
import "@patternfly/pfe-accordion";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var styles = css`:host{--_icon-color:var(--rh-footer-icon-color,#8a8d90);--_icon-color-hover:var(--rh-footer-icon-color-hover,#b8bbbe);--_border-color:var(--rh-footer-border-color,#6a6e73);--_accent-color:var(--rh-footer-accent-color,#e00);--_section-side-gap:var(--rh-footer-section-side-gap,var(--pf-global--spacer--xl,32px));--context:dark;--pfe-accordion--Color:#fff;--pfe-accordion--Color--expanded:#fff;--pfe-accordion--Color--active:#fff;--pfe-accordion--BackgroundColor:transparent;--pfe-accordion--BackgroundColor--active:transparent;--pfe-accordion--BackgroundColor--expanded:#151515;--pfe-accordion--BorderColor:var(--_border-color);--pfe-accordion--FontWeight--header:300;--pfe-accordion--accent--expanded:var(--_accent-color);--pfe-accordion--accent--active:var(--_accent-color);color:#fff;font-family:'Red Hat Text','RedHatText','Overpass',Overpass,Arial,sans-serif;line-height:125%;font-weight:300;font-size:18px;display:flex;flex-direction:column}pfe-accordion{--pfe-context-background-color:transparent}*{box-sizing:border-box}:host([debug]) *:not(.spacer,.base,a,svg){position:relative;outline:2px dotted red;min-height:25px}:host([debug]) *:not(.spacer,.base,a,svg)::after{content:attr(part);display:block;position:absolute;color:white;background-color:darkslategray;padding:.3em;top:0;right:0;font-size:.7rem}.section{padding:var(--pf-global--spacer--xl,32px) var(--_section-side-gap)}.header{background-color:#212427;display:flex;flex-wrap:wrap;gap:var(--pf-global--spacer--xl,32px);align-items:center;position:relative}.header::after{display:block;content:'';background-color:var(--_border-color);height:1px;position:absolute;bottom:0;width:calc(100% - var(--_section-side-gap) * 2);left:var(--_section-side-gap)}.header-primary{flex:1 1 auto}.header-secondary{flex:0 1 auto}.main{background-color:#212427;display:grid;gap:var(--pf-global--spacer--xl,32px)}.footer{--link-font-size:12px;line-height:100%;background-color:#151515;display:grid;grid-template-columns:1fr;grid-template-areas:'logo' 'primary' 'spacer' 'secondary' 'tertiary';gap:32px 24px}.footer-logo{grid-area:logo;width:42px}.footer-logo-image{fill:var(--_icon-color)}.footer-logo-image:is(:hover,:focus-within){fill:var(--_icon-color-hover)}.footer-primary{grid-area:primary}.footer-secondary{grid-area:secondary;color:#d2d2d2;font-size:12px;display:flex;flex-direction:column;gap:16px;justify-content:space-between}.footer-tertiary{grid-area:tertiary;display:grid;justify-content:start;align-items:start}.footer-links-primary{display:flex;flex-direction:column;gap:8px 24px}.footer-links-secondary{display:flex;flex-direction:column;gap:8px 24px}.logo{line-height:0}.logo slot::slotted(a),.logo a{display:inline-flex;width:156px}.social-links{display:flex;margin-inline-start:0;padding-inline-start:0}.social-links rh-footer-links,.social-links slot::slotted(rh-footer-links){display:flex;flex-direction:row;gap:24px}:host(:not([is-mobile])) .links{display:grid;grid-template-columns:repeat(1fr,25%);grid-template-rows:repeat(2,min-content auto);gap:var(--rh-footer-links-column-gap,32px)}:host(:not([is-mobile])) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(1)){grid-column:1/2;grid-row:1/2}:host(:not([is-mobile])) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(2)){grid-column:2/3;grid-row:1/2}:host(:not([is-mobile])) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(3)){grid-column:3/4;grid-row:1/2}:host(:not([is-mobile])) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(4)){grid-column:4/5;grid-row:1/2}:host(:not([is-mobile])) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(5)){grid-column:1/2;grid-row:3/4}:host(:not([is-mobile])) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(6)){grid-column:2/3;grid-row:3/4}:host(:not([is-mobile])) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(7)){grid-column:3/4;grid-row:3/4}:host(:not([is-mobile])) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(8)){grid-column:4/5;grid-row:3/4}:host(:not([is-mobile])) .links ::slotted(:is(ul:nth-of-type(1))){grid-column:1/2;grid-row:2/3}:host(:not([is-mobile])) .links ::slotted(:is(ul:nth-of-type(2))){grid-column:2/3;grid-row:2/3}:host(:not([is-mobile])) .links ::slotted(:is(ul:nth-of-type(3))){grid-column:3/4;grid-row:2/3}:host(:not([is-mobile])) .links ::slotted(:is(ul:nth-of-type(4))){grid-column:4/5;grid-row:2/3}:host(:not([is-mobile])) .links ::slotted(:is(ul:nth-of-type(5))){grid-column:1/2;grid-row:4/5}:host(:not([is-mobile])) .links ::slotted(:is(ul:nth-of-type(6))){grid-column:2/3;grid-row:4/5}:host(:not([is-mobile])) .links ::slotted(:is(ul:nth-of-type(7))){grid-column:3/4;grid-row:4/5}:host(:not([is-mobile])) .links ::slotted(:is(ul:nth-of-type(8))){grid-column:4/5;grid-row:4/5}:host(:not([is-mobile])) .links ::slotted(ul){padding:0;margin:0;display:flex;flex-direction:column;gap:var(--rh-footer-links-gap,10px);margin-block-start:calc(var(--rh-footer-links-column-gap, 32px) * -1 + var(--rh-footer-links-gap, 10px)) !important}:host([is-mobile]) .links ::slotted(ul){--link-font-size:16px;padding:0;margin:0;display:grid;grid-template-columns:1fr;gap:var(--rh-footer-links-column-gap,16px)}#footer-logo{width:42px}:is(.links,.footer-links-primary,.footer-links-secondary) ::slotted(ul){padding:0;margin:0;display:contents}:is(.links,.footer-links-primary,.footer-links-secondary) ::slotted(:is(h1,h2,h3,h4,h5)){font-weight:500 !important;margin-block:0 !important;font-size:var(--link-header-font-size,14px) !important}:host([is-mobile]){--link-header-font-size:18px}`;
var rh_footer_default = styles;
var mobileBreakpoint = unsafeCSS`700px`;
var mobileXlBreakpoint = unsafeCSS`1008px`;
var desktopLargeBreakpoint = unsafeCSS`1368px`;
var desktopSmallBreakpoint = unsafeCSS`1200px`;
var tabletLandscapeBreakpoint = unsafeCSS`992px`;
var tabletPortaitBreakpoint = unsafeCSS`768px`;
var mobileLandscapeBreakpoint = unsafeCSS`576px`;
var mobilePortraitBreakpoint = unsafeCSS`320px`;
var responsiveStyles = css2`
  @media screen and (min-width: ${mobileBreakpoint}) {
    .footer {
      grid-template-columns: 4fr 4fr 4fr;
      grid-template-areas:
        'logo      logo      logo'
        'primary   primary   primary'
        'spacer    spacer    spacer'
        'secondary secondary tertiary';
    }
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .footer {
      grid-template-columns: auto 10fr 2fr;
      grid-template-rows: 32px max-content;
      grid-template-areas:
        'logo primary   tertiary'
        'logo secondary tertiary';
      gap: 24px 32px;
    }

    .footer-primary {
      display: flex;
    }

  }

  .spacer {
    grid-area: spacer;
    border-bottom: 1px solid var(--_border-color);
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .spacer {
      display: none;
    }
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .footer-tertiary {
      display: grid;
      justify-content: flex-end;
      align-items: center;
    }
  }

  @media screen and (min-width: 500px) {
    .footer-links-primary {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .footer-links-primary {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
  }

  @media screen and (min-width: 500px) {
    .footer-links-secondary {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: ${mobileBreakpoint}) {
    .footer-links-secondary {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .footer-links-secondary {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px 24px;
    }
  }

  @media screen and (max-width: ${tabletLandscapeBreakpoint}) {
    /* Add a bit more margin to the primary content on mobile */
    .main-primary {
      margin: calc(
          var(--pf-global--spacer--2xl, 48px) -
            var(--pf-global--spacer--xl, 32px)
        )
        0;
    }

    .footer-logo {
      grid-area: logo;
    }

    .footer-primary {
      grid-area: primary;
    }
  }

  @media screen and (max-width: ${tabletLandscapeBreakpoint}) {
    /* Equalize padding on mobile */
    .section {
      --_section-side-gap: var(
        --rh-footer-section-side-gap,
        var(--pf-global--spacer--3xl, 24px)
      );
    }

    .footer-tertiary {
      margin-block-start: 16px;
    }
  }

  @media screen and (min-width: ${tabletLandscapeBreakpoint}) and (max-width: ${desktopLargeBreakpoint}) {
    /* Equalize padding on mobile */
    .section {
      --_section-side-gap: var(
        --rh-footer-section-side-gap,
        var(--pf-global--spacer--3xl, 32px)
      );
    }

    .footer-tertiary {
      margin-block-start: 16px;
    }

    .header,
    .main {
      /* switch header to use grid instead */
      display: grid;
      grid-template-columns: 8fr 4fr;
    }
  }

  @media screen and (min-width: ${desktopLargeBreakpoint}) {
    .section {
      --_section-side-gap: var(
        --rh-footer-section-side-gap,
        var(--pf-global--spacer--3xl, 64px)
      );
    }

    .header,
    .main {
      /* switch header to use grid instead */
      display: grid;
      grid-template-columns: 8fr 4fr;
    }
  }

  @media screen and (min-width: ${mobileBreakpoint}) {
    :host([is-mobile]) .links ::slotted(ul) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
var MatchMediaController = class {
  constructor(host, mediaQuery = "", options) {
    this.host = host;
    this.mediaQuery = mediaQuery;
    this.mediaQueryList = null;
    this.host.addController(this);
    this.mediaQueryList = matchMedia(mediaQuery);
    this.onChange = options?.onChange;
  }
  hostConnected() {
    this.mediaQueryList?.addEventListener("change", this.evaluate);
  }
  hostDisconnected() {
    this.mediaQueryList?.removeEventListener("change", this.evaluate);
  }
  evaluate() {
    this.host.requestUpdate();
    this.onChange?.(this.mediaQueryList ?? matchMedia(this.mediaQuery));
  }
};
__decorateClass([
  bound
], MatchMediaController.prototype, "evaluate", 1);
var styles2 = css3`:host{display:block;--pfe-icon--color:var(--_icon-color);--pfe-icon--size:var(--rh-footer--social-icon--size,28px)}:host(:is(:hover,:focus-within)){--pfe-icon--color:var(--_icon-color-hover)}`;
var rh_footer_social_link_default = styles2;
var RhFooterSocialLink = class extends LitElement {
  constructor() {
    super();
    this.logger = new Logger(this);
    this.icon = null;
    this.setAttribute("role", "listitem");
  }
  render() {
    return html`<slot></slot>`;
  }
  updated() {
    this.updateLightdom();
  }
  updateLightdom() {
    const oldDiv = this.querySelector("a");
    if (oldDiv) {
      const newDiv = oldDiv.cloneNode(true);
      newDiv.querySelectorAll("[_rendered]").forEach((i) => i.remove());
      newDiv.innerHTML = `<pfe-icon icon="${this.icon}">${newDiv.innerHTML}</pfe-icon>`;
      newDiv.setAttribute("aria-label", newDiv.textContent || "");
      if (!newDiv.getAttribute("aria-label")) {
        this.logger.warn("Must add aria-label to links");
      }
      if (oldDiv.parentNode) {
        oldDiv.parentNode.replaceChild(newDiv, oldDiv);
      }
    }
  }
};
RhFooterSocialLink.styles = rh_footer_social_link_default;
__decorateClass([
  property()
], RhFooterSocialLink.prototype, "icon", 2);
RhFooterSocialLink = __decorateClass([
  customElement("rh-footer-social-link")
], RhFooterSocialLink);
var styles3 = css4`:host{display:flex;flex-direction:column;gap:10px}[part]{display:contents}::slotted(:is(h1,h2,h3,h4,h5)){font-weight:500;font-size:14px;margin-top:0;margin-bottom:0}:host([header-hidden]) .header ::slotted(*){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}`;
var rh_footer_links_default = styles3;
var RhFooterLinks = class extends LitElement2 {
  constructor() {
    super(...arguments);
    this.headerHidden = false;
    this.logger = new Logger2(this);
    this.slots = new SlotController(this, {
      slots: ["header"]
    });
  }
  updateAccessibility() {
    const header = this.querySelector('[slot="header"]');
    const ul = this.querySelector("ul");
    if (header && ul) {
      header.id || (header.id = getRandomId("rh-footer-links"));
      ul.setAttribute("aria-labelledby", header.id);
    } else {
      this.logger.warn("This links set doesn't have a valid header associated with it.");
    }
  }
  render() {
    return html2`
      <div part="header" class="header">
        <slot name="header"></slot>
      </div>
      <div part="default" class="default">
        <slot name="panel"></slot>
        <slot></slot>
      </div>
    `;
  }
};
RhFooterLinks.styles = rh_footer_links_default;
__decorateClass([
  property2({ type: Boolean, attribute: "header-hidden", reflect: true })
], RhFooterLinks.prototype, "headerHidden", 2);
__decorateClass([
  initializer()
], RhFooterLinks.prototype, "updateAccessibility", 1);
RhFooterLinks = __decorateClass([
  customElement2("rh-footer-links")
], RhFooterLinks);
var styles4 = css5`:host{display:block;position:relative}:host(:not(:first-of-type)){margin-top:1.5em}:host(:not(:last-of-type,:first-of-type)){border-bottom:1px solid var(--_border-color);padding-bottom:1.5em}::slotted(*){color:#fff;font-size:14px;text-decoration:none}::slotted(:is(h1,h2,h3,h4,h5)){font-weight:500 !important;font-size:14px !important;margin-block-start:0 !important;margin-block-end:1em !important}.content ::slotted(*){color:#d2d2d2;font-family:'Red Hat Text','RedHatText','Overpass',Overpass,Arial,sans-serif;font-weight:400}`;
var rh_footer_block_default = styles4;
var RhFooterBlock = class extends LitElement3 {
  render() {
    return html3`
      <div class="base" part="base">
        <div class="header" part="header">
          <slot name="header"></slot>
        </div>
        <div class="content" part="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
};
RhFooterBlock.styles = rh_footer_block_default;
RhFooterBlock = __decorateClass([
  customElement3("rh-footer-block")
], RhFooterBlock);
var styles5 = css6`:host{flex:1 1 auto;display:block;width:100%}`;
var rh_footer_copyright_default = styles5;
var currentYear = new Date().getFullYear();
var RhFooterCopyright = class extends LitElement4 {
  render() {
    return html4`<slot>&copy; ${currentYear} Red Hat, Inc.</slot>`;
  }
};
RhFooterCopyright.styles = rh_footer_copyright_default;
RhFooterCopyright = __decorateClass([
  customElement4("rh-footer-copyright")
], RhFooterCopyright);
function isHeader(tagName) {
  return !!tagName.match(/^H[1-6]$/i);
}
var RhFooter = class extends LitElement5 {
  constructor() {
    super(...arguments);
    this.logger = new Logger3(this);
    this.matchMedia = new MatchMediaController(this, `(max-width: ${tabletLandscapeBreakpoint})`, {
      onChange: ({ matches }) => this.isMobile = matches
    });
    this.isMobile = false;
    this.colorPalette = "darker";
  }
  static getImportURL(relativeLocation) {
    const url = new URL(relativeLocation, import.meta.url);
    if (url.protocol === "file:") {
      return new URL(relativeLocation, window.location.href);
    }
    return url;
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateAccessibility();
  }
  render() {
    return html5`
      <footer class="base" part="base">
        <slot name="base">
          <div class="section header" part="section header">
            <slot name="header">
              <div class="header-primary" part="header-primary">
                <slot name="header-primary">
                  <div class="logo" part="logo">
                    <slot name="logo">
                      <a href="/en">
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
                      part="social-links-item"
                      aria-label="Red Hat social media links">
                      <slot name="social-links">
                        <slot name="social-links-start"></slot>
                        <rh-footer-social-link class="social-link"
                            part="social-link"
                            icon="web-icon-linkedin">
                          <a href="http://www.linkedin.com/company/red-hat">LinkedIn</a>
                        </rh-footer-social-link>
                        <rh-footer-social-link class="social-link"
                            part="social-link"
                            icon="web-icon-youtube">
                          <a href="http://www.youtube.com/user/RedHatVideos">Youtube</a>
                        </rh-footer-social-link>
                        <rh-footer-social-link class="social-link"
                            part="social-link"
                            icon="web-icon-facebook">
                          <a href="https://www.facebook.com/redhatinc">Facebook</a>
                        </rh-footer-social-link>
                        <rh-footer-social-link class="social-link"
                            part="social-link"
                            icon="web-icon-twitter">
                          <a href="https://twitter.com/RedHat">Twitter</a>
                        </rh-footer-social-link>
                        <slot name="social-links-end"></slot>
                      </slot>
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
                    ${this.renderLinksTemplate()}
                  </div>
                </slot>
              </div>
              <div class="main-secondary" part="main-secondary">
                <slot name="main-secondary"></slot>
              </div>
            </slot>
          </div>
          <div class="section footer" part="section footer">
            <slot name="footer">
              <div class="footer-logo" part="footer-logo">
                <slot name="footer-logo">
                  <a class="footer-logo-anchor"
                      part="footer-logo-anchor"
                      href="/en"
                      alt="Visit Red Hat">
                    <svg title="Red Hat logo"
                        class="footer-logo-image"
                        part="footer-logo-image"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 192 145">
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
              <div class="footer-primary" part="footer-primary">
                <slot name="footer-primary">
                  <div class="footer-primary-start" part="footer-primary-start">
                    <slot name="footer-primary-start"></slot>
                  </div>
                  <div class="footer-links-primary" part="footer-links-primary">
                    <slot name="footer-links-primary"></slot>
                  </div>
                  <div class="footer-primary-end" part="footer-primary-end">
                    <slot name="footer-primary-end"></slot>
                  </div>
                </slot>
              </div>
              <div class="spacer" part="spacer"></div>
              <div class="footer-secondary" part="footer-secondary">
                <slot name="footer-secondary">
                  <div class="footer-secondary-start" part="footer-secondary-start">
                    <slot name="footer-secondary-start"></slot>
                  </div>
                  <div class="footer-links-secondary" part="footer-links-secondary">
                    <slot name="footer-links-secondary"></slot>
                  </div>
                  <div class="footer-secondary-end" part="footer-secondary-end">
                    <slot name="footer-secondary-end"></slot>
                  </div>
                </slot>
              </div>
              <div class="footer-tertiary" part="footer-tertiary">
                <slot name="footer-tertiary"></slot>
              </div>
            </slot>
          </div>
        </slot>
      </footer>
    `;
  }
  renderLinksTemplate() {
    const children = Array.from(this.querySelectorAll(":scope > [slot^=links]"), (ref) => ({
      type: isHeader(ref.tagName) ? "header" : "panel",
      ref
    }));
    children.forEach(({ ref }, i) => ref.setAttribute("slot", this.isMobile ? `links-${i}` : "links"));
    return !(this.isMobile && children) ? html5`
      <slot name="links"></slot>
      ` : html5`
      <pfe-accordion on="dark" color-palette="darkest">${children.map((child, index) => staticHtml`
        <pfe-accordion-${unsafeStatic(child.type)}>
          <slot name="links-${index}"></slot>
         </pfe-accordion-${unsafeStatic(child.type)}>`)}
      </pfe-accordion>
    `;
  }
  updateAccessibility() {
    const listsSelector = ":is([slot^=links],[slot=footer-links-primary],[slot=footer-links-secondary]):is(ul)";
    for (const list of this.querySelectorAll(listsSelector)) {
      if (!list.hasAttribute("aria-labelledby")) {
        const header = isHeader(list.previousElementSibling?.tagName ?? "") ? list.previousElementSibling : null;
        if (!header) {
          return this.logger.warn("This links set doesn't have a valid header associated with it.");
        } else {
          header.id || (header.id = getRandomId2("rh-footer"));
          list.setAttribute("aria-labelledby", header.id);
        }
      }
    }
  }
};
RhFooter.version = "{{version}}";
RhFooter.styles = [rh_footer_default, responsiveStyles];
__decorateClass([
  property3({ type: Boolean, reflect: true, attribute: "is-mobile" })
], RhFooter.prototype, "isMobile", 2);
__decorateClass([
  colorContextProvider(),
  property3({ reflect: true, attribute: "color-palette" })
], RhFooter.prototype, "colorPalette", 2);
RhFooter = __decorateClass([
  pfelement()
], RhFooter);
customElements.define("rh-footer", RhFooter);
//# sourceMappingURL=rh-footer.js.map
