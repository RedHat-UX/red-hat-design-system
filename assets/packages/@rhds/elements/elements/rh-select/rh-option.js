var _RhOption_instances, _RhOption_value, _RhOption_displayLabel, _RhOption_internals, _RhOption_onSlotChange, _RhOption_updateDisplayLabel;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:block}:host([hidden]),[hidden]{display:none!important}:host([disabled]){pointer-events:none}:host(:focus),:host(:focus-visible){outline:0}:host(:focus) #outer,:host(:hover) #outer{background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-darker,#1f1f1f))}#outer{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start;padding:var(--rh-space-md,8px) var(--rh-space-lg,16px)}:host(:focus) #outer{border:0;border-radius:var(--rh-border-radius-default,3px);outline:var(--rh-border-width-lg,3px) solid var(--rh-color-border-interactive);outline-offset:calc(var(--rh-border-width-lg, 3px)*-1)}:host([disabled]) #outer{color:var(--rh-color-text-status-disabled,light-dark(var(--rh-color-gray-50,#707070),var(--rh-color-gray-60,#4d4d4d))
      )}#label{flex:1 1 auto}#description,#label,::slotted([slot=description]){user-select:none}rh-icon[icon=checkmark]{color:var(--rh-color-interactive-primary-default)}#description{display:block;flex:1 0 100%}slot[name=description]{font-size:var(--rh-font-size-body-text-xs,.75rem)}#display-icon{--rh-icon-size:var(--rh-select-icon-size,14px);margin-inline-end:var(--rh-space-md,8px)}`;
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * An option within an `rh-select` dropdown. Must be a child of `rh-select`
 * or `rh-option-group`. Should include a `value` attribute for form data.
 * Must have text content or `label` for screen readers (ARIA `option` role).
 * Press Enter/Space to select; Arrow keys to navigate between options.
 * @summary A selectable option within a select list
 * @alias option
 * @demo https://ux.redhat.com/elements/select/demo/option-icons/ - Options with icons
 * @demo https://ux.redhat.com/elements/select/demo/option-descriptions/ - Options with descriptions
 */
let RhOption = class RhOption extends LitElement {
    constructor() {
        super(...arguments);
        _RhOption_instances.add(this);
        /** Whether the option is disabled and cannot be selected. Defaults to `false`. */
        this.disabled = false;
        /** Whether the option is currently selected. Defaults to `false`. */
        this.selected = false;
        /** Icon set for the optional rh-icon to precede the option text - 'ui' by default */
        this.iconSet = 'ui';
        _RhOption_value.set(this, void 0);
        _RhOption_displayLabel.set(this, void 0);
        _RhOption_internals.set(this, InternalsController.of(this, { role: 'option' }));
    }
    /**
     * Form value for this option.
     * Priority: value attr -> displayLabel -> ''
     */
    get value() {
        return __classPrivateFieldGet(this, _RhOption_value, "f") ?? this.displayLabel ?? '';
    }
    set value(v) {
        __classPrivateFieldSet(this, _RhOption_value, v, "f");
    }
    /**
     * Gets the display text for the rh-option.
     * Priority: slotted text content -> label attr -> value attr -> ''
     */
    get displayLabel() {
        return __classPrivateFieldGet(this, _RhOption_displayLabel, "f") ?? this.label ?? __classPrivateFieldGet(this, _RhOption_value, "f") ?? '';
    }
    render() {
        const { disabled, selected } = this;
        return html `
      <div id="outer" class="${classMap({ disabled, selected })}">
        <rh-icon id="display-icon"
                 set="${this.iconSet ?? 'ui'}"
                 icon="${ifDefined(this.icon)}"
                 ?hidden="${!this.icon}">
        </rh-icon>
        <span id="label">
          <!-- Option label as inline text. Screen readers use this content as the accessible name. Falls back to the \`label\` or \`value\` attribute when empty. -->
          <slot @slotchange="${__classPrivateFieldGet(this, _RhOption_instances, "m", _RhOption_onSlotChange)}">${this.displayLabel}</slot>
        </span>
        <rh-icon icon="checkmark"
                 set="microns"
                 loading="eager"
                 ?hidden="${!this.selected}"></rh-icon>
        <!-- Optional inline or block description text displayed below the option label. Overrides the \`description\` attribute. Should be a \`<span>\` or \`<p>\` element. -->
        <slot id="description"
              name="description">${this.description ?? ''}</slot>
      </div>
    `;
    }
    /**
     * Initialize cached display label on first client-side render
     * @param changedProperties - Properties that changed before this update
     */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        __classPrivateFieldGet(this, _RhOption_instances, "m", _RhOption_updateDisplayLabel).call(this);
    }
    selectedChanged() {
        __classPrivateFieldGet(this, _RhOption_internals, "f").ariaSelected = String(!!this.selected);
    }
    disabledChanged() {
        __classPrivateFieldGet(this, _RhOption_internals, "f").ariaDisabled = String(!!this.disabled);
    }
    labelChanged() {
        __classPrivateFieldGet(this, _RhOption_instances, "m", _RhOption_updateDisplayLabel).call(this);
        this.requestUpdate();
    }
    valueChanged() {
        __classPrivateFieldGet(this, _RhOption_instances, "m", _RhOption_updateDisplayLabel).call(this);
        this.requestUpdate();
    }
};
_RhOption_value = new WeakMap();
_RhOption_displayLabel = new WeakMap();
_RhOption_internals = new WeakMap();
_RhOption_instances = new WeakSet();
_RhOption_onSlotChange = function _RhOption_onSlotChange() {
    __classPrivateFieldGet(this, _RhOption_instances, "m", _RhOption_updateDisplayLabel).call(this);
    this.requestUpdate();
};
_RhOption_updateDisplayLabel = function _RhOption_updateDisplayLabel() {
    if (!isServer) {
        const defaultSlot = this.shadowRoot?.querySelector('slot:not([name])');
        if (defaultSlot) {
            const slotText = defaultSlot.assignedNodes()
                .map(node => node.textContent ?? '')
                .join('')
                .trim();
            if (slotText) {
                __classPrivateFieldSet(this, _RhOption_displayLabel, slotText, "f");
                return;
            }
        }
    }
    __classPrivateFieldSet(this, _RhOption_displayLabel, this.label ?? __classPrivateFieldGet(this, _RhOption_value, "f") ?? '', "f");
};
RhOption.styles = [styles];
__decorate([
    property({ type: Boolean, reflect: true })
], RhOption.prototype, "disabled", void 0);
__decorate([
    property()
], RhOption.prototype, "value", null);
__decorate([
    property({ type: Boolean, reflect: true })
], RhOption.prototype, "selected", void 0);
__decorate([
    property({ attribute: 'icon-set' })
], RhOption.prototype, "iconSet", void 0);
__decorate([
    property({ reflect: true })
], RhOption.prototype, "icon", void 0);
__decorate([
    property({ reflect: true })
], RhOption.prototype, "description", void 0);
__decorate([
    property({ reflect: true })
], RhOption.prototype, "label", void 0);
__decorate([
    observes('selected')
], RhOption.prototype, "selectedChanged", null);
__decorate([
    observes('disabled')
], RhOption.prototype, "disabledChanged", null);
__decorate([
    observes('label')
], RhOption.prototype, "labelChanged", null);
__decorate([
    observes('value')
], RhOption.prototype, "valueChanged", null);
RhOption = __decorate([
    customElement('rh-option'),
    themable
], RhOption);
export { RhOption };
//# sourceMappingURL=rh-option.js.map