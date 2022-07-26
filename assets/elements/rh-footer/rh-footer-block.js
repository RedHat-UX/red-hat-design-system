import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from "./rh-footer-block.css.js";
let RhFooterBlock = class RhFooterBlock extends LitElement {
    render() {
        return html `
      <div class="base" part="base">
        <div class="header" part="header">
          <slot name="header"></slot>
        </div>
        <div class="content" part="content">
          <slot></slot>
        </div>
      </div>
    `;
    }
};
RhFooterBlock.styles = style;
RhFooterBlock = __decorate([
    customElement('rh-footer-block')
], RhFooterBlock);
export { RhFooterBlock };
//# sourceMappingURL=rh-footer-block.js.map