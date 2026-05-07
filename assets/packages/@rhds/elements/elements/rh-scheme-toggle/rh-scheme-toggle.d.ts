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
 * A scheme toggle provides users with the ability to switch between
 * light, dark, and system default color schemes. It should be placed
 * in a visible location for easy access. For WCAG compliance, screen
 * reader users must be able to identify each option; the component
 * uses a native fieldset with ARIA-compatible radio buttons. Tab
 * focuses the group; arrow keys allow selection between schemes.
 *
 * @summary Switches between light, dark, and system default color schemes
 */
export declare class RhSchemeToggle extends LitElement {
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
     * Legend text displayed next to the toggle button group.
     * Authors should keep this text short (under 20 characters).
     */
    legendText: string;
    /**
     * Accessible label for the light mode radio button.
     * Rendered as a visually-hidden span and a `title` tooltip.
     */
    lightText: string;
    /**
     * Accessible label for the dark mode radio button.
     * Rendered as a visually-hidden span and a `title` tooltip.
     */
    darkText: string;
    /**
     * Accessible label for the system default radio button.
     * Rendered as a visually-hidden span and a `title` tooltip.
     */
    systemText: string;
    connectedCallback(): void;
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
        'rh-scheme-toggle': RhSchemeToggle;
    }
}
export {};
