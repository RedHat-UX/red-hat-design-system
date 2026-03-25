import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { TemplateResult } from 'lit';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import type { IconNameFor, IconSetName } from '@rhds/icons';

import { themable } from '@rhds/elements/lib/themable.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-tag.css' with { type: 'css' };

/**
 * A tag provides a short, pill-shaped label for categorizing content or
 * indicating status. It SHOULD include an icon when color alone conveys
 * meaning. Linked tags MUST have descriptive text for screen readers, and
 * SHOULD provide an `aria-label` on group containers. When disabled, Enter
 * keyboard navigation is suppressed on linked tags.
 *
 * @summary Categorizes content, adds context, or indicates status using a short text label
 *
 * @alias tag
 *
 * @slot - Must contain text content for the tag. Keep text concise
 *   (25 characters or fewer). Text MUST be descriptive enough to
 *   convey meaning without relying on color, so that screen reader
 *   users and users who cannot perceive color receive equivalent
 *   information (WCAG 1.4.1 Use of Color).
 * @slot icon - Optional decorative icon, such as an SVG or
 *   `rh-icon` element. Icons MUST be purely decorative and SHOULD
 *   NOT convey information absent from the text. Screen readers
 *   skip this slot because the icon has no accessible name.
 *
 */
@customElement('rh-tag')
@themable
export class RhTag extends LitElement {
  static readonly styles = [styles];

  /**
   * The name of the icon to display in the tag.
   * When set, an `rh-icon` element renders in the icon slot as a decorative visual.
   */
  @property({ reflect: true }) icon?: IconNameFor<IconSetName>;

  /**
   * The icon set from which to select the icon. Defaults to `ui`.
   */
  @property({ attribute: 'icon-set' }) iconSet: IconSetName = 'ui';

  /**
   * The visual style variant of the tag.
   * - `filled`: colored background with a subtle border (default)
   * - `outline`: transparent background with a colored border
   * - `desaturated`: transparent background with a neutral border and text color
   */
  @property() variant?: 'filled' | 'outline' | 'desaturated' = 'filled';

  /**
   * The size of the tag. When set to `compact`, the tag uses a smaller font
   * size and reduced padding.
   */
  @property() size?: 'compact';

  /**
   * Optional URL that makes the tag a navigable link. When set, the tag
   * renders an anchor element around its text content.
   */
  @property() href?: string;

  /**
   * Whether an interactive (linked) tag is disabled. When true, the tag
   * visually appears inactive and keyboard navigation is suppressed.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * The color palette of the tag. Nine colors are available. Choose colors
   * that correspond to the tag's semantic meaning (e.g. red for errors,
   * green for success). Defaults to gray.
   *
   * Note: `cyan` is accepted but deprecated; use `teal` instead.
   */
  @property() color?:
    | 'red'
    | 'red-orange'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'purple'
    | 'gray';

  /** Represents the state of the anonymous and icon slots */
  #slots = new SlotController(this, 'icon', null);

  override render() {
    const { icon, size, variant = 'filled', color = 'gray', disabled } = this;
    const hasIcon = !!icon || this.#slots.hasSlotted('icon');
    const textSlot = html`
      <!-- summary: tag text content for screen readers and visual display
           description: |
             Text MUST convey meaning without relying on color alone
             (WCAG 1.4.1). Keep under 25 characters. -->
      <slot id="text"></slot>
    `;
    return html`
      <span id="container"
            class="${classMap({
              disabled,
              hasIcon,
              compact: size === 'compact',
              teal: color === ('cyan' as 'blue' /* cyan deprecated */) || color === 'teal',
              [variant]: true,
              [color]: true })}">
        <!-- summary: decorative icon for screen reader and visual context
             description: |
               Icons MUST be purely decorative. Screen readers skip
               this slot because the icon has no accessible name. -->
        <slot name="icon" part="icon">
          <rh-icon ?hidden="${!icon}" icon="${ifDefined(icon)}" set="${this.iconSet}"></rh-icon>
        </slot>${!this.href ? textSlot : html`
        <a href="${this.href}"
           aria-disabled="${String(this.disabled) as 'true' | 'false'}"
           @keydown="${this.#onKeyDown}">${textSlot}</a>`}
      </span>
    `;
  }

  #onKeyDown(event: KeyboardEvent): void {
    if (this.disabled && event.key === 'Enter') {
      event.preventDefault();
    }
  }
}

export type TagColor = RhTag['color'];

declare global {
  interface HTMLElementTagNameMap {
    'rh-tag': RhTag;
  }
}
