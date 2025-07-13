import { LitElement, type PropertyValues } from 'lit';
import '@rhds/elements/rh-switch/rh-switch.js';
import '@rhds/elements/rh-tabs/rh-tabs.js';
import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
export declare class UxdotKnobAttribute extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    tag: string;
    demo: string;
    name: string;
    type?: string;
    default?: string;
    get value(): string;
    set value(v: string);
    update(ch: PropertyValues<this>): Promise<void>;
    protected typeChanged(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'uxdot-knob-attribute': UxdotKnobAttribute;
    }
}
