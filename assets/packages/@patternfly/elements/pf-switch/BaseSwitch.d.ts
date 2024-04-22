import { LitElement } from 'lit';
/**
 * Switch
 */
export declare abstract class BaseSwitch extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly formAssociated = true;
    shadowRoot: ShadowRoot;
    label?: string;
    showCheckIcon: boolean;
    checked: boolean;
    disabled: boolean;
    get labels(): NodeListOf<HTMLLabelElement>;
    connectedCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    render(): import("lit").TemplateResult<1>;
    willUpdate(): void;
}
