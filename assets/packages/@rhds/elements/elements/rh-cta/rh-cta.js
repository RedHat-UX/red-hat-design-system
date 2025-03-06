var _RhCta_dir, _RhCta_logger;
import { __classPrivateFieldGet } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { DirController } from '../../lib/DirController.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { css } from "lit";
const style = css `:host{display:inline-flex;position:relative;z-index:0;align-items:center;max-width:max-content}::slotted(:is(a,button,input)),a{vertical-align:middle!important;word-break:break-word!important;display:inline!important;color:inherit!important;font-family:inherit!important;font-size:inherit!important;font-weight:inherit!important;line-height:inherit!important;text-decoration:var(--_text-decoration)!important;z-index:2!important}::slotted(:is(a,button,input)){white-space:break-spaces!important}::slotted(a):after,a:after{display:block;content:"";position:absolute;inset:0;z-index:3}::slotted(button),::slotted(input){background-color:initial;border:none;margin:0;padding:0;text-align:left}#container{position:relative;white-space:nowrap;color:var(--_color);font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-lg,1.125rem);font-weight:600;line-height:var(--rh-line-height-body-text,1.5);background-color:var(--_background-color);border-color:var(--_border-color,#0000);border-radius:var(--rh-border-radius-default,3px);border-width:var(--rh-border-width-sm,1px);--rh-color-surface:var(--_background-color)!important;--_arrow-size:13px;--rh-icon-size:var(--rh-font-size-body-text-lg,1.125rem);--_rh-icon-plus-padding:calc(5px + var(--rh-icon-size))}.rtl{text-align:right}#container:after{--_offset:2px;content:"";display:block;height:calc(100% - var(--_offset)*2);width:calc(100% - var(--_offset)*2);box-sizing:border-box;position:absolute;top:var(--_offset);left:var(--_offset);border-width:var(--rh-border-width-sm,1px);border-radius:2px;outline:none;pointer-events:none}rh-icon{vertical-align:middle;margin-inline-start:var(--rh-space-md,8px);display:inline-block;fill:currentcolor;translate:0 0;transition:translate var(--_trans);--_trans:var(--rh-animation-speed,0.3s) var(--rh-animation-timing,cubic-bezier(0.465,0.183,0.153,0.946))}#container.rtl svg{rotate:180deg}::slotted(:focus),:host(:is(:focus,:focus-within)),:host(:is(:focus,:focus-within)) ::slotted(:is(a,button,input)),a:focus,a:focus-within{outline:none!important}:host(:is(:focus,:focus-within)) #container{--_background-color:var(--rh-cta-focus-background-color);--_color:var(--_focus-color);--_text-decoration:var(--_focus-text-decoration);border-color:var(--_focus-border-color);background-color:var(--_focus-container-background-color,var(--_focus-background-color));color:var(--rh-cta-focus-color,var(--_color));outline:var(--rh-border-width-md,2px) solid var(--rh-cta-focus-container-outline-color,var(--rh-cta-focus-outline-color));outline-offset:2px}:host(:is(:focus,:focus-within)) #container:after{border-style:solid;border-color:var(--_focus-inner-border-color)}:host(:hover) #container{color:var(--_hover-color);border-color:var(--_hover-border-color);background-color:var(--_hover-background-color);--_text-decoration:var(--rh-cta-hover-text-decoration,var(--_hover-text-decoration))}:host(:hover) #container rh-icon{translate:3px 0}:host(:hover) #container.rtl rh-icon{translate:-3px 0}:host(:active) #container{background-color:var(--_background-color);color:var(--_active-color);--_background-color:var(--rh-cta-background-color,var(--rh-cta-active-container-background-color,var(--rh-cta-active-background-color)))}:host(:active) #container:after{border-style:solid;border-color:var(--_active-inner-border-color)!important}:host([variant]) #container{font-size:var(--rh-font-size-body-text-md,1rem);border-radius:var(--rh-border-radius-default,3px);border-width:var(--rh-border-width-sm,1px);padding-inline:var(--rh-space-2xl,32px);padding-block:var(--rh-space-lg,16px)}:host([variant]) #container ::slotted(:is(a,button,input)),:host([variant]) #container a{display:inline-flex!important;text-align:center!important}:host([variant]) #container.icon ::slotted(:is(a,button,input)),:host([variant]) #container.icon a{display:inline!important}:host([variant]) #container.icon rh-icon{margin-inline-start:var(--rh-space-md,8px)}:host([variant]) #container.svg ::slotted(:is(a,button,input)),:host([variant]) #container.svg a{--_arrow-plus-padding:calc(var(--rh-space-md, 8px) + var(--_arrow-size));padding-inline-end:calc(var(--_arrow-plus-padding) + var(--rh-space-xl, 24px))!important}:host([variant$=ary]) #container ::slotted(:is(a,button,input)),:host([variant$=ary]) #container a{font-size:var(--rh-cta-font-size-priority,var(--rh-font-size-body-text-md,1rem))}:host(:not([variant])) #container{--_background-color:var(--rh-cta-background-color,#0000);--_border-color:var(--rh-cta-border-color,#0000);--_color:var(--rh-cta-color,var(--rh-color-interactive-primary-default));--_hover-background-color:var(--rh-cta-hover-background-color,#0000);--_hover-border-color:var(--rh-cta-hover-border-color,#0000);--_hover-color:var(--rh-cta-hover-color,var(--rh-color-interactive-primary-hover));--_hover-text-decoration:var(--rh-cta-hover-text-decoration,none);--_focus-background-color:var(--rh-cta-focus-background-color,#0000);--_focus-container-background-color:var(--rh-cta-focus-container-background-color,#0066cc1a);--_focus-border-color:var(--rh-cta-focus-border-color,#0000);--_focus-color:var(--rh-cta-focus-color,var(--rh-color-interactive-primary-default));--_focus-inner-border-color:var(--rh-cta-focus-inner-border-color,#0000);--_focus-text-decoration:var(--rh-cta-focus-text-decoration,none);--_active-container-background-color:var(--rh-cta-active-container-background-color,#0066cc1a);--_active-inner-border-color:var(--rh-cta-active-inner-border-color,#0000);--_active-text-decoration:var(--rh-cta-active-text-decoration,none)}:host(:not([variant])) #container.dark{--_focus-container-background-color:var(--rh-cta-focus-container-background-color,#73bcf740);--_focus-border-color:var(--rh-cta-focus-border-color,#0000);--_focus-inner-border-color:var(--rh-cta-focus-inner-border-color,#0000);--_focus-text-decoration:var(--rh-cta-focus-text-decoration,none);--_active-container-background-color:var(--rh-cta-active-container-background-color,#73bcf740);--_active-text-decoration:var(--rh-cta-active-text-decoration,none)}:host([variant=primary]) #container{border-style:solid;--_background-color:var(--rh-cta-background-color,var(--rh-color-brand-red));--_border-color:var(--rh-cta-border-color,var(--rh-color-brand-red));--_color:var(--rh-cta-color,var(--rh-color-text-primary-on-dark,#fff));--_active-color:var(--rh-cta-color,var(--rh-color-text-primary-on-dark,#fff));--_hover-background-color:var(--rh-cta-hover-background-color,var(--rh-color-brand-red-dark,#a60000));--_hover-border-color:var(--rh-cta-hover-border-color,var(--rh-color-brand-red-dark,#a60000));--_hover-color:var(--rh-cta-hover-color,var(--rh-color-text-primary-on-dark,#fff));--_focus-background-color:var(--rh-cta-focus-background-color,var(--rh-color-brand-red-dark,#a60000));--_focus-border-color:var(--rh-cta-focus-border-color,var(--rh-color-brand-red-dark,#a60000));--_focus-color:var(--rh-cta-focus-color,var(--rh-color-text-primary-on-dark,#fff))!important;--_focus-inner-border-color:var(--rh-cta-focus-inner-border-color,var(--rh-color-text-primary-on-dark,#fff));--_active-background-color:var(--rh-cta-active-background-color,var(--rh-color-brand-red-dark,#a60000));--_active-inner-border-color:var(--rh-cta-active-inner-border-color,var(--rh-color-text-primary-on-dark,#fff))}:host([variant=secondary]) #container{border-style:solid;--_background-color:var(--rh-cta-background-color,#0000);--_border-color:var(--rh-cta-border-color,var(--rh-color-border-strong));--_color:var(--rh-cta-color,var(--rh-color-text-primary-on-light,#151515));--_hover-background-color:var(--rh-cta-hover-background-color,var(--rh-color-surface-darkest,#151515));--_hover-border-color:var(--rh-cta-hover-border-color,var(--rh-color-border-strong));--_hover-color:var(--rh-cta-hover-color,var(--rh-color-text-primary-on-dark,#fff));--_focus-background-color:var(--rh-cta-focus-background-color,var(--rh-color-surface-lighter,#f2f2f2));--_focus-border-color:var(--rh-cta-focus-border-color,var(--rh-color-border-strong));--_focus-color:var(--rh-cta-focus-color,var(--rh-color-surface-darkest,#151515));--_focus-inner-border-color:var(--rh-cta-focus-inner-border-color,var(--rh-color-border-strong));--_active-color:var(--rh-cta-active-color,var(--rh-color-text-primary-on-light,#151515));--_active-background-color:var(--rh-cta-active-background-color,var(--rh-color-border-strong));--_active-inner-border-color:var(--rh-cta-active-inner-border-color,var(--rh-color-surface-light,#e0e0e0))}:host([variant=secondary]) #container.dark{--_color:var(--rh-cta-color,var(--rh-color-text-primary-on-dark,#fff));--_hover-background-color:var(--rh-cta-hover-background-color,var(--rh-color-surface-lightest,#fff));--_focus-background-color:var(--rh-cta-focus-background-color,var(--rh-color-surface-dark,#383838));--_hover-color:var(--rh-cta-hover-color,var(--rh-color-text-primary-on-light,#151515));--_focus-color:var(--rh-cta-focus-color,var(--rh-color-text-primary-on-light,#151515));--_active-color:var(--rh-cta-active-color,var(--rh-color-text-primary-on-dark,#fff));--_active-background-color:var(--rh-cta-active-background-color,var(--rh-color-surface-lightest,#fff));--_active-inner-border-color:var(--rh-cta-active-inner-border-color,var(--rh-color-border-strong-on-light,#151515))}:host([variant=brick]){display:inline-block!important;max-width:100%;width:100%}:host([variant=brick]) #container{border-style:solid;font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-body-text-regular,400);display:flex;flex-flow:row wrap;gap:var(--rh-space-md,8px);justify-content:center;align-items:center;--_background-color:var(--rh-cta-background-color,#0000);--_border-color:var(--rh-cta-border-color,var(--rh-color-border-subtle));--_color:var(--rh-cta-color,var(--rh-color-interactive-primary-default));--_hover-background-color:var(--rh-cta-hover-background-color,var(--rh-color-surface-lighter,#f2f2f2));--_hover-border-color:var(--rh-cta-hover-border-color,var(--rh-color-border-subtle));--_hover-color:var(--rh-cta-hover-color,var(--rh-color-interactive-primary-hover));--_hover-text-decoration:var(--rh-cta-hover-text-decoration,none);--_focus-color:var(--rh-cta-focus-color,var(--rh-color-interactive-primary-default));--_focus-border-color:var(--rh-cta-focus-border-color,var(--rh-color-border-subtle));--_focus-inner-border-color:var(--rh-cta-focus-inner-border-color,var(--rh-color-border-subtle));--_focus-text-decoration:var(--rh-cta-focus-text-decoration,none);--_active-background-color:var(--rh-cta-active-background-color,var(--rh-color-surface-lighter,#f2f2f2));--_active-inner-border-color:var(--rh-cta-active-inner-border-color,var(--rh-color-border-subtle));--_active-text-decoration:var(--rh-cta-active-text-decoration,none)}:host([variant=brick]) #container.dark{--_hover-background-color:var(--rh-cta-hover-background-color,var(--rh-color-surface-darker,#1f1f1f));--_hover-text-decoration:var(--rh-cta-hover-text-decoration,underline);--_focus-text-decoration:var(--rh-cta-focus-text-decoration,none);--_active-background-color:var(--rh-cta-active-background-color,var(--rh-color-surface-darker,#1f1f1f));--_active-text-decoration:var(--rh-cta-active-text-decoration,underline)}:host([variant=brick]) #container.icon rh-icon{margin-inline:0}@supports not (translate:0 0){rh-icon{transform:translate(0);transition:transform var(--_trans)}#container.rtl rh-icon{transform:translate(0) rotate(180deg)}:host(:hover) #container rh-icon{transform:translate(3px)}:host(:hover) #container.rtl rh-icon{transform:translate(-3px) rotate(180deg)}}`;
function isSupportedContent(el) {
    return el instanceof HTMLAnchorElement || el instanceof HTMLButtonElement;
}
/**
 * A call to action is a styled link that entices users to make a selection.
 * @summary     Directs users to other pages or displays extra content
 * @slot
 *              The default slot contains the link text when the `href`
 *              attribute is set. In case there is no href attribute, an anchor
 *              tag (`<a href="...">`) should be the first child inside `rh-cta`
 *              element. Less preferred but allowed for specific use-cases
 *              include: `<button>` (note however that the `button` tag is not
 *              supported for the default CTA styles).
 * @csspart     container - container element for slotted CTA
 * @cssprop     {<color>} [--rh-cta-color=var(--rh-color-text-primary-on-dark, #ffffff)]
 *              Sets the cta color
 * @cssprop     [--rh-cta-background-color=var(--rh-color-brand-red-on-light, #ee0000)]
 *              Sets the cta background color
 * @cssprop     [--rh-cta-border-color=var(--rh-color-brand-red-on-light, #ee0000)]
 *              Sets the cta border color
 * @cssprop     [--rh-cta-hover-color=var(--rh-color-text-primary-on-dark, #ffffff)]
 *              Sets the cta color on hover
 * @cssprop     [--rh-cta-hover-background-color=var(--rh-color-brand-red-dark, #be0000)]
 *              Sets the cta background color on hover
 * @cssprop     [--rh-cta-hover-border-color=var(--rh-color-brand-red-dark, #be0000)]
 *              Sets the cta boder color on hover
 * @cssprop     [--rh-cta-focus-color=var(--rh-color-text-primary-on-dark, #ffffff)]
 *              Sets the cta color on focus
 * @cssprop     [--rh-cta-focus-background-color=var(--rh-color-brand-red-on-light, #ee0000)]
 *              Sets the cta background color on focus
 * @cssprop     [--rh-cta-focus-container-background-color=transparent]
 *              Sets the cta container background color on focus
 * @cssprop     [--rh-cta-focus-container-outline-color=#0066cc]
 *              Sets the cta container outline color on focus
 * @cssprop     [--rh-cta-focus-border-color=transparent]
 *              Sets the cta border color on focus
 * @cssprop     [--rh-cta-focus-inner-border-color=transparent]
 *              Sets the cta inner border color on focus
 * @cssprop     [--rh-cta-active-color=var(--rh-color-text-primary-on-dark, #ffffff)]
 *              Sets the cta color on active. Applicable only for secondary variant
 * @cssprop     [--rh-cta-active-background-color=var(--rh-color-brand-red-dark, #be0000)]
 *              Sets the cta background color on active
 * @cssprop     [--rh-cta-active-container-background-color=#0066cc1a]
 *              Sets the cta container background color on active. Applicable only for default variant
 * @cssprop     [--rh-cta-active-inner-border-color=var(--rh-color-text-primary-on-dark, #ffffff)]
 *              Sets the cta inner border color on active
 * @cssprop     [--rh-cta-text-decoration=none]
 *              Sets the cta text decoration
 * @cssprop     [--rh-cta-focus-text-decoration=none]
 *              Sets the cta text decoration on focus
 * @cssprop     [--rh-cta-hover-text-decoration=none]
 *              Sets the cta text decoration on hover
 * @cssprop     [--rh-cta-active-text-decoration=none]
 *              Sets the cta text decoration on active
 */
export class RhCta extends LitElement {
    constructor() {
        super(...arguments);
        /** Is the element in an RTL context? */
        _RhCta_dir.set(this, new DirController(this));
        _RhCta_logger.set(this, new Logger(this));
        /** Icon set */
        this.iconSet = 'ui';
    }
    async getUpdateComplete() {
        if (this.icon || !this.variant) {
            await import('@rhds/elements/rh-icon/rh-icon.js');
        }
        return super.getUpdateComplete();
    }
    render() {
        const { download, href, referrerpolicy, rel, target, icon, iconSet, on = 'light', variant, } = this;
        const rtl = __classPrivateFieldGet(this, _RhCta_dir, "f").dir === 'rtl';
        const isDefault = !variant;
        const svg = isDefault;
        const follower = (variant !== 'brick' && icon) ? html `<rh-icon icon=${icon} set=${iconSet ?? 'ui'}></rh-icon>`
            : (variant === undefined) ? html `<rh-icon icon="arrow-right" set="ui"></rh-icon>`
                : '';
        const iconContent = !(variant === 'brick' && icon) ? '' : html `<rh-icon .icon=${icon} set="${iconSet ?? 'ui'}"></rh-icon>`;
        const linkContent = !href ? html `<slot></slot>${follower}`
            : html `<a href=${href}
                download="${ifDefined(download)}"
                rel="${ifDefined(rel)}"
                referrerpolicy="${ifDefined(referrerpolicy)}"
                target="${ifDefined(target)}"><slot></slot>${follower}</a>`;
        return html `
      <span id="container"
            part="container"
            class=${classMap({ rtl, icon: !!icon, svg, on: true, [on]: true })}
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
}
_RhCta_dir = new WeakMap(), _RhCta_logger = new WeakMap();
RhCta.properties = {
    variant: { reflect: true },
    href: { reflect: true },
    download: {},
    referrerpolicy: {},
    rel: {},
    target: {},
    icon: { reflect: true },
    iconSet: { attribute: 'icon-set' },
    on: { state: true }
};
RhCta.styles = [style];
customElements.define("rh-cta", RhCta);
//# sourceMappingURL=rh-cta.js.map