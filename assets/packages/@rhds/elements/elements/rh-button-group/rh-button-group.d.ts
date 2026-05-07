import { LitElement } from 'lit';
/**
 * A button group visually organizes multiple related buttons into a single
 * collection.
 *
 * The component exposes `role="group"` via ElementInternals; authors do not need
 * to set it.
 *
 * For a toolbar pattern, wrap the group in an element with
 * `role="toolbar"`. When there is more than one toolbar, each must have an
 * accessible name (`aria-label` or `aria-labelledby`). For vertical toolbars, set
 * `aria-orientation="vertical"` on the toolbar element.
 *
 * For further accessibility details, see the [Accessibility](/elements/button-group/accessibility/) documentation.
 *
 * @summary Organize multiple related buttons into a single collection
 */
export declare class RhButtonGroup extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-button-group': RhButtonGroup;
    }
}
