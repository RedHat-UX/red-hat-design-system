import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { css } from "lit";
const style = css `:host{display:block}#container{display:contents;--pf-c-jump-links__list--PaddingTop:0;--pf-c-jump-links__list--PaddingBottom:0;--pf-c-jump-links__link--PaddingTop:var(--pf-c-jump-links__list__list__link--PaddingTop,\n    var(--pf-global--spacer--sm, 0.5rem));--pf-c-jump-links__link--PaddingBottom:var(--pf-c-jump-links__list__list__link--PaddingBottom,\n    var(--pf-global--spacer--sm, 0.5rem));--pf-c-jump-links__link--PaddingLeft:var(--pf-c-jump-links__list__list__link--PaddingLeft,\n    var(--pf-global--spacer--lg, 1.5rem))}`;
/**
 * @cssprop --pf-c-jump-links__list__list__link--PaddingTop -- padding around each link
 * @cssprop --pf-c-jump-links__list__list__link--PaddingBottom
 * @cssprop --pf-c-jump-links__list__list__link--PaddingLeft
 */
let PfJumpLinksList = class PfJumpLinksList extends LitElement {
    render() {
        return html `
      <div id="container" role="listbox">
        <slot></slot>
      </div>
    `;
    }
};
PfJumpLinksList.styles = [style];
PfJumpLinksList = __decorate([
    customElement('pf-jump-links-list')
], PfJumpLinksList);
export { PfJumpLinksList };
//# sourceMappingURL=pf-jump-links-list.js.map