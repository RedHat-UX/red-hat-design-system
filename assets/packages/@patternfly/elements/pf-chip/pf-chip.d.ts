import { LitElement, type TemplateResult } from 'lit';
import '@patternfly/elements/pf-button/pf-button.js';
export declare class PfChipRemoveEvent extends Event {
    chip: PfChip;
    constructor(chip: PfChip);
}
/**
 * A **chip** is used to communicate a value or a set of attribute-value pairs within workflows that involve filtering a set of objects.
 * @fires {ChipRemoveEvent} remove - Fires when chip is removed
 * @fires {Event} click - when close button is clicked
 * @slot
 *      chip text
 * @csspart text - container for chip text
 * @cssprop [--pf-c-chip--PaddingTop=var(--pf-global--spacer--xs, 0.25rem)]
 * @cssprop [--pf-c-chip--PaddingRight=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-chip--PaddingBottom=var(--pf-global--spacer--xs, 0.25rem)]
 * @cssprop [--pf-c-chip--PaddingLeft=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-chip--BackgroundColor=var(--pf-global--Color--light-100, #fff)]
 * @cssprop [--pf-c-chip--BorderRadius=var(--pf-global--BorderRadius--sm, 3px)]
 * @cssprop [--pf-c-chip--before--BorderColor=var(--pf-global--BorderColor--300, #f0f0f0)]
 * @cssprop [--pf-c-chip--before--BorderWidth=var(--pf-global--BorderWidth--sm, 1px)]
 * @cssprop [--pf-c-chip--before--BorderRadius=var(--pf-c-chip--BorderRadius)]
 * @cssprop [--pf-c-chip--m-overflow__text--Color=var(--pf-global--primary-color--100, #06c)]
 * @cssprop [--pf-c-chip--m-draggable--BackgroundColor=var(--pf-global--BackgroundColor--200, #f0f0f0)]
 * @cssprop [--pf-c-chip--m-draggable--BoxShadow=var(--pf-global--BoxShadow--sm, 0 0.0625rem 0.125rem 0 rgba(3, 3, 3, 0.12), 0 0 0.125rem 0 rgba(3, 3, 3, 0.06))]
 * @cssprop [--pf-c-chip--m-draggable__icon--FontSize=var(--pf-global--icon--FontSize--sm, 0.625rem)]
 * @cssprop [--pf-c-chip__text--FontSize=var(--pf-global--FontSize--xs, 0.75rem)]
 * @cssprop [--pf-c-chip__text--Color=var(--pf-global--Color--100, #151515)]
 * @cssprop [--pf-c-chip__text--MaxWidth=16ch]
 * @cssprop [--pf-c-chip__icon--MarginLeft=var(--pf-global--spacer--sm, 0.5rem)]
 */
export declare class PfChip extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    /**
     * Accessible label for close button
     */
    accessibleCloseLabel: string;
    /**
     * Flag indicating if chip is read-only and cannot be removed
     */
    readonly: boolean;
    /**
     * Flag indicating if chip is read-only and cannot be removed
     */
    overflowChip: boolean;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-chip': PfChip;
    }
}
