var _RhAccordionHeader_dir;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { DirController } from '../../lib/DirController.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { BaseAccordionHeader } from '@patternfly/pfe-accordion/BaseAccordionHeader.js';
import styles from "./rh-accordion-header.css.js";
/**
 * Accordion Header
 *
 * @csspart text - inline element containing the heading text or slotted heading content
 * @csspart accents - container for accents within the header
 * @csspart icon - caret icon
 *
 * @slot
 *       We expect the light DOM of the rh-accordion-header to be a heading level tag (h1, h2, h3, h4, h5, h6)
 * @slot accents
 *       These elements will appear inline with the accordion header, between the header and the chevron
 *       (or after the chevron and header in disclosure mode).
 *
 * @fires {AccordionHeaderChangeEvent} change - when the open panels change
 *
 */
let RhAccordionHeader = class RhAccordionHeader extends BaseAccordionHeader {
    constructor() {
        super(...arguments);
        this.icon = 'angle-down';
        this.expanded = false;
        _RhAccordionHeader_dir.set(this, new DirController(this));
    }
    render() {
        const { on = '' } = this;
        const rtl = __classPrivateFieldGet(this, _RhAccordionHeader_dir, "f").dir === 'rtl';
        return html `
      <div id="container" class="${classMap({ [on]: !!on, rtl })}">${super.render()}</div>
    `;
    }
    renderAfterButton() {
        // Font-Awesome free angle-down
        // TODO: use rh-icon when it's ready
        return html `
      <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
      </svg>
    `;
    }
};
_RhAccordionHeader_dir = new WeakMap();
RhAccordionHeader.version = '{{version}}';
RhAccordionHeader.styles = [...BaseAccordionHeader.styles, styles];
__decorate([
    property({ reflect: true })
], RhAccordionHeader.prototype, "icon", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhAccordionHeader.prototype, "expanded", void 0);
__decorate([
    colorContextConsumer()
], RhAccordionHeader.prototype, "on", void 0);
RhAccordionHeader = __decorate([
    customElement('rh-accordion-header')
], RhAccordionHeader);
export { RhAccordionHeader };
//# sourceMappingURL=rh-accordion-header.js.map