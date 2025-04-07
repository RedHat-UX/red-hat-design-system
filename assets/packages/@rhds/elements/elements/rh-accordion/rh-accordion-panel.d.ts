import { LitElement } from 'lit';
/**
 * Accordion Panel
 *
 * @slot
 *       The content of the accordion panel can be any basic markup including but not limited to div, paragraph, or nested accordion panels.
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
