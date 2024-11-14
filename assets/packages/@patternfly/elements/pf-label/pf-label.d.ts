import { LitElement, type TemplateResult } from 'lit';
import '@patternfly/elements/pf-button/pf-button.js';
export declare class LabelCloseEvent extends Event {
    constructor();
}
/**
 * The **label** component allows users to add specific element captions for user
 * clarity and convenience.
 * @summary Allows users to display meta data in a stylized form.
 * @fires {LabelCloseEvent} close - when a removable label's close button is clicked
 * @cssprop {<length>} [--pf-c-label--FontSize=0.875em]
 * @cssprop {<length>} [--pf-c-label--PaddingTop=0.25rem]
 * @cssprop {<length>} [--pf-c-label--PaddingRight=0.5rem]
 * @cssprop {<length>} [--pf-c-label--PaddingBottom=0.25rem]
 * @cssprop {<length>} [--pf-c-label--PaddingLeft=0.5rem]
 * @cssprop {<color>} [--pf-c-label--Color=#151515]
 * @cssprop {<color>} [--pf-c-label--BackgroundColor=#f5f5f5]
 * @cssprop {<length>} [--pf-c-label--BorderRadius=30em]
 * @cssprop {<length>} [--pf-c-label__content--MaxWidth=100]
 * @cssprop {<color>} [--pf-c-label__content--Color=#151515]
 * @cssprop {<length>} [--pf-c-label__content--before--BorderWidth=1px]
 * @cssprop {<color>} [--pf-c-label__content--before--BorderColor=#d2d2d2]
 * @cssprop {<color>} [--pf-c-label--m-outline__content--Color=#151515]
 * @cssprop {<color>} [--pf-c-label--m-outline--BackgroundColor=#ffffff]
 * @cssprop {<color>} [--pf-c-label--m-blue__content--Color=#002952]
 * @cssprop {<color>} [--pf-c-label--m-blue--BackgroundColor=#e7f1fa]
 * @cssprop {<color>} [--pf-c-label--m-blue__content--before--BorderColor=#bee1f4]
 * @cssprop {<color>} [--pf-c-label--m-outline--m-blue__content--Color=#06c]
 * @cssprop {<color>} [--pf-c-label--m-cyan__content--Color=#3b1f00]
 * @cssprop {<color>} [--pf-c-label--m-cyan--BackgroundColor=#f2f9f9]
 * @cssprop {<color>} [--pf-c-label--m-cyan__content--before--BorderColor=#a2d9d9]
 * @cssprop {<color>} [--pf-c-label--m-outline--m-cyan__content--Color=#005f60]
 * @cssprop {<color>} [--pf-c-label--m-green__content--Color=#1e4f18]
 * @cssprop {<color>} [--pf-c-label--m-green--BackgroundColor=#f3faf2]
 * @cssprop {<color>} [--pf-c-label--m-green__content--before--BorderColor=#bde5b8]
 * @cssprop {<color>} [--pf-c-label--m-outline--m-green__content--Color=#3e8635]
 * @cssprop {<color>} [--pf-c-label--m-orange__content--Color=#003737]
 * @cssprop {<color>} [--pf-c-label--m-orange--BackgroundColor=#fff6ec]
 * @cssprop {<color>} [--pf-c-label--m-orange__content--before--BorderColor=#f4b678]
 * @cssprop {<color>} [--pf-c-label--m-outline--m-orange__content--Color=#8f4700]
 * @cssprop {<color>} [--pf-c-label--m-purple__content--Color=#1f0066]
 * @cssprop {<color>} [--pf-c-label--m-purple--BackgroundColor=#f2f0fc]
 * @cssprop {<color>} [--pf-c-label--m-purple__content--before--BorderColor=#cbc1ff]
 * @cssprop {<color>} [--pf-c-label--m-outline--m-purple__content--Color=#6753ac]
 * @cssprop {<color>} [--pf-c-label--m-red__content--Color=#7d1007]
 * @cssprop {<color>} [--pf-c-label--m-red--BackgroundColor=#faeae8]
 * @cssprop {<color>} [--pf-c-label--m-red__content--before--BorderColor=#c9190b]
 * @cssprop {<color>} [--pf-c-label--m-outline--m-red__content--Color=#c9190b]
 * @cssprop {<color>} [--pf-c-label--m-gold__content--Color=#3d2c00]
 * @cssprop {<color>} [--pf-c-label--m-gold--BackgroundColor=#fdf7e7]
 * @cssprop {<color>} [--pf-c-label--m-gold__content--before--BorderColor=#f9e0a2]
 * @cssprop {<color>} [--pf-c-label--m-outline--m-gold__content--Color=#795600]
 * @cssprop {<color>} [--pf-c-label--m-blue__icon--Color=#06c]
 * @cssprop {<color>} [--pf-c-label--m-cyan__icon--Color=#009596]
 * @cssprop {<color>} [--pf-c-label--m-green__icon--Color=#3e8635]
 * @cssprop {<color>} [--pf-c-label--m-orange__icon--Color=#ec7a08]
 * @cssprop {<color>} [--pf-c-label--m-red__icon--Color=#c9190b]
 * @cssprop {<color>} [--pf-c-label--m-gold__icon--Color=#f0ab00]
 * @csspart icon - container for the label icon
 * @csspart close-button - container for removable labels' close button
 * @slot icon
 *       Contains the labels's icon, e.g. web-icon-alert-success.
 * @slot
 *       Must contain the text for the label.
 * @cssprop {<length>} [--pf-c-label--m-compact--PaddingTop=0]
 * @cssprop {<length>} [--pf-c-label--m-compact--PaddingRight=0.5rem]
 * @cssprop {<length>} [--pf-c-label--m-compact--PaddingBottom=0]
 * @cssprop {<length>} [--pf-c-label--m-compact--PaddingLeft=0.5rem]
 */
export declare class PfLabel extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    /**
     * Changes the style of the label.
     * - Filled: Colored background with colored border.
     * - Outline: White background with colored border.
     */
    variant: 'filled' | 'outline';
    /**
     * Changes the color of the label
     */
    color: 'blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'grey' | 'gold';
    /** Shorthand for the `icon` slot, the value is icon name */
    icon?: string;
    /** Flag indicating the label is compact */
    compact: boolean;
    /** Flag indicating the label text should be truncated */
    truncated: boolean;
    /** Flag indicating the label is removable */
    removable: boolean;
    /** Text label for a removable label's close button */
    closeButtonLabel?: string;
    render(): TemplateResult<1>;
}
export type LabelVariant = PfLabel['variant'];
export type LabelColor = PfLabel['color'];
declare global {
    interface HTMLElementTagNameMap {
        'pf-label': PfLabel;
    }
}
