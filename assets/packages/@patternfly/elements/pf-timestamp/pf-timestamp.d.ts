import type { PropertyValues, TemplateResult } from 'lit';
import { LitElement } from 'lit';
import { type DateTimeFormat } from '@patternfly/pfe-core/controllers/timestamp-controller.js';
/**
 * A **timestamp** provides consistent formats for displaying date and time values.
 */
export declare class PfTimestamp extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    dateFormat?: DateTimeFormat;
    timeFormat?: DateTimeFormat;
    customFormat?: object;
    displaySuffix?: string;
    locale?: string;
    relative?: boolean;
    utc?: boolean;
    hour12?: boolean;
    get date(): string;
    set date(string: string);
    get isoString(): string;
    get time(): string;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-timestamp': PfTimestamp;
    }
}
