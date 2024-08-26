var _RhTag_slots;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `:host{display:contents}#container{display:inline-flex;align-items:center;position:relative;padding:var(--rh-tag-padding-block-start,var(--rh-space-xs,4px)) var(--rh-tag-padding-inline-end,var(--rh-space-md,8px)) var(--rh-tag-padding-block-end,var(--rh-space-xs,4px)) var(--rh-tag-padding-inline-start,var(--rh-space-md,8px));font-family:var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);font-size:var(--rh-font-size-body-text-sm, .875rem);background-color:var(--_background-color,var(--rh-color-surface-lighter,#f2f2f2));border:0;border-radius:var(--rh-border-radius-pill,64px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;color:var(--_content-color,var(--rh-color-text-primary-on-light,#151515));border-width:0;--_icon-color:currentcolor}#container:before{position:absolute;inset:0;pointer-events:none;content:"";border-radius:var(--rh-border-radius-pill,64px);border:var(--rh-border-width-sm,1px) solid var(--_before-border-color,var(--rh-color-border-subtle-on-light,#c7c7c7))}#container.outline{--_background-color:var(--rh-color-surface-lightest, #ffffff);--_before-border-color:#d2d2d2}#container.dark,#container.outline.dark{--_content-color:var(--rh-color-text-primary-on-dark, #ffffff);--_background-color:transparent;--_before-border-color:var(--rh-color-text-primary-on-dark, #ffffff);--_icon-color:var(--rh-color-text-primary-on-dark, #ffffff)}.blue{--_content-color:var(--rh-color-blue-70, #003366);--_background-color:var(--rh-color-blue-10, #e0f0ff);--_before-border-color:var(--rh-color-blue-20, #b9dafc);--_icon-color:var(--rh-color-accent-base-on-light, #0066cc)}.blue.outline{--_content-color:var(--rh-color-blue-50, #0066cc)}.cyan{--_content-color:var(--rh-color-teal-70, #004d4d);--_background-color:var(--rh-color-teal-10, #daf2f2);--_before-border-color:var(--rh-color-teal-30, #9ad8d8);--_icon-color:var(--rh-color-teal-50, #37a3a3)}.cyan.outline{--_content-color:var(--rh-color-teal-60, #147878)}.green{--_content-color:var(--rh-color-green-70, #204d00);--_background-color:var(--rh-color-green-10, #e9f7df);--_before-border-color:var(--rh-color-green-30, #afdc8f);--_icon-color:var(--rh-color-green-60, #3d7317)}.green.outline{--_content-color:var(--rh-color-green-60, #3d7317)}.orange{--_content-color:var(--rh-color-orange-70, #732e00);--_background-color:var(--rh-color-orange-10, #ffe8cc);--_before-border-color:var(--rh-color-orange-30, #f8ae54);--_icon-color:var(--rh-color-orange-40, #f5921b)}.orange.outline{--_content-color:var(--rh-color-orange-60, #9e4a06)}.purple{--_content-color:var(--rh-color-purple-70, #21134d);--_background-color:var(--rh-color-purple-10, #ece6ff);--_before-border-color:var(--rh-color-purple-20, #d0c5f4);--_icon-color:var(--rh-color-purple-60, #3d2785)}.purple.outline{--_content-color:var(--rh-color-purple-60, #3d2785)}.red{--_content-color:var(--rh-color-red-70, #5f0000);--_background-color:var(--rh-color-red-10, #fce3e3);--_before-border-color:var(--rh-color-red-60, #a60000);--_icon-color:var(--rh-color-red-60, #a60000)}.red.outline{--_content-color:var(--rh-color-red-60, #a60000)}[part=icon]{display:none;pointer-events:none;font-size:.875rem;color:var(--_icon-color);margin-inline-end:var(--rh-tag-margin-inline-end,var(--rh-space-xs,4px));--rh-icon-size:1em}.hasIcon [part=icon]{display:inline-flex;align-items:center}::slotted(svg){height:1em;aspect-ratio:1}`;
import { ifDefined } from 'lit/directives/if-defined.js';
/**
 * A tag is a caption added to an element for better clarity and user convenience.
 * @summary  Highlights an element to add clarity or draw attention
 * @fires close - when a removable label's close button is clicked
 * @slot icon
 *       Contains the labels's icon, e.g. web-icon-alert-success.
 * @slot
 *       Must contain the text for the label.
 * @csspart icon - container for the label icon
 * @cssprop  {<length>} [--rh-tag-margin-inline-end=4px]
 *           The margin at the end of the direction parallel to the flow of the text.
 * @cssprop  {<length>} [--rh-tag-padding-block-start=4px]
 *           The padding at the start of the direction perpendicular to the flow of the text.
 * @cssprop  {<length>} [--rh-tag-padding-block-end=4px]
 *           The padding at the end of the direction perpendicular to the flow of the text.
 * @cssprop  {<length>} [--rh-tag-padding-inline-start=8px]
 *           The padding at the start of the direction parallel to the flow of the text.
 * @cssprop  {<length>} [--rh-tag-padding-inline-end=8px]
 *           The padding at the end of the direction parallel to the flow of the text.
 *
 */
let RhTag = class RhTag extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Icon set to display in the label
         */
        this.iconSet = 'ui';
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
          <rh-icon ?hidden="${!icon}" icon="${ifDefined(icon)}" set="${this.iconSet}"></rh-icon>
        </slot>
        <slot id="text"></slot>
      </span>
    `;
    }
};
_RhTag_slots = new WeakMap();
RhTag.styles = [styles];
__decorate([
    property({ reflect: true })
], RhTag.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'icon-set' })
], RhTag.prototype, "iconSet", void 0);
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