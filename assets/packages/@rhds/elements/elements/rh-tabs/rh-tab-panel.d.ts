import { LitElement } from 'lit';
/**
 * A content panel for use in an `rh-tabs` element. Each panel
 * must be paired with a corresponding `rh-tab`. Authors should
 * avoid empty panels. The ARIA `tabpanel` role and `tabindex`
 * allow screen reader and keyboard navigation.
 *
 * @summary Content panel paired with an `rh-tab`
 *
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
