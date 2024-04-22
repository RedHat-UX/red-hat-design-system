import { LitElement, html } from 'lit';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { classMap } from 'lit/directives/class-map.js';
import { css } from "lit";
const style = css `:host {\n  display: flex;\n  flex-direction: column;\n}\n\narticle {\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n[part=header] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n[part=body] ::slotted(:not([slot]):first-of-type) {\n  margin-block-start: 0 !important;\n}\n\n[part=body] ::slotted(:not([slot]):last-of-type) {\n  margin-block-end: 0 !important;\n}\n\n[part=footer] {\n  display: flex;\n  gap: 0.5em;\n  inset-block-end: 0;\n}\n\n.empty {\n  display: none;\n}\n\n`;
/**
 * This element creates a header, body, and footer region in which to place
 * content or other components.
 *
 * @summary Gives a preview of information in a small layout
 *
 * @slot header
 *       If this slot is used, we expect a heading level tag (h1, h2, h3, h4, h5, h6).
 *       An icon, svg, or use of the icon component are also valid in this region.
 * @slot - Any content that is not designated for the header or footer slot, will go to this slot.
 * @slot footer
 *       Use this slot for anything that you want to be stuck to the base of the card.
 *
 * @csspart header - The container for *header* content
 * @csspart body - The container for *body* content
 * @csspart footer - The container for *footer* content
 */
export class BaseCard extends LitElement {
    constructor() {
        super(...arguments);
        this.slots = new SlotController(this, 'header', null, 'footer');
    }
    render() {
        return html `
      <article>
        <header id="header"
                part="header"
                class="${classMap({ empty: !this.slots.hasSlotted('header') })}">
          <slot name="header"></slot>
        </header>
        <div id="body"
             part="body"
             class="${classMap({ empty: !this.querySelector(':not([slot])') })}">
          <slot></slot>
        </div>
        <footer id="footer"
                part="footer"
                class="${classMap({ empty: !this.slots.hasSlotted('footer') })}">
          <slot name="footer"></slot>
        </footer>
      </article>
    `;
    }
}
BaseCard.styles = [style];
//# sourceMappingURL=BaseCard.js.map