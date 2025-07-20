import { LitElement } from 'lit';
/**
 * A skip link is used to skip repetitive content on a page.
 * It is hidden by default and can be activated by hitting
 * the "Tab" key after loading/refreshing a page.
 *
 * @summary Skip to the main content of a page
 *
 * @alias skip-link
 *
 * @slot - An anchor tag targeting the main page content by id hash.
 *         Or, if the `href` attribute is set, the text of the link.
 */
export declare class RhSkipLink extends LitElement {
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
        customElements?: CustomElementRegistry;
        registry?: CustomElementRegistry;
    };
    static readonly styles: CSSStyleSheet[];
    href?: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-skip-link': RhSkipLink;
    }
}
