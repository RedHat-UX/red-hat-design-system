import { LitElement, type TemplateResult } from 'lit';
/**
 * A **spinner** is used to indicate to users that an action is in progress. For actions
 * that may take a long time, use a progress bar instead.
 * @cssprop {<length>} [--pf-c-spinner--diameter=3.375rem]
 * @cssprop {<length>} [--pf-c-spinner--Width=3.375rem]
 * @cssprop {<length>} [--pf-c-spinner--Height=3.375rem]
 * @cssprop {<color>}  [--pf-c-spinner--Color=#06c]
 * @cssprop {<length>} [--pf-c-spinner--m-sm--diameter=0.625rem]
 * @cssprop {<length>} [--pf-c-spinner--m-md--diameter=1.125rem]
 * @cssprop {<length>} [--pf-c-spinner--m-lg--diameter=1.5rem]
 * @cssprop {<length>} [--pf-c-spinner--m-xl--diameter=3.375rem]
 * @cssprop {<time>}   [--pf-c-spinner--AnimationDuration=1.4s]
 * @cssprop {<string>} [--pf-c-spinner--AnimationTimingFunction=linear]
 * @cssprop {<number>} [--pf-c-spinner--stroke-width=10]
 * @cssprop {<color>}  [--pf-c-spinner__path--Stroke=#06c]
 * @cssprop {<number>} [--pf-c-spinner__path--StrokeWidth=10]
 * @cssprop {<string>} [--pf-c-spinner__path--AnimationTimingFunction=ease-in-out]
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
