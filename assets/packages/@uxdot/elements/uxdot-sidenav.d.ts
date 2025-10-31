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
declare global {
    interface HTMLElementTagNameMap {
        'uxdot-sidenav': UxdotSideNav;
    }
}
