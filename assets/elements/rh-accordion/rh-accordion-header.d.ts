import type { TemplateResult } from 'lit';
import { BaseAccordionHeader } from '@patternfly/pfe-accordion/BaseAccordionHeader.js';
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
export declare class RhAccordionHeader extends BaseAccordionHeader {
    static readonly version = "{{version}}";
    icon: string;
    expanded: boolean;
    static readonly styles: import("lit").CSSResult[];
    private on?;
    render(): TemplateResult;
    renderAfterButton(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-accordion-header': RhAccordionHeader;
    }
}
