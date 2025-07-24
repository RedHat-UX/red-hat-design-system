import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import './rh-navigation-primary-overlay.js';
import '@rhds/elements/rh-icon/rh-icon.js';
export type NavigationPrimaryPalette = Extract<ColorPalette, ('lightest' | 'darkest')>;
/**
 * Primary navigation helps users orient themselves and move through websites and domains.
 *
 * @summary       Primary navigation
 *
 * @alias Navigation (primary)
 *
 */
export declare class RhNavigationPrimary extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * We should start in compact mode (mobile first)
     * Later, after the element has fully hydrated, we can recompute
     * whether to use the compact layout based on the viewport
     * @internal
     */
    compact: boolean;
    private _overlayOpen;
    private _hamburgerOpen;
    private _hamburger;
    private _hamburgerSummary;
    /**
     * Sets the mobile toggle (hamburger) text, used for translations, defaults to 'Menu'
     */
    mobileToggleLabel: string;
    /** Sets color context for child components, overrides parent context */
    colorPalette?: NavigationPrimaryPalette;
    /**
     * Customize the default `aria-label` on the `<nav>` container.
     * Defaults to "main" if no attribute/property is set.
     */
    accessibleLabel: string;
    static focusableChildElements(parent: HTMLElement): NodeListOf<HTMLElement>;
    constructor();
    protected firstUpdated(): void;
    connectedCallback(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    protected compactChanged(oldVal: boolean, newVal: boolean): void;
    /**
     * Close Menus
     * @param skip Boolean - closes hamburger menu if true and in a small viewport, default false;
     */
    close(skip?: boolean): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-primary': RhNavigationPrimary;
    }
}
