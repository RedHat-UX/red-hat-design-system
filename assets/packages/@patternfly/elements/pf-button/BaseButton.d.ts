import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
/**
 * Base button class
 * @csspart button - Internal button element
 * @csspart icon - Container for the icon slot
 * @slot icon
 *       Contains the button's icon or state indicator, e.g. a spinner.
 * @slot
 *       Must contain exactly one `<button>` element as the only content not assigned to a named slot.
 */
export declare abstract class BaseButton extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    static readonly formAssociated = true;
    static readonly shadowRootOptions: ShadowRootInit;
    /** Disables the button */
    disabled: boolean;
    type?: 'button' | 'submit' | 'reset';
    /** Accessible name for the button, use when the button does not have slotted text */
    label?: string;
    value?: string;
    name?: string;
    /** Shorthand for the `icon` slot, the value is icon name */
    icon?: string;
    /** Changes the size of the button. */
    abstract size?: string;
    /**
     * Use danger buttons for actions a user can take that are potentially
     * destructive or difficult/impossible to undo, like deleting or removing
     * user data.
     */
    abstract danger: unknown;
    protected get hasIcon(): boolean;
    render(): TemplateResult<1>;
    protected formDisabledCallback(): Promise<void>;
    /**
     * Fallback content for the icon slot. When the `icon` attribute is set, it
     * should render an icon corresponding to the value.
     *
     * @example ```html
     *          <base-icon icon=${this.icon}></base-icon>
     *          ```
     */
    protected abstract renderDefaultIcon(): TemplateResult;
}
