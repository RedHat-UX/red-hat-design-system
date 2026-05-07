import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-textarea.css';

/**
 * A textarea element allows users to enter multi-line text.
 * It functions as a branded, accessible `<textarea>` element with
 * cross-root ARIA wiring, form association, and constraint validation.
 *
 * @summary A multi-line text input control
 * @slot help-text - Help or error text displayed below the textarea.
 *                    Overrides the `help-text` attribute.
 * @csspart textarea - The inner native `<textarea>` element
 *
 * @alias textarea
 */
@customElement('rh-textarea')
@themable
export class RhTextarea extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  static readonly formAssociated = true;

  static override readonly shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /** Accessible name when no external `<label>` is present. */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  /** Browser autocomplete hint forwarded to the inner textarea. */
  @property() autocomplete?: string;

  /** Visible width in average character widths. */
  @property({ type: Number, reflect: true }) cols?: number;

  /**
   * Whether the textarea is disabled. Uses `aria-disabled` on the
   * inner textarea (not native `disabled`) so the element remains
   * keyboard-focusable for screen reader users.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * When set to `content`, the textarea automatically grows in height
   * to fit its content instead of using a fixed row count. Uses the
   * CSS `field-sizing` property as a progressive enhancement; not
   * supported in Firefox, where the textarea falls back to fixed height.
   */
  @property({ attribute: 'field-sizing', reflect: true }) fieldSizing?: 'content';

  /**
   * Help text displayed below the control. Content slotted into the
   * help-text slot overrides this attribute.
   */
  @property({ attribute: 'help-text' }) helpText?: string;

  /** Maximum number of characters (UTF-16 code units) allowed. */
  @property({ type: Number, reflect: true }) maxlength?: number;

  /** Minimum number of characters (UTF-16 code units) required. */
  @property({ type: Number, reflect: true }) minlength?: number;

  /** The name of the control, used for form submission. */
  @property({ reflect: true }) name?: string;

  /** Placeholder hint text shown when the textarea is empty. */
  @property() placeholder?: string;

  /** Whether the textarea is read-only. Value is still submitted. */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /**
   * Whether a value is required before form submission. Syncs to
   * aria-required and constraint validation.
   */
  @property({ type: Boolean, reflect: true }) required = false;

  /**
   * Controls whether the textarea is resizable by the user.
   * Mapped to the CSS `resize` property via attribute selectors.
   */
  @property({ reflect: true }) resize: 'none' | 'vertical' | 'horizontal' | 'both' = 'vertical';

  /**
   * Number of visible text lines. Defaults to 5 for a comfortable
   * editing area, matching the ux.redhat.com form pattern sizing.
   */
  @property({ type: Number, reflect: true }) rows = 5;

  /**
   * Opt-in character counter. Only renders when both this attribute
   * and `maxlength` are set. Format: `42/500`.
   */
  @property({ type: Boolean, attribute: 'show-character-count', reflect: true })
  showCharacterCount = false;

  /**
   * Visual and semantic state of the form control for user feedback.
   * Use 'danger' for blocking errors, 'warning' for non-blocking
   * issues, and 'success' for valid input. Affects styling only;
   * does not set `aria-invalid` automatically.
   */
  @property({ reflect: true }) state?: 'danger' | 'success' | 'warning';

  /** Current value of the textarea. Not reflected to an attribute. */
  @property() value = '';

  /** How the textarea wraps text for form submission. */
  @property() wrap?: 'soft' | 'hard' | 'off';

  #internals = InternalsController.of(this);

  #slots = new SlotController(this, 'help-text');

  @query('#input') private _textarea!: HTMLTextAreaElement;

  /** Captured at connect time for formResetCallback */
  #defaultValue = '';

  /** Tracks whether the default value has been captured */
  #defaultCaptureDone = false;

  override connectedCallback() {
    super.connectedCallback();
    if (!this.#defaultCaptureDone) {
      this.#defaultValue = this.value;
      this.#defaultCaptureDone = true;
    }
  }

  /**
   * Sync ARIA help text before render, matching rh-select's pattern.
   * Using willUpdate (not updated) avoids re-render loops from
   * InternalsController property setters.
   */
  override willUpdate() {
    if (this.state) {
      import('@rhds/elements/rh-icon/rh-icon.js');
    }
    this.#syncAriaHelpText();
  }

  /**
   * Wire external labels to the inner textarea after render,
   * when the shadow DOM textarea element is available.
   * Only touches the inner textarea's attributes (not InternalsController),
   * so no re-render loop risk.
   */
  override updated() {
    this.#syncAccessibleName();
  }

  override render() {
    const hideHelpText = this.#slots.isEmpty('help-text') && !this.helpText;
    const showCharCount = this.showCharacterCount && this.maxlength != null;
    const success = this.state === 'success';
    const warning = this.state === 'warning';
    const danger = this.state === 'danger';
    const helpIcon = success ? 'check-circle-fill'
        : warning ? 'warning-fill'
        : danger ? 'ban-fill'
        : undefined;

    return html`
      <textarea id="input"
                part="textarea"
                .value="${live(this.value)}"
                autocomplete="${ifDefined(this.autocomplete)}"
                cols="${ifDefined(this.cols)}"
                maxlength="${ifDefined(this.maxlength)}"
                minlength="${ifDefined(this.minlength)}"
                placeholder="${ifDefined(this.placeholder)}"
                rows="${ifDefined(this.rows)}"
                wrap="${ifDefined(this.wrap)}"
                ?required="${this.required}"
                ?readonly="${this.disabled || this.readonly}"
                aria-disabled="${String(!!this.disabled) as 'true' | 'false'}"
                @input="${this.#onInput}"
                @change="${this.#onInput}"
      ></textarea>
      <div id="char-count" ?hidden="${!showCharCount}" aria-hidden="true">
        ${this.value?.length ?? 0}/${this.maxlength}
      </div>
      <div id="help-text" ?hidden="${hideHelpText}">
        <rh-icon class="icon ${classMap({ success, warning, danger })}"
                 set="ui"
                 icon="${ifDefined(helpIcon)}">
        </rh-icon>
        <slot id="help-text-content"
              name="help-text"><span aria-hidden="true">${this.helpText ?? ''}</span></slot>
      </div>
    `;
  }

  /**
   * Sync the Lit property with the native textarea value.
   * Handles both input (every keystroke) and change (blur) events.
   */
  #onInput() {
    this.value = this._textarea.value;
  }

  /* --- Form lifecycle callbacks --- */

  /**
   * Called when a parent form/fieldset is disabled or re-enabled.
   * @param disabled whether the control should be disabled
   */
  protected formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

  /** Called when the parent form is reset. Restores the default value. */
  protected formResetCallback() {
    this.value = this.#defaultValue;
    this.#updateValidity();
  }

  /**
   * Called when the browser restores form state (e.g. back/forward
   * cache navigation or browser autofill). Restores the saved value
   * regardless of mode so that both bfcache and autocomplete work.
   * @param state the saved form value
   */
  protected formStateRestoreCallback(state: string) {
    this.value = state;
  }

  /* --- Reactive property observers --- */

  /** Sync form value when the value property changes. */
  @observes('value')
  private valueChanged() {
    if (this.disabled) {
      this.#internals.setFormValue(null);
    } else {
      this.#internals.setFormValue(this.value ?? '');
    }
    this.#updateValidity();
  }

  /** Re-sync form value and validity when disabled changes. */
  @observes('disabled')
  private disabledChanged() {
    if (this.disabled) {
      this.#internals.setFormValue(null);
    } else {
      this.#internals.setFormValue(this.value ?? '');
    }
    this.#updateValidity();
  }

  /** Sync aria-required and re-check validity when required changes. */
  @observes('required')
  private requiredChanged() {
    this.#internals.ariaRequired = this.required ? 'true' : 'false';
    this.#updateValidity();
  }

  /* --- Constraint Validation API --- */

  /**
   * Returns true if the element's value passes constraint validation.
   * Updates validity state before checking.
   */
  checkValidity(): boolean {
    this.#updateValidity();
    return this.#internals.checkValidity();
  }

  /**
   * Returns true if the element's value passes constraint validation.
   * If invalid, reports the problem (e.g. browser tooltip) and returns false.
   */
  reportValidity(): boolean {
    this.#updateValidity();
    return this.#internals.reportValidity();
  }

  /* --- Proxy methods for the inner textarea --- */

  /** Selects all text in the textarea. */
  select() {
    this._textarea?.select();
  }

  /**
   * Replaces a range of text. Defaults start/end to current selection
   * when not provided (matching the Shoelace fix for this edge case).
   * @param replacement the text to insert
   * @param start start index (defaults to selectionStart)
   * @param end end index (defaults to selectionEnd)
   * @param selectMode how to update the selection after replacing
   */
  setRangeText(
    replacement: string,
    start?: number,
    end?: number,
    selectMode?: SelectionMode,
  ) {
    const textarea = this._textarea;
    if (!textarea) {
      return;
    }
    if (start !== undefined && end !== undefined) {
      textarea.setRangeText(replacement, start, end, selectMode);
    } else {
      textarea.setRangeText(replacement);
    }
    this.value = textarea.value;
  }

  /**
   * Sets the cursor position or text selection range.
   * @param start the start of the selection
   * @param end the end of the selection
   * @param direction the direction of the selection
   */
  setSelectionRange(
    start: number | null,
    end: number | null,
    direction?: 'forward' | 'backward' | 'none',
  ) {
    this._textarea?.setSelectionRange(start, end, direction);
  }

  /** Current cursor/selection start position in the textarea. */
  get selectionStart(): number | null {
    return this._textarea?.selectionStart ?? null;
  }

  /** Current cursor/selection end position in the textarea. */
  get selectionEnd(): number | null {
    return this._textarea?.selectionEnd ?? null;
  }

  /** Current selection direction. */
  get selectionDirection(): string | null {
    return this._textarea?.selectionDirection ?? null;
  }

  /** The element's current ValidityState. */
  get validity(): ValidityState {
    return this.#internals.validity;
  }

  /** The validation message from the most recent validity check. */
  get validationMessage(): string {
    return this.#internals.validationMessage;
  }

  /* --- Private methods --- */

  /**
   * Syncs constraint validity with current state. Checks `required`,
   * `minlength`, and `maxlength` rules against the current value and
   * reports the result via `ElementInternals.setValidity()`. Disabled
   * controls are always valid per the HTML spec and skip all checks.
   */
  #updateValidity() {
    // Disabled controls are barred from constraint validation per HTML spec
    if (this.disabled) {
      this.#internals.setValidity({});
      return;
    }

    const len = this.value?.length ?? 0;
    const anchor = this._textarea ?? undefined;

    if (this.required && !this.value) {
      this.#internals.setValidity(
        { valueMissing: true },
        'Please fill out this field.',
        anchor,
      );
      return;
    }

    if (this.minlength != null && len < this.minlength) {
      this.#internals.setValidity(
        { tooShort: true },
        `Please lengthen this text to ${this.minlength} characters or more (you are currently using ${len} characters).`,
        anchor,
      );
      return;
    }

    if (this.maxlength != null && len > this.maxlength) {
      this.#internals.setValidity(
        { tooLong: true },
        `Please shorten this text to ${this.maxlength} characters or less (you are currently using ${len} characters).`,
        anchor,
      );
      return;
    }

    this.#internals.setValidity({});
  }

  /**
   * Resolves the accessible name for the inner textarea.
   * Priority:
   *  1. `aria-label` on host
   *  2. `aria-labelledby` / `ariaLabelledByElements` on host
   *  3. Associated `<label>` elements via `for`/`id`
   *  4. `accessible-label` attribute
   * Only touches the inner textarea element, not InternalsController.
   */
  #syncAccessibleName() {
    const textarea = this._textarea;
    if (!textarea) {
      return;
    }

    const hostAriaLabel = this.getAttribute('aria-label');
    if (hostAriaLabel) {
      textarea.setAttribute('aria-label', hostAriaLabel);
      textarea.ariaLabelledByElements = [];
      return;
    }

    // Check programmatic element refs first:
    // eg: `textarea.ariaLabelledByElements = [...authorLabelledBy];`
    const authorLabelledBy = (this as HTMLElement).ariaLabelledByElements;
    if (authorLabelledBy?.length) {
      textarea.ariaLabelledByElements = [...authorLabelledBy];
      textarea.removeAttribute('aria-label');
      return;
    }

    // Then fall back to resolving the aria-labelledby attribute IDs:
    // eg: `<rh-textarea aria-labelledby="my-id"><rh-textarea>`
    const labelledByAttr = this.getAttribute('aria-labelledby')?.trim();
    if (labelledByAttr) {
      const root = this.getRootNode() as Document | ShadowRoot;

      // Split `id`'s on spaces, look up ID,
      // then filter out any that don't resolve:
      const resolved = labelledByAttr.split(/\s+/)
          .map(id => root.getElementById(id))
          .filter((el): el is HTMLElement => el != null);
      if (resolved.length) {
        textarea.ariaLabelledByElements = resolved;
        textarea.removeAttribute('aria-label');
        return;
      }
    }

    const labels = InternalsController.getLabels(this);
    if (labels.length > 0) {
      textarea.ariaLabelledByElements = labels;
      textarea.removeAttribute('aria-label');
      return;
    }

    if (this.accessibleLabel) {
      textarea.setAttribute('aria-label', this.accessibleLabel);
      textarea.ariaLabelledByElements = [];
      return;
    }

    textarea.removeAttribute('aria-label');
    textarea.ariaLabelledByElements = [];
  }

  /**
   * Wires help-text content to the control via
   * ariaDescribedByElements (slotted) or ariaDescription (attribute).
   * Mirrors rh-select's #syncAriaHelpText pattern, called in willUpdate.
   */
  #syncAriaHelpText() {
    const noSlottedHelp = this.#slots.isEmpty('help-text');
    const noHelpText = !this.helpText;

    if (noSlottedHelp && noHelpText) {
      this.#internals.ariaDescription = '';
      this.#internals.ariaDescribedByElements = [];
      return;
    }

    if (!noSlottedHelp) {
      this.#internals.ariaDescribedByElements = this.#slots.getSlotted('help-text');
      this.#internals.ariaDescription = '';
      return;
    }

    if ('ariaDescription' in (globalThis.ElementInternals?.prototype ?? {})) {
      this.#internals.ariaDescription = this.helpText ?? '';
    } else {
      this.setAttribute('aria-description', this.helpText ?? '');
    }
    this.#internals.ariaDescribedByElements = [];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-textarea': RhTextarea;
  }
}
