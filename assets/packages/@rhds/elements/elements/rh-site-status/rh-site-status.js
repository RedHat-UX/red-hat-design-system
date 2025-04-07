var _RhSiteStatus_instances, _a, _RhSiteStatus_status, _RhSiteStatus_component, _RhSiteStatus_loading, _RhSiteStatus_logger, _RhSiteStatus_domain, _RhSiteStatus_icon_get, _RhSiteStatus_text_get, _RhSiteStatus_fetch;
var RhSiteStatus_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-spinner/rh-spinner.js';
// eagerly load these to avoid icon FOUC
import '@rhds/icons/ui/check-circle.js';
import '@rhds/icons/ui/check-circle-fill.js';
import '@rhds/icons/ui/warning-fill.js';
import '@rhds/icons/ui/warning.js';
import '@rhds/icons/ui/error.js';
import '@rhds/icons/ui/error-fill.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:inline-block}#container{padding:var(--rh-space-lg,16px);background:light-dark(var(--rh-color-surface-light,#e0e0e0),var(--rh-color-surface-dark,#383838));border-radius:var(--rh-border-radius-default,3px);min-width:150px}#container,a{display:inline-flex}a{font-size:var(--rh-font-size-body-text-sm,.875rem);text-decoration:none;align-items:center;gap:var(--rh-space-md,8px);color:var(--rh-color-text-primary);text-transform:lowercase}span:first-letter{text-transform:uppercase}a:focus{outline:var(--rh-border-width-md,2px) solid var(--rh-color-border-interactive);border-radius:var(--rh-border-radius-default,3px)}a:is(:hover,:focus){text-decoration:underline}rh-icon{width:var(--rh-size-icon-01,16px);height:var(--rh-size-icon-01,16px);color:var(--rh-color-white,#fff)}rh-icon.success{color:var(--rh-color-status-success)}rh-icon.warning{color:var(--rh-color-status-warning)}rh-icon.danger{color:var(--rh-color-status-danger)}`;
// map statuspage.io's text to our text; at least one of their status
// strings is too long for the space we have
const TEXT_MAP = Object.freeze({
    'Partially Degraded Service': 'Partial service',
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
 * @slot - loading-text - Text to display while loading the status defaults to "Loading"
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
        const loading = __classPrivateFieldGet(this, _RhSiteStatus_loading, "f");
        const { icon, status } = __classPrivateFieldGet(this, _RhSiteStatus_instances, "a", _RhSiteStatus_icon_get);
        return html `
      <div id="container" class="${classMap({ loading })}">
        <a href="https://status.redhat.com/"
           aria-busy="${String(__classPrivateFieldGet(this, _RhSiteStatus_loading, "f"))}"
           aria-live="polite">${__classPrivateFieldGet(this, _RhSiteStatus_loading, "f") ? html `
          <rh-spinner size="sm"></rh-spinner>
          <span><slot name="loading-text">Loading</slot></span>` : html `
          <rh-icon loading="eager" set="ui" icon="${icon}" class="${status}"></rh-icon>
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
    switch (status) {
        case 'none':
        case 'operational':
            return { icon: 'check-circle-fill', status: 'success' };
        case 'degraded_performance':
        case 'partial_outage':
        case 'major_outage':
        case 'major':
        case 'minor':
            return { icon: 'warning-fill', status: 'warning' };
        default:
            return { icon: 'error-fill', status: 'danger' };
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
RhSiteStatus = RhSiteStatus_1 = __decorate([
    customElement('rh-site-status'),
    themable
], RhSiteStatus);
export { RhSiteStatus };
//# sourceMappingURL=rh-site-status.js.map