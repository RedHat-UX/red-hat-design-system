var _PfTimestamp_instances, _PfTimestamp_date, _PfTimestamp_isoString, _PfTimestamp_getTimeRelative;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const style = css `:host{display:inline}time{text-decoration:var(--_timestamp-text-decoration,none);text-underline-offset:var(--_timestamp-text-underline-offset,initial)}`;
const BooleanStringConverter = {
    fromAttribute(value) {
        return !value || value === 'true';
    },
};
/**
 * A timestamp provides consistent formats for displaying date and time values.
 */
let PfTimestamp = class PfTimestamp extends LitElement {
    constructor() {
        super(...arguments);
        _PfTimestamp_instances.add(this);
        _PfTimestamp_date.set(this, new Date());
        _PfTimestamp_isoString.set(this, __classPrivateFieldGet(this, _PfTimestamp_date, "f").toISOString());
    }
    get date() {
        return __classPrivateFieldGet(this, _PfTimestamp_date, "f").toLocaleString();
    }
    set date(string) {
        __classPrivateFieldSet(this, _PfTimestamp_date, new Date(string), "f");
        __classPrivateFieldSet(this, _PfTimestamp_isoString, __classPrivateFieldGet(this, _PfTimestamp_date, "f").toISOString(), "f");
    }
    get isoString() {
        return __classPrivateFieldGet(this, _PfTimestamp_isoString, "f");
    }
    get time() {
        const { hour12, customFormat, dateFormat: dateStyle, timeFormat: timeStyle, utc } = this;
        const timeZone = utc ? 'UTC' : undefined;
        const formatOptions = customFormat || { hour12, dateStyle, timeStyle, timeZone };
        const formattedDate = __classPrivateFieldGet(this, _PfTimestamp_date, "f").toLocaleString(this.locale, formatOptions);
        return this.relative ? __classPrivateFieldGet(this, _PfTimestamp_instances, "m", _PfTimestamp_getTimeRelative).call(this, __classPrivateFieldGet(this, _PfTimestamp_date, "f")) : `${formattedDate}${this.displaySuffix ? ` ${this.displaySuffix}` : ''}`;
    }
    willUpdate() {
        if (!this.displaySuffix && this.utc) {
            this.displaySuffix = 'UTC';
        }
    }
    render() {
        return html `
      <time datetime="${this.isoString}">${this.time}</time>
    `;
    }
};
_PfTimestamp_date = new WeakMap(), _PfTimestamp_isoString = new WeakMap(), _PfTimestamp_instances = new WeakSet(), _PfTimestamp_getTimeRelative = function _PfTimestamp_getTimeRelative(date) {
    const ms = date.getTime() - Date.now();
    const tense = ms > 0 ? 'until' : 'ago';
    let str = 'just now';
    const s = Math.round(Math.abs(ms) / 1000);
    const min = Math.round(s / 60);
    const h = Math.round(min / 60);
    const d = Math.round(h / 24);
    const m = Math.round(d / 30);
    const y = Math.round(m / 12);
    if (m >= 18) {
        str = `${y} years`;
    }
    else if (m >= 12) {
        str = 'a year';
    }
    else if (d >= 45) {
        str = `${m} months`;
    }
    else if (d >= 30) {
        str = 'a month';
    }
    else if (h >= 36) {
        str = `${d} days`;
    }
    else if (h >= 24) {
        str = 'a day';
    }
    else if (min >= 90) {
        str = `${h} hours`;
    }
    else if (min >= 45) {
        str = 'an hour';
    }
    else if (s >= 90) {
        str = `${min} minutes`;
    }
    else if (s >= 45) {
        str = 'a minute';
    }
    else if (s >= 10) {
        str = `${s} seconds`;
    }
    return str !== 'just now' ? `${str} ${tense}` : str;
};
PfTimestamp.styles = [style];
__decorate([
    property({ reflect: true })
], PfTimestamp.prototype, "date", null);
__decorate([
    property({ reflect: true, attribute: 'date-format' })
], PfTimestamp.prototype, "dateFormat", void 0);
__decorate([
    property({ reflect: true, attribute: 'time-format' })
], PfTimestamp.prototype, "timeFormat", void 0);
__decorate([
    property({ attribute: false })
], PfTimestamp.prototype, "customFormat", void 0);
__decorate([
    property({ reflect: true, attribute: 'display-suffix' })
], PfTimestamp.prototype, "displaySuffix", void 0);
__decorate([
    property({ reflect: true })
], PfTimestamp.prototype, "locale", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfTimestamp.prototype, "relative", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfTimestamp.prototype, "utc", void 0);
__decorate([
    property({ reflect: true, attribute: 'hour-12', converter: BooleanStringConverter })
], PfTimestamp.prototype, "hour12", void 0);
PfTimestamp = __decorate([
    customElement('pf-timestamp')
], PfTimestamp);
export { PfTimestamp };
//# sourceMappingURL=pf-timestamp.js.map