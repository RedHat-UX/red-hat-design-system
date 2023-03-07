var _RhSubnav_instances, _RhSubnav_allLinkElements, _RhSubnav_tabindex, _RhSubnav_overflow, _RhSubnav_allLinks_get, _RhSubnav_allLinks_set, _RhSubnav_firstLink_get, _RhSubnav_lastLink_get, _RhSubnav_onSlotchange, _RhSubnav_firstLastClasses, _RhSubnav_scrollLeft, _RhSubnav_scrollRight;
var RhSubnav_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { query } from 'lit/decorators/query.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { property } from 'lit/decorators/property.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { OverflowController } from '@patternfly/pfe-core/controllers/overflow-controller.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import { css } from "lit";
const styles = css `:host{display:block}[part=container]{display:flex;background-color:var(--rh-context-background-color,#f5f5f5)}.light{--_subnav-link-text-color:var(--rh-color-text-secondary-on-light, #6a6e73);--_subnav-link-hover-text-color:var(--rh-context-light-color-text, #151515);--_subnav-link-hover-border-end-color:var(--rh-color-border-subtle-on-light, #d2d2d2);--_subnav-link-active-border-end-color:var(--rh-color-brand-red-on-light, #ee0000);--_subnav-link-visited-text-color:var(--rh-color-text-secondary-on-light, #6a6e73);--_subnav-link-focus-outline-color:var(--rh-color-border-interactive-on-light, #0066cc);--_subnav-next-prev-button-text-color:var(--rh-color-text-secondary-on-light, #6a6e73);--_subnav-next-prev-disabled-text-color:var(--rh-color-border-subtle-on-light, #d2d2d2);--_subnav-next-prev-hover-text-color:var(--rh-context-light-color-text, #151515);--_subnav-next-prev-border-color:var(--rh-color-border-subtle-on-light, #d2d2d2)}.dark{--_subnav-link-text-color:var(--rh-color-text-secondary-on-dark, #d2d2d2);--_subnav-link-hover-text-color:var(--rh-context-dark-color-text, #ffffff);--_subnav-link-hover-border-end-color:var(--rh-color-border-subtle-on-dark, #6a6e73);--_subnav-link-active-border-end-color:var(--rh-color-brand-red-on-dark, #ff442b);--_subnav-link-visited-text-color:var(--rh-color-text-secondary-on-dark, #d2d2d2);--_subnav-link-focus-outline-color:var(--rh-color-border-interactive-on-dark, #73bcf7);--_subnav-next-prev-button-text-color:var(--rh-color-text-secondary-on-dark, #d2d2d2);--_subnav-next-prev-disabled-text-color:var(--rh-color-border-subtle-on-dark, #6a6e73);--_subnav-next-prev-hover-text-color:var(--rh-context-dark-color-text, #ffffff);--_subnav-next-prev-border-color:var(--rh-color-border-subtle-on-dark, #6a6e73)}[part=links]{display:flex;position:relative;bottom:0;overflow-x:auto;scrollbar-width:none;max-width:100%}::slotted(a){display:block;white-space:nowrap;padding:var(--rh-space-lg,16px) var(--rh-space-2xl,32px);border-block-end:var(--rh-border-width-lg,3px) solid transparent;text-decoration:none;color:var(--_subnav-link-text-color,#6a6e73)}::slotted(a:active),::slotted(a:hover),::slotted(a[active]){color:var(--_subnav-link-hover-text-color,#151515)}::slotted(a:hover){border-block-end-color:var(--_subnav-link-hover-border-end-color,#d2d2d2)}::slotted(a:active),::slotted(a[active]){border-block-end-color:var(--_subnav-link-active-border-end-color,#ee0000)}::slotted(a:focus-visible){outline:var(--rh-border-width-md,2px) solid var(--_subnav-link-focus-outline-color,#0066cc);outline-offset:-8px;border-radius:10px}::slotted(a:visited){color:var(--_subnav-link-visited-text-color,#151515)}button{position:relative;padding:0 var(--rh-space-xl,24px);margin:0;background-color:transparent;border:none;color:var(--_subnav-next-prev-button-text-color,#6a6e73)}button:disabled{pointer-events:none;color:var(--_subnav-next-prev-disabled-text-color,#d2d2d2)}button:hover{color:var(--_subnav-next-prev-hover-text-color,#151515)}button:before{position:absolute;top:0;right:0;bottom:0;left:0;content:"";border-block-end:var(--rh-border-width-lg,3px) solid transparent}button:hover:before{border-block-end-color:var(--_subnav-link-hover-border-end-color)}#previous{border-inline-end:var(--rh-border-width-sm,1px) solid var(--_subnav-next-prev-border-color,#d2d2d2)}#next{border-inline-start:var(--rh-border-width-sm,1px) solid var(--_subnav-next-prev-border-color,#d2d2d2)}`;
/**
 * Subnav provides a tabs-like navigation experience
 * @slot - Place navigation links here, expects collection of `<a>`
 *
 * @csspart container - container, <div> element
 * @csspart links     - <slot> element
 */
let RhSubnav = RhSubnav_1 = class RhSubnav extends LitElement {
    constructor() {
        super(...arguments);
        _RhSubnav_instances.add(this);
        _RhSubnav_allLinkElements.set(this, []);
        _RhSubnav_tabindex.set(this, new RovingTabindexController(this));
        _RhSubnav_overflow.set(this, new OverflowController(this));
    }
    connectedCallback() {
        super.connectedCallback();
        RhSubnav_1.instances.add(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        RhSubnav_1.instances.delete(this);
    }
    render() {
        const { scrollIconSet, scrollIconLeft, scrollIconRight } = this.constructor;
        const { showScrollButtons } = __classPrivateFieldGet(this, _RhSubnav_overflow, "f");
        const { on = '' } = this;
        return html `
      <nav part="container" class="${classMap({ [on]: !!on })}">${!showScrollButtons ? '' : html `
        <button id="previous" tabindex="-1" aria-hidden="true"
                ?disabled="${!__classPrivateFieldGet(this, _RhSubnav_overflow, "f").overflowLeft}"
                @click="${__classPrivateFieldGet(this, _RhSubnav_instances, "m", _RhSubnav_scrollLeft)}">
          <pf-icon size="sm"
                   icon="${scrollIconLeft}"
                   set="${scrollIconSet}"
                   loading="eager"></pf-icon>
        </button>`}
        <slot part="links"
              @slotchange="${__classPrivateFieldGet(this, _RhSubnav_instances, "m", _RhSubnav_onSlotchange)}"></slot>${!showScrollButtons ? '' : html `
        <button id="next" tabindex="-1" aria-hidden="true"
                ?disabled="${!__classPrivateFieldGet(this, _RhSubnav_overflow, "f").overflowRight}"
                @click="${__classPrivateFieldGet(this, _RhSubnav_instances, "m", _RhSubnav_scrollRight)}">
          <pf-icon icon="${scrollIconRight}" set="${scrollIconSet}" loading="eager"></pf-icon>
        </button>`}
      </nav>
    `;
    }
    firstUpdated() {
        this.linkList.addEventListener('scroll', __classPrivateFieldGet(this, _RhSubnav_overflow, "f").onScroll.bind(this));
    }
};
_RhSubnav_allLinkElements = new WeakMap(), _RhSubnav_tabindex = new WeakMap(), _RhSubnav_overflow = new WeakMap(), _RhSubnav_instances = new WeakSet(), _RhSubnav_allLinks_get = function _RhSubnav_allLinks_get() {
    return __classPrivateFieldGet(this, _RhSubnav_allLinkElements, "f");
}, _RhSubnav_allLinks_set = function _RhSubnav_allLinks_set(links) {
    __classPrivateFieldSet(this, _RhSubnav_allLinkElements, links.filter(link => link instanceof HTMLAnchorElement), "f");
}, _RhSubnav_firstLink_get = function _RhSubnav_firstLink_get() {
    const [link] = __classPrivateFieldGet(this, _RhSubnav_instances, "a", _RhSubnav_allLinks_get);
    return link;
}, _RhSubnav_lastLink_get = function _RhSubnav_lastLink_get() {
    return __classPrivateFieldGet(this, _RhSubnav_instances, "a", _RhSubnav_allLinks_get).at(-1);
}, _RhSubnav_onSlotchange = function _RhSubnav_onSlotchange() {
    __classPrivateFieldSet(this, _RhSubnav_instances, this.links, "a", _RhSubnav_allLinks_set);
    __classPrivateFieldGet(this, _RhSubnav_instances, "m", _RhSubnav_firstLastClasses).call(this);
    __classPrivateFieldGet(this, _RhSubnav_tabindex, "f").initItems(__classPrivateFieldGet(this, _RhSubnav_instances, "a", _RhSubnav_allLinks_get));
    __classPrivateFieldGet(this, _RhSubnav_overflow, "f").init(this.linkList, __classPrivateFieldGet(this, _RhSubnav_instances, "a", _RhSubnav_allLinks_get));
}, _RhSubnav_firstLastClasses = function _RhSubnav_firstLastClasses() {
    __classPrivateFieldGet(this, _RhSubnav_instances, "a", _RhSubnav_firstLink_get).classList.add('first');
    __classPrivateFieldGet(this, _RhSubnav_instances, "a", _RhSubnav_lastLink_get).classList.add('last');
}, _RhSubnav_scrollLeft = function _RhSubnav_scrollLeft() {
    __classPrivateFieldGet(this, _RhSubnav_overflow, "f").scrollLeft();
}, _RhSubnav_scrollRight = function _RhSubnav_scrollRight() {
    __classPrivateFieldGet(this, _RhSubnav_overflow, "f").scrollRight();
};
RhSubnav.styles = [styles];
/** Icon name to use for the scroll left button */
RhSubnav.scrollIconLeft = 'angle-left';
/** Icon name to use for the scroll right button */
RhSubnav.scrollIconRight = 'angle-right';
/** Icon set to use for the scroll buttons */
RhSubnav.scrollIconSet = 'fas';
RhSubnav.instances = new Set();
(() => {
    // on resize check for overflows to add or remove scroll buttons
    window.addEventListener('resize', () => {
        // this appears to be an eslint bug.
        // `this` should refer to the class, but in the minified bundle, it is void
        const { instances } = RhSubnav_1;
        for (const instance of instances) {
            __classPrivateFieldGet(instance, _RhSubnav_overflow, "f").onScroll();
        }
    }, { capture: false });
})();
__decorate([
    colorContextConsumer()
], RhSubnav.prototype, "on", void 0);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhSubnav.prototype, "colorPalette", void 0);
__decorate([
    queryAssignedElements()
], RhSubnav.prototype, "links", void 0);
__decorate([
    query('[part="links"]')
], RhSubnav.prototype, "linkList", void 0);
RhSubnav = RhSubnav_1 = __decorate([
    customElement('rh-subnav')
], RhSubnav);
export { RhSubnav };
//# sourceMappingURL=rh-subnav.js.map