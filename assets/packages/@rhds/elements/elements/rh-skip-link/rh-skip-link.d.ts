import { LitElement } from 'lit';
/**
 * A skip link is used to skip repetitive content on a page.
 * It is hidden by default and can be activated by hitting
 * the "Tab" key after loading/refreshing a page.
 *
 * @summary Skip to the main content of a page
 *
 * @slot - Place an anchor tag with an `href` that targets an ID of the main content on the page.
 */
export declare class RhSkipLink extends LitElement {
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
        customElements?: CustomElementRegistry | undefined;
        registry?: CustomElementRegistry | undefined;
    };
    static readonly styles: CSSStyleSheet[];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-skip-link': RhSkipLink;
    }
}
