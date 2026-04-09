import type { IconNameFor, IconSetName } from '@rhds/icons';
import { LitElement } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
import './rh-navigation-primary-item-menu.js';
/**
 * A navigation item provides an interactive link or dropdown for the
 * primary navigation bar. It must be placed inside
 * `rh-navigation-primary`. Keyboard users press Enter
 * or Space to open or follow the link. Escape closes and returns focus to the toggle.
 * Link items should contain one `<a>` for an accessible name.
 *
 * @summary Interactive link or dropdown for the primary navigation
 *
 * @fires {Event} toggle - Fires when the dropdown opens or closes. The event
 *   has no custom detail; read the element's `open` property for the new state.
 *
 */
export declare class RhNavigationPrimaryItem extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private _details;
    private _summary;
    private compact?;
    /** Whether the dropdown is currently expanded. Only applies when `variant` is `dropdown`. */
    open: boolean;
    /**
     * Sets the label text for the dropdown toggle. When `variant` is `dropdown`,
     * either this property or the `summary` slot must be provided so the toggle
     * has an accessible name.
     */
    summary?: string;
    /**
     * Controls the presentation style of the navigation item. must be set to
     * `dropdown` when the item provides an expandable menu, otherwise it
     * should remain `link` for simple anchor-style items. Defaults to `link`.
     */
    variant?: 'link' | 'dropdown';
    /**
     * Hides the element below a given container-query breakpoint and reveals it
     * when the navigation is at or above that width. Allows progressive
     * disclosure of navigation items at wider viewports. Avoid hiding critical
     * navigation items, as they will be inaccessible below the breakpoint.
     * Defaults to `undefined`.
     */
    hideAt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /**
     * Shorthand for the `icon` slot. Sets the icon name from the given icon set.
     * should be used with the `dropdown` variant for standalone secondary items
     * such as account or search toggles. Defaults to `undefined`.
     */
    icon?: IconNameFor<IconSetName>;
    /**
     * Icon set for the `icon` property. must match a registered icon set name.
     * Defaults to `ui`.
     */
    iconSet?: IconSetName;
    protected firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    /** Sets `open` to `false`; only affects `dropdown` items. */
    hide(): Promise<void>;
    /** Sets `open` to `true`; only affects `dropdown` items. */
    show(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-primary-item': RhNavigationPrimaryItem;
    }
}
