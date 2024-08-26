import { LitElement, type TemplateResult } from 'lit';
import { PfChip } from './pf-chip.js';
export declare class PfChipGroupExpandEvent extends Event {
    constructor();
}
export declare class PfChipGroupRemoveEvent extends Event {
    constructor();
}
/**
 * A **chip group** is a collection of chips that can be grouped by category and used to represent one or more values assigned to a single attribute. When value of numChips is exceeded, additional chips will be hidden using an overflow chip.
 * @fires expand - Fires when chip group is expanded to show all chips
 * @fires remove - Fires when chip group is closed/removed
 * @slot category-name
 *      Category name text for chip group category. If this prop is supplied chip group with have a label and category styling applied
 * @slot - `<pf-chip>` elements.
 * @cssprop [--pf-c-chip-group__list--MarginBottom=calc(var(--pf-global--spacer--xs, 0.25rem) * -1)]
 * @cssprop [--pf-c-chip-group__list--MarginRight=calc(var(--pf-global--spacer--xs, 0.25rem) * -1)]
 * @cssprop [--pf-c-chip-group--m-category--PaddingTop=var(--pf-global--spacer--xs, 0.25rem)]
 * @cssprop [--pf-c-chip-group--m-category--PaddingRight=var(--pf-global--spacer--xs, 0.25rem)]
 * @cssprop [--pf-c-chip-group--m-category--PaddingBottom=var(--pf-global--spacer--xs, 0.25rem)]
 * @cssprop [--pf-c-chip-group--m-category--PaddingLeft=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-chip-group--m-category--BorderRadius=var(--pf-global--BorderRadius--sm, 3px)]
 * @cssprop [--pf-c-chip-group--m-category--BackgroundColor=var(--pf-global--BackgroundColor--200, #f0f0f0)]
 * @cssprop [--pf-c-chip-group__label--MarginRight=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-chip-group__label--FontSize=var(--pf-global--FontSize--sm, 0.875rem)]
 * @cssprop [--pf-c-chip-group__label--MaxWidth=18ch]
 * @cssprop [--pf-c-chip-group__close--MarginTop=calc(var(--pf-global--spacer--xs, 0.25rem) * -1)]
 * @cssprop [--pf-c-chip-group__close--MarginBottom=calc(var(--pf-global--spacer--xs, 0.25rem) * -1)]
 * @cssprop [--pf-c-chip-group__list-item--MarginRight=var(--pf-global--spacer--xs, 0.25rem)]
 * @cssprop [--pf-c-chip-group__list-item--MarginBottom=var(--pf-global--spacer--xs, 0.25rem)]
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
    constructor();
    render(): TemplateResult<1>;
    /**
     * updates chips when they change
     */
    private chipsChanged;
    /**
     * Activates the specified chip and sets focus on it
     * @param chip pf-chip element
     */
    focusOnChip(chip: PfChip): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-chip-group': PfChipGroup;
    }
}
