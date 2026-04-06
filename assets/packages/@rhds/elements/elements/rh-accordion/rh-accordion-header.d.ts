import { LitElement } from 'lit';
export declare class AccordionHeaderChangeEvent extends Event {
    expanded: boolean;
    toggle: RhAccordionHeader;
    target: RhAccordionHeader;
    constructor(expanded: boolean, toggle: RhAccordionHeader);
}
/**
 * Clickable toggle for an accordion panel. Each header controls the visibility
 * of its adjacent `rh-accordion-panel` sibling. Renders as an accessible button
 * with `role="heading"` at the appropriate aria-level.
 *
 * Must be a direct child of `rh-accordion`. Should contain concise title text
 * (max 65 characters). Avoid writing titles that sound like calls to action.
 *
 * Supports keyboard activation with `Enter` or `Space`. Automatically manages
 * `aria-expanded` and `aria-controls` for its associated panel.
 *
 * @fires {AccordionHeaderChangeEvent} change - Fires when the header's expanded
 *   state changes, either by user click or programmatic toggle. The event
 *   `expanded` property indicates the new state.
 */
export declare class RhAccordionHeader extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    /**
     * Whether this header's associated panel is expanded. When true, the caret
     * icon rotates upward and the panel content is visible. Managed automatically
     * by the parent `rh-accordion` — set `expanded-index` on the accordion to
     * control initial state declaratively.
     */
    expanded: boolean;
    private ctx?;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private expandedChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-accordion-header': RhAccordionHeader;
    }
}
