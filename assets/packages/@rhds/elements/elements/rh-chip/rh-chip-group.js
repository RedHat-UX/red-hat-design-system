var _RhChipGroup_instances, _RhChipGroup_uncheckAllChips, _RhChipGroup_getChipElements;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { provide } from '@lit/context';
import { rhChipGroupSizeCtx } from './context.js';
import { query } from 'lit/decorators/query.js';
import { RhChip, ChipChangeEvent } from './rh-chip.js';
import { css } from "lit";
const styles = css `:host{--_spacer:var(--rh-space-lg,16px);display:block}fieldset{align-items:center;border:0;display:flex;flex-wrap:wrap;margin:0;padding:0}legend{float:left;font-size:var(--rh-font-size-body-text-md,1rem);margin-inline-end:var(--rh-space-md,8px)}.btn-link,legend{font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif)}.btn-link{background-color:initial;border:0;border-radius:var(--rh-border-radius-pill,64px);color:var(--rh-color-interactive-primary-default);cursor:pointer;font-size:var(--rh-font-size-body-text-sm,.875rem);line-height:var(--rh-line-height-body-text,1.5);margin-block-start:1px;outline:var(--rh-border-width-sm,1px) solid #0000;padding:var(--rh-space-xs,4px) var(--rh-space-md,8px);position:relative}.btn-link:focus,.btn-link:hover{color:var(--rh-color-interactive-primary-hover);outline-color:var(--rh-color-border-subtle)}.btn-link:focus{outline-offset:var(--rh-border-width-md,2px)}.btn-link:focus:after{content:"";border-radius:var(--rh-border-radius-default,3px);inset:var(--rh-length-4xs,1px) var(--rh-length-md,8px);outline:var(--rh-border-width-md,2px) solid var(--rh-color-border-interactive);position:absolute}.btn-link,legend{margin-block-end:var(--_spacer)}:host([size=sm]) legend{font-size:var(--rh-font-size-body-text-sm,.875rem)}:host([size=sm]) .btn-link{font-size:var(--rh-font-size-body-text-xs,.75rem)}`;
/**
 * Chip Group
 * @slot - Place individual `rh-chips` inside `rh-chip-group`
 * @slot accessible-label
 *       An accessible label for the chip group.
 *       Content for this slot is put into the `<legend>` element.
 *       Also available as an attribute.
 * @slot clear-all
 *       Customized text for the "Clear all" button
 */
let RhChipGroup = class RhChipGroup extends LitElement {
    constructor() {
        super(...arguments);
        _RhChipGroup_instances.add(this);
    }
    firstUpdated() {
        if (this.size === 'sm' && !this.hasUpdated) {
            this.size = undefined;
            this.size = 'sm';
        }
    }
    render() {
        const label = this.accessibleLabel ? this.accessibleLabel : 'Filter by:';
        return html `
      <fieldset>
        <legend part="legend">
          <slot name="accessible-label">${label}</slot>
        </legend>
        <slot></slot>
        <button class="btn-link" type="button" @click="${__classPrivateFieldGet(this, _RhChipGroup_instances, "m", _RhChipGroup_uncheckAllChips)}">
          <slot name="clear-all">Clear all</slot>
        </button>
      </fieldset>
    `;
    }
};
_RhChipGroup_instances = new WeakSet();
_RhChipGroup_uncheckAllChips = function _RhChipGroup_uncheckAllChips() {
    const chips = __classPrivateFieldGet(this, _RhChipGroup_instances, "m", _RhChipGroup_getChipElements).call(this);
    const checkedChips = chips.filter(chip => chip.checked && !chip.disabled);
    checkedChips.forEach(chip => {
        chip.checked = false;
        chip.dispatchEvent(new ChipChangeEvent(false));
    });
};
_RhChipGroup_getChipElements = function _RhChipGroup_getChipElements() {
    if (!this.defaultSlot) {
        return [];
    }
    const assignedElements = this.defaultSlot.assignedElements();
    return assignedElements.filter((element) => element instanceof RhChip);
};
RhChipGroup.styles = [styles];
__decorate([
    property({ reflect: true }),
    provide({ context: rhChipGroupSizeCtx })
], RhChipGroup.prototype, "size", void 0);
__decorate([
    property({ attribute: 'accessible-label' })
], RhChipGroup.prototype, "accessibleLabel", void 0);
__decorate([
    query('slot:not([name])')
], RhChipGroup.prototype, "defaultSlot", void 0);
RhChipGroup = __decorate([
    customElement('rh-chip-group')
], RhChipGroup);
export { RhChipGroup };
//# sourceMappingURL=rh-chip-group.js.map