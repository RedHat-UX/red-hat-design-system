import { LitElement, type TemplateResult } from 'lit';
import '@patternfly/elements/pf-button/pf-button.js';
export declare class LabelCloseEvent extends Event {
    constructor();
}
/**
 * The **label** component allows users to add specific element captions for user
 * clarity and convenience.
 * @summary Allows users to display meta data in a stylized form.
 * @alias Label
 * @fires {LabelCloseEvent} close - when a removable label's close button is clicked
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
