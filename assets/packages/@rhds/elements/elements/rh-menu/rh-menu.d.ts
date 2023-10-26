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
    static readonly styles: import("lit").CSSResult[];
    private on?;
    get activeItem(): HTMLElement | undefined;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    activateItem(item: HTMLElement): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-menu': RhMenu;
    }
}
