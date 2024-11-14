import type { IconNameFor, IconSetName } from '@rhds/icons';
import { LitElement, type TemplateResult } from 'lit';
/**
 * A button is clickable text or an icon that triggers an action on the page or in the background.
 * Depending on the action, content, and hierarchy, a button can be used on its own or grouped with
 * other buttons.
 * @summary Triggers actions on the page or in the background
 * @csspart button - Internal button element
 * @csspart icon - Container for the icon slot
 * @slot icon - Contains the button's icon or state indicator, e.g. a spinner.
 * @slot - Contains button text
 */
export declare class RhButton extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly formAssociated = true;
    static readonly shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
        customElements?: CustomElementRegistry;
        registry?: CustomElementRegistry;
    };
    /** Disables the button */
    disabled: boolean;
    /**
     * button type
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type
     */
    type?: 'button' | 'submit' | 'reset';
    /** Accessible name for the button, use when the button does not have slotted text */
    label?: string;
    /** Form value for the button */
    value?: string;
    /** Form name for the button */
    name?: string;
    /** Shorthand for the `icon` slot, the value is icon name */
    icon?: IconNameFor<IconSetName>;
    /** Icon set for the `icon` property - 'ui' by default */
    iconSet?: IconSetName;
    private _button;
    /**
     * Changes the style of the button.
     * - Primary: Used for the most important call to action on a page. Try to
     *   limit primary buttons to one per page.
     * - Secondary: Use secondary buttons for general actions on a page, that
     *   don’t require as much emphasis as primary button actions. For example,
     *   you can use secondary buttons where there are multiple actions, like in
     *   toolbars or data lists.
     * - Tertiary: Tertiary buttons are flexible and can be used as needed.
     */
    variant: 'primary' | 'secondary' | 'tertiary' | 'close' | 'play';
    /**
     * Use danger buttons for actions a user can take that are potentially
     * destructive or difficult/impossible to undo, like deleting or removing
     * user data.
     */
    danger: boolean;
    private on?;
    willUpdate(): void;
    render(): TemplateResult<1>;
    protected formDisabledCallback(): Promise<void>;
    focus(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-button': RhButton;
    }
}
