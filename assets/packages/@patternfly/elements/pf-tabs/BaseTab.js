import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { query } from 'lit/decorators/query.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
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
class BaseTab extends LitElement {
    static { this.styles = [style]; }
    static { this.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true }; }
    #internals = this.attachInternals();
    connectedCallback() {
        super.connectedCallback();
        this.id ||= getRandomId(this.localName);
        this.addEventListener('click', this.#clickHandler);
        this.#internals.role = 'tab';
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
        this.#internals.ariaSelected = String(this.ariaSelected);
        if (changed.has('active')) {
            this.#activeChanged();
        }
        if (changed.has('disabled')) {
            this.#disabledChanged();
        }
    }
    focus() {
        this.button.focus();
    }
    #clickHandler() {
        if (!this.disabled && this.#internals.ariaDisabled !== 'true' && this.ariaDisabled !== 'true') {
            this.active = true;
            this.focus(); // safari fix
        }
    }
    #activeChanged() {
        if (this.active && !this.disabled) {
            this.#internals.ariaSelected = 'true';
        }
        else {
            this.#internals.ariaSelected = 'false';
        }
        this.dispatchEvent(new TabExpandEvent(this.active, this));
    }
    /**
     * if a tab is disabled, then it is also aria-disabled
     * if a tab is removed from disabled its not necessarily
     * not still aria-disabled so we don't remove the aria-disabled
     */
    #disabledChanged() {
        this.#internals.ariaDisabled = String(!!this.disabled);
    }
}
__decorate([
    queryAssignedElements({ slot: 'icon', flatten: true })
], BaseTab.prototype, "icons", void 0);
__decorate([
    query('button')
], BaseTab.prototype, "button", void 0);
export { BaseTab };
//# sourceMappingURL=BaseTab.js.map