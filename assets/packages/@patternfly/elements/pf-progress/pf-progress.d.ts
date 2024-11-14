import type { PropertyValues, TemplateResult } from 'lit';
import { LitElement } from 'lit';
/**
 * A progress bar gives the user a visual representation of their completion status of an ongoing process or task.
 * @summary Display completion status of ongoing process or task.
 * @cssprop {<length>} [--pf-c-progress--GridGap=1rem]
 *          Gap between the sections of the progress bar.
 *
 * @cssprop {<color>} [--pf-c-progress__bar--before--BackgroundColor=#06c]
 *          Color of the progress bar.
 *
 * @cssprop {<length>} [--pf-c-progress__bar--Height=1rem]
 *          Height of the progress bar.
 *
 * @cssprop {<color>} [--pf-c-progress__bar--BackgroundColor=#ffffff]
 *          Background color of the progress bar.
 *
 * @cssprop {<color>} [--pf-c-progress__status-icon--Color=#151515]
 *          Color of the status icon.
 *
 * @cssprop {<length>} [--pf-c-progress__status-icon--MarginLeft=0.5rem]
 *          Margin left of the status icon.
 *
 * @cssprop {<length>} [--pf-c-progress__indicator--Height=1rem]
 *          Height of the progress bar indicator.
 *
 * @cssprop {<color>} [--pf-c-progress__indicator--BackgroundColor=#ffffff]
 *          Background color of the progress bar indicator.
 *
 * @cssprop {<color>} [--pf-c-progress--m-success__bar--BackgroundColor=#3e8635]
 *          Background color of the progress bar when variant is success.
 *
 * @cssprop {<color>} [--pf-c-progress--m-warning__bar--BackgroundColor=#f0ab00]
 *          Background color of the progress bar when variant is warning.
 *
 * @cssprop {<color>} [--pf-c-progress--m-danger__bar--BackgroundColor=#c9190b]
 *          Background color of the progress bar when variant is danger.
 *
 * @cssprop {<color>} [--pf-c-progress--m-success__status-icon--Color=#3e8635]
 *          Color of the status icon when variant is success.
 *
 * @cssprop {<color>} [--pf-c-progress--m-warning__status-icon--Color=#f0ab00]
 *          Color of the status icon when variant is warning.
 *
 * @cssprop {<color>} [--pf-c-progress--m-danger__status-icon--Color=#c9190b]
 *          Color of the status icon when variant is danger.
 *
 * @cssprop {<color>} [--pf-c-progress--m-success--m-inside__measure--Color=#ffffff]
 *          Color of the progress bar measure when variant is success and measure location is inside.
 *
 * @cssprop {<length>} [--pf-c-progress--m-outside__measure--FontSize=0.875rem]
 *          Font size of the progress bar measure when measure location is outside.
 *
 * @cssprop {<length>} [--pf-c-progress--m-sm__bar--Height=0.5rem]
 *          Height of the progress bar when the size is small.
 *
 * @cssprop {<length>} [--pf-c-progress--m-sm__description--FontSize=0.875rem]
 *          Font size of the progress bar description when the size is small.
 *
 * @cssprop {<length>} [--pf-c-progress--m-lg__bar--Height=1.5rem]
 *          Height of the progress bar when the size is large.
 *
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
