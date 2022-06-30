"use strict";
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

// rh-accordion.ts
import { LitElement as LitElement3, html as html3 } from "lit";
import { customElement as customElement3, property as property3, state } from "lit/decorators.js";
import {
  bound as bound2,
  cascades,
  colorContextConsumer as colorContextConsumer3,
  colorContextProvider,
  deprecation,
  initializer as initializer2,
  observed as observed2,
  pfelement as pfelement3
} from "@patternfly/pfe-core/decorators.js";
import { NumberListConverter, ComposedEvent as ComposedEvent2 } from "@patternfly/pfe-core";
import { deprecatedCustomEvent as deprecatedCustomEvent2 } from "@patternfly/pfe-core/functions/deprecatedCustomEvent.js";
import { Logger as Logger2 } from "@patternfly/pfe-core/controllers/logger.js";

// rh-accordion-header.ts
import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { unsafeStatic, html as staticH } from "lit/static-html.js";
import { ComposedEvent } from "@patternfly/pfe-core";
import { pfelement, bound, observed, initializer, colorContextConsumer } from "@patternfly/pfe-core/decorators.js";
import { getRandomId } from "@patternfly/pfe-core/functions/random.js";
import { deprecatedCustomEvent } from "@patternfly/pfe-core/functions/deprecatedCustomEvent.js";
import { SlotController } from "@patternfly/pfe-core/controllers/slot-controller.js";
import { Logger } from "@patternfly/pfe-core/controllers/logger.js";

// rh-accordion-header.css
import { css } from "lit";
var styles = css`:host{transition-property:box-shadow,border;transition-timing-function:var(--pfe-theme--animation-timing,cubic-bezier(0.465,0.183,0.153,0.946));transition-duration:calc(var(--pfe-theme--animation-speed, 0.3s) / 2)}:host([expanded]),:host(.animating){background-color:var(--rh-accordion--BackgroundColor--expanded,var(--pfe-theme--color--surface--lightest,#fff));--rh-accordion--Color:var(--rh-accordion--Color--expanded,var(--pfe-broadcasted--text,#3c3f42));--rh-accordion--accent:var(--rh-accordion--accent--expanded,var(--pfe-theme--color--ui-accent,#06c))}:host([expanded]:not(.animating)){--rh-accordion--BoxShadow:var(--rh-accordion--BoxShadow--expanded,0 5px 4px rgba(140,140,140,0.35))}:host([on=dark][expanded]),:host([on=dark].animating){background-color:var(--rh-accordion--BackgroundColor--expanded,rgba(247,247,249,0.1));--rh-accordion--Color:var(--rh-accordion--Color--expanded,var(--pfe-broadcasted--text--on-dark,#fff));--rh-accordion--accent:var(--rh-accordion--accent--expanded,var(--pfe-theme--color--ui-accent--on-dark,#73bcf7))}:host([expanded]:not(.animating)){--rh-accordion--BoxShadow:var(--rh-accordion--BoxShadow--expanded,none)}:host([on=saturated][expanded]),:host([on=saturated].animating){background-color:var(--rh-accordion--BackgroundColor--expanded,rgba(0,0,0,0.2));--rh-accordion--Color:var(--rh-accordion--Color--expanded,var(--pfe-broadcasted--text--on-saturated,#fff));--rh-accordion--accent:var(--rh-accordion--accent--expanded,var(--pfe-theme--color--ui-accent--on-saturated,#fff))}:host([expanded]:not(.animating)){--rh-accordion--BoxShadow:var(--rh-accordion--BoxShadow--expanded,none)}:host{position:relative;display:block;outline:0;box-sizing:border-box;color:var(--rh-accordion--Color,var(--pfe-broadcasted--text,#3c3f42));box-shadow:var(--rh-accordion--BoxShadow,0 5px 4px transparent);--pfe-icon--color:var(--rh-accordion--Color,var(--pfe-broadcasted--text,#3c3f42));--pfe-icon--size:14px}:host([hidden]){display:none}:host *,:host *::before,:host *::after{box-sizing:border-box}#heading{margin:0}.pf-c-accordion__toggle{cursor:pointer;outline:0;position:relative;width:100%;margin:0;display:flex;align-items:center;justify-content:flex-start;gap:calc(var(--pfe-theme--container-padding, 1rem) * 1.5);padding:var(--rh-accordion--Padding,var(--pfe-theme--container-padding,1rem) calc(var(--pfe-theme--container-padding, 1rem) * 1.5));background-color:transparent;color:var(--rh-accordion--Color,var(--pfe-broadcasted--text,#3c3f42));text-align:left;font-family:var(--pfe-theme--font-family--heading,"Red Hat Display","RedHatDisplay","Overpass",Overpass,Arial,sans-serif);font-size:var(--rh-accordion--FontSize--header,var(--pf-global--FontSize--xl,1.25rem));font-weight:var(--rh-accordion--FontWeight--header,var(--pfe-theme--font-weight--normal,400));text-align:var(--rh-accordion--TextAlign,left);line-height:var(--pfe-theme--line-height,1.5);--_typography-offset:calc((1em * var(--pfe-theme--line-height, 1.5) - 1em) / 2);border-style:var(--pfe-theme--surface--border-style,solid);border-width:var(--rh-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px));border-color:var(--rh-accordion--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2));border-right-color:transparent;border-left-color:transparent}.pf-c-accordion__toggle::before{position:absolute;content:"";top:-2px;left:-2px;width:calc(100% + var(--pfe-theme--ui--border-width--active, 3px));height:calc(100% + var(--pfe-theme--ui--border-width--active, 3px));border-radius:var(--pfe-theme--ui--border-radius,2px);border:var(--pfe-theme--ui--border-width--md,2px) var(--pfe-theme--ui--border-style,solid) transparent}.pf-c-accordion__toggle:focus::before{border-color:#6b9ff0}.pf-c-accordion__toggle:focus:not(:focus-visible)::before{border:unset}.pf-c-accordion__toggle .pf-c-accordion__toggle-icon{--_typography-offset:calc((1em * var(--pfe-theme--line-height, 1.5) - var(--pfe-icon--size, 14px)) / 2)}.pf-c-accordion__toggle .pf-c-accordion__toggle-text{margin-top:calc(-1 * var(--_typography-offset, 5px));margin-bottom:calc(-1 * var(--_typography-offset, 5px))}.pf-c-accordion__toggle .pf-c-accordion__toggle-icon{margin-top:calc(var(--_typography-offset, 5px) / 4)}:host(:not(:first-of-type)) .pf-c-accordion__toggle{border-top-width:0}.pf-c-accordion__toggle::after{position:absolute;content:"";top:-1px;left:-1px;bottom:-1px;background-color:var(--rh-accordion--accent,transparent);width:calc(var(--rh-accordion--accent--width, var(--pfe-theme--surface--border-width--active, 3px)) - -1px);height:calc(100% - -1px - -1px);z-index:4;z-index:calc(var(--rh-accordion--ZIndex, 3) + 1)}.pf-c-accordion__toggle:hover,.pf-c-accordion__toggle:active,:host(:not([expanded])) .pf-c-accordion__toggle:focus{background-color:var(--rh-accordion--BackgroundColor--active,var(--pfe-theme--color--surface--lighter,#f0f0f0));--rh-accordion--Color:var(--rh-accordion--Color--active,var(--pfe-broadcasted--text,#3c3f42))}:host(:not([expanded])) .pf-c-accordion__toggle:hover,:host(:not([expanded])) .pf-c-accordion__toggle:active,:host(:not([expanded])) .pf-c-accordion__toggle:focus{--rh-accordion--accent:var(--rh-accordion--accent--active,var(--pfe-theme--color--ui-accent,#06c))}:host([on=dark]) .pf-c-accordion__toggle:hover,:host([on=dark]:not([expanded])) .pf-c-accordion__toggle:focus,:host([on=dark]) .pf-c-accordion__toggle:active{background-color:var(--rh-accordion--BackgroundColor--active,rgba(247,247,249,0.1));--rh-accordion--Color:var(--rh-accordion--Color--active,var(--pfe-broadcasted--text,#3c3f42))}:host([on=dark]:not([expanded])) .pf-c-accordion__toggle:hover,:host([on=dark]:not([expanded])) .pf-c-accordion__toggle:active,:host([on=dark]:not([expanded])) .pf-c-accordion__toggle:focus{--rh-accordion--accent:var(--rh-accordion--accent--active,var(--pfe-theme--color--ui-accent--on-dark,#73bcf7))}:host([on=saturated]) .pf-c-accordion__toggle:hover,:host([on=saturated]:not([expanded])) .pf-c-accordion__toggle:focus,:host([on=saturated]) .pf-c-accordion__toggle:active{background-color:var(--rh-accordion--BackgroundColor--active,rgba(0,0,0,0.2));--rh-accordion--Color:var(--rh-accordion--Color--active,var(--pfe-broadcasted--text,#3c3f42))}:host([on=saturated]:not([expanded])) .pf-c-accordion__toggle:hover,:host([on=saturated]:not([expanded])) .pf-c-accordion__toggle:active,:host([on=saturated]:not([expanded])) .pf-c-accordion__toggle:focus{--rh-accordion--accent:var(--rh-accordion--accent--active,var(--pfe-theme--color--ui-accent--on-saturated,#fff))}:host([expanded]) .pf-c-accordion__toggle,:host(.animating) .pf-c-accordion__toggle{border-bottom-width:0}:host([expanded]) .pf-c-accordion__toggle,:host(.animating) .pf-c-accordion__toggle,:host([disclosure]:not([disclosure=false])) .pf-c-accordion__toggle{border-right-color:var(--rh-accordion--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2));border-left-color:var(--rh-accordion--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2))}:host([disclosure]:not([disclosure=false])) .pf-c-accordion__toggle{gap:calc(var(--pfe-theme--container-padding, 1rem) / 2);font-family:var(--pfe-theme--font-family,"Red Hat Text","RedHatText","Overpass",Overpass,Arial,sans-serif);font-size:var(--rh-accordion--FontSize--header,var(--pf-global--FontSize--md,1rem));font-weight:var(--rh-accordion--FontWeight--header,var(--pfe-theme--font-weight--semi-bold,600))}.pf-c-accordion__toggle-wrapper{flex-grow:1;display:flex;align-items:center;justify-content:flex-start;gap:calc(var(--pfe-theme--container-padding, 1rem) * 1.5)}.pf-c-accordion__toggle-text{max-width:var(--rh-accordion--MaxWidth--content,80ch)}.pf-c-accordion__toggle-icon{align-self:flex-start;transition-property:transform;transition-duration:var(--pfe-theme--animation-speed,0.3s);transition-timing-function:var(--pfe-theme--animation-timing,cubic-bezier(0.465,0.183,0.153,0.946))}:host([expanded]) .pf-c-accordion__toggle-icon{transform:rotate(90deg)}:host([disclosure]:not([disclosure=false])) .pf-c-accordion__toggle-icon{order:-1}.pf-c-accordion__toggle-accents{flex-grow:1}`;
var rh_accordion_header_default = styles;

// rh-accordion-header.ts
import "@patternfly/pfe-icon";
var isPorHeader = (el) => el instanceof HTMLElement && !!el.tagName.match(/P|^H[1-6]/);
var AccordionHeaderChangeEvent = class extends ComposedEvent {
  constructor(expanded, toggle) {
    super("change");
    this.expanded = expanded;
    this.toggle = toggle;
  }
};
var RhAccordionHeader = class extends LitElement {
  constructor() {
    super();
    this.expanded = false;
    this.headingText = "";
    this.headingTag = "h3";
    this.slots = new SlotController(this, "accents", null);
    this.logger = new Logger(this);
    this.addEventListener("click", this._clickHandler);
  }
  get ariaExpandedState() {
    return String(!!this.expanded);
  }
  connectedCallback() {
    super.connectedCallback();
    this.hidden = true;
    this.id || (this.id = getRandomId("rh-accordion"));
  }
  async _init() {
    const header = await this._getHeaderElement();
    if (header !== this._generatedHtag) {
      this._generatedHtag = void 0;
    }
    this.headingTag = header?.tagName.toLowerCase() ?? "h3";
    this.headingText = header?.textContent?.trim() ?? "";
    this.hidden = false;
  }
  render() {
    const tag = unsafeStatic(this.headingTag);
    return staticH`
      <${tag} id="heading">${html`
        <button id="button"
          aria-expanded="${this.ariaExpandedState}"
          class="pf-c-accordion__toggle">
          <span class="pf-c-accordion__toggle-wrapper">
            <span class="pf-c-accordion__toggle-text" part="text">
              ${this.headingText || html`
              <slot></slot>
              `}
            </span>
            ${!this.slots.hasSlotted("accents") ? "" : html`
            <span class="pf-c-accordion__toggle-accents" part="accents">
              <slot name="accents"></slot>
            </span>
            `}
          </span>
          <pfe-icon
              icon="web-icon-caret-thin-right"
              on-fail="collapse"
              part="icon"
              class="pf-c-accordion__toggle-icon"
          ></pfe-icon>
        </button>`}
      </${tag}>
    `;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this._clickHandler);
  }
  async _getHeaderElement() {
    await this.updateComplete;
    if (!this.firstElementChild && !this.firstChild) {
      return void this.logger.warn("No header content provided");
    } else if (this.firstElementChild) {
      const [heading, ...otherContent] = this.slots.getSlotted().filter(isPorHeader);
      if (!heading) {
        return void this.logger.warn("No heading information was provided.");
      } else if (otherContent.length) {
        this.logger.warn("Heading currently only supports 1 tag; extra tags will be ignored.");
      }
      return heading;
    } else {
      if (!this._generatedHtag) {
        this.logger.warn("Header should contain at least 1 heading tag for correct semantics.");
      }
      this._generatedHtag = document.createElement("h3");
      if (this.firstChild?.nodeType === Node.TEXT_NODE) {
        this._generatedHtag.textContent = this.firstChild.textContent;
      } else {
        this._generatedHtag.textContent = this.textContent;
      }
      return this._generatedHtag;
    }
  }
  _clickHandler() {
    const expanded = !this.expanded;
    this.dispatchEvent(new AccordionHeaderChangeEvent(expanded, this));
    this.dispatchEvent(deprecatedCustomEvent("rh-accordion:change", { expanded, toggle: this }));
  }
  _expandedChanged() {
    this.button?.setAttribute("aria-expanded", this.ariaExpandedState);
  }
};
RhAccordionHeader.version = "{{version}}";
RhAccordionHeader.styles = [rh_accordion_header_default];
RhAccordionHeader.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
__decorateClass([
  property({ attribute: "aria-controls", reflect: true })
], RhAccordionHeader.prototype, "ariaControls", 2);
__decorateClass([
  property({ type: String, reflect: true })
], RhAccordionHeader.prototype, "disclosure", 2);
__decorateClass([
  observed,
  property({ type: Boolean, reflect: true })
], RhAccordionHeader.prototype, "expanded", 2);
__decorateClass([
  property({ reflect: true, attribute: "heading-text" })
], RhAccordionHeader.prototype, "headingText", 2);
__decorateClass([
  property({ reflect: true, attribute: "heading-tag" })
], RhAccordionHeader.prototype, "headingTag", 2);
__decorateClass([
  colorContextConsumer(),
  property({ reflect: true })
], RhAccordionHeader.prototype, "on", 2);
__decorateClass([
  query(".pf-c-accordion__toggle")
], RhAccordionHeader.prototype, "button", 2);
__decorateClass([
  initializer()
], RhAccordionHeader.prototype, "_init", 1);
__decorateClass([
  bound
], RhAccordionHeader.prototype, "_getHeaderElement", 1);
__decorateClass([
  bound
], RhAccordionHeader.prototype, "_clickHandler", 1);
RhAccordionHeader = __decorateClass([
  customElement("rh-accordion-header"),
  pfelement()
], RhAccordionHeader);

// rh-accordion-panel.ts
import { LitElement as LitElement2, html as html2 } from "lit";
import { customElement as customElement2, property as property2 } from "lit/decorators.js";
import { colorContextConsumer as colorContextConsumer2, pfelement as pfelement2 } from "@patternfly/pfe-core/decorators.js";
import { getRandomId as getRandomId2 } from "@patternfly/pfe-core/functions/random.js";
import { PfeCollapsePanel } from "@patternfly/pfe-collapse/pfe-collapse-panel.js";

// rh-accordion-panel.css
import { css as css2 } from "lit";
var styles2 = css2`:host{transition-property:box-shadow,border;transition-timing-function:var(--pfe-theme--animation-timing,cubic-bezier(0.465,0.183,0.153,0.946));transition-duration:calc(var(--pfe-theme--animation-speed, 0.3s) / 2)}:host([expanded]),:host(.animating){background-color:var(--rh-accordion--BackgroundColor--expanded,var(--pfe-theme--color--surface--lightest,#fff));--rh-accordion--Color:var(--rh-accordion--Color--expanded,var(--pfe-broadcasted--text,#3c3f42));--rh-accordion--accent:var(--rh-accordion--accent--expanded,var(--pfe-theme--color--ui-accent,#06c))}:host([expanded]:not(.animating)){--rh-accordion--BoxShadow:var(--rh-accordion--BoxShadow--expanded,0 5px 4px rgba(140,140,140,0.35))}:host([on=dark][expanded]),:host([on=dark].animating){background-color:var(--rh-accordion--BackgroundColor--expanded,rgba(247,247,249,0.1));--rh-accordion--Color:var(--rh-accordion--Color--expanded,var(--pfe-broadcasted--text--on-dark,#fff));--rh-accordion--accent:var(--rh-accordion--accent--expanded,var(--pfe-theme--color--ui-accent--on-dark,#73bcf7))}:host([expanded]:not(.animating)){--rh-accordion--BoxShadow:var(--rh-accordion--BoxShadow--expanded,none)}:host([on=saturated][expanded]),:host([on=saturated].animating){background-color:var(--rh-accordion--BackgroundColor--expanded,rgba(0,0,0,0.2));--rh-accordion--Color:var(--rh-accordion--Color--expanded,var(--pfe-broadcasted--text--on-saturated,#fff));--rh-accordion--accent:var(--rh-accordion--accent--expanded,var(--pfe-theme--color--ui-accent--on-saturated,#fff))}:host([expanded]:not(.animating)){--rh-accordion--BoxShadow:var(--rh-accordion--BoxShadow--expanded,none)}:host{display:none;overflow:hidden;will-change:height;border-color:transparent;opacity:0;position:relative;box-sizing:border-box;width:100%;z-index:0;margin:0;padding:0;color:var(--rh-accordion--Color,var(--pfe-broadcasted--text,#3c3f42));box-shadow:var(--rh-accordion--BoxShadow,0 5px 4px transparent);box-sizing:border-box;border-style:var(--pfe-theme--surface--border-style,solid);border-color:var(--rh-accordion--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2));border-width:var(--rh-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px));border-top-width:0;border-bottom-width:0}:host *,:host *::before,:host *::after{box-sizing:border-box}:host ::slotted(*){--rh-accordion--BoxShadow:none}:host::after{position:absolute;content:"";bottom:calc(-1 * var(--rh-accordion--BorderWidth, var(--pfe-theme--surface--border-width, 1px)));left:calc(-1 * var(--rh-accordion--BorderWidth, var(--pfe-theme--surface--border-width, 1px)));background-color:var(--rh-accordion--accent,transparent);width:calc(var(--rh-accordion--accent--width, var(--pfe-theme--surface--border-width--active, 3px)) - calc(-1 * var(--rh-accordion--BorderWidth, var(--pfe-theme--surface--border-width, 1px))));height:calc(100% - calc(-1 * var(--rh-accordion--BorderWidth, var(--pfe-theme--surface--border-width, 1px))));z-index:calc(var(--rh-accordion--ZIndex, 3) + 1)}.pf-c-accordion__expanded-content{position:relative;display:block;width:100%;padding:var(--pfe-theme--container-spacer,1rem);display:inline-block;padding:var(--rh-accordion--Padding,var(--pfe-theme--container-padding,1rem) calc(var(--pfe-theme--container-padding, 1rem) * 1.5))}.pf-c-accordion__expanded-content::after{clear:both;content:"";display:table}:host([disclosure=true]) .pf-c-accordion__expanded-content{padding:var(--rh-accordion__panel-container--Padding,0 calc(var(--pfe-theme--container-padding, 1rem) * 3) calc(var(--pfe-theme--container-padding, 1rem)) calc(var(--pfe-theme--container-padding, 1rem) * 1.5))}:host(:not([full-width])) .pf-c-accordion__expanded-content{max-width:var(--rh-accordion--MaxWidth--content,80ch)}:host(.animating){border-left-color:var(--rh-accordion--accent,transparent);opacity:1}:host(.animating[hidden]),:host([expanded]:not(.animating)){margin-bottom:0;border-bottom-width:var(--rh-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px));display:block !important;position:relative;opacity:1}:host([expanded]:not(.animating)){overflow:visible}:host{transition-property:box-shadow,border;transition-timing-function:var(--pfe-theme--animation-timing,cubic-bezier(0.465,0.183,0.153,0.946));transition-duration:calc(var(--pfe-theme--animation-speed, 0.3s) / 2)}:host([expanded]),:host(.animating){--rh-accordion--BackgroundColor:var(--rh-accordion--BackgroundColor--expanded,var(--pfe-theme--color--surface--lightest,#fff));--rh-accordion--Color:var(--rh-accordion--Color--expanded,var(--pfe-broadcasted--text,#3c3f42));--rh-accordion--accent:var(--rh-accordion--accent--expanded,var(--pfe-theme--color--ui-accent,#06c))}:host([expanded]:not(.animating)){--rh-accordion--BoxShadow:var(--rh-accordion--BoxShadow--expanded,0 5px 4px rgba(140,140,140,0.35))}:host([on=dark][expanded]),:host([on=dark].animating){--rh-accordion--BackgroundColor:var(--rh-accordion--BackgroundColor--expanded,rgba(247,247,249,0.1));--rh-accordion--Color:var(--rh-accordion--Color--expanded,var(--pfe-broadcasted--text--on-dark,#fff));--rh-accordion--accent:var(--rh-accordion--accent--expanded,var(--pfe-theme--color--ui-accent--on-dark,#73bcf7))}:host([expanded]:not(.animating)){--rh-accordion--BoxShadow:var(--rh-accordion--BoxShadow--expanded,none)}:host([on=saturated][expanded]),:host([on=saturated].animating){--rh-accordion--BackgroundColor:var(--rh-accordion--BackgroundColor--expanded,rgba(0,0,0,0.2));--rh-accordion--Color:var(--rh-accordion--Color--expanded,var(--pfe-broadcasted--text--on-saturated,#fff));--rh-accordion--accent:var(--rh-accordion--accent--expanded,var(--pfe-theme--color--ui-accent--on-saturated,#fff))}:host([expanded]:not(.animating)){--rh-accordion--BoxShadow:var(--rh-accordion--BoxShadow--expanded,none)}`;
var rh_accordion_panel_default = styles2;

// rh-accordion-panel.ts
import "@patternfly/pfe-core";
var RhAccordionPanel = class extends LitElement2 {
  constructor() {
    super(...arguments);
    this.expanded = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.id || (this.id = getRandomId2("rh-accordion-panel"));
    this.setAttribute("role", "region");
  }
  render() {
    return html2`
      <div tabindex="-1">
        <div id="container" class="pf-c-accordion__expanded-content" part="container">
          <slot></slot>
        </div>
      </div>
    `;
  }
};
RhAccordionPanel.version = "{{version}}";
RhAccordionPanel.styles = [
  ...PfeCollapsePanel.styles,
  rh_accordion_panel_default
];
__decorateClass([
  property2({ type: String, reflect: true })
], RhAccordionPanel.prototype, "disclosure", 2);
__decorateClass([
  property2({ type: Boolean, reflect: true })
], RhAccordionPanel.prototype, "expanded", 2);
__decorateClass([
  property2({ attribute: "aria-labelledby", reflect: true })
], RhAccordionPanel.prototype, "ariaLabelledby", 2);
__decorateClass([
  colorContextConsumer2(),
  property2({ reflect: true })
], RhAccordionPanel.prototype, "on", 2);
RhAccordionPanel = __decorateClass([
  customElement2("rh-accordion-panel"),
  pfelement2()
], RhAccordionPanel);

// rh-accordion.css
import { css as css3 } from "lit";
var styles3 = css3`:host{transition-property:box-shadow,border;transition-timing-function:var(--pfe-theme--animation-timing,cubic-bezier(0.465,0.183,0.153,0.946));transition-duration:calc(var(--pfe-theme--animation-speed, 0.3s) / 2)}:host([expanded]),:host(.animating){background-color:var(--rh-accordion--BackgroundColor--expanded,var(--pfe-theme--color--surface--lightest,#fff));--rh-accordion--Color:var(--rh-accordion--Color--expanded,var(--pfe-broadcasted--text,#3c3f42));--rh-accordion--accent:var(--rh-accordion--accent--expanded,var(--pfe-theme--color--ui-accent,#06c))}:host([expanded]:not(.animating)){--rh-accordion--BoxShadow:var(--rh-accordion--BoxShadow--expanded,0 5px 4px rgba(140,140,140,0.35))}:host([on=dark][expanded]),:host([on=dark].animating){background-color:var(--rh-accordion--BackgroundColor--expanded,rgba(247,247,249,0.1));--rh-accordion--Color:var(--rh-accordion--Color--expanded,var(--pfe-broadcasted--text--on-dark,#fff));--rh-accordion--accent:var(--rh-accordion--accent--expanded,var(--pfe-theme--color--ui-accent--on-dark,#73bcf7))}:host([expanded]:not(.animating)){--rh-accordion--BoxShadow:var(--rh-accordion--BoxShadow--expanded,none)}:host([on=saturated][expanded]),:host([on=saturated].animating){background-color:var(--rh-accordion--BackgroundColor--expanded,rgba(0,0,0,0.2));--rh-accordion--Color:var(--rh-accordion--Color--expanded,var(--pfe-broadcasted--text--on-saturated,#fff));--rh-accordion--accent:var(--rh-accordion--accent--expanded,var(--pfe-theme--color--ui-accent--on-saturated,#fff))}:host([expanded]:not(.animating)){--rh-accordion--BoxShadow:var(--rh-accordion--BoxShadow--expanded,none)}:host{display:block;position:relative;overflow:hidden;margin:0;width:var(--rh-accordion--Width,100%)}:host{overflow:visible}[hidden],:host([hidden]){display:none !important}`;
var rh_accordion_default = styles3;

// rh-accordion.ts
function isRhAccordionPanel(el) {
  return el instanceof Element && el.tagName.toLowerCase() === "rh-accordion-panel";
}
var AccordionExpandEvent = class extends ComposedEvent2 {
  constructor(toggle, panel) {
    super("expand");
    this.toggle = toggle;
    this.panel = panel;
  }
};
var AccordionCollapseEvent = class extends ComposedEvent2 {
  constructor(toggle, panel) {
    super("collapse");
    this.toggle = toggle;
    this.panel = panel;
  }
};
var CSS_TIMING_UNITS_RE = /^[0-9.]+(?<unit>[a-zA-Z]+)/g;
var RhAccordion = class extends LitElement3 {
  constructor() {
    super(...arguments);
    this.on = "light";
    this.history = false;
    this.expandedIndex = [];
    this._updateHistory = true;
    this.expandedSets = /* @__PURE__ */ new Set();
    this.initialized = false;
    this.logger = new Logger2(this);
    this.styles = getComputedStyle(this);
    this.transitionDuration = this.getAnimationDuration();
  }
  static isHeader(element) {
    return element instanceof RhAccordionHeader;
  }
  static isPanel(element) {
    return element instanceof RhAccordionPanel;
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("change", this._changeHandler);
    this.addEventListener("keydown", this._keydownHandler);
  }
  render() {
    return html3`
      <slot></slot>
    `;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("popstate", this._updateStateFromURL);
  }
  async _init() {
    if (!this.initialized) {
      this._manualDisclosure = this.getAttribute("disclosure");
      await this.updateComplete;
      this.initialized = true;
    }
    this.updateAccessibility();
    this._updateStateFromURL();
  }
  _changeHandler(event) {
    if (this.classList.contains("animating")) {
      return;
    }
    const index = this._getIndex(event.target);
    if (event.expanded) {
      this.expand(index);
    } else {
      this.collapse(index);
    }
    this._updateURLHistory();
  }
  _expandHeader(header) {
    const index = this._getIndex(header);
    this.expandedSets.add(index);
    header.expanded = true;
  }
  async _expandPanel(panel) {
    if (!panel) {
      this.logger.error(`Trying to expand a panel that doesn't exist.`);
      return;
    }
    if (panel.expanded) {
      return;
    }
    panel.expanded = true;
    panel.hidden = false;
    await panel.updateComplete;
    const rect = panel.getBoundingClientRect();
    this._animate(panel, 0, rect.height);
  }
  _collapseHeader(header) {
    const index = this._getIndex(header);
    this.expandedSets.delete(index);
    header.expanded = false;
  }
  async _collapsePanel(panel) {
    if (!panel) {
      this.logger.error(`Trying to collapse a panel that doesn't exist`);
      return;
    }
    await panel.updateComplete;
    if (!panel.expanded) {
      return;
    }
    const rect = panel.getBoundingClientRect();
    panel.expanded = false;
    panel.hidden = true;
    this._animate(panel, rect.height, 0);
  }
  getAnimationDuration() {
    if ("computedStyleMap" in this) {
      return this.computedStyleMap().get("transition-duration")?.to("ms").value;
    } else {
      const { transitionDuration } = this.styles;
      const groups = CSS_TIMING_UNITS_RE.exec(transitionDuration)?.groups;
      if (!groups) {
        return 0;
      }
      const parsed = parseFloat(transitionDuration);
      if (groups.unit === "s") {
        return parsed * 1e3;
      } else {
        return parsed;
      }
    }
  }
  async _animate(panel, start, end) {
    if (panel) {
      const header = panel.previousElementSibling;
      const transitionDuration = this.getAnimationDuration();
      if (transitionDuration) {
        this.transitionDuration = transitionDuration;
      }
      const duration = this.transitionDuration ?? 0;
      header?.classList.add("animating");
      panel.classList.add("animating");
      const animation = panel.animate({ height: [`${start}px`, `${end}px`] }, { duration });
      animation.play();
      await animation.finished;
      header?.classList.remove("animating");
      panel.classList.remove("animating");
      panel.style.removeProperty("height");
      panel.hidden = !panel.expanded;
    }
  }
  async _keydownHandler(evt) {
    const currentHeader = evt.target;
    if (!RhAccordion.isHeader(currentHeader)) {
      return;
    }
    let newHeader;
    switch (evt.key) {
      case "ArrowDown":
        evt.preventDefault();
        newHeader = this._nextHeader();
        break;
      case "ArrowUp":
        evt.preventDefault();
        newHeader = this._previousHeader();
        break;
      case "Home":
        evt.preventDefault();
        newHeader = this._firstHeader();
        break;
      case "End":
        evt.preventDefault();
        newHeader = this._lastHeader();
        break;
      default:
        return;
    }
    newHeader?.focus?.();
  }
  _allHeaders() {
    return Array.from(this.children).filter(RhAccordion.isHeader);
  }
  _allPanels() {
    return Array.from(this.children).filter(RhAccordion.isPanel);
  }
  _panelForHeader(header) {
    const next = header.nextElementSibling;
    if (!next) {
      return;
    }
    if (!isRhAccordionPanel(next)) {
      this.logger.error("Sibling element to a header needs to be a panel");
      return;
    }
    return next;
  }
  _previousHeader() {
    const headers = this._allHeaders();
    const newIndex = headers.findIndex((header) => header.matches(":focus,:focus-within")) - 1;
    return headers[(newIndex + headers.length) % headers.length];
  }
  _nextHeader() {
    const headers = this._allHeaders();
    const newIndex = headers.findIndex((header) => header.matches(":focus,:focus-within")) + 1;
    return headers[newIndex % headers.length];
  }
  _firstHeader() {
    const headers = this._allHeaders();
    return headers[0];
  }
  _lastHeader() {
    const headers = this._allHeaders();
    return headers[headers.length - 1];
  }
  async _expandedIndexChanged(oldVal, newVal) {
    await this.updateComplete;
    if (oldVal === newVal || !Array.isArray(newVal)) {
      return;
    }
    [...newVal].reverse().forEach((i) => this.expand(i - 1));
  }
  _getIndex(_el) {
    if (RhAccordion.isHeader(_el)) {
      const headers = this._allHeaders();
      return headers.findIndex((header) => header.id === _el.id);
    }
    if (RhAccordion.isPanel(_el)) {
      const panels = this._allPanels();
      return panels.findIndex((panel) => panel.id === _el.id);
    }
    this.logger.warn("The _getIndex method expects to receive a header or panel element.");
    return -1;
  }
  _getIndexesFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has(this.id)) {
      const params = urlParams.get(this.id);
      const indexes = (params ?? "").split("-");
      if (indexes.length < 0) {
        return [];
      }
      return indexes.map((item) => parseInt(item.trim(), 10) - 1);
    }
  }
  _updateURLHistory() {
    if (!this.history || !this._updateHistory) {
      return;
    }
    if (!this.id) {
      this.logger.error(`The history feature cannot update the URL without an ID added to the rh-accordion tag.`);
      return;
    }
    const openIndexes = Array.from(this.expandedSets, (item) => item + 1).sort((a, b) => a - b).join("-");
    const url = new URL(window.location.href);
    if (this.expandedSets.size > 0) {
      url.searchParams.set(this.id, openIndexes);
    } else {
      url.searchParams.delete(this.id);
    }
    history.replaceState({}, "", url.toString());
  }
  _updateStateFromURL() {
    const indexesFromURL = this._getIndexesFromURL() ?? [];
    this._updateHistory = false;
    indexesFromURL.forEach((idx) => this.expand(idx));
    this._updateHistory = true;
  }
  updateAccessibility() {
    const headers = this._allHeaders();
    headers.forEach((header) => {
      const panel = this._panelForHeader(header);
      if (panel) {
        header.setAttribute("aria-controls", panel.id);
        panel.setAttribute("aria-labelledby", header.id);
        panel.hidden = !panel.expanded;
      }
    });
    if (headers.length === 1) {
      this.disclosure = this._manualDisclosure ?? "true";
    } else if (headers.length > 1) {
      this.disclosure = "false";
    }
  }
  toggle(index) {
    const headers = this._allHeaders();
    const header = headers[index];
    if (!header.expanded) {
      this.expand(index);
    } else {
      this.collapse(index);
    }
  }
  expand(index) {
    if (index == null) {
      return;
    }
    index = parseInt(`${index}`, 10);
    const headers = this._allHeaders();
    const toggle = headers[index];
    if (!toggle) {
      return;
    }
    const panel = this._panelForHeader(toggle);
    if (!toggle || !panel) {
      return;
    }
    this._expandHeader(toggle);
    this._expandPanel(panel);
    toggle.focus();
    this.dispatchEvent(new AccordionExpandEvent(toggle, panel));
    this.dispatchEvent(deprecatedCustomEvent2("rh-accordion:expand", { toggle, panel }));
  }
  expandAll() {
    const headers = this._allHeaders();
    const panels = this._allPanels();
    headers.forEach((header) => this._expandHeader(header));
    panels.forEach((panel) => this._expandPanel(panel));
  }
  collapse(index) {
    const headers = this._allHeaders();
    const panels = this._allPanels();
    const toggle = headers[index];
    const panel = panels[index];
    if (!toggle || !panel) {
      return;
    }
    this._collapseHeader(toggle);
    this._collapsePanel(panel);
    this.dispatchEvent(new AccordionCollapseEvent(toggle, panel));
    this.dispatchEvent(deprecatedCustomEvent2("rh-accordion:collapse", { toggle, panel }));
  }
  collapseAll() {
    const headers = this._allHeaders();
    const panels = this._allPanels();
    headers.forEach((header) => this._collapseHeader(header));
    panels.forEach((panel) => this._collapsePanel(panel));
  }
};
RhAccordion.version = "{{version}}";
RhAccordion.styles = [rh_accordion_default];
__decorateClass([
  colorContextProvider(),
  property3({ reflect: true, attribute: "color-palette" })
], RhAccordion.prototype, "colorPalette", 2);
__decorateClass([
  deprecation({ alias: "colorPalette", attribute: "color" })
], RhAccordion.prototype, "color", 2);
__decorateClass([
  colorContextConsumer3(),
  property3({ reflect: true })
], RhAccordion.prototype, "on", 2);
__decorateClass([
  cascades("rh-accordion-header", "rh-accordion-panel"),
  property3({ type: String, reflect: true })
], RhAccordion.prototype, "disclosure", 2);
__decorateClass([
  observed2,
  property3({ type: Boolean })
], RhAccordion.prototype, "history", 2);
__decorateClass([
  observed2,
  property3({ attribute: "expanded-index", converter: NumberListConverter })
], RhAccordion.prototype, "expandedIndex", 2);
__decorateClass([
  state()
], RhAccordion.prototype, "_updateHistory", 2);
__decorateClass([
  initializer2()
], RhAccordion.prototype, "_init", 1);
__decorateClass([
  bound2
], RhAccordion.prototype, "_changeHandler", 1);
__decorateClass([
  bound2
], RhAccordion.prototype, "_getIndexesFromURL", 1);
__decorateClass([
  bound2
], RhAccordion.prototype, "_updateURLHistory", 1);
__decorateClass([
  bound2
], RhAccordion.prototype, "_updateStateFromURL", 1);
RhAccordion = __decorateClass([
  customElement3("rh-accordion"),
  pfelement3()
], RhAccordion);
export {
  AccordionCollapseEvent,
  AccordionExpandEvent,
  RhAccordion
};
//# sourceMappingURL=rh-accordion.js.map
