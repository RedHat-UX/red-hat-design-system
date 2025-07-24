import { LitElement } from 'lit';
/**
 * Chip Group
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
