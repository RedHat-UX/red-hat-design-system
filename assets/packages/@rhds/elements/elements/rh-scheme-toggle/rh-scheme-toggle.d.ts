import { LitElement } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
declare global {
    interface Storage {
        rhdsColorScheme: 'light' | 'dark' | 'light dark';
    }
}
type Scheme = 'light' | 'dark' | 'light dark';
/**
 * A switch toggles the state of the color scheme (between light, dark and system default).
 *
 * @summary  A switch toggles the state of the color scheme (between light, dark and system default).
 *
 * @alias Scheme toggle
 */
export declare class RhSchemeToggle extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    /** Current color scheme setting */
    scheme?: Scheme;
    /** Legend text for the color scheme toggle group */
    legendText: string;
    /** Label text for the light mode option */
    lightText: string;
    /** Label text for the dark mode option */
    darkText: string;
    /** Label text for the system default option */
    systemText: string;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private schemeChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-scheme-toggle': RhSchemeToggle;
    }
}
export {};
