import type { IconNameFor, IconSetName } from '@rhds/icons';

import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import styles from './rh-button.css' with { type: 'css' };

/**
 * Triggers actions via click, Enter, or Space. USE `variant` to set
 * hierarchy: primary (should limit one per page), secondary, tertiary,
 * or danger. Renders a native `<button>` with `delegatesFocus` for
 * keyboard access. Icon-only buttons must set `accessible-label` to
 * provide an ARIA accessible name. Supports form association (submit/reset).
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
   * `aria-hidden="true"`. Preferred over the deprecated `label` attribute.
   * Defaults to undefined.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  /**
   * @deprecated Use `accessible-label` instead.
   */
  @property() label?: string;

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

  override willUpdate() {
    if (this.#hasIcon) {
      import('@rhds/elements/rh-icon/rh-icon.js');
    }
  }

  override render() {
    const { danger, variant } = this;
    const hasIcon = this.#hasIcon;
    return html`
      <!-- summary: internal button element
           description: |
             Native button element that receives focus via delegatesFocus.
             Screen readers announce this as a button with the label or slotted text. -->
      <button aria-label="${ifDefined(this.accessibleLabel || this.label)}"
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
        <span aria-hidden=${String(!!this.accessibleLabel || !!this.label) as 'true' | 'false'}><!-- summary: button text label
               description: |
                 Expects inline text providing a concise, action-oriented label
                 (e.g. "Submit", "Delete"). Hidden from screen readers via
                 aria-hidden when the label attribute is set. For close and play
                 variants, text is visually hidden but remains accessible. --><slot id="text"></slot></span>
      </button>
    `;
  }

  protected async formDisabledCallback() {
    await this.updateComplete;
    this.requestUpdate();
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
