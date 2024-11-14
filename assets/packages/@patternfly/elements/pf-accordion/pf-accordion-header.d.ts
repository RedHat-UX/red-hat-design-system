import type { PfAccordion } from './pf-accordion.js';
import { LitElement, type TemplateResult } from 'lit';
import '@patternfly/elements/pf-icon/pf-icon.js';
export declare class PfAccordionHeaderChangeEvent extends Event {
    expanded: boolean;
    toggle: PfAccordionHeader;
    accordion: PfAccordion;
    target: PfAccordionHeader;
    constructor(expanded: boolean, toggle: PfAccordionHeader, accordion: PfAccordion);
}
/**
 * Accordion Header
 * @csspart text - inline element containing the heading text or slotted heading content
 * @csspart accents - container for accents within the header
 * @csspart icon - caret icon
 * @slot
 *       We expect the light DOM of the pf-accordion-header to be a heading level tag (h1, h2, h3, h4, h5, h6)
 * @slot accents
 *       These elements will appear inline with the accordion header, between the header and the chevron
 *       (or after the chevron and header in disclosure mode).
 * @fires {AccordionHeaderChangeEvent} change - when the open panels change
 * @cssprop     {<color>} [--pf-c-accordion__toggle--Color=var(--pf-global--Color--100, #151515)]
 *              Sets the font color for the accordion header.
 *
 * @cssprop     {<color>} [--pf-c-accordion__toggle--BackgroundColor=transparent]
 *              Sets the background color for the accordion header toggle element.
 *
 * @cssprop     {<color>} [--pf-c-accordion__toggle--after--BackgroundColor=transparent]
 *              Sets the background color for the after element for the accordion header toggle element.
 *
 * @cssprop     {<length>} [--pf-c-accordion__toggle--PaddingTop=var(--pf-global--spacer--sm, 0.5rem)]
 *              Sets the top padding for the accordion header.
 *
 * @cssprop     {<length>} [--pf-c-accordion__toggle--PaddingRight=var(--pf-global--spacer--md, 1rem)]
 *              Sets the right padding for the accordion header.
 *
 * @cssprop     {<length>} [--pf-c-accordion__toggle--PaddingBottom=var(--pf-global--spacer--sm, 0.5rem)]
 *              Sets the bottom padding for the accordion header.
 *
 * @cssprop     {<length>} [--pf-c-accordion__toggle--PaddingLeft=var(--pf-global--spacer--md, 1rem)]
 *              Sets the left padding for the accordion header.
 *
 * @cssprop     {<length>} [--pf-c-accordion__toggle--FontSize=var(--pf-global--FontSize--lg, 1rem)]
 *              Sets the sidebar background color for the accordion header.
 *
 * @cssprop     {<color>} [--pf-c-accordion__toggle--FontFamily=var(--pf-global--FontFamily--redhat-updated--heading--sans-serif, "RedHatDisplayUpdated", helvetica, arial, sans-serif)]
 *              Sets the font family for the accordion header.
 *
 * @cssprop     [--pf-c-accordion__toggle--FontWeight=var(--pf-global--FontWeight--normal, 400)]
 *              Sets the font weight for the accordion header.
 *
 * @cssprop     {<color>} [--pf-c-accordion__toggle--active--BackgroundColor=var(--pf-global--BackgroundColor--200, #f0f0f0)]
 *              Sets the active backgrdound color for the accordion header.
 *
 * @cssprop     {<color>} [--pf-c-accordion__toggle--active-text--Color=var(--pf-global--link--Color, #0066cc)]
 *              Sets the active text color for the accordion header.
 *
 * @cssprop     [--pf-c-accordion__toggle--active-text--FontWeight=var(--pf-global--FontWeight--semi-bold, 700)]
 *              Sets the active text font weight for the accordion header.
 *
 * @cssprop     {<color>} [--pf-c-accordion__toggle--expanded--before--BackgroundColor=var(--pf-global--link--Color, #0066cc)]
 *              Sets the hover expanded before background color for the accordion header.
 *
 * @cssprop     [--pf-c-accordion__toggle--expanded-icon--Rotate=90deg]
 *              Sets the expanded icon rotation degrees for the accordion header.
 *
 * @cssprop     {<length>} [--pf-c-accordion__toggle-text--MaxWidth=calc(100 - var(--pf-global--spacer--lg, 1.5rem))]
 *              Sets the max width for the text inside the accordion header.
 *
 * @cssprop     [--pf-c-accordion__toggle--before--Width=var(--pf-global--BorderWidth--lg, 3px)]
 *              Sets the sidebar width for the accordion header.
 *
 * @cssprop     [--pf-c-accordion__toggle-icon--Transition=0.2s ease-in 0s]
 *              Sets the transition animation for the accordion header.
 *
 */
export declare class PfAccordionHeader extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    bordered?: 'true' | 'false';
    icon?: string;
    iconSet?: string;
    expanded: boolean;
    headingText?: string;
    headingTag?: string;
    connectedCallback(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-accordion-header': PfAccordionHeader;
    }
}
