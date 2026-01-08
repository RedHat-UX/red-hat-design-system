var _PfChipGroup_instances, _PfChipGroup_chips_get, _PfChipGroup_tabindex, _PfChipGroup_onCloseClick, _PfChipGroup_onMoreClick, _PfChipGroup_onSlotchange, _PfChipGroup_onRemove, _PfChipGroup_updateOverflow;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { queryAssignedNodes } from 'lit/decorators/query-assigned-nodes.js';
import { classMap } from 'lit/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { PfChip, PfChipRemoveEvent } from './pf-chip.js';
import { css } from "lit";
const styles = css `:host {
  /** MarginBottom for the chip group list */
  --pf-c-chip-group__list--MarginBottom: calc(var(--pf-global--spacer--xs, 0.25rem) * -1);
  /** MarginRight for the chip group list */
  --pf-c-chip-group__list--MarginRight: calc(var(--pf-global--spacer--xs, 0.25rem) * -1);
  /** PaddingTop for the chip group category */
  --pf-c-chip-group--m-category--PaddingTop: var(--pf-global--spacer--xs, 0.25rem);
  /** PaddingRight for the chip group category */
  --pf-c-chip-group--m-category--PaddingRight: var(--pf-global--spacer--xs, 0.25rem);
  /** PaddingBottom for the chip group category */
  --pf-c-chip-group--m-category--PaddingBottom: var(--pf-global--spacer--xs, 0.25rem);
  /** PaddingLeft for the chip group category */
  --pf-c-chip-group--m-category--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);
  /** BorderRadius for the chip group category */
  --pf-c-chip-group--m-category--BorderRadius: var(--pf-global--BorderRadius--sm, 3px);
  /** BackgroundColor for the chip group category */
  --pf-c-chip-group--m-category--BackgroundColor: var(--pf-global--BackgroundColor--200, #f0f0f0);
  /** MarginRight for the chip group label */
  --pf-c-chip-group__label--MarginRight: var(--pf-global--spacer--sm, 0.5rem);
  /** FontSize for the chip group label */
  --pf-c-chip-group__label--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
  /** MaxWidth for the chip group label */
  --pf-c-chip-group__label--MaxWidth: 18ch;
  /** MarginTop for the chip group close button */
  --pf-c-chip-group__close--MarginTop: calc(var(--pf-global--spacer--xs, 0.25rem) * -1);
  /** MarginBottom for the chip group close button */
  --pf-c-chip-group__close--MarginBottom: calc(var(--pf-global--spacer--xs, 0.25rem) * -1);
  /** MarginRight for chip group list items */
  --pf-c-chip-group__list-item--MarginRight: var(--pf-global--spacer--xs, 0.25rem);
  /** MarginBottom for chip group list items */
  --pf-c-chip-group__list-item--MarginBottom: var(--pf-global--spacer--xs, 0.25rem);
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  min-width: 0;
  max-width: 100%;
  color: var(--pf-global--Color--100, #151515);
}

[hidden],
.empty,
::slotted([overflow-hidden]) {
  display: none !important;
}

#outer {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: baseline;
  min-width: 0;
  display: inline-flex;
  column-gap: var(--pf-global--spacer--xs, 0.25rem);
  align-items: center;
  border-radius: var(--pf-global--BorderRadius--sm, 3px);
  padding: 0 !important;
}

#outer.has-category {
  padding: var(--pf-global--spacer--xs, 0.25rem) var(--pf-global--spacer--sm, 0.5rem) !important;
  background-color: var(--pf-theme--color--surface--lighter, #f0f0f0);
}

#chips {
  margin-right: var(--pf-c-chip-group__list--MarginRight);
  margin-bottom: var(--pf-c-chip-group__list--MarginBottom);
  font-family: var(--pf-global--FontFamily--sans-serif, "RedHatTextUpdated", "Overpass", overpass, helvetica, arial, sans-serif);
  font-size: var(--pf-global--FontSize--sm, 14px);
  font-weight: var(--pf-global--FontWeight--normal, 400);
  line-height: 1.6;
}

#chips ::slotted(pf-chip) {
  display: inline-flex;
  min-width: 0;
  margin-right: var(--pf-c-chip-group__list-item--MarginRight);
  margin-bottom: var(--pf-c-chip-group__list-item--MarginBottom);
}

#close-button {
  --pf-icon--size: 16px;
  margin: var(--pf-c-chip__c-button--MarginTop)
    var(--pf-c-chip__c-button--MarginRight)
    var(--pf-c-chip__c-button--MarginBottom)
    var(--pf-c-chip__c-button--MarginLeft);
  padding: var(--pf-c-chip__c-button--PaddingTop)
    var(--pf-c-chip__c-button--PaddingRight)
    var(--pf-c-chip__c-button--PaddingBottom)
    var(--pf-c-chip__c-button--PaddingLeft);
  inset-block-start: 0.125em;
}

svg {
  width: var(--pf-global--FontSize--sm, 14px);
  height: var(--pf-global--FontSize--sm, 14px);
}

.visually-hidden {
  border: 0;
  clip: rect(0, 0, 0, 0);
  block-size: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  inline-size: 1px;
}

`;
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
let PfChipGroup = class PfChipGroup extends LitElement {
    /**
     * active chip that receives focus when group receives focus
     */
    get activeChip() {
        const button = __classPrivateFieldGet(this, _PfChipGroup_tabindex, "f").items.at(__classPrivateFieldGet(this, _PfChipGroup_tabindex, "f").atFocusedItemIndex);
        const shadow = button?.getRootNode();
        return shadow?.host;
    }
    set activeChip(chip) {
        const button = chip.shadowRoot?.querySelector('button');
        if (button) {
            __classPrivateFieldGet(this, _PfChipGroup_tabindex, "f").atFocusedItemIndex = __classPrivateFieldGet(this, _PfChipGroup_tabindex, "f").items.indexOf(button);
        }
    }
    /**
     * whether or not group has a category
     */
    get hasCategory() {
        return (this._categorySlotted || []).length > 0;
    }
    get remaining() {
        return __classPrivateFieldGet(this, _PfChipGroup_instances, "a", _PfChipGroup_chips_get).length - this.numChips;
    }
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
        _PfChipGroup_tabindex.set(this, RovingTabindexController.of(this, {
            getItems: () => [
                ...Array.prototype.slice.call(__classPrivateFieldGet(this, _PfChipGroup_instances, "a", _PfChipGroup_chips_get), 0, this.open ? __classPrivateFieldGet(this, _PfChipGroup_instances, "a", _PfChipGroup_chips_get).length
                    : Math.min(__classPrivateFieldGet(this, _PfChipGroup_instances, "a", _PfChipGroup_chips_get).length, this.numChips)),
                this._overflowChip,
                this._button,
            ].filter(x => !!x),
        }));
        this.addEventListener('remove', __classPrivateFieldGet(this, _PfChipGroup_instances, "m", _PfChipGroup_onRemove));
    }
    render() {
        const empty = __classPrivateFieldGet(this, _PfChipGroup_instances, "a", _PfChipGroup_chips_get).length <= 0;
        return html `
      <div id="outer"
           class="${classMap({ 'has-category': this.hasCategory, empty })}"
           role="toolbar">
        <slot id="category"
              name="category-name"
              @slotchange="${__classPrivateFieldGet(this, _PfChipGroup_instances, "m", _PfChipGroup_onSlotchange)}">
          <span class="visually-hidden"
                ?hidden="${!this.accessibleLabel}">${this.accessibleLabel ?? ''}</span>
        </slot>
        <slot id="chips" @slotchange="${__classPrivateFieldGet(this, _PfChipGroup_instances, "m", _PfChipGroup_onSlotchange)}"></slot>
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
    /**
     * updates chips when they change
     */
    chipsChanged() {
        __classPrivateFieldGet(this, _PfChipGroup_instances, "m", _PfChipGroup_updateOverflow).call(this);
    }
    /**
     * Activates the specified chip and sets focus on it
     * @param chip pf-chip element
     */
    focusOnChip(chip) {
        __classPrivateFieldGet(this, _PfChipGroup_tabindex, "f").atFocusedItemIndex = __classPrivateFieldGet(this, _PfChipGroup_tabindex, "f").items.indexOf(chip);
    }
};
_PfChipGroup_tabindex = new WeakMap();
_PfChipGroup_instances = new WeakSet();
_PfChipGroup_chips_get = function _PfChipGroup_chips_get() {
    return this.querySelectorAll('pf-chip:not([slot]):not([overflow-chip])');
};
_PfChipGroup_onCloseClick = function _PfChipGroup_onCloseClick() {
    this.dispatchEvent(new PfChipGroupRemoveEvent());
};
_PfChipGroup_onMoreClick = 
/**
 * handles overflow chip's click event
 * @param event click event
 */
async function _PfChipGroup_onMoreClick(event) {
    event.stopPropagation();
    this.open = !this.open;
    await this.updateComplete;
    this.chipsChanged();
    if (this._overflowChip) {
        this.focusOnChip(this._overflowChip);
    }
    this.dispatchEvent(new PfChipGroupExpandEvent());
};
_PfChipGroup_onSlotchange = function _PfChipGroup_onSlotchange() {
    this.requestUpdate();
};
_PfChipGroup_onRemove = function _PfChipGroup_onRemove(event) {
    if (event instanceof PfChipRemoveEvent) {
        const index = __classPrivateFieldGet(this, _PfChipGroup_tabindex, "f").atFocusedItemIndex;
        if (event.chip) {
            __classPrivateFieldGet(this, _PfChipGroup_tabindex, "f").atFocusedItemIndex = index + 1;
        }
    }
    else if (event instanceof PfChipGroupRemoveEvent) {
        this.remove();
    }
};
_PfChipGroup_updateOverflow = function _PfChipGroup_updateOverflow() {
    __classPrivateFieldGet(this, _PfChipGroup_instances, "a", _PfChipGroup_chips_get).forEach((chip, i) => {
        chip.accessibleCloseLabel = this.accessibleCloseLabel;
        const overflowHidden = i >= this.numChips && !this.open;
        chip.hidden = overflowHidden;
    });
};
PfChipGroup.styles = [shared, styles];
PfChipGroup.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
PfChipGroup.version = "4.3.0";
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
__decorate([
    observes('accessibleCloseLabel'),
    observes('numChips'),
    observes('closeable'),
    observes('open')
], PfChipGroup.prototype, "chipsChanged", null);
PfChipGroup = __decorate([
    customElement('pf-chip-group')
], PfChipGroup);
export { PfChipGroup };
//# sourceMappingURL=pf-chip-group.js.map