import type { IconNameFor, IconSetName } from '@rhds/icons';
import { LitElement, type TemplateResult } from 'lit';
/**
 * Navigation Link is a link element that is used as a child of the primary, secondary,
 * subnav, and vertical navigation elements. Intrinsically, the Navigation Link is a list
 * item and should not be used outside of navigation elements that define the parent list element.
 *
 * @summary A link that can be used as a child of navigation elements.
 * @alias navigation-link
 */
export declare class RhNavigationLink extends LitElement {
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
