var _RhOptionGroup_instances, _RhOptionGroup_internals, _RhOptionGroup_onDefaultSlotChange, _RhOptionGroup_getChildOptions, _RhOptionGroup_updateDisabledChildren;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { RhOption } from './rh-option.js';
import { css } from "lit";
const styles = css `:host{--rh-color-text-status-disabled:light-dark(var(--rh-color-gray-50,#707070),var(--rh-color-gray-60,#4d4d4d));display:block;padding-block:var(--rh-space-md,8px)}:host([disabled]){pointer-events:none}:host([disabled]),:host([disabled]) slot[name=label]{color:var(--rh-color-text-status-disabled)}slot{display:block}slot[name=label]{color:var(--rh-color-text-secondary);font-size:var(--rh-font-size-body-text-xs,.75rem);padding:var(--rh-space-md,8px) var(--rh-space-lg,16px);user-select:none}`;
/**
 * Groups related `rh-option` elements within an `rh-select` for organizing
 * options into categories. Provides visual separation when used with `<hr>`.
 * Should include a `label` for screen readers (ARIA `group` role). When
 * `disabled`, all child options are disabled. Arrow keys and Tab navigate
 * through grouped options the same way as ungrouped options.
 * @summary Groups related rh-option elements within a select
 */
let RhOptionGroup = class RhOptionGroup extends LitElement {
    constructor() {
        super(...arguments);
        _RhOptionGroup_instances.add(this);
        /**
         * Whether the option group and all its child options are disabled.
         * When true, automatically disables all rh-option children, preventing
         * selection of any options within this group.
         */
        this.disabled = false;
        // eslint-disable-next-line no-unused-private-class-members
        _RhOptionGroup_internals.set(this, InternalsController.of(this, { role: 'group' }));
    }
    firstUpdated() {
        if (!isServer && this.disabled) {
            __classPrivateFieldGet(this, _RhOptionGroup_instances, "m", _RhOptionGroup_updateDisabledChildren).call(this);
        }
    }
    render() {
        return html `
      <div id="label-container"
           role="presentation">
        <!-- Group label as inline text. Overrides the \`label\` attribute. Screen readers announce this text when the group receives focus. -->
        <slot name="label">${this.label}</slot>
      </div>
      <!-- Insert \`<rh-option>\` elements. Each option must have accessible text content for screen readers. -->
      <slot @slotchange="${__classPrivateFieldGet(this, _RhOptionGroup_instances, "m", _RhOptionGroup_onDefaultSlotChange)}"></slot>
    `;
    }
    disabledChanged() {
        __classPrivateFieldGet(this, _RhOptionGroup_instances, "m", _RhOptionGroup_updateDisabledChildren).call(this);
    }
};
_RhOptionGroup_internals = new WeakMap();
_RhOptionGroup_instances = new WeakSet();
_RhOptionGroup_onDefaultSlotChange = function _RhOptionGroup_onDefaultSlotChange() {
    if (this.disabled) {
        __classPrivateFieldGet(this, _RhOptionGroup_instances, "m", _RhOptionGroup_updateDisabledChildren).call(this);
    }
};
_RhOptionGroup_getChildOptions = function _RhOptionGroup_getChildOptions() {
    const assignedElements = this.defaultSlot?.assignedElements?.() ?? [];
    return assignedElements.filter((element) => element instanceof RhOption);
};
_RhOptionGroup_updateDisabledChildren = function _RhOptionGroup_updateDisabledChildren() {
    const options = __classPrivateFieldGet(this, _RhOptionGroup_instances, "m", _RhOptionGroup_getChildOptions).call(this);
    for (const childOption of options) {
        childOption.disabled = this.disabled;
    }
};
RhOptionGroup.styles = [styles];
__decorate([
    property()
], RhOptionGroup.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhOptionGroup.prototype, "disabled", void 0);
__decorate([
    query('slot:not([name])')
], RhOptionGroup.prototype, "defaultSlot", void 0);
__decorate([
    observes('disabled')
], RhOptionGroup.prototype, "disabledChanged", null);
RhOptionGroup = __decorate([
    customElement('rh-option-group'),
    themable
], RhOptionGroup);
export { RhOptionGroup };
//# sourceMappingURL=rh-option-group.js.map