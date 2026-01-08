import { LitElement, type TemplateResult } from 'lit';
/**
 * Accordion Panel
 * @slot - Panel content
 */
export declare class PfAccordionPanel extends LitElement {
    static readonly styles: CSSStyleSheet[];
    expanded: boolean;
    bordered?: 'true' | 'false';
    connectedCallback(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-accordion-panel': PfAccordionPanel;
    }
}
