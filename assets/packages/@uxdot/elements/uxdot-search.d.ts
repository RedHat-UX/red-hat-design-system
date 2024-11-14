import { LitElement } from 'lit';
import '@rhds/elements/rh-button/rh-button.js';
interface Item {
    label: string;
    value: string;
}
export declare class UxdotSearch extends LitElement {
    #private;
    static formAssociated: boolean;
    static styles: CSSStyleSheet[];
    placeholder?: string;
    items: Item[];
    expanded: boolean;
    activeIndex?: number;
    private static instances;
    get form(): HTMLFormElement | null;
    get value(): string;
    set value(value: string);
    get selectedItem(): Element | null | undefined;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
