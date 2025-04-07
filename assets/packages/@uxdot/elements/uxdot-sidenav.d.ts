import { LitElement } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
export declare class UxdotSideNav extends LitElement {
    #private;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
        customElements?: CustomElementRegistry;
        registry?: CustomElementRegistry;
    };
    static styles: CSSStyleSheet[];
    open: boolean;
    trigger?: string;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    updated(): void;
    toggle(trapFocus?: boolean): Promise<void>;
    close(trapFocus?: boolean): void;
}
export declare class UxdotSideNavItem extends LitElement {
    static styles: CSSStyleSheet[];
    active: boolean;
    href: string | undefined;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class UxdotSideNavDropdown extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    expanded: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class UxdotSideNavDropdownMenu extends LitElement {
    static styles: CSSStyleSheet[];
    render(): import("lit-html").TemplateResult<1>;
}
export declare class UxdotSideNavDropdownMenuItem extends UxdotSideNavItem {
    static styles: CSSStyleSheet[];
}
declare global {
    interface HTMLElementTagNameMap {
        'uxdot-sidenav': UxdotSideNav;
        'uxdot-sidenav-dropdown-menu': UxdotSideNavDropdownMenu;
        'uxdot-sidenav-dropdown-menu-item': UxdotSideNavDropdownMenuItem;
    }
}
