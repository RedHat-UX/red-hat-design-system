import { LitElement } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * A switch toggles the state of a setting (between on and off). Switches and checkboxes can often be used interchangeably, but the switch provides a more explicit, visible representation on a setting.
 * @summary  A switch toggles the state of a setting (between on and off).
 * @cssprop --rh-switch-unchecked - The background color of the switch when it is unchecked.
 * @cssprop --rh-switch-checked - The background color of the switch when it is checked.
 * @cssprop --rh-switch-disabled - The background color of the switch when it is disabled.
 * @slot message-on - message content when checked. Overrides the `message-on` attribute.
 * @slot message-off - message content when unchecked. Overrides the `message-off` attribute.
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
    /** If the switch is on */
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
