import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { css } from "lit";
const style = css `:host{flex:1 1 auto;display:block;width:100%}`;
const currentYear = new Date().getFullYear();
let RhFooterCopyright = class RhFooterCopyright extends LitElement {
    render() {
        return html `<slot>&copy; ${currentYear} Red Hat, Inc.</slot>`;
    }
};
RhFooterCopyright.styles = style;
RhFooterCopyright = __decorate([
    customElement('rh-footer-copyright')
], RhFooterCopyright);
export { RhFooterCopyright };
//# sourceMappingURL=rh-footer-copyright.js.map