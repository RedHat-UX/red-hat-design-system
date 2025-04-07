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
 * A timestamp provides consistent formats for displaying date and time values.
 *
 * @summary Displays a line of text with date and time values
 */
let RhTimestamp = class RhTimestamp extends LitElement {
    constructor() {
        super(...arguments);
        _RhTimestamp_timestamp.set(this, new TimestampController(this));
    }
    /**
     * A string value representing a date
     */
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