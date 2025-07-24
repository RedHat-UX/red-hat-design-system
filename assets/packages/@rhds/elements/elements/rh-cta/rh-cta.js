var _RhCta_logger;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const style = css `:host{display:inline-flex;position:relative;z-index:0;align-items:center;max-width:max-content}::slotted(:is(a,button,input)),a{vertical-align:middle!important;word-break:break-word!important;display:inline!important;color:inherit!important;font-family:inherit!important;font-size:inherit!important;font-weight:inherit!important;line-height:inherit!important;text-decoration:var(--_text-decoration)!important;z-index:2!important}::slotted(:is(a,button,input)){white-space:break-spaces!important}::slotted(a):after,a:after{display:block;content:"";position:absolute;inset:0;z-index:3}::slotted(button),::slotted(input){background-color:initial;border:none;margin:0;padding:0;text-align:left}#container{position:relative;white-space:var(--_rh-cta-white-space,nowrap);color:var(--_color);font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-lg,1.125rem);font-weight:600;line-height:var(--rh-line-height-body-text,1.5);background-color:var(--_background-color);border-color:var(--_border-color,#0000);border-radius:var(--rh-border-radius-default,3px);border-width:var(--rh-border-width-sm,1px);--rh-color-surface:var(--_background-color)!important;--_arrow-size:13px;--rh-icon-size:var(--rh-font-size-body-text-lg,1.125rem);--_rh-icon-plus-padding:calc(5px + var(--rh-icon-size))}:dir(rtl){text-align:right}#container:after{--_offset:2px;content:"";display:block;height:calc(100% - var(--_offset)*2);width:calc(100% - var(--_offset)*2);box-sizing:border-box;position:absolute;top:var(--_offset);left:var(--_offset);border-width:var(--rh-border-width-sm,1px);border-radius:2px;outline:none;pointer-events:none}rh-icon{vertical-align:middle;margin-inline-start:var(--rh-space-md,8px);display:inline-block;fill:currentcolor;translate:0 0;transition:translate var(--_trans);--_trans:var(--rh-animation-speed,0.3s) var(--rh-animation-timing,cubic-bezier(0.465,0.183,0.153,0.946))}#container:dir(rtl) rh-icon{rotate:180deg}::slotted(:focus),:host(:is(:focus,:focus-within)),:host(:is(:focus,:focus-within)) ::slotted(:is(a,button,input)),a:focus,a:focus-within{outline:none!important}:host(:is(:focus,:focus-within)) #container{--_background-color:var(--rh-cta-focus-background-color);--_color:var(--_focus-color);--_text-decoration:var(--_focus-text-decoration);border-color:var(--_focus-border-color);background-color:var(--_focus-container-background-color,var(--_focus-background-color));color:var(--rh-cta-focus-color,var(--_color));outline:var(--rh-border-width-md,2px) solid var(--rh-cta-focus-container-outline-color,var(--rh-cta-focus-outline-color));outline-offset:2px}:host(:is(:focus,:focus-within)) #container:after{border-style:solid;border-color:var(--_focus-inner-border-color)}:host(:hover) #container{color:var(--_hover-color);border-color:var(--_hover-border-color);background-color:var(--_hover-background-color);--_text-decoration:var(--rh-cta-hover-text-decoration,var(--_hover-text-decoration))}:host(:hover) #container rh-icon{translate:3px 0}:host(:hover) #container:dir(rtl) rh-icon{translate:-3px 0}:host(:active) #container{background-color:var(--_background-color);color:var(--_active-color);--_background-color:var(--rh-cta-background-color,var(--rh-cta-active-container-background-color,var(--rh-cta-active-background-color)))}:host(:active) #container:after{border-style:solid;border-color:var(--_active-inner-border-color)!important}:host([variant]) #container{font-size:var(--rh-font-size-body-text-md,1rem);border-radius:var(--rh-border-radius-default,3px);border-width:var(--rh-border-width-sm,1px);padding-inline:var(--rh-space-2xl,32px);padding-block:var(--rh-space-lg,16px)}:host([variant]) #container ::slotted(:is(a,button,input)),:host([variant]) #container a{display:inline-flex!important;text-align:center!important}:host([variant]) #container.icon ::slotted(:is(a,button,input)),:host([variant]) #container.icon a{display:inline!important}:host([variant]) #container.icon rh-icon{margin-inline-start:var(--rh-space-md,8px)}:host([variant]) #container.svg ::slotted(:is(a,button,input)),:host([variant]) #container.svg a{--_arrow-plus-padding:calc(var(--rh-space-md, 8px) + var(--_arrow-size));padding-inline-end:calc(var(--_arrow-plus-padding) + var(--rh-space-xl, 24px))!important}:host([variant$=ary]) #container ::slotted(:is(a,button,input)),:host([variant$=ary]) #container a{font-size:var(--rh-cta-font-size-priority,var(--rh-font-size-body-text-md,1rem))}:host(:not([variant])) #container{--_background-color:var(--rh-cta-background-color,#0000);--_border-color:var(--rh-cta-border-color,#0000);--_color:var(--rh-cta-color,var(--rh-color-interactive-primary-default));--_hover-background-color:var(--rh-cta-hover-background-color,#0000);--_hover-border-color:var(--rh-cta-hover-border-color,#0000);--_hover-color:var(--rh-cta-hover-color,var(--rh-color-interactive-primary-hover));--_hover-text-decoration:var(--rh-cta-hover-text-decoration,none);--_focus-background-color:var(--rh-cta-focus-background-color,#0000);--_focus-container-background-color:light-dark(var(--rh-cta-focus-container-background-color,#0066cc1a),var(--rh-cta-focus-container-background-color,#73bcf740));--_focus-border-color:var(--rh-cta-focus-border-color,#0000);--_focus-color:var(--rh-cta-focus-color,var(--rh-color-interactive-primary-default));--_focus-inner-border-color:var(--rh-cta-focus-inner-border-color,#0000);--_focus-text-decoration:var(--rh-cta-focus-text-decoration,none);--_active-container-background-color:light-dark(var(--rh-cta-active-container-background-color,#0066cc1a),var(--rh-cta-active-container-background-color,#73bcf740));--_active-inner-border-color:var(--rh-cta-active-inner-border-color,#0000);--_active-text-decoration:var(--rh-cta-active-text-decoration,none)}:host([variant=primary]) #container{border-style:solid;--_background-color:var(--rh-cta-background-color,var(--rh-color-brand-red));--_border-color:var(--rh-cta-border-color,var(--rh-color-brand-red));--_color:var(--rh-cta-color,var(--rh-color-text-primary-on-dark,#fff));--_active-color:var(--rh-cta-color,var(--rh-color-text-primary-on-dark,#fff));--_hover-background-color:var(--rh-cta-hover-background-color,var(--rh-color-brand-red-dark,#a60000));--_hover-border-color:var(--rh-cta-hover-border-color,var(--rh-color-brand-red-dark,#a60000));--_hover-color:var(--rh-cta-hover-color,var(--rh-color-text-primary-on-dark,#fff));--_focus-background-color:var(--rh-cta-focus-background-color,var(--rh-color-brand-red-dark,#a60000));--_focus-border-color:var(--rh-cta-focus-border-color,var(--rh-color-brand-red-dark,#a60000));--_focus-color:var(--rh-cta-focus-color,var(--rh-color-text-primary-on-dark,#fff))!important;--_focus-inner-border-color:var(--rh-cta-focus-inner-border-color,var(--rh-color-text-primary-on-dark,#fff));--_active-background-color:var(--rh-cta-active-background-color,var(--rh-color-brand-red-dark,#a60000));--_active-inner-border-color:var(--rh-cta-active-inner-border-color,var(--rh-color-text-primary-on-dark,#fff))}:host([variant=secondary]) #container{border-style:solid;--_background-color:var(--rh-cta-background-color,#0000);--_border-color:var(--rh-cta-border-color,var(--rh-color-border-strong));--_color:light-dark(var(--rh-cta-color,var(--rh-color-text-primary-on-light,#151515)),var(--rh-cta-color,var(--rh-color-text-primary-on-dark,#fff)));--_hover-background-color:light-dark(var(--rh-cta-hover-background-color,var(--rh-color-surface-darkest,#151515)),var(--rh-cta-hover-background-color,var(--rh-color-surface-lightest,#fff)));--_hover-border-color:var(--rh-cta-hover-border-color,var(--rh-color-border-strong));--_hover-color:light-dark(var(--rh-cta-hover-color,var(--rh-color-text-primary-on-dark,#fff)),var(--rh-cta-hover-color,var(--rh-color-text-primary-on-light,#151515)));--_focus-background-color:light-dark(var(--rh-cta-focus-background-color,var(--rh-color-surface-lighter,#f2f2f2)),var(--rh-cta-focus-background-color,var(--rh-color-surface-dark,#383838)));--_focus-border-color:var(--rh-cta-focus-border-color,var(--rh-color-border-strong));--_focus-color:var(--rh-color-text-primary);--_focus-inner-border-color:var(--rh-cta-focus-inner-border-color,var(--rh-color-border-strong));--_active-color:var(--rh-cta-active-color,var(--rh-color-text-primary));--_active-background-color:light-dark(var(--rh-cta-active-background-color,var(--rh-color-border-strong)),var(--rh-cta-active-background-color,var(--rh-color-surface-lightest,#fff)));--_active-inner-border-color:light-dark(var(--rh-cta-active-inner-border-color,var(--rh-color-surface-light,#e0e0e0)),var(--rh-cta-active-inner-border-color,var(--rh-color-border-strong-on-light,#151515)))}:host([variant=brick]){display:inline-block!important;max-width:100%;width:100%}:host([variant=brick]) #container{border-style:solid;font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-body-text-regular,400);display:flex;flex-flow:row wrap;gap:var(--rh-space-md,8px);justify-content:center;align-items:center;--_background-color:var(--rh-cta-background-color,#0000);--_border-color:var(--rh-cta-border-color,var(--rh-color-border-subtle));--_color:var(--rh-cta-color,var(--rh-color-interactive-primary-default));--_hover-background-color:light-dark(var(--rh-cta-hover-background-color,var(--rh-color-surface-lighter,#f2f2f2)),var(--rh-cta-hover-background-color,var(--rh-color-surface-darker,#1f1f1f)));--_hover-border-color:var(--rh-cta-hover-border-color,var(--rh-color-border-subtle));--_hover-color:var(--rh-cta-hover-color,var(--rh-color-interactive-primary-hover));--_hover-text-decoration:light-dark(var(--rh-cta-hover-text-decoration,none),var(--rh-cta-hover-text-decoration,underline));--_focus-color:var(--rh-cta-focus-color,var(--rh-color-interactive-primary-default));--_focus-border-color:var(--rh-cta-focus-border-color,var(--rh-color-border-subtle));--_focus-inner-border-color:var(--rh-cta-focus-inner-border-color,var(--rh-color-border-subtle));--_focus-text-decoration:light-dark(var(--rh-cta-focus-text-decoration,none),var(--rh-cta-focus-text-decoration,none));--_active-background-color:light-dark(var(--rh-cta-active-background-color,var(--rh-color-surface-lighter,#f2f2f2)),var(--rh-cta-active-background-color,var(--rh-color-surface-darker,#1f1f1f)));--_active-inner-border-color:var(--rh-cta-active-inner-border-color,var(--rh-color-border-subtle));--_active-text-decoration:light-dark(var(--rh-cta-active-text-decoration,none),var(--rh-cta-active-text-decoration,underline))}:host([variant=brick]) #container.icon rh-icon{margin-inline:0}@supports not (translate:0 0){rh-icon{transform:translate(0);transition:transform var(--_trans)}#container:dir(rtl) rh-icon{transform:translate(0) rotate(180deg)}:host(:hover) #container rh-icon{transform:translate(3px)}:host(:hover) #container:dir(rtl) rh-icon{transform:translate(-3px) rotate(180deg)}}`;
function isSupportedContent(el) {
    return el instanceof HTMLAnchorElement || el instanceof HTMLButtonElement;
}
/**
 * A call to action is styled text representing a link.
 * @summary     A call to action is styled text representing a link.
 *
 * @alias call-to-action
 *
 */
let RhCta = class RhCta extends LitElement {
    constructor() {
        super(...arguments);
        /** Icon set */
        this.iconSet = 'ui';
        _RhCta_logger.set(this, new Logger(this));
    }
    async scheduleUpdate() {
        if (this.icon || !this.variant && !customElements.get('rh-icon')) {
            await import('@rhds/elements/rh-icon/rh-icon.js');
        }
        super.scheduleUpdate();
    }
    render() {
        const { download, href, referrerpolicy, rel, target, icon, iconSet, variant, } = this;
        const isDefault = !variant;
        const svg = isDefault;
        const follower = (variant !== 'brick' && icon) ? html `<rh-icon icon=${icon} set=${iconSet ?? 'ui'}></rh-icon>`
            : (variant === undefined) ? html `<rh-icon icon="arrow-right" set="ui"></rh-icon>`
                : '';
        const iconContent = !(variant === 'brick' && icon) ? '' : html `<rh-icon .icon=${icon} set="${iconSet ?? 'ui'}"></rh-icon>`;
        const slot = html `<!--
          The default slot contains the link text when the \`href\`
          attribute is set. In case there is no href attribute, an anchor
          tag (\`<a href="...">\`) should be the first child inside \`rh-cta\`
          element. Less preferred but allowed for specific use-cases
          include: \`<button>\` (note however that the \`button\` tag is not
          supported for the default CTA styles).
    --><slot></slot>${follower}`;
        const linkContent = !href ? slot
            : html `<a href=${href}
                download="${ifDefined(download)}"
                rel="${ifDefined(rel)}"
                referrerpolicy="${ifDefined(referrerpolicy)}"
                target="${ifDefined(target)}">${slot}</a>`;
        return html `
      <!-- container element for slotted CTA -->
      <span id="container"
            part="container"
            class=${classMap({ icon: !!icon, svg })}
            @slotchange=${this.firstUpdated}>${iconContent}${linkContent}</span>`;
    }
    firstUpdated() {
        // workaround for lit-ssr bugs
        if (!isServer) {
            this.removeAttribute('defer-hydration');
            const [, ...duplicateContainers] = this.shadowRoot?.querySelectorAll('#container') ?? [];
            for (const dupe of duplicateContainers) {
                dupe.remove();
            }
        }
        // TODO: remove in next major version, recommend static HTML audits instead
        const { href, variant } = this;
        const cta = this.shadowRoot?.querySelector('a')
            ?? this.shadowRoot?.querySelector('slot')?.assignedElements().find(isSupportedContent)
            ?? null;
        if (href && cta !== this.shadowRoot?.querySelector('a')) {
            return __classPrivateFieldGet(this, _RhCta_logger, "f").warn(`When the href attribute is used, slotted content must not be a link`);
        }
        else if (!href && !cta) {
            return __classPrivateFieldGet(this, _RhCta_logger, "f").warn(`The first child in the light DOM must be a supported call-to-action tag (<a>, <button>)`);
        }
        else if (!href && cta instanceof HTMLButtonElement && !variant) {
            return __classPrivateFieldGet(this, _RhCta_logger, "f").warn(`Button tag is not supported semantically by the default link styles`);
        }
    }
};
_RhCta_logger = new WeakMap();
RhCta.styles = [style];
__decorate([
    property({ reflect: true })
], RhCta.prototype, "variant", void 0);
__decorate([
    property({ reflect: true })
], RhCta.prototype, "href", void 0);
__decorate([
    property()
], RhCta.prototype, "download", void 0);
__decorate([
    property()
], RhCta.prototype, "referrerpolicy", void 0);
__decorate([
    property()
], RhCta.prototype, "rel", void 0);
__decorate([
    property()
], RhCta.prototype, "target", void 0);
__decorate([
    property({ reflect: true })
], RhCta.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'icon-set' })
], RhCta.prototype, "iconSet", void 0);
RhCta = __decorate([
    customElement('rh-cta'),
    themable
], RhCta);
export { RhCta };
//# sourceMappingURL=rh-cta.js.map