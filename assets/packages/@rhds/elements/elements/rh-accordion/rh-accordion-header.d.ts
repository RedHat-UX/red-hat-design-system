import type { RhAccordion } from './rh-accordion.js';
import { LitElement } from 'lit';
export declare class AccordionHeaderChangeEvent extends Event {
    expanded: boolean;
    toggle: RhAccordionHeader;
    accordion: RhAccordion;
    target: RhAccordionHeader;
    constructor(expanded: boolean, toggle: RhAccordionHeader, accordion: RhAccordion);
}
/**
 * Accordion Header
 * We expect the light DOM of the rh-accordion-header to be a heading level tag (h1, h2, h3, h4, h5, h6)
 * @csspart text - inline element containing the heading text or slotted heading content
 * @csspart accents - container for accents within the header
 * @slot - accordion toggle content
 * @slot accents -
 *       These elements will appear inline by default with the header title, between the header and the chevron
 *       (or after the chevron and header in disclosure mode). There is an option to set the accents placement to bottom
 * @fires {AccordionHeaderChangeEvent} change - when the open panels change
 */
export declare class RhAccordionHeader extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    expanded: boolean;
    private ctx?;
    private on?;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private expandedChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-accordion-header': RhAccordionHeader;
    }
}
