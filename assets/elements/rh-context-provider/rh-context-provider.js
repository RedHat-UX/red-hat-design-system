import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import contextStyle from "../../lib/context/color/context-color.css.js";
import style from "./rh-context-provider.css.js";
let RhContextProvider = class RhContextProvider extends LitElement {
    render() {
        return html `<slot></slot>`;
    }
};
RhContextProvider.styles = [contextStyle, style];
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhContextProvider.prototype, "colorPalette", void 0);
RhContextProvider = __decorate([
    customElement('rh-context-provider')
], RhContextProvider);
export { RhContextProvider };
//# sourceMappingURL=rh-context-provider.js.map