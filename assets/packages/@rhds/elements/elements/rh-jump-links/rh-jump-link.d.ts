import { LitElement, type TemplateResult } from 'lit';
/**
 * An individual navigation link within `<rh-jump-links>` that scrolls the
 * page to a target section. Renders as `role="listitem"` with an internal
 * anchor. When active, sets `aria-current="location"` for screen readers.
 * Tab moves focus to the link; Enter or click scrolls to the `href`
 * target. Must be a child of `<rh-jump-links>` or `<rh-jump-links-list>`.
 *
 * @summary A single jump link targeting a page section
 */
export declare class RhJumpLink extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    /** Whether the layout of children is vertical or horizontal. */
    private orientation?;
    /** Whether this link represents the currently visible section. When true, a bold border and `aria-current="location"` are applied. Defaults to false. */
    active: boolean;
    /** The URL fragment (e.g. `"#section-id"`) this link navigates to. Must match an element ID on the page. Defaults to undefined. */
    href?: string;
    connectedCallback(): void;
    render(): TemplateResult<1>;
    protected activeChanged(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-jump-link': RhJumpLink;
    }
}
