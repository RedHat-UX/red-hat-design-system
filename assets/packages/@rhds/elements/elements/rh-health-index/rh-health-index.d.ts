import { LitElement, type PropertyValues } from 'lit';
/**
 * Health index displays a health grade (A–F) for a particular item or package.
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
     * Sets the size of the health index
     * Defaults to `md`
     */
    size: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Sets the health grade
     * Defaults to `A`
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
