import { LitElement, type TemplateResult } from 'lit';
/**
 * A menu item provides a single action or link within an `rh-menu`.
 * It renders with the ARIA `menuitem` role for screen reader users.
 * Authors must provide visible text content in the default slot.
 * When `href` is set, the item behaves as a hyperlink; authors should
 * set the `external` attribute for links that open in a new tab. Focus
 * is managed by the parent `rh-menu` via roving tabindex, so keyboard
 * users can navigate items with Arrow keys.
 *
 * @summary A single action or link within a menu
 *
 * @alias Menu Dropdown Item
 */
export declare class RhMenuItem extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Whether the menu item is disabled.
     * Disabled items are not interactive and are visually indicated as such.
     */
    disabled: boolean;
    /**
     * Specifies the destination URL for the menu item.
     * If specified, the menu item behaves as a hyperlink.
     */
    href: string;
    /**
     * Whether the link should open externally.
     * When true, the link opens in a new browser tab or window
     * and includes appropriate security attributes (`target="_blank"` and `rel="noopener noreferrer"`).
    */
    external: boolean;
    static readonly shadowRootOptions: ShadowRootInit;
    connectedCallback(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-menu-item': RhMenuItem;
    }
}
