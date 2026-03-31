import type { PropertyValues } from 'lit';
import { LitElement } from 'lit';
import { type DateTimeFormat } from '@patternfly/pfe-core/controllers/timestamp-controller.js';
/**
 * Provides locale-aware date and time formatting for consistent display
 * across pages. Renders a `<time>` element with an ARIA-accessible
 * `datetime` attribute for screen readers. Authors must set `date`
 * when displaying a specific moment; when omitted, the current time
 * is used. Authors should wrap relative timestamps in `rh-tooltip`
 * so users can see the full date. Avoid combining `date-format` and
 * `time-format` with `customFormat` as `customFormat` overrides both.
 * The element is not keyboard-focusable on its own.
 *
 * @summary Displays a formatted date and time value using locale-aware formatting
 *
 * @alias timestamp
 */
export declare class RhTimestamp extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Sets the date formatting style. When set without `time-format`, only the
     * date portion is displayed. Accepts `full`, `long`, `medium`, or `short`.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#datestyle) for details on each style.
     */
    dateFormat?: DateTimeFormat;
    /**
     * Sets the time formatting style. When set without `date-format`, only the
     * time portion is displayed. Accepts `full`, `long`, `medium`, or `short`.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#timestyle) for details on each style.
     */
    timeFormat?: DateTimeFormat;
    /**
     * Provides fine-grained control over date and time formatting using
     * `Intl.DateTimeFormatOptions`. This property must be set via JavaScript
     * (it is not reflected as an attribute). When set, it overrides `date-format`,
     * `time-format`, and `hour-12`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) for available options.
     */
    customFormat?: object;
    /**
     * Appends custom text after the formatted timestamp string. Useful for
     * displaying a timezone label (e.g. "US Eastern") when the built-in
     * time format does not include one.
     */
    displaySuffix?: string;
    /**
     * Overrides the browser's default locale for formatting.
     * Accepts any valid BCP 47 language tag (e.g. "en-GB", "es", "ja").
     * Defaults to the browser's locale when not set.
     */
    locale?: string;
    /**
     * When set, displays the timestamp as a relative time string
     * (e.g. "3 hours ago", "in 2 days") instead of an absolute date.
     * Uses `Intl.RelativeTimeFormat` for locale-aware output.
     */
    relative?: boolean;
    /**
     * When set, converts the displayed time to UTC. If no `display-suffix`
     * is provided, "UTC" is automatically appended.
     */
    utc?: boolean;
    /**
     * When set, uses 12-hour time format (e.g. "2:30 PM") instead of
     * 24-hour time (e.g. "14:30"). Accepts the attribute values "true"
     * or "false", or can be set as a boolean property.
     */
    hour12?: boolean;
    /**
     * The date value to display, as a date string parseable by `new Date()`.
     * If not set, defaults to the current date and time. When read, returns
     * the locale-formatted string representation of the date.
     */
    get date(): string;
    set date(string: string);
    /** The ISO 8601 string representation of the current date value. */
    get isoString(): string;
    /** The formatted time string currently displayed by the element. */
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
