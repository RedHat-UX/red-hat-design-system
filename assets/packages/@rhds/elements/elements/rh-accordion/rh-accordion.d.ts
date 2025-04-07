import { LitElement, type TemplateResult } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { RhAccordionHeader, AccordionHeaderChangeEvent } from './rh-accordion-header.js';
import { RhAccordionPanel } from './rh-accordion-panel.js';
export * from './rh-accordion-header.js';
export * from './rh-accordion-panel.js';
export declare class AccordionExpandEvent extends ComposedEvent {
    toggle: RhAccordionHeader;
    panel: RhAccordionPanel;
    constructor(toggle: RhAccordionHeader, panel: RhAccordionPanel);
}
export declare class AccordionCollapseEvent extends ComposedEvent {
    toggle: RhAccordionHeader;
    panel: RhAccordionPanel;
    constructor(toggle: RhAccordionHeader, panel: RhAccordionPanel);
}
/**
 * An accordion is a stacked list of panels which allows users to expand or collapse information when selected. They feature panels that consist of a section text label and a caret icon that collapses or expands to reveal more information.
 * @summary Expands or collapses a stacked list of panels
 * @fires {AccordionExpandEvent} expand - when a panel expands
 * @fires {AccordionCollapseEvent} collapse - when a panel collapses
 * @slot - Place the `rh-accordion-header` and `rh-accordion-panel` elements here.
 * @attr  [accents=inline] Position accents in the header either inline or bottom
 */
export declare class RhAccordion extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static isAccordion(target: EventTarget | null): target is RhAccordion;
    static isHeader(target: EventTarget | null): target is RhAccordionHeader;
    static isPanel(target: EventTarget | null): target is RhAccordionPanel;
    static isAccordionChangeEvent(event: Event): event is AccordionHeaderChangeEvent;
    /**
     * Sets accordion header's accents position to inline or bottom
     */
    accents?: 'inline' | 'bottom';
    /**
     * If this accordion uses large styles
     */
    large: boolean;
    /**
     * Color Palette for this accordion.
     * @see https://ux.redhat.com/theming/color-palettes/
     */
    colorPalette?: ColorPalette;
    /**
     * Sets and reflects the currently expanded accordion 0-based indexes.
     * Use commas to separate multiple indexes.
     * ```html
     * <rh-accordion expanded-index="1,2">
     *   ...
     * </rh-accordion>
     * ```
     */
    get expandedIndex(): number[];
    set expandedIndex(value: number[]);
    /** All headers for this accordion */
    get headers(): RhAccordionHeader[];
    /** All panels for this accordion */
    get panels(): RhAccordionPanel[];
    private ctx;
    connectedCallback(): void;
    render(): TemplateResult;
    protected getUpdateComplete(): Promise<boolean>;
    private updateExpanded;
    private contextChanged;
    /**
     * Initialize the accordion by connecting headers and panels
     * with aria controls and labels; set up the default disclosure
     * state if not set by the author; and check the URL for default
     * open
     */
    updateAccessibility(): void;
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to expand or collapse.
     * @param index header index to toggle
     */
    toggle(index: number): Promise<void>;
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to expand.
     * Accepts an optional parent accordion to search for headers and panels.
     * @param index header index to toggle
     * @param parentAccordion target accordion to expand in
     */
    expand(index: number, parentAccordion?: RhAccordion): Promise<void>;
    /**
     * Expands all accordion items.
     */
    expandAll(): Promise<void>;
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to collapse.
     * @param index header index to collapse
     */
    collapse(index: number): Promise<void>;
    /**
     * Collapses all accordion items.
     */
    collapseAll(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-accordion': RhAccordion;
    }
    interface HTMLElementEventMap {
        'expand': AccordionExpandEvent;
        'collapse': AccordionCollapseEvent;
    }
}
