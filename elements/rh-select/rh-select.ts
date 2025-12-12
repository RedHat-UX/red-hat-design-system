import type { Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';

import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { ComboboxController } from '@patternfly/pfe-core/controllers/combobox-controller.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { FloatingDOMController } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';

import { arraysAreEquivalent } from '@patternfly/pfe-core/functions/arraysAreEquivalent.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { RhOption } from './rh-option.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-select.css';

export class RhSelectChangeEvent extends Event {
  constructor() {
    super('change', { bubbles: true });
  }
}

/**
 * A select list enables users to select one or more items from a list.
 *
 * @summary enables users to select one or more items from a list
 *
 * A select component consists of a toggle control to open and close a menu of actions or links.
 * Selects differ from dropdowns in that they persist selection,
 * whereas dropdowns are typically used to present a list of actions or links.
 * @alias select
 * @fires open - when the menu toggles open
 * @fires close - when the menu toggles closed
 */
@customElement('rh-select')
export class RhSelect extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  static readonly formAssociated = true;

  static override readonly shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /** Accessible label for the select */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  /** Whether the select is disabled */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Whether the select listbox is expanded */
  @property({ type: Boolean, reflect: true }) expanded = false;

  /**
   * Enable to flip listbox when it reaches boundary
   */
  @property({ attribute: 'enable-flip', type: Boolean }) enableFlip = false;

  /** Current form value */
  @property() value?: string;

  /** Placeholder entry. Overridden by the `placeholder` slot */
  @property() placeholder?: string;

  /**
   * Indicates initial popover position.
   * There are 6 options: `bottom`, `top`, `top-start`, `top-end`, `bottom-start`, `bottom-end`.
   * Default is `bottom`.
   */
  @property({ reflect: true }) position: Placement = 'bottom';

  @query('#toggle-button') private _toggleButton?: HTMLButtonElement;

  @query('#listbox') private _listbox?: HTMLElement;

  @query('#listbox-container') private _listboxContainer?: HTMLElement;

  @query('#placeholder') private _placeholder?: RhOption;

  #isNotPlaceholderOption = (option: RhOption) => option !== this._placeholder;

  #internals = InternalsController.of(this);

  #float = new FloatingDOMController(this, { content: () => this._listboxContainer });

  #slots = new SlotController(this, null, 'placeholder');

  #combobox = ComboboxController.of(this, {
    getItems: () => this.options,
    getFallbackLabel: () => this.accessibleLabel
                         || this.#internals.computedLabelText
                         || this.placeholder
                         || this.#slots.getSlotted('placeholder').map(x => x.textContent).join(''),
    getListboxElement: () => this._listbox ?? null,
    getToggleButton: () => this._toggleButton ?? null,
    getComboboxInput: () => null,
    isExpanded: () => this.expanded,
    requestShowListbox: () => void (this.expanded ||= true),
    requestHideListbox: () => void (this.expanded &&= false),
    setItemHidden: (item, hidden) => (item.id !== 'placeholder') && void (item.hidden = hidden),
    isItem: item => item instanceof RhOption,
    setItemSelected: (item, selected) => item.selected = selected,
  });

  /**
   * The currently selected option.
   */
  @property({ hasChanged: (a, b) => !arraysAreEquivalent(a, b) })
  set selected(selected: RhOption | RhOption[]) {
    const list = Array.isArray(selected) ? selected : [selected];
    this.#combobox.selected = list;
  }

  get selected(): RhOption[] {
    return this.#combobox.selected;
  }

  /** List of options */
  get options(): RhOption[] {
    if (isServer) {
      return []; // TODO: expose a DOM property to allow setting options in SSR scenarios
    } else {
      return [
        this._placeholder,
        ...Array.from(this.querySelectorAll('rh-option')),
      ].filter((x): x is RhOption => !!x && !x.hidden);
    }
  }

  get #buttonLabel(): string {
    const { selected } = this.#combobox;
    return (selected ? this.value : '')
      || this.#computePlaceholderText()
      || 'Select a value';
  }

  override render() {
    const { disabled, expanded, placeholder } = this;
    const { anchor = 'bottom', alignment = 'start', styles = {} } = this.#float;
    const { height, width } = this.getBoundingClientRect?.() || {};
    const hasSelection = !!(Array.isArray(this.selected) ? this.selected.length : this.selected);
    const hideLightDomItems = !ComboboxController.supportsCrossRootActiveDescendant;
    const placeholderIsInert = !placeholder && this.#slots.isEmpty('placeholder');
    return html`
      <div id="outer"
           style="${styleMap(styles)}"
           class="${classMap({ disabled, expanded, [anchor]: !!anchor, [alignment]: !!alignment })}">
        <div id="toggle">
          <button id="toggle-button">
            <span id="toggle-text">
              ${this.#buttonLabel}
            </span>
            <rh-icon id="toggle-icon" set="microns" icon="caret-down-fill"></rh-icon>
          </button>
        </div>
        <div id="listbox-container"
             ?hidden="${!expanded}"
             style="${styleMap({
               marginBlockStart: `${height + 4 || 0}px`,
               inlineSize: width ? `${width - 1}px` : 'auto',
             })}">
          <div id="listbox">
            <rh-option id="placeholder"
                       disabled
                       ?inert="${placeholderIsInert}"
                       aria-hidden="${ifDefined(placeholderIsInert ? undefined : !!hasSelection)}"
                       ?hidden="${!placeholder && this.#slots.isEmpty('placeholder')}">
              <!-- placeholder text for the select. Overrides the \`placeholder\` attribute. -->
              <slot name="placeholder">${placeholder ?? ''}</slot>
            </rh-option>
            ${this.#combobox.renderItemsToShadowRoot()}
            <!-- insert \`rh-option\` and/or \`rh-option-groups\` here -->
            <slot ?hidden="${hideLightDomItems}"></slot>
          </div>
        </div>
      </div>
    `;
  }

  @observes('disabled')
  private disabledChanged() {
    this.#combobox.disabled = this.disabled;
  }

  @observes('expanded')
  private async expandedChanged(old: boolean, expanded: boolean) {
    if (this.dispatchEvent(new Event(this.expanded ? 'close' : 'open'))) {
      if (expanded) {
        this.#doExpand();
      } else {
        this.#doCollapse();
        this._toggleButton?.focus();
      }
    }
  }

  @observes('selected')
  private async selectedChanged(_: RhOption[], selected: RhOption[]) {
    this.value = selected.map(x => x.value).join();
    await this.updateComplete;
    this.hide();
  }

  @observes('value')
  private valueChanged() {
    this.#internals.setFormValue(this.value ?? '');
    this.dispatchEvent(new RhSelectChangeEvent());
  }

  async #doExpand() {
    try {
      await this.#float.show({ placement: this.position || 'bottom', flip: !!this.enableFlip });
      return true;
    } catch {
      return false;
    }
  }

  async #doCollapse() {
    try {
      await this.#float.hide();
      return true;
    } catch {
      return false;
    }
  }

  #computePlaceholderText() {
    return this.placeholder
      || this.querySelector?.<HTMLSlotElement>('[slot=placeholder]')
          ?.assignedNodes()
          ?.reduce((acc, node) => `${acc}${node.textContent}`, '')
          ?.trim()
      || this.#combobox.items
          .filter(this.#isNotPlaceholderOption)
          .at(0)
          ?.value
      || '';
  }

  /**
   * Opens the dropdown
   */
  async show(): Promise<void> {
    this.expanded = true;
    await this.updateComplete;
  }

  /**
   * Closes the dropdown
   */
  async hide(): Promise<void> {
    this.expanded = false;
    await this.updateComplete;
  }

  /**
   * Toggles the dropdown based on current state
   */
  async toggle(): Promise<void> {
    if (this.expanded) {
      await this.hide();
    } else {
      await this.show();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-select': RhSelect;
  }
}
