import { LitElement, type TemplateResult } from 'lit';
/**
 * Accordion Panel
 * @slot - Panel content
 * @cssprop     {<color>} [--pf-c-accordion--BackgroundColor=var(--pf-global--BackgroundColor--light-100, #ffffff)]
 *              Sets the background color for the panel content.
 *
 * @cssprop     {<color>} [--pf-c-accordion__panel--Color=var(--pf-global--Color--dark-200, #6a6e73)]
 *              Sets the font color for the panel content.
 *
 * @cssprop     {<length>} [--pf-c-accordion__panel--FontSize=var(--pf-global--FontSize--sm, 0.875rem)]
 *              Sets the font size for the panel content.
 *
 * @cssprop     {<color>} [--pf-c-accordion__panel--content-body--before--BackgroundColor=var(--pf-global--primary-color--100, #0066cc)]
 *              Sets the sidebar color for the panel when the context is expanded.
 *
 * @cssprop     {<length>} [--pf-c-accordion__panel--m-fixed--MaxHeight=9.375rem]
 *              Sets the maximum height for the panel content.
 *              Will only be used if the `fixed` attribute is used.
 *
 * @cssprop     {<length>} [--pf-c-accordion__panel-body--PaddingTop=var(--pf-global--spacer--sm, 0.5rem)]
 *              Sets the padding top for the panel content.
 *
 * @cssprop     {<length>} [--pf-c-accordion__panel-body--PaddingRight=var(--pf-global--spacer--md, 1rem)]
 *              Sets the padding right for the panel content.
 *
 * @cssprop     {<length>} [--pf-c-accordion__panel-body--PaddingBottom=var(--pf-global--spacer--sm, 0.5rem)]
 *              Sets the padding bottom for the panel content.
 *
 * @cssprop     {<length>} [--pf-c-accordion__panel-body--PaddingLeft=var(--pf-global--spacer--md, 1rem)]
 *              Sets the padding left for the panel content.
 *
 * @cssprop     {<color>} [--pf-c-accordion__panel-body--before--BackgroundColor=transparent]
 *              Sets the background color for the panel content.
 *
 * @cssprop     [--pf-c-accordion__panel-body--before--Width=var(--pf-global--BorderWidth--lg, 3px)]
 *              Sets the before width for the panel content.
 *
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