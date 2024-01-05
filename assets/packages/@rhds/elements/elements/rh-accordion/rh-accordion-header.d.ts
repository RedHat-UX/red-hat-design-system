import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core';
import { BaseAccordion } from './BaseAccordion.js';
export declare class AccordionHeaderChangeEvent extends ComposedEvent {
    expanded: boolean;
    toggle: RhAccordionHeader;
    accordion: BaseAccordion;
    target: RhAccordionHeader;
    constructor(expanded: boolean, toggle: RhAccordionHeader, accordion: BaseAccordion);
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
 *       These elements will appear inline with the accordion header, between the header and the chevron
 *       (or after the chevron and header in disclosure mode).
 *
 * @fires {AccordionHeaderChangeEvent} change - when the open panels change
 *
 */
export declare class RhAccordionHeader extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    static readonly shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
        customElements?: CustomElementRegistry | undefined;
    };
    expanded: boolean;
    headingText?: string;
    headingTag?: string;
    icon: string;
    private on?;
    connectedCallback(): void;
    render(): Array<TemplateResult>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-accordion-header': RhAccordionHeader;
    }
}
