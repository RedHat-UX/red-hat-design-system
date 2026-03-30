import type { IconNameFor, IconSetName } from '@rhds/icons';
import { LitElement, type TemplateResult } from 'lit';
/**
 * Navigation Link provides a link for use within Red Hat navigation
 * components. It must be a child of elements like `rh-subnav` or
 * `rh-navigation-primary` that provide the parent list context. Authors
 * should set `href` or slot an `<a>` element directly; authors must not
 * slot a `<button>`. When `current-page` is set, `aria-current="page"` is
 * applied so screen readers announce the active page. Uses
 * `delegatesFocus` so Tab focus passes to the anchor.
 *
 * @summary A link that can be used as a child of navigation elements.
 * @alias navigation-link
 */
export declare class RhNavigationLink extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
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
    /** Shorthand for the `icon` slot, the value is icon name */
    icon?: IconNameFor<IconSetName>;
    /** Icon set for the `icon` property - 'ui' by default */
    iconSet?: IconSetName;
    /** The URL to navigate to when the link is clicked */
    href?: string;
    /**
     * Indicates that this link refers to the current page for accessibility; used with the `href` attribute.
     * Sets the `aria-current` attribute to 'page' on the anchor element internally in the shadow DOM.
     */
    currentPage?: boolean | undefined;
    scheduleUpdate(): Promise<void>;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-link': RhNavigationLink;
    }
}
