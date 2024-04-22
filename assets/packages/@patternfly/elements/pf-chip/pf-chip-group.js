var _PfChipGroup_instances, _PfChipGroup_chips, _PfChipGroup_buttons, _PfChipGroup_tabindex, _PfChipGroup_handleChipsChanged, _PfChipGroup_onChipRemoved, _PfChipGroup_onCloseClick, _PfChipGroup_onMoreClick, _PfChipGroup_onSlotchange, _PfChipGroup_updateChips, _PfChipGroup_updateOverflow;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { queryAssignedNodes } from 'lit/decorators/query-assigned-nodes.js';
import { classMap } from 'lit/directives/class-map.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { PfChip, PfChipRemoveEvent } from './pf-chip.js';
import { css } from "lit";
const styles = css `:host {\n  --pf-c-chip-group__list--MarginBottom: calc(var(--pf-global--spacer--xs, 0.25rem) * -1);\n  --pf-c-chip-group__list--MarginRight: calc(var(--pf-global--spacer--xs, 0.25rem) * -1);\n  --pf-c-chip-group--m-category--PaddingTop: var(--pf-global--spacer--xs, 0.25rem);\n  --pf-c-chip-group--m-category--PaddingRight: var(--pf-global--spacer--xs, 0.25rem);\n  --pf-c-chip-group--m-category--PaddingBottom: var(--pf-global--spacer--xs, 0.25rem);\n  --pf-c-chip-group--m-category--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-chip-group--m-category--BorderRadius: var(--pf-global--BorderRadius--sm, 3px);\n  --pf-c-chip-group--m-category--BackgroundColor: var(--pf-global--BackgroundColor--200, #f0f0f0);\n  --pf-c-chip-group__label--MarginRight: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-chip-group__label--FontSize: var(--pf-global--FontSize--sm, 0.875rem);\n  --pf-c-chip-group__label--MaxWidth: 18ch;\n  --pf-c-chip-group__close--MarginTop: calc(var(--pf-global--spacer--xs, 0.25rem) * -1);\n  --pf-c-chip-group__close--MarginBottom: calc(var(--pf-global--spacer--xs, 0.25rem) * -1);\n  --pf-c-chip-group__list-item--MarginRight: var(--pf-global--spacer--xs, 0.25rem);\n  --pf-c-chip-group__list-item--MarginBottom: var(--pf-global--spacer--xs, 0.25rem);\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  min-width: 0;\n  max-width: 100%;\n  color: var(--pf-global--Color--100, #151515);\n}\n\n[hidden],\n.empty,\n::slotted([overflow-hidden]) {\n  display: none !important;\n}\n\n#outer {\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n  align-items: baseline;\n  min-width: 0;\n  display: inline-flex;\n  column-gap: var(--pf-global--spacer--xs, 0.25rem);\n  align-items: center;\n  border-radius: var(--pf-global--BorderRadius--sm, 3px);\n  padding: 0 !important;\n}\n\n#outer.has-category {\n  padding: var(--pf-global--spacer--xs, 0.25rem) var(--pf-global--spacer--sm, 0.5rem) !important;\n  background-color: var(--pf-theme--color--surface--lighter, #f0f0f0);\n}\n\n#chips {\n  margin-right: var(--pf-c-chip-group__list--MarginRight);\n  margin-bottom: var(--pf-c-chip-group__list--MarginBottom);\n  font-family: var(--pf-global--FontFamily--sans-serif, "RedHatTextUpdated", "Overpass", overpass, helvetica, arial, sans-serif);\n  font-size: var(--pf-global--FontSize--sm, 14px);\n  font-weight: var(--pf-global--FontWeight--normal, 400);\n  line-height: 1.6;\n}\n\n#chips ::slotted(pf-chip) {\n  display: inline-flex;\n  min-width: 0;\n  margin-right: var(--pf-c-chip-group__list-item--MarginRight);\n  margin-bottom: var(--pf-c-chip-group__list-item--MarginBottom);\n}\n\n#close-button {\n  --pf-icon--size: 16px;\n  margin: var(--pf-c-chip__c-button--MarginTop)\n    var(--pf-c-chip__c-button--MarginRight)\n    var(--pf-c-chip__c-button--MarginBottom)\n    var(--pf-c-chip__c-button--MarginLeft);\n  padding: var(--pf-c-chip__c-button--PaddingTop)\n    var(--pf-c-chip__c-button--PaddingRight)\n    var(--pf-c-chip__c-button--PaddingBottom)\n    var(--pf-c-chip__c-button--PaddingLeft);\n  inset-block-start: 0.125em;\n}\n\nsvg {\n  width: var(--pf-global--FontSize--sm, 14px);\n  height: var(--pf-global--FontSize--sm, 14px);\n}\n\n.offscreen {\n  position: absolute;\n  left: -99999;\n  width: 0;\n  height: 0;\n  opacity: 0;\n  overflow: hidden;\n}\n\n`;
import shared from "./pf-chip-shared.css.js";
export class PfChipGroupExpandEvent extends Event {
    constructor() {
        super('expand', { bubbles: true, cancelable: true });
    }
}
export class PfChipGroupRemoveEvent extends Event {
    constructor() {
        super('remove', { bubbles: true, cancelable: true });
    }
}
/**
 * `${`
 * **WS** (_>= 0x_)
 * `remaining`
 * **WS** (_>= 0x_)
 * `}`
 */
const REMAINING_RE = /\$\{\s*remaining\s*\}/g;
/**
 * A **chip group** is a collection of chips that can be grouped by category and used to represent one or more values assigned to a single attribute. When value of numChips is exceeded, additional chips will be hidden using an overflow chip.
 *
 * @fires expand - Fires when chip group is expanded to show all chips
 * @fires remove - Fires when chip group is closed/removed
 *
 * @slot category-name
 *      Category name text for chip group category. If this prop is supplied chip group with have a label and category styling applied
 *
 * @slot
 *      Should be <Chip> elements.
 */
let PfChipGroup = class PfChipGroup extends LitElement {
    constructor() {
        super();
        _PfChipGroup_instances.add(this);
        /**
         * Accessible label for chip group that does not have a category name
         */
        this.accessibleLabel = '';
        /**
         * Accessible label for close button
         */
        this.accessibleCloseLabel = 'Close';
        /**
         * Customizeable "more" template string. Use variable "${remaining}" for overflow chip count.
         */
        this.collapsedText = '${remaining} more';
        /**
         * Customizable "show less" text string.
         */
        this.expandedText = 'show less';
        /**
         * Set number of chips to show before overflow
         */
        this.numChips = 3;
        /**
         * Flag indicating if overflow chips are visible
         */
        this.open = false;
        /**
         * Flag if chip group can be closed
         */
        this.closeable = false;
        _PfChipGroup_chips.set(this, []);
        _PfChipGroup_buttons.set(this, []);
        _PfChipGroup_tabindex.set(this, new RovingTabindexController(this, {
            getItems: () => __classPrivateFieldGet(this, _PfChipGroup_buttons, "f").filter(x => !x.hidden),
        }));
        this.addEventListener('remove', __classPrivateFieldGet(this, _PfChipGroup_instances, "m", _PfChipGroup_onChipRemoved));
    }
    render() {
        const empty = __classPrivateFieldGet(this, _PfChipGroup_chips, "f").length <= 0;
        return html `
      <div id="outer"
           class="${classMap({ 'has-category': this.hasCategory, empty })}"
           role="toolbar">
        <slot id="category"
              name="category-name"
              @slotchange="${__classPrivateFieldGet(this, _PfChipGroup_instances, "m", _PfChipGroup_onSlotchange)}">
          <span class="offscreen"
                ?hidden="${!this.accessibleLabel}">${this.accessibleLabel ?? ''}</span>
        </slot>
        <slot id="chips"
              @slotchange="${__classPrivateFieldGet(this, _PfChipGroup_instances, "m", _PfChipGroup_onSlotchange)}"
              @remove="${__classPrivateFieldGet(this, _PfChipGroup_instances, "m", _PfChipGroup_updateChips)}"
        ></slot>
        <pf-chip id="overflow"
                 aria-controls="chips"
                 overflow-chip
                 ?hidden="${this.remaining < 1}"
                 @click="${__classPrivateFieldGet(this, _PfChipGroup_instances, "m", _PfChipGroup_onMoreClick)}"
        >${this.remaining < 1 ? ''
            : this.open ? this.expandedText
                : this.collapsedText.replace(REMAINING_RE, this.remaining.toString())}</pf-chip>
        <pf-button id="close-button"
                   plain
                   icon="times-circle"
                   icon-set="fas"
                   label="${this.accessibleCloseLabel}"
                   aria-describedby="category"
                   ?hidden="${!this.closeable}"
                   @click="${__classPrivateFieldGet(this, _PfChipGroup_instances, "m", _PfChipGroup_onCloseClick)}"></pf-button>
      </div>
    `;
    }
    updated(changed) {
        if (changed.has('accessibleCloseLabel') ||
            changed.has('numChips') ||
            changed.has('closeable') ||
            changed.has('open')) {
            __classPrivateFieldGet(this, _PfChipGroup_instances, "m", _PfChipGroup_handleChipsChanged).call(this);
        }
    }
    /**
     * active chip that receives focus when group receives focus
     */
    get activeChip() {
        const button = __classPrivateFieldGet(this, _PfChipGroup_tabindex, "f").activeItem;
        const shadow = button?.getRootNode();
        return shadow?.host;
    }
    set activeChip(chip) {
        const button = chip.shadowRoot?.querySelector('button');
        __classPrivateFieldGet(this, _PfChipGroup_tabindex, "f").setActiveItem(button);
    }
    /**
     * whether or not group has a category
     */
    get hasCategory() {
        return (this._categorySlotted || []).length > 0;
    }
    get remaining() {
        return __classPrivateFieldGet(this, _PfChipGroup_chips, "f").length - this.numChips;
    }
    /**
     * Activates the specified chip and sets focus on it
     */
    focusOnChip(chip) {
        __classPrivateFieldGet(this, _PfChipGroup_tabindex, "f").setActiveItem(chip);
    }
};
_PfChipGroup_chips = new WeakMap();
_PfChipGroup_buttons = new WeakMap();
_PfChipGroup_tabindex = new WeakMap();
_PfChipGroup_instances = new WeakSet();
_PfChipGroup_handleChipsChanged = function _PfChipGroup_handleChipsChanged() {
    if (__classPrivateFieldGet(this, _PfChipGroup_chips, "f").length > 0) {
        const oldButtons = [...(__classPrivateFieldGet(this, _PfChipGroup_tabindex, "f").items || [])];
        const max = this.open ? __classPrivateFieldGet(this, _PfChipGroup_chips, "f").length : Math.min(__classPrivateFieldGet(this, _PfChipGroup_chips, "f").length, this.numChips);
        __classPrivateFieldSet(this, _PfChipGroup_buttons, [
            ...__classPrivateFieldGet(this, _PfChipGroup_chips, "f").slice(0, max),
            this._overflowChip,
            this._button,
        ].filter((x) => !!x), "f");
        if (oldButtons.length !== __classPrivateFieldGet(this, _PfChipGroup_buttons, "f").length ||
            !oldButtons.every((element, index) => element === __classPrivateFieldGet(this, _PfChipGroup_buttons, "f")[index])) {
            __classPrivateFieldGet(this, _PfChipGroup_tabindex, "f").updateItems();
        }
        __classPrivateFieldGet(this, _PfChipGroup_instances, "m", _PfChipGroup_updateOverflow).call(this);
    }
};
_PfChipGroup_onChipRemoved = 
/**
 * handles a chip's `chip-remove` event
 */
async function _PfChipGroup_onChipRemoved(event) {
    if (event instanceof PfChipRemoveEvent) {
        await __classPrivateFieldGet(this, _PfChipGroup_instances, "m", _PfChipGroup_updateChips).call(this);
        await this.updateComplete;
        __classPrivateFieldGet(this, _PfChipGroup_tabindex, "f").setActiveItem(__classPrivateFieldGet(this, _PfChipGroup_tabindex, "f").activeItem);
    }
};
_PfChipGroup_onCloseClick = function _PfChipGroup_onCloseClick() {
    this.dispatchEvent(new PfChipGroupRemoveEvent());
    this.remove();
};
_PfChipGroup_onMoreClick = 
/**
 * handles overflow chip's click event
 */
async function _PfChipGroup_onMoreClick(event) {
    event.stopPropagation();
    this.open = !this.open;
    await this.updateComplete;
    __classPrivateFieldGet(this, _PfChipGroup_instances, "m", _PfChipGroup_handleChipsChanged).call(this);
    if (this._overflowChip) {
        this.focusOnChip(this._overflowChip);
    }
    this.dispatchEvent(new PfChipGroupExpandEvent());
};
_PfChipGroup_onSlotchange = function _PfChipGroup_onSlotchange() {
    __classPrivateFieldGet(this, _PfChipGroup_instances, "m", _PfChipGroup_updateChips).call(this);
    this.requestUpdate();
};
_PfChipGroup_updateChips = 
/**
 * updates which chips variable
 */
async function _PfChipGroup_updateChips() {
    await this.updateComplete;
    __classPrivateFieldSet(this, _PfChipGroup_chips, [...this.querySelectorAll('pf-chip:not([slot]):not([overflow-chip])')], "f");
    this.requestUpdate();
    await this.updateComplete;
    __classPrivateFieldGet(this, _PfChipGroup_tabindex, "f").updateItems(__classPrivateFieldGet(this, _PfChipGroup_chips, "f"));
    __classPrivateFieldGet(this, _PfChipGroup_instances, "m", _PfChipGroup_handleChipsChanged).call(this);
    return __classPrivateFieldGet(this, _PfChipGroup_chips, "f");
};
_PfChipGroup_updateOverflow = function _PfChipGroup_updateOverflow() {
    __classPrivateFieldGet(this, _PfChipGroup_chips, "f").forEach((chip, i) => {
        chip.accessibleCloseLabel = this.accessibleCloseLabel;
        const overflowHidden = i >= this.numChips && !this.open;
        chip.hidden = overflowHidden;
    });
};
PfChipGroup.styles = [shared, styles];
PfChipGroup.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
__decorate([
    property({ attribute: 'accessible-label', type: String })
], PfChipGroup.prototype, "accessibleLabel", void 0);
__decorate([
    property({ attribute: 'accessible-close-label', type: String })
], PfChipGroup.prototype, "accessibleCloseLabel", void 0);
__decorate([
    property({ attribute: 'collapsed-text', type: String })
], PfChipGroup.prototype, "collapsedText", void 0);
__decorate([
    property({ attribute: 'expanded-text', type: String })
], PfChipGroup.prototype, "expandedText", void 0);
__decorate([
    property({ attribute: 'num-chips', type: Number })
], PfChipGroup.prototype, "numChips", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfChipGroup.prototype, "open", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfChipGroup.prototype, "closeable", void 0);
__decorate([
    query('#overflow')
], PfChipGroup.prototype, "_overflowChip", void 0);
__decorate([
    query('#close-button')
], PfChipGroup.prototype, "_button", void 0);
__decorate([
    queryAssignedNodes({ slot: 'category-name', flatten: true })
], PfChipGroup.prototype, "_categorySlotted", void 0);
PfChipGroup = __decorate([
    customElement('pf-chip-group')
], PfChipGroup);
export { PfChipGroup };
//# sourceMappingURL=pf-chip-group.js.map