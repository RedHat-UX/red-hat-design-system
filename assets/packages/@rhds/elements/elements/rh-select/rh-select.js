var _RhSelect_instances, _RhSelect_options, _RhSelect_internals, _RhSelect_float, _RhSelect_slots, _RhSelect_combobox, _RhSelect_searchString, _RhSelect_searchTimeout, _RhSelect_lastSearchChar, _RhSelect_lastSearchWasCycling, _RhSelect_valueObserverHadFirstRun, _RhSelect_defaultValue, _RhSelect_defaultCaptureDone, _RhSelect_restoringFromReset, _RhSelect_isNotPlaceholderOption, _RhSelect_onSlotchange, _RhSelect_captureKeydown, _RhSelect_buttonLabel_get, _RhSelect_doExpand, _RhSelect_doCollapse, _RhSelect_computePlaceholderText, _RhSelect_getResolvedToggleLabelText, _RhSelect_getTextWithoutDescendantElements, _RhSelect_getLabelTextFromElements, _RhSelect_syncToggleAccessibleName, _RhSelect_removeListboxAriaLabelledby, _RhSelect_updateValidity, _RhSelect_syncAriaHelpText, _RhSelect_syncAriaFromSlottedHelp, _RhSelect_syncAriaFromHelpTextAttr, _RhSelect_isOptionFocused, _RhSelect_getFocusableOptions, _RhSelect_onKeydown, _RhSelect_handleTypeAhead, _RhSelect_focusOption, _RhSelect_getCurrentlyFocusedOption, _RhSelect_findMatchingOption;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { ComboboxController } from '@patternfly/pfe-core/controllers/combobox-controller.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { FloatingDOMController } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import { arraysAreEquivalent } from '@patternfly/pfe-core/functions/arraysAreEquivalent.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { RhOption } from './rh-option.js';
import './rh-option-group.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `:host{color:var(--rh-color-text-primary);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-sm,.875rem);font-weight:var(--rh-font-weight-body-text-regular,400);line-height:var(--rh-line-height-body-text,1.5)}#outer,:host{display:flex;flex-direction:column;align-items:stretch}:host([hidden]),[hidden]{display:none!important}:host([disabled]){pointer-events:none!important}.visually-hidden{border:0;clip-path:inset(100%);block-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;inline-size:1px}#outer{position:relative;border:1px solid #0000}#listbox-container{display:inline-flex;background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle);border-radius:var(--rh-border-radius-default,3px);box-shadow:var(--rh-box-shadow-sm);padding-block:var(--rh-space-md,8px);position:absolute;opacity:0}#outer.expanded #listbox-container{opacity:1;z-index:1000}#listbox{display:flex;flex-direction:column;position:relative;inline-size:100%}#toggle{background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));justify-content:space-between}#toggle,#toggle-button{align-items:center;border-radius:var(--rh-border-radius-default,3px);display:flex}.disabled #toggle{background-color:var(--rh-color-status-disabled,light-dark(var(--rh-color-gray-30,#c7c7c7),var(--rh-color-gray-40,#a3a3a3))
      )}#toggle-button{background-color:initial;border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle);color:var(--rh-color-text-primary);flex:1 1 auto;font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-sm,.875rem);gap:var(--rh-space-md,8px);min-block-size:37px;padding:var(--rh-space-md,8px) var(--rh-space-lg,16px);text-align:start}.disabled #toggle-button{color:var(--rh-color-text-status-disabled,light-dark(var(--rh-color-gray-50,#707070),var(--rh-color-gray-60,#4d4d4d))
        );border-color:#0000}#toggle-button:focus,#toggle-button:hover{border-color:var(--rh-color-border-interactive)}#toggle-button:focus,#toggle-button[aria-expanded=true]{border-color:#0000;outline:var(--rh-border-width-md,2px) solid var(--rh-color-border-interactive)}#toggle-button:focus-visible{border-color:var(--rh-color-border-interactive);outline:3px solid var(--rh-color-border-interactive);outline-offset:3px}#toggle-text{flex:1 1 auto}.disabled #toggle-icon{color:var(--rh-color-icon-status-disabled,light-dark(var(--rh-color-gray-40,#a3a3a3),var(--rh-color-gray-60,#4d4d4d))
      )}#toggle-button #toggle-icon{--rh-icon-size:10px}::slotted(hr){border:0;inline-size:100%;margin:0}::slotted(hr):after{content:"";background-color:var(--rh-color-border-subtle);block-size:1px;display:block;inline-size:100%}::slotted(rh-option-group){border-block:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}::slotted(rh-option-group:last-child){border-block-end:0}#help-text{align-items:center;display:flex;gap:var(--rh-space-md,8px);margin-block-start:var(--rh-space-md,8px)}#help-text ::slotted(*){display:inline-block;font-size:var(--rh-font-size-body-text-sm,.875rem)!important}:is(#toggle-button,#help-text) rh-icon{--rh-icon-size:var(--rh-select-icon-size,14px)}:host([state]) #help-text-content{font-weight:var(--rh-font-weight-body-text-medium,500)!important}:host([state=success]) #toggle-button{border-color:var(--rh-color-border-status-success)}:host([state=warning]) #toggle-button{border-color:var(--rh-color-border-status-warning)}:host([state=danger]) #toggle-button{border-color:var(--rh-color-border-status-danger)}.icon-success{color:var(--rh-color-icon-status-success)}.icon-warning{color:var(--rh-color-icon-status-warning)}.icon-danger{color:var(--rh-color-icon-status-danger)}`;
/**
 * Event type for the `change` event from rh-select. The select shall dispatch
 * this event when the selected value changes (e.g. after the user picks an
 * option or the value is updated programmatically). The event shall bubble and
 * provides no `detail` payload; listeners should read the new value from the
 * select's `value` property. Consumers must use this class when they need to
 * construct a synthetic change event.
 * @summary Event fired when the select value changes
 */
export class RhSelectChangeEvent extends Event {
    constructor() {
        super('change', { bubbles: true });
    }
}
/**
 * A select element allows users to Select from an expandable list.
 * @summary A control that provides a menu of options
 * @alias select
 * @fires {Event} open - Fires when the dropdown listbox opens. Does not bubble. The event has no `detail` payload.
 * @fires {Event} close - Fires when the dropdown listbox closes. Does not bubble. The event has no `detail` payload.
 * @fires {RhSelectChangeEvent} change - Fires when the selected value changes. Bubbles. The event has no `detail` payload; read the new value from the `value` property.
 */
let RhSelect = class RhSelect extends LitElement {
    constructor() {
        super(...arguments);
        _RhSelect_instances.add(this);
        /**
         * Whether the select control is disabled and non-interactive.
         * When true, prevents user interaction and excludes the value from form submission.
         */
        this.disabled = false;
        /**
         * Whether the dropdown listbox is currently expanded and visible.
         * Automatically managed by keyboard and mouse interactions. Should not be
         * manually set in most cases.
         */
        this.expanded = false;
        /**
         * When true, the user must select an option with a non-empty value before the
         * form can be submitted. Syncs to aria-required and constraint validation so
         * the browser can show "Please fill out this field" when the value is empty.
         */
        this.required = false;
        _RhSelect_options.set(this, []);
        _RhSelect_internals.set(this, InternalsController.of(this));
        _RhSelect_float.set(this, new FloatingDOMController(this, { content: () => this._listboxContainer }));
        _RhSelect_slots.set(this, new SlotController(this, null, 'placeholder', 'help-text'));
        _RhSelect_combobox.set(this, ComboboxController.of(this, {
            getItems: () => this.options,
            getFallbackLabel: () => this.accessibleLabel
                || __classPrivateFieldGet(this, _RhSelect_internals, "f").computedLabelText
                || this.placeholder
                || __classPrivateFieldGet(this, _RhSelect_slots, "f").getSlotted('placeholder').map(x => x.textContent).join(''),
            getListboxElement: () => this._listbox ?? null,
            getToggleButton: () => this._toggleButton ?? null,
            getComboboxInput: () => null,
            isExpanded: () => this.expanded,
            requestShowListbox: () => void (this.expanded || (this.expanded = true)),
            requestHideListbox: () => void (this.expanded && (this.expanded = false)),
            setItemHidden: (item, hidden) => (item.id !== 'placeholder') && void (item.hidden = hidden),
            isItem: item => item instanceof RhOption,
            setItemSelected: (item, selected) => item.selected = selected,
        }));
        // Type-ahead state for printable character navigation
        _RhSelect_searchString.set(this, '');
        _RhSelect_searchTimeout.set(this, void 0);
        // Tracks the last typed character to detect repeated chars for cycling behavior
        _RhSelect_lastSearchChar.set(this, '');
        _RhSelect_lastSearchWasCycling.set(this, false);
        _RhSelect_valueObserverHadFirstRun.set(this, false);
        // Default value captured once when options are stable; form reset restores to this.
        _RhSelect_defaultValue.set(this, '');
        // Only capture the default selection once
        _RhSelect_defaultCaptureDone.set(this, false);
        // When true, valueChanged should not dispatch change (e.g. during form reset restore).
        _RhSelect_restoringFromReset.set(this, false);
        _RhSelect_isNotPlaceholderOption.set(this, (option) => option !== this._placeholder);
        /**
         * Intercept the space key during type-ahead.
         * This runs before the ComboboxController's handler, allowing us to prevent
         * the space key from being treated as a selection action (and causing the listbox to close).
         * @param event - The keyboard event to check for space key
         */
        _RhSelect_captureKeydown.set(this, (event) => {
            // Only intercept space key during an active type-ahead session
            if (event.key === ' ' && __classPrivateFieldGet(this, _RhSelect_searchTimeout, "f") !== undefined) {
                // Prevent ComboboxController from treating this as a selection action
                event.stopPropagation();
                event.preventDefault();
                // Since stopPropagation prevents the bubble-phase handler from receiving
                // this event, we must directly process the space as a type-ahead character
                __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_handleTypeAhead).call(this, ' ');
            }
        });
    }
    /**
     * The currently selected rh-option element. Accepts a single option.
     * Setting this property programmatically updates the visual selection and form value.
     */
    set selected(selected) {
        const list = Array.isArray(selected) ? selected : [selected];
        __classPrivateFieldGet(this, _RhSelect_combobox, "f").selected = list;
    }
    get selected() {
        return __classPrivateFieldGet(this, _RhSelect_combobox, "f").selected;
    }
    /** List of options */
    get options() {
        return __classPrivateFieldGet(this, _RhSelect_options, "f");
    }
    set options(v) {
        __classPrivateFieldSet(this, _RhSelect_options, [], "f");
        this.requestUpdate('options', null);
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('keydown', __classPrivateFieldGet(this, _RhSelect_captureKeydown, "f"), { capture: true });
        if (!isServer) {
            __classPrivateFieldSet(this, _RhSelect_options, [
                this._placeholder,
                ...Array.from(this.querySelectorAll('rh-option')),
            ].filter((x) => !!x && !x.hidden), "f");
        }
    }
    willUpdate() {
        __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_syncAriaHelpText).call(this);
    }
    render() {
        const { disabled, expanded, placeholder } = this;
        const { anchor = 'bottom', alignment = 'start', styles = {} } = __classPrivateFieldGet(this, _RhSelect_float, "f");
        const { height = 0, width = 0 } = isServer ? {} : (this.getBoundingClientRect?.() ?? {});
        const hasSelection = !!(Array.isArray(this.selected) ? this.selected.length : this.selected);
        const hideHelpText = __classPrivateFieldGet(this, _RhSelect_slots, "f").isEmpty('help-text') && !this.helpText;
        const placeholderIsInert = !placeholder && __classPrivateFieldGet(this, _RhSelect_slots, "f").isEmpty('placeholder');
        const listboxOffsetWithoutHelpText = `${height + 4 || 0}px`;
        const listboxOffsetWithHelpText = `${height - 25 || 0}px`;
        const listboxMarginBlockStart = !hideHelpText ?
            listboxOffsetWithHelpText : listboxOffsetWithoutHelpText;
        return html `
      <div id="outer"
           style="${styleMap(styles)}"
           class="${classMap({ disabled, expanded, [anchor]: !!anchor, [alignment]: !!alignment })}">
        <div id="toggle">
          <button id="toggle-button"
                  type="button"
                  @keydown="${__classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_onKeydown)}">
            <span id="toggle-text">
              ${__classPrivateFieldGet(this, _RhSelect_instances, "a", _RhSelect_buttonLabel_get)}
            </span>
            <rh-icon ?hidden="${this.state !== 'success'}"
                     class="icon-success"
                     set="ui"
                     icon="check-circle-fill">
            </rh-icon>
            <rh-icon ?hidden="${this.state !== 'warning'}"
                     class="icon-warning"
                     set="ui"
                     icon="warning-fill">
            </rh-icon>
            <rh-icon ?hidden="${this.state !== 'danger'}"
                     class="icon-danger"
                     set="ui"
                     icon="ban-fill">
            </rh-icon>
            <rh-icon id="toggle-icon" set="microns" icon="caret-down-fill"></rh-icon>
          </button>
        </div>
        <div id="listbox-container"
             ?hidden="${!expanded}"
             style="${styleMap({
            marginBlockStart: listboxMarginBlockStart,
            inlineSize: width ? `${width - 2}px` : 'auto',
        })}">
          <div id="listbox"
               @keydown="${__classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_onKeydown)}">
            <rh-option id="placeholder"
                       disabled
                       ?inert="${placeholderIsInert || hasSelection}"
                       ?hidden="${!placeholder && __classPrivateFieldGet(this, _RhSelect_slots, "f").isEmpty('placeholder')}">
              <!-- Placeholder inline text for the select. Overrides the \`placeholder\` attribute. Screen readers announce this text as the default label when no other label is provided. -->
              <slot name="placeholder">${placeholder ?? ''}</slot>
            </rh-option>
            ${__classPrivateFieldGet(this, _RhSelect_combobox, "f").renderItemsToShadowRoot()}
            <!-- Insert \`rh-option\` elements and optional \`rh-option-group\` or \`hr\` separator elements. Each \`rh-option\` must have accessible text content (slotted text or \`label\` attribute) so screen readers can announce it. -->
            <slot @slotchange="${__classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_onSlotchange)}"></slot>
          </div>
        </div>
        <div id="help-text" ?hidden="${hideHelpText}">
          <rh-icon ?hidden="${this.state !== 'success'}"
                   class="icon-success"
                   set="ui"
                   icon="check-circle-fill">
          </rh-icon>
          <rh-icon ?hidden="${this.state !== 'warning'}"
                   class="icon-warning"
                   set="ui"
                   icon="warning-fill">
          </rh-icon>
          <rh-icon ?hidden="${this.state !== 'danger'}"
                   class="icon-danger"
                   set="ui"
                   icon="ban-fill">
          </rh-icon>
          <!-- Insert a block element (e.g. \`<p>\`) with text that helps describe the select. Overrides the \`help-text\` attribute when slotted. Content is automatically linked to the control via \`aria-describedby\` so screen readers announce it. -->
          <slot id="help-text-content" name="help-text"><span aria-hidden="true">${this.helpText ?? ''}</span></slot>
        </div>
      </div>
    `;
    }
    updated() {
        __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_syncToggleAccessibleName).call(this);
        __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_removeListboxAriaLabelledby).call(this);
        // Capture default value for form reset restore
        if (!isServer && !__classPrivateFieldGet(this, _RhSelect_defaultCaptureDone, "f") && this.options.length > 0) {
            const attr = this.getAttribute('value');
            __classPrivateFieldSet(this, _RhSelect_defaultValue, attr ?? this.value ?? '', "f");
            __classPrivateFieldSet(this, _RhSelect_defaultCaptureDone, true, "f");
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('keydown', __classPrivateFieldGet(this, _RhSelect_captureKeydown, "f"), { capture: true });
    }
    formResetCallback() {
        __classPrivateFieldSet(this, _RhSelect_restoringFromReset, true, "f");
        const defaultVal = __classPrivateFieldGet(this, _RhSelect_defaultValue, "f") ?? '';
        const option = this.options.find(opt => opt !== this._placeholder && opt.value === defaultVal);
        this.selected = option ? [option] : [];
    }
    formDisabledCallback(disabled) {
        this.disabled = disabled;
    }
    /**
     * Returns true if the element's value passes constraint validation.
     * Participates in the Constraint Validation API; updates validity state
     * before checking.
     */
    checkValidity() {
        __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_updateValidity).call(this);
        return __classPrivateFieldGet(this, _RhSelect_internals, "f").checkValidity();
    }
    /**
     * Returns true if the element's value passes constraint validation.
     * If invalid, reports the problem (e.g. browser "Please fill out this field")
     * and returns false. Participates in the Constraint Validation API.
     */
    reportValidity() {
        __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_updateValidity).call(this);
        return __classPrivateFieldGet(this, _RhSelect_internals, "f").reportValidity();
    }
    disabledChanged() {
        __classPrivateFieldGet(this, _RhSelect_combobox, "f").disabled = this.disabled;
    }
    async expandedChanged(old, expanded) {
        // Don't dispach open/close events on page load:
        if (old === expanded) {
            return;
        }
        if (this.dispatchEvent(new Event(this.expanded ? 'open' : 'close'))) {
            if (expanded) {
                __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_doExpand).call(this);
            }
            else {
                __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_doCollapse).call(this);
                // Only return focus to the toggle when closing the listbox
                // AND focus is currently inside this element.
                if (old && this.matches(':focus-within')) {
                    this._toggleButton?.focus();
                }
            }
        }
    }
    async selectedChanged(_prev, selected) {
        this.value = selected.map(x => x.value).join();
        await this.updateComplete;
        this.hide();
    }
    valueChanged() {
        __classPrivateFieldGet(this, _RhSelect_internals, "f").setFormValue(this.value ?? '');
        // Don't dispatch `change` on page load or when restoring from form reset:
        if (__classPrivateFieldGet(this, _RhSelect_restoringFromReset, "f")) {
            __classPrivateFieldSet(this, _RhSelect_restoringFromReset, false, "f");
            __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_updateValidity).call(this);
            return;
        }
        if (__classPrivateFieldGet(this, _RhSelect_valueObserverHadFirstRun, "f")) {
            this.dispatchEvent(new RhSelectChangeEvent());
        }
        else {
            __classPrivateFieldSet(this, _RhSelect_valueObserverHadFirstRun, true, "f");
        }
        __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_updateValidity).call(this);
    }
    requiredChanged() {
        __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_updateValidity).call(this);
    }
    /**
     * Opens the dropdown
     */
    async show() {
        this.expanded = true;
        await this.updateComplete;
    }
    /**
     * Closes the dropdown
     */
    async hide() {
        this.expanded = false;
        await this.updateComplete;
    }
    /**
     * Toggles the dropdown based on current state
     */
    async toggle() {
        if (this.expanded) {
            await this.hide();
        }
        else {
            await this.show();
        }
    }
};
_RhSelect_options = new WeakMap();
_RhSelect_internals = new WeakMap();
_RhSelect_float = new WeakMap();
_RhSelect_slots = new WeakMap();
_RhSelect_combobox = new WeakMap();
_RhSelect_searchString = new WeakMap();
_RhSelect_searchTimeout = new WeakMap();
_RhSelect_lastSearchChar = new WeakMap();
_RhSelect_lastSearchWasCycling = new WeakMap();
_RhSelect_valueObserverHadFirstRun = new WeakMap();
_RhSelect_defaultValue = new WeakMap();
_RhSelect_defaultCaptureDone = new WeakMap();
_RhSelect_restoringFromReset = new WeakMap();
_RhSelect_isNotPlaceholderOption = new WeakMap();
_RhSelect_captureKeydown = new WeakMap();
_RhSelect_instances = new WeakSet();
_RhSelect_onSlotchange = function _RhSelect_onSlotchange() {
    if (!isServer) {
        const newOptions = [
            this._placeholder,
            ...Array.from(this.querySelectorAll('rh-option')),
        ].filter((x) => !!x && !x.hidden);
        __classPrivateFieldSet(this, _RhSelect_options, newOptions, "f");
        // Sync combobox so keyboard nav sees new options
        __classPrivateFieldGet(this, _RhSelect_combobox, "f").items = this.options;
    }
};
_RhSelect_buttonLabel_get = function _RhSelect_buttonLabel_get() {
    const { selected } = __classPrivateFieldGet(this, _RhSelect_combobox, "f");
    const selectedLabels = selected
        .map(opt => opt.displayLabel)
        .filter(Boolean)
        .join(', ');
    return selectedLabels
        || __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_computePlaceholderText).call(this)
        || 'Select a value';
};
_RhSelect_doExpand = async function _RhSelect_doExpand() {
    try {
        await __classPrivateFieldGet(this, _RhSelect_float, "f").show({ placement: 'bottom' });
        return true;
    }
    catch {
        return false;
    }
};
_RhSelect_doCollapse = async function _RhSelect_doCollapse() {
    try {
        await __classPrivateFieldGet(this, _RhSelect_float, "f").hide();
        return true;
    }
    catch {
        return false;
    }
};
_RhSelect_computePlaceholderText = function _RhSelect_computePlaceholderText() {
    const slotInShadow = this.shadowRoot?.querySelector?.('slot[name="placeholder"]');
    const assigned = slotInShadow?.assignedNodes?.() ?? [];
    const slotText = assigned.map(n => n.textContent ?? '').join('').trim();
    return this.placeholder
        || slotText
        || __classPrivateFieldGet(this, _RhSelect_combobox, "f").items
            .filter(__classPrivateFieldGet(this, _RhSelect_isNotPlaceholderOption, "f"))
            .at(0)
            ?.value
        || '';
};
_RhSelect_getResolvedToggleLabelText = function _RhSelect_getResolvedToggleLabelText() {
    const host = this;
    const authorAriaLabel = host.getAttribute?.('aria-label')?.trim();
    if (authorAriaLabel) {
        return authorAriaLabel;
    }
    const authorLabelledBy = host.ariaLabelledByElements;
    if (authorLabelledBy?.length) {
        return __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_getLabelTextFromElements).call(this, [...authorLabelledBy]);
    }
    const associatedLabels = InternalsController.getLabels(this);
    if (associatedLabels?.length) {
        return __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_getLabelTextFromElements).call(this, associatedLabels);
    }
    if (this.accessibleLabel?.trim()) {
        return this.accessibleLabel.trim();
    }
    // Placeholder for labelling: attribute then slot content only (not first-option fallback).
    const placeholderForLabel = this.placeholder?.trim()
        || __classPrivateFieldGet(this, _RhSelect_slots, "f").getSlotted('placeholder').map(x => x.textContent ?? '').join(' ').trim();
    if (placeholderForLabel) {
        return placeholderForLabel;
    }
    return 'Select a value';
};
_RhSelect_getTextWithoutDescendantElements = function _RhSelect_getTextWithoutDescendantElements(element) {
    let text = '';
    for (const node of element.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
            text += node.textContent ?? '';
        }
    }
    return text.trim();
};
_RhSelect_getLabelTextFromElements = function _RhSelect_getLabelTextFromElements(elements) {
    return elements
        .map((el) => {
        if (!(el instanceof HTMLElement) || el.hidden) {
            return '';
        }
        const ariaLabel = el.getAttribute?.('aria-label');
        if (ariaLabel) {
            return ariaLabel.trim();
        }
        // When the label wraps the host, use only direct text nodes and skip elements.
        if (el.contains(this)) {
            return __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_getTextWithoutDescendantElements).call(this, el);
        }
        return (el.textContent ?? '').trim();
    })
        .filter(Boolean)
        .join(' ')
        .trim() || '';
};
_RhSelect_syncToggleAccessibleName = function _RhSelect_syncToggleAccessibleName() {
    const btn = this._toggleButton;
    if (!btn) {
        return;
    }
    const labelText = __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_getResolvedToggleLabelText).call(this);
    btn.ariaLabel = labelText;
    btn.removeAttribute('aria-labelledby');
};
_RhSelect_removeListboxAriaLabelledby = function _RhSelect_removeListboxAriaLabelledby() {
    const listbox = this._listbox;
    if (listbox && listbox.getAttribute('aria-labelledby') === '') {
        listbox.removeAttribute('aria-labelledby');
    }
};
_RhSelect_updateValidity = function _RhSelect_updateValidity() {
    __classPrivateFieldGet(this, _RhSelect_internals, "f").ariaRequired = this.required ? 'true' : 'false';
    const valueIsEmpty = this.value === undefined || this.value === '';
    if (this.required && valueIsEmpty) {
        __classPrivateFieldGet(this, _RhSelect_internals, "f").setValidity({ valueMissing: true }, 'Please fill out this field.');
    }
    else {
        __classPrivateFieldGet(this, _RhSelect_internals, "f").setValidity({});
    }
};
_RhSelect_syncAriaHelpText = function _RhSelect_syncAriaHelpText() {
    const noSlottedHelp = __classPrivateFieldGet(this, _RhSelect_slots, "f").isEmpty('help-text');
    const noHelpText = !this.helpText;
    if (noSlottedHelp && noHelpText) {
        __classPrivateFieldGet(this, _RhSelect_internals, "f").ariaDescription = '';
        __classPrivateFieldGet(this, _RhSelect_internals, "f").ariaDescribedByElements = [];
        return;
    }
    if (!noSlottedHelp) {
        __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_syncAriaFromSlottedHelp).call(this);
        return;
    }
    __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_syncAriaFromHelpTextAttr).call(this);
};
_RhSelect_syncAriaFromSlottedHelp = function _RhSelect_syncAriaFromSlottedHelp() {
    __classPrivateFieldGet(this, _RhSelect_internals, "f").ariaDescribedByElements = __classPrivateFieldGet(this, _RhSelect_slots, "f").getSlotted('help-text');
    __classPrivateFieldGet(this, _RhSelect_internals, "f").ariaDescription = '';
};
_RhSelect_syncAriaFromHelpTextAttr = function _RhSelect_syncAriaFromHelpTextAttr() {
    if ('ariaDescription' in (globalThis.ElementInternals?.prototype ?? {})) {
        __classPrivateFieldGet(this, _RhSelect_internals, "f").ariaDescription = this.helpText ?? '';
    }
    else {
        this.setAttribute('aria-description', this.helpText ?? '');
    }
    __classPrivateFieldGet(this, _RhSelect_internals, "f").ariaDescribedByElements = [];
};
_RhSelect_isOptionFocused = function _RhSelect_isOptionFocused(option) {
    return option === document.activeElement
        || option.shadowRoot?.activeElement != null
        || option.matches(':focus-within');
};
_RhSelect_getFocusableOptions = function _RhSelect_getFocusableOptions() {
    return this.options.filter(option => option !== this._placeholder && !option.disabled);
};
_RhSelect_onKeydown = function _RhSelect_onKeydown(event) {
    // Arrow keys on the toggle button should open the listbox (if needed)
    // and move focus into it. The ComboboxController's toggle-button handler
    // only opens the listbox but never moves focus; #doExpand intentionally
    // does not auto-focus so that Enter/Space/click keep focus on the toggle.
    // We handle focus transfer here so a single ArrowDown/ArrowUp enters the listbox.
    if (event.target === this._toggleButton
        && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
        event.preventDefault();
        event.stopPropagation();
        // Open if needed, wait for the listbox to render, then focus.
        if (!this.expanded) {
            this.expanded = true;
        }
        this.updateComplete.then(() => {
            // When an option is selected, resume from that option.
            // Otherwise start at the placeholder (first item in the list).
            // The placeholder is hidden/inert when no placeholder text exists
            // or when a selection exists, so check before using it.
            const ph = this._placeholder;
            const placeholderFocusable = ph && !ph.hidden && !ph.hasAttribute('inert');
            const target = this.selected.at(0)
                ?? (placeholderFocusable ? ph : undefined)
                ?? __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_getFocusableOptions).call(this).at(0);
            target?.focus();
        });
        return;
    }
    // Printable keys only; exclude Space so it is not swallowed as type-ahead here.
    const isPrintable = event.key.length === 1
        && event.key !== ' '
        && !event.ctrlKey
        && !event.altKey
        && !event.metaKey;
    if (isPrintable) {
        event.preventDefault();
        event.stopPropagation();
        __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_handleTypeAhead).call(this, event.key);
    }
};
_RhSelect_handleTypeAhead = 
/**
 * Handles type-ahead navigation per APG Select-Only Combobox pattern.
 * - Opens the listbox if not already displayed
 * - Accumulates characters typed in quick succession
 * - Cycles through options when the same character is typed repeatedly
 * @param char - The printable character that was typed
 */
async function _RhSelect_handleTypeAhead(char) {
    if (__classPrivateFieldGet(this, _RhSelect_searchTimeout, "f") !== undefined) {
        clearTimeout(__classPrivateFieldGet(this, _RhSelect_searchTimeout, "f"));
    }
    const lowerChar = char.toLowerCase();
    const focusableOptions = __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_getFocusableOptions).call(this);
    // TYPE-AHEAD MODES:
    // 1. CYCLING: Press "A" repeatedly to cycle through options starting with "A"
    // 2. ACCUMULATION: Type "App" to jump to "Apple"
    //
    // Cycling requires the listbox to be open. We detect cycling in two cases:
    // - Traditional: User types same char repeatedly (e.g., "A", "A", "A")
    // - From focused: User typed a word, waited, then typed its first letter again
    //   (e.g., typed "Apple", waited, pressed "A" → go to "Apricot")
    const searchIsRepeatedChar = __classPrivateFieldGet(this, _RhSelect_searchString, "f") === ''
        || __classPrivateFieldGet(this, _RhSelect_searchString, "f") === lowerChar.repeat(__classPrivateFieldGet(this, _RhSelect_searchString, "f").length);
    // Only allow traditional repeat cycling when listbox is already open
    // This prevents: close listbox, press "A" → cycling instead of fresh search
    const isTraditionalRepeat = lowerChar === __classPrivateFieldGet(this, _RhSelect_lastSearchChar, "f")
        && searchIsRepeatedChar
        && this.expanded;
    // Check if we should cycle from the currently focused item
    // This handles: type "Apple", wait, press "A" → should go to Apricot
    // BUT only if the previous search was also a cycling operation (single char)
    // AND the listbox is already open
    // This prevents: type "Item 5", wait, type "Item 3" → incorrectly cycling on "I"
    const currentFocused = __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_getCurrentlyFocusedOption).call(this, focusableOptions);
    const focusedStartsWithChar = currentFocused?.displayLabel.toLowerCase().startsWith(lowerChar);
    const shouldCycleFromFocused = __classPrivateFieldGet(this, _RhSelect_searchString, "f") === ''
        && focusedStartsWithChar
        && __classPrivateFieldGet(this, _RhSelect_lastSearchWasCycling, "f")
        && this.expanded;
    const isRepeatedChar = isTraditionalRepeat || shouldCycleFromFocused;
    if (isRepeatedChar) {
        // Cycling mode: find next option starting with this character
        // This handles "A", "A", "A" cycling through items starting with "A"
        const match = __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_findMatchingOption).call(this, lowerChar, true, focusableOptions);
        if (match) {
            await __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_focusOption).call(this, match);
        }
        // Mark that this search was a cycling operation
        __classPrivateFieldSet(this, _RhSelect_lastSearchWasCycling, true, "f");
    }
    else {
        // Accumulation mode: append characters and find first match
        // This handles typing "Apple" to search for "Apple"
        __classPrivateFieldSet(this, _RhSelect_searchString, __classPrivateFieldGet(this, _RhSelect_searchString, "f") + lowerChar, "f");
        const match = __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_findMatchingOption).call(this, __classPrivateFieldGet(this, _RhSelect_searchString, "f"), false, focusableOptions);
        if (match) {
            await __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_focusOption).call(this, match);
        }
        __classPrivateFieldSet(this, _RhSelect_lastSearchWasCycling, false, "f");
    }
    // Track the last character for detecting repeated chars
    __classPrivateFieldSet(this, _RhSelect_lastSearchChar, lowerChar, "f");
    // Reset search string after 500ms of inactivity
    __classPrivateFieldSet(this, _RhSelect_searchTimeout, window.setTimeout(() => {
        __classPrivateFieldSet(this, _RhSelect_searchString, '', "f");
        __classPrivateFieldSet(this, _RhSelect_searchTimeout, undefined, "f");
    }, 500), "f");
};
_RhSelect_focusOption = 
/**
 * Focuses the given option, opening the listbox if needed.
 * @param option - The option to focus
 */
async function _RhSelect_focusOption(option) {
    if (!this.expanded) {
        this.expanded = true;
        await this.updateComplete;
    }
    option.focus();
};
_RhSelect_getCurrentlyFocusedOption = function _RhSelect_getCurrentlyFocusedOption(focusableOptions) {
    return focusableOptions.find(option => __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_isOptionFocused).call(this, option));
};
_RhSelect_findMatchingOption = function _RhSelect_findMatchingOption(searchString, cycling, focusableOptions) {
    if (focusableOptions.length === 0) {
        return undefined;
    }
    const optionsWithLabels = focusableOptions.map(option => ({
        option,
        label: option.displayLabel.toLowerCase(),
    }));
    const matchingOptions = optionsWithLabels
        .filter(({ label }) => label.startsWith(searchString))
        .map(({ option }) => option);
    if (matchingOptions.length === 0) {
        return undefined;
    }
    if (cycling) {
        // Cycling mode: find the next matching option
        const currentlyFocused = focusableOptions.find(option => __classPrivateFieldGet(this, _RhSelect_instances, "m", _RhSelect_isOptionFocused).call(this, option));
        // If the listbox is closed, use the selected option as the starting point for cycling
        const startingOption = currentlyFocused ?? this.selected.at(0);
        if (startingOption && matchingOptions.includes(startingOption)) {
            const currentIndex = matchingOptions.indexOf(startingOption);
            // Cycle to the next one (including wrapping around to start)
            const nextIndex = (currentIndex + 1) % matchingOptions.length;
            return matchingOptions[nextIndex];
        }
    }
    return matchingOptions[0];
};
RhSelect.styles = [styles];
RhSelect.formAssociated = true;
RhSelect.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
__decorate([
    property({ attribute: 'accessible-label' })
], RhSelect.prototype, "accessibleLabel", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhSelect.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhSelect.prototype, "expanded", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhSelect.prototype, "required", void 0);
__decorate([
    property()
], RhSelect.prototype, "value", void 0);
__decorate([
    property({ reflect: true })
], RhSelect.prototype, "name", void 0);
__decorate([
    property()
], RhSelect.prototype, "placeholder", void 0);
__decorate([
    property({ attribute: 'help-text' })
], RhSelect.prototype, "helpText", void 0);
__decorate([
    property({ reflect: true })
], RhSelect.prototype, "state", void 0);
__decorate([
    property({ hasChanged: (a, b) => !arraysAreEquivalent(a, b) })
], RhSelect.prototype, "selected", null);
__decorate([
    query('#toggle-button')
], RhSelect.prototype, "_toggleButton", void 0);
__decorate([
    query('#listbox')
], RhSelect.prototype, "_listbox", void 0);
__decorate([
    query('#listbox-container')
], RhSelect.prototype, "_listboxContainer", void 0);
__decorate([
    query('#placeholder')
], RhSelect.prototype, "_placeholder", void 0);
__decorate([
    observes('disabled')
], RhSelect.prototype, "disabledChanged", null);
__decorate([
    observes('expanded')
], RhSelect.prototype, "expandedChanged", null);
__decorate([
    observes('selected')
], RhSelect.prototype, "selectedChanged", null);
__decorate([
    observes('value')
], RhSelect.prototype, "valueChanged", null);
__decorate([
    observes('required')
], RhSelect.prototype, "requiredChanged", null);
RhSelect = __decorate([
    customElement('rh-select'),
    themable
], RhSelect);
export { RhSelect };
//# sourceMappingURL=rh-select.js.map