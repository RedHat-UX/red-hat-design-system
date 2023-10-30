var _RhContextPicker_instances, _RhContextPicker_offset, _RhContextPicker_internals, _RhContextPicker_target, _RhContextPicker_onChange, _RhContextPicker_onInput, _RhContextPicker_setValue;
var RhContextPicker_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { colorContextConsumer } from '../../context/color/consumer.js';
import { ColorSurfaceDarkest as darkest, ColorSurfaceDarker as darker, ColorSurfaceDark as dark, ColorSurfaceLight as light, ColorSurfaceLighter as lighter, ColorSurfaceLightest as lightest, } from '@rhds/tokens/color.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import { css } from "lit";
const style = css `:host{display:inline-block;width:300px;padding:6px}#container{position:relative}input{--thumb-color:var(--rh-color-interactive-blue-darker, #0066cc);--s:1px;pointer-events:none;margin:0;width:100%;height:100%;appearance:none;background:0 0;position:absolute;z-index:1}input::-webkit-slider-thumb{appearance:none;margin-top:-14px;position:relative}input::-moz-range-thumb,input::-webkit-slider-thumb{pointer-events:auto;background:0 0;border-radius:3px;border:4px solid var(--thumb-color);box-shadow:#000 var(--s) var(--s) var(--s),#0d0d0d 0 0 var(--s);box-sizing:content-box;cursor:pointer;height:100%;translate:var(--offset);width:calc(16.6667%)}input:focus,input:hover{--thumb-color:var(--rh-color-interactive-blue-darkest, #004080);--s:2px}input.dark,input.darker,input.darkest{--thumb-color:var(--rh-color-interactive-blue-lighter, #73bcf7)}input:is(.dark,.darker,.darkest):is(:focus,:hover){--thumb-color:var(--rh-color-interactive-blue-lightest, #bee1f4)}datalist{display:flex;inset:0;flex:1 0 100%;border-radius:var(--rh-border-radius-default,3px);overflow:hidden}option{flex:1 0 1px;min-height:var(--rh-space-3xl,48px);background-color:var(--c)}.visually-hidden{position:fixed;top:0;left:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}#option-darkest{--c:var(--rh-color-surface-darkest, #151515)}#option-darker{--c:var(--rh-color-surface-darker, #1f1f1f)}#option-dark{--c:var(--rh-color-surface-dark, #383838)}#option-light{--c:var(--rh-color-surface-light, #e0e0e0)}#option-lighter{--c:var(--rh-color-surface-lighter, #f2f2f2)}#option-lightest{--c:var(--rh-color-surface-lightest, #ffffff)}`;
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
        _RhContextPicker_offset.set(this, RhContextPicker_1.offsets[this.value]);
        _RhContextPicker_internals.set(this, this.attachInternals());
        _RhContextPicker_target.set(this, null);
    }
    willUpdate() {
        __classPrivateFieldSet(this, _RhContextPicker_offset, RhContextPicker_1.offsets[this.value], "f");
    }
    render() {
        const { on = 'dark', value = 'darkest' } = this;
        const derivedLabel = __classPrivateFieldGet(this, _RhContextPicker_internals, "f").ariaLabel ?? Array.from(__classPrivateFieldGet(this, _RhContextPicker_internals, "f").labels, x => x.textContent).join();
        return html `
      <div id="container" class="${classMap({ [on]: true })}">
          <input id="context-range"
                 class="${classMap({ [value]: true })}"
                 name="range"
                 type="range"
                 list="palettes"
                 max="5"
                 aria-label="${derivedLabel}"
                 style="${styleMap({ '--offset': `${__classPrivateFieldGet(this, _RhContextPicker_offset, "f")}px` })}"
                 @input="${__classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_onInput)}">
          <datalist id="palettes">${Array.from(RhContextPicker_1.palettes, ([palette]) => html `
            <option id="option-${palette}"
                    value="${palette}"
                    title="${palette}"
                    @click="${() => __classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_setValue).call(this, palette)}">
              <span class="visually-hidden">${palette}</span>
            </option>`)}
          </datalist>
      </div>
    `;
    }
    updated(changedProperties) {
        if (changedProperties.has('value') && this.range) {
            this.range.value = RhContextPicker_1.paletteNames.indexOf(this.value).toString();
        }
    }
    formStateRestoreCallback(state) {
        __classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_setValue).call(this, state);
    }
    firstUpdated() {
        const oldTarget = __classPrivateFieldGet(this, _RhContextPicker_target, "f");
        if (this.target) {
            const root = this.getRootNode();
            __classPrivateFieldSet(this, _RhContextPicker_target, root.getElementById(this.target), "f");
            this.sync();
        }
        else {
            __classPrivateFieldSet(this, _RhContextPicker_target, this.closest('rh-context-provider'), "f");
        }
        oldTarget?.removeEventListener('change', __classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_onChange));
        __classPrivateFieldGet(this, _RhContextPicker_target, "f")?.addEventListener('change', __classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_onChange));
    }
    sync() {
        if (this.value) {
            __classPrivateFieldGet(this, _RhContextPicker_target, "f")?.setAttribute('color-palette', this.value);
        }
    }
};
_RhContextPicker_offset = new WeakMap(), _RhContextPicker_internals = new WeakMap(), _RhContextPicker_target = new WeakMap(), _RhContextPicker_instances = new WeakSet(), _RhContextPicker_onChange = function _RhContextPicker_onChange(event) {
    if (event instanceof ContextChangeEvent) {
        event.stopPropagation();
    }
}, _RhContextPicker_onInput = function _RhContextPicker_onInput(event) {
    if (event.target instanceof HTMLInputElement) {
        event.stopPropagation();
        const value = RhContextPicker_1.paletteNames[+event.target.value];
        __classPrivateFieldGet(this, _RhContextPicker_instances, "m", _RhContextPicker_setValue).call(this, value);
    }
}, _RhContextPicker_setValue = function _RhContextPicker_setValue(value) {
    __classPrivateFieldGet(this, _RhContextPicker_internals, "f").setFormValue(value);
    this.value = value;
    if (this.dispatchEvent(new ContextChangeEvent(this.value))) {
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
RhContextPicker.offsets = {
    darkest: -4,
    darker: -3,
    dark: -3,
    light: -1,
    lighter: 1,
    lightest: 2,
};
RhContextPicker.paletteNames = Array.from(RhContextPicker_1.palettes, ([name]) => name);
__decorate([
    property()
], RhContextPicker.prototype, "target", void 0);
__decorate([
    property()
], RhContextPicker.prototype, "value", void 0);
__decorate([
    query('#context-range')
], RhContextPicker.prototype, "range", void 0);
__decorate([
    colorContextConsumer()
], RhContextPicker.prototype, "on", void 0);
RhContextPicker = RhContextPicker_1 = __decorate([
    customElement('rh-context-picker')
], RhContextPicker);
export { RhContextPicker };
//# sourceMappingURL=rh-context-picker.js.map