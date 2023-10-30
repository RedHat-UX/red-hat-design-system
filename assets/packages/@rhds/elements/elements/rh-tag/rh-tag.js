var _RhTag_slots;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import { css } from "lit";
const styles = css `:host{display:contents}#container{display:inline-flex;align-items:center;position:relative;padding:var(--rh-tag-padding-block-start,var(--rh-space-xs,4px)) var(--rh-tag-padding-inline-end,var(--rh-space-md,8px)) var(--rh-tag-padding-block-end,var(--rh-space-xs,4px)) var(--rh-tag-padding-inline-start,var(--rh-space-md,8px));font-size:var(--rh-font-size-body-text-sm, .875rem);background-color:var(--_background-color,var(--rh-color-surface-lighter,#f2f2f2));border:0;border-radius:var(--rh-border-radius-pill,64px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;color:var(--_content-color,var(--rh-color-text-primary-on-light,#151515));border-width:0;--_icon-color:currentcolor}#container:before{position:absolute;inset:0;pointer-events:none;content:"";border-radius:var(--rh-border-radius-pill,64px);border:var(--rh-border-width-sm,1px) solid var(--_before-border-color,var(--rh-color-border-subtle-on-light,#c7c7c7))}#container.outline{--_background-color:var(--rh-color-surface-lightest, #ffffff);--_before-border-color:#d2d2d2}#container.dark,#container.outline.dark{--_content-color:var(--rh-color-text-primary-on-dark, #ffffff);--_background-color:transparent;--_before-border-color:var(--rh-color-text-primary-on-dark, #ffffff);--_icon-color:var(--rh-color-text-primary-on-dark, #ffffff)}.blue{--_content-color:var(--rh-color-blue-600, #002952);--_background-color:var(--rh-color-blue-50, #e7f1fa);--_before-border-color:var(--rh-color-blue-100, #bee1f4);--_icon-color:var(--rh-color-accent-base-on-light, #0066cc)}.blue.outline{--_content-color:var(--rh-color-blue-400, #0066cc)}.cyan{--_content-color:var(--rh-color-cyan-500, #003737);--_background-color:var(--rh-color-cyan-50, #f2f9f9);--_before-border-color:var(--rh-color-cyan-100, #a2d9d9);--_icon-color:var(--rh-color-cyan-300, #009596)}.cyan.outline{--_content-color:var(--rh-color-cyan-400, #005f60)}.green{--_content-color:var(--rh-color-green-600, #1e4f18);--_background-color:var(--rh-color-green-50, #f3faf2);--_before-border-color:var(--rh-color-green-100, #bde5b8);--_icon-color:var(--rh-color-green-500, #3e8635)}.green.outline{--_content-color:var(--rh-color-green-500, #3e8635)}.orange{--_content-color:var(--rh-color-orange-700, #3b1f00);--_background-color:var(--rh-color-orange-50, #fff6ec);--_before-border-color:var(--rh-color-orange-100, #f4b678);--_icon-color:var(--rh-color-orange-300, #ec7a08)}.orange.outline{--_content-color:var(--rh-color-orange-500, #8f4700)}.purple{--_content-color:var(--rh-color-purple-700, #1f0066);--_background-color:var(--rh-color-purple-50, #f2f0fc);--_before-border-color:var(--rh-color-purple-100, #cbc1ff);--_icon-color:var(--rh-color-purple-500, #6753ac)}.purple.outline{--_content-color:var(--rh-color-purple-500, #6753ac)}.red{--_content-color:var(--rh-color-red-800, #5f0000);--_background-color:var(--rh-color-red-50, #faeae8);--_before-border-color:var(--rh-color-red-600, #be0000);--_icon-color:var(--rh-color-red-600, #be0000)}.red.outline{--_content-color:var(--rh-color-red-600, #be0000)}[part=icon]{display:none;pointer-events:none;font-size:.875rem;color:var(--_icon-color);margin-inline-end:var(--rh-tag-margin-inline-end,var(--rh-space-xs,4px));--pf-icon--size:0.875rem}.hasIcon [part=icon]{display:inline-flex;align-items:center}`;
/**
 * A tag is a caption added to an element for better clarity and user convenience.
 *
 * @summary  Highlights an element to add clarity or draw attention
 *
 * @fires close - when a removable label's close button is clicked
 *
 * @slot icon
 *       Contains the labels's icon, e.g. web-icon-alert-success.
 *
 * @slot
 *       Must contain the text for the label.
 *
 * @csspart icon - container for the label icon
 *
 * @cssprop  {<length>} --rh-tag-margin-inline-end
 *           The margin at the end of the direction parallel to the flow of the text.
 *           {@default 4px}
 * @cssprop  {<length>} --rh-tag-padding-block-start
 *           The padding at the start of the direction perpendicular to the flow of the text.
 *           {@default 4px}
 * @cssprop  {<length>} --rh-tag-padding-block-end
 *           The padding at the end of the direction perpendicular to the flow of the text.
 *           {@default 4px}
 * @cssprop  {<length>} --rh-tag-padding-inline-start
 *           The padding at the start of the direction parallel to the flow of the text.
 *           {@default 8px}
 * @cssprop  {<length>} --rh-tag-padding-inline-end
 *           The padding at the end of the direction parallel to the flow of the text.
 *           {@default 8px}
 * @cssprop --pf-icon--size
 *
 */
let RhTag = class RhTag extends LitElement {
    constructor() {
        super(...arguments);
        /** The variant of the label. */
        this.variant = 'filled';
        /** Represents the state of the anonymous and icon slots */
        _RhTag_slots.set(this, new SlotController(this, 'icon', null));
    }
    render() {
        const { variant, color, icon, on = '' } = this;
        const hasIcon = !!icon || __classPrivateFieldGet(this, _RhTag_slots, "f").hasSlotted('icon');
        return html `
      <span id="container"
            class="${classMap({
            hasIcon,
            [on]: !!on,
            [variant ?? '']: !!variant,
            [color ?? '']: !!color
        })}">
        <slot name="icon" part="icon">
          <pf-icon ?hidden="${!icon}"
                   .icon="${icon || undefined}"></pf-icon>
        </slot>
        <slot id="text"></slot>
      </span>
    `;
    }
};
_RhTag_slots = new WeakMap();
RhTag.styles = [styles];
__decorate([
    property()
], RhTag.prototype, "icon", void 0);
__decorate([
    property()
], RhTag.prototype, "variant", void 0);
__decorate([
    property()
], RhTag.prototype, "color", void 0);
__decorate([
    colorContextConsumer()
], RhTag.prototype, "on", void 0);
RhTag = __decorate([
    customElement('rh-tag')
], RhTag);
export { RhTag };
//# sourceMappingURL=rh-tag.js.map