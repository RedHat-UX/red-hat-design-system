import type { PropertyValues } from 'lit';
import { LitElement } from 'lit';
/**
 * A progress bar gives the user a visual representation of their completion status of an ongoing process or task.
 * @summary Display completion status of ongoing process or task.
 * @cssprop {<length>} --pf-c-progress--GridGap
 *          Gap between the sections of the progress bar.
 *          {@default `1rem`}
 * @cssprop {<color>} --pf-c-progress__bar--before--BackgroundColor
 *          Color of the progress bar.
 *          {@default `#06c`}
 * @cssprop {<length>} --pf-c-progress__bar--Height
 *          Height of the progress bar.
 *          {@default `1rem`}
 * @cssprop {<color>} --pf-c-progress__bar--BackgroundColor
 *          Background color of the progress bar.
 *          {@default `#ffffff`}
 * @cssprop {<color>} --pf-c-progress__status-icon--Color
 *          Color of the status icon.
 *          {@default `#151515`}
 * @cssprop {<length>} --pf-c-progress__status-icon--MarginLeft
 *          Margin left of the status icon.
 *          {@default `0.5rem`}
 * @cssprop {<length>} --pf-c-progress__indicator--Height
 *          Height of the progress bar indicator.
 *          {@default `1rem`}
 * @cssprop {<color>} --pf-c-progress__indicator--BackgroundColor
 *          Background color of the progress bar indicator.
 *          {@default `#ffffff`}
 * @cssprop {<color>} --pf-c-progress--m-success__bar--BackgroundColor
 *          Background color of the progress bar when variant is success.
 *          {@default `#3e8635`}
 * @cssprop {<color>} --pf-c-progress--m-warning__bar--BackgroundColor
 *          Background color of the progress bar when variant is warning.
 *          {@default `#f0ab00`}
 * @cssprop {<color>} --pf-c-progress--m-danger__bar--BackgroundColor
 *          Background color of the progress bar when variant is danger.
 *          {@default `#c9190b`}
 * @cssprop {<color>} --pf-c-progress--m-success__status-icon--Color
 *          Color of the status icon when variant is success.
 *          {@default `#3e8635`}
 * @cssprop {<color>} --pf-c-progress--m-warning__status-icon--Color
 *          Color of the status icon when variant is warning.
 *          {@default `#f0ab00`}
 * @cssprop {<color>} --pf-c-progress--m-danger__status-icon--Color
 *          Color of the status icon when variant is danger.
 *          {@default `#c9190b`}
 * @cssprop {<color>} --pf-c-progress--m-success--m-inside__measure--Color
 *          Color of the progress bar measure when variant is success and measure location is inside.
 *          {@default `#ffffff`}
 * @cssprop {<length>} --pf-c-progress--m-outside__measure--FontSize
 *          Font size of the progress bar measure when measure location is outside.
 *          {@default `0.875rem`}
 * @cssprop {<length>} --pf-c-progress--m-sm__bar--Height
 *          Height of the progress bar when the size is small.
 *          {@default `0.5rem`}
 * @cssprop {<length>} --pf-c-progress--m-sm__description--FontSize
 *          Font size of the progress bar description when the size is small.
 *          {@default `0.875rem`}
 * @cssprop {<length>} --pf-c-progress--m-lg__bar--Height
 *          Height of the progress bar when the size is large.
 *          {@default `1.5rem`}
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
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-progress': PfProgress;
    }
}
