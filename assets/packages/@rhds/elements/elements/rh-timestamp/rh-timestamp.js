var _RhTimestamp_timestamp;
import { __classPrivateFieldGet } from "tslib";
import { LitElement, html } from 'lit';
import { TimestampController, } from '@patternfly/pfe-core/controllers/timestamp-controller.js';
import { css } from "lit";
const styles = css `:host{display:inline}time{text-decoration:var(--_timestamp-text-decoration,none);text-underline-offset:var(--_timestamp-text-underline-offset,initial)}`;
const BooleanStringConverter = {
    fromAttribute(value) {
        return !value || value === 'true';
    },
};
/**
 * A timestamp provides consistent formats for displaying date and time values.
 *
 * @summary Displays a line of text with date and time values
 */
export class RhTimestamp extends LitElement {
    constructor() {
        super(...arguments);
        _RhTimestamp_timestamp.set(this, new TimestampController(this));
    }
    get date() {
        return __classPrivateFieldGet(this, _RhTimestamp_timestamp, "f").localeString;
    }
    set date(string) {
        __classPrivateFieldGet(this, _RhTimestamp_timestamp, "f").date = new Date(string);
    }
    get isoString() {
        return __classPrivateFieldGet(this, _RhTimestamp_timestamp, "f").isoString;
    }
    get time() {
        return __classPrivateFieldGet(this, _RhTimestamp_timestamp, "f").time;
    }
    connectedCallback() {
        super.connectedCallback();
        const date = this.getAttribute('date');
        if (date) {
            __classPrivateFieldGet(this, _RhTimestamp_timestamp, "f").date = new Date(date);
        }
    }
    willUpdate(changedProperties) {
        for (const [prop] of changedProperties) {
            __classPrivateFieldGet(this, _RhTimestamp_timestamp, "f").set(prop, this[prop]);
        }
    }
    render() {
        return html `
      <time datetime="${__classPrivateFieldGet(this, _RhTimestamp_timestamp, "f").isoString}">${__classPrivateFieldGet(this, _RhTimestamp_timestamp, "f").time}</time>
    `;
    }
}
_RhTimestamp_timestamp = new WeakMap();
RhTimestamp.properties = {
    dateFormat: { reflect: true, attribute: 'date-format' },
    timeFormat: { reflect: true, attribute: 'time-format' },
    customFormat: { attribute: false },
    displaySuffix: { reflect: true, attribute: 'display-suffix' },
    locale: { reflect: true },
    relative: { reflect: true, type: Boolean },
    utc: { reflect: true, type: Boolean },
    hour12: {
        reflect: true,
        attribute: 'hour-12',
        converter: BooleanStringConverter,
    },
    date: { reflect: true }
};
RhTimestamp.styles = [styles];
customElements.define("rh-timestamp", RhTimestamp);
//# sourceMappingURL=rh-timestamp.js.map