import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
/**
 * Use cards to group small previews of content with optional calls to action.
 * Cards should contain a header with a heading level tag (h1-h6) and must not
 * replace primary page content. Cards do not manage focus; interactive elements
 * inside (links, CTAs) must be keyboard-accessible via Tab and activated with
 * Enter. Screen readers announce card content in DOM order. The `promo` variant
 * should be used for promotional content separate from the main page flow.
 *
 * @summary Groups content and optional actions in a contained layout
 */
export declare class RhCard extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    /**
     * Sets color palette, which affects the element's styles as well as descendants' color theme.
     * Overrides parent color context. Accepts 'lightest' | 'lighter' | 'light' | 'dark' |
     * 'darker' | 'darkest'. Promo variants automatically compute palette: featured promos
     * use the `-est` suffix, standard promos use the `-er` suffix. Defaults to undefined
     * (inherits from parent context). See [CSS Custom Properties](#css-custom-properties)
     * for default values.
     */
    colorPalette?: ColorPalette;
    /**
     * Controls the card's visual variant. Accepts 'promo' or undefined.
     * When set to 'promo', the card renders in a promotional layout with
     * grid-based positioning for image, body, and footer. Defaults to
     * undefined (standard card layout). Avoid mixing promo and standard
     * cards in the same group.
     */
    variant?: 'promo';
    /**
     * When true, a promo card bleeds to the edges of its container with no border.
     * Only applies when `variant` is 'promo'. Requires the image slot to be populated
     * for the full-width grid layout. Defaults to false. Boolean attribute.
     */
    fullWidth?: boolean | undefined;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-card': RhCard;
    }
}
