var _RhTab_instances, _RhTab_internals, _RhTab_onClick, _RhTab_onFocus, _RhTab_onKeydown, _RhTab_activate;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, isServer, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
import { consume } from '@lit/context';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { rhTabsActiveTabContext, rhTabsBoxContext, rhTabsManualContext, rhTabsFirstTabContext, rhTabsLastTabContext, rhTabsVerticalContext, } from './context.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:flex;flex:none;--_active-tab-border:var(--rh-border-width-lg,3px) solid var(--_active-tab-border-color,var(--rh-tabs-active-border-color,var(--rh-color-accent-brand)));--_active-tab-border-open:var(--rh-border-width-sm,1px) solid var(--rh-color-surface)}[part=text]{display:inline;line-height:var(--rh-line-height-heading,1.3);text-wrap:balance}.vertical [part=text]{max-width:100%;overflow-wrap:break-word}[hidden]{display:none!important}#button{margin:0;font-family:inherit;font-size:100%;border:0;position:relative;display:flex;flex:1;gap:var(--rh-space-md,8px);text-decoration:none;cursor:pointer;align-items:center;background-color:inherit;color:var(--rh-tabs-link-color,var(--rh-color-text-secondary));width:100%;max-width:var(--_tab-max-width,200px);max-height:100%;line-height:0;padding:var(--rh-tabs-link-padding-block-start,var(--rh-space-lg,16px)) var(--rh-tabs-link-padding-inline-end,var(--rh-space-2xl,32px)) var(--rh-tabs-link-padding-block-end,var(--rh-space-lg,16px)) var(--rh-tabs-link-padding-inline-start,var(--rh-space-2xl,32px))}#button:after,#button:before{position:absolute;inset:0;content:"";border-style:solid;padding:0;margin:0;background-color:initial}#button:before{pointer-events:none;border:0 solid #0000}#button:after{background-color:initial;border-inline:0 solid #0000;border-block-start:var(--rh-border-width-lg,3px) solid #0000;border-block-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}#button.box{background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-darker,#1f1f1f))}#button.vertical{text-align:start;padding-inline:var(--rh-space-lg,16px)}@container (min-width: 768px){#button.vertical.box.first{margin-block-start:var(--rh-space-2xl,32px)}#button.vertical.box.last{margin-block-end:var(--rh-space-2xl,32px)}}@container (max-width: 767px){#button.vertical:not(.box):after{border-block-start:var(--rh-border-width-lg,3px) solid #0000}}@container (min-width: 768px){#button.vertical:not(.box){padding-block:var(--rh-tabs-link-padding-block-start,var(--rh-space-md,8px)) var(--rh-tabs-link-padding-block-end,var(--rh-space-md,8px))}#button.vertical:not(.box):after{border-block-end-color:#0000}#button.vertical.first:not(.box){margin-block-start:var(--rh-space-xl,24px)}#button.vertical.last:not(.box){margin-block-end:var(--rh-space-xl,24px)}}#button.active{color:var(--rh-tabs-link-color,var(--rh-color-text-primary))}#button.active.box{background-color:initial}#button.active.box:before{border-inline-color:var(--rh-color-border-subtle);border-inline-start-width:var(--rh-border-width-sm,1px)}#button.active.box:after{border-block-start:var(--_active-tab-border);border-block-end:var(--_active-tab-border-open)}#button.active.box.first:before{border-inline-start-color:var(--rh-color-border-subtle);border-inline-start-width:var(--rh-border-width-sm,1px)}#button.active.box.last:before{border-inline-end-color:var(--rh-color-border-subtle);border-inline-end-width:var(--rh-border-width-sm,1px)}@container (min-width: 768px){#button.active.box.vertical:before{border-inline-start:var(--_active-tab-border);border-inline-end:var(--_active-tab-border-open)}#button.active.box.vertical:after{border-block-start:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}#button.active.box.vertical.first:after{border-block-start-color:var(--rh-color-border-subtle);border-block-start-width:var(--rh-border-width-sm,1px)}#button.active.box.vertical.last:before{border-block-end-color:var(--rh-color-border-subtle);border-block-end-width:var(--rh-border-width-sm,1px)}#button.active.box.vertical.last:after{border-block-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}#button.active.box.first:not(.vertical):before{border-inline-start-color:var(--rh-color-border-subtle);border-inline-start-width:var(--rh-border-width-sm,1px)}#button.active.box.last:not(.vertical):before{border-inline-end-color:var(--rh-color-border-subtle);border-inline-end-width:var(--rh-border-width-sm,1px)}#button.active.box:not(.vertical):after{border-block-start:var(--_active-tab-border);border-block-end:var(--_active-tab-border-open)}}@container (max-width: 767px){#button.active.vertical:not(.box):after{border-block-start:#0000;border-block-end:var(--_active-tab-border)}}@container (min-width: 768px){#button.active.vertical:not(.box):before{border-inline-start:var(--_active-tab-border)}#button.active.vertical:not(.box):after{border-block-end:#0000}}#button.active:not(.box):not(.vertical):after{border-block-end:var(--_active-tab-border)}#button.box:not(.active):before{border-inline-color:var(--rh-color-border-subtle);border-inline-start-width:var(--rh-border-width-sm,1px)}#button.box:not(.active):after{border-block-end-color:var(--rh-color-border-subtle)}#button.box.vertical:not(.active):hover:before{border-block-start:var(--rh-border-width-lg,3px) solid var(--rh-color-interactive-secondary-default)}@container (min-width: 768px){#button.box.vertical:not(.active):before{border-inline-start-color:#0000;border-inline-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle);border-block-start:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}#button.box.vertical:not(.active):after{border-block-end-color:#0000}#button.box.vertical:not(.active):hover:before{border-inline-start:var(--rh-border-width-lg,3px) solid var(--rh-color-interactive-secondary-default);border-block-start:0}#button.box.vertical:not(.active):hover:after{border-block-start:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}}@container (min-width: 768px) and (min-width: 768px){#button.box.vertical.first:not(.active):before{border-block-start:0 solid #0000;border-inline-end-color:var(--rh-color-border-subtle)}#button.box.vertical.last:not(.active):after{border-block-end:none}}#button.box:not(.active):not(.vertical):hover:after{border-block-start:var(--rh-border-width-lg,3px) solid var(--rh-color-interactive-secondary-default)}@container (min-width: 768px){#button.box:not(.active):not(.vertical):after{border-block-end-color:var(--rh-color-border-subtle)}}#button.box.first:not(.active):before{border-inline-color:#0000}@container (max-width: 767px){#button.vertical:not(.active):not(.box):hover:after{border-block-end:var(--rh-border-width-lg,3px) solid var(--rh-color-interactive-secondary-default)}}@container (min-width: 768px){#button.vertical:not(.active):not(.box):hover:after{border-inline-start:var(--rh-border-width-lg,3px) solid var(--rh-color-interactive-secondary-default);border-block-start:#0000;border-block-end:#0000}}#button:not(.active):not(.vertical,.box):hover:before{border-block-end:var(--rh-border-width-lg,3px) solid var(--rh-color-interactive-secondary-default)}:host(:disabled) #button{pointer-events:none}:host([aria-disabled=true]) #button{cursor:default}:host(:is(:focus,:focus-within)){outline:none}:host(:is(:focus,:focus-within)) #button{outline:1px auto var(--rh-color-interactive-primary-default);outline-offset:-3px}`;
export class TabExpandEvent extends Event {
    constructor(active, tab) {
        super('expand', { bubbles: true, cancelable: true });
        this.active = active;
        this.tab = tab;
    }
}
/**
 * The tab button for use within a rh-tabs element, must be paired with a rh-tab-panel.
 * @fires { TabExpandEvent } expand - when a tab expands
 */
let RhTab = class RhTab extends LitElement {
    constructor() {
        super(...arguments);
        _RhTab_instances.add(this);
        /** True when the tab is selected */
        this.active = false;
        /** True when the tab is disabled */
        this.disabled = false;
        this.box = false;
        this.vertical = false;
        this.manual = false;
        this.activeTab = null;
        this.firstTab = null;
        this.lastTab = null;
        _RhTab_internals.set(this, InternalsController.of(this, { role: 'tab' }));
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId(this.localName));
        this.addEventListener('click', __classPrivateFieldGet(this, _RhTab_instances, "m", _RhTab_onClick));
        this.addEventListener('keydown', __classPrivateFieldGet(this, _RhTab_instances, "m", _RhTab_onKeydown));
        this.addEventListener('focus', __classPrivateFieldGet(this, _RhTab_instances, "m", _RhTab_onFocus));
    }
    render() {
        const { box = false, vertical = false, activeTab, firstTab, lastTab } = this;
        const active = isServer ? this.active : activeTab === this;
        const first = firstTab === this;
        const last = lastTab === this;
        return html `
      <!-- element that contains the interactive part of a tab -->
      <div id="button"
           part="button"
           ?disabled="${this.disabled}"
           class="${classMap({ active, box, vertical, first, last })}">
        <!-- Can contain an \`<svg>\` or \`<rh-icon>\` -->
        <slot name="icon"
              part="icon"></slot>
        <!-- Tab title text -->
        <slot part="text"></slot>
      </div>
    `;
    }
    activeChanged(old) {
        __classPrivateFieldGet(this, _RhTab_internals, "f").ariaSelected = String(!!this.active);
        if (this.active && !old) {
            __classPrivateFieldGet(this, _RhTab_instances, "m", _RhTab_activate).call(this);
        }
    }
    /**
     * if a tab is disabled, then it is also aria-disabled
     * if a tab is removed from disabled its not necessarily
     * not still aria-disabled so we don't remove the aria-disabled
     */
    disabledChanged() {
        __classPrivateFieldGet(this, _RhTab_internals, "f").ariaDisabled = String(!!this.disabled);
    }
};
_RhTab_internals = new WeakMap();
_RhTab_instances = new WeakSet();
_RhTab_onClick = function _RhTab_onClick() {
    if (!this.disabled && __classPrivateFieldGet(this, _RhTab_internals, "f").ariaDisabled !== 'true' && this.ariaDisabled !== 'true') {
        __classPrivateFieldGet(this, _RhTab_instances, "m", _RhTab_activate).call(this);
        if (InternalsController.isSafari) {
            this.focus();
        }
    }
};
_RhTab_onFocus = function _RhTab_onFocus() {
    if (!this.manual && !this.disabled) {
        __classPrivateFieldGet(this, _RhTab_instances, "m", _RhTab_activate).call(this);
    }
};
_RhTab_onKeydown = function _RhTab_onKeydown(event) {
    if (!this.disabled) {
        switch (event.key) {
            case 'Enter':
                __classPrivateFieldGet(this, _RhTab_instances, "m", _RhTab_activate).call(this);
        }
    }
};
_RhTab_activate = function _RhTab_activate() {
    this.dispatchEvent(new TabExpandEvent(this.active, this));
};
RhTab.styles = [styles];
__decorate([
    property({ reflect: true, type: Boolean })
], RhTab.prototype, "active", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhTab.prototype, "disabled", void 0);
__decorate([
    consume({ context: rhTabsBoxContext, subscribe: true }),
    state()
], RhTab.prototype, "box", void 0);
__decorate([
    consume({ context: rhTabsVerticalContext, subscribe: true }),
    state()
], RhTab.prototype, "vertical", void 0);
__decorate([
    consume({ context: rhTabsManualContext, subscribe: true }),
    state()
], RhTab.prototype, "manual", void 0);
__decorate([
    consume({ context: rhTabsActiveTabContext, subscribe: true }),
    state()
], RhTab.prototype, "activeTab", void 0);
__decorate([
    consume({ context: rhTabsFirstTabContext, subscribe: true }),
    state()
], RhTab.prototype, "firstTab", void 0);
__decorate([
    consume({ context: rhTabsLastTabContext, subscribe: true }),
    state()
], RhTab.prototype, "lastTab", void 0);
__decorate([
    observes('active')
], RhTab.prototype, "activeChanged", null);
__decorate([
    observes('disabled')
], RhTab.prototype, "disabledChanged", null);
RhTab = __decorate([
    customElement('rh-tab'),
    themable
], RhTab);
export { RhTab };
//# sourceMappingURL=rh-tab.js.map