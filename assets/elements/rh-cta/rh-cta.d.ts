import type { ColorPalette, ColorTheme } from '../../lib/context/color.js';
import { LitElement } from 'lit';
import '@patternfly/pfe-icon';
export interface CtaData {
    href?: string;
    text?: string;
    title?: string;
    color?: string;
    type?: string;
}
/**
 * Call to action stands out from regular hypertext links, and is used for linking users to webpages.
 *
 * @summary Directs a user to other pages or displays extra content
 *
 * @slot - We expect an anchor tag, `<a>` with an `href`, to be the first child inside `rh-cta` element. Less preferred but allowed for specific use-cases include: `<button>` (note however that the `button` tag is not supported for the default CTA styles).
 *
 * @csspart container - container element for slotted CTA
 *
 */
export declare class RhCta extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    /**
     * Indicates the importance of this call-to-action in the context of the page.
     * Will also influence how the call-to-action is styled.
     *   - **Primary**: Use for the primary or most important link. This variant is the highest in
     *       hierarchy and can also be used to play a video in a Modal or large container.
     *   - **Secondary**: Use for secondary or general links. This variant is lower in hierarchy than
     *       the Primary variant and can be used multiple times in the same container or layout.
     *   - **Brick**: Use to group links together. Only the Brick variant can stretch to fit a
     *       container or grid, otherwise the text label padding in other variants stays the same.
     *   - Default (no variant): Use for tertiary or the least important links. This variant is the
     *       lowest in hierarchy and can be used multiple times in the same container or layout.
     */
    variant?: 'primary' | 'secondary' | 'brick';
    /**
     * Sets color palette, which affects the element's styles as well as descendants' color theme.
     * Overrides parent color context.
     * Your theme will influence these colors so check there first if you are seeing inconsistencies.
     * See [CSS Custom Properties](#css-custom-properties) for default values
     */
    colorPalette?: ColorPalette;
    /**
     * Sets color theme based on parent context
     */
    on?: ColorTheme;
    icon?: string;
    /** The slotted `<a>` or `<button>` element */
    cta: HTMLAnchorElement | HTMLButtonElement | null;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-cta': RhCta;
    }
}
