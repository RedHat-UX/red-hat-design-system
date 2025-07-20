import { LitElement } from 'lit';
export declare class AccordionHeaderChangeEvent extends Event {
    expanded: boolean;
    toggle: RhAccordionHeader;
    target: RhAccordionHeader;
    constructor(expanded: boolean, toggle: RhAccordionHeader);
}
/**
 * Accordion Header
 * We expect the light DOM of the rh-accordion-header to be a heading level tag (h1, h2, h3, h4, h5, h6)
 * @fires {AccordionHeaderChangeEvent} change - when the open panels change
 */
export declare class RhAccordionHeader extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    expanded: boolean;
    private ctx?;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private expandedChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-accordion-header': RhAccordionHeader;
    }
}
