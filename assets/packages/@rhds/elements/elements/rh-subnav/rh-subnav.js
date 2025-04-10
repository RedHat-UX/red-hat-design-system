var _RhSubnav_instances, _RhSubnav_allLinkElements, _RhSubnav_slots, _RhSubnav_overflow, _RhSubnav_allLinks_get, _RhSubnav_allLinks_set, _RhSubnav_firstLink_get, _RhSubnav_lastLink_get, _RhSubnav_onSlotchange, _RhSubnav_firstLastClasses, _RhSubnav_onClickScroll;
var RhSubnav_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';
import { OverflowController } from '@patternfly/pfe-core/controllers/overflow-controller.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:block}[part=container]{display:flex}[part=links]{display:flex;position:relative;bottom:0;overflow-x:auto;scrollbar-width:none;max-width:100%}::slotted(a){display:block!important;white-space:nowrap!important;padding:var(--rh-space-lg,16px) var(--rh-space-2xl,32px)!important;text-decoration:none!important;color:var(--rh-color-text-secondary)!important;position:relative!important}::slotted(a):after{content:""!important;position:absolute!important;inset:0!important;width:100%!important;border-block-end:var(--rh-border-width-lg,3px) solid #0000!important}::slotted(a:active),::slotted(a:hover),::slotted(a[active]){color:var(--rh-color-text-primary)!important}::slotted(a:focus-visible):after,::slotted(a:hover):after{border-block-end-color:var(--rh-color-border-subtle)!important}::slotted(a:active):after,::slotted(a[active]):after{border-block-end-color:var(--rh-color-accent-brand)!important}::slotted(a:focus-visible){outline:var(--rh-border-width-md,2px) solid var(--rh-color-border-interactive)!important;outline-offset:-2px!important;border-radius:10px!important}::slotted(a:visited){color:var(--rh-color-text-primary)!important}button{position:relative;padding:0 var(--rh-space-lg,16px);margin:0;background-color:initial;border:none;color:var(--rh-color-text-secondary)}button:disabled{pointer-events:none;color:var(--rh-color-border-subtle)}button:hover{color:var(--rh-color-text-primary)}button:before{position:absolute;inset:0;content:"";border-block-end:var(--rh-border-width-lg,3px) solid #0000}button:before:hover{border-block-end-color:var(--rh-color-border-subtle)}#previous{border-inline-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}#next{border-inline-start:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}#next rh-icon,#previous rh-icon{pointer-events:none}#next rh-icon:dir(rtl),#previous rh-icon:dir(rtl){rotate:180deg}`;
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
/**
 * A subnavigation allows users to navigate between a small number of page links.
 * @summary Organizes content into sections using tabbed pages
 * @slot - Navigation links, expects collection of `<a>` elements
 * @csspart container - container, `<div>` element
 * @csspart links     - `<slot>` element
 */
let RhSubnav = RhSubnav_1 = class RhSubnav extends LitElement {
    constructor() {
        super(...arguments);
        _RhSubnav_instances.add(this);
        _RhSubnav_allLinkElements.set(this, []);
        _RhSubnav_slots.set(this, new SlotController(this, null));
        _RhSubnav_overflow.set(this, new OverflowController(this));
        /**
         * Customize the default `aria-label` on the `<nav>` container.
         * Defaults to "subnavigation" if no attribute/property is set.
         */
        this.accessibleLabel = 'subnavigation';
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
      <nav part="container" aria-label="${this.accessibleLabel}">
        ${!__classPrivateFieldGet(this, _RhSubnav_overflow, "f").showScrollButtons ? '' : html `
          <button id="previous"
                  tabindex="-1"
                  data-direction="start"
                  aria-label="${this.getAttribute('label-scroll-left') ?? 'Scroll back'}"
                  ?disabled="${!__classPrivateFieldGet(this, _RhSubnav_overflow, "f").overflowLeft}"
                  @click="${__classPrivateFieldGet(this, _RhSubnav_instances, "m", _RhSubnav_onClickScroll)}">
            <rh-icon set="ui" icon="caret-left" loading="eager"></rh-icon>
          </button>`}
        <slot part="links" @slotchange="${__classPrivateFieldGet(this, _RhSubnav_instances, "m", _RhSubnav_onSlotchange)}"></slot>
        ${!__classPrivateFieldGet(this, _RhSubnav_overflow, "f").showScrollButtons ? '' : html `
          <button id="next"
                  tabindex="-1"
                  data-direction="end"
                  aria-label="${this.getAttribute('label-scroll-right') ?? 'Scroll forward'}"
                  ?disabled="${!__classPrivateFieldGet(this, _RhSubnav_overflow, "f").overflowRight}"
                  @click="${__classPrivateFieldGet(this, _RhSubnav_instances, "m", _RhSubnav_onClickScroll)}">
            <rh-icon set="ui" icon="caret-right" loading="eager"></rh-icon>
          </button>`}
      </nav>
    `;
    }
};
_RhSubnav_allLinkElements = new WeakMap();
_RhSubnav_slots = new WeakMap();
_RhSubnav_overflow = new WeakMap();
_RhSubnav_instances = new WeakSet();
_RhSubnav_allLinks_get = function _RhSubnav_allLinks_get() {
    return __classPrivateFieldGet(this, _RhSubnav_allLinkElements, "f");
};
_RhSubnav_allLinks_set = function _RhSubnav_allLinks_set(links) {
    __classPrivateFieldSet(this, _RhSubnav_allLinkElements, links.filter(link => link instanceof HTMLAnchorElement), "f");
};
_RhSubnav_firstLink_get = function _RhSubnav_firstLink_get() {
    const [link] = __classPrivateFieldGet(this, _RhSubnav_instances, "a", _RhSubnav_allLinks_get);
    return link;
};
_RhSubnav_lastLink_get = function _RhSubnav_lastLink_get() {
    return __classPrivateFieldGet(this, _RhSubnav_instances, "a", _RhSubnav_allLinks_get).at(-1);
};
_RhSubnav_onSlotchange = function _RhSubnav_onSlotchange() {
    __classPrivateFieldSet(this, _RhSubnav_instances, __classPrivateFieldGet(this, _RhSubnav_slots, "f").getSlotted(), "a", _RhSubnav_allLinks_set);
    __classPrivateFieldGet(this, _RhSubnav_overflow, "f").init(this.linkList, __classPrivateFieldGet(this, _RhSubnav_instances, "a", _RhSubnav_allLinks_get));
    __classPrivateFieldGet(this, _RhSubnav_instances, "m", _RhSubnav_firstLastClasses).call(this);
};
_RhSubnav_firstLastClasses = function _RhSubnav_firstLastClasses() {
    __classPrivateFieldGet(this, _RhSubnav_instances, "a", _RhSubnav_firstLink_get).classList.add('first');
    __classPrivateFieldGet(this, _RhSubnav_instances, "a", _RhSubnav_lastLink_get).classList.add('last');
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
    property({ reflect: true, attribute: 'color-palette' })
], RhSubnav.prototype, "colorPalette", void 0);
__decorate([
    property({ attribute: 'accessible-label' })
], RhSubnav.prototype, "accessibleLabel", void 0);
__decorate([
    query('[part="links"]')
], RhSubnav.prototype, "linkList", void 0);
RhSubnav = RhSubnav_1 = __decorate([
    customElement('rh-subnav'),
    colorPalettes,
    themable
], RhSubnav);
export { RhSubnav };
//# sourceMappingURL=rh-subnav.js.map