import { LitElement } from 'lit';
export declare abstract class BaseAccordion extends LitElement {
    static isAccordion(target: EventTarget | null): target is BaseAccordion;
}
