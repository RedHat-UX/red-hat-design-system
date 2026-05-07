var _RhTimestamp_timestamp;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { TimestampController, } from '@patternfly/pfe-core/controllers/timestamp-controller.js';
import { css } from "lit";
const styles = css `:host{display:inline}time{text-decoration:var(--_timestamp-text-decoration,none);text-underline-offset:var(--_timestamp-text-underline-offset,initial)}`;
const BooleanStringConverter = {
    fromAttribute(value) {
        return !value || value === 'true';
    },
};
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
 */
let RhTimestamp = class RhTimestamp extends LitElement {
    constructor() {
        super(...arguments);
        _RhTimestamp_timestamp.set(this, new TimestampController(this));
    }
    /**
     * The date value to display, as a date string parseable by `new Date()`.
     * If not set, defaults to the current date and time. When read, returns
     * the locale-formatted string representation of the date.
     */
    get date() {
        return __classPrivateFieldGet(this, _RhTimestamp_timestamp, "f").localeString;
    }
    set date(string) {
        __classPrivateFieldGet(this, _RhTimestamp_timestamp, "f").date = new Date(string);
    }
    /** The ISO 8601 string representation of the current date value. */
    get isoString() {
        return __classPrivateFieldGet(this, _RhTimestamp_timestamp, "f").isoString;
    }
    /** The formatted time string currently displayed by the element. */
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
};
_RhTimestamp_timestamp = new WeakMap();
RhTimestamp.styles = [styles];
__decorate([
    property({ reflect: true, attribute: 'date-format' })
], RhTimestamp.prototype, "dateFormat", void 0);
__decorate([
    property({ reflect: true, attribute: 'time-format' })
], RhTimestamp.prototype, "timeFormat", void 0);
__decorate([
    property({ attribute: false })
], RhTimestamp.prototype, "customFormat", void 0);
__decorate([
    property({ reflect: true, attribute: 'display-suffix' })
], RhTimestamp.prototype, "displaySuffix", void 0);
__decorate([
    property({ reflect: true })
], RhTimestamp.prototype, "locale", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhTimestamp.prototype, "relative", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhTimestamp.prototype, "utc", void 0);
__decorate([
    property({
        reflect: true,
        attribute: 'hour-12',
        converter: BooleanStringConverter,
    })
], RhTimestamp.prototype, "hour12", void 0);
__decorate([
    property({ reflect: true })
], RhTimestamp.prototype, "date", null);
RhTimestamp = __decorate([
    customElement('rh-timestamp')
], RhTimestamp);
export { RhTimestamp };
//# sourceMappingURL=rh-timestamp.js.map