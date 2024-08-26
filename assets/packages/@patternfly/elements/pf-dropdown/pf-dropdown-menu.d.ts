import { LitElement, type TemplateResult } from 'lit';
import { PfDropdownItem } from './pf-dropdown-item.js';
/**
 * A **dropdown** presents a menu of actions or links in a constrained space that will trigger a
 * process or navigate to a new location.
 * @slot - Must contain one or more `<pf-dropdown-item>` or `<pf-dropdown-group>`
 */
export declare class PfDropdownMenu extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    private ctx?;
    /**
     * current active descendant in menu
     */
    get activeItem(): HTMLElement | null;
    /**
     * index of current active descendant in menu
     */
    get activeIndex(): number;
    get items(): PfDropdownItem[];
    connectedCallback(): void;
    protected willUpdate(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-dropdown-menu': PfDropdownMenu;
    }
}
