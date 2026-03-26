import type { ComplexAttributeConverter, PropertyValues } from 'lit';

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import {
  TimestampController,
  type DateTimeFormat,
} from '@patternfly/pfe-core/controllers/timestamp-controller.js';

import styles from './rh-timestamp.css' with { type: 'css' };

const BooleanStringConverter: ComplexAttributeConverter = {
  fromAttribute(value) {
    return !value || value === 'true';
  },
};

/**
 * Provides locale-aware date and time formatting for consistent display
 * across pages. Renders a `<time>` element with an ARIA-accessible
 * `datetime` attribute for screen readers. Authors MUST set `date`
 * when displaying a specific moment; when omitted, the current time
 * is used. Authors SHOULD wrap relative timestamps in `rh-tooltip`
 * so users can see the full date. AVOID combining `date-format` and
 * `time-format` with `customFormat` as `customFormat` overrides both.
 * The element is not keyboard-focusable on its own.
 *
 * @summary Displays a formatted date and time value using locale-aware formatting
 *
 * @alias timestamp
 */
@customElement('rh-timestamp')
export class RhTimestamp extends LitElement {
  static readonly styles = [styles];

  /**
   * Sets the date formatting style. When set without `time-format`, only the
   * date portion is displayed. Accepts `full`, `long`, `medium`, or `short`.
   * See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#datestyle) for details on each style.
   */
  @property({ reflect: true, attribute: 'date-format' }) dateFormat?: DateTimeFormat;

  /**
   * Sets the time formatting style. When set without `date-format`, only the
   * time portion is displayed. Accepts `full`, `long`, `medium`, or `short`.
   * See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#timestyle) for details on each style.
   */
  @property({ reflect: true, attribute: 'time-format' }) timeFormat?: DateTimeFormat;

  /**
   * Provides fine-grained control over date and time formatting using
   * `Intl.DateTimeFormatOptions`. This property must be set via JavaScript
   * (it is not reflected as an attribute). When set, it overrides `date-format`,
   * `time-format`, and `hour-12`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) for available options.
   */
  @property({ attribute: false }) customFormat?: object;

  /**
   * Appends custom text after the formatted timestamp string. Useful for
   * displaying a timezone label (e.g. "US Eastern") when the built-in
   * time format does not include one.
   */
  @property({ reflect: true, attribute: 'display-suffix' }) displaySuffix?: string;

  /**
   * Overrides the browser's default locale for formatting.
   * Accepts any valid BCP 47 language tag (e.g. "en-GB", "es", "ja").
   * Defaults to the browser's locale when not set.
   */
  @property({ reflect: true }) locale?: string;

  /**
   * When set, displays the timestamp as a relative time string
   * (e.g. "3 hours ago", "in 2 days") instead of an absolute date.
   * Uses `Intl.RelativeTimeFormat` for locale-aware output.
   */
  @property({ reflect: true, type: Boolean }) relative?: boolean;

  /**
   * When set, converts the displayed time to UTC. If no `display-suffix`
   * is provided, "UTC" is automatically appended.
   */
  @property({ reflect: true, type: Boolean }) utc?: boolean;

  /**
   * When set, uses 12-hour time format (e.g. "2:30 PM") instead of
   * 24-hour time (e.g. "14:30"). Accepts the attribute values "true"
   * or "false", or can be set as a boolean property.
   */
  @property({
    reflect: true,
    attribute: 'hour-12',
    converter: BooleanStringConverter,
  }) hour12?: boolean;

  /**
   * The date value to display, as a date string parseable by `new Date()`.
   * If not set, defaults to the current date and time. When read, returns
   * the locale-formatted string representation of the date.
   */
  @property({ reflect: true })
  get date() {
    return this.#timestamp.localeString;
  }

  set date(string) {
    this.#timestamp.date = new Date(string);
  }

  /** The ISO 8601 string representation of the current date value. */
  get isoString() {
    return this.#timestamp.isoString;
  }

  /** The formatted time string currently displayed by the element. */
  get time() {
    return this.#timestamp.time;
  }

  #timestamp = new TimestampController(this);

  override connectedCallback() {
    super.connectedCallback();
    const date = this.getAttribute('date');
    if (date) {
      this.#timestamp.date = new Date(date);
    }
  }

  override willUpdate(changedProperties: PropertyValues<this>) {
    for (const [prop] of changedProperties) {
      this.#timestamp.set(prop, this[prop as keyof this]);
    }
  }

  override render() {
    return html`
      <time datetime="${this.#timestamp.isoString}">${this.#timestamp.time}</time>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-timestamp': RhTimestamp;
  }
}
