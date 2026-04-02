import { LitElement } from 'lit';
/**
 * A chip group provides a `<fieldset>` container for related `rh-chip`
 * elements. It renders a `<legend>` for screen reader accessibility.
 * Authors must provide an accessible label when "Filter by:" is not
 * appropriate. Authors should avoid placing non-chip elements in the
 * default slot. Users may press Tab to navigate between chips.
 *
 * @summary Groups related chips with a label and clear-all action
 *
 * @csspart legend - The `<legend>` element containing the
 *          accessible label, styled with `--rh-font-size-body-text-md`.
 *
 * @demo https://ux.redhat.com/elements/chip/demo/chip-group/ Chip Group
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
