import { LitElement, type PropertyValues } from 'lit';
/**
 * Health index provides a visual grade (A through F) for communicating the
 * health or security level of an item. Authors must set the `grade`
 * attribute and should place it in context that makes its purpose clear.
 * It uses ARIA `meter` role so screen reader users can read the grade.
 * This element should not receive keyboard focus, as it is non-interactive.
 *
 * @summary     Displays a health grade for a particular item or package
 *
 * @alias health-index
 */
export declare class RhHealthIndex extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static grades;
    /**
     * Sets the visual size of the health index. The `sm` size renders only the
     * active grade letter. The default `md` size renders all grade boxes without
     * labels. The `lg` and `xl` sizes render all grade letters with the active
     * grade highlighted and bordered.
     */
    size: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Sets the health grade from A (best) to F (worst). Grades A and B use
     * success status colors, C uses warning, D uses caution, and E and F use
     * danger. The value is case-insensitive; lowercase input is normalized to
     * uppercase.
     */
    grade: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
    protected willUpdate(changed: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-health-index': RhHealthIndex;
    }
}
