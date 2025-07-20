import type { PropertyValues } from 'lit';
import { LitElement } from 'lit';
import { type DateTimeFormat } from '@patternfly/pfe-core/controllers/timestamp-controller.js';
/**
 * A timestamp provides consistent formats for displaying date and time values.
 *
 * @summary Displays a line of text with date and time values
 *
 * @alias timestamp
 */
export declare class RhTimestamp extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Custom date formatting style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#datestyle) for options.
     */
    dateFormat?: DateTimeFormat;
    /**
     * Custom time formatting style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#timestyle) for options.
     */
    timeFormat?: DateTimeFormat;
    /**
     * Custom date and time formatting options. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) for a list of options.
     */
    customFormat?: object;
    /**
     * Text to display after the timestamp
     */
    displaySuffix?: string;
    /**
     * Overrides the runtime's default locale
     */
    locale?: string;
    /**
     * Formats a timestamp in realtive terms
     */
    relative?: boolean;
    /**
     * Sets the timezone as UTC
     */
    utc?: boolean;
    /**
     * Whether to use 12-hour time (as opposed to 24-hour time)
     */
    hour12?: boolean;
    /**
     * A string value representing a date
     */
    get date(): string;
    set date(string: string);
    get isoString(): string;
    get time(): string;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-timestamp': RhTimestamp;
    }
}
