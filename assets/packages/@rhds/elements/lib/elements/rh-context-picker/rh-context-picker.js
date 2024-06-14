var _RhContextPicker_instances, _RhContextPicker_internals, _RhContextPicker_target, _RhContextPicker_onChange, _RhContextPicker_onInput, _RhContextPicker_setValue;
var RhContextPicker_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import {} from '../../context/color/provider.js';
import { colorContextConsumer } from '../../context/color/consumer.js';
import { ColorSurfaceDarkest as darkest, ColorSurfaceDarker as darker, ColorSurfaceDark as dark, ColorSurfaceLight as light, ColorSurfaceLighter as lighter, ColorSurfaceLightest as lightest, } from '@rhds/tokens/color.js';
import { classMap } from 'lit/directives/class-map.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import { css } from "lit";
const style = css `:host{display:inline-flex;position:relative}*{box-sizing:border-box}#container{display:contents;--thumb-color:var(--rh-color-interactive-blue-darker, #0066cc)}#container.on-dark{--thumb-color:var(--rh-color-interactive-blue-lighter, #92c5f9)}.darkest{--c:var(--rh-color-surface-darkest, #151515)}.darker{--c:var(--rh-color-surface-darker, #1f1f1f)}.dark{--c:var(--rh-color-surface-dark, #383838)}.light{--c:var(--rh-color-surface-light, #e0e0e0)}.lighter{--c:var(--rh-color-surface-lighter, #f2f2f2)}.lightest{--c:var(--rh-color-surface-lightest, #ffffff)}:is(.dark,.darker,.darkest){--alt-color:var(--rh-color-surface-light, #e0e0e0)}:is(.light,.lighter,.lightest){--alt-color:var(--rh-color-surface-dark, #383838)}:is(:focus,:hover){--alt-color:var(--thumb-color)}input{appearance:none;display:block;position:relative;width:var(--rh-size-icon-03,32px);height:var(--rh-size-icon-03,32px);border-radius:50%;margin-block:8px;margin-inline:4px}input:before{display:block;content:"";background:var(--c);border-radius:50%;position:absolute;inset:0;outline:var(--alt-color) solid 2px}input:checked:after{display:block;content:"";background:var(--alt-color);border-radius:50%;position:absolute;inset:6px}input:focus{outline:var(--thumb-color) solid 4px}label,rh-tooltip span{text-transform:capitalize}.visually-hidden{position:fixed;top:0;left:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}`;
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
export class ContextChangeEvent extends Event {
    constructor(colorPalette) {
        super('change', { bubbles: true, cancelable: true });
        this.colorPalette = colorPalette;
    }
}
let RhContextPicker = RhContextPicker_1 = class RhContextPicker extends LitElement {
    constructor() {
        super(...arguments);
        _RhContextPicker_instances.add(this);
        this.value = 'darkest';
        this.allow = RhContextPicker_1.paletteNames;
        _RhContextPicker_internals.set(this, InternalsController.of(this));
        _RhContextPicker_target.set(this, null);
    }
    render() {
        const { allow, on = 'dark', value = 'darkest' } = this;
        return html `
      <div id="host-label"
           class="visually-hidden">${__classPrivateFieldGet(this, _RhContextPicker_internals, "f").computedLabelText}</div>
      <div id="container"
           @input="${__classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_onInput)}"
           class="${classMap({ [`on-${on}`]: true })}">
        ${allow.map(palette => html `
        <label for="radio-${palette}" class="visually-hidden">${palette}</label>
        <rh-tooltip>
          <span slot="content">${palette}</span>
          <input id="radio-${palette}" class="${classMap({ [palette]: true })}"
                 name="palette"
                 type="radio"
                 value="${palette}"
                 aria-describedby="host-label"
                 ?checked="${value === palette}">`)}
        </rh-tooltip>
      </div>
    `;
    }
    formStateRestoreCallback(state) {
        __classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_setValue).call(this, state);
    }
    firstUpdated() {
        for (const label of __classPrivateFieldGet(this, _RhContextPicker_internals, "f").labels) {
            label.addEventListener('click', () => this.focus());
        }
        const oldTarget = __classPrivateFieldGet(this, _RhContextPicker_target, "f");
        if (this.target) {
            const root = this.getRootNode();
            __classPrivateFieldSet(this, _RhContextPicker_target, root.getElementById(this.target), "f");
            this.sync();
        }
        else {
            __classPrivateFieldSet(this, _RhContextPicker_target, this.closest('rh-surface'), "f");
        }
        oldTarget?.removeEventListener('change', __classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_onChange));
        __classPrivateFieldGet(this, _RhContextPicker_target, "f")?.addEventListener('change', __classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_onChange));
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
};
_RhContextPicker_internals = new WeakMap();
_RhContextPicker_target = new WeakMap();
_RhContextPicker_instances = new WeakSet();
_RhContextPicker_onChange = function _RhContextPicker_onChange(event) {
    if (event instanceof ContextChangeEvent) {
        event.stopPropagation();
    }
};
_RhContextPicker_onInput = function _RhContextPicker_onInput(event) {
    if (event.target instanceof HTMLInputElement && event.target.checked) {
        event.stopPropagation();
        const { value } = event.target;
        if (value) {
            __classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_setValue).call(this, value);
        }
    }
};
_RhContextPicker_setValue = function _RhContextPicker_setValue(value) {
    __classPrivateFieldGet(this, _RhContextPicker_internals, "f").setFormValue(value);
    if (value !== this.value && this.dispatchEvent(new ContextChangeEvent(value))) {
        this.value = value;
        this.sync();
    }
};
RhContextPicker.formAssociated = true;
RhContextPicker.styles = [style];
RhContextPicker.palettes = new Map(Object.entries({
    darkest,
    darker,
    dark,
    light,
    lighter,
    lightest,
}));
RhContextPicker.paletteNames = Array.from(RhContextPicker_1.palettes, ([name]) => name);
__decorate([
    property()
], RhContextPicker.prototype, "target", void 0);
__decorate([
    property()
], RhContextPicker.prototype, "value", void 0);
__decorate([
    colorContextConsumer()
], RhContextPicker.prototype, "on", void 0);
__decorate([
    property({
        converter: {
            fromAttribute(list) {
                return list?.split(',')
                    ?.map(x => x.trim())
                    ?.filter(x => RhContextPicker.paletteNames.includes(x)) ?? [];
            },
            toAttribute(list) {
                return list.join(',');
            },
        },
    })
], RhContextPicker.prototype, "allow", void 0);
RhContextPicker = RhContextPicker_1 = __decorate([
    customElement('rh-context-picker')
], RhContextPicker);
export { RhContextPicker };
//# sourceMappingURL=rh-context-picker.js.map