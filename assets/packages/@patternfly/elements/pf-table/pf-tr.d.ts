import { LitElement, type PropertyValues } from 'lit';
import '@patternfly/elements/pf-button/pf-button.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
export declare class RequestExpandEvent extends Event {
    /**
     * if provided, the slot name for the compound-expanded cell
     */
    compoundExpanded: string | boolean;
    /**
     * if compoundExpanded is provided, a reference to the row
     * must also be provided.
     */
    row?: PfTr;
    constructor();
    constructor(compoundExpanded: string | boolean, row: PfTr);
}
/**
 * Table row
 * @slot - Place element content here
 */
export declare class PfTr extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    expandable: boolean | 'compound';
    expanded: boolean | string;
    connectedCallback(): void;
    willUpdate(changed: PropertyValues<this>): void;
    render(): (false | '' | import('lit-html').TemplateResult<1>)[];
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-tr': PfTr;
    }
}
