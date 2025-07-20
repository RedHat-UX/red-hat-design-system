import { LitElement } from 'lit';
/**
 * Accordion Panel
 */
export declare class RhAccordionPanel extends LitElement {
    static readonly styles: CSSStyleSheet[];
    expanded: boolean;
    private ctx?;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private expandedChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-accordion-panel': RhAccordionPanel;
    }
}
