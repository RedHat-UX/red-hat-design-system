var _RendersText_style;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import TinyColor from 'tinycolor2';
import { tokens } from '@rhds/tokens';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';
const dark = tokens.get('--rh-color-text-primary-on-dark');
const light = tokens.get('--rh-color-text-primary-on-light');
class RendersText extends LitElement {
    constructor() {
        super(...arguments);
        _RendersText_style.set(this, getComputedStyle(this));
    }
    get on() {
        const color = __classPrivateFieldGet(this, _RendersText_style, "f").getPropertyValue('color');
        return TinyColor.equals(color, dark) ? 'dark'
            : TinyColor.equals(color, light) ? 'light'
                : 'nothing';
    }
    render() {
        return html `<span>Hello</span>`;
    }
}
_RendersText_style = new WeakMap();
RendersText.styles = [css `:host {
    display: block;
    padding: 24px;
    color: var(--rh-color-text-primary);
  }`];
let ContextConsumer = class ContextConsumer extends RendersText {
};
ContextConsumer = __decorate([
    customElement('test-context-consumer'),
    themable
], ContextConsumer);
export { ContextConsumer };
let ContextConsumerProvider = class ContextConsumerProvider extends RendersText {
};
__decorate([
    property({ reflect: true, attribute: 'color-palette' })
], ContextConsumerProvider.prototype, "colorPalette", void 0);
ContextConsumerProvider = __decorate([
    customElement('test-context-consumer-provider'),
    themable,
    colorPalettes
], ContextConsumerProvider);
export { ContextConsumerProvider };
let ContextProviderConsumer = class ContextProviderConsumer extends RendersText {
};
__decorate([
    property({ reflect: true, attribute: 'color-palette' })
], ContextProviderConsumer.prototype, "colorPalette", void 0);
ContextProviderConsumer = __decorate([
    customElement('test-context-provider-consumer'),
    colorPalettes,
    themable
], ContextProviderConsumer);
export { ContextProviderConsumer };
//# sourceMappingURL=elements.js.map