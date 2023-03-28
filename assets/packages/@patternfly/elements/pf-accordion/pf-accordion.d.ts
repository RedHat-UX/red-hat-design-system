import { BaseAccordion } from './BaseAccordion.js';
export * from './pf-accordion-header.js';
export * from './pf-accordion-panel.js';
/**
 * An accordion is an interactive container that expands and collapses to hide or reveal nested content. It takes advantage of progressive disclosure to help reduce page scrolling, by allowing users to choose whether they want to show or hide more detailed information as needed.
 *
 * @summary Toggle the visibility of sections of content
 *
 * @fires {AccordionExpandEvent} expand - when a panel expands
 * @fires {AccordionCollapseEvent} collapse - when a panel collapses
 *
 *
 * @slot
 *       Place the `pf-accordion-header` and `pf-accordion-panel` elements here.
 *
 * @cssproperty {<color>} --accordion__bordered--Color
 *              Color for the borders between accordion headers when using bordered or large attributes
 *              {@default `var(--rh-color-black-300, #d2d2d2)`}
 */
export declare class PfAccordion extends BaseAccordion {
    static readonly styles: import("lit").CSSResult[];
    /** When true, only one accordion panel may be expanded at a time */
    single: boolean;
    /** Whether to apply the `bordered` style variant */
    bordered: boolean;
    /** Whether to apply the `large` style variant */
    large: boolean;
    fixed: boolean;
    expand(index: number, parentAccordion?: BaseAccordion): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-accordion': PfAccordion;
    }
}
