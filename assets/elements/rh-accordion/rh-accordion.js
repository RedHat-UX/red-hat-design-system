import { __decorate } from "tslib";
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { observed } from '@patternfly/pfe-core/decorators/observed.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { BaseAccordion } from '@patternfly/elements/pf-accordion/BaseAccordion.js';
import { css } from "lit";
const styles = css `:host{--_border-color:var(--rh-color-border-subtle-on-light, #d2d2d2);color:var(--rh-color-black-900,#151515);background-color:var(--rh-color-white,#fff)}:host([on=dark]){--_border-color:var(--rh-color-black-600, #6a6e73)}#container{display:contents}::slotted(rh-accordion-header:first-child){display:block;border-block:1px solid var(--_border-color)}::slotted(rh-accordion-header:not(:first-child)){display:block;border-block-end:1px solid var(--_border-color)}::slotted(rh-accordion-header:is([expanded])){display:block;border-block-end:0;box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 rgba(21,21,21,.2))}::slotted(rh-accordion-panel:is([expanded])){display:block;border-block-end:1px solid var(--_border-color);box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 rgba(21,21,21,.2))}`;
import './rh-accordion-header.js';
import './rh-accordion-panel.js';
/**
 * Accordions toggle the visibility of sections of content.
 * They feature panels that consist of a section text label and a caret icon that collapses or expands to reveal more information.
 *
 * @summary Toggle the visibility of sections of content
 *
 * @fires {AccordionExpandEvent} expand - when a panel expands
 * @fires {AccordionCollapseEvent} collapse - when a panel collapses
 *
 *
 * @slot
 *       Place the `rh-accordion-header` and `rh-accordion-panel` elements here.
 *
 */
let RhAccordion = class RhAccordion extends BaseAccordion {
    constructor() {
        super(...arguments);
        this.large = false;
        this.bordered = true;
    }
    render() {
        const { on = '' } = this;
        return html `
      <div id="container" class="${classMap({ [on]: !!on })}">${super.render()}</div>
    `;
    }
};
RhAccordion.version = '{{version}}';
RhAccordion.styles = [...BaseAccordion.styles, styles];
__decorate([
    colorContextConsumer()
], RhAccordion.prototype, "on", void 0);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhAccordion.prototype, "colorPalette", void 0);
__decorate([
    observed(function largeChanged() {
        [...this.headers, ...this.panels].forEach(el => el.toggleAttribute('large', this.large));
    }),
    property({ reflect: true, type: Boolean })
], RhAccordion.prototype, "large", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhAccordion.prototype, "bordered", void 0);
RhAccordion = __decorate([
    customElement('rh-accordion')
], RhAccordion);
export { RhAccordion };
//# sourceMappingURL=rh-accordion.js.map