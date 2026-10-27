import type { IconNameFor, IconSetName } from '@rhds/icons';

import { LitElement, html, isServer, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import styles from './rh-button.css' with { type: 'css' };

/**
 * ARIA attributes that authors set on `<rh-button>`. They are copied onto the
 * internal button and then removed from the host. The host has no role, so
 * leaving them there does nothing for assistive technology and fails automated
 * checkers.
 */
const DELEGATED_ARIA_ATTRIBUTES = [
  'aria-expanded',
  'aria-pressed',
  'aria-haspopup',
  'aria-label',
  'aria-description',
  'aria-controls',
  'aria-labelledby',
  'aria-describedby',
] as const;

function isDelegatedAriaAttribute(name: string): boolean {
  return (DELEGATED_ARIA_ATTRIBUTES as readonly string[]).includes(name);
}

// Empty and whitespace-only values are treated as unset.
function definedString(value: string | null | undefined): string | undefined {
  if (value == null) {
    return undefined;
  }
  const trimmed = value.trim();
  return trimmed === '' ? undefined : trimmed;
}

// Find an element by id, starting in the host's root and walking out through
// ancestor roots. ID references on the host point at light-DOM elements, which
// may live in the document or in a shadow root that contains the button.
function elementById(host: HTMLElement, id: string): Element | null {
  // On the server there is no real page, so skip this lookup. The ids are still copied.
  if (isServer) {
    return null;
  }
  const seen = new Set<Node>();
  let current: Node | null = host;
  while (current && !seen.has(current)) {
    seen.add(current);
    const root = current.getRootNode();
    if (!(root instanceof Document || root instanceof ShadowRoot) || seen.has(root)) {
      break;
    }
    seen.add(root);
    // This root cannot find elements by id, so check the parent instead.
    if (typeof root.getElementById !== 'function') {
      current = root instanceof ShadowRoot ? root.host : null;
      continue;
    }
    const found = root.getElementById(id);
    if (found) {
      return found;
    }
    current = root instanceof ShadowRoot ? root.host : null;
  }
  return null;
}

function flattenedText(elements: readonly Element[]): string {
  return elements.map(element => {
    if (element instanceof HTMLElement) {
      const label = element.ariaLabel?.trim();
      if (label) {
        return label;
      }
    }
    return element.textContent ?? '';
  }).join(' ').replace(/\s+/g, ' ').trim();
}

/**
 * Triggers actions via click, Enter, or Space. USE `variant` to set
 * hierarchy: primary (should limit one per page), secondary, tertiary,
 * or danger. Renders a native `<button>` with `delegatesFocus` for
 * keyboard access. Icon-only buttons must set `accessible-label` to
 * provide an ARIA accessible name. Supports form association (submit/reset).
 *
 * `aria-expanded`, `aria-pressed`, `aria-haspopup`, `aria-label`,
 * `aria-description`, `aria-controls`, `aria-labelledby`, and
 * `aria-describedby` set on `<rh-button>` are copied onto that internal
 * button, then removed from the host so checkers do not flag ARIA on an
 * element with no role. Read the values back from the properties, for
 * example `button.ariaExpanded`. An id on the internal button cannot refer
 * to an element outside its shadow tree, so `aria-labelledby` and
 * `aria-describedby` also contribute their text as the accessible name and
 * description.
 *
 * @summary Clickable button that triggers page or form actions
 */
@customElement('rh-button')
@themable
export class RhButton extends LitElement {
  static readonly styles = [styles];

  static readonly formAssociated = true;

  static override readonly shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /**
   * Disables the button, preventing user interaction. When true, the button
   * receives `aria-disabled="true"` and pointer events are suppressed.
   * Disabled buttons are excluded from tab order unless `aria-disabled` is
   * used instead of `disabled`. Defaults to false.
   */
  @property({ reflect: true, type: Boolean }) disabled = false;

  /**
   * Controls the button's behavior within a form context. Accepts 'button'
   * (no default form behavior), 'submit' (submits the form), or 'reset'
   * (resets form fields). When omitted, defaults to implicit submit behavior.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type
   */
  @property({ reflect: true }) type?: 'button' | 'submit' | 'reset';

  /**
   * Accessible name for the button, applied as `aria-label` on the internal
   * `<button>`. Use when the button has no visible text (e.g. icon-only
   * buttons like close or play). When set, slotted text is hidden with
   * `aria-hidden="true"`. Defaults to undefined.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  /**
   * Accessible name forwarded to the internal button as `aria-label`.
   * Prefer `accessible-label`. When either is set, slotted text is hidden
   * from assistive technology. Removed from the host after it is read.
   */
  @property({ attribute: 'aria-label' }) override ariaLabel!: string | null;

  /**
   * Space-separated ids of elements that name the button. Copied onto the
   * internal button. The text of those elements is also used as the
   * accessible name, because the id cannot resolve out of the shadow tree.
   * Removed from the host after it is read.
   */
  @property({ attribute: 'aria-labelledby' }) ariaLabelledBy?: string | null;

  /**
   * Accessible description forwarded to the internal button as
   * `aria-description`. Removed from the host after it is read.
   */
  @property({ attribute: 'aria-description' }) override ariaDescription!: string | null;

  /**
   * Space-separated ids of elements that describe the button. Copied onto
   * the internal button. The text of those elements is also used as
   * `aria-description`, because the id cannot resolve out of the shadow
   * tree. Removed from the host after it is read.
   */
  @property({ attribute: 'aria-describedby' }) ariaDescribedBy?: string | null;

  /**
   * Expanded state forwarded to the internal button as `aria-expanded`.
   * Use `"true"` or `"false"` when this button shows or hides another
   * region. Removed from the host after it is read.
   */
  @property({ attribute: 'aria-expanded' }) override ariaExpanded!: string | null;

  /**
   * Toggle state forwarded to the internal button as `aria-pressed`.
   * Use `"true"`, `"false"`, or `"mixed"`. Removed from the host after
   * it is read.
   */
  @property({ attribute: 'aria-pressed' }) override ariaPressed!: string | null;

  /**
   * Popup type forwarded to the internal button as `aria-haspopup`, for
   * example `"menu"`, `"dialog"`, or `"listbox"`. Removed from the host
   * after it is read.
   */
  @property({ attribute: 'aria-haspopup' }) override ariaHasPopup!: string | null;

  /**
   * Space-separated ids of elements this button controls. Copied onto the
   * internal button as `aria-controls`. Removed from the host after it is
   * read.
   */
  @property({ attribute: 'aria-controls' }) ariaControls?: string | null;

  /**
   * Form value submitted with the button when it triggers form submission.
   * Paired with `name` to create a name/value pair. Defaults to undefined.
   */
  @property() value?: string;

  /**
   * Form name for the button, used with `value` to submit data when the
   * button triggers form submission. Defaults to undefined.
   */
  @property() name?: string;

  /**
   * Shorthand for the `icon` slot. Accepts an icon name from the specified
   * icon set (defaults to 'ui'). When set, renders an `<rh-icon>` in the
   * icon slot. Should use micron icons for best fit. Defaults to undefined.
   */
  @property() icon?: IconNameFor<IconSetName>;

  /**
   * Icon set for the `icon` property. Accepts any registered icon set name.
   * Defaults to 'ui' when not specified. USE 'microns' for small inline icons.
   */
  @property({ attribute: 'icon-set' }) iconSet?: IconSetName;

  @query('button') private _button!: HTMLButtonElement;

  /**
   * Controls the visual hierarchy and style of the button. Accepts
   * 'primary' | 'secondary' | 'tertiary' | 'close' | 'play'. Defaults to
   * 'primary'. Should limit primary to one per page. USE secondary for
   * general actions, tertiary for low-emphasis actions. Close and play
   * variants render icon-only circular buttons with visually hidden text.
   */
  @property({ reflect: true }) variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'close'
    | 'play' = 'primary';

  /**
   * Applies danger styling for destructive or irreversible actions like
   * deleting data. Combines with `variant` to produce danger-primary or
   * danger-secondary styles. AVOID using for non-destructive actions.
   * Defaults to false.
   */
  @property({ type: Boolean, reflect: true }) danger = false;

  get #hasIcon() {
    return this.variant === 'play' || this.variant === 'close' || !!this.icon;
  }

  #internals = InternalsController.of(this);

  /** Set while removing delegated attributes so that removal does not clear the property. */
  #ignoreDelegatedAriaRemoval = false;

  #missingIdRefs = false;

  #idRefKey = '';

  #idRefRetried = false;

  #resolveFrame = 0;

  override attributeChangedCallback(name: string, old: string | null, value: string | null): void {
    // The attribute is removed once its value is stored. Ignoring that removal
    // keeps the property, which is what the internal button renders.
    if (this.#ignoreDelegatedAriaRemoval && value == null && isDelegatedAriaAttribute(name)) {
      return;
    }
    super.attributeChangedCallback(name, old, value);
    // Remove it even when the value did not change, so a later render that
    // sets the same attribute does not leave ARIA on the host.
    if (!isServer && value != null && isDelegatedAriaAttribute(name)) {
      this.#releaseDelegatedAriaAttributes();
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.#resolveFrame) {
      cancelAnimationFrame(this.#resolveFrame);
      this.#resolveFrame = 0;
    }
  }

  override willUpdate() {
    this.#releaseDelegatedAriaAttributes();
    if (this.#hasIcon) {
      import('@rhds/elements/rh-icon/rh-icon.js');
    }
  }

  override render() {
    const { danger, variant } = this;
    const hasIcon = this.#hasIcon;
    const idRefKey = `${this.ariaLabelledBy ?? ''}\0${this.ariaDescribedBy ?? ''}`;
    if (idRefKey !== this.#idRefKey) {
      this.#idRefKey = idRefKey;
      this.#idRefRetried = false;
    }
    this.#missingIdRefs = false;
    const labelledByText = flattenedText(this.#elementsFor(this.ariaLabelledBy)) || undefined;
    const describedByText = flattenedText(this.#elementsFor(this.ariaDescribedBy)) || undefined;
    const accessibleName = definedString(this.accessibleLabel)
      ?? definedString(this.ariaLabel)
      ?? labelledByText;
    const description = definedString(this.ariaDescription) ?? describedByText;
    const hideText = !!(accessibleName || definedString(this.ariaLabelledBy));
    return html`
      <!-- summary: internal button element
           description: |
             Native button element that receives focus via delegatesFocus.
             Screen readers announce this as a button with the label or slotted text. -->
      <button aria-label="${ifDefined(accessibleName)}"
              aria-description="${ifDefined(description)}"
              aria-expanded="${ifDefined(definedString(this.ariaExpanded))}"
              aria-pressed="${ifDefined(definedString(this.ariaPressed))}"
              aria-haspopup="${ifDefined(definedString(this.ariaHasPopup))}"
              aria-controls="${ifDefined(definedString(this.ariaControls))}"
              aria-labelledby="${ifDefined(definedString(this.ariaLabelledBy))}"
              aria-describedby="${ifDefined(definedString(this.ariaDescribedBy))}"
              class="${classMap({
                danger,
                hasIcon,
                [variant]: true,
              })}"
              part="button"
              type="${ifDefined(this.type)}"
              value="${ifDefined(this.value)}"
              @click="${this.#onClick}"
              aria-disabled=${String(!!this.disabled || !!this.#internals.formDisabled) as 'true' | 'false'}>
        <span aria-hidden="true">
          <!-- summary: icon slot for visual indicators
               description: |
                 Expects an \`rh-icon\` element or inline \`svg\`.
                 Wrapped in aria-hidden span so screen readers skip decorative icons.
                 Close and play variants auto-populate this slot via #renderIcon(). -->
          <slot id="icon"
                part="icon"
                name="icon">${this.#renderIcon()}</slot>
        </span>
        <span aria-hidden="${String(hideText) as 'true' | 'false'}">
          <!-- summary: button text label
               description: |
                 Expects inline text providing a concise, action-oriented label
                 (e.g. "Submit", "Delete"). Hidden from screen readers when an
                 accessible name is set with \`accessible-label\`, \`aria-label\`,
                 or \`aria-labelledby\`. For close and play variants, text is
                 visually hidden but remains accessible. -->
          <slot id="text"></slot>
        </span>
      </button>
    `;
  }

  override updated(): void {
    this.#retryUnresolvedIds();
  }

  protected async formDisabledCallback() {
    await this.updateComplete;
    this.requestUpdate();
  }

  /**
   * Remove delegated ARIA attributes from the host once Lit has stored them.
   * Assistive technology reads the internal button, and checkers flag these
   * attributes on a host that has no role.
   */
  #releaseDelegatedAriaAttributes(): void {
    if (isServer || !DELEGATED_ARIA_ATTRIBUTES.some(name => this.hasAttribute(name))) {
      return;
    }
    this.#ignoreDelegatedAriaRemoval = true;
    for (const name of DELEGATED_ARIA_ATTRIBUTES) {
      if (this.hasAttribute(name)) {
        this.removeAttribute(name);
      }
    }
    this.#ignoreDelegatedAriaRemoval = false;
  }

  #ids(value: string | null | undefined): string[] {
    return definedString(value)?.split(/\s+/) ?? [];
  }

  #elementsFor(idList: string | null | undefined): Element[] {
    const elements: Element[] = [];
    for (const id of this.#ids(idList)) {
      const element = elementById(this, id);
      if (element) {
        elements.push(element);
      } else {
        this.#missingIdRefs = true;
      }
    }
    return elements;
  }

  #retryUnresolvedIds(): void {
    if (isServer || !this.#missingIdRefs || this.#idRefRetried || this.#resolveFrame) {
      return;
    }
    this.#idRefRetried = true;
    this.#resolveFrame = requestAnimationFrame(() => {
      this.#resolveFrame = 0;
      if (this.isConnected) {
        this.requestUpdate();
      }
    });
  }

  #onClick() {
    switch (this.type) {
      case 'reset':
        return this.#internals.reset();
      default:
        return this.#internals.submit();
    }
  }

  /**
   * Fallback content for the icon slot. When the `icon` attribute is set, it
   * should render an icon corresponding to the value.
   * @example ```html
   *          <base-icon icon=${this.icon}></base-icon>
   *          ```
   */
  #renderIcon(): TemplateResult {
    switch (this.variant?.toLowerCase()) {
      case 'close':
        return html`<rh-icon set="microns" icon="close"></rh-icon>`;
      case 'play':
        return html`<rh-icon set="ui" icon="play-fill"></rh-icon>`;
      default:
        return html`<rh-icon set="${this.iconSet ?? 'ui'}" icon="${this.icon}"></rh-icon>`;
    }
  }

  /**
   * Programmatically moves focus to the button element.
   *
   * This method focuses the internal button element, making it the active element
   * on the page. Useful for managing focus flow after dynamic content changes or
   * user interactions.
   *
   * ## Usage guidelines
   * - Use to direct user attention after completing an action
   * - Helpful for accessibility when managing focus programmatically
   * - Called automatically when the button is the target of a focus navigation
   * - Can be used after modals close to return focus to a trigger button
   *
   * ## Accessibility
   * - When focus is moved programmatically, ensure users are aware of the change
   * - Avoid moving focus unexpectedly as it can disorient users
   * - Moving focus to a button should be deliberate and serve user needs
   *
   * @example
   * ```js
   * const button = document.querySelector('rh-button');
   * button.focus();
   * ```
   */
  focus() {
    this._button?.focus();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-button': RhButton;
  }
}
