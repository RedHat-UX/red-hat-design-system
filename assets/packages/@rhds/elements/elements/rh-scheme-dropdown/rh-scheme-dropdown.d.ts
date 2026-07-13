import { LitElement } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
declare global {
    interface Storage {
        rhdsColorScheme: 'light' | 'dark' | 'light dark';
    }
}
/** Represents the available color scheme values. */
type Scheme = 'light' | 'dark' | 'light dark';
/**
 * Fired when the active color scheme changes by user interaction or
 * programmatic update. Does not fire on initial load from localStorage.
 * Bubbles and is composed, so listeners on ancestor elements will
 * receive it. Read `event.scheme` to get the newly selected value.
 */
export declare class SchemeChangedEvent extends Event {
    scheme: Scheme;
    constructor(scheme: Scheme);
}
/**
 * Provides a color scheme picker for switching between light, dark,
 * and system defaults. Accessible by default with a screen-reader
 * label (WCAG 4.1.2), keyboard navigation, and focus management.
 * Authors should set `accessible-label` for localization.
 *
 * @summary Displays a variety of color schemes in a menu dropdown
 *
 * @fires {SchemeChangedEvent} scheme-changed - Fired when the color scheme changes
 */
export declare class RhSchemeDropdown extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    /**
     * Current color scheme setting. Reflects to the `scheme` attribute and
     * initializes from `localStorage.rhdsColorScheme` when available.
     * When set, applies the value to `document.body.style.colorScheme`
     * and persists it to `localStorage`.
     */
    scheme?: Scheme;
    /**
     * Visually hidden accessible label for the scheme dropdown.
     * Authors should keep this text short (under 20 characters).
     */
    accessibleLabel: string;
    /**
     * Accessible label for the light mode option.
     */
    accessibleLabelLight: string;
    /**
     * Accessible label for the dark mode option.
     */
    accessibleLabelDark: string;
    /**
     * Accessible label for the system default option.
     */
    accessibleLabelSystem: string;
    /**
     * Syncs the selected-state flags before each render so the
     * template always reflects the current `scheme` value.
     */
    protected willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Observes changes to the `scheme` property. Applies the selected
     * color scheme to `document.body` and persists it to `localStorage`
     * so the preference survives page reloads.
     */
    private schemeChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-scheme-dropdown': RhSchemeDropdown;
    }
}
export {};
