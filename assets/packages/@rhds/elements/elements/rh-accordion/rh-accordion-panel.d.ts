import { LitElement } from 'lit';
/**
 * Collapsible content region within an accordion, paired with an
 * `rh-accordion-header`. Renders with `role="region"` and
 * `aria-labelledby` linking to its header for screen reader context.
 *
 * Must be a direct child of `rh-accordion`, immediately following its
 * corresponding `rh-accordion-header`. Panel content can include text,
 * cards, images, or nested accordions. Text blocks should not exceed
 * 750px width for optimal readability.
 */
export declare class RhAccordionPanel extends LitElement {
    static readonly styles: CSSStyleSheet[];
    /**
     * Sets the initial visibility state of the panel content.
     * When `true`, the panel is expanded and its content is visible.
     * When `false` (default), the panel is collapsed and its content is hidden.
     *
     * #### Usage guidelines
     * - Use to draw attention to important content that should be immediately visible
     * - Set on the first panel in a FAQ or help section to show the most common question
     * - Supports multiple panels being expanded simultaneously for content comparison
     * - Users can expand and collapse panels one at a time by default, or multiple panels
     *   when implementing "Expand all" functionality
     *
     * By default, all panels are collapsed (expanded=false). Users expand panels by clicking
     * the header, which animates the caret icon and reveals the content.
     *
     * See [Expanding and collapsing panels](https://ux.redhat.com/elements/accordion/guidelines/#expanding-and-collapsing-panels) in Guidelines documentation
     */
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
