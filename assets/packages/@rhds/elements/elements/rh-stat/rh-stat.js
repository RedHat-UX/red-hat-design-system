var _RhStat_instances, _RhStat_screenSize, _RhStat_slots, _RhStat_mo, _RhStat_logger, _RhStat_updateIcons, _RhStat_onMutation;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { css } from "lit";
const styles = css `:host{display:block}div{width:100%;height:100%;display:flex;--_accent-color:var(--rh-color-text-brand-on-light, #ee0000);flex-direction:column;align-items:center;align-content:center;justify-content:space-around}.dark{--_accent-color:var(--rh-color-text-primary-on-dark, #ffffff)}::slotted(*),span{display:block;text-align:center}.hasIcon #icon{width:var(--rh-size-icon-04,40px);height:var(--rh-size-icon-04,40px);color:var(--rh-color-icon-secondary-on-light,#151515)}.hasIcon ::slotted([slot=icon]),.hasIcon pfe-icon[size=md]{order:1;display:block;color:currentcolor;fill:currentcolor;margin-bottom:16px;width:100%;height:100%;--pf-icon--size:100%}.dark #icon{color:var(--rh-color-icon-secondary-on-dark,#fff)}#title{order:1;color:var(--_accent-color);font-size:var(--rh-font-size-body-text-xl, 1.25rem);font-family:var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);font-weight:var(--rh-font-weight-regular,400);text-transform:uppercase}#statistic{order:2;color:var(--_accent-color);font-size:var(--rh-font-size-heading-lg, 2.25rem);font-weight:var(--rh-font-weight-regular,300);font-family:var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif)}#content{order:3;font-size:var(--rh-font-size-body-text-lg, 1.125rem);font-family:var(--rh-font-family-text, "RedHatText", "Overpass", Helvetica, Arial, sans-serif);margin-top:var(--rh-space-sm,6px)}#cta{order:4;font-size:var(--rh-font-size-body-text-lg, 1.125rem);font-family:var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);margin-top:var(--rh-space-lg,16px)}:not(.hasCta) #cta,:not(.hasIcon) #icon,:not(.hasStatistic) #statistic,:not(.hasTitle) #title{display:none}.isMobile #content{font-size:var(--rh-font-size-body-text-lg, 1.125rem)}.isMobile #statistic{font-size:32px}:host([size=large]) #statistic{font-size:var(--rh-font-size-heading-2xl, 3rem)}:host([top=statistic]) #statistic{order:1}:host([top=statistic]) #title{order:2}`;
import { ifDefined } from 'lit/directives/if-defined.js';
/**
 * A statistic showcases a data point or quick fact in a way that visually stands out.
 * It consists of a number/percentage and body text in its simplest form.
 * It can also include an icon, title, and a call to action.
 *
 * @slot icon - Optional icon
 * @slot title - Statistic title
 * @slot statistic - Statistic data
 * @slot cta - Call to action
 * @slot - Description of the stat
 *
 */
let RhStat = class RhStat extends LitElement {
    constructor() {
        super(...arguments);
        _RhStat_instances.add(this);
        this.top = 'default';
        this.size = 'default';
        this.isMobile = false;
        _RhStat_screenSize.set(this, new ScreenSizeController(this));
        _RhStat_slots.set(this, new SlotController(this, null, 'icon', 'title', 'statistic', 'cta'));
        _RhStat_mo.set(this, new MutationObserver(() => __classPrivateFieldGet(this, _RhStat_instances, "m", _RhStat_onMutation).call(this)));
        _RhStat_logger.set(this, new Logger(this));
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _RhStat_instances, "m", _RhStat_updateIcons).call(this);
        __classPrivateFieldGet(this, _RhStat_mo, "f").observe(this, { childList: true });
        __classPrivateFieldGet(this, _RhStat_instances, "m", _RhStat_onMutation).call(this);
    }
    render() {
        const hasIcon = __classPrivateFieldGet(this, _RhStat_slots, "f").hasSlotted('icon') || !!this.icon;
        const hasTitle = __classPrivateFieldGet(this, _RhStat_slots, "f").hasSlotted('title');
        const hasStatistic = __classPrivateFieldGet(this, _RhStat_slots, "f").hasSlotted('statistic');
        const hasCta = __classPrivateFieldGet(this, _RhStat_slots, "f").hasSlotted('cta');
        const isMobile = !__classPrivateFieldGet(this, _RhStat_screenSize, "f").matches.has('tabletPortrait');
        const { on = '' } = this;
        return html `
      <div class="${classMap({ isMobile, hasIcon, hasTitle, hasStatistic, hasCta, [on]: !!on })}">
        <span id="icon">
          <slot name="icon" @slotchange="${__classPrivateFieldGet(this, _RhStat_instances, "m", _RhStat_updateIcons)}">${!this.icon ? '' : /* TODO: replace with rh-icon */ html `
            <pf-icon size=${this.size === 'default' ? 'md' : 'lg'}
                     icon=${this.icon}
                     set="${ifDefined(this.getAttribute('icon-set') ?? undefined)}"></pf-icon>`}
          </slot>
        </span>
        <span id="title"><slot name="title"></slot></span>
        <span id="statistic"><slot name="statistic"></slot></span>
        <span id="content"><slot></slot></span>
        <span id="cta"><slot name="cta"></slot></span>
      </div>
    `;
    }
};
_RhStat_screenSize = new WeakMap(), _RhStat_slots = new WeakMap(), _RhStat_mo = new WeakMap(), _RhStat_logger = new WeakMap(), _RhStat_instances = new WeakSet(), _RhStat_updateIcons = function _RhStat_updateIcons() {
    this.querySelector('pf-icon[slot="icon"]')
        ?.setAttribute?.('size', this.size === 'default' ? 'md' : 'lg');
}, _RhStat_onMutation = function _RhStat_onMutation() {
    if (!__classPrivateFieldGet(this, _RhStat_slots, "f").hasSlotted('stat')) {
        __classPrivateFieldGet(this, _RhStat_logger, "f").warn('Must contain stat content');
    }
    if (!this.querySelectorAll(':not([slot])').length) {
        __classPrivateFieldGet(this, _RhStat_logger, "f").warn('Must contain description content');
    }
};
RhStat.version = '{{version}}';
RhStat.styles = [styles];
__decorate([
    colorContextConsumer()
], RhStat.prototype, "on", void 0);
__decorate([
    property({ reflect: true, type: String })
], RhStat.prototype, "icon", void 0);
__decorate([
    property({ reflect: true, type: String })
], RhStat.prototype, "top", void 0);
__decorate([
    property({ reflect: true, type: String })
], RhStat.prototype, "size", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'is-mobile' })
], RhStat.prototype, "isMobile", void 0);
RhStat = __decorate([
    customElement('rh-stat')
], RhStat);
export { RhStat };
//# sourceMappingURL=rh-stat.js.map