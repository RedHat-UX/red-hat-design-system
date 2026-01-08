import { LitElement, type TemplateResult } from 'lit';
/**
 * The **panel** component is a container that supports flexible content layouts. It can
 * be used to house other components such as fields, forms, videos, buttons, and more.
 * The panel should not be confused with the [drawer](https://www.patternfly.org/v4/components/drawer/design-guidelines/)
 * component, which allows you to surface information via a collapsable container.
 * @alias Panel
 */
export declare class PfPanel extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    scrollable: boolean;
    variant?: 'raised' | 'bordered';
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-panel': PfPanel;
    }
}
