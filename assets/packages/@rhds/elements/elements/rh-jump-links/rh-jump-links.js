var _RhJumpLinks_instances, _RhJumpLinks_internals, _RhJumpLinks_overflow, _RhJumpLinks_onScroll, _RhJumpLinks_spy, _RhJumpLinks_onClickScroll, _RhJumpLinks_onSelect, _RhJumpLinks_setActiveItem;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, isServer, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { provide } from '@lit/context';
import { ScrollSpyController } from '@patternfly/pfe-core/controllers/scroll-spy-controller.js';
import { OverflowController } from '@patternfly/pfe-core/controllers/overflow-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { observes } from '@patternfly/pfe-core/decorators.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { RhJumpLink } from './rh-jump-link.js';
import { rhJumpLinksOrientationContext } from './context.js';
import { css } from "lit";
const style = css `:host{display:block;position:relative}.overflow-button{display:hidden}#container{--_bdr:var(--rh-length-4xs,1px) solid var(--rh-color-border-subtle)}:host([orientation=horizontal]){display:flex;justify-content:center}:host([orientation=horizontal]) #container{display:flex;flex-flow:row nowrap;overflow:auto visible}:host([orientation=horizontal]) #container:after,:host([orientation=horizontal]) #container:before{display:block;position:absolute;inset-inline:0;content:""}:host([orientation=horizontal]) #container:before{margin-inline:var(--rh-space-3xl);border-block-start:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}:host([orientation=horizontal]) #container:after{border-block-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle);inset-block-end:0}:host([orientation=horizontal]) .overflow-button{flex:none;line-height:1;opacity:1;border:0;padding-block:0;padding-inline:var(--rh-space-lg,16px);background-color:initial;color:var(--_overflow-button-text-color);position:relative;z-index:2}:host([orientation=horizontal]) .overflow-button rh-icon{pointer-events:none}:host([orientation=horizontal]) .overflow-button rh-icon:dir(rtl){rotate:180deg}:host([orientation=horizontal]) .overflow-button:first-of-type{margin-inline-end:0;translate:0 0}:host([orientation=horizontal]) .overflow-button:first-of-type:before{border-inline-width:0 1px}:host([orientation=horizontal]) .overflow-button:nth-of-type(2){margin-inline-start:0;translate:0 0;inset-inline-start:-1px}:host([orientation=horizontal]) .overflow-button:nth-of-type(2):before{border-inline-width:1px 0}:host([orientation=horizontal]) .overflow-button:disabled{pointer-events:none;color:light-dark(var(--rh-color-gray-40,#a3a3a3),var(--rh-color-gray-50,#707070))}:host([orientation=horizontal]) .overflow-button:hover{color:var(--rh-color-text-primary)}`;
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * Jump links allow users to navigate sections of content on a page.
 * @fires toggle - when the `expanded` disclosure widget is toggled
 * @slot - Place `<rh-jump-link>` or `<rh-jump-links-list>` elements here
 */
let RhJumpLinks = class RhJumpLinks extends LitElement {
    constructor() {
        super(...arguments);
        _RhJumpLinks_instances.add(this);
        /** Whether the layout of children is vertical or horizontal. */
        this.orientation = 'vertical';
        _RhJumpLinks_internals.set(this, InternalsController.of(this, { role: 'navigation' }));
        _RhJumpLinks_overflow.set(this, new OverflowController(this));
        _RhJumpLinks_onScroll.set(this, __classPrivateFieldGet(this, _RhJumpLinks_overflow, "f").onScroll.bind(this));
        _RhJumpLinks_spy.set(this, new ScrollSpyController(this, {
            rootMargin: '0px 0px 0px 0px',
            tagNames: ['rh-jump-link'],
            onIntersection: () => {
                for (const list of this.querySelectorAll('rh-jump-links-list')) {
                    list.active = !!list.querySelector('rh-jump-link[active]');
                }
                __classPrivateFieldGet(this, _RhJumpLinks_overflow, "f").update();
            },
        }));
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('select', __classPrivateFieldGet(this, _RhJumpLinks_instances, "m", _RhJumpLinks_onSelect));
    }
    firstUpdated() {
        const active = this.querySelector('rh-jump-link[active]');
        if (active) {
            __classPrivateFieldGet(this, _RhJumpLinks_instances, "m", _RhJumpLinks_setActiveItem).call(this, active);
        }
    }
    labelChanged() {
        if (this.accessibleLabel) {
            __classPrivateFieldGet(this, _RhJumpLinks_internals, "f").ariaLabel = this.accessibleLabel;
        }
    }
    render() {
        const { overflowLeft, overflowRight, showScrollButtons: overflow } = __classPrivateFieldGet(this, _RhJumpLinks_overflow, "f");
        return html `
        <button id="scroll-start"
                class="overflow-button"
                ?hidden="${!overflow}"
                tabindex="-1"
                data-direction="start"
                aria-label="${this.getAttribute('label-scroll-left') ?? 'Scroll back'}"
                ?disabled="${!overflowLeft}"
                @click="${__classPrivateFieldGet(this, _RhJumpLinks_instances, "m", _RhJumpLinks_onClickScroll)}">
          <rh-icon set="ui" icon="caret-left" loading="eager"></rh-icon>
        </button>

        <div id="container" role="list">
          <slot></slot>
        </div>

        <button id="scroll-end"
                class="overflow-button"
                ?hidden="${!overflow}"
                tabindex="-1"
                data-direction="end"
                aria-label="${this.getAttribute('label-scroll-right') ?? 'Scroll forward'}"
                ?disabled="${!overflowRight}"
                @click="${__classPrivateFieldGet(this, _RhJumpLinks_instances, "m", _RhJumpLinks_onClickScroll)}">
           <rh-icon set="ui" icon="caret-right" loading="eager"></rh-icon>
        </button>
    `;
    }
    async orientationChanged() {
        if (isServer) {
            return;
        }
        if (!this.hasUpdated) {
            await this.updateComplete;
        }
        const container = this.shadowRoot.getElementById('container');
        const items = Array.from(this.querySelectorAll(':scope > *'));
        switch (this.orientation) {
            case 'horizontal':
                __classPrivateFieldGet(this, _RhJumpLinks_overflow, "f").init(container, items);
                container.addEventListener('scroll', __classPrivateFieldGet(this, _RhJumpLinks_onScroll, "f"));
                break;
            case 'vertical':
                container.removeEventListener('scroll', __classPrivateFieldGet(this, _RhJumpLinks_onScroll, "f"));
        }
    }
};
_RhJumpLinks_internals = new WeakMap();
_RhJumpLinks_overflow = new WeakMap();
_RhJumpLinks_onScroll = new WeakMap();
_RhJumpLinks_spy = new WeakMap();
_RhJumpLinks_instances = new WeakSet();
_RhJumpLinks_onClickScroll = function _RhJumpLinks_onClickScroll(event) {
    if (event.target instanceof HTMLElement) {
        switch (event.target.dataset.direction) {
            case 'start':
                if (this.matches(':dir(rtl)')) {
                    __classPrivateFieldGet(this, _RhJumpLinks_overflow, "f").scrollRight();
                }
                else {
                    __classPrivateFieldGet(this, _RhJumpLinks_overflow, "f").scrollLeft();
                }
                break;
            case 'end':
                if (this.matches(':dir(rtl)')) {
                    __classPrivateFieldGet(this, _RhJumpLinks_overflow, "f").scrollLeft();
                }
                else {
                    __classPrivateFieldGet(this, _RhJumpLinks_overflow, "f").scrollRight();
                }
                break;
        }
    }
};
_RhJumpLinks_onSelect = function _RhJumpLinks_onSelect(event) {
    if (event.target instanceof RhJumpLink) {
        __classPrivateFieldGet(this, _RhJumpLinks_instances, "m", _RhJumpLinks_setActiveItem).call(this, event.target);
    }
};
_RhJumpLinks_setActiveItem = async function _RhJumpLinks_setActiveItem(item) {
    await this.updateComplete;
    __classPrivateFieldGet(this, _RhJumpLinks_spy, "f").setActive(item);
};
RhJumpLinks.styles = [style];
__decorate([
    provide({ context: rhJumpLinksOrientationContext }),
    property({ reflect: true })
], RhJumpLinks.prototype, "orientation", void 0);
__decorate([
    property({ attribute: 'accessible-label' })
], RhJumpLinks.prototype, "accessibleLabel", void 0);
__decorate([
    observes('accessibleLabel')
], RhJumpLinks.prototype, "labelChanged", null);
__decorate([
    observes('orientation')
], RhJumpLinks.prototype, "orientationChanged", null);
RhJumpLinks = __decorate([
    customElement('rh-jump-links'),
    themable
], RhJumpLinks);
export { RhJumpLinks };
//# sourceMappingURL=rh-jump-links.js.map