var _PfTimestamp_timestamp;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { TimestampController, } from '@patternfly/pfe-core/controllers/timestamp-controller.js';
import { css } from "lit";
const style = css `:host {\n  display: inline;\n}\n\ntime {\n  text-decoration: var(--_timestamp-text-decoration, none);\n  text-underline-offset: var(--_timestamp-text-underline-offset, initial);\n}\n`;
const BooleanStringConverter = {
    fromAttribute(value) {
        return !value || value === 'true';
    },
};
let PfTimestamp = class PfTimestamp extends LitElement {
    constructor() {
        super(...arguments);
        _PfTimestamp_timestamp.set(this, new TimestampController(this));
    }
    get date() {
        return __classPrivateFieldGet(this, _PfTimestamp_timestamp, "f").localeString;
    }
    set date(string) {
        __classPrivateFieldGet(this, _PfTimestamp_timestamp, "f").date = new Date(string);
    }
    get isoString() {
        return __classPrivateFieldGet(this, _PfTimestamp_timestamp, "f").isoString;
    }
    get time() {
        return __classPrivateFieldGet(this, _PfTimestamp_timestamp, "f").time;
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.hasAttribute('date')) {
            __classPrivateFieldGet(this, _PfTimestamp_timestamp, "f").date = new Date(this.getAttribute('date'));
        }
    }
    willUpdate(changedProperties) {
        for (const [prop] of changedProperties) {
            __classPrivateFieldGet(this, _PfTimestamp_timestamp, "f").set(prop, this[prop]);
        }
    }
    render() {
        return html `
      <time datetime="${__classPrivateFieldGet(this, _PfTimestamp_timestamp, "f").isoString}">${__classPrivateFieldGet(this, _PfTimestamp_timestamp, "f").time}</time>
    `;
    }
};
_PfTimestamp_timestamp = new WeakMap();
PfTimestamp.styles = [style];
PfTimestamp.version = "4.1.0";
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
    property({
        reflect: true,
        attribute: 'hour-12',
        converter: BooleanStringConverter,
    })
], PfTimestamp.prototype, "hour12", void 0);
__decorate([
    property({ reflect: true })
], PfTimestamp.prototype, "date", null);
PfTimestamp = __decorate([
    customElement('pf-timestamp')
], PfTimestamp);
export { PfTimestamp };
//# sourceMappingURL=pf-timestamp.js.map