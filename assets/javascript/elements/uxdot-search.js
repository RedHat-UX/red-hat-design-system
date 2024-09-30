var _UxdotSearch_instances, _UxdotSearch_internals, _UxdotSearch_ariaLabel, _UxdotSearch_input_get, _UxdotSearch_firstLink_get, _UxdotSearch_lastLink_get, _UxdotSearch_onOutsideClick, _UxdotSearch_onClickSearch, _UxdotSearch_onBlur, _UxdotSearch_onInput, _UxdotSearch_onKeydown, _UxdotSearch_focus;
var UxdotSearch_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import '@rhds/elements/rh-button/rh-button.js';
import { css } from "lit";
const styles = css `:host{display:grid;gap:var(--rh-space-lg);grid-template:1fr/1fr max-content;font-family:var(--rh-font-family-body-text);position:relative}[hidden]{display:none!important}input{border:var(--rh-border-width-sm);border-bottom-color:var(--rh-color-gray-50);padding:var(--rh-space-md)}input:focus{border-bottom-color:var(--rh-color-interactive-primary-default-on-light);border-bottom-width:var(--rh-border-width-md)}input::placeholder{font-family:inherit;font-size:var(--rh-font-size-body-text-md)}#container{position:absolute;max-height:300px;overflow-y:scroll;z-index:2;grid-column:1/2;width:calc(100% + var(--rh-border-width-md)*2);inset-block-start:var(--rh-length-2xl);inset-inline-start:calc(var(--rh-space-md)*-1);padding:var(--rh-space-sm)}ol{list-style-type:none;flex-flow:column nowrap;padding-inline-start:0;border:var(--rh-border-width-sm);background:var(--rh-color-surface-lightest);margin:0;height:calc(100% - var(--rh-space-md));width:calc(100% - var(--rh-border-width-md)*2)}a{color:inherit;text-decoration:none;font-size:var(--rh-font-size-body-text-sm)}a:focus{outline:none}li{padding:var(--rh-space-md)}li:focus-within,li[aria-selected=true]{outline:var(--rh-border-width-md)}`;
let UxdotSearch = UxdotSearch_1 = class UxdotSearch extends LitElement {
    constructor() {
        super(...arguments);
        _UxdotSearch_instances.add(this);
        this.items = [];
        this.expanded = false;
        _UxdotSearch_internals.set(this, !isServer ? this.attachInternals() : null);
        _UxdotSearch_ariaLabel.set(this, '');
    }
    get form() {
        return __classPrivateFieldGet(this, _UxdotSearch_internals, "f")?.form ?? null;
    }
    get value() {
        return __classPrivateFieldGet(this, _UxdotSearch_instances, "a", _UxdotSearch_input_get)?.value ?? '';
    }
    set value(value) {
        if (__classPrivateFieldGet(this, _UxdotSearch_instances, "a", _UxdotSearch_input_get)) {
            __classPrivateFieldGet(this, _UxdotSearch_instances, "a", _UxdotSearch_input_get).value = value ?? '';
        }
    }
    get selectedItem() {
        return this.shadowRoot?.querySelector('[aria-selected="true"]');
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('keydown', __classPrivateFieldGet(this, _UxdotSearch_instances, "m", _UxdotSearch_onKeydown));
        this.addEventListener('blur', __classPrivateFieldGet(this, _UxdotSearch_instances, "m", _UxdotSearch_onBlur));
        __classPrivateFieldSet(this, _UxdotSearch_ariaLabel, this.getAttribute('aria-label') ?? '', "f");
        this.removeAttribute('aria-label');
        if (__classPrivateFieldGet(this, _UxdotSearch_ariaLabel, "f")) {
            this.setAttribute('original-aria-label', __classPrivateFieldGet(this, _UxdotSearch_ariaLabel, "f"));
        }
        this.requestUpdate();
    }
    render() {
        return html `
      <input id="input"
             placeholder="${ifDefined(this.placeholder)}"
             role="combobox"
             aria-label="${ifDefined(__classPrivateFieldGet(this, _UxdotSearch_ariaLabel, "f"))}"
             aria-autocomplete="list"
             aria-controls="listbox"
             aria-expanded="${String(this.expanded)}"
             @input="${__classPrivateFieldGet(this, _UxdotSearch_instances, "m", _UxdotSearch_onInput)}">
      <div id="container" tabindex="-1" ?hidden="${!this.expanded}">
        <ol id="listbox"
            role="listbox"
            aria-labelledby="input">${this.items.map((item, i) => !item ? '' : html `
          <li role="option"
              data-i="${i}"
              aria-selected="${this.activeIndex === i}">
            <a id="i-${i}"
               tabindex="${this.activeIndex === i ? 0 : -1}"
               href="${item.value}"
               @blur="${__classPrivateFieldGet(this, _UxdotSearch_instances, "m", _UxdotSearch_onBlur)}">${item.label}</a>
          </li>`)}
        </ol>
      </div>
      <rh-button id="button"
                 aria-controls="listbox"
                 aria-expanded="${String(this.expanded)}"
                 @click="${__classPrivateFieldGet(this, _UxdotSearch_instances, "m", _UxdotSearch_onClickSearch)}">Search</rh-button>
    `;
    }
};
_UxdotSearch_internals = new WeakMap();
_UxdotSearch_ariaLabel = new WeakMap();
_UxdotSearch_instances = new WeakSet();
_UxdotSearch_input_get = function _UxdotSearch_input_get() {
    return this.shadowRoot?.getElementById('input') ?? null;
};
_UxdotSearch_firstLink_get = function _UxdotSearch_firstLink_get() {
    return this.shadowRoot?.querySelector('li a') ?? null;
};
_UxdotSearch_lastLink_get = function _UxdotSearch_lastLink_get() {
    return this.shadowRoot?.querySelector('li:last-of-type a') ?? null;
};
_UxdotSearch_onOutsideClick = function _UxdotSearch_onOutsideClick(event) {
    if (event.composedPath().every(x => x !== this)) {
        this.expanded = false;
    }
};
_UxdotSearch_onClickSearch = function _UxdotSearch_onClickSearch() {
    this.expanded = true;
    if (this.value && !isServer) {
        this.form?.requestSubmit();
    }
};
_UxdotSearch_onBlur = async function _UxdotSearch_onBlur() {
    await this.updateComplete;
    if (!this.shadowRoot?.activeElement) {
        await this.updateComplete;
        this.expanded = false;
        if (this.selectedItem) {
            this.value = this.selectedItem.textContent?.trim() ?? '';
        }
    }
};
_UxdotSearch_onInput = function _UxdotSearch_onInput() {
    __classPrivateFieldGet(this, _UxdotSearch_internals, "f")?.setFormValue(this.value);
    if (this.value) {
        this.expanded = true;
    }
};
_UxdotSearch_onKeydown = function _UxdotSearch_onKeydown(event) {
    switch (event.key) {
        case 'ArrowDown':
        case 'ArrowUp': {
            this.expanded = true;
            return __classPrivateFieldGet(this, _UxdotSearch_instances, "m", _UxdotSearch_focus).call(this, event);
        }
        case 'Escape':
            this.expanded = false;
            break;
        case 'Enter': this.form?.requestSubmit();
    }
};
_UxdotSearch_focus = function _UxdotSearch_focus(event) {
    event.preventDefault();
    this.activeIndex ?? (this.activeIndex = -1);
    const d = ({ ArrowDown: 1, ArrowUp: -1 })[event.key];
    const activeElement = this.shadowRoot?.activeElement;
    if (activeElement === __classPrivateFieldGet(this, _UxdotSearch_instances, "a", _UxdotSearch_input_get)) {
        ({ ArrowUp: __classPrivateFieldGet(this, _UxdotSearch_instances, "a", _UxdotSearch_lastLink_get), ArrowDown: __classPrivateFieldGet(this, _UxdotSearch_instances, "a", _UxdotSearch_firstLink_get) })[event.key]?.focus();
        this.activeIndex = d > 0 ? 0 : this.items.length - 1;
    }
    else if (activeElement instanceof HTMLAnchorElement) {
        const nextIndex = this.activeIndex + d;
        const nextItem = this.items[nextIndex];
        const nextFocus = this.shadowRoot?.getElementById(`i-${nextIndex}`) ?? __classPrivateFieldGet(this, _UxdotSearch_instances, "a", _UxdotSearch_input_get);
        this.activeIndex = nextItem ? nextIndex : -1;
        nextFocus?.focus();
    }
};
UxdotSearch.formAssociated = true;
UxdotSearch.styles = [styles];
UxdotSearch.instances = new Set();
(() => {
    globalThis?.addEventListener?.('click', event => {
        for (const instance of UxdotSearch_1.instances) {
            __classPrivateFieldGet(instance, _UxdotSearch_instances, "m", _UxdotSearch_onOutsideClick).call(instance, event);
        }
    });
})();
__decorate([
    property()
], UxdotSearch.prototype, "placeholder", void 0);
__decorate([
    property({ type: Array, attribute: false })
], UxdotSearch.prototype, "items", void 0);
__decorate([
    property({ type: Boolean, state: true })
], UxdotSearch.prototype, "expanded", void 0);
__decorate([
    property({ type: Number, state: true })
], UxdotSearch.prototype, "activeIndex", void 0);
__decorate([
    property()
], UxdotSearch.prototype, "value", null);
UxdotSearch = UxdotSearch_1 = __decorate([
    customElement('uxdot-search')
], UxdotSearch);
export { UxdotSearch };
//# sourceMappingURL=uxdot-search.js.map