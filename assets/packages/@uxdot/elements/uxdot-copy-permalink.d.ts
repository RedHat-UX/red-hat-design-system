import { LitElement } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
export declare class UxdotCopyPermalink extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    copyButtonLabel: string;
    copiedText: string;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
