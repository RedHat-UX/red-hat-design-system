var _RhContextDemo_instances, _RhContextDemo_internals, _RhContextDemo_onChange, _RhContextDemo_setValue;
import { __classPrivateFieldGet } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';
import { colorContextProvider } from '../../context/color/provider.js';
import { ContextChangeEvent } from '../rh-context-picker/rh-context-picker.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import { css } from "lit";
const style = css `:host{display:block;min-height:100%;height:auto;position:relative}.on,rh-surface{color:var(--rh-color-text-primary)}#picker-container{display:flex;align-items:center;margin-block-end:var(--rh-context-demo-padding,var(--rh-space-xl,24px));gap:var(--rh-space-lg,16px)}#provider{padding:var(--rh-context-demo-padding,var(--rh-space-xl,24px));position:absolute;inset:0}`;
import consumerStyles from '@rhds/tokens/css/color-context-consumer.css.js';
export class RhContextDemo extends LitElement {
    constructor() {
        super(...arguments);
        _RhContextDemo_instances.add(this);
        _RhContextDemo_internals.set(this, this.attachInternals());
        this.value = 'darkest';
        this.label = 'Color Palette';
        this.colorPalette = this.value;
    }
    render() {
        const { value = 'darkest' } = this;
        const on = this.value.replace(/est|er/, '');
        return html `
      <rh-surface id="provider"
                  color-palette="${value}"
                  @change="${__classPrivateFieldGet(this, _RhContextDemo_instances, "m", _RhContextDemo_onChange)}">
          <div id="picker-container" class="${classMap({ on: true, [on]: true })}">
            <rh-context-picker id="picker"
                               .value="${this.value}"
                               target="provider"></rh-context-picker>
            <label for="picker">${this.label}</label>
            <slot name="controls"></slot>
          </div>
        <slot part="demo" class="${classMap({ on: true, [on]: true })}"></slot>
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
}
_RhContextDemo_internals = new WeakMap(), _RhContextDemo_instances = new WeakSet(), _RhContextDemo_onChange = function _RhContextDemo_onChange(event) {
    const picker = this.shadowRoot?.getElementById('picker');
    if (event instanceof ContextChangeEvent) {
        if (event.target !== picker && event.provider && (event.provider !== this)) {
            return;
        }
        __classPrivateFieldGet(this, _RhContextDemo_instances, "m", _RhContextDemo_setValue).call(this, event.colorPalette);
        event.preventDefault();
    }
}, _RhContextDemo_setValue = function _RhContextDemo_setValue(value) {
    if (value) {
        __classPrivateFieldGet(this, _RhContextDemo_internals, "f").setFormValue(value);
        this.value = value;
    }
};
RhContextDemo.properties = {
    value: {},
    label: {},
    colorPalette: { attribute: 'color-palette', reflect: true }
};
RhContextDemo.styles = [style, consumerStyles];
RhContextDemo.formAssociated = true;
customElements.define("rh-context-demo", RhContextDemo);
//# sourceMappingURL=rh-context-demo.js.map