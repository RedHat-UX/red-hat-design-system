import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core';
import { BaseAccordionHeader } from './BaseAccordionHeader.js';
import { BaseAccordionPanel } from './BaseAccordionPanel.js';
export declare class AccordionExpandEvent extends ComposedEvent {
    toggle: BaseAccordionHeader;
    panel: BaseAccordionPanel;
    constructor(toggle: BaseAccordionHeader, panel: BaseAccordionPanel);
}
export declare class AccordionCollapseEvent extends ComposedEvent {
    toggle: BaseAccordionHeader;
    panel: BaseAccordionPanel;
    constructor(toggle: BaseAccordionHeader, panel: BaseAccordionPanel);
}
export declare abstract class BaseAccordion extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    static isAccordion(target: EventTarget | null): target is BaseAccordion;
    static isHeader(target: EventTarget | null): target is BaseAccordionHeader;
    static isPanel(target: EventTarget | null): target is BaseAccordionPanel;
    /**
     * Sets and reflects the currently expanded accordion 0-based indexes.
     * Use commas to separate multiple indexes.
     * ```html
     * <pf-accordion expanded-index="1,2">
     *   ...
     * </pf-accordion>
     * ```
     */
    expandedIndex: number[];
    get headers(): BaseAccordionHeader[];
    get panels(): BaseAccordionPanel[];
    protected expandedSets: Set<number>;
    protected getUpdateComplete(): Promise<boolean>;
    connectedCallback(): void;
    render(): TemplateResult;
    firstUpdated(): Promise<void>;
    updateAccessibility(): void;
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to expand or collapse.
     */
    toggle(index: number): Promise<void>;
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to expand.
     * Accepts an optional parent accordion to search for headers and panels.
     */
    expand(index: number, parentAccordion?: BaseAccordion): Promise<void>;
    /**
     * Expands all accordion items.
     */
    expandAll(): Promise<void>;
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to collapse.
     */
    collapse(index: number): Promise<void>;
    /**
     * Collapses all accordion items.
     */
    collapseAll(): Promise<void>;
}
