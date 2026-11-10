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

/** Element-based ARIA reference APIs, which can point across shadow roots. */
type ReflectedAriaProperty =
  | 'ariaControlsElements'
  | 'ariaLabelledByElements'
  | 'ariaDescribedByElements';

/**
 * Browsers that do not implement element reflection expose the property as
 * `undefined`. The check runs at call time so tests and polyfills can install
 * the property after this module loads.
 * @param property ARIA element reflection property to test
 */
function supportsElementReflection(property: ReflectedAriaProperty): boolean {
  return !isServer && typeof Element !== 'undefined' && property in Element.prototype;
}

/** Reflection properties on one element, used to write a dynamic property. */
type ElementReferenceMap = Record<ReflectedAriaProperty, readonly Element[] | null>;

/**
 * Assign an element reference without tripping over the union of properties.
 * @param button internal button
 * @param property reflection property to set
 * @param elements referenced elements, or null to clear
 */
function assignElementReference(
  button: HTMLButtonElement,
  property: ReflectedAriaProperty,
  elements: readonly Element[] | null,
): void {
  (button as unknown as ElementReferenceMap)[property] = elements;
}

function sameElements(
  current: readonly Element[] | null | undefined,
  next: readonly Element[],
): boolean {
  return current != null
    && current.length === next.length
    && next.every((element, index) => current[index] === element);
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
  // On the server there is no document to search. Callers use slotted text instead.
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

function isHiddenElement(element: Element): boolean {
  return element.getAttribute('aria-hidden') === 'true' || element.hasAttribute('hidden');
}

/**
 * Text of a referenced element as accessible name computation sees it: an
 * element's own `aria-label` wins, and hidden descendants are skipped. A
 * directly referenced element contributes its text even when it is hidden.
 * @param node node to read
 * @param isReferenceRoot true for the element an id points at
 */
function nodeText(node: Node, isReferenceRoot = false): string {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent ?? '';
  }
  if (!(node instanceof Element) || (!isReferenceRoot && isHiddenElement(node))) {
    return '';
  }
  // Works for SVG and other non-HTML elements too.
  const label = node.getAttribute('aria-label')?.trim();
  if (label) {
    return label;
  }
  let text = '';
  for (const child of node.childNodes) {
    text += ` ${nodeText(child)}`;
  }
  return text;
}

function flattenedText(elements: readonly Element[]): string {
  return elements.map(element => nodeText(element, true))
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
}

type ReferenceRoot = Document | ShadowRoot;

interface RootObservation {
  observer: MutationObserver;
  subscribers: Map<RhButton, (records: MutationRecord[]) => void>;
}

/** One mutation observer per root, shared by every button that references it. */
const rootObservations = new WeakMap<ReferenceRoot, RootObservation>();

function observeRoot(
  root: ReferenceRoot,
  button: RhButton,
  handler: (records: MutationRecord[]) => void,
): void {
  let observation = rootObservations.get(root);
  if (!observation) {
    const subscribers = new Map<RhButton, (records: MutationRecord[]) => void>();
    const observer = new MutationObserver(records => {
      for (const notify of [...subscribers.values()]) {
        notify(records);
      }
    });
    observer.observe(root, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['id'],
    });
    observation = { observer, subscribers };
    rootObservations.set(root, observation);
  }
  observation.subscribers.set(button, handler);
}

function unobserveRoot(root: ReferenceRoot, button: RhButton): void {
  const observation = rootObservations.get(root);
  if (!observation) {
    return;
  }
  observation.subscribers.delete(button);
  if (observation.subscribers.size === 0) {
    observation.observer.disconnect();
    rootObservations.delete(root);
  }
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
 * `aria-describedby` set on `<rh-button>` are read onto properties, then
 * removed from the host so checkers do not flag ARIA on an element with no
 * role. Read the values back from the properties, for example
 * `button.ariaExpanded`. In browsers that support element reflection
 * (`ariaLabelledByElements`, `ariaDescribedByElements`, and
 * `ariaControlsElements`), the internal button points at the referenced
 * elements directly, which works across shadow roots. Elsewhere the text of
 * `aria-labelledby` and `aria-describedby` targets is used as the accessible
 * name and description, because an id on the internal button cannot refer
 * outside its shadow tree and can collide with an internal slot id.
 * `aria-controls` stays on the internal button as an id string. Referenced
 * labels win over `aria-label`, and referenced descriptions win over
 * `aria-description`; `accessible-label` wins over both.
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
   * Space-separated ids of elements that name the button. In browsers that
   * support `ariaLabelledByElements` the internal button references those
   * elements directly, across shadow roots. Elsewhere their text is used as
   * the accessible name, and the ids are not copied, because an id on the
   * internal button cannot point outside the shadow tree and can match an
   * internal slot such as `text`. Referenced labels take precedence over
   * `aria-label`. Removed from the host after it is read. Server rendering
   * cannot resolve the ids, so slotted text stays the name. An icon-only
   * button also needs `accessible-label`.
   */
  @property({ attribute: 'aria-labelledby' }) ariaLabelledBy?: string | null;

  /**
   * Accessible description forwarded to the internal button as
   * `aria-description`. Removed from the host after it is read.
   */
  @property({ attribute: 'aria-description' }) override ariaDescription!: string | null;

  /**
   * Space-separated ids of elements that describe the button. In browsers that
   * support `ariaDescribedByElements` the internal button references those
   * elements directly, across shadow roots. Elsewhere their text is applied as
   * `aria-description`, and the ids are not copied, because an id on the
   * internal button cannot point outside the shadow tree. Referenced
   * descriptions take precedence over `aria-description`. Removed from the
   * host after it is read.
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
   * internal button as `aria-controls`; browsers that support
   * `ariaControlsElements` also get a cross-root element reference. Removed
   * from the host after it is read.
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

  #labelElements: Element[] = [];

  #descriptionElements: Element[] = [];

  #controlElements: Element[] = [];

  /** Name and description from the latest render, including values hydration did not write. */
  #name?: string;

  #descriptionText?: string;

  /** Roots in which id references are watched, and their shared observers. */
  #observedRoots: ReferenceRoot[] = [];

  /** Ids and selector from the latest reference watch. */
  #referenceIds = new Set<string>();

  #referenceSelector = '';

  /** Watches referenced label and description elements for text changes. */
  #textObserver = new MutationObserver(() => {
    if (this.isConnected) {
      this.requestUpdate();
    }
  });

  override connectedCallback(): void {
    super.connectedCallback();
    // Observers are disconnected when the button leaves the tree. A button
    // that is moved back needs an update to resolve references in its new
    // root and to reinstall them.
    if (!isServer && (
      definedString(this.ariaLabelledBy)
      || definedString(this.ariaDescribedBy)
      || definedString(this.ariaControls)
    )) {
      this.requestUpdate();
    }
  }

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
    this.#stopWatchingReferences();
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
    // Id lookup needs a document. Server rendering keeps the id string for
    // aria-controls and falls back to slotted text for the accessible name.
    this.#labelElements = isServer ? [] : this.#elementsFor(this.ariaLabelledBy);
    this.#descriptionElements = isServer ? [] : this.#elementsFor(this.ariaDescribedBy);
    this.#controlElements = isServer ? [] : this.#elementsFor(this.ariaControls);
    const labelledByText = flattenedText(this.#labelElements) || undefined;
    const describedByText = flattenedText(this.#descriptionElements) || undefined;

    // aria-labelledby and aria-describedby take precedence over the literal
    // aria-label and aria-description, as they do in accessible name
    // computation. accessible-label remains the component's own override.
    let accessibleName = definedString(this.accessibleLabel)
      ?? labelledByText
      ?? definedString(this.ariaLabel);

    // External ids cannot be resolved on the server. Use slotted text when this
    // render can already see it. Lit SSR emits light DOM after the shadow
    // template, so textContent is often empty there; the text slot stays
    // visible and that projected text is the name until hydration. Icon-only
    // buttons have no slotted text, so they need accessible-label.
    if (isServer && !accessibleName && definedString(this.ariaLabelledBy)) {
      accessibleName = definedString(this.textContent);
    }

    const description = describedByText ?? definedString(this.ariaDescription);
    // Hide slotted text only once a name exists. An unresolved aria-labelledby
    // must not hide the slot, or the button has no name.
    const hideText = accessibleName != null;
    this.#name = accessibleName;
    this.#descriptionText = description;
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
                 or the text referenced by \`aria-labelledby\`. For close and play variants, text is
                 visually hidden but remains accessible. -->
          <slot id="text"></slot>
        </span>
      </button>
    `;
  }

  override updated(): void {
    this.#clearStaleElementReferences();
    this.#syncForwardedAria();
    this.#applyElementReferences();
    this.#watchReferences();
  }

  /**
   * Element reflection points the internal button at the referenced elements
   * themselves, which works across shadow roots. Assigning a property removes
   * the serialized id, so references are applied after attributes are synced.
   */
  #applyElementReferences(): void {
    const button = this._button;
    if (button == null || isServer) {
      return;
    }
    // accessible-label is the component's explicit override.
    const labelElements = definedString(this.accessibleLabel) ? [] : this.#labelElements;
    this.#setElementReference(button, 'ariaLabelledByElements', labelElements);
    this.#setElementReference(button, 'ariaDescribedByElements', this.#descriptionElements);
    this.#setElementReference(button, 'ariaControlsElements', this.#controlElements);
  }

  /** Clear references we set earlier when their ids or elements are gone. */
  #clearStaleElementReferences(): void {
    const button = this._button;
    if (button == null || isServer) {
      return;
    }
    // accessible-label is the component's explicit override.
    const labelElements = definedString(this.accessibleLabel) ? [] : this.#labelElements;
    this.#clearElementReference(button, 'ariaLabelledByElements', labelElements);
    this.#clearElementReference(button, 'ariaDescribedByElements', this.#descriptionElements);
    this.#clearElementReference(button, 'ariaControlsElements', this.#controlElements);
  }

  #clearElementReference(
    button: HTMLButtonElement,
    property: ReflectedAriaProperty,
    elements: readonly Element[],
  ): void {
    // Setting null also clears the serialized attribute, so only clear a
    // reference this component set earlier.
    if (elements.length === 0 && supportsElementReflection(property) && button[property] != null) {
      assignElementReference(button, property, null);
    }
  }

  #setElementReference(
    button: HTMLButtonElement,
    property: ReflectedAriaProperty,
    elements: readonly Element[],
  ): void {
    if (elements.length === 0 || !supportsElementReflection(property)) {
      return;
    }
    if (!sameElements(button[property], elements)) {
      assignElementReference(button, property, elements);
    }
  }

  /**
   * Copy forwarded ARIA onto the internal button when the template commit did
   * not. Hydration records attribute values without writing them, and
   * element reflection serializes a cross-shadow id as an empty attribute.
   * The id string is restored here, then reflection is reapplied by
   * {@link #applyElementReferences}.
   */
  #syncForwardedAria(): void {
    const button = this._button;
    if (button == null || isServer) {
      return;
    }
    this.#syncAttr(button, 'aria-label', this.#name);
    this.#syncAttr(button, 'aria-description', this.#descriptionText);
    this.#syncAttr(button, 'aria-expanded', definedString(this.ariaExpanded));
    this.#syncAttr(button, 'aria-pressed', definedString(this.ariaPressed));
    this.#syncAttr(button, 'aria-haspopup', definedString(this.ariaHasPopup));
    this.#syncAttr(button, 'aria-controls', definedString(this.ariaControls));
    const text = button.querySelector('#text')?.parentElement;
    if (text != null) {
      this.#syncAttr(text, 'aria-hidden', this.#name != null ? 'true' : 'false');
    }
  }

  #syncAttr(element: HTMLElement, name: string, value: string | undefined): void {
    if (!value) {
      if (element.hasAttribute(name)) {
        element.removeAttribute(name);
      }
      return;
    }
    if (element.getAttribute(name) !== value) {
      element.setAttribute(name, value);
    }
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
      }
    }
    return elements;
  }

  /**
   * Follow label, description, and control targets for as long as the button
   * is connected. Ids are watched in every root that lookup searches, and text
   * changes are watched on the referenced elements themselves.
   */
  #watchReferences(): void {
    this.#stopWatchingReferences();
    if (isServer || !this.isConnected) {
      return;
    }
    const ids = new Set([
      ...this.#ids(this.ariaLabelledBy),
      ...this.#ids(this.ariaDescribedBy),
      ...this.#ids(this.ariaControls),
    ]);
    this.#referenceIds = ids;
    this.#referenceSelector = [...ids].map(id => `#${CSS.escape(id)}`).join(',');
    if (ids.size > 0) {
      for (const root of this.#referenceRoots()) {
        observeRoot(root, this, records => this.#onReferenceMutation(records));
        this.#observedRoots.push(root);
      }
    }
    const watched = new Set<Element>([...this.#labelElements, ...this.#descriptionElements]);
    for (const element of watched) {
      this.#textObserver.observe(element, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['aria-label', 'aria-hidden', 'hidden'],
      });
    }
  }

  #stopWatchingReferences(): void {
    this.#textObserver.disconnect();
    for (const root of this.#observedRoots) {
      unobserveRoot(root, this);
    }
    this.#observedRoots = [];
  }

  /**
   * Every root that {@link elementById} searches: the button's own root first,
   * then the roots that contain each shadow host.
   */
  #referenceRoots(): ReferenceRoot[] {
    const roots: ReferenceRoot[] = [];
    const seen = new Set<Node>();
    let root: Node | null = this.getRootNode();
    while (root && !seen.has(root)) {
      seen.add(root);
      if (!(root instanceof Document || root instanceof ShadowRoot)) {
        break;
      }
      roots.push(root);
      const host: Element | null = root instanceof ShadowRoot ? root.host : null;
      root = host?.getRootNode() ?? null;
    }
    return roots;
  }

  #onReferenceMutation(records: MutationRecord[]): void {
    if (!this.isConnected || this.#referenceIds.size === 0) {
      return;
    }
    if (records.some(record => this.#recordMatchesIds(record))) {
      this.requestUpdate();
    }
  }

  /**
   * True when a mutation adds, removes, or renames an element our ids point at.
   * @param record mutation record to inspect
   */
  #recordMatchesIds(record: MutationRecord): boolean {
    const ids = this.#referenceIds;
    if (record.type === 'attributes') {
      const { target } = record;
      if (!(target instanceof Element)) {
        return false;
      }
      return ids.has(target.id) || (record.oldValue != null && ids.has(record.oldValue));
    }
    const { addedNodes, removedNodes } = record;
    return [...addedNodes, ...removedNodes].some(node => {
      if (!(node instanceof Element)) {
        return false;
      }
      if (ids.has(node.id)) {
        return true;
      }
      try {
        return node.querySelector(this.#referenceSelector) != null;
      } catch {
        return false;
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
