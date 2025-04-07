import { LitElement } from 'lit';
/**
 * Chip Group
 * @slot - Place individual `rh-chips` inside `rh-chip-group`
 * @slot accessible-label
 *       An accessible label for the chip group.
 *       Content for this slot is put into the `<legend>` element.
 *       Also available as an attribute.
 * @slot clear-all
 *       Customized text for the "Clear all" button
 */
export declare class RhChipGroup extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Decreases the font-size of the chip's label
     */
    size?: 'sm';
    /**
     * The accessible label for the form control / `rh-chip-group`
     */
    accessibleLabel?: string;
    private defaultSlot;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-chip-group': RhChipGroup;
    }
}
