import { LitElement } from 'lit';
/**
 * Panel
 * @slot header - Place header content here
 * @slot - Place main content here
 * @slot footer - Place footer content here
 */
export declare class PfPanel extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    scrollable: boolean;
    variant?: 'raised' | 'bordered';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-panel': PfPanel;
    }
}
