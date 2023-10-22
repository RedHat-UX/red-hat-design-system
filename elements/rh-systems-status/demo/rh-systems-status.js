import '@rhds/elements/rh-systems-status/rh-systems-status.js';
var _RhSystemsStatus_instances, _RhSystemsStatus_slots, _RhSystemsStatus_mo, _RhSystemsStatus_logger, _RhSystemsStatus_updateIcons, _RhSystemsStatus_onMutation;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
// import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { css } from "lit";
const styles = css `:host{display:block}div{width:100%;height:100%;display:flex;--_accent-color:var(--rh-color-text-brand-on-light, #ee0000);flex-direction:column;align-items:center;align-content:center;justify-content:space-around}.dark{--_accent-color:var(--rh-color-text-primary-on-dark, #ffffff)}::slotted(*),span{display:block;text-align:center}.hasIcon #icon{width:var(--rh-size-icon-04,40px);height:var(--rh-size-icon-04,40px);color:var(--rh-color-icon-secondary-on-light,#151515)}.hasIcon ::slotted([slot=icon]),.hasIcon pfe-icon[size=md]{order:1;display:block;color:currentcolor;fill:currentcolor;margin-bottom:16px;width:100%;height:100%;--pf-icon--size:100%}.dark #icon{color:var(--rh-color-icon-secondary-on-dark,#fff)}#title{order:1;color:var(--_accent-color);font-size:var(--rh-font-size-body-text-xl, 1.25rem);font-family:var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);font-weight:var(--rh-font-weight-regular,400);text-transform:uppercase}#statistic{order:2;color:var(--_accent-color);font-size:var(--rh-font-size-heading-lg, 2.25rem);font-weight:var(--rh-font-weight-regular,300);font-family:var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif)}#content{order:3;font-size:var(--rh-font-size-body-text-lg, 1.125rem);font-family:var(--rh-font-family-text, "RedHatText", "Overpass", Helvetica, Arial, sans-serif);margin-top:var(--rh-space-sm,6px)}#cta{order:4;font-size:var(--rh-font-size-body-text-lg, 1.125rem);font-family:var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);margin-top:var(--rh-space-lg,16px)}:not(.hasCta) #cta,:not(.hasIcon) #icon,:not(.hasStatistic) #statistic,:not(.hasTitle) #title{display:none}.isMobile #content{font-size:var(--rh-font-size-body-text-lg, 1.125rem)}.isMobile #statistic{font-size:32px}:host([size=large]) #statistic{font-size:var(--rh-font-size-heading-2xl, 3rem)}:host([top=statistic]) #statistic{order:1}:host([top=statistic]) #title{order:2}`;
import { ifDefined } from 'lit/directives/if-defined.js';
/**
 * A statistic showcases a data point or quick fact visually.
 *
 * @summary Displays a systems status component with an icon, and status description.
 *
 * @slot icon - Status icon
 * @slot desc - Status description
 * @cssprop --pf-icon--size
 *
 */
let RhSystemsStatus = class RhSystemsStatus extends LitElement {
    constructor() {
        super(...arguments);
        _RhSystemsStatus_instances.add(this);
        /** The size of the icon */
        this.size = 'default';
        _RhSystemsStatus_slots.set(this, new SlotController(this, null, 'icon', 'desc'));
        _RhSystemsStatus_mo.set(this, new MutationObserver(() => __classPrivateFieldGet(this, _RhSystemsStatus_instances, "m", _RhSystemsStatus_onMutation).call(this)));
        _RhSystemsStatus_logger.set(this, new Logger(this));
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _RhSystemsStatus_instances, "m", _RhSystemsStatus_updateIcons).call(this);
        __classPrivateFieldGet(this, _RhSystemsStatus_mo, "f").observe(this, { childList: true });
        __classPrivateFieldGet(this, _RhSystemsStatus_instances, "m", _RhSystemsStatus_onMutation).call(this);
    }
    render() {
        const hasIcon = __classPrivateFieldGet(this, _RhSystemsStatus_slots, "f").hasSlotted('icon') || !!this.icon;
        const hasDesc = __classPrivateFieldGet(this, _RhSystemsStatus_slots, "f").hasSlotted('desc');
        return html `
      <a href="#" class="${classMap({ hasIcon, hasDesc })}">
        <span id="icon">
          <slot name="icon" @slotchange="${__classPrivateFieldGet(this, _RhSystemsStatus_instances, "m", _RhSystemsStatus_updateIcons)}">${!this.icon ? '' : /* TODO: replace with rh-icon */ html `
            <pf-icon size=${this.size === 'default' ? 'md' : 'lg'}
                     icon=${this.icon}
                     set="${ifDefined(this.getAttribute('icon-set') ?? undefined)}"></pf-icon>`}
          </slot>
        </span>
        <span id="desc"><slot name="desc"></slot></span>
      </a>
    `;
    }
};
_RhSystemsStatus_logger = new WeakMap(), _RhSystemsStatus_instances = new WeakSet(), _RhSystemsStatus_updateIcons = function _RhSystemsStatus_updateIcons() {
    this.querySelector('pf-icon[slot="icon"]')
        ?.setAttribute?.('size', this.size === 'default' ? 'md' : 'lg');
}, _RhSystemsStatus_onMutation = function _RhSystemsStatus_onMutation() {
    if (!__classPrivateFieldGet(this, _RhSystemsStatus_slots, "f").hasSlotted('icon')) {
        __classPrivateFieldGet(this, _RhSystemsStatus_logger, "f").warn('Must contain systems status icon');
    }
    if (!this.querySelectorAll(':not([slot])').length) {
        __classPrivateFieldGet(this, _RhSystemsStatus_logger, "f").warn('Must contain systems status description content');
    }
};
RhSystemsStatus.version = '{{version}}';
RhSystemsStatus.styles = [styles];
__decorate([
    property({ reflect: true, type: String })
], RhSystemsStatus.prototype, "icon", void 0);
__decorate([
    property({ reflect: true, type: String })
], RhStat.prototype, "size", void 0);
RhSystemsStatus = __decorate([
    customElement('rh-systems-status')
], RhSystemsStatus);
export { RhSystemsStatus };
//# sourceMappingURL=rh-systems-status.js.map