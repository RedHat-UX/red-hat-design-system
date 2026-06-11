import { LitElement, type TemplateResult } from 'lit';
export declare class PfLabelGroupExpandEvent extends Event {
    constructor();
}
export declare class PfLabelGroupRemoveEvent extends Event {
    constructor();
}
/**
 * A **label group** is a collection of labels that can be grouped by category
 * and used to represent one or more values assigned to a single attribute.
 * When the number of labels exceeds `numLabels`, additional labels will be
 * hidden using an overflow label.
 *
 * @summary Groups multiple labels with overflow, category, and close support.
 *
 * @fires {PfLabelGroupExpandEvent} expand - Fires when label group is expanded to show all labels
 * @fires {PfLabelGroupRemoveEvent} remove - Fires when label group is closed/removed
 *
 * @slot category
 *       Category name text for label group category.
 *       If this slot is populated, the label group will have category styling applied.
 * @slot - `<pf-label>` elements.
 */
export declare class PfLabelGroup extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    /** Orientation of the label group. */
    orientation: 'horizontal' | 'vertical';
    /** Accessible label for the label group when no category name is provided. */
    accessibleLabel: string;
    /** Accessible label for the close button. */
    accessibleCloseLabel: string;
    /**
     * Customizable "more" template string.
     * Use variable `${remaining}` for the overflow label count.
     */
    collapsedText: string;
    /** Customizable "show less" text string. */
    expandedText: string;
    /** Number of labels to show before overflow. */
    numLabels: number;
    /** Whether overflow labels are visible. */
    open: boolean;
    /** Whether the label group can be closed. */
    closeable: boolean;
    /** Label count tracked during SSR via child events. */
    _ssrLabelCount: number;
    constructor();
    render(): TemplateResult<1>;
    /** Updates labels when relevant properties change. */
    private labelsChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-label-group': PfLabelGroup;
    }
}
