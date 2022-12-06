import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { colorContextConsumer, colorContextProvider } from '../../lib/context/color.js';
import contextStyle from "../../lib/context/context-color.css.js";
import style from "./rh-context-provider.css.js";
let ContextProvider = class ContextProvider extends LitElement {
    render() {
        return html `<div><slot></slot></div>`;
    }
};
ContextProvider.styles = [contextStyle, style];
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], ContextProvider.prototype, "colorPalette", void 0);
__decorate([
    colorContextConsumer(),
    property({ reflect: true })
], ContextProvider.prototype, "on", void 0);
ContextProvider = __decorate([
    customElement('rh-context-provider')
], ContextProvider);
export { ContextProvider };
//# sourceMappingURL=rh-context-provider.js.map