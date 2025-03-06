var _RhContextPicker_instances, _RhContextPicker_internals, _RhContextPicker_target, _RhContextPicker_onInput, _RhContextPicker_setValue;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { colorContextConsumer } from '@rhds/elements/lib/context/color/consumer.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { ColorSurfaceDarkest as darkest, ColorSurfaceDarker as darker, ColorSurfaceDark as dark, ColorSurfaceLight as light, ColorSurfaceLighter as lighter, ColorSurfaceLightest as lightest, } from '@rhds/tokens/color.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import { css } from "lit";
const style = css `:host{display:inline-flex;position:relative}*{box-sizing:border-box}#container{display:contents;--thumb-color:var(--rh-color-interactive-primary-default-on-light,#06c)}#container.on.dark{--thumb-color:var(--rh-color-interactive-primary-default-on-dark,#92c5f9)}.darkest{--c:var(--rh-color-surface-darkest,#151515)}.darker{--c:var(--rh-color-surface-darker,#1f1f1f)}.dark{--c:var(--rh-color-surface-dark,#383838)}.light{--c:var(--rh-color-surface-light,#e0e0e0)}.lighter{--c:var(--rh-color-surface-lighter,#f2f2f2)}.lightest{--c:var(--rh-color-surface-lightest,#fff)}:is(.dark,.darker,.darkest){--alt-color:var(--rh-color-surface-light,#e0e0e0)}:is(.light,.lighter,.lightest){--alt-color:var(--rh-color-surface-dark,#383838)}:is(:focus,:hover){--alt-color:var(--thumb-color)}input{appearance:none;display:block;position:relative;width:var(--rh-size-icon-03,32px);height:var(--rh-size-icon-03,32px);border-radius:50%;margin-block:8px;margin-inline:4px}input:before{background:var(--c);inset:0;outline:var(--alt-color) solid 2px}input:before,input:checked:after{display:block;content:"";border-radius:50%;position:absolute}input:checked:after{background:var(--alt-color);inset:6px}input:focus{outline:var(--thumb-color) solid 4px}label,rh-tooltip span{text-transform:capitalize}.visually-hidden{position:fixed;top:0;left:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}`;
export class ContextChangeEvent extends Event {
    constructor(colorPalette, 
    /** the context provider targeted by this element */
    provider) {
        super('change', { bubbles: true, cancelable: true });
        this.colorPalette = colorPalette;
        this.provider = provider;
    }
}
export const ColorPaletteListConverter = {
    fromAttribute(list) {
        return list?.split(',')
            ?.map(x => x.trim())
            ?.filter(x => paletteNames.includes(x)) ?? [];
    },
    toAttribute(list) {
        return list.join(',');
    },
};
export const paletteMap = new Map(Object.entries({
    lightest,
    lighter,
    light,
    dark,
    darker,
    darkest,
}));
export const paletteNames = Array.from(paletteMap, ([name]) => name);
export class RhContextPicker extends LitElement {
    constructor() {
        super(...arguments);
        _RhContextPicker_instances.add(this);
        _RhContextPicker_internals.set(this, InternalsController.of(this));
        _RhContextPicker_target.set(this, null);
        this.value = 'darkest';
        this.allow = paletteNames;
    }
    render() {
        const { allow, on = 'dark', value } = this;
        return html `
      <div id="host-label"
           class="visually-hidden">${__classPrivateFieldGet(this, _RhContextPicker_internals, "f").computedLabelText}</div>
      <div id="container"
           @input="${__classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_onInput)}"
           class="${classMap({ on: true, [on]: true })}">
        ${allow.map(palette => html `
        <label for="radio-${palette}" class="visually-hidden">${palette}</label>
        <rh-tooltip>
          <span slot="content">${palette}</span>
          <input id="radio-${palette}"
                 class="${classMap({ [palette]: true })}"
                 name="palette"
                 type="radio"
                 value="${palette}"
                 aria-describedby="host-label"
                 ?checked="${value === palette}">
        </rh-tooltip>`)}
      </div>
    `;
    }
    formStateRestoreCallback(state) {
        if (state) {
            __classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_setValue).call(this, state);
        }
    }
    firstUpdated() {
        for (const label of __classPrivateFieldGet(this, _RhContextPicker_internals, "f").labels) {
            label.addEventListener('click', () => this.focus());
        }
        if (this.target instanceof HTMLElement) {
            __classPrivateFieldSet(this, _RhContextPicker_target, this.target, "f");
            this.sync();
        }
        else if (this.target) {
            const root = this.getRootNode();
            if (root instanceof Document || root instanceof ShadowRoot) {
                __classPrivateFieldSet(this, _RhContextPicker_target, root.getElementById(this.target), "f");
                this.sync();
            }
        }
        else {
            __classPrivateFieldSet(this, _RhContextPicker_target, this.closest('rh-surface'), "f");
        }
    }
    focus() {
        const input = this.shadowRoot.querySelector('input[checked]')
            ?? this.shadowRoot.querySelector('input');
        input?.focus();
    }
    sync() {
        if (this.value) {
            __classPrivateFieldGet(this, _RhContextPicker_target, "f")?.setAttribute('color-palette', this.value);
        }
    }
}
_RhContextPicker_internals = new WeakMap(), _RhContextPicker_target = new WeakMap(), _RhContextPicker_instances = new WeakSet(), _RhContextPicker_onInput = function _RhContextPicker_onInput(event) {
    if (event.target instanceof HTMLInputElement && event.target.checked) {
        event.stopPropagation();
        const { value } = event.target;
        if (value) {
            __classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_setValue).call(this, value);
        }
    }
}, _RhContextPicker_setValue = function _RhContextPicker_setValue(value) {
    __classPrivateFieldGet(this, _RhContextPicker_internals, "f").setFormValue(value);
    if (value !== this.value && this.dispatchEvent(new ContextChangeEvent(value, __classPrivateFieldGet(this, _RhContextPicker_target, "f")))) {
        this.value = value;
        this.sync();
    }
};
RhContextPicker.properties = {
    target: {},
    value: {},
    allow: { converter: ColorPaletteListConverter }
};
RhContextPicker.formAssociated = true;
RhContextPicker.styles = [style];
__decorate([
    colorContextConsumer()
], RhContextPicker.prototype, "on", void 0);
customElements.define("rh-context-picker", RhContextPicker);
//# sourceMappingURL=rh-context-picker.js.map