import { LitElement } from 'lit';
/**
 * The tab panel for use within a rh-tabs element, must be paired with a rh-tab.
 */
export declare class RhTabPanel extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tab-panel': RhTabPanel;
    }
}
