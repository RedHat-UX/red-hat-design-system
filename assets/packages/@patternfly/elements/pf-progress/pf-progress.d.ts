import type { PropertyValues, TemplateResult } from 'lit';
import { LitElement } from 'lit';
/**
 * A progress bar gives the user a visual representation of their completion status of an ongoing process or task.
 * @summary Display completion status of ongoing process or task.
 * @alias Progress
 */
export declare class PfProgress extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Represents the value of the progress bar */
    value: number;
    /** Description (title) above the progress bar */
    description?: string;
    /** Indicate whether to truncate the string description (title) */
    descriptionTruncated: boolean;
    /** Maximum value for the progress bar */
    max: number;
    /** Minimum value for the progress bar */
    min: number;
    /** Size of the progress bar (height) */
    size?: 'sm' | 'lg';
    /** Where the percentage will be displayed with the progress element */
    measureLocation?: 'outside' | 'inside' | 'none';
    /** Variant of the progress bar */
    variant?: 'success' | 'danger' | 'warning';
    willUpdate(changed: PropertyValues<this>): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-progress': PfProgress;
    }
}
