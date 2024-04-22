var _RhTab_instances, _RhTab_internals, _RhTab_onClick, _RhTab_activate, _RhTab_disabledChanged;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';
import { consume } from '@lit/context';
import { observed } from '@patternfly/pfe-core/decorators.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { context } from './context.js';
import { css } from "lit";
const styles = css `:host{display:flex;flex:none}:host([vertical]) [part=text]{max-width:100%;overflow-wrap:break-word}[hidden]{display:none!important}slot[name=icon]{display:block}button{margin:0;font-family:inherit;font-size:100%;border:0;position:relative;display:flex;flex:1;text-decoration:none;cursor:pointer;align-items:center;background-color:inherit;color:var(--_button-text-color);padding-block-start:var(--rh-tabs-link-padding-block-start,var(--rh-space-lg,16px));padding-inline-start:var(--rh-tabs-link-padding-inline-start,var(--rh-space-2xl,32px));padding-block-end:var(--rh-tabs-link-padding-block-end,var(--rh-space-lg,16px));padding-inline-end:var(--rh-tabs-link-padding-inline-end,var(--rh-space-2xl,32px));max-width:var(--_tab-max-width,200px);max-height:100%}button:after,button:before{position:absolute;inset:0;content:"";border-style:solid;padding:0;margin:0;background-color:transparent}button:before{pointer-events:none;border:0 solid transparent}button:focus-visible{outline:var(--rh-border-width-md,2px) solid var(--_button-focus-outline-color);outline-offset:-8px;border-radius:10px}button:after{background-color:transparent;border-inline:0 solid transparent;border-block-start:var(--rh-border-width-lg,3px) solid transparent;border-block-end:var(--rh-border-width-sm,1px) solid transparent}:host([fill]) button{flex-basis:100%;justify-content:center}:host(:disabled) button{pointer-events:none}:host([aria-disabled=true]) button{cursor:default}#container{display:flex;width:100%;--_button-text-color:var(\n        --rh-tabs-link-color,\n        var(--rh-color-text-secondary-on-light, #4d4d4d)\n      );--_button-focus-outline-color:var(--rh-color-border-interactive-on-light, #0066cc)}#container.dark{--_button-text-color:var(\n        --rh-tabs-link-color,\n        var(--rh-color-text-secondary-on-dark, #c7c7c7)\n      );--_button-focus-outline-color:var(--rh-color-border-interactive-on-dark, #92c5f9)}#container.active,:host([active]) #container{--_button-text-color:var(\n        --rh-tabs-link-color,\n        var(--rh-color-text-primary-on-light, #151515)\n      );--_active-tab-border-color:var(\n        --rh-tabs-active-border-color,\n        var(--rh-color-accent-brand-on-light, #ee0000)\n      )}#container.active.dark,:host([active]) #container.dark{--_button-text-color:var(\n        --rh-tabs-link-color,\n        var(--rh-color-text-primary-on-dark, #ffffff)\n      );--_active-tab-border-color:var(\n        --rh-tabs-active-border-color,\n        var(--rh-color-accent-brand-on-dark, #ee0000)\n      )}#container.box,:host([box]) #container{--_inactive-tab-background-color:var(--rh-color-surface-lighter, #f2f2f2)}#container.dark.box,:host([box]) #container.dark{--_inactive-tab-background-color:var(--rh-color-surface-dark, #383838)}#container.active{--_active-tab-border-color:var(\n        --rh-tabs-active-border-color,\n        var(--rh-color-border-interactive-on-light, #0066cc)\n      )}#container.active.dark{--_active-tab-border-color:var(\n        --rh-tabs-active-border-color,\n        var(--rh-color-border-interactive-on-dark, #92c5f9)\n      )}.vertical button,:host([vertical]) button{text-align:start}[part=icon]{margin-inline-end:var(--rh-space-md,8px)}#container.active:not(.box) button:after,:host([active]:not([box])) button:after{border-block-end:var(--rh-border-width-lg,3px) solid var(--_active-tab-border-color)}#container.active.box button:before,:host([active][box]) button:before{border-inline-color:var(--_border-color);border-inline-start-width:var(--rh-border-width-sm,1px)}#container.active.box button:after,:host([active][box]) button:after{border-block-start:var(--rh-border-width-lg,3px) solid var(--_active-tab-border-color);border-block-end:var(--rh-border-width-sm,1px) solid var(--_context-background-color,var(--rh-color-white,#ffffff))}#container.box:not(.active),:host([box]:not([active])) #container{background-color:var(--_inactive-tab-background-color)}#container.box:not(.active) button:before,:host([box]:not([active])) button:before{border-inline-color:var(--_border-color);border-inline-start-width:var(--rh-border-width-sm,1px)}#container.box:not(.active) button:after,:host([box]:not([active])) button:after{border-block-end-color:var(--_border-color)}#container.box.active.first button:before,:host([box][active]) button:before{border-inline-start-color:var(--_border-color);border-inline-start-width:var(--rh-border-width-sm,1px)}#container.first.box:not(.active) button:before,:host(.first[box]:not([active])) button:before{border-inline-color:transparent}#container.last.box.active button:before,:host(.last[box][active]) button:before{border-inline-end-color:var(--_border-color);border-inline-end-width:var(--rh-border-width-sm,1px)}@media screen and (min-width:768px){#container.vertical:not(.box) button,:host([vertical]:not([box])) button{padding-block:var(--rh-tabs-link-padding-block-start,var(--rh-space-md,8px)) var(--rh-tabs-link-padding-block-start,var(--rh-space-md,8px))}#container.vertical.active button:after,:host([vertical][active]) button:after{border-block-end:transparent}#container.box:not(.vertical,.active) button:before,:host([box]:not([vertical],[active])) button:before{border-inline-color:var(--_border-color);border-inline-start-width:var(--rh-border-width-sm,1px)}#container.box.vertical:not(.active) button:before,:host([box][vertical]:not([active])) button:before{border-inline-start-color:transparent;border-inline-end:var(--rh-border-width-sm,1px) solid var(--_border-color);border-block-start:var(--rh-border-width-sm,1px) solid var(--_border-color)}#container.box:not(.active,.vertical) button:after,:host([box]:not([active],[vertical])) button:after{border-block-end-color:var(--_border-color)}#container.active.box.vertical button:after,:host([active][box][vertical]) button:after{border-block-start:var(--rh-border-width-sm,1px) solid var(--_border-color)}#container.box.vertical:not(.active) button:after,:host([box][vertical]:not([active])) button:after{border-block-end-color:transparent}#container.vertical.box.first,:host(.first[vertical][box]){margin-block-start:var(--rh-space-2xl,32px)}#container.vertical.box.last,:host(.last[vertical][box]){margin-block-end:var(--rh-space-2xl,32px)}#container.first.vertical:not(.box),:host(.first[vertical]:not([box])){margin-block-start:var(--rh-space-xl,24px)}#container.last.vertical:not(.box),:host(.last[vertical]:not([box])){margin-block-end:var(--rh-space-xl,24px)}#container.active.box:not(.vertical) button:after,:host([active][box]:not([vertical])) button:after{border-block-start:var(--rh-border-width-lg,3px) solid var(--_active-tab-border-color);border-block-end:var(--rh-border-width-sm,1px) solid var(--_context-background-color,var(--rh-color-white,#ffffff))}#container.first.box.vertical.active button:after,:host(.first[box][vertical][active]) button:after{border-block-start-color:var(--_border-color);border-block-start-width:var(--rh-border-width-sm,1px)}#container.box.vertical.active button:before,:host([box][vertical][active]) button:before{border-inline-start:var(--rh-border-width-lg,3px) solid var(--_active-tab-border-color);border-inline-end:var(--rh-border-width-sm,1px) solid var(--_context-background-color,var(--rh-color-white,#ffffff))}#container.vertical.active:not(.box) button:before,:host([vertical][active]:not([box])) button:before{border-inline-start:var(--rh-border-width-lg,3px) solid var(--_active-tab-border-color)}#container.first.vertical.box:not(.active) button:before,:host(.first[vertical][box]:not([active])) button:before{border-block-start-color:transparent}#container.first.box.active:not(.vertical) button:before,:host(.first[box][active]:not([vertical])) button:before{border-inline-start-color:var(--_border-color);border-inline-start-width:var(--rh-border-width-sm,1px)}#container.last.box.active:not(.vertical) button:before,:host(.last[box][active]:not([vertical])) button:before{border-inline-end-color:var(--_border-color);border-inline-end-width:var(--rh-border-width-sm,1px)}#container.last.box.vertical.active button:before,:host(.last[box][vertical][active]) button:before{border-block-end-color:var(--_border-color);border-block-end-width:var(--rh-border-width-sm,1px)}#container.last.box.vertical:not(.active) button:after,:host(.last[box][vertical]:not([active])) button:after{border-block-end:none}}`;
export class TabExpandEvent extends Event {
    constructor(active, tab) {
        super('expand', { bubbles: true, cancelable: true });
        this.active = active;
        this.tab = tab;
    }
}
/**
 * The tab button for use within a rh-tabs element, must be paired with a rh-tab-panel.
 *
 * @slot icon - Can contain an `<svg>` or `<pf-icon>`
 * @slot - Tab title text
 *
 * @csspart button - `<button>` element
 * @csspart icon - icon `<span>` element
 * @csspart text - tile text `<span>` element
 *
 * @cssprop {<color>} --rh-tabs-link-color - Tab link text color {@default `#4d4d4d`}
 * @cssprop {<color>} --rh-tabs-active-border-color - Tab active border color {@default `#ff442b`}
 * @cssprop {<length>} --rh-tabs-link-padding-inline-start - Tab padding inline start {@default `32px`}
 * @cssprop {<length>} --rh-tabs-link-padding-block-start - Tab padding block start {@default `16px`}
 * @cssprop {<length>} --rh-tabs-link-padding-inline-end - Tab padding inline end {@default 32px`}
 * @cssprop {<length>} --rh-tabs-link-padding-block-end - Tab padding block end {@default `16px`}
 *
 * @fires { TabExpandEvent } expand - when a tab expands
 */
let RhTab = class RhTab extends LitElement {
    constructor() {
        super(...arguments);
        _RhTab_instances.add(this);
        /** `active` should be observed, and true when the tab is selected */
        this.active = false;
        /** `disabled` should be observed, and true when the tab is disabled */
        this.disabled = false;
        _RhTab_internals.set(this, this.attachInternals());
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId(this.localName));
        this.addEventListener('click', __classPrivateFieldGet(this, _RhTab_instances, "m", _RhTab_onClick));
        __classPrivateFieldGet(this, _RhTab_internals, "f").role = 'tab';
    }
    render() {
        const { active, on = '' } = this;
        const { box = false, vertical = false, firstTab, lastTab } = this.ctx ?? {};
        const first = firstTab === this;
        const last = lastTab === this;
        return html `
      <div id="container" class="${classMap({ active, box, vertical, first, last, [on]: !!on })}">
        <button part="button" ?disabled="${this.disabled}">
          <slot name="icon"
                part="icon"
                ?hidden="${!this.icons.length}"
                @slotchange="${() => this.requestUpdate()}"></slot>
          <slot part="text"></slot>
        </button>
      </div>
    `;
    }
    updated(changed) {
        if (changed.has('active') && this.active && !changed.get('active')) {
            __classPrivateFieldGet(this, _RhTab_instances, "m", _RhTab_activate).call(this);
        }
        if (changed.has('disabled')) {
            __classPrivateFieldGet(this, _RhTab_instances, "m", _RhTab_disabledChanged).call(this);
        }
    }
    focus() {
        this.button.focus();
    }
};
_RhTab_internals = new WeakMap();
_RhTab_instances = new WeakSet();
_RhTab_onClick = function _RhTab_onClick() {
    if (!this.disabled && __classPrivateFieldGet(this, _RhTab_internals, "f").ariaDisabled !== 'true' && this.ariaDisabled !== 'true') {
        __classPrivateFieldGet(this, _RhTab_instances, "m", _RhTab_activate).call(this);
        this.focus(); // safari fix
    }
};
_RhTab_activate = function _RhTab_activate() {
    this.dispatchEvent(new TabExpandEvent(this.active, this));
};
_RhTab_disabledChanged = function _RhTab_disabledChanged() {
    __classPrivateFieldGet(this, _RhTab_internals, "f").ariaDisabled = String(!!this.disabled);
};
RhTab.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
RhTab.version = '{{version}}';
RhTab.styles = [styles];
__decorate([
    observed,
    property({ reflect: true, type: Boolean })
], RhTab.prototype, "active", void 0);
__decorate([
    observed,
    property({ reflect: true, type: Boolean })
], RhTab.prototype, "disabled", void 0);
__decorate([
    consume({ context, subscribe: true }),
    property({ attribute: false })
], RhTab.prototype, "ctx", void 0);
__decorate([
    colorContextConsumer()
], RhTab.prototype, "on", void 0);
__decorate([
    queryAssignedElements({ slot: 'icon', flatten: true })
], RhTab.prototype, "icons", void 0);
__decorate([
    query('button')
], RhTab.prototype, "button", void 0);
RhTab = __decorate([
    customElement('rh-tab')
], RhTab);
export { RhTab };
//# sourceMappingURL=rh-tab.js.map