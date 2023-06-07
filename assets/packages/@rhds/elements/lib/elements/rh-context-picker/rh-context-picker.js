var _RhContextPicker_instances, _RhContextPicker_internals, _RhContextPicker_target, _RhContextPicker_onInput, _RhContextPicker_setValue;
var RhContextPicker_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { css } from "lit";
const style = css `form{padding:var(--rh-space-lg,16px)}label{display:block}datalist{display:flex;flex-direction:column;justify-content:space-between;writing-mode:vertical-lr}datalist,input{width:200px}`;
let RhContextPicker = RhContextPicker_1 = class RhContextPicker extends LitElement {
    constructor() {
        super(...arguments);
        _RhContextPicker_instances.add(this);
        _RhContextPicker_internals.set(this, this.attachInternals());
        _RhContextPicker_target.set(this, null);
    }
    render() {
        return html `
      <label for="context-range">Color Palette</label>
      <input id="context-range"
             name="range"
             type="range"
             list="palettes"
             max="5"
             @input="${__classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_onInput)}">
      <datalist id="palettes">
        <option value="0" label="darkest"></option>
        <option value="1" label="darker"></option>
        <option value="2" label="dark"></option>
        <option value="3" label="light"></option>
        <option value="4" label="lighter"></option>
        <option value="5" label="lightest"></option>
      </datalist>
    `;
    }
    formStateRestoreCallback(state) {
        __classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_setValue).call(this, state);
    }
    firstUpdated() {
        if (this.target) {
            const root = this.getRootNode();
            __classPrivateFieldSet(this, _RhContextPicker_target, root.getElementById(this.target), "f");
            this.sync();
        }
        else {
            __classPrivateFieldSet(this, _RhContextPicker_target, this.closest('rh-context-provider'), "f");
        }
    }
    updated(changedProperties) {
        if (changedProperties.has('value') && this.value && this.range) {
            this.range.value = RhContextPicker_1.palettes.indexOf(this.value).toString();
        }
    }
    sync() {
        if (this.value) {
            __classPrivateFieldGet(this, _RhContextPicker_target, "f")?.setAttribute('color-palette', this.value);
        }
    }
};
_RhContextPicker_internals = new WeakMap(), _RhContextPicker_target = new WeakMap(), _RhContextPicker_instances = new WeakSet(), _RhContextPicker_onInput = function _RhContextPicker_onInput(e) {
    __classPrivateFieldGet(this, _RhContextPicker_internals, "f").setFormValue(e.target.value);
    __classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_setValue).call(this, e.target.value);
}, _RhContextPicker_setValue = function _RhContextPicker_setValue(value) {
    this.value = RhContextPicker_1.palettes[+value];
    this.sync();
};
RhContextPicker.formAssociated = true;
RhContextPicker.styles = [style];
RhContextPicker.palettes = [
    'darkest',
    'darker',
    'dark',
    'light',
    'lighter',
    'lightest',
];
__decorate([
    property()
], RhContextPicker.prototype, "target", void 0);
__decorate([
    property()
], RhContextPicker.prototype, "value", void 0);
__decorate([
    query('#context-range')
], RhContextPicker.prototype, "range", void 0);
RhContextPicker = RhContextPicker_1 = __decorate([
    customElement('rh-context-picker')
], RhContextPicker);
export { RhContextPicker };
//# sourceMappingURL=rh-context-picker.js.map