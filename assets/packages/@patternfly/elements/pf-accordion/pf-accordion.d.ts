import { LitElement, type TemplateResult } from 'lit';
import { PfAccordionHeader, PfAccordionHeaderChangeEvent } from './pf-accordion-header.js';
import { PfAccordionPanel } from './pf-accordion-panel.js';
export * from './pf-accordion-header.js';
export * from './pf-accordion-panel.js';
export declare class PfAccordionExpandEvent extends Event {
    toggle: PfAccordionHeader;
    panel: PfAccordionPanel;
    constructor(toggle: PfAccordionHeader, panel: PfAccordionPanel);
}
export declare class PfAccordionCollapseEvent extends Event {
    toggle: PfAccordionHeader;
    panel: PfAccordionPanel;
    constructor(toggle: PfAccordionHeader, panel: PfAccordionPanel);
}
/**
 * An **accordion** is an interactive container that expands and collapses to hide or reveal nested content. It takes advantage of progressive disclosure to help reduce page scrolling, by allowing users to choose whether they want to show or hide more detailed information as needed.
 * @summary Toggle the visibility of sections of content
 * @alias Accordion
 * @fires {AccordionExpandEvent} expand - when a panel expands
 * @fires {AccordionCollapseEvent} collapse - when a panel collapses
 */
export declare class PfAccordion extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** When true, only one accordion panel may be expanded at a time */
    single: boolean;
    /** Whether to apply the `bordered` style variant */
    bordered: boolean;
    /** Whether to apply the `large` style variant */
    large: boolean;
    fixed: boolean;
    /**
     * Sets and reflects the currently expanded accordion 0-based indexes.
     * Use commas to separate multiple indexes.
     * ```html
     * <pf-accordion expanded-index="1,2">
     *   ...
     * </pf-accordion>
     * ```
     */
    get expandedIndex(): number[];
    set expandedIndex(value: number[]);
    protected expandedSets: Set<number>;
    get headers(): PfAccordionHeader[];
    get panels(): PfAccordionPanel[];
    connectedCallback(): void;
    render(): TemplateResult<1>;
    firstUpdated(): Promise<void>;
    protected getUpdateComplete(): Promise<boolean>;
    protected largeChanged(): void;
    protected updateActiveHeader(): void;
    protected onChange(event: PfAccordionHeaderChangeEvent): void;
    updateAccessibility(): void;
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to expand.
     * Accepts an optional parent accordion to search for headers and panels.
     * @param index index (0-based) of the panel to expand
     */
    expand(index: number): Promise<void>;
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to collapse.
     * @param index index (0-based) of the panel to collapse
     */
    collapse(index: number): Promise<void>;
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to expand or collapse.
     * @param index index (0-based) of the panel to toggle
     */
    toggle(index: number): Promise<void>;
    /**
     * Expands all accordion items.
     */
    expandAll(): Promise<void>;
    /**
     * Collapses all accordion items.
     */
    collapseAll(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-accordion': PfAccordion;
    }
}
