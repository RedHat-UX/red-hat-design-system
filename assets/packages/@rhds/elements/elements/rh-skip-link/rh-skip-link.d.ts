import { LitElement } from 'lit';
/**
 * A skip link provides keyboard and screen reader users a way to bypass
 * repetitive navigation and jump directly to main content. Use it when
 * a page has many navigation items preceding the main content area.
 * It should be the first focusable element on the page, and authors
 * must provide either an `href` attribute or a slotted `<a>` element.
 *
 * @summary Allows users to skip repetitive navigation for accessibility
 *
 * @alias skip-link
 */
export declare class RhSkipLink extends LitElement {
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
    static readonly styles: CSSStyleSheet[];
    /**
     * URL fragment (e.g. `#main-content`) identifying the target element to
     * skip to. When set, the component renders its own anchor in shadow DOM
     * and the default slot accepts plain text for the link label.
     */
    href?: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-skip-link': RhSkipLink;
    }
}
