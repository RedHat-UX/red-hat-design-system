import { LitElement, type TemplateResult } from 'lit';
/**
 * Tab
 * @fires {TabExpandEvent} expand - when a tab expands
 */
export declare class PfTab extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private icons?;
    active: boolean;
    disabled: boolean;
    private ctx?;
    connectedCallback(): void;
    willUpdate(): void;
    render(): TemplateResult<1>;
    protected activeChanged(old: boolean, active: boolean): void;
    protected disabledChanged(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-tab': PfTab;
    }
}
