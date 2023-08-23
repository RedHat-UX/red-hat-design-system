import { LitElement } from 'lit';
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
    static readonly styles: import("lit").CSSResult[];
    sortable?: boolean;
    selected?: boolean;
    sortDirection?: 'asc' | 'desc';
    key: string;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    sort(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-th': PfTh;
    }
}
