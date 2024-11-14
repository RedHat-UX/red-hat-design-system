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
 * @fires {AccordionExpandEvent} expand - when a panel expands
 * @fires {AccordionCollapseEvent} collapse - when a panel collapses
 * @slot
 *       Place the `pf-accordion-header` and `pf-accordion-panel` elements here.
 * @cssprop [--pf-c-accordion--BackgroundColor=var(--pf-global--BackgroundColor--100, #fff)]
 * @cssprop [--pf-c-accordion__toggle--PaddingTop=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-accordion__toggle--PaddingRight=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-accordion__toggle--PaddingBottom=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-accordion__toggle--PaddingLeft=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-accordion__toggle--before--BackgroundColor=transparent]
 * @cssprop [--pf-c-accordion__toggle--before--Top=0]
 * @cssprop [--pf-c-accordion__toggle--hover--BackgroundColor=var(--pf-global--BackgroundColor--200, #f0f0f0)]
 * @cssprop [--pf-c-accordion__toggle--focus--BackgroundColor=var(--pf-global--BackgroundColor--200, #f0f0f0)]
 * @cssprop [--pf-c-accordion__toggle--active--BackgroundColor=var(--pf-global--BackgroundColor--200, #f0f0f0)]
 * @cssprop [--pf-c-accordion__toggle--before--Width=var(--pf-global--BorderWidth--lg, 3px)]
 * @cssprop [--pf-c-accordion__toggle--m-expanded--before--BackgroundColor=var(--pf-global--primary-color--100, #06c)]
 * @cssprop [--pf-c-accordion__toggle-text--MaxWidth=calc(100 - var(--pf-global--spacer--lg, 1.5rem))]
 * @cssprop [--pf-c-accordion__toggle--hover__toggle-text--Color=var(--pf-global--link--Color, #06c)]
 * @cssprop [--pf-c-accordion__toggle--active__toggle-text--Color=var(--pf-global--link--Color, #06c)]
 * @cssprop [--pf-c-accordion__toggle--active__toggle-text--FontWeight=var(--pf-global--FontWeight--semi-bold, 700)]
 * @cssprop [--pf-c-accordion__toggle--focus__toggle-text--Color=var(--pf-global--link--Color, #06c)]
 * @cssprop [--pf-c-accordion__toggle--focus__toggle-text--FontWeight=var(--pf-global--FontWeight--semi-bold, 700)]
 * @cssprop [--pf-c-accordion__toggle--m-expanded__toggle-text--Color=var(--pf-global--link--Color, #06c)]
 * @cssprop [--pf-c-accordion__toggle--m-expanded__toggle-text--FontWeight=var(--pf-global--FontWeight--semi-bold, 700)]
 * @cssprop [--pf-c-accordion__toggle-icon--Transition=.2s ease-in 0s]
 * @cssprop [--pf-c-accordion__toggle--m-expanded__toggle-icon--Rotate=90deg]
 * @cssprop [--pf-c-accordion__expanded-content--Color=var(--pf-global--Color--200, #6a6e73)]
 * @cssprop [--pf-c-accordion__expanded-content--FontSize=var(--pf-global--FontSize--sm, 0.875rem)]
 * @cssprop [--pf-c-accordion__expanded-content--m-expanded__expanded-content-body--before--BackgroundColor=var(--pf-global--primary-color--100, #06c)]
 * @cssprop [--pf-c-accordion__expanded-content--m-fixed--MaxHeight=9.375rem]
 * @cssprop [--pf-c-accordion__expanded-content-body--PaddingTop=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-accordion__expanded-content-body--PaddingRight=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-accordion__expanded-content-body--PaddingBottom=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-accordion__expanded-content-body--PaddingLeft=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-accordion__expanded-content-body--expanded-content-body--PaddingTop=0]
 * @cssprop [--pf-c-accordion__expanded-content-body--before--BackgroundColor=transparent]
 * @cssprop [--pf-c-accordion__expanded-content-body--before--Width=var(--pf-global--BorderWidth--lg, 3px)]
 * @cssprop [--pf-c-accordion__expanded-content-body--before--Top=0]
 * @cssprop [--pf-c-accordion--m-display-lg__toggle--PaddingTop=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-accordion--m-display-lg__toggle--PaddingRight=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-accordion--m-display-lg__toggle--PaddingBottom=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-accordion--m-display-lg__toggle--PaddingLeft=var(--pf-global--spacer--lg, 1.5rem)]
 * @cssprop [--pf-c-accordion--m-display-lg__toggle--FontFamily=var(--pf-global--FontFamily--heading--sans-serif, "RedHatDisplay", "Overpass", overpass, helvetica, arial, sans-serif)]
 * @cssprop [--pf-c-accordion--m-display-lg__toggle--FontSize=var(--pf-global--FontSize--xl, 1.25rem)]
 * @cssprop [--pf-c-accordion--m-display-lg__toggle--hover__toggle-text--Color=var(--pf-global--Color--100, #151515)]
 * @cssprop [--pf-c-accordion--m-display-lg__toggle--active__toggle-text--Color=var(--pf-global--Color--100, #151515)]
 * @cssprop [--pf-c-accordion--m-display-lg__toggle--active__toggle-text--FontWeight=var(--pf-global--FontWeight--normal, 400)]
 * @cssprop [--pf-c-accordion--m-display-lg__toggle--focus__toggle-text--Color=var(--pf-global--Color--100, #151515)]
 * @cssprop [--pf-c-accordion--m-display-lg__toggle--focus__toggle-text--FontWeight=var(--pf-global--FontWeight--normal, 400)]
 * @cssprop [--pf-c-accordion--m-display-lg__toggle--m-expanded__toggle-text--Color=var(--pf-global--Color--100, #151515)]
 * @cssprop [--pf-c-accordion--m-display-lg__toggle--m-expanded__toggle-text--FontWeight=var(--pf-global--FontWeight--normal, 400)]
 * @cssprop [--pf-c-accordion--m-display-lg__expanded-content--FontSize=var(--pf-global--FontSize--md, 1rem)]
 * @cssprop [--pf-c-accordion--m-display-lg__expanded-content--Color=var(--pf-global--Color--100, #151515)]
 * @cssprop [--pf-c-accordion--m-display-lg__expanded-content-body--PaddingTop=0]
 * @cssprop [--pf-c-accordion--m-display-lg__expanded-content-body--PaddingRight=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-accordion--m-display-lg__expanded-content-body--PaddingBottom=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-accordion--m-display-lg__expanded-content-body--last-child--PaddingBottom=var(--pf-global--spacer--lg, 1.5rem)]
 * @cssprop [--pf-c-accordion--m-display-lg__expanded-content-body--PaddingLeft=var(--pf-global--spacer--lg, 1.5rem)]
 * @cssprop [--pf-c-accordion--m-bordered--BorderTopWidth=var(--pf-global--BorderWidth--sm, 1px)]
 * @cssprop [--pf-c-accordion--m-bordered--BorderTopColor=var(--pf-global--BorderColor--100, #d2d2d2)]
 * @cssprop [--pf-c-accordion--m-bordered__toggle--before--Top=calc(-1 * var(--pf-global--BorderWidth--sm, 1px))]
 * @cssprop [--pf-c-accordion--m-bordered__toggle--after--BorderColor=var(--pf-global--BorderColor--100, #d2d2d2)]
 * @cssprop [--pf-c-accordion--m-bordered__toggle--after--BorderTopWidth=0]
 * @cssprop [--pf-c-accordion--m-bordered__toggle--after--BorderBottomWidth=var(--pf-global--BorderWidth--sm, 1px)]
 * @cssprop [--pf-c-accordion--m-bordered__expanded-content--m-expanded__expanded-content-body--last-child--after--BorderBottomWidth=var(--pf-global--BorderWidth--sm, 1px)]
 * @cssprop [--pf-c-accordion--m-bordered__expanded-content--m-expanded__expanded-content-body--last-child--after--BorderBottomColor=var(--pf-global--BorderColor--100, #d2d2d2)]
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
