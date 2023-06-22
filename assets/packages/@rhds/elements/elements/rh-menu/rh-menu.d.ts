import { LitElement } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core';
export declare class MenuToggleEvent extends ComposedEvent {
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
