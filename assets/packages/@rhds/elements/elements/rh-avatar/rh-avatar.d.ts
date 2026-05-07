import { LitElement, type PropertyValues } from 'lit';
/**
 * Provides a circular user thumbnail for mastheads, cards, and attribution when
 * you need to visually identify a person. Allows an image, a deterministic
 * pattern, or a default icon. Must not take focus or act as a control; images
 * carry `role="presentation"`. Authors should provide a name via the
 * default slot so screen readers have context.
 *
 * @summary Circular thumbnail for mastheads, navigation, and attribution
 *
 * @slot - The user's display name — provides the accessible label for screen readers. Accepts text or an anchor for linked names.
 * @slot subtitle - Auxiliary info such as job title. Accepts text or `<a>` elements. Slotted anchors receive interactive color token styles. Screen readers announce this after the name.
 *
 * @csspart canvas - The `<canvas>` used for generated geometric patterns.
 * @csspart img - The `<img>` or default `<svg>` silhouette icon.
 *
 * @cssprop [--rh-avatar-size=var(--rh-size-icon-06, 64px)] - Thumbnail width and height; capped at the `--rh-size-icon-06` token (64px).
 * @cssprop [--rh-avatar-colors] - Space-separated hex values overriding the built-in light-dark pattern color tokens.
 */
export declare class RhAvatar extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * URL to a custom avatar image. Replaces the default icon and any
     * generated pattern. The `<img>` has `role="presentation"`.
     */
    src?: string;
    /**
     * The user's display name. Falls back as default slot content and
     * seeds the deterministic pattern generator when `pattern` is set.
     */
    name?: string;
    /**
     * Auxiliary text such as job title or company. Falls back as default
     * content in the `subtitle` slot.
     */
    subtitle?: string;
    /**
     * Thumbnail position relative to text: `'inline'` (default, left of text)
     * or `'block'` (stacked above). Both collapse to centered block below 576px.
     */
    layout?: 'inline' | 'block';
    /**
     * Type of geometric pattern (`'squares'` or `'triangles'`). Generated
     * deterministically from `name` so the same name always yields the same
     * pattern. Colors come from the `--_colors` CSS custom property.
     *
     * @see [Style](https://ux.redhat.com/elements/avatar/style/)
     */
    pattern?: 'squares' | 'triangles';
    /**
     * When true, visually hides the name and subtitle via CSS clip while
     * keeping them accessible to screen readers.
     */
    plain: boolean;
    /**
     * Adds a subtle border around the thumbnail when set to `'bordered'`.
     */
    variant?: 'bordered';
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    updated(changed: PropertyValues<this>): Promise<void>;
    /**
     * Re-renders the geometric pattern. Called automatically when `pattern`
     * or `name` change; call manually after updating CSS custom properties.
     * @deprecated a future version will remove this public method
     */
    updatePattern(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-avatar': RhAvatar;
    }
}
