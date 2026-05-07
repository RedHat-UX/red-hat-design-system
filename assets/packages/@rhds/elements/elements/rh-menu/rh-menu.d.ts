import { LitElement } from 'lit';
export declare class MenuToggleEvent extends Event {
    open: boolean;
    menu: HTMLElement;
    constructor(open: boolean, menu: HTMLElement);
}
/**
 * A menu provides a list of actions or links in a vertical layout.
 * It is typically used as a subcomponent within `rh-menu-dropdown`, which
 * allows users to select from available options. Authors must ensure that
 * slotted content consists of `rh-menu-item`, `rh-menu-item-group`, or
 * anchor elements. The element assigns the ARIA `menubar` role and manages
 * keyboard focus with a roving tabindex, so users can navigate items using
 * Arrow keys and Tab.
 *
 * @summary Vertically stacked list of menu actions or links
 *
 * @fires {MenuToggleEvent} toggle - Fired when the menu opens or closes.
 *        The event detail includes the `open` boolean state and a reference
 *        to the menu element.
 */
export declare class RhMenu extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static shadowRootOptions: {
        delegatesFocus: boolean;
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
        customElements?: CustomElementRegistry;
        registry?: CustomElementRegistry;
    };
    private _menuItems;
    /**
     * override or set to add items to the roving tab index controller
     * @param items original list of items
     */
    getItems(items: HTMLElement[]): HTMLElement[];
    get activeItem(): HTMLElement | undefined;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    activateItem(item: HTMLElement): void;
    focus(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-menu': RhMenu;
    }
}
