import { LitElement } from 'lit';
/**
 * A switch toggles the state of a setting (between on and off). Switches and checkboxes can often be used interchangeably, but the switch provides a more explicit, visible representation on a setting.
 * @summary  A switch toggles the state of a setting (between on and off).
 * @cssprop --rh-switch-unchecked - The background color of the switch when it is unchecked.
 * @cssprop --rh-switch-checked - The background color of the switch when it is checked.
 * @cssprop --rh-switch-disabled - The background color of the switch when it is disabled.
 */
export declare class RhSwitch extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly formAssociated = true;
    label?: string;
    showCheckIcon: boolean;
    checked: boolean;
    disabled: boolean;
    accessibleLabel?: string;
    messageOn?: string;
    messageOff?: string;
    reversed: boolean;
    /**
     * Sets color theme based on parent context
     */
    private on?;
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
