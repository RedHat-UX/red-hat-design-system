import { LitElement, type PropertyValues } from 'lit';
export declare class PfChipGroupExpandEvent extends Event {
    constructor();
}
export declare class PfChipGroupRemoveEvent extends Event {
    constructor();
}
/**
 * A **chip group** is a collection of chips that can be grouped by category and used to represent one or more values assigned to a single attribute. When value of numChips is exceeded, additional chips will be hidden using an overflow chip.
 *
 * @fires expand - Fires when chip group is expanded to show all chips
 * @fires remove - Fires when chip group is closed/removed
 *
 * @slot category-name
 *      Category name text for chip group category. If this prop is supplied chip group with have a label and category styling applied
 *
 * @slot
 *      Should be <Chip> elements.
 */
export declare class PfChipGroup extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    /**
     * Accessible label for chip group that does not have a category name
     */
    accessibleLabel: string;
    /**
     * Accessible label for close button
     */
    accessibleCloseLabel: string;
    /**
     * Customizeable "more" template string. Use variable "${remaining}" for overflow chip count.
     */
    collapsedText: string;
    /**
     * Customizable "show less" text string.
     */
    expandedText: string;
    /**
     * Set number of chips to show before overflow
     */
    numChips: number;
    /**
     * Flag indicating if overflow chips are visible
     */
    open: boolean;
    /**
     * Flag if chip group can be closed
     */
    closeable: boolean;
    private _overflowChip?;
    private _button?;
    private _categorySlotted?;
    constructor();
    render(): import("lit").TemplateResult<1>;
    updated(changed: PropertyValues<this>): void;
    /**
     * active chip that receives focus when group receives focus
     */
    get activeChip(): HTMLElement;
    set activeChip(chip: HTMLElement);
    /**
     * whether or not group has a category
     */
    get hasCategory(): boolean;
    get remaining(): number;
    /**
     * Activates the specified chip and sets focus on it
     */
    focusOnChip(chip: HTMLElement): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-chip-group': PfChipGroup;
    }
}
