import { LitElement } from 'lit';
import type { IconNameFor, IconSetName } from '@rhds/icons';
/**
 * Provides a styled link or button for prominent user actions when you need to
 * draw attention to a key interaction. Must contain an `href` attribute or a
 * slotted `<a>` / `<button>`. Screen readers announce the slotted text. Used
 * primarily for linking to other pages. Users should prefer to use the `href`
 * attribute or slotted links with this component. Avoid `<button>` with the
 * default (no variant) style.
 *
 * @summary Styled link or button for prominent user actions
 *
 * @alias Call to action
 *
 */
export declare class RhCta extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Visual importance: `primary` (red fill), `secondary` (bordered),
     * `brick` (full-width grid), or undefined (default inline link with arrow).
     */
    variant?: 'primary' | 'secondary' | 'brick';
    /** URL for the CTA link. Renders an internal `<a>` instead of using a slotted element. */
    href?: string;
    /** Triggers a file download when `href` is set. Passes through to the link. */
    download?: string;
    /** Referrer policy when `href` is set. Passes through to the link. */
    referrerpolicy?: string;
    /** Link relationship when `href` is set. Passes through to the link. */
    rel?: string;
    /** Browsing context when `href` is set (e.g. `_blank`). Passes through to the link. */
    target?: string;
    /** Icon name. Overrides the default trailing arrow, or displays before text in brick variant. */
    icon?: IconNameFor<IconSetName>;
    /** Icon set to load from. Defaults to `ui`. */
    iconSet: IconSetName;
    scheduleUpdate(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-cta': RhCta;
    }
}
