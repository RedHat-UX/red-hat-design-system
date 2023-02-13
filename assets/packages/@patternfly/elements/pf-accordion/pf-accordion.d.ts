import { BaseAccordion } from './BaseAccordion.js';
export * from './pf-accordion-header.js';
export * from './pf-accordion-panel.js';
/**
 * Accordions toggle the visibility of sections of content.
 * They feature panels that consist of a section text label and a caret icon that collapses or expands to reveal more information.
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
