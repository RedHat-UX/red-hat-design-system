import { LitElement } from 'lit';
import { PfDropdownItem } from './pf-dropdown-item.js';
/**
 * A **dropdown** presents a menu of actions or links in a constrained space that will trigger a
 * process or navigate to a new location.
 *
 * @slot - Must contain one or more `<pf-dropdown-item>` or `<pf-dropdown-group>`
 */
export declare class PfDropdownMenu extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
        customElements?: CustomElementRegistry | undefined;
        registry?: CustomElementRegistry | undefined;
    };
    private ctx?;
    /**
     * current active descendant in menu
     */
    get activeItem(): HTMLElement | undefined;
    /**
     * index of current active descendant in menu
     */
    get activeIndex(): number;
    get items(): PfDropdownItem[];
    connectedCallback(): void;
    protected willUpdate(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-dropdown-menu': PfDropdownMenu;
    }
}
