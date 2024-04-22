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
 *
 * @csspart text - inline element containing the heading text or slotted heading content
 * @csspart accents - container for accents within the header
 * @csspart icon - caret icon
 *
 * @slot
 *       We expect the light DOM of the rh-accordion-header to be a heading level tag (h1, h2, h3, h4, h5, h6)
 * @slot accents
 *       These elements will appear inline by default with the header title, between the header and the chevron
 *       (or after the chevron and header in disclosure mode). There is an option to set the accents placement to bottom
 *
 * @fires {AccordionHeaderChangeEvent} change - when the open panels change
 *
 */
export declare class RhAccordionHeader extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
        customElements?: CustomElementRegistry | undefined;
        registry?: CustomElementRegistry | undefined;
    };
    expanded: boolean;
    headingText?: string;
    headingTag?: string;
    /** @deprecated */
    icon: string;
    private on?;
    private ctx?;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-accordion-header': RhAccordionHeader;
    }
}
