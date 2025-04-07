var _RhContextDemo_instances, _RhContextDemo_internals, _RhContextDemo_onChange, _RhContextDemo_setValue;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { observes } from '@patternfly/pfe-core/decorators.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { ContextChangeEvent } from '../rh-context-picker/rh-context-picker.js';
import { css } from "lit";
const style = css `:host{display:block;min-height:100%;height:max-content;color:var(--rh-color-text-primary);background:var(--rh-color-surface)}#picker-container{display:flex;align-items:center;margin-block-end:var(--rh-context-demo-padding,var(--rh-space-xl,24px));gap:var(--rh-space-lg,16px)}#provider{padding:var(--rh-context-demo-padding,var(--rh-space-xl,24px));min-height:100%;height:max-content}`;
let RhContextDemo = class RhContextDemo extends LitElement {
    constructor() {
        super(...arguments);
        _RhContextDemo_instances.add(this);
        this.label = 'Color Palette';
        this.colorPalette = 'darkest';
        _RhContextDemo_internals.set(this, InternalsController.of(this));
    }
    render() {
        const { colorPalette } = this;
        return html `
      <div id="provider" @change="${__classPrivateFieldGet(this, _RhContextDemo_instances, "m", _RhContextDemo_onChange)}">
          <div id="picker-container">
            <rh-context-picker id="picker"
                               .value="${colorPalette}"
                               .target="${this}"></rh-context-picker>
            <label for="picker">${this.label}</label>
            <slot name="controls"></slot>
          </div>
        <slot part="demo"></slot>
      </div>
    `;
    }
    colorPaletteChanged() {
        __classPrivateFieldGet(this, _RhContextDemo_instances, "m", _RhContextDemo_setValue).call(this, this.colorPalette);
    }
    formStateRestoreCallback(state) {
        __classPrivateFieldGet(this, _RhContextDemo_instances, "m", _RhContextDemo_setValue).call(this, state);
    }
};
_RhContextDemo_internals = new WeakMap();
_RhContextDemo_instances = new WeakSet();
_RhContextDemo_onChange = function _RhContextDemo_onChange(event) {
    const picker = this.shadowRoot?.getElementById('picker');
    if (event instanceof ContextChangeEvent) {
        if (event.target !== picker && event.provider && (event.provider !== this)) {
            return;
        }
        __classPrivateFieldGet(this, _RhContextDemo_instances, "m", _RhContextDemo_setValue).call(this, event.colorPalette);
        event.preventDefault();
    }
};
_RhContextDemo_setValue = function _RhContextDemo_setValue(value) {
    if (value) {
        __classPrivateFieldGet(this, _RhContextDemo_internals, "f").setFormValue(value);
        if (this.colorPalette !== value) {
            this.colorPalette = value;
        }
    }
};
RhContextDemo.styles = [style];
RhContextDemo.formAssociated = true;
__decorate([
    property()
], RhContextDemo.prototype, "label", void 0);
__decorate([
    property({ attribute: 'color-palette', reflect: true })
], RhContextDemo.prototype, "colorPalette", void 0);
__decorate([
    observes('colorPalette')
], RhContextDemo.prototype, "colorPaletteChanged", null);
RhContextDemo = __decorate([
    customElement('rh-context-demo'),
    colorPalettes
], RhContextDemo);
export { RhContextDemo };
//# sourceMappingURL=rh-context-demo.js.map