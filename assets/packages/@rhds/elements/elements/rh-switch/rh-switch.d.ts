import { LitElement } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * A switch provides a visible toggle for a setting. Authors must supply
 * an accessible label via `accessible-label` or a `<label for>`. The
 * element uses ARIA `role="switch"` with `aria-checked` for screen
 * readers. Users should toggle with Space or Enter keys. Avoid using
 * a switch when multiple selections are needed; use checkboxes instead.
 *
 * @summary  A switch toggles the state of a setting (between on and off)
 *
 * @fires {Event} change - Fires when the user toggles the switch on or
 *   off via click, Space, or Enter. Does not fire when disabled. The
 *   event bubbles and carries no detail; read the `checked` property
 *   on the target element to determine the new state.
 *
 */
export declare class RhSwitch extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly formAssociated = true;
    /** invisible, accessible label for screen readers */
    accessibleLabel?: string;
    /** Message to display when the switch is on (i.e. checked) */
    messageOn?: string;
    /** Message to display when the switch is off (i.e. unchecked) */
    messageOff?: string;
    /** If the checkmark icon should be displayed when the switch is on */
    showCheckIcon: boolean;
    /** Whether the switch is on (checked) */
    checked: boolean;
    /** If the switch is disabled */
    disabled: boolean;
    /** If the switch is reversed: message first, then control */
    reversed: boolean;
    get labels(): NodeListOf<HTMLLabelElement>;
    formDisabledCallback(disabled: boolean): void;
    connectedCallback(): void;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-switch': RhSwitch;
    }
}
