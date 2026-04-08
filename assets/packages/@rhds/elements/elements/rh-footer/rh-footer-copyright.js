import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { css } from "lit";
const style = css `:host{flex:1 1 auto;display:block;width:100%}`;
const currentYear = new Date().getFullYear();
/**
 * Copyright notice for `<rh-footer-universal>`. Use when the footer
 * requires a legal copyright line. Authors should avoid overriding.
 *
 * @summary Copyright notice with auto-updating year
 */
let RhFooterCopyright = class RhFooterCopyright extends LitElement {
    render() {
        return html `<!-- summary: copyright text content (default slot)
         description: |
           Expects inline text containing the copyright notice. Defaults to
           "© [current year] Red Hat" if not provided. Screen readers announce
           this text within the footer landmark; it is not focusable via Tab.
           Override for a different entity or localized text. -->
      <slot>&copy; ${currentYear} Red Hat</slot>`;
    }
};
RhFooterCopyright.styles = style;
RhFooterCopyright = __decorate([
    customElement('rh-footer-copyright')
], RhFooterCopyright);
export { RhFooterCopyright };
//# sourceMappingURL=rh-footer-copyright.js.map