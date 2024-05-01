import { LitElement } from 'lit';
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
 */
export declare class PfChip extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
        customElements?: CustomElementRegistry | undefined;
        registry?: CustomElementRegistry | undefined;
    };
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
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-chip': PfChip;
    }
}
