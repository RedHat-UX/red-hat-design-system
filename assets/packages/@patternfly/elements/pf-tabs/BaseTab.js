var _BaseTab_instances, _BaseTab_internals, _BaseTab_clickHandler, _BaseTab_activeChanged, _BaseTab_disabledChanged;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { query } from 'lit/decorators/query.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { css } from "lit";
const style = css `:host{display:flex;flex:none}:host([vertical]) [part=text]{max-width:100%;overflow-wrap:break-word}[hidden]{display:none!important}slot[name=icon]{display:block}button{margin:0;font-family:inherit;font-size:100%;border:0;position:relative;display:flex;flex:1;text-decoration:none;cursor:pointer}button::after,button::before{position:absolute;top:0;right:0;bottom:0;left:0;content:"";border-style:solid;padding:0;margin:0;background-color:transparent}button::before{pointer-events:none}:host([fill]) button{flex-basis:100%;justify-content:center}:host(:disabled) button{pointer-events:none}:host([aria-disabled=true]) button{cursor:default}`;
export class TabExpandEvent extends ComposedEvent {
    constructor(active, tab) {
        super('expand');
        this.active = active;
        this.tab = tab;
    }
}
export class BaseTab extends LitElement {
    constructor() {
        super(...arguments);
        _BaseTab_instances.add(this);
        _BaseTab_internals.set(this, this.attachInternals());
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', __classPrivateFieldGet(this, _BaseTab_instances, "m", _BaseTab_clickHandler));
        __classPrivateFieldGet(this, _BaseTab_internals, "f").role = 'tab';
    }
    render() {
        return html `
      <button part="button" ?disabled="${this.disabled}">
        <slot name="icon"
              part="icon"
              ?hidden="${!this.icons.length}"
              @slotchange="${() => this.requestUpdate()}"></slot>
        <slot part="text"></slot>
      </button>
    `;
    }
    updated(changed) {
        __classPrivateFieldGet(this, _BaseTab_internals, "f").ariaSelected = String(this.ariaSelected);
        if (changed.has('active')) {
            __classPrivateFieldGet(this, _BaseTab_instances, "m", _BaseTab_activeChanged).call(this);
        }
        if (changed.has('disabled')) {
            __classPrivateFieldGet(this, _BaseTab_instances, "m", _BaseTab_disabledChanged).call(this);
        }
    }
}
_BaseTab_internals = new WeakMap(), _BaseTab_instances = new WeakSet(), _BaseTab_clickHandler = function _BaseTab_clickHandler() {
    if (!this.disabled && __classPrivateFieldGet(this, _BaseTab_internals, "f").ariaDisabled !== 'true' && this.ariaDisabled !== 'true') {
        this.active = true;
    }
}, _BaseTab_activeChanged = function _BaseTab_activeChanged() {
    if (this.active && !this.disabled) {
        __classPrivateFieldGet(this, _BaseTab_internals, "f").ariaSelected = 'true';
    }
    else {
        __classPrivateFieldGet(this, _BaseTab_internals, "f").ariaSelected = 'false';
    }
    this.dispatchEvent(new TabExpandEvent(this.active, this));
}, _BaseTab_disabledChanged = function _BaseTab_disabledChanged() {
    __classPrivateFieldGet(this, _BaseTab_internals, "f").ariaDisabled = String(!!this.disabled);
};
BaseTab.styles = [style];
BaseTab.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
__decorate([
    queryAssignedElements({ slot: 'icon', flatten: true })
], BaseTab.prototype, "icons", void 0);
__decorate([
    query('button')
], BaseTab.prototype, "button", void 0);
//# sourceMappingURL=BaseTab.js.map