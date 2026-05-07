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
 * Organizes content into expandable panels for scanning and selective
 * disclosure. Must contain paired `rh-accordion-header` and
 * `rh-accordion-panel` children. Should have two or more pairs; for a
 * single section use `rh-disclosure`. Headers use ARIA `role="heading"`
 * with `aria-expanded`/`aria-controls` for screen readers. Supports
 * keyboard navigation: Tab to move focus, Enter or Space to toggle.
 *
 * @summary Organizes content into expandable sections users can open or close
 *
 * @fires {AccordionExpandEvent} expand - Fires when a panel expands.
 *   Event detail: `toggle` (RhAccordionHeader), `panel` (RhAccordionPanel).
 * @fires {AccordionCollapseEvent} collapse - Fires when a panel collapses.
 *   Event detail: `toggle` (RhAccordionHeader), `panel` (RhAccordionPanel).
 */
export declare class RhAccordion extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static isAccordion(target: EventTarget | null): target is RhAccordion;
    static isHeader(target: EventTarget | null): target is RhAccordionHeader;
    static isPanel(target: EventTarget | null): target is RhAccordionPanel;
    static isAccordionChangeEvent(event: Event): event is AccordionHeaderChangeEvent;
    /**
     * Position of accent slot content relative to the header title.
     * Defaults to `inline`. Use `bottom` when accents are numerous or
     * the title needs more horizontal space.
     */
    accents?: 'inline' | 'bottom';
    /**
     * Switches the accordion to large size, increasing font size and padding.
     * Avoid on viewports below 576px; the accordion automatically falls back
     * to small size on mobile breakpoints. Use `large` for page-level content
     * sections where the accordion is the primary content structure.
     */
    large: boolean;
    /**
     * Color palette for the accordion and its child headers and panels.
     * Must match the surrounding surface color to ensure adequate text contrast.
     * Avoid mixing light and dark palettes within the same page section.
     * @see https://ux.redhat.com/theming/color-palettes/
     */
    colorPalette?: ColorPalette;
    /**
     * Comma-separated 0-based indexes of initially expanded panels.
     * Defaults to none (all collapsed). Example: `expanded-index="0,2"`
     * expands the first and third panels.
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
