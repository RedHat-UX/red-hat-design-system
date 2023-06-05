var _RhCta_instances, _RhCta_initializing, _RhCta_dir, _RhCta_logger, _RhCta_isDefault_get;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { DirController } from '../../lib/DirController.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { css } from "lit";
const style = css `:host{display:inline-flex;position:relative;z-index:0;align-items:center;max-width:max-content}::slotted(*){vertical-align:middle;white-space:break-spaces;display:inline!important;color:inherit!important;font-family:inherit!important;font-size:inherit!important;font-weight:inherit!important;line-height:inherit!important;text-decoration:var(--rh-cta-text-decoration);position:relative;z-index:2}::slotted(button),::slotted(input){background-color:transparent;border:medium none;margin:0;padding:0;text-align:left}#container.icon ::slotted(*){padding-inline-end:calc(5px + var(--pf-icon--size))!important}#container.svg ::slotted(*){padding-inline-end:calc(var(--rh-space-md,8px) + var(--_arrow-size))!important}#container{white-space:nowrap;color:var(--rh-cta-color);font-family:var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);font-size:var(--rh-font-size-text-xl, 1.125rem);font-weight:var(--rh-font-weight-bold,600);line-height:var(--rh-line-height-lg, 1.5);background-color:var(--rh-cta-background-color);border-color:var(--rh-cta-border-color,transparent);border-radius:var(--rh-border-radius-default,3px);border-width:var(--rh-border-width-sm,1px);--_context-background-color:var(--rh-cta-background-color)!important;--_arrow-size:13px;--_arrow-plus-padding:calc(var(--rh-space-md, 8px) + var(--_arrow-size));--pf-icon--size:var(--rh-font-size-text-xl, 1.125rem);--_pf-icon-plus-padding:calc(5px + var(--pf-icon--size))}.rtl{text-align:right}#container:after{--_offset:2px;content:"";display:block;height:calc(100% - var(--_offset) * 2);width:calc(100% - var(--_offset) * 2);box-sizing:border-box;position:absolute;top:var(--_offset);left:var(--_offset);border-width:var(--rh-border-width-sm,1px);border-radius:2px;outline:0;pointer-events:none}pf-icon{vertical-align:middle;margin-inline-start:calc(0px - var(--pf-icon--size))}svg{vertical-align:middle;margin-inline-start:calc(0px - var(--_arrow-size));display:inline;fill:currentcolor;width:var(--_arrow-size);height:var(--_arrow-size);translate:0 0;transition:translate var(--_trans);--_trans:var(--rh-animation-speed, 0.3s) var(--rh-animation-timing, cubic-bezier(0.465, 0.183, 0.153, 0.946))}#container.rtl svg{rotate:180deg}::slotted(:focus),:host(:is(:focus,:focus-within)),:host(:is(:focus,:focus-within)) ::slotted(*){outline:0!important}:host(:is(:focus,:focus-within)){--rh-cta-background-color:var(--rh-cta-focus-background-color)}:host(:is(:focus,:focus-within)) #container{border-color:var(--rh-cta-focus-border-color);background-color:var(--rh-cta-focus-container-background-color,var(--rh-cta-focus-background-color));--rh-cta-color:var(--rh-cta-focus-color);--rh-cta-text-decoration:var(--rh-cta-focus-text-decoration)}:host(:is(:focus,:focus-within)) #container:after{border-style:solid;border-color:var(--rh-cta-focus-inner-border-color)}:host(:hover) #container{color:var(--rh-cta-hover-color);border-color:var(--rh-cta-hover-border-color);background-color:var(--rh-cta-hover-background-color);--rh-cta-text-decoration:var(--rh-cta-hover-text-decoration)}:host(:hover) #container svg{translate:3px 0}:host(:hover) #container.rtl svg{translate:-3px 0}:host(:active){background-color:var(--rh-cta-active-background-color)}:host(:active) #container{--rh-cta-background-color:var(--rh-cta-active-container-background-color,\n    var(--rh-cta-active-background-color))}:host(:active) #container:after{border-style:solid;border-color:var(--rh-cta-active-inner-border-color)!important}:host([variant]) #container{font-size:var(--rh-font-size-body-text-md, 1rem);border-radius:var(--rh-border-radius-default,3px);border-width:var(--rh-border-width-sm,1px);padding:var(--rh-space-lg,16px) 0!important}:host([variant]) #container ::slotted(*){padding:var(--rh-space-lg,16px) var(--rh-space-xl,24px)!important}:host([variant$=ary]) #container ::slotted(*){font-size:var(--rh-cta-font-size-priority, var(--rh-font-size-text-lg, 1rem));text-align:center}:host([variant]) #container.icon ::slotted(*){padding-inline-end:calc(var(--_pf-icon-plus-padding) + var(--rh-space-xl,24px))!important}:host([variant]) #container.svg ::slotted(*){padding-inline-end:calc(var(--_arrow-plus-padding) + var(--rh-space-xl,24px))!important}:host([variant]) #container pf-icon{margin-inline-start:calc(-24px - var(--_arrow-size));margin-inline-end:var(--rh-space-xl,24px)}:host([variant]) #container svg{margin-inline-start:calc(-24px - var(--pf-icon--size));margin-inline-end:var(--rh-space-xl,24px);display:none}:host(:not([variant])){--rh-cta-background-color:transparent;--rh-cta-border-color:transparent;--rh-cta-color:var(--rh-color-interactive-blue, #0066cc);--rh-cta-hover-background-color:transparent;--rh-cta-hover-border-color:transparent;--rh-cta-hover-inner-border-color:transparent;--rh-cta-hover-color:var(--rh-color-interactive-blue-darkest, #004080);--rh-cta-hover-text-decoration:none;--rh-cta-focus-background-color:transparent;--rh-cta-focus-container-background-color:#0066cc1a;--rh-cta-focus-border-color:transparent;--rh-cta-focus-inner-border-color:transparent;--rh-cta-focus-color:var(--rh-color-interactive-blue-darker, #0066cc);--rh-cta-focus-text-decoration:none;--rh-cta-active-container-background-color:#0066cc1a;--rh-cta-active-inner-border-color:transparent;--rh-cta-active-text-decoration:none}:host(:not([variant])) .dark{--rh-cta-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--rh-cta-hover-color:var(--rh-color-interactive-blue-lightest, #bee1f4);--rh-cta-focus-container-background-color:#73bcf740;--rh-cta-focus-border-color:transparent;--rh-cta-focus-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--rh-cta-focus-inner-border-color:transparent;--rh-cta-focus-text-decoration:none;--rh-cta-active-container-background-color:#73bcf740;--rh-cta-active-text-decoration:none}:host([variant=primary]) #container{border-style:solid;--rh-cta-background-color:var(--rh-color-brand-red-on-light, #ee0000);--rh-cta-border-color:var(--rh-color-brand-red-on-light, #ee0000);--rh-cta-color:var(--rh-color-text-primary-on-dark, #ffffff);--rh-cta-hover-background-color:var(--rh-color-brand-red-dark, #be0000);--rh-cta-hover-border-color:var(--rh-color-brand-red-dark, #be0000);--rh-cta-hover-color:var(--rh-color-text-primary-on-dark, #ffffff);--rh-cta-focus-background-color:var(--rh-color-brand-red-on-light, #ee0000);--rh-cta-focus-border-color:var(--rh-color-brand-red-on-light, #ee0000);--rh-cta-focus-color:var(--rh-color-text-primary-on-dark, #ffffff);--rh-cta-focus-inner-border-color:var(--rh-color-text-primary-on-dark, #ffffff);--rh-cta-active-background-color:var(--rh-color-brand-red-dark, #be0000);--rh-cta-active-inner-border-color:var(--rh-color-text-primary-on-dark, #ffffff)}:host([variant=primary]) #container.dark{--rh-cta-hover-border-color:var(--rh-color-brand-red-dark, #be0000)}:host([variant=secondary]) #container{border-style:solid;--rh-cta-background-color:transparent;--rh-cta-border-color:var(--rh-color-border-strong-on-light, #151515);--rh-cta-color:var(--rh-color-text-primary-on-light, #151515);--rh-cta-hover-background-color:var(--rh-color-surface-darkest, #151515);--rh-cta-hover-border-color:var(--rh-color-border-strong-on-light, #151515);--rh-cta-hover-color:var(--rh-color-text-primary-on-dark, #ffffff);--rh-cta-focus-background-color:var(--rh-color-surface-lighter, #f2f2f2);--rh-cta-focus-border-color:var(--rh-color-border-strong-on-light, #151515);--rh-cta-focus-color:var(--rh-color-surface-darkest, #151515);--rh-cta-focus-inner-border-color:var(--rh-color-border-strong-on-light, #151515);--rh-cta-active-color:var(--rh-color-text-primary-on-dark, #ffffff);--rh-cta-active-background-color:var(--rh-color-border-strong-on-light, #151515);--rh-cta-active-inner-border-color:var(--rh-color-surface-light, #e0e0e0)}:host([variant=secondary]) #container.dark{--rh-cta-border-color:var(--rh-color-border-strong-on-dark, #ffffff);--rh-cta-color:var(--rh-color-text-primary-on-dark, #ffffff);--rh-cta-hover-background-color:var(--rh-color-surface-lightest, #ffffff);--rh-cta-hover-border-color:var(--rh-color-border-strong-on-dark, #ffffff);--rh-cta-hover-color:var(--rh-color-text-primary-on-light, #151515);--rh-cta-focus-background-color:var(--rh-color-surface-dark, #383838);--rh-cta-focus-border-color:var(--rh-color-border-strong-on-dark, #ffffff);--rh-cta-focus-inner-border-color:var(--rh-color-border-strong-on-dark, #ffffff);--rh-cta-focus-color:var(--rh-color-text-primary-on-dark, #ffffff);--rh-cta-active-color:var(--rh-color-text-primary-on-light, #151515);--rh-cta-active-background-color:var(--rh-color-surface-lightest, #ffffff);--rh-cta-active-inner-border-color:var(--rh-color-border-strong-on-light, #151515)}:host([variant=brick]) #container{border-style:solid;font-family:var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);font-weight:var(--rh-font-weight-body-text-regular,400);--rh-cta-background-color:transparent;--rh-cta-border-color:var(--rh-color-border-subtle-on-light, #c7c7c7);--rh-cta-color:var(--rh-color-interactive-blue-darker, #0066cc);--rh-cta-hover-background-color:var(--rh-color-surface-lighter, #f2f2f2);--rh-cta-hover-border-color:var(--rh-color-border-subtle-on-light, #c7c7c7);--rh-cta-hover-color:var(--rh-color-interactive-blue-darkest, #004080);--rh-cta-hover-text-decoration:underline;--rh-cta-focus-color:var(--rh-color-interactive-blue-darker, #0066cc);--rh-cta-focus-border-color:var(--rh-color-border-subtle-on-light, #c7c7c7);--rh-cta-focus-inner-border-color:var(--rh-color-border-subtle-on-light, #c7c7c7);--rh-cta-focus-text-decoration:none;--rh-cta-active-background-color:var(--rh-color-surface-lighter, #f2f2f2);--rh-cta-active-inner-border-color:var(--rh-color-border-subtle-on-light, #c7c7c7);--rh-cta-active-text-decoration:underline}:host([variant=brick]) #container.dark{--rh-cta-border-color:var(--rh-color-border-subtle-on-dark, #707070);--rh-cta-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--rh-cta-hover-background-color:var(--rh-color-surface-darker, #1f1f1f);--rh-cta-hover-border-color:var(--rh-color-border-subtle-on-dark, #707070);--rh-cta-hover-color:var(--rh-color-interactive-blue-lightest, #bee1f4);--rh-cta-hover-text-decoration:underline;--rh-cta-focus-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--rh-cta-focus-border-color:var(--rh-color-border-subtle-on-dark, #707070);--rh-cta-focus-inner-border-color:var(--rh-color-border-subtle-on-dark, #707070);--rh-cta-focus-text-decoration:none;--rh-cta-active-background-color:var(--rh-color-surface-darker, #1f1f1f);--rh-cta-active-inner-border-color:var(--rh-color-border-subtle-on-dark, #707070);--rh-cta-active-text-decoration:underline}@supports not (translate:0 0){svg{transform:translate(0,0);transition:transform var(--_trans)}#container.rtl svg{transform:translate(0,0) rotate(180deg)}:host(:hover) #container svg{transform:translate(3px,0)}:host(:hover) #container.rtl svg{transform:translate(-3px,0) rotate(180deg)}}`;
import '@patternfly/elements/pf-icon/pf-icon.js';
const supportedTags = ['a', 'button']; // add input later
function isSupportedContent(el) {
    return !!el && supportedTags.includes(el.localName);
}
const CONTENT = new WeakMap();
function contentInitialized(el) {
    return !!el && !!CONTENT.get(el);
}
function isButton(element) {
    return element.tagName.toLowerCase() === 'button';
}
/**
 * Call to action stands out from regular hypertext links, and is used for linking users to webpages.
 *
 * @summary Directs users to other pages or displays extra content
 *
 * @slot - We expect an anchor tag, `<a>` with an `href`, to be the first child inside `rh-cta` element. Less preferred but allowed for specific use-cases include: `<button>` (note however that the `button` tag is not supported for the default CTA styles).
 *
 * @csspart container - container element for slotted CTA
 *
 */
let RhCta = class RhCta extends LitElement {
    constructor() {
        super(...arguments);
        _RhCta_instances.add(this);
        /** The slotted `<a>` or `<button>` element */
        this.cta = null;
        /** true while the initializer method is running - to prevent double-execution */
        _RhCta_initializing.set(this, false);
        /** Is the element in an RTL context? */
        _RhCta_dir.set(this, new DirController(this));
        _RhCta_logger.set(this, new Logger(this));
    }
    render() {
        const rtl = __classPrivateFieldGet(this, _RhCta_dir, "f").dir === 'rtl';
        const { on = '' } = this;
        const svg = !!__classPrivateFieldGet(this, _RhCta_instances, "a", _RhCta_isDefault_get);
        const icon = !!this.icon;
        const iconOrSvg = !!__classPrivateFieldGet(this, _RhCta_instances, "a", _RhCta_isDefault_get) || !!this.icon;
        return html `
      <span id="container" part="container" class="${classMap({ rtl, [on]: !!on, icon, svg })}">
        <slot @slotchange=${this.firstUpdated}></slot>${!iconOrSvg ? '' : this.icon ? html `
        <pf-icon icon=${this.icon} size="md" set="far"></pf-icon>` : html `<svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.56 31.56" focusable="false" width="1em" aria-hidden="true">
          <path d="M15.78 0l-3.1 3.1 10.5 10.49H0v4.38h23.18l-10.5 10.49 3.1 3.1 15.78-15.78L15.78 0z" />
        </svg>`}
      </span>
    `;
    }
    firstUpdated() {
        let [cta] = this.shadowRoot?.querySelector('slot')?.assignedElements() ?? [];
        while (cta instanceof HTMLSlotElement) {
            [cta] = cta.assignedElements();
        }
        if (contentInitialized(cta) || __classPrivateFieldGet(this, _RhCta_initializing, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _RhCta_initializing, true, "f");
        // If the first child does not exist or that child is not a supported tag
        if (!isSupportedContent(cta)) {
            return __classPrivateFieldGet(this, _RhCta_logger, "f").warn(`The first child in the light DOM must be a supported call-to-action tag (<a>, <button>)`);
        }
        else if (isButton(cta) && !this.variant) {
            return __classPrivateFieldGet(this, _RhCta_logger, "f").warn(`Button tag is not supported semantically by the default link styles`);
        }
        else {
            // Capture the first child as the CTA element
            this.cta = cta;
            CONTENT.set(this.cta, true);
            __classPrivateFieldSet(this, _RhCta_initializing, false, "f");
        }
    }
};
_RhCta_initializing = new WeakMap(), _RhCta_dir = new WeakMap(), _RhCta_logger = new WeakMap(), _RhCta_instances = new WeakSet(), _RhCta_isDefault_get = function _RhCta_isDefault_get() {
    return !this.hasAttribute('variant');
};
RhCta.version = '{{version}}';
RhCta.styles = [style];
__decorate([
    property({ reflect: true })
], RhCta.prototype, "variant", void 0);
__decorate([
    property({ reflect: true })
], RhCta.prototype, "icon", void 0);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhCta.prototype, "colorPalette", void 0);
__decorate([
    colorContextConsumer()
], RhCta.prototype, "on", void 0);
RhCta = __decorate([
    customElement('rh-cta')
], RhCta);
export { RhCta };
//# sourceMappingURL=rh-cta.js.map