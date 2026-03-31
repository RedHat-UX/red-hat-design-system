var _RhStat_instances, _RhStat_screenSize, _RhStat_slots, _RhStat_mo, _RhStat_logger, _RhStat_onMutation;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:block}div{width:100%;height:100%;display:flex;--_accent-color:light-dark(var(--rh-color-text-brand-on-light,#e00),var(--rh-color-text-primary-on-dark,#fff));flex-direction:column;align-items:center;place-content:center space-around}::slotted(*),span{display:block;text-align:center}.hasIcon #icon{color:var(--rh-color-icon-secondary)}.md{--rh-icon-size:var(--rh-size-icon-04,40px)}.lg{--rh-icon-size:var(--rh-size-icon-06,64px)}.md ::slotted([slot=icon]){width:var(--rh-size-icon-04,40px);aspect-ratio:1}.lg ::slotted([slot=icon]){width:var(--rh-size-icon-06,64px);aspect-ratio:1}.hasIcon ::slotted([slot=icon]),.hasIcon rh-icon{order:1;display:block;color:currentcolor;fill:currentcolor;margin-bottom:16px}#title{order:1;font-size:var(--rh-font-size-body-text-xl,1.25rem);font-weight:var(--rh-font-weight-body-text-regular,400)}#statistic,#title{color:var(--_accent-color);font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif)}#statistic{order:2;font-size:var(--rh-font-size-heading-lg,2.25rem);font-weight:var(--rh-font-weight-heading-regular,400)}#content{order:3;font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);margin-top:var(--rh-space-sm,6px)}#content,#cta{font-size:var(--rh-font-size-body-text-lg,1.125rem)}#cta{order:4;font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);margin-top:var(--rh-space-lg,16px)}div:not(.hasCta) #cta,div:not(.hasIcon) #icon,div:not(.hasStatistic) #statistic,div:not(.hasTitle) #title{display:none}.isMobile #content{font-size:var(--rh-font-size-body-text-lg,1.125rem)}.isMobile #statistic{font-size:32px}:host([size=large]) #statistic{font-size:var(--rh-font-size-heading-2xl,3rem)}:host([top=statistic]) #statistic{order:1}:host([top=statistic]) #title{order:2}`;
/**
 * A statistic showcases a data point or quick fact visually.
 * Elements must include a `statistic` slot and body text.
 * Icons, titles, and CTAs should be consistent when grouped.
 * Adapts color for WCAG contrast in light and dark contexts.
 * Only the CTA receives Tab focus; screen readers read DOM order.
 *
 * @summary Showcases a data point or quick fact visually
 *
 * @alias statistic
 */
let RhStat = class RhStat extends LitElement {
    constructor() {
        super(...arguments);
        _RhStat_instances.add(this);
        /**
         * The icon set from which to load the icon.
         * Only applies when the `icon` attribute is set.
         */
        this.iconSet = 'standard';
        /**
         * Controls the visual ordering of the title and
         * statistic slots. When set to `statistic`, the data
         * value appears above the title text.
         */
        this.top = 'default';
        /**
         * The size variant of the statistic. The `large` size
         * increases the data text font size and icon dimensions.
         */
        this.size = 'default';
        /**
         * Whether the statistic renders in a mobile layout with
         * reduced font sizes. Managed internally via
         * ScreenSizeController but can be set explicitly.
         */
        this.isMobile = false;
        /** Tracks viewport size to toggle mobile layout */
        _RhStat_screenSize.set(this, new ScreenSizeController(this));
        /** Manages slot presence detection for conditional rendering */
        _RhStat_slots.set(this, new SlotController(this, null, 'icon', 'title', 'statistic', 'cta'));
        /** Observes child list changes to validate required content */
        _RhStat_mo.set(this, new MutationObserver(() => __classPrivateFieldGet(this, _RhStat_instances, "m", _RhStat_onMutation).call(this)));
        /** Logs warnings when required slots are empty */
        _RhStat_logger.set(this, new Logger(this));
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _RhStat_mo, "f").observe(this, { childList: true });
        if (!isServer) {
            __classPrivateFieldGet(this, _RhStat_instances, "m", _RhStat_onMutation).call(this);
        }
    }
    willUpdate() {
        if (this.icon) {
            import('@rhds/elements/rh-icon/rh-icon.js');
        }
    }
    render() {
        const hasIcon = __classPrivateFieldGet(this, _RhStat_slots, "f").hasSlotted('icon') || !!this.icon;
        const hasTitle = __classPrivateFieldGet(this, _RhStat_slots, "f").hasSlotted('title');
        const hasStatistic = __classPrivateFieldGet(this, _RhStat_slots, "f").hasSlotted('statistic');
        const hasCta = __classPrivateFieldGet(this, _RhStat_slots, "f").hasSlotted('cta');
        const isMobile = this.isMobile || !__classPrivateFieldGet(this, _RhStat_screenSize, "f").matches.has('sm');
        const iconSize = this.size === 'default' ? 'md' : 'lg';
        return html `
      <div class="${classMap({ isMobile, hasIcon, hasTitle, hasStatistic, hasCta })}">
        <span id="icon" class="${classMap({ [iconSize]: !!iconSize })}">
          <!-- Optional decorative icon above the data value.
               Accepts an \`rh-icon\` or inline SVG. Decorative
               for screen readers; add aria-label to convey
               meaning not in text (WCAG 1.1.1). -->
          <slot name="icon">
            ${!this.icon ? '' : html `
              <rh-icon icon="${this.icon}" set="${this.iconSet}"></rh-icon>
            `}
          </slot>
        </span>
        <span id="title">
          <!-- Optional inline text title for context.
               Screen readers announce in DOM order;
               ARIA landmark not required. -->
          <slot name="title"></slot>
        </span>
        <span id="statistic">
          <!-- Required inline text data value (number or
               percentage). Screen readers read in DOM order;
               ensure value is meaningful without visual
               formatting (WCAG 1.3.1). -->
          <slot name="statistic"></slot>
        </span>
        <span id="content">
          <!-- Required block or inline body text describing
               the statistic. Gives screen reader users
               context for the data value. -->
          <slot></slot>
        </span>
        <span id="cta">
          <!-- Optional call to action (\`rh-cta\` element).
               Only focusable element; receives Tab focus
               and activates with Enter or Space. -->
          <slot name="cta"></slot>
        </span>
      </div>
    `;
    }
};
_RhStat_screenSize = new WeakMap();
_RhStat_slots = new WeakMap();
_RhStat_mo = new WeakMap();
_RhStat_logger = new WeakMap();
_RhStat_instances = new WeakSet();
_RhStat_onMutation = function _RhStat_onMutation() {
    if (!__classPrivateFieldGet(this, _RhStat_slots, "f").hasSlotted('stat')) {
        __classPrivateFieldGet(this, _RhStat_logger, "f").warn('Must contain stat content');
    }
    if (!this.querySelectorAll(':not([slot])').length) {
        __classPrivateFieldGet(this, _RhStat_logger, "f").warn('Must contain description content');
    }
};
RhStat.styles = [styles];
__decorate([
    property({ reflect: true })
], RhStat.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'icon-set' })
], RhStat.prototype, "iconSet", void 0);
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
    customElement('rh-stat'),
    themable
], RhStat);
export { RhStat };
//# sourceMappingURL=rh-stat.js.map