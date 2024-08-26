import { LitElement, type TemplateResult } from 'lit';
/**
 * A **switch** toggles the state of a setting (between on and off). Switches and
 * checkboxes can often be used interchangeably, but the switch provides a more
 * explicit, visible representation on a setting.
 * @fires {Event} change - Fires when the switch selection changes.
 * @cssprop [--pf-c-switch--FontSize=1rem]
 * @cssprop {<length>} [--pf-c-switch--ColumnGap=1rem]
 * @cssprop [--pf-c-switch__toggle-icon--FontSize=calc(1rem * .625)]
 * @cssprop {<color>} [--pf-c-switch__toggle-icon--Color=#fff]
 * @cssprop {<length>} [--pf-c-switch__toggle-icon--Left=1rem]
 * @cssprop {<length>} [--pf-c-switch__toggle-icon--Offset=0.125rem]
 * @cssprop {<number>} [--pf-c-switch--LineHeight=1.5]
 * @cssprop {<length>} [--pf-c-switch--Height=auto]
 * @cssprop {<color>} [--pf-c-switch__input--checked__toggle--BackgroundColor=#06c]
 * @cssprop {<length>} [--pf-c-switch__input--checked__toggle--before--TranslateX=calc(100 + 0.125rem)]
 * @cssprop {<color>} [--pf-c-switch__input--checked__label--Color=#151515]
 * @cssprop {<color>} [--pf-c-switch__input--not-checked__label--Color=#6a6e73]
 * @cssprop {<color>} [--pf-c-switch__input--disabled__label--Color=#6a6e73]
 * @cssprop {<color>} [--pf-c-switch__input--disabled__toggle--BackgroundColor=#d2d2d2]
 * @cssprop {<color>} [--pf-c-switch__input--disabled__toggle--before--BackgroundColor=#f5f5f5]
 * @cssprop {<length>} [--pf-c-switch__input--focus__toggle--OutlineWidth=2px]
 * @cssprop {<length>} [--pf-c-switch__input--focus__toggle--OutlineOffset=0.5rem]
 * @cssprop {<color>} [--pf-c-switch__input--focus__toggle--OutlineColor=#06c]
 * @cssprop {<length>} [--pf-c-switch__toggle--Height=calc(1rem * 1.5)]
 * @cssprop {<color>} [--pf-c-switch__toggle--BackgroundColor=#8a8d90]
 * @cssprop {<length>} [--pf-c-switch__toggle--BorderRadius=calc(1rem * 1.5)]
 * @cssprop {<length>} [--pf-c-switch__toggle--before--Width=calc(1rem - 0.125rem)]
 * @cssprop {<length>} [--pf-c-switch__toggle--before--Height=calc(1rem - 0.125rem)]
 * @cssprop {<length>} [--pf-c-switch__toggle--before--Top=calc((calc(1rem * 1.5) - calc(1rem - 0.125rem)) / 2)`]
 * @cssprop {<length>} [--pf-c-switch__toggle--before--Left=calc((calc(1rem * 1.5) - calc(1rem - 0.125rem)) / 2)]
 * @cssprop {<color>} [--pf-c-switch__toggle--before--BackgroundColor=#fff]
 * @cssprop {<length>} [--pf-c-switch__toggle--before--BorderRadius=30em]
 * @cssprop [--pf-c-switch__toggle--before--BoxShadow=0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06)]
 * @cssprop [--pf-c-switch__toggle--before--Transition=transform .25s ease 0s]
 * @cssprop {<length>} [--pf-c-switch__toggle--Width=calc(calc(1rem * 1.5) + 0.125rem + calc(1rem - 0.125rem))]
 */
export declare class PfSwitch extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly formAssociated = true;
    shadowRoot: ShadowRoot;
    /** Accessible label text for the switch */
    label?: string;
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
