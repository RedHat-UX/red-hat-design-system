import type { IconNameFor, IconSetName } from '@rhds/icons';
import { LitElement, type TemplateResult } from 'lit';
/**
 * Triggers actions via click, Enter, or Space. USE `variant` to set
 * hierarchy: primary (should limit one per page), secondary, tertiary,
 * or danger. Renders a native `<button>` with `delegatesFocus` for
 * keyboard access. Must use `label` for icon-only buttons to set the
 * ARIA accessible name. Supports form association (submit/reset).
 *
 * @summary Clickable button that triggers page or form actions
 *
 * @alias button
 */
export declare class RhButton extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly formAssociated = true;
    static readonly shadowRootOptions: {
        delegatesFocus: boolean;
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
        customElements?: CustomElementRegistry;
        registry?: CustomElementRegistry;
    };
    /**
     * Disables the button, preventing user interaction. When true, the button
     * receives `aria-disabled="true"` and pointer events are suppressed.
     * Disabled buttons are excluded from tab order unless `aria-disabled` is
     * used instead of `disabled`. Defaults to false.
     */
    disabled: boolean;
    /**
     * Controls the button's behavior within a form context. Accepts 'button'
     * (no default form behavior), 'submit' (submits the form), or 'reset'
     * (resets form fields). When omitted, defaults to implicit submit behavior.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * Accessible name for the button, applied as `aria-label` on the internal
     * `<button>`. USE when the button has no visible text (e.g. icon-only
     * buttons like close or play). When set, slotted text is hidden with
     * `aria-hidden="true"`. Defaults to undefined.
     */
    label?: string;
    /**
     * Form value submitted with the button when it triggers form submission.
     * Paired with `name` to create a name/value pair. Defaults to undefined.
     */
    value?: string;
    /**
     * Form name for the button, used with `value` to submit data when the
     * button triggers form submission. Defaults to undefined.
     */
    name?: string;
    /**
     * Shorthand for the `icon` slot. Accepts an icon name from the specified
     * icon set (defaults to 'ui'). When set, renders an `<rh-icon>` in the
     * icon slot. Should use micron icons for best fit. Defaults to undefined.
     */
    icon?: IconNameFor<IconSetName>;
    /**
     * Icon set for the `icon` property. Accepts any registered icon set name.
     * Defaults to 'ui' when not specified. USE 'microns' for small inline icons.
     */
    iconSet?: IconSetName;
    private _button;
    /**
     * Controls the visual hierarchy and style of the button. Accepts
     * ‘primary’ | ‘secondary’ | ‘tertiary’ | ‘close’ | ‘play’. Defaults to
     * ‘primary’. Should limit primary to one per page. USE secondary for
     * general actions, tertiary for low-emphasis actions. Close and play
     * variants render icon-only circular buttons with visually hidden text.
     */
    variant: 'primary' | 'secondary' | 'tertiary' | 'close' | 'play';
    /**
     * Applies danger styling for destructive or irreversible actions like
     * deleting data. Combines with `variant` to produce danger-primary or
     * danger-secondary styles. AVOID using for non-destructive actions.
     * Defaults to false.
     */
    danger: boolean;
    willUpdate(): void;
    render(): TemplateResult<1>;
    protected formDisabledCallback(): Promise<void>;
    /**
     * Programmatically moves focus to the button element.
     *
     * This method focuses the internal button element, making it the active element
     * on the page. Useful for managing focus flow after dynamic content changes or
     * user interactions.
     *
     * ## Usage guidelines
     * - Use to direct user attention after completing an action
     * - Helpful for accessibility when managing focus programmatically
     * - Called automatically when the button is the target of a focus navigation
     * - Can be used after modals close to return focus to a trigger button
     *
     * ## Accessibility
     * - When focus is moved programmatically, ensure users are aware of the change
     * - Avoid moving focus unexpectedly as it can disorient users
     * - Moving focus to a button should be deliberate and serve user needs
     *
     * @example
     * ```js
     * const button = document.querySelector('rh-button');
     * button.focus();
     * ```
     */
    focus(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-button': RhButton;
    }
}
