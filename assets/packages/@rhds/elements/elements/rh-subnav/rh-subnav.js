var _RhSubnav_instances, _RhSubnav_allLinkElements, _RhSubnav_overflow, _RhSubnav_allLinks_get, _RhSubnav_allLinks_set, _RhSubnav_onSlotchange, _RhSubnav_onClickScroll;
var RhSubnav_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { OverflowController } from '@patternfly/pfe-core/controllers/overflow-controller.js';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { RhNavigationLink } from '@rhds/elements/rh-navigation-link/rh-navigation-link.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `:host{display:block}:host([color-palette]){background-color:var(--rh-color-surface)}[part=container]{display:flex}#link-container{display:flex;position:relative;bottom:0;overflow-x:auto;scrollbar-width:none;max-width:100%}::slotted(a){display:block!important;white-space:nowrap!important;padding:var(--rh-space-lg,16px) var(--rh-space-2xl,32px)!important;text-decoration:none!important;color:var(--rh-color-text-secondary)!important;position:relative!important}::slotted(a):after{content:""!important;position:absolute!important;inset:0!important;width:100%!important;border-block-end:var(--rh-border-width-lg,3px) solid #0000!important}::slotted(a:active),::slotted(a:hover),::slotted(a:is([active],[aria-current=page])){color:var(--rh-color-text-primary)!important}::slotted(a:focus-visible):after,::slotted(a:hover):after{border-block-end-color:var(--rh-color-border-subtle)!important}::slotted(a:active):after,::slotted(a:is([active],[aria-current=page])):after{border-block-end-color:var(--rh-color-accent-brand)!important}::slotted(a:focus-visible){outline:var(--rh-border-width-md,2px) solid var(--rh-color-border-interactive)!important;outline-offset:-2px!important;border-radius:10px!important}::slotted(a:visited){color:var(--rh-color-text-primary)!important}::slotted(rh-navigation-link){--_navigation-link-display:flex;--_navigation-link-gap:var(--rh-space-xs,4px);--_navigation-link-align-items:center;--_navigation-link-inline-size:100%;--_navigation-link-padding:var(--rh-space-lg,16px) var(--rh-space-2xl,32px);--_navigation-link-font-size:var(--rh-font-size-body-text-md);--_navigation-link-text-decoration:none;--_navigation-link-text-decoration-style:none;--_navigation-link-text-decoration-line:none;--_navigation-link-color:var(--rh-color-text-primary);--_navigation-link-color-hover:var(--rh-color-text-primary);--_navigation-link-container-display:flex;--_navigation-link-container-align-items:center;--_navigation-link-container-position:relative;--_navigation-link-container-inline-size:100%;--_navigation-link-focus-outline-offset:-2px;position:relative;display:flex}::slotted(rh-navigation-link):after{content:"";position:absolute;z-index:1;inset:0;width:100%;border-block-end:var(--rh-border-width-lg,3px) solid #0000;pointer-events:none}::slotted(rh-navigation-link:hover):after{border-block-end-color:var(--rh-color-border-subtle)}::slotted(rh-navigation-link:active):after,::slotted(rh-navigation-link[current-page]):after{border-block-end-color:var(--rh-color-brand-red)}button{position:relative;padding:0 var(--rh-space-lg,16px);margin:0;background-color:initial;border:none;color:var(--rh-color-text-secondary)}button:disabled{pointer-events:none;color:var(--rh-color-border-subtle)}button:hover{color:var(--rh-color-text-primary)}button:before{position:absolute;inset:0;content:"";border-block-end:var(--rh-border-width-lg,3px) solid #0000}button:before:hover{border-block-end-color:var(--rh-color-border-subtle)}#previous{border-inline-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}#next{border-inline-start:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}#next,#previous{border-block-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}#next rh-icon,#previous rh-icon{pointer-events:none}#next rh-icon:dir(rtl),#previous rh-icon:dir(rtl){rotate:180deg}`;
/**
 * A subnavigation allows users to navigate between a small number of page links.
 *
 * @summary Organizes content into sections using tabbed pages
 *
 * @alias subnavigation
 */
let RhSubnav = RhSubnav_1 = class RhSubnav extends LitElement {
    constructor() {
        super(...arguments);
        _RhSubnav_instances.add(this);
        _RhSubnav_allLinkElements.set(this, []);
        _RhSubnav_overflow.set(this, new OverflowController(this));
        this.hasNavigationLinks = false;
        /**
         * Customize the default `aria-label` on the `<nav>` container.
         * Defaults to "subnavigation" if no attribute/property is set.
         */
        this.accessibleLabel = 'subnavigation';
        /**
         * Label for the scroll back button
         */
        this.labelScrollLeft = 'Scroll back';
        /**
         * Label for the scroll forward button
         */
        this.labelScrollRight = 'Scroll forward';
    }
    connectedCallback() {
        super.connectedCallback();
        RhSubnav_1.instances.add(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        RhSubnav_1.instances.delete(this);
    }
    firstUpdated() {
        this.linkList.addEventListener('scroll', __classPrivateFieldGet(this, _RhSubnav_overflow, "f").onScroll.bind(this));
        __classPrivateFieldGet(this, _RhSubnav_instances, "m", _RhSubnav_onSlotchange).call(this);
    }
    render() {
        return html `
      <!-- container, \`<div>\` element -->
      <nav part="container" 
           aria-label="${this.accessibleLabel}">
        ${!__classPrivateFieldGet(this, _RhSubnav_overflow, "f").showScrollButtons ? '' : html `
          <button id="previous"
                  tabindex="-1"
                  data-direction="start"
                  aria-label="${this.labelScrollLeft}"
                  ?disabled="${!__classPrivateFieldGet(this, _RhSubnav_overflow, "f").overflowLeft}"
                  @click="${__classPrivateFieldGet(this, _RhSubnav_instances, "m", _RhSubnav_onClickScroll)}">
            <rh-icon set="ui" icon="caret-left" loading="eager"></rh-icon>
          </button>`}
        <!--
          slot:
            description: Sub navigation links, expects collection of \`<a>\` or \`<rh-navigation-link>\` elements
            Slotting a \`<a>\` element is deprecated and will be removed in a future release. Use \`<rh-navigation-link>\` instead.
          part:
            description: the anonymous slot
        -->
        <div id="link-container" role="${ifDefined(this.hasNavigationLinks ? 'list' : undefined)}" >
          <slot @slotchange="${__classPrivateFieldGet(this, _RhSubnav_instances, "m", _RhSubnav_onSlotchange)}" part="links"></slot>
        </div>
        ${!__classPrivateFieldGet(this, _RhSubnav_overflow, "f").showScrollButtons ? '' : html `
          <button id="next"
                  tabindex="-1"
                  data-direction="end"
                  aria-label="${this.labelScrollRight}"
                  ?disabled="${!__classPrivateFieldGet(this, _RhSubnav_overflow, "f").overflowRight}"
                  @click="${__classPrivateFieldGet(this, _RhSubnav_instances, "m", _RhSubnav_onClickScroll)}">
            <rh-icon set="ui" icon="caret-right" loading="eager"></rh-icon>
          </button>`}
      </nav>
    `;
    }
};
_RhSubnav_allLinkElements = new WeakMap();
_RhSubnav_overflow = new WeakMap();
_RhSubnav_instances = new WeakSet();
_RhSubnav_allLinks_get = function _RhSubnav_allLinks_get() {
    return __classPrivateFieldGet(this, _RhSubnav_allLinkElements, "f");
};
_RhSubnav_allLinks_set = function _RhSubnav_allLinks_set(links) {
    __classPrivateFieldSet(this, _RhSubnav_allLinkElements, links.filter(link => link), "f");
};
_RhSubnav_onSlotchange = async function _RhSubnav_onSlotchange() {
    if (!isServer) {
        const slot = this.shadowRoot?.querySelector('slot');
        const assignedElements = (slot?.assignedElements() || []);
        // if slotted a elements remove active attribute replace it with aria-current="page"
        for (const element of assignedElements) {
            if (element instanceof HTMLAnchorElement) {
                // if has active attribute remove it and set aria-current="page"
                if (element.hasAttribute('active')) {
                    element.removeAttribute('active');
                    element.setAttribute('aria-current', 'page');
                }
            }
        }
        // Only use role="list" if we have rh-navigation-link elements
        this.hasNavigationLinks = assignedElements.some(el => el instanceof RhNavigationLink);
        __classPrivateFieldSet(this, _RhSubnav_instances, assignedElements, "a", _RhSubnav_allLinks_set);
        __classPrivateFieldGet(this, _RhSubnav_overflow, "f").init(this.linkList, __classPrivateFieldGet(this, _RhSubnav_instances, "a", _RhSubnav_allLinks_get));
        await this.updateComplete;
    }
};
_RhSubnav_onClickScroll = function _RhSubnav_onClickScroll(event) {
    if (event.target instanceof HTMLElement) {
        switch (event.target.dataset.direction) {
            case 'start':
                if (this.matches(':dir(rtl)')) {
                    __classPrivateFieldGet(this, _RhSubnav_overflow, "f").scrollRight();
                }
                else {
                    __classPrivateFieldGet(this, _RhSubnav_overflow, "f").scrollLeft();
                }
                break;
            case 'end':
                if (this.matches(':dir(rtl)')) {
                    __classPrivateFieldGet(this, _RhSubnav_overflow, "f").scrollLeft();
                }
                else {
                    __classPrivateFieldGet(this, _RhSubnav_overflow, "f").scrollRight();
                }
                break;
        }
    }
};
RhSubnav.styles = [styles];
RhSubnav.instances = new Set();
(() => {
    // on resize check for overflows to add or remove scroll buttons
    if (!isServer) {
        globalThis.addEventListener('resize', () => {
            // this appears to be an eslint bug.
            // `this` should refer to the class, but in the minified bundle, it is void
            const { instances } = RhSubnav_1;
            for (const instance of instances) {
                __classPrivateFieldGet(instance, _RhSubnav_overflow, "f").onScroll();
            }
        }, { capture: false });
    }
})();
__decorate([
    state()
], RhSubnav.prototype, "hasNavigationLinks", void 0);
__decorate([
    property({ reflect: true, attribute: 'color-palette' })
], RhSubnav.prototype, "colorPalette", void 0);
__decorate([
    property({ attribute: 'accessible-label' })
], RhSubnav.prototype, "accessibleLabel", void 0);
__decorate([
    property({ reflect: true, attribute: 'label-scroll-left' })
], RhSubnav.prototype, "labelScrollLeft", void 0);
__decorate([
    property({ reflect: true, attribute: 'label-scroll-right' })
], RhSubnav.prototype, "labelScrollRight", void 0);
__decorate([
    query('#link-container')
], RhSubnav.prototype, "linkList", void 0);
RhSubnav = RhSubnav_1 = __decorate([
    customElement('rh-subnav'),
    colorPalettes,
    themable
], RhSubnav);
export { RhSubnav };
//# sourceMappingURL=rh-subnav.js.map