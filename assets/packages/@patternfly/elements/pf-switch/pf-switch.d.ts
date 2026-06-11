import { LitElement, type TemplateResult } from 'lit';
/**
 * A **switch** toggles the state of a setting (between on and off). Switches and
 * checkboxes can often be used interchangeably, but the switch provides a more
 * explicit, visible representation on a setting.
 * @alias Switch
 * @fires {Event} change - Fires when the switch selection changes.
 */
export declare class PfSwitch extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly formAssociated = true;
    shadowRoot: ShadowRoot;
    /** @deprecated use `accessible-label` instead */
    label?: string;
    /**
     * Accessible label for the switch when there is no associated `<label>` element.
     * Update this value based on the checked state to communicate the meaning of
     * each state to assistive technology users, e.g. "Wi-Fi on" / "Wi-Fi off".
     */
    accessibleLabel?: string;
    /** Flag to show if the switch has a check icon. */
    showCheckIcon: boolean;
    /** Flag to show if the switch is checked. */
    checked: boolean;
    /** Flag to show if the switch is disabled. */
    disabled: boolean;
    get labels(): NodeListOf<HTMLLabelElement>;
    connectedCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    willUpdate(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-switch': PfSwitch;
    }
}
