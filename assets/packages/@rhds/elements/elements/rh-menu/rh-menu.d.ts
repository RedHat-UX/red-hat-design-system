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
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
        customElements?: CustomElementRegistry;
        registry?: CustomElementRegistry;
    };
    private _menuItems;
    private on?;
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
