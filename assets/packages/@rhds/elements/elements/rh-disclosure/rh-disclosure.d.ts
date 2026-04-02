import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * Fired when a disclosure is opened or closed. The event bubbles and is
 * cancelable. Calling `preventDefault()` on the event prevents the
 * disclosure from changing state. The event carries no `detail`
 * payload; read the `open` property on `event.target` to determine
 * whether the disclosure is expanding or collapsing.
 */
export declare class DisclosureToggleEvent extends Event {
    constructor();
}
/**
 * A disclosure allows users to toggle supplementary content via a
 * trigger. Authors should provide a title through the `summary`
 * attribute or slot. It renders a native `<details>`/`<summary>`
 * pair; screen readers announce state changes. Enter or Space
 * toggles the panel, Tab moves focus in, and Escape closes it.
 * Avoid nesting; use `rh-accordion` instead.
 *
 * @summary A disclosure toggles the visibility of content when triggered
 *
 * @alias disclosure
 *
 * @fires {DisclosureToggleEvent} toggle - Fires when the disclosure
 *        opens or closes. The event has no `detail` payload; read
 *        `event.target.open` to determine the new state. The event
 *        bubbles and is cancelable — calling `preventDefault()` blocks
 *        the state change.
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
     * Sets the disclosure to be in its open (expanded) state
     */
    open: boolean;
    /**
     * Borderless: Removes the outer and left border from the disclosure.
     * The background is `surface-light`/`surface-dark` when expanded.
     * Compact: decreases disclosure padding.
     */
    variant?: 'borderless' | 'compact';
    /**
     * Sets the disclosure title via an attribute
     */
    summary?: string;
    private hasJumpLinks;
    private detailsEl;
    private summaryEl;
    render(): import("lit-html").TemplateResult<1>;
    protected _openChanged(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-disclosure': RhDisclosure;
    }
}
