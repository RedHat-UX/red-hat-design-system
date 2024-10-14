import type { ComplexAttributeConverter, PropertyValues } from 'lit';

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import {
  TimestampController,
  type DateTimeFormat,
} from '@patternfly/pfe-core/controllers/timestamp-controller.js';

import styles from './rh-timestamp.css';

const BooleanStringConverter: ComplexAttributeConverter = {
  fromAttribute(value) {
    return !value || value === 'true';
  },
};

/**
 * A timestamp provides consistent formats for displaying date and time values.
 *
 * @summary Displays a line of text with date and time values
 */
@customElement('rh-timestamp')
export class RhTimestamp extends LitElement {
  static readonly styles = [styles];

  /**
   * Custom date formatting style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#datestyle) for options.
   */
  @property({ reflect: true, attribute: 'date-format' }) dateFormat?: DateTimeFormat;

  /**
   * Custom time formatting style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#timestyle) for options.
   */
  @property({ reflect: true, attribute: 'time-format' }) timeFormat?: DateTimeFormat;

  /**
   * Custom date and time formatting options. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) for a list of options.
   */
  @property({ attribute: false }) customFormat?: object;

  /**
   * Text to display after the timestamp
   */
  @property({ reflect: true, attribute: 'display-suffix' }) displaySuffix?: string;

  /**
   * Overrides the runtime's default locale
   */
  @property({ reflect: true }) locale?: string;

  /**
   * Formats a timestamp in realtive terms
   */
  @property({ reflect: true, type: Boolean }) relative?: boolean;

  /**
   * Sets the timezone as UTC
   */
  @property({ reflect: true, type: Boolean }) utc?: boolean;

  /**
   * Whether to use 12-hour time (as opposed to 24-hour time)
   */
  @property({
    reflect: true,
    attribute: 'hour-12',
    converter: BooleanStringConverter,
  }) hour12?: boolean;

  /**
   * A string value representing a date
   */
  @property({ reflect: true })
  get date() {
    return this.#timestamp.localeString;
  }

  set date(string) {
    this.#timestamp.date = new Date(string);
  }

  get isoString() {
    return this.#timestamp.isoString;
  }

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
