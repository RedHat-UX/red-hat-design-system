import { LitElement } from 'lit';
/**
 * A **timestamp** provides consistent formats for displaying date and time values.
 */
export declare class PfTimestamp extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    get date(): string;
    set date(string: string);
    dateFormat?: 'full' | 'long' | 'medium' | 'short';
    timeFormat?: 'full' | 'long' | 'medium' | 'short';
    customFormat?: object;
    displaySuffix?: string;
    locale?: string;
    relative?: boolean;
    utc?: boolean;
    hour12?: boolean;
    get isoString(): string;
    get time(): string;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-timestamp': PfTimestamp;
    }
}
