import { LitElement, type TemplateResult } from 'lit';
/**
 * A **spinner** is used to indicate to users that an action is in progress. For actions
 * that may take a long time, use a progress bar instead.
 * @alias Spinner
 */
export declare class PfSpinner extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Preset sizes for the spinner */
    size: 'sm' | 'md' | 'lg' | 'xl';
    /** Custom diameter of spinner set as CSS variable */
    diameter?: `${string}${'px' | '%' | 'rem' | 'em' | 'fr' | 'pt'}`;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-spinner': PfSpinner;
    }
}
