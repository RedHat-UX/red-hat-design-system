var _RhContextDemo_instances, _RhContextDemo_internals, _RhContextDemo_onChange, _RhContextDemo_setValue;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ContextChangeEvent } from '../rh-context-picker/rh-context-picker.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import { css } from "lit";
const style = css `:host{display:block;height:100%}.light{color:var(--rh-color-text-primary-on-light,#151515)}.dark{color:var(--rh-color-text-primary-on-dark,#fff)}#picker-container{display:flex;align-items:center;margin-block-end:var(--rh-context-demo-padding,var(--rh-space-xl,24px));gap:var(--rh-space-lg,16px)}#provider{padding:var(--rh-context-demo-padding,var(--rh-space-xl,24px));height:calc(100% - 2 * var(--rh-context-demo-padding,var(--rh-space-xl,24px)))}`;
let RhContextDemo = class RhContextDemo extends LitElement {
    constructor() {
        super(...arguments);
        _RhContextDemo_instances.add(this);
        this.value = 'darkest';
        this.label = 'Color Palette';
        this.colorPalette = this.value;
        _RhContextDemo_internals.set(this, this.attachInternals());
    }
    render() {
        const { value = 'darkest' } = this;
        const [on = 'dark'] = value.match(/dark|light/) ?? [];
        return html `
      <rh-surface id="provider"
                           color-palette="${value}"
                           class="${classMap({ [on]: true })}"
                           @change="${__classPrivateFieldGet(this, _RhContextDemo_instances, "m", _RhContextDemo_onChange)}">
          <div id="picker-container">
            <rh-context-picker id="picker"
                               .value="${this.value}"
                               target="provider"></rh-context-picker>
            <label for="picker">${this.label}</label>
          </div>
        <slot part="demo"></slot>
      </rh-surface>
    `;
    }
    willUpdate(changed) {
        if (changed.has('colorPalette')) {
            this.value = this.colorPalette;
        }
        if (changed.has('value')) {
            this.colorPalette = this.value;
        }
    }
    formStateRestoreCallback(state) {
        __classPrivateFieldGet(this, _RhContextDemo_instances, "m", _RhContextDemo_setValue).call(this, state);
    }
};
_RhContextDemo_internals = new WeakMap(), _RhContextDemo_instances = new WeakSet(), _RhContextDemo_onChange = function _RhContextDemo_onChange(event) {
    if (event instanceof ContextChangeEvent) {
        __classPrivateFieldGet(this, _RhContextDemo_instances, "m", _RhContextDemo_setValue).call(this, event.colorPalette);
    }
}, _RhContextDemo_setValue = function _RhContextDemo_setValue(value) {
    if (value) {
        __classPrivateFieldGet(this, _RhContextDemo_internals, "f").setFormValue(value);
        this.value = value;
    }
};
RhContextDemo.styles = [style];
RhContextDemo.formAssociated = true;
__decorate([
    property()
], RhContextDemo.prototype, "value", void 0);
__decorate([
    property()
], RhContextDemo.prototype, "label", void 0);
__decorate([
    property({ attribute: 'color-palette', reflect: true })
], RhContextDemo.prototype, "colorPalette", void 0);
RhContextDemo = __decorate([
    customElement('rh-context-demo')
], RhContextDemo);
export { RhContextDemo };
//# sourceMappingURL=rh-context-demo.js.map