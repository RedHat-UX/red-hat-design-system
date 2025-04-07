import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import '@rhds/elements/rh-icon/rh-icon.js';
export declare class DisclosureToggleEvent extends Event {
    constructor();
}
/**
 * A disclosure toggles the visibility of content when triggered.
 * @summary A disclosure toggles the visibility of content when triggered
 * @slot - Place the content you want to disclose in the default slot. This content is hidden by default.
 * @slot summary - The title of the disclosure
 * @fires {DisclosureToggleEvent} toggle - Fires when a user opens or closes a disclosure.
 * @csspart caret - The caret icon in the shadow DOM
 */
export declare class RhDisclosure extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static readonly preventEscElements;
    /**
     * Set the colorPalette of the disclosure. Overrides parent context. Possible values are:
     * - `lightest` (default)
     * - `lighter`
     * - `light`
     * - `dark`
     * - `darker`
     * - `darkest`
     */
    colorPalette?: ColorPalette;
    /**
     * Sets the disclosure to be in its open state
     */
    open: boolean;
    /**
     * Sets the disclosure title via an attribute
     */
    summary?: string;
    private detailsEl;
    private summaryEl;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-disclosure': RhDisclosure;
    }
}
