var _RhTag_slots;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { themable } from '@rhds/elements/lib/themable.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `a{color:inherit;text-decoration:underline}#container{display:inline-flex;align-items:center;position:relative;padding:var(--rh-tag-padding-block-start,var(--rh-space-xs,4px)) var(--rh-tag-padding-inline-end,var(--rh-space-md,8px)) var(--rh-tag-padding-block-end,var(--rh-space-xs,4px)) var(--rh-tag-padding-inline-start,var(--rh-space-md,8px));gap:var(--rh-space-xs,4px);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-body-text-regular,400);font-size:var(--rh-font-size-body-text-sm,.875rem);line-height:var(--rh-line-height-body-text,1.5);background-color:var(--_fill-color,var(--rh-color-surface-lighter,#f2f2f2));border:0;border-radius:var(--rh-border-radius-pill,64px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;color:var(--_text-color,var(--rh-color-text-primary));border-width:0;--rh-icon-size:var(--rh-size-icon-01,16px);--_icon-color:currentcolor}#container:before{position:absolute;inset:0;pointer-events:none;content:"";border-radius:var(--rh-border-radius-pill,64px);border:var(--rh-border-width-sm,1px) solid var(--_border-color,var(--rh-color-border-subtle))}#container:before:hover{border-width:var(--rh-border-width-md,2px)}#container.compact{font-size:var(--rh-font-size-body-text-xs,.75rem);padding:var(--rh-tag-padding-block-start,0) var(--rh-tag-padding-inline-end,var(--rh-space-md,8px)) var(--rh-tag-padding-block-end,0) var(--rh-tag-padding-inline-start,var(--rh-space-md,8px))}#container.red{--_fill-color:light-dark(var(--rh-color-red-10,#fce3e3),var(--rh-color-red-70,#5f0000));--_border-color:light-dark(var(--rh-color-red-30,#f9a8a8),var(--rh-color-red-50,#e00));--_icon-color:light-dark(var(--rh-color-red-60,#a60000),var(--rh-color-red-30,#f9a8a8));--_text-color:light-dark(var(--rh-color-red-70,#5f0000),var(--rh-color-red-10,#fce3e3))}#container.red.outline{--_icon-color:light-dark(var(--rh-color-red-60,#a60000),var(--rh-color-red-20,#fbc5c5));--_text-color:light-dark(var(--rh-color-red-60,#a60000),var(--rh-color-red-30,#f9a8a8))}#container.red-orange{--_fill-color:light-dark(var(--rh-color-red-orange-10,#ffe3d9),var(--rh-color-red-orange-70,#731f00));--_border-color:light-dark(var(--rh-color-red-orange-30,#f89b78),var(--rh-color-red-orange-50,#f0561d));--_icon-color:light-dark(var(--rh-color-red-orange-60,#b1380b),var(--rh-color-red-orange-30,#f89b78));--_text-color:light-dark(var(--rh-color-red-orange-70,#731f00),var(--rh-color-red-orange-10,#ffe3d9))}#container.red-orange.outline{--_icon-color:light-dark(var(--rh-color-red-orange-60,#b1380b),var(--rh-color-red-orange-20,#fbbea8));--_text-color:light-dark(var(--rh-color-red-orange-60,#b1380b),var(--rh-color-red-orange-30,#f89b78))}#container.orange{--_fill-color:light-dark(var(--rh-color-orange-10,#ffe8cc),var(--rh-color-orange-70,#732e00));--_border-color:light-dark(var(--rh-color-orange-30,#f8ae54),var(--rh-color-orange-50,#ca6c0f));--_icon-color:light-dark(var(--rh-color-orange-60,#9e4a06),var(--rh-color-orange-30,#f8ae54));--_text-color:light-dark(var(--rh-color-orange-70,#732e00),var(--rh-color-orange-10,#ffe8cc))}#container.orange.outline{--_icon-color:light-dark(var(--rh-color-orange-60,#9e4a06),var(--rh-color-orange-20,#fccb8f));--_text-color:light-dark(var(--rh-color-orange-60,#9e4a06),var(--rh-color-orange-30,#f8ae54))}#container.yellow{--_fill-color:light-dark(var(--rh-color-yellow-10,#fff4cc),var(--rh-color-yellow-70,#73480b));--_border-color:light-dark(var(--rh-color-yellow-30,#ffcc17),var(--rh-color-yellow-50,#b98412));--_icon-color:light-dark(var(--rh-color-yellow-60,#96640f),var(--rh-color-yellow-30,#ffcc17));--_text-color:light-dark(var(--rh-color-yellow-70,#73480b),var(--rh-color-yellow-10,#fff4cc))}#container.yellow.outline{--_icon-color:light-dark(var(--rh-color-yellow-60,#96640f),var(--rh-color-yellow-20,#ffe072));--_text-color:light-dark(var(--rh-color-yellow-60,#96640f),var(--rh-color-yellow-30,#ffcc17))}#container.green{--_fill-color:light-dark(var(--rh-color-green-10,#e9f7df),var(--rh-color-green-70,#204d00));--_border-color:light-dark(var(--rh-color-green-30,#afdc8f),var(--rh-color-green-50,#63993d));--_icon-color:light-dark(var(--rh-color-green-60,#3d7317),var(--rh-color-green-30,#afdc8f));--_text-color:light-dark(var(--rh-color-green-70,#204d00),var(--rh-color-green-10,#e9f7df))}#container.green.outline{--_icon-color:light-dark(var(--rh-color-green-60,#3d7317),var(--rh-color-green-20,#d1f1bb));--_text-color:light-dark(var(--rh-color-green-60,#3d7317),var(--rh-color-green-30,#afdc8f))}#container.teal{--_fill-color:light-dark(var(--rh-color-teal-10,#daf2f2),var(--rh-color-teal-70,#004d4d));--_border-color:light-dark(var(--rh-color-teal-30,#9ad8d8),var(--rh-color-teal-50,#37a3a3));--_icon-color:light-dark(var(--rh-color-teal-60,#147878),var(--rh-color-teal-30,#9ad8d8));--_text-color:light-dark(var(--rh-color-teal-70,#004d4d),var(--rh-color-teal-10,#daf2f2))}#container.teal.outline{--_icon-color:light-dark(var(--rh-color-teal-60,#147878),var(--rh-color-teal-20,#b9e5e5));--_text-color:light-dark(var(--rh-color-teal-60,#147878),var(--rh-color-teal-30,#9ad8d8))}#container.blue{--_fill-color:light-dark(var(--rh-color-blue-10,#e0f0ff),var(--rh-color-blue-70,#036));--_border-color:light-dark(var(--rh-color-blue-30,#92c5f9),var(--rh-color-blue-50,#06c));--_icon-color:light-dark(var(--rh-color-blue-60,#004d99),var(--rh-color-blue-30,#92c5f9));--_text-color:light-dark(var(--rh-color-blue-70,#036),var(--rh-color-blue-10,#e0f0ff))}#container.blue.outline{--_icon-color:light-dark(var(--rh-color-blue-60,#004d99),var(--rh-color-blue-20,#b9dafc));--_text-color:light-dark(var(--rh-color-blue-60,#004d99),var(--rh-color-blue-30,#92c5f9))}#container.purple{--_fill-color:light-dark(var(--rh-color-purple-10,#ece6ff),var(--rh-color-purple-70,#21134d));--_border-color:light-dark(var(--rh-color-purple-30,#b6a6e9),var(--rh-color-purple-50,#5e40be));--_icon-color:light-dark(var(--rh-color-purple-60,#3d2785),var(--rh-color-purple-30,#b6a6e9));--_text-color:light-dark(var(--rh-color-purple-70,#21134d),var(--rh-color-purple-10,#ece6ff))}#container.purple.outline{--_icon-color:light-dark(var(--rh-color-purple-60,#3d2785),var(--rh-color-purple-20,#d0c5f4));--_text-color:light-dark(var(--rh-color-purple-60,#3d2785),var(--rh-color-purple-30,#b6a6e9))}#container.gray{--_fill-color:light-dark(var(--rh-color-gray-10,#f2f2f2),var(--rh-color-gray-70,#383838));--_border-color:light-dark(var(--rh-color-gray-30,#c7c7c7),var(--rh-color-gray-50,#707070));--_icon-color:light-dark(var(--rh-color-gray-60,#4d4d4d),var(--rh-color-gray-30,#c7c7c7));--_text-color:light-dark(var(--rh-color-gray-70,#383838),var(--rh-color-gray-10,#f2f2f2))}#container.gray.outline{--_icon-color:light-dark(var(--rh-color-gray-60,#4d4d4d),var(--rh-color-gray-20,#e0e0e0));--_text-color:light-dark(var(--rh-color-gray-60,#4d4d4d),var(--rh-color-gray-30,#c7c7c7))}#container.outline{--_fill-color:light-dark(var(--rh-color-white,#fff),var(--rh-color-gray-95,#151515));--_border-color:light-dark(var(--rh-color-gray-30,#c7c7c7),var(--rh-color-gray-50,#707070))}#container.desaturated{--_fill-color:#0000;--_border-color:var(--rh-color-text-primary);--_icon-color:var(--rh-color-text-primary);--_text-color:var(--rh-color-text-primary)}[part=icon]{display:none;pointer-events:none;font-size:.875rem;color:var(--_icon-color);--rh-icon-size:1em}.hasIcon [part=icon]{display:inline-flex;align-items:center}::slotted(svg){height:1em;aspect-ratio:1}`;
/**
 * A tag is a caption added to an element for better clarity and user convenience.
 * @summary  Highlights an element to add clarity or draw attention
 * @fires close - when a removable label's close button is clicked
 * @slot icon -  Contains the labels's icon, e.g. web-icon-alert-success.
 * @slot      -  Must contain the text for the label.
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
        const { icon, size, variant = 'filled', color = 'gray' } = this;
        const hasIcon = !!icon || __classPrivateFieldGet(this, _RhTag_slots, "f").hasSlotted('icon');
        return html `
      <span id="container"
            class="${classMap({
            hasIcon,
            compact: size === 'compact',
            teal: color === 'cyan' /* cyan deprecated */ || color === 'teal',
            [variant]: true,
            [color]: true
        })}">
        <slot name="icon" part="icon">
          <rh-icon ?hidden="${!icon}" icon="${ifDefined(icon)}" set="${this.iconSet}"></rh-icon>
        </slot>${!this.href ? html `
        <slot id="text"></slot>` : html `
        <a href="${this.href}">
          <slot id="text"></slot>
        </a>`}
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
], RhTag.prototype, "size", void 0);
__decorate([
    property()
], RhTag.prototype, "href", void 0);
__decorate([
    property()
], RhTag.prototype, "color", void 0);
RhTag = __decorate([
    customElement('rh-tag'),
    themable
], RhTag);
export { RhTag };
//# sourceMappingURL=rh-tag.js.map