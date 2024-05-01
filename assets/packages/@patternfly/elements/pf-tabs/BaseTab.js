var _BaseTab_instances, _BaseTab_internals, _BaseTab_clickHandler, _BaseTab_activeChanged, _BaseTab_disabledChanged;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { query } from 'lit/decorators/query.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { css } from "lit";
const style = css `:host {\n  display: flex;\n  flex: none;\n}\n\n:host([vertical]) [part="text"] {\n  max-width: 100%;\n  overflow-wrap: break-word;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nslot[name="icon"] {\n  display: block;\n}\n\nbutton {\n  margin: 0;\n  font-family: inherit;\n  font-size: 100%;\n  border: 0;\n  position: relative;\n  display: flex;\n  flex: 1;\n  text-decoration: none;\n  cursor: pointer;\n}\n\nbutton::before,\nbutton::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  border-style: solid;\n  padding: 0;\n  margin: 0;\n  background-color: transparent;\n}\n\nbutton::before {\n  pointer-events: none;\n}\n\n:host([fill]) button {\n  flex-basis: 100%;\n  justify-content: center;\n}\n\n:host(:disabled) button {\n  pointer-events: none;\n}\n\n:host([aria-disabled="true"]) button {\n  cursor: default;\n}\n`;
export class TabExpandEvent extends ComposedEvent {
    constructor(active, tab) {
        super('expand');
        this.active = active;
        this.tab = tab;
    }
}
/**
 * @fires {TabExpandEvent} expand - when a tab is selected
 */
export class BaseTab extends LitElement {
    constructor() {
        super(...arguments);
        _BaseTab_instances.add(this);
        _BaseTab_internals.set(this, this.attachInternals());
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId(this.localName));
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
    focus() {
        this.button.focus();
    }
}
_BaseTab_internals = new WeakMap(), _BaseTab_instances = new WeakSet(), _BaseTab_clickHandler = function _BaseTab_clickHandler() {
    if (!this.disabled && __classPrivateFieldGet(this, _BaseTab_internals, "f").ariaDisabled !== 'true' && this.ariaDisabled !== 'true') {
        this.active = true;
        this.focus(); // safari fix
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
BaseTab.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
__decorate([
    queryAssignedElements({ slot: 'icon', flatten: true })
], BaseTab.prototype, "icons", void 0);
__decorate([
    query('button')
], BaseTab.prototype, "button", void 0);
//# sourceMappingURL=BaseTab.js.map