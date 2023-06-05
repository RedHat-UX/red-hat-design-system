import { BaseButton } from '@patternfly/elements/pf-button/BaseButton.js';
/**
 * A button is clickable text or an icon that triggers an action on the page or in the background. Depending on the action, content, and hierarchy, a button can be used on its own or grouped with other buttons.
 *
 * @summary Triggers actions on the page or in the background
 * @summary Triggers actions on the page or in the background
 * @csspart icon - Container for the icon slot
 * @slot icon - Contains the button's icon or state indicator, e.g. a spinner.
 * @slot - Contains button text
 */
export declare class RhButton extends BaseButton {
    #private;
    static readonly styles: import("lit").CSSResult[];
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
    /** @deprecated The size property is not currently used */
    size: string;
    /**
     * When set, indicates that the button performs a destructive action
     */
    danger: boolean;
    private on?;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
    protected renderDefaultIcon(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-button': RhButton;
    }
}
