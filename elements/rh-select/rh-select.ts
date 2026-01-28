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

import { RhOption } from './rh-option.js';
import './rh-option-group.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-select.css';

/**
 * Event type for the `change` event from rh-select. rh-select shall dispatch
 * this event when the selected value changes (e.g. after the user picks an
 * option or the value is updated programmatically). The event shall bubble.
 * Listeners should use this type when handling change.
 * @summary Event fired when the select value changes
 */
export class RhSelectChangeEvent extends Event {
  constructor() {
    super('change', { bubbles: true });
  }
}

/**
 * An control for selecting from a list of options. Must contain rh-option children, optionally
 * grouped with rh-option-group. Supports keyboard navigation, type-to-select search, and form
 * integration. Should include an associated label or accessible label for screen reader support.
 * @summary A control that provides a menu of options
 * @alias select
 * @fires open - when the menu toggles open
 * @fires close - when the menu toggles closed
 * @fires change - when the value of the select changes
 */
@customElement('rh-select')
export class RhSelect extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  static readonly formAssociated = true;

  static override readonly shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /**
   * Accessible label text for screen readers and assistive technologies.
   * Should be used when the select lacks an associated `<label>` element.
   * Required for accessibility compliance when no visible label is present.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  /**
   * Whether the select control is disabled and non-interactive.
   * When true, prevents user interaction and excludes the value from form submission.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * Whether the dropdown listbox is currently expanded and visible.
   * Automatically managed by keyboard and mouse interactions. Should not be
   * manually set in most cases.
   */
  @property({ type: Boolean, reflect: true }) expanded = false;

  /**
   * Current form value representing the selected option's value attribute.
   * Updates automatically when selection changes. Use for form submission
   * and programmatic value access.
   */
  @property() value?: string;

  /**
   * Placeholder text displayed when no option is selected.
   * Should provide guidance about expected input. Overridden by the placeholder
   * slot if provided. Used as fallback accessible label when no accessible-label
   * or associated label is present.
   */
  @property() placeholder?: string;

  /**
   * Visual and semantic state of the form control for user feedback.
   * Use 'danger' for blocking errors that prevent form submission, 'warning' for
   * non-blocking issues requiring attention, and 'success' for valid selections.
   * Affects styling.
   */
  @property({ reflect: true }) state?: 'danger' | 'success' | 'warning';

  /**
   * The currently selected rh-option element. Accepts a single option.
   * Setting this property programmatically updates the visual selection and form value.
   */
  @property({ hasChanged: (a, b) => !arraysAreEquivalent(a, b) })
  set selected(selected: RhOption | RhOption[]) {
    const list = Array.isArray(selected) ? selected : [selected];
    this.#combobox.selected = list;
  }

  get selected(): RhOption[] {
    return this.#combobox.selected;
  }

  #options: RhOption[] = [];

  /** List of options */
  get options(): RhOption[] {
    return this.#options;
  }

  set options(v: RhOption[]) {
    this.#options = [];
    this.requestUpdate('options', null);
  }

  @query('#toggle-button') private _toggleButton?: HTMLButtonElement;

  @query('#listbox') private _listbox?: HTMLElement;

  @query('#listbox-container') private _listboxContainer?: HTMLElement;

  @query('#placeholder') private _placeholder?: RhOption;

  #internals = InternalsController.of(this);

  #float = new FloatingDOMController(this, { content: () => this._listboxContainer });

  #slots = new SlotController(this, null, 'placeholder', 'help-text');

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

  // Type-ahead state for printable character navigation
  #searchString = '';

  #searchTimeout: number | undefined;

  // Tracks the last typed character to detect repeated chars for cycling behavior
  #lastSearchChar = '';

  #typeAheadFocusPending = false;

  #lastSearchWasCycling = false;

  #isNotPlaceholderOption = (option: RhOption) => option !== this._placeholder;

  /**
   * Update options list when rh-option elements are added/removed from the default slot.
   */
  #onSlotchange() {
    if (!isServer) {
      const newOptions = [
        this._placeholder,
        ...Array.from(this.querySelectorAll('rh-option')),
      ].filter((x): x is RhOption => !!x && !x.hidden);
      this.#options = newOptions;
      // Sync combobox so keyboard nav sees new options
      this.#combobox.items = this.options;
    }
  }

  /**
   * Intercept the space key during type-ahead.
   * This runs before the ComboboxController's handler, allowing us to prevent
   * the space key from being treated as a selection action (and causing the listbox to close).
   * @param event - The keyboard event to check for space key
   */
  #captureKeydown = (event: KeyboardEvent) => {
    // Only intercept space key during an active type-ahead session
    if (event.key === ' ' && this.#searchTimeout !== undefined) {
      // Prevent ComboboxController from treating this as a selection action
      event.stopPropagation();
      event.preventDefault();
      // Since stopPropagation prevents the bubble-phase handler from receiving
      // this event, we must directly process the space as a type-ahead character
      this.#handleTypeAhead(' ');
    }
  };

  get #buttonLabel(): string {
    const { selected } = this.#combobox;
    const selectedLabels = selected
        .map(opt => opt.displayLabel)
        .filter(Boolean)
        .join(', ');

    return selectedLabels
      || this.#computePlaceholderText()
      || 'Select a value';
  }

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this.#captureKeydown, { capture: true });
    if (!isServer) {
      this.#options = [
        this._placeholder,
        ...Array.from(this.querySelectorAll('rh-option')),
      ].filter((x): x is RhOption => !!x && !x.hidden);
    }
  }

  override render() {
    const { disabled, expanded, placeholder } = this;
    const { anchor = 'bottom', alignment = 'start', styles = {} } = this.#float;
    const { height = 0, width = 0 } = isServer ? {} : (this.getBoundingClientRect?.() ?? {});
    const hasSelection = !!(Array.isArray(this.selected) ? this.selected.length : this.selected);
    const hideHelpText = this.#slots.isEmpty('help-text');
    const placeholderIsInert = !placeholder && this.#slots.isEmpty('placeholder');
    const listboxOffsetWithoutHelpText = `${height + 4 || 0}px`;
    const listboxOffsetWithHelpText = `${height - 25 || 0}px`;
    const listboxMarginBlockStart = !hideHelpText ?
      listboxOffsetWithHelpText : listboxOffsetWithoutHelpText;
    return html`
      <div id="outer"
           style="${styleMap(styles)}"
           class="${classMap({ disabled, expanded, [anchor]: !!anchor, [alignment]: !!alignment })}">
        <div id="toggle">
          <button id="toggle-button"
                  type="button"
                  @keydown="${this.#onKeydown}">
            <span id="toggle-text">
              ${this.#buttonLabel}
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
               @keydown="${this.#onKeydown}">
            <rh-option id="placeholder"
                       disabled
                       ?inert="${placeholderIsInert || hasSelection}"
                       ?hidden="${!placeholder && this.#slots.isEmpty('placeholder')}">
              <!-- placeholder text for the select. Overrides the \`placeholder\` attribute. -->
              <slot name="placeholder">${placeholder ?? ''}</slot>
            </rh-option>
            ${this.#combobox.renderItemsToShadowRoot()}
            <!-- insert \`rh-option\` and/or \`rh-option-groups\` here -->
            <slot @slotchange="${this.#onSlotchange}"></slot>
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
          <!-- Insert a paragraph tag with text that helps describe the select -->
          <slot id="help-text-content" name="help-text"></slot>
        </div>
      </div>
    `;
  }

  override updated() {
    this.#setAriaLabelledby();
    this.#removeListboxAriaLabelledby();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this.#captureKeydown, { capture: true });
  }

  protected formResetCallback() {
    this.value = '';
    this.selected = [];
  }

  protected formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

  @observes('disabled')
  private disabledChanged() {
    this.#combobox.disabled = this.disabled;
  }

  @observes('expanded')
  private async expandedChanged(old: boolean, expanded: boolean) {
    if (this.dispatchEvent(new Event(this.expanded ? 'open' : 'close'))) {
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
      await this.#float.show({ placement: 'bottom' });
      // Focus the first selected option if one exists,
      // BUT only if we're not in the middle of a type-ahead operation.
      // Type-ahead sets its own focus target after opening the listbox.
      const skipDefaultFocus = this.#typeAheadFocusPending;
      this.#typeAheadFocusPending = false;
      if (!skipDefaultFocus) {
        // RTI will sync its internal index when this option receives focus
        // ensuring keyboard navigation starts from the correct position.
        this.selected.at(0)?.focus();
      }
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
   * Sets aria-labelledby attribute on toggle button
   */
  #setAriaLabelledby() {
    const btn = this._toggleButton;
    if (btn && btn.getAttribute('aria-labelledby') === '') {
      btn.setAttribute('aria-labelledby', 'toggle-text');
    }
  }

  /**
   * Removes blank aria-labelledby attribute on listbox
   */
  #removeListboxAriaLabelledby() {
    const listbox = this._listbox;
    if (listbox && listbox.getAttribute('aria-labelledby') === '') {
      listbox.removeAttribute('aria-labelledby');
    }
  }

  /**
   * Checks if an option is currently focused.
   * @param option - The option to check
   * @returns True if the option is focused
   */
  #isOptionFocused(option: RhOption): boolean {
    return option === document.activeElement
      || option.shadowRoot?.activeElement != null
      || option.matches(':focus-within');
  }

  /**
   * Gets all focusable options
   * @returns Array of focusable options
   */
  #getFocusableOptions(): RhOption[] {
    return this.options.filter(option =>
      option !== this._placeholder && !option.disabled
    );
  }

  /**
   * Handles keydown events on the toggle button and listbox.
   * Detects printable characters and delegates to type-ahead logic.
   * @param event - The keyboard event to handle
   */
  #onKeydown(event: KeyboardEvent) {
    // Only handle printable characters
    const isPrintable = event.key.length === 1
      && !event.ctrlKey
      && !event.altKey
      && !event.metaKey;

    if (isPrintable) {
      // Don't scroll after pressing space and don't toggle the listbox
      event.preventDefault();
      event.stopPropagation();
      this.#handleTypeAhead(event.key);
    }
  }

  /**
   * Handles type-ahead navigation per APG Select-Only Combobox pattern.
   * - Opens the listbox if not already displayed
   * - Accumulates characters typed in quick succession
   * - Cycles through options when the same character is typed repeatedly
   * @param char - The printable character that was typed
   */
  async #handleTypeAhead(char: string) {
    if (this.#searchTimeout !== undefined) {
      clearTimeout(this.#searchTimeout);
    }

    const lowerChar = char.toLowerCase();

    const focusableOptions = this.#getFocusableOptions();

    // TYPE-AHEAD MODES:
    // 1. CYCLING: Press "A" repeatedly to cycle through options starting with "A"
    // 2. ACCUMULATION: Type "App" to jump to "Apple"
    //
    // Cycling requires the listbox to be open. We detect cycling in two cases:
    // - Traditional: User types same char repeatedly (e.g., "A", "A", "A")
    // - From focused: User typed a word, waited, then typed its first letter again
    //   (e.g., typed "Apple", waited, pressed "A" → go to "Apricot")
    const searchIsRepeatedChar = this.#searchString === ''
      || this.#searchString === lowerChar.repeat(this.#searchString.length);

    // Only allow traditional repeat cycling when listbox is already open
    // This prevents: close listbox, press "A" → cycling instead of fresh search
    const isTraditionalRepeat = lowerChar === this.#lastSearchChar
      && searchIsRepeatedChar
      && this.expanded;

    // Check if we should cycle from the currently focused item
    // This handles: type "Apple", wait, press "A" → should go to Apricot
    // BUT only if the previous search was also a cycling operation (single char)
    // AND the listbox is already open
    // This prevents: type "Item 5", wait, type "Item 3" → incorrectly cycling on "I"
    const currentFocused = this.#getCurrentlyFocusedOption(focusableOptions);
    const focusedStartsWithChar = currentFocused?.displayLabel.toLowerCase().startsWith(lowerChar);
    const shouldCycleFromFocused = this.#searchString === ''
      && focusedStartsWithChar
      && this.#lastSearchWasCycling
      && this.expanded;

    const isRepeatedChar = isTraditionalRepeat || shouldCycleFromFocused;

    if (isRepeatedChar) {
      // Cycling mode: find next option starting with this character
      // This handles "A", "A", "A" cycling through items starting with "A"
      const match = this.#findMatchingOption(lowerChar, true, focusableOptions);
      if (match) {
        await this.#focusOption(match);
      }
      // Mark that this search was a cycling operation
      this.#lastSearchWasCycling = true;
    } else {
      // Accumulation mode: append characters and find first match
      // This handles typing "Apple" to search for "Apple"
      this.#searchString = this.#searchString + lowerChar;

      const match = this.#findMatchingOption(this.#searchString, false, focusableOptions);
      if (match) {
        await this.#focusOption(match);
      }

      this.#lastSearchWasCycling = false;
    }

    // Track the last character for detecting repeated chars
    this.#lastSearchChar = lowerChar;

    // Reset search string after 500ms of inactivity
    this.#searchTimeout = window.setTimeout(() => {
      this.#searchString = '';
      this.#searchTimeout = undefined;
    }, 500);
  }

  /**
   * Focuses the given option, opening the listbox if needed.
   * @param option - The option to focus
   */
  async #focusOption(option: RhOption) {
    if (!this.expanded) {
      // Set flag to prevent #doExpand from overriding our focus target.
      // The flag is cleared in #doExpand after it checks the flag,
      // because @observes runs asynchronously after updateComplete.
      this.#typeAheadFocusPending = true;
      this.expanded = true;
      await this.updateComplete;
    }
    option.focus();
  }

  /**
   * Gets the currently focused option, checking various focus states.
   * @param focusableOptions - Pre-filtered list of focusable options
   * @returns The focused option, or undefined if none is focused
   */
  #getCurrentlyFocusedOption(focusableOptions: RhOption[]): RhOption | undefined {
    return focusableOptions.find(option => this.#isOptionFocused(option));
  }

  /**
   * Finds a matching option based on the search string.
   * @param searchString - The string to match against option labels (lowercase)
   * @param cycling - If true, finds the next matching option after the current focus
   * @param focusableOptions - Pre-filtered list of focusable options
   * @returns The matching option, or undefined if no match found
   */
  #findMatchingOption(
    searchString: string,
    cycling: boolean,
    focusableOptions: RhOption[],
  ): RhOption | undefined {
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
      const currentlyFocused = focusableOptions.find(option => this.#isOptionFocused(option));

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
