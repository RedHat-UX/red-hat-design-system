import { LitElement } from 'lit';
/**
 * Switch
 */
export declare abstract class BaseSwitch extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    static readonly shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
        customElements?: CustomElementRegistry | undefined;
    };
    static readonly formAssociated = true;
    shadowRoot: ShadowRoot;
    label?: string;
    showCheckIcon: boolean;
    checked: boolean;
    disabled: boolean;
    get labels(): NodeListOf<HTMLLabelElement>;
    connectedCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    render(): import("lit-html").TemplateResult<1>;
    updated(): void;
}
