var _PfSearchInput_instances, _PfSearchInput_internals, _PfSearchInput_float, _PfSearchInput_slots, _PfSearchInput_clickedCloseButton, _PfSearchInput_setExpanded, _PfSearchInput_combobox, _PfSearchInput_doExpand, _PfSearchInput_doCollapse, _PfSearchInput_onClickCloseButton, _PfSearchInput_hideCloseButton, _PfSearchInput_onChange, _PfSearchInput_onSubmit, _PfSearchInput_updateValue, _PfSearchInput_onKeyDown, _PfSearchInput_showListbox, _PfSearchInput_setItemSelected, _PfSearchInput_setItemActive, _PfSearchInput_setIsExpanded;
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
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { PfOption } from '../pf-select/pf-option.js';
import { css } from "lit";
const styles = css `:host {
  font-family: var(--pf-global--FontFamily--sans-serif, "RedHatTextUpdated", "Overpass", overpass, helvetica, arial, sans-serif);
  font-size: var(--pf-global--FontSize--md, 16px);
  font-weight: var(--pf-global--FontWeight--normal, 400);
  color: var(--pf-global--Color--100, #151515);
  --_pf-option-checkboxes-display: none;
  --_pf-option-svg-display: block;
  --pf-c-search-input__toggle--PaddingTop: var(--pf-global--spacer--form-element, 0.375rem);
  --pf-c-search-input__toggle--PaddingRight: var(--pf-global--spacer--sm, 0.5rem);
  --pf-c-search-input__toggle--PaddingBottom: var(--pf-global--spacer--form-element, 0.375rem);
  --pf-c-search-input__toggle--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);
  --pf-c-search-input__toggle--MinWidth: var(--pf-global--target-size--MinWidth, 44px);
  --pf-c-search-input__toggle--FontSize: var(--pf-global--FontSize--md, 1rem);
  --pf-c-search-input__toggle--FontWeight: var(--pf-global--FontWeight--normal, 400);
  --pf-c-search-input__toggle--LineHeight: var(--pf-global--LineHeight--md, 1.5);
  --pf-c-search-input__toggle--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
  --pf-c-search-input__toggle--before--BorderTopWidth: var(--pf-global--BorderWidth--sm, 1px);
  --pf-c-search-input__toggle--before--BorderRightWidth: var(--pf-global--BorderWidth--sm, 1px);
  --pf-c-search-input__toggle--before--BorderBottomWidth: var(--pf-global--BorderWidth--sm, 1px);
  --pf-c-search-input__toggle--before--BorderLeftWidth: var(--pf-global--BorderWidth--sm, 1px);
  --pf-c-search-input__toggle--before--BorderWidth: initial;
  --pf-c-search-input__toggle--before--BorderTopColor: var(--pf-global--BorderColor--300, #f0f0f0);
  --pf-c-search-input__toggle--before--BorderRightColor: var(--pf-global--BorderColor--300, #f0f0f0);
  --pf-c-search-input__toggle--before--BorderBottomColor: var(--pf-global--BorderColor--200, #8a8d90);
  --pf-c-search-input__toggle--before--BorderLeftColor: var(--pf-global--BorderColor--300, #f0f0f0);
  --pf-c-search-input__toggle--Color: var(--pf-global--Color--100, #151515);
  --pf-c-search-input__toggle--hover--before--BorderBottomColor: var(--pf-global--active-color--100, #06c);
  --pf-c-search-input__toggle--focus--before--BorderBottomColor: var(--pf-global--active-color--100, #06c);
  --pf-c-search-input__toggle--focus--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
  --pf-c-search-input__toggle--active--before--BorderBottomColor: var(--pf-global--active-color--100, #06c);
  --pf-c-search-input__toggle--active--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
  --pf-c-search-input__toggle--m-expanded--before--BorderBottomColor: var(--pf-global--active-color--100, #06c);
  --pf-c-search-input__toggle--m-expanded--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
  --pf-c-search-input__toggle--disabled--BackgroundColor: var(--pf-global--disabled-color--300, #f0f0f0);
  --pf-c-search-input__toggle--m-plain--before--BorderColor: transparent;
  --pf-c-search-input__toggle--m-placeholder--Color: transparent;
  --pf-c-search-input--m-invalid__toggle--before--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);
  --pf-c-search-input--m-invalid__toggle--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
  --pf-c-search-input--m-invalid__toggle--hover--before--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);
  --pf-c-search-input--m-invalid__toggle--focus--before--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);
  --pf-c-search-input--m-invalid__toggle--active--before--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);
  --pf-c-search-input--m-invalid__toggle--m-expanded--before--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);
  --pf-c-search-input--m-invalid__toggle-status-icon--Color: var(--pf-global--danger-color--100, #c9190b);
  --pf-c-search-input--m-success__toggle--before--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);
  --pf-c-search-input--m-success__toggle--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
  --pf-c-search-input--m-success__toggle--hover--before--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);
  --pf-c-search-input--m-success__toggle--focus--before--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);
  --pf-c-search-input--m-success__toggle--active--before--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);
  --pf-c-search-input--m-success__toggle--m-expanded--before--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);
  --pf-c-search-input--m-success__toggle-status-icon--Color: var(--pf-global--success-color--100, #3e8635);
  --pf-c-search-input--m-warning__toggle--before--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);
  --pf-c-search-input--m-warning__toggle--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
  --pf-c-search-input--m-warning__toggle--hover--before--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);
  --pf-c-search-input--m-warning__toggle--focus--before--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);
  --pf-c-search-input--m-warning__toggle--active--before--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);
  --pf-c-search-input--m-warning__toggle--m-expanded--before--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);
  --pf-c-search-input--m-warning__toggle-status-icon--Color: var(--pf-global--warning-color--100, #f0ab00);
  --pf-c-search-input__toggle-wrapper--not-last-child--MarginRight: var(--pf-global--spacer--xs, 0.25rem);
  --pf-c-search-input__toggle-wrapper--MaxWidth: calc(100% - var(--pf-global--spacer--lg, 1.5rem));
  --pf-c-search-input__toggle--m-placeholder__toggle-text--Color: var(--pf-global--Color--dark-200, #6a6e73);
  --pf-c-search-input__toggle-icon--toggle-text--MarginLeft: var(--pf-global--spacer--xs, 0.25rem);
  --pf-c-search-input__toggle-status-icon--MarginLeft: var(--pf-global--spacer--xs, 0.25rem);
  --pf-c-search-input__toggle-status-icon--Color: var(--pf-global--Color--100, #151515);
  --pf-c-search-input--m-plain__toggle-arrow--Color: var(--pf-global--Color--200, #6a6e73);
  --pf-c-search-input--m-plain--hover__toggle-arrow--Color: var(--pf-global--Color--100, #151515);
  --pf-c-search-input__toggle-clear--PaddingRight: var(--pf-global--spacer--sm, 0.5rem);
  --pf-c-search-input__toggle-clear--PaddingLeft: var(--pf-global--spacer--md, 1rem);
  --pf-c-search-input__toggle-clear--toggle-button--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);
  --pf-c-search-input__toggle-button--Color: var(--pf-global--Color--100, #151515);
  --pf-c-search-input__list-item--m-loading--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);
  --pf-c-search-input__menu-content--MaxHeight: 20rem;
}

:host,
#outer {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  inline-size: 100%;
}

:host([hidden]),
*[hidden] {
  display: none !important;
}

:host([aria-disabled="true"]) {
  pointer-events: none;
  cursor: not-allowed;
}

#outer.disabled {
  color: var(--pf-global--Color--dark-200, #6a6e73);
}

#outer {
  position: relative;
}

#listbox-container {
  display: inline-flex;
  position: absolute;
  background-color: var(--pf-theme--color--surface--lightest, #fff) !important;
  opacity: 0;
  --_active-descendant-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;
  box-shadow: 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06);
}

#outer.expanded #listbox-container {
  opacity: 1;
  z-index: 9999 !important;
  max-block-size: var(--pf-c-search-input__menu-content--MaxHeight, 20rem);
  overflow-y: scroll;
}

#listbox {
  display: flex;
  flex-direction: column;
  position: relative;
  inline-size: 100%;
}

#listbox slot.disabled {
  color: var(--pf-c-list__item-icon--Color, #6a6e73) !important;
  background-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;
  border-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;
  pointer-events: none;
  cursor: not-allowed;
  
  --_active-descendant-color: transparent;
  --_svg-color: var(--pf-c-list__item-icon--Color, #6a6e73) !important;
}

#toggle {
  background-color: var(--pf-c-search-input__toggle--BackgroundColor, #fff) !important;
}

#toggle,
#toggle-input {
  display: flex;
  font-family: var(--pf-global--FontFamily--sans-serif, "RedHatTextUpdated", "Overpass", overpass, helvetica, arial, sans-serif);
  font-size: var(--pf-c-search-input__toggle--FontSize, 1rem);
  font-weight: var(--pf-c-search-input__toggle--FontWeight, 400);
  line-height: var(--pf-c-search-input__toggle--LineHeight, 1.5);
}

#toggle {
  border: 1px solid var(--pf-global--BorderColor--100, #d2d2d2);
  border-bottom-color: var(--pf-theme--color--text, #151515);
  justify-content: space-between;
}

.disabled #toggle {
  color: var(--pf-global--Color--dark-200, #6a6e73) !important;
  background-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;
  border-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;
  caret-color: transparent;
}

#toggle-input {
  background: transparent;
  border: none;
  text-align: left;
  border-radius: 0;
  padding-inline-start: 3rem;
}

#toggle-input {
  justify-content: space-between;
  inline-size: 100%;
  box-sizing: border-box;
  block-size: 2.25rem;
}

.disabled #toggle-input {
  pointer-events: none;
  cursor: not-allowed;
}

.close-button {
  --pf-c-button--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);
  --pf-c-button--PaddingRight: var(--pf-global--spacer--sm, 0.5rem);
  --pf-c-button--PaddingTop: var(--pf-global--spacer--xs, 0.25rem);
  --pf-c-button--PaddingBottom: var(--pf-global--spacer--xs, 0.25rem);

  color: currentColor;
  background-color: transparent;
  max-block-size: 2.25rem;
  max-inline-size: 2.25rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px;
  position: relative;

  pf-icon {
    position: relative;
    inset-block-start: 5px;
  }
}

.close-button-container {
  block-size: 2.25rem;
  inline-size: 2.25rem;
}

#toggle-text {
  flex: 1 1 auto;
}

#description {
  display: block;
}

#listbox.checkboxes {
  --_pf-option-checkboxes-display: none;
  --_pf-option-svg-display: none;
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

::slotted(hr) {
  --pf-c-divider--BorderWidth--base: var(--pf-global--BorderWidth--sm, 1px);
  --pf-c-divider--BorderColor--base: var(--pf-c-divider--BackgroundColor);
  --pf-c-divider--Height: var(--pf-c-divider--BorderWidth--base);
  --pf-c-divider--BackgroundColor: var(--pf-global--BorderColor--100, #d2d2d2);
  --pf-c-divider--after--BackgroundColor: var(--pf-c-divider--BorderColor--base);
  --pf-c-divider--after--FlexBasis: 100%;
  --pf-c-divider--after--Inset: 0%;
  --pf-c-divider--m-vertical--after--FlexBasis: 100%;
  --pf-c-divider--m-horizontal--Display: flex;
  --pf-c-divider--m-horizontal--FlexDirection: row;
  --pf-c-divider--m-horizontal--after--Height: var(--pf-c-divider--Height);
  --pf-c-divider--m-horizontal--after--Width: auto;
  --pf-c-divider--m-vertical--Display: inline-flex;
  --pf-c-divider--m-vertical--FlexDirection: column;
  --pf-c-divider--m-vertical--after--Height: auto;
  --pf-c-divider--m-vertical--after--Width: var(--pf-c-divider--BorderWidth--base);
  --pf-hidden-visible--visible--Display: var(--pf-c-divider--Display);
  --pf-c-divider--Display: var(--pf-c-divider--m-horizontal--Display);
  --pf-c-divider--FlexDirection: var(--pf-c-divider--m-horizontal--FlexDirection);
  --pf-c-divider--after--Width: var(--pf-c-divider--m-horizontal--after--Width);
  --pf-c-divider--after--Height: var(--pf-c-divider--m-horizontal--after--Height);
  display: var(--pf-c-divider--Display, flex);
  flex-direction: var(--pf-c-divider--FlexDirection);
  border: 0;
  inline-size: 100%;
  margin-top: var(--pf-c-search-input-menu--c-divider--MarginTop);
  margin-bottom: var(--pf-c-search-input-menu--c-divider--MarginBottom);
}

::slotted(hr)::after {
  content: '';
  inline-size: var(--pf-c-divider--after--Width, 100%) !important;
  block-size: var(--pf-c-divider--after--Height, 1px);
  background-color: var(--pf-c-divider--after--BackgroundColor);
  flex: 1 0 100%;
}

div.search-icon {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: var(--pf-global--spacer--md, 1rem);
  transform: translateY(-50%);
  display: flex;
  align-items: center;
}

#outer:focus-within {
  #toggle {
    border-bottom: none;
    border-bottom-left-radius: 4px;

    #toggle-input {
      border-bottom: var(--pf-global--spacer--xs, 0.125rem) solid var(--pf-theme--color--accent, #0066cc);
    }
  }

  .close-button-container {
    position: relative;

    &::after {
      content: '';
      inline-size: 36px;
      block-size: var(--pf-global--spacer--xs, 0.125rem);
      inset-block-end: 0px;
      inset-inline-start: 0px;
      background-color: var(--pf-theme--color--accent, #0066cc);
      position: absolute;
    }
  }
}

::slotted(pf-option[selected]) {
  --_pf-option-svg-display: none;
  --_pf-option-selected-background-color: var(--pf-global--BackgroundColor--100, #fff);
}`;
/** Fired when a `<pf-search-input>` element's value changes */
export class PfSearchChangeEvent extends Event {
    constructor() {
        super('change', { bubbles: true });
    }
}
let PfSearchInput = class PfSearchInput extends LitElement {
    constructor() {
        super(...arguments);
        _PfSearchInput_instances.add(this);
        /** Whether the search input is disabled */
        this.disabled = false;
        /** Whether the search input's listbox is expanded */
        this.expanded = false;
        /**
         * Indicates initial popover position.
         * There are 6 options: `bottom`, `top`, `top-start`, `top-end`, `bottom-start`, `bottom-end`.
         * Default is `bottom`.
         */
        this.position = 'bottom';
        _PfSearchInput_internals.set(this, InternalsController.of(this));
        _PfSearchInput_float.set(this, new FloatingDOMController(this, { content: () => this._listboxContainer }));
        _PfSearchInput_slots.set(this, new SlotController(this, null, 'placeholder'));
        /** True when the user just clicked the close button */
        _PfSearchInput_clickedCloseButton.set(this, false);
        _PfSearchInput_setExpanded.set(this, false);
        _PfSearchInput_combobox.set(this, ComboboxController.of(this, {
            getItems: () => this.options,
            getFallbackLabel: () => this.accessibleLabel
                || __classPrivateFieldGet(this, _PfSearchInput_internals, "f").computedLabelText
                || this.placeholder
                || __classPrivateFieldGet(this, _PfSearchInput_slots, "f").getSlotted('placeholder').map(x => x.textContent).join(''),
            getListboxElement: () => this._listbox ?? null,
            getToggleButton: () => this._toggleButton ?? null,
            getComboboxInput: () => this._toggleInput ?? null,
            isExpanded: () => __classPrivateFieldGet(this, _PfSearchInput_instances, "m", _PfSearchInput_setIsExpanded).call(this),
            requestShowListbox: () => __classPrivateFieldGet(this, _PfSearchInput_instances, "m", _PfSearchInput_showListbox).call(this),
            requestHideListbox: () => void (this.expanded && (this.expanded = false)),
            setItemHidden: (item, hidden) => (item.id !== 'placeholder') && void (item.hidden = hidden),
            isItem: item => item instanceof PfOption,
            setItemActive: (item, active) => __classPrivateFieldGet(this, _PfSearchInput_instances, "m", _PfSearchInput_setItemActive).call(this, item, active),
            setItemSelected: (item, selected) => __classPrivateFieldGet(this, _PfSearchInput_instances, "m", _PfSearchInput_setItemSelected).call(this, item, selected),
        }));
    }
    connectedCallback() {
        super.connectedCallback();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    /** List of options */
    get options() {
        if (isServer) {
            return []; // TODO: expose a DOM property to allow setting options in SSR scenarios
        }
        else {
            return [
                this._placeholder,
                ...Array.from(this.querySelectorAll('pf-option')),
            ].filter((x) => !!x && !x.hidden);
        }
    }
    render() {
        const { disabled, expanded, placeholder } = this;
        const { anchor = 'bottom', alignment = 'start', styles = {} } = __classPrivateFieldGet(this, _PfSearchInput_float, "f");
        const { height, width } = this.getBoundingClientRect?.() || {};
        return html `
      <div id="outer"
           style="${styleMap(styles)}"
           class="${classMap({ disabled, expanded, [anchor]: !!anchor, [alignment]: !!alignment })}">
        <div id="toggle">
          <div class="search-icon">
            <pf-icon size="md" icon="search" set="fas">search</pf-icon>
          </div>
          <input id="toggle-input"
                 aria-disabled="${disabled}"
                 placeholder="${placeholder}"
                 @input="${__classPrivateFieldGet(this, _PfSearchInput_instances, "m", _PfSearchInput_onChange)}"
                 @keyup="${__classPrivateFieldGet(this, _PfSearchInput_instances, "m", _PfSearchInput_onSubmit)}"
                 @keydown="${__classPrivateFieldGet(this, _PfSearchInput_instances, "m", _PfSearchInput_onKeyDown)}">
          <div class="close-button-container">
            <pf-button id="toggle-button"
                       class="close-button"
                       plain
                       label="Close"
                       ?hidden="${__classPrivateFieldGet(this, _PfSearchInput_instances, "m", _PfSearchInput_hideCloseButton).call(this)}"
                       @click="${__classPrivateFieldGet(this, _PfSearchInput_instances, "m", _PfSearchInput_onClickCloseButton)}">
              <pf-icon size="md"
                       icon="close"
                       set="patternfly">close</pf-icon>
            </pf-button>
          </div>
        </div>
        <div id="listbox-container"
             ?hidden="${!expanded}"
             tabindex="-1"
             style="${styleMap({
            marginTop: `${height || 0}px`,
            width: width ? `${width}px` : 'auto',
        })}">
          <div id="listbox">
            ${__classPrivateFieldGet(this, _PfSearchInput_combobox, "f").renderItemsToShadowRoot()}
            <!-- insert \`<pf-option>\` and/or \`<pf-option-groups>\` here -->
            <slot ?hidden="${!ComboboxController.supportsCrossRootActiveDescendant}"></slot>
          </div>
        </div>
      </div>
    `;
    }
    disabledChanged() {
        __classPrivateFieldGet(this, _PfSearchInput_combobox, "f").disabled = this.disabled;
    }
    async expandedChanged(old, expanded) {
        if (this.dispatchEvent(new Event(this.expanded ? 'close' : 'open'))) {
            if (expanded) {
                __classPrivateFieldGet(this, _PfSearchInput_instances, "m", _PfSearchInput_doExpand).call(this);
            }
            else {
                __classPrivateFieldGet(this, _PfSearchInput_instances, "m", _PfSearchInput_doCollapse).call(this);
            }
        }
    }
    valueChanged() {
        __classPrivateFieldGet(this, _PfSearchInput_internals, "f").setFormValue(this.value ?? '');
        this.dispatchEvent(new PfSearchChangeEvent());
    }
    /**
     * Opens the dropdown
     */
    async show() {
        this.expanded = true;
        await this.updateComplete;
    }
    /**
     * Closes listbox
     */
    async hide() {
        this.expanded = false;
        await this.updateComplete;
    }
    /**
     * toggles popup based on current state
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
_PfSearchInput_internals = new WeakMap();
_PfSearchInput_float = new WeakMap();
_PfSearchInput_slots = new WeakMap();
_PfSearchInput_clickedCloseButton = new WeakMap();
_PfSearchInput_setExpanded = new WeakMap();
_PfSearchInput_combobox = new WeakMap();
_PfSearchInput_instances = new WeakSet();
_PfSearchInput_doExpand = async function _PfSearchInput_doExpand() {
    try {
        await __classPrivateFieldGet(this, _PfSearchInput_float, "f").show({ placement: this.position || 'bottom', flip: true });
        return true;
    }
    catch {
        return false;
    }
};
_PfSearchInput_doCollapse = async function _PfSearchInput_doCollapse() {
    try {
        await __classPrivateFieldGet(this, _PfSearchInput_float, "f").hide();
        return true;
    }
    catch {
        return false;
    }
};
_PfSearchInput_onClickCloseButton = function _PfSearchInput_onClickCloseButton() {
    this._toggleInput.value = '';
    __classPrivateFieldGet(this, _PfSearchInput_instances, "m", _PfSearchInput_updateValue).call(this, this._toggleInput?.value ?? '');
    __classPrivateFieldSet(this, _PfSearchInput_clickedCloseButton, true, "f");
    this._toggleInput?.focus();
};
_PfSearchInput_hideCloseButton = function _PfSearchInput_hideCloseButton() {
    if (!isServer) {
        return !this.expanded && this._toggleInput?.value.trim() === ''; // SSR or server-side environment: don't hide the element
    }
    return false;
};
_PfSearchInput_onChange = function _PfSearchInput_onChange() {
    __classPrivateFieldGet(this, _PfSearchInput_instances, "m", _PfSearchInput_updateValue).call(this, this._toggleInput?.value ?? '');
};
_PfSearchInput_onSubmit = function _PfSearchInput_onSubmit(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        this.dispatchEvent(new PfSearchChangeEvent());
    }
};
_PfSearchInput_updateValue = function _PfSearchInput_updateValue(value) {
    this.value = value;
    // it's necessary to reset the 'selected' state of combobox
    // since otherwise, combobox controller will attempt to prevent us from
    // re-selecting the last-selected item, even though pf-search-input
    // doesn't have a selected property
    __classPrivateFieldGet(this, _PfSearchInput_combobox, "f").selected = [];
};
_PfSearchInput_onKeyDown = function _PfSearchInput_onKeyDown(event) {
    const target = event.target;
    if (target?.getAttribute('aria-disabled') === 'true') {
        // Allow Tab and Shift+Tab to move focus
        if (event.key === 'Tab') {
            return;
        }
        event.preventDefault();
        event.stopImmediatePropagation();
    }
};
_PfSearchInput_showListbox = async function _PfSearchInput_showListbox() {
    await new Promise(requestAnimationFrame);
    if (this.disabled) {
        return;
    }
    ;
    if (__classPrivateFieldGet(this, _PfSearchInput_setExpanded, "f")) {
        // If expanded is set to true on clicking close button
        // set expanded to false
        __classPrivateFieldSet(this, _PfSearchInput_setExpanded, false, "f");
        this.expanded = false;
    }
    else {
        this.expanded || (this.expanded = true);
    }
};
_PfSearchInput_setItemSelected = function _PfSearchInput_setItemSelected(item, selected) {
    item.selected = selected;
    if (selected) {
        this._toggleInput.value = item.value;
        __classPrivateFieldGet(this, _PfSearchInput_instances, "m", _PfSearchInput_updateValue).call(this, this._toggleInput?.value ?? '');
    }
};
_PfSearchInput_setItemActive = function _PfSearchInput_setItemActive(item, active) {
    item.active = active;
    if (this.expanded && active) {
        item?.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'nearest' });
    }
};
_PfSearchInput_setIsExpanded = function _PfSearchInput_setIsExpanded() {
    if (__classPrivateFieldGet(this, _PfSearchInput_clickedCloseButton, "f")) {
        __classPrivateFieldSet(this, _PfSearchInput_clickedCloseButton, false, "f");
        __classPrivateFieldSet(this, _PfSearchInput_setExpanded, true, "f");
        return true;
    }
    return this.expanded;
};
PfSearchInput.styles = [styles];
PfSearchInput.formAssociated = true;
PfSearchInput.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
PfSearchInput.version = "4.3.0";
__decorate([
    property({ attribute: 'accessible-label' })
], PfSearchInput.prototype, "accessibleLabel", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfSearchInput.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfSearchInput.prototype, "expanded", void 0);
__decorate([
    property()
], PfSearchInput.prototype, "value", void 0);
__decorate([
    property()
], PfSearchInput.prototype, "placeholder", void 0);
__decorate([
    property({ reflect: true })
], PfSearchInput.prototype, "position", void 0);
__decorate([
    query('#toggle-input')
], PfSearchInput.prototype, "_toggleInput", void 0);
__decorate([
    query('#toggle-button')
], PfSearchInput.prototype, "_toggleButton", void 0);
__decorate([
    query('#listbox')
], PfSearchInput.prototype, "_listbox", void 0);
__decorate([
    query('#listbox-container')
], PfSearchInput.prototype, "_listboxContainer", void 0);
__decorate([
    query('#placeholder')
], PfSearchInput.prototype, "_placeholder", void 0);
__decorate([
    observes('disabled')
], PfSearchInput.prototype, "disabledChanged", null);
__decorate([
    observes('expanded')
], PfSearchInput.prototype, "expandedChanged", null);
__decorate([
    observes('value')
], PfSearchInput.prototype, "valueChanged", null);
PfSearchInput = __decorate([
    customElement('pf-search-input')
], PfSearchInput);
export { PfSearchInput };
//# sourceMappingURL=pf-search-input.js.map