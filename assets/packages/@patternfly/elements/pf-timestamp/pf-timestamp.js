import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { TimestampController, } from '@patternfly/pfe-core/controllers/timestamp-controller.js';
import { css } from "lit";
const style = css `:host{display:inline}time{text-decoration:var(--_timestamp-text-decoration,none);text-underline-offset:var(--_timestamp-text-underline-offset,initial)}`;
const BooleanStringConverter = {
    fromAttribute(value) {
        return !value || value === 'true';
    },
};
/**
 * A **timestamp** provides consistent formats for displaying date and time values.
 */
let PfTimestamp = class PfTimestamp extends LitElement {
    static { this.styles = [style]; }
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
    connectedCallback() {
        super.connectedCallback();
        if (this.hasAttribute('date')) {
            this.#timestamp.date = new Date(this.getAttribute('date'));
        }
    }
    willUpdate(changedProperties) {
        for (const [prop] of changedProperties) {
            this.#timestamp.set(prop, this[prop]);
        }
    }
    render() {
        return html `
      <time datetime="${this.#timestamp.isoString}">${this.#timestamp.time}</time>
    `;
    }
};
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
__decorate([
    property({ reflect: true })
], PfTimestamp.prototype, "date", null);
PfTimestamp = __decorate([
    customElement('pf-timestamp')
], PfTimestamp);
export { PfTimestamp };
//# sourceMappingURL=pf-timestamp.js.map