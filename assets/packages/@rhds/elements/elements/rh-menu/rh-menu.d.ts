import { LitElement } from 'lit';
export declare class MenuToggleEvent extends Event {
    open: boolean;
    menu: HTMLElement;
    constructor(open: boolean, menu: HTMLElement);
}
/**
 * Menu
 * @slot - menu items
 */
export declare class RhMenu extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
        customElements?: CustomElementRegistry | undefined;
        registry?: CustomElementRegistry | undefined;
    };
    private _menuItems;
    private on?;
    get activeItem(): HTMLElement | undefined;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    activateItem(item: HTMLElement): void;
    focus(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-menu': RhMenu;
    }
}
