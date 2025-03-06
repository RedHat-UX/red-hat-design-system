import { LitElement, html } from 'lit';
import { css } from "lit";
const style = css `:host{flex:1 1 auto;display:block;width:100%}`;
const currentYear = new Date().getFullYear();
export class RhFooterCopyright extends LitElement {
    render() {
        return html `<slot>&copy; ${currentYear} Red Hat, Inc.</slot>`;
    }
}
RhFooterCopyright.styles = style;
customElements.define("rh-footer-copyright", RhFooterCopyright);
//# sourceMappingURL=rh-footer-copyright.js.map