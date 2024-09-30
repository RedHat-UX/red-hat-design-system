import { LitElement } from 'lit';
/**
 * The tab panel for use within a rh-tabs element, must be paired with a rh-tab.
 *
 * @slot - Panel content should follow guidelines for [tab panel content layout](../guidelines)
 *
 */
export declare class RhTabPanel extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Sets color theme based on parent context
     */
    private on?;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tab-panel': RhTabPanel;
    }
}
