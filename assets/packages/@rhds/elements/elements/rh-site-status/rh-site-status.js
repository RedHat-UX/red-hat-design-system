var _RhSiteStatus_instances, _a, _RhSiteStatus_status, _RhSiteStatus_component, _RhSiteStatus_loading, _RhSiteStatus_logger, _RhSiteStatus_domain, _RhSiteStatus_icon_get, _RhSiteStatus_text_get, _RhSiteStatus_fetch;
var RhSiteStatus_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, svg } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import '../rh-spinner/rh-spinner.js';
import { css } from "lit";
const styles = css `:host{display:inline-block}#container{display:inline-flex;padding:var(--rh-space-lg,16px);background:var(--rh-color-surface-light,#e0e0e0);border-radius:var(--rh-border-radius-default,3px);min-width:150px}#container.dark{background:var(--rh-color-surface-dark,#383838)}a{display:inline-flex;font-size:var(--rh-font-size-body-text-sm, .875rem);text-decoration:none;align-items:center;gap:var(--rh-space-md,8px);color:var(--rh-color-text-primary-on-light,#151515);text-transform:lowercase}.dark a{color:var(--rh-color-text-primary-on-dark,#fff)}span:first-letter{text-transform:uppercase}a:focus{outline:var(--rh-border-width-md,2px) solid var(--rh-color-border-interactive-on-light,#0066cc);border-radius:var(--rh-border-radius-default,3px)}a:is(:hover,:focus){text-decoration:underline}.dark a:focus{outline-color:var(--rh-color-border-interactive-on-dark,#92c5f9)}`;
const STATUS_ICONS = Object.freeze({
    'ok': svg `
    <path d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z" fill="#63993D"/>
    <path d="M6.89999 12.1C6.69999 12.1 6.49999 12 6.39999 11.9L3.49999 9.00001C3.19999 8.70001 3.19999 8.30001 3.49999 8.00001C3.79999 7.70001 4.19999 7.70001 4.49999 8.00001L6.89999 10.4L11.5 5.80001C11.8 5.50001 12.2 5.50001 12.5 5.80001C12.8 6.10001 12.8 6.50001 12.5 6.80001L7.39999 11.9C7.19999 12 6.99999 12.1 6.89999 12.1Z" fill="white"/>
  `,
    'warn': svg `
    <path d="M0 14.6H16L8 0.400024L0 14.6Z" fill="#F5921B"/>
    <path d="M8.00005 9.80007C7.60005 9.80007 7.30005 9.50007 7.30005 9.10007V5.90007C7.30005 5.50007 7.60005 5.20007 8.00005 5.20007C8.40005 5.20007 8.70005 5.50007 8.70005 5.90007V9.20007C8.70005 9.50007 8.40005 9.80007 8.00005 9.80007ZM8.20005 12.7001C8.30005 12.7001 8.30005 12.7001 8.40005 12.7001C8.40005 12.7001 8.50005 12.7001 8.50005 12.6001L8.60005 12.5001C8.80005 12.3001 8.80005 12.1001 8.80005 11.9001C8.80005 11.7001 8.70005 11.5001 8.60005 11.3001L8.50005 11.2001L8.40005 11.1001C8.30005 11.1001 8.30005 11.1001 8.20005 11.1001C7.90005 11.0001 7.70005 11.1001 7.50005 11.3001C7.30005 11.5001 7.30005 11.7001 7.30005 11.9001C7.30005 12.1001 7.40005 12.3001 7.50005 12.5001C7.70005 12.7001 7.90005 12.7001 8.10005 12.7001C8.10005 12.7001 8.10005 12.7001 8.20005 12.7001Z" fill="white"/>
  `,
    'danger': svg `
    <path d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z" fill="#F4784A"/>
    <path d="M8.0001 9.80005C7.6001 9.80005 7.3001 9.50005 7.3001 9.10005V4.50005C7.3001 4.10005 7.6001 3.80005 8.0001 3.80005C8.4001 3.80005 8.7001 4.10005 8.7001 4.50005V9.10005C8.7001 9.50005 8.4001 9.80005 8.0001 9.80005ZM8.2001 12.8C8.3001 12.8 8.3001 12.8 8.4001 12.7C8.5001 12.7 8.5001 12.7 8.5001 12.6C8.6001 12.6 8.6001 12.5 8.6001 12.5C8.8001 12.3 8.9001 12.1 8.9001 11.9C8.9001 11.7 8.8001 11.5 8.6001 11.3L8.5001 11.2L8.4001 11.1C8.3001 11.1 8.3001 11.1 8.2001 11.1C7.9001 11 7.6001 11.1 7.4001 11.3L7.3001 11.4L7.2001 11.5C7.2001 11.6 7.2001 11.6 7.1001 11.7C7.1001 11.8 7.1001 11.8 7.1001 11.9C7.1001 12.1 7.2001 12.3 7.4001 12.5C7.6001 12.7 7.8001 12.8 8.0001 12.8C8.1001 12.8 8.1001 12.8 8.2001 12.8Z" fill="white"/>
  `,
});
// map statuspage.io's text to our text; at least one of their status
// strings is too long for the space we have
const TEXT_MAP = Object.freeze({
    'Partially Degraded Service': 'Partial service',
});
// map statuspage.io's statuses to icon map keys
const STATUS_MAP = Object.freeze({
    'none': 'ok',
    'operational': 'ok',
    'degraded_performance': 'warn',
    'partial_outage': 'warn',
    'major_outage': 'warn',
    'major': 'warn',
    'minor': 'warn',
    'critical': 'danger',
});
const getSummaryOrThrow = async (response) => {
    if (!response.ok) {
        throw new Error(`${response.statusText}`);
    }
    else {
        const json = await response.json();
        if (!isStatusPageResponse(json)) {
            throw new Error('invalid status data');
        }
        else {
            return json;
        }
    }
};
const byISO8601Property = (key) => (a, b) => a[key] > b[key] ? 1
    : a[key] < b[key] ? -1
        : 0;
const isStatusPageResponse = (data) => {
    return (typeof data === 'object'
        && data !== null
        && 'page' in data
        && 'status' in data
        && 'components' in data
        && 'incidents' in data
        && typeof data.status === 'object'
        && data.status !== null
        && 'description' in data.status
        && 'indicator' in data.status
        && Array.isArray(data.components));
};
/**
 * Website status communicates the operational status of a website or domain using a status icon and
 * link. It is usually located in the Footer component.
 * @summary Communicates operational status of a website or domain
 * @slot loading-text - Text to display while loading the status defaults to "Loading"
 */
let RhSiteStatus = RhSiteStatus_1 = _a = class RhSiteStatus extends LitElement {
    constructor() {
        super(...arguments);
        _RhSiteStatus_instances.add(this);
        _RhSiteStatus_status.set(this, null);
        _RhSiteStatus_component.set(this, null);
        _RhSiteStatus_loading.set(this, true);
        _RhSiteStatus_logger.set(this, new Logger(this));
        _RhSiteStatus_domain.set(this, location.hostname);
    }
    ;
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _RhSiteStatus_instances, "m", _RhSiteStatus_fetch).call(this);
    }
    render() {
        const { on = '' } = this;
        return html `
      <div id="container" class="${classMap({ [on]: !!on })}">
        <a href="https://status.redhat.com/"
           aria-busy="${String(__classPrivateFieldGet(this, _RhSiteStatus_loading, "f"))}"
           aria-live="polite">${__classPrivateFieldGet(this, _RhSiteStatus_loading, "f") ? html `
          <rh-spinner size="sm"></rh-spinner>
          <span><slot name="loading-text">Loading</slot></span>` : html `
          <svg xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="17"
               viewbox="0 0 16 17"
               fill="none">${__classPrivateFieldGet(this, _RhSiteStatus_instances, "a", _RhSiteStatus_icon_get)}</svg>
          <span>${__classPrivateFieldGet(this, _RhSiteStatus_instances, "a", _RhSiteStatus_text_get)}</span>`}
        </a>
      </div>
    `;
    }
};
_RhSiteStatus_status = new WeakMap();
_RhSiteStatus_component = new WeakMap();
_RhSiteStatus_loading = new WeakMap();
_RhSiteStatus_logger = new WeakMap();
_RhSiteStatus_domain = new WeakMap();
_RhSiteStatus_instances = new WeakSet();
_RhSiteStatus_icon_get = function _RhSiteStatus_icon_get() {
    const status = __classPrivateFieldGet(this, _RhSiteStatus_component, "f")?.status ?? __classPrivateFieldGet(this, _RhSiteStatus_status, "f")?.indicator;
    if (status) {
        return STATUS_ICONS[STATUS_MAP[status]];
    }
    else {
        return STATUS_ICONS.danger;
    }
};
_RhSiteStatus_text_get = function _RhSiteStatus_text_get() {
    if (__classPrivateFieldGet(this, _RhSiteStatus_component, "f")) {
        return __classPrivateFieldGet(this, _RhSiteStatus_component, "f").description ?? __classPrivateFieldGet(this, _RhSiteStatus_component, "f").status;
    }
    else if (__classPrivateFieldGet(this, _RhSiteStatus_status, "f")) {
        const statusText = __classPrivateFieldGet(this, _RhSiteStatus_status, "f").description;
        return TEXT_MAP[statusText] ?? statusText;
    }
    else {
        return 'Error loading status';
    }
};
_RhSiteStatus_fetch = async function _RhSiteStatus_fetch() {
    try {
        const { dataURI, fetchOptions } = RhSiteStatus_1;
        const data = await fetch(dataURI, fetchOptions)
            .then(getSummaryOrThrow);
        const [component] = data.components
            .filter(x => x.name === __classPrivateFieldGet(this, _RhSiteStatus_domain, "f"))
            .sort(byISO8601Property('updated_at'));
        __classPrivateFieldSet(this, _RhSiteStatus_component, component ?? null, "f");
        __classPrivateFieldSet(this, _RhSiteStatus_status, data.status, "f");
    }
    catch (error) {
        __classPrivateFieldGet(this, _RhSiteStatus_logger, "f").warn('Error loading site status:', error);
    }
    finally {
        __classPrivateFieldSet(this, _RhSiteStatus_loading, false, "f");
        this.requestUpdate();
    }
};
RhSiteStatus.styles = [styles];
RhSiteStatus.dataURI = 'https://status.redhat.com/index.json';
RhSiteStatus.fetchOptions = {
    mode: 'cors',
    cache: 'no-cache',
    headers: {
        Accept: 'application/json',
    },
};
__decorate([
    colorContextConsumer()
], RhSiteStatus.prototype, "on", void 0);
RhSiteStatus = RhSiteStatus_1 = __decorate([
    customElement('rh-site-status')
], RhSiteStatus);
export { RhSiteStatus };
//# sourceMappingURL=rh-site-status.js.map