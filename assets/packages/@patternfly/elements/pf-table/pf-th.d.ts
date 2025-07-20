import { LitElement, type TemplateResult } from 'lit';
import '@patternfly/elements/pf-button/pf-button.js';
export declare class RequestSortEvent extends Event {
    key: string;
    direction: 'asc' | 'desc';
    constructor(key: string, direction: 'asc' | 'desc');
}
/**
 * Table header cell
 * @slot - Place element content here
 */
export declare class PfTh extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    sortable?: boolean;
    selected?: boolean;
    sortDirection?: 'asc' | 'desc';
    key: string;
    private contextualRole;
    connectedCallback(): void;
    render(): TemplateResult<1>;
    sort(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-th': PfTh;
    }
}
