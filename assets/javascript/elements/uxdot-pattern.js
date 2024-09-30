var _UxdotPattern_instances, _UxdotPattern_slots, _UxdotPattern_onChange;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { colorContextProvider, } from '@rhds/elements/lib/context/color/provider.js';
import { colorContextConsumer, } from '@rhds/elements/lib/context/color/consumer.js';
import { ColorPaletteListConverter, ContextChangeEvent, paletteNames, } from '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-code-block/rh-code-block.js';
import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
import { css } from "lit";
const styles = css `:host{display:block;container-name:host;container-type:inline-size;margin-block-end:var(--rh-space-2xl,32px)}#container{display:grid;grid-template-columns:1fr;grid-template-areas:"controls" "example" "code";gap:var(--rh-space-2xl,32px) var(--rh-space-4xl,64px);padding:var(--rh-space-2xl,32px);border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle);border-radius:var(--rh-border-radius-default,3px);background-color:var(--rh-color-surface);color:var(--rh-color-text-primary);border-color:var(--rh-color-border-subtle);--rh-color-surface:inherit}#container ::slotted(h2),#container ::slotted(h3),#container ::slotted(h4),#container ::slotted(h5),#container ::slotted(h6),#container h3{margin-block:0 var(--rh-space-lg,16px)!important;font-size:var(--rh-font-size-body-text-lg,1.125rem)!important}#color-picker{grid-area:controls;justify-self:flex-end;display:flex;align-items:center;gap:var(--rh-space-lg,16px)}#example{grid-area:example}:host([stacked]) #example ::slotted(*){max-width:100%}#code{grid-area:code;display:flex;flex-direction:column;gap:var(--rh-space-lg,16px)}#container.noColorPicker{grid-template-areas:"example" "code"}#color-picker.noColorPicker{display:none!important}#example slot[name=heading]{display:block;grid-column:-1/1}@container host (min-width: 992px){#container{grid-template-columns:max-content auto;grid-template-areas:"controls controls" "example code"}#container.noColorPicker{grid-template-areas:"example code"}#container.stacked{grid-template-columns:1fr;grid-template-areas:"controls" "example" "code"}#container.stacked.noColorPicker{grid-template-areas:"example" "code"}}`;
let UxdotPattern = class UxdotPattern extends LitElement {
    constructor() {
        super(...arguments);
        _UxdotPattern_instances.add(this);
        this.colorPalette = 'lightest';
        this.target = 'container';
        this.noColorPicker = false;
        this.stacked = false;
        this.allow = paletteNames;
        _UxdotPattern_slots.set(this, new SlotController(this, 'html', 'css', 'js'));
    }
    render() {
        const { noColorPicker, stacked, on = 'light' } = this;
        const hasHtml = __classPrivateFieldGet(this, _UxdotPattern_slots, "f").hasSlotted('html');
        const hasCss = __classPrivateFieldGet(this, _UxdotPattern_slots, "f").hasSlotted('css');
        const hasJs = __classPrivateFieldGet(this, _UxdotPattern_slots, "f").hasSlotted('js');
        const target = isServer || (this.target === 'container') ? this.target
            : this.getRootNode().getElementById(this.target);
        return html `
      <rh-surface id="container"
                  part="container"
                  class="${classMap({ on: true, [on]: true, noColorPicker, stacked })}">
        <form id="color-picker" @submit="${(e) => e.preventDefault()}">
          <label for="picker">Color palette</label>
          <rh-context-picker id="picker"
                             .target="${target}"
                             value="${this.colorPalette}"
                             @change="${__classPrivateFieldGet(this, _UxdotPattern_instances, "m", _UxdotPattern_onChange)}"
                             .allow="${this.allow}"></rh-context-picker>
        </form>
        <div id="example" part="example">
          <slot name="heading"><h3>Example</h3></slot>
          <slot></slot>
        </div>
        <div id="code">${!hasHtml ? '' : html `
          <div id="html">
            <slot name="html-heading"><h3>HTML</h3></slot>
            <slot name="html"></slot>
          </div>`}${!hasCss ? '' : html `
          <div id="css">
            <slot name="css-heading"><h3>CSS</h3></slot>
            <slot name="css"></slot>
          </div>`}${!hasJs ? '' : html `
          <div id="js">
            <slot name="js-heading"><h3>JS</h3></slot>
            <slot name="js"></slot>
          </div>`}
        </div>
      </rh-surface>
    `;
    }
};
_UxdotPattern_slots = new WeakMap();
_UxdotPattern_instances = new WeakSet();
_UxdotPattern_onChange = function _UxdotPattern_onChange(event) {
    if (event instanceof ContextChangeEvent) {
        this.colorPalette = event.colorPalette;
    }
};
UxdotPattern.styles = [styles];
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], UxdotPattern.prototype, "colorPalette", void 0);
__decorate([
    colorContextConsumer()
], UxdotPattern.prototype, "on", void 0);
__decorate([
    property({ reflect: true })
], UxdotPattern.prototype, "target", void 0);
__decorate([
    property({ type: Boolean })
], UxdotPattern.prototype, "noColorPicker", void 0);
__decorate([
    property({ type: Boolean })
], UxdotPattern.prototype, "stacked", void 0);
__decorate([
    property({ converter: ColorPaletteListConverter })
], UxdotPattern.prototype, "allow", void 0);
UxdotPattern = __decorate([
    customElement('uxdot-pattern')
], UxdotPattern);
export { UxdotPattern };
//# sourceMappingURL=uxdot-pattern.js.map