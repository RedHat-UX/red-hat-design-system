"use strict";

// ../rh-stat/rh-stat.js
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { pfelement, colorContextConsumer } from "@patternfly/pfe-core/decorators.js";
import { SlotController } from "@patternfly/pfe-core/controllers/slot-controller.js";
import { css } from "lit";
import { unsafeCSS } from "lit";
import { bound } from "@patternfly/pfe-core/decorators/bound.js";
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
var styles = css`:host([on='dark']){--accent-color:var(--rh-color-brand-red-on-dark,#f33)}:host{display:flex;--accent-color:var(--rh-color-brand-red,#e00);--red-hat-text:var(--rh-font-family-text,"RedHatText","Overpass",Helvetica,Arial,sans-serif);--red-hat-text-display:var(--rh-font-family-heading,"RedHatDisplay","Overpass",Helvetica,Arial,sans-serif);flex-direction:column;align-items:center;align-content:center;justify-content:space-around}::slotted(*),slot:not(:empty){display:block;text-align:center}slot[name="icon"]{display:none}slot[name="icon"].hasIcon{order:1;display:block;color:black;margin-bottom:16px}pfe-icon[size="md"],::slotted(pfe-icon[size="md"]){--pfe-icon--size:var(--rh-font-size-heading-xl,2.5rem)}::slotted([slot="title"]){order:1;color:var(--accent-color);font-size:var(--rh-font-size-body-text-xl,1.25rem);font-family:var(--red-hat-text-display);font-weight:var(--rh-font-weight-regular,400);text-transform:uppercase}slot[name="statistic"]{order:2;color:var(--accent-color);font-size:var(--rh-font-size-heading-lg,2.25rem);font-weight:var(--rh-font-weight-regular,300);font-family:var(--red-hat-text-display)}slot[name="description"]{order:3;font-size:var(--rh-font-size-text-xl,1.125rem);font-family:var(--red-hat-text);margin-top:var(--rh-space-sm,0.5rem)}::slotted([slot="cta"]){order:4;font-size:var(--rh-font-size-text-xl,1.125rem);font-family:var(--red-hat-text-display);margin-top:var(--rh-space-lg,1.5rem)}:host([size='large']) slot[name="statistic"],:host([size='large']) ::slotted([slot="statistic"]){font-size:var(--rh-font-size-heading-2xl,3rem)}:host([is-mobile]) slot[name='description'],:host([is-mobile]) ::slotted([slot="description"]){font-size:var(--rh-font-size-text-lg,1rem)}:host([is-mobile]) slot[name='statistic'],:host([is-mobile]) ::slotted([slot="statistic"]){font-size:var(--pf-global--spacer--lg,32px)}:host([top='statistic']) slot[name="statistic"],:host([top='statistic']) ::slotted([slot="statistic"]){order:1}:host([top='statistic']) ::slotted([slot="title"]){order:2}`;
var rh_stat_default = styles;
var mobileBreakpoint = unsafeCSS`700px`;
var mobileXlBreakpoint = unsafeCSS`1008px`;
var desktopLargeBreakpoint = unsafeCSS`1368px`;
var desktopSmallBreakpoint = unsafeCSS`1200px`;
var tabletLandscapeBreakpoint = unsafeCSS`992px`;
var tabletPortaitBreakpoint = unsafeCSS`768px`;
var mobileLandscapeBreakpoint = unsafeCSS`576px`;
var mobilePortraitBreakpoint = unsafeCSS`320px`;
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
var RhStat = class extends LitElement {
  constructor() {
    super();
    this.on = "light";
    this.matchMedia = new MatchMediaController(this, `(max-width: ${tabletLandscapeBreakpoint})`, {
      onChange: ({ matches }) => this.isMobile = matches
    });
    this.isMobile = false;
    this.slots = new SlotController(this, {
      slots: ["icon"]
    });
    this.icon = "";
    this.top = "default";
    this.size = "default";
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateIcons();
  }
  render() {
    const hasSlottedIcon = this.slots.hasSlotted("icon");
    return html`
          <slot class="${classMap({ hasIcon: hasSlottedIcon || this.icon.length > 0 })}" name="icon">
            ${this.icon.length > 0 ? html`
                <pfe-icon size=${this.size === "default" ? "md" : "lg"} icon=${this.icon}></pfe-icon>
              ` : html``}
            </slot>
          <slot name="title"></slot>
          <slot name="statistic">Statistic Placeholder</slot>
          <slot name="description">Description Placeholder</slot>
          <slot name="cta"></slot>
    `;
  }
  updateIcons() {
    if (this.querySelectorAll("pfe-icon")?.length > 0) {
      const pfeIcon = this.querySelectorAll("pfe-icon")?.[0];
      pfeIcon.setAttribute("size", this.size === "default" ? "md" : "lg");
    }
  }
};
RhStat.version = "{{version}}";
RhStat.styles = [rh_stat_default];
__decorateClass([
  colorContextConsumer(),
  property({ reflect: true })
], RhStat.prototype, "on", 2);
__decorateClass([
  property({ reflect: true, type: String })
], RhStat.prototype, "icon", 2);
__decorateClass([
  property({ reflect: true, type: String })
], RhStat.prototype, "top", 2);
__decorateClass([
  property({ reflect: true, type: String })
], RhStat.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "is-mobile" })
], RhStat.prototype, "isMobile", 2);
RhStat = __decorateClass([
  customElement("rh-stat"),
  pfelement()
], RhStat);
export {
  RhStat
};
//# sourceMappingURL=rh-stat.js.map
